/**
 * Intelligent Natural Language Chatbot Engine for Karnataka 4 Administrative Divisions
 * (Bengaluru, Belagavi, Kalaburagi, Mysuru)
 * Handles English, Kannada, and Romanized Kannada queries with semantic matching,
 * context memory, division filters, interactive college cards, and dynamic quick-reply chips.
 */

class BagalkotEduBot {
  constructor(collegesData, divisionsData) {
    this.colleges = collegesData || (typeof window !== 'undefined' ? window.BAGALKOT_COLLEGES_DATA : []) || [];
    this.divisions = divisionsData || (typeof window !== 'undefined' ? window.KARNATAKA_DIVISIONS : []) || [];
    this.conversationHistory = [];
    this.currentContext = {
      lastMentionedCollege: null,
      lastDivision: null,
      lastStream: null,
      lastDistrict: null,
      language: 'en'
    };
    this.speechSynth = (typeof window !== 'undefined' && 'speechSynthesis' in window) ? window.speechSynthesis : null;
    this.speechVoice = null;
    this.isVoiceMuted = false;
    if (typeof window !== 'undefined') {
      this.initSpeech();
    }
  }

  initSpeech() {
    if (this.speechSynth) {
      const loadVoices = () => {
        const voices = this.speechSynth.getVoices();
        this.speechVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-GB') || v.lang.includes('en-US')) || voices[0];
      };
      if (this.speechSynth.onvoiceschanged !== undefined) {
        this.speechSynth.onvoiceschanged = loadVoices;
      }
      loadVoices();
    }
  }

  speak(text) {
    if (!this.speechSynth || this.isVoiceMuted) return;
    try {
      this.speechSynth.cancel();
      // Strip HTML tags for speaking
      const plainText = text.replace(/<[^>]*>?/gm, '').replace(/[#*_`]/g, '').slice(0, 200);
      const utterance = new SpeechSynthesisUtterance(plainText);
      if (this.speechVoice) utterance.voice = this.speechVoice;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      this.speechSynth.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  /**
   * Main query processor
   */
  processQuery(userInput) {
    const rawInput = (userInput || "").trim();
    if (!rawInput) {
      return this.getHelpResponse();
    }

    const input = rawInput.toLowerCase();
    this.conversationHistory.push({ role: 'user', text: rawInput, timestamp: new Date() });

    // 1. Check for Greetings & Intro
    if (this.matchesAny(input, ['hi', 'hello', 'hey', 'namaskara', 'namaste', 'start', 'help', 'who are you', 'how can you help', 'ನಮಸ್ಕಾರ', 'ಹಲೋ'])) {
      return this.getGreetingResponse();
    }

    // 2. Check for Comparison Query ("compare rvce and sjce", "difference between snmc and bmcri")
    if (input.includes('compare') || input.includes('vs') || input.includes('difference between') || input.includes('ಹೋಲಿಕೆ')) {
      return this.handleComparisonQuery(input);
    }

    // 3. Check for VTU Engineering Colleges query
    if (this.matchesAny(input, ['vtu', 'v.t.u', 'visvesvaraya technological', 'ವಿಟಿಯು', 'vtu colleges', 'vtu engineering', 'vtu affiliated'])) {
      return this.handleVTUQuery(input);
    }

    // 4. Check for Stream / Branch queries (polytechnic, pharmacy, engineering, medical, degree, etc.)
    const matchedStream = this.findStreamMatch(input);
    if (matchedStream) {
      this.currentContext.lastStream = matchedStream;
      return this.handleStreamQuery(matchedStream, input);
    }

    // 5. Check for Specific College Matching
    const matchedCollege = this.findCollegeMatch(input);
    if (matchedCollege && !this.matchesAny(input, ['colleges', 'institutes', 'list', 'all', 'top', 'ಕಾಲೇಜುಗಳು'])) {
      this.currentContext.lastMentionedCollege = matchedCollege;
      return this.handleCollegeSpecificQuery(matchedCollege, input);
    }

    // 6. Check for Specific Division Matching (Bengaluru, Belagavi, Kalaburagi, Mysuru)
    const matchedDivision = this.findDivisionMatch(input);
    if (matchedDivision) {
      this.currentContext.lastDivision = matchedDivision;
      return this.handleDivisionQuery(matchedDivision, input);
    }

    // 7. If college matched even with plural
    if (matchedCollege) {
      this.currentContext.lastMentionedCollege = matchedCollege;
      return this.handleCollegeSpecificQuery(matchedCollege, input);
    }

    // 8. Check for Follow-up questions referencing the last mentioned college
    if (this.currentContext.lastMentionedCollege && this.isContextualFollowup(input)) {
      return this.handleCollegeSpecificQuery(this.currentContext.lastMentionedCollege, input);
    }

    // 7. Check for District Location query
    const matchedDistrict = this.findDistrictMatch(input);
    if (matchedDistrict) {
      this.currentContext.lastDistrict = matchedDistrict;
      return this.handleDistrictQuery(matchedDistrict, input);
    }

    // 8. Check for Course Specific Queries (BCA, B.Pharm, B.Sc Nursing, MBBS, BAMS, Diploma, MBA, B.Ed)
    const matchedCourse = this.findCourseMatch(input);
    if (matchedCourse) {
      return this.handleCourseQuery(matchedCourse, input);
    }

    // 9. Check for Admission / KEA / KCET / NEET / Documents / Eligibility Queries
    if (this.matchesAny(input, ['admission', 'apply', 'procedure', 'documents', 'eligibility', 'how to join', 'kcet', 'neet', 'uucms', 'dcet', 'pgcet', 'cutoff', 'seat allotment', 'ಪ್ರವೇಶ', 'ದಾಖಲಾತಿ'])) {
      return this.handleAdmissionGuideQuery(input);
    }

    // 10. Check for Hostel / Accommodation Queries
    if (this.matchesAny(input, ['hostel', 'room', 'stay', 'accommodation', 'mess', 'ವಸತಿ ನಿಲಯ', 'ಹಾಸ್ಟೆಲ್'])) {
      return this.handleHostelQuery(input);
    }

    // 11. Check for Fees / Low Cost / Free Education Queries
    if (this.matchesAny(input, ['fee', 'fees', 'cost', 'charge', 'annual fee', 'low fee', 'free education', 'free for girls', 'ಶುಲ್ಕ', 'ಫೀಸ್'])) {
      return this.handleFeeQuery(input);
    }

    // 12. Check for Scholarship Queries (SSP, Vidyasiri, BCM, NSP, Article 371J)
    if (this.matchesAny(input, ['scholarship', 'ssp', 'vidyasiri', 'bcm', 'nsp', 'financial aid', '371j', '371 j', 'concession', 'ವೇತನ', 'ಸ್ಕಾಲರ್‌ಶಿಪ್'])) {
      return this.handleScholarshipQuery();
    }

    // 13. Check for Direct Contact / Phone / Email Query
    if (this.matchesAny(input, ['contact', 'phone', 'mobile', 'call', 'email', 'number', 'address', 'location', 'ಸಂಪರ್ಕ'])) {
      return this.handleGeneralContactQuery(input);
    }

    // 14. Smart Multi-token Fuzzy Fallback Search
    const fallbackResults = this.searchCollegesByKeywords(input);
    if (fallbackResults.length > 0) {
      return this.renderCollegeListResponse(
        `Here are institutions in Karnataka matching "<strong>${this.escapeHtml(rawInput)}</strong>":`,
        fallbackResults,
        ["Tell me about " + fallbackResults[0].shortName, "Admission Procedure", "Fee Structure", "Hostel Available"]
      );
    }

    // 15. Unknown query - provide intelligent fallback with categorical suggestions
    return this.getHelpResponse(rawInput);
  }

  /* ------------------- Query Handlers ------------------- */

  getGreetingResponse() {
    return {
      text: `👋 <strong>Namaskara! Welcome to Karnataka EduConnect Assistant.</strong><br><br>
      Explore top accredited universities, engineering, medical, degree, and polytechnic colleges across all <strong>4 Administrative Divisions of Karnataka</strong>:<br>
      • 🏙️ <strong>Bengaluru Division:</strong> IISc, RVCE, BMSCE, MSRIT, BMCRI, PESU, SIT Tumkur<br>
      • 🏰 <strong>Belagavi Division:</strong> VTU, BEC Bagalkot, SNMC, JNMC Belagavi, KLE Tech Hubballi, SDMCET<br>
      • 🏛️ <strong>Kalaburagi Division:</strong> CUK, PDA College, MRMC, ESIC Medical, VIMS Ballari, RYMEC, GNDEC<br>
      • 👑 <strong>Mysuru Division:</strong> SJCE/JSS STU, MMCRI Mysore, NIE, NITK Surathkal, KMC Manipal, Sahyadri<br><br>
      What would you like to explore today?`,
      quickReplies: [
        "🏙️ Bengaluru Colleges",
        "🏰 Belagavi Colleges",
        "🏛️ Kalaburagi Colleges",
        "👑 Mysuru Colleges",
        "🏥 Top Medical (NEET)",
        "💻 Top Engineering (KCET)",
        "📝 Admission Guide"
      ]
    };
  }

  findDivisionMatch(input) {
    if (this.matchesAny(input, ['bengaluru', 'bangalore', 'bengalooru', 'ಬೆಂಗಳೂರು'])) return 'bengaluru';
    if (this.matchesAny(input, ['belagavi', 'belgaum', 'belagaavi', 'ಬೆಳಗಾವಿ', 'bagalkot', 'dharwad', 'hubballi', 'vijayapura'])) return 'belagavi';
    if (this.matchesAny(input, ['kalaburgi', 'kalaburagi', 'gulbarga', 'kalyana karnataka', 'hyderabad karnataka', 'ಕಲಬುರಗಿ', 'ಬಳ್ಳಾರಿ', 'ballari', 'bidar', 'raichur'])) return 'kalaburgi';
    if (this.matchesAny(input, ['mysuru', 'mysore', 'mangaluru', 'mangalore', 'dakshina kannada', 'udupi', 'manipal', 'hassan', 'ಮೈಸೂರು', 'ಮಂಗಳೂರು'])) return 'mysuru';
    return null;
  }

  handleDivisionQuery(divId, input) {
    const div = this.divisions.find(d => d.id === divId) || { name: divId };
    const filtered = this.colleges.filter(c => c.division === divId);

    return {
      text: `📍 <strong>${div.name} (${div.kannadaName || ''})</strong><br>
      <em>${div.tagline || ''}</em><br><br>
      🏛️ <strong>Districts Covered (${div.districtsCount || 'All'}):</strong> ${(div.districts || []).join(', ')}<br><br>
      Here are premier institutions listed in this division (${filtered.length} institutions):`,
      collegesList: filtered,
      quickReplies: [
        `Engineering in ${div.shortName || div.name}`,
        `Medical in ${div.shortName || div.name}`,
        `Admission Steps in ${div.shortName || div.name}`,
        "View All 4 Divisions"
      ]
    };
  }

  handleCollegeSpecificQuery(college, input) {
    const isFee = this.matchesAny(input, ['fee', 'fees', 'cost', 'charge', 'package', 'ಶುಲ್ಕ']);
    const isCourse = this.matchesAny(input, ['course', 'branch', 'seats', 'intake', 'specialization', 'ಕೊರ್ಸ್']);
    const isAdmission = this.matchesAny(input, ['admission', 'apply', 'eligibility', 'cutoff', 'process', 'how to join', 'ಪ್ರವೇಶ']);
    const isHostel = this.matchesAny(input, ['hostel', 'stay', 'mess', 'food', 'room', 'ಹಾಸ್ಟೆಲ್']);
    const isContact = this.matchesAny(input, ['contact', 'phone', 'call', 'email', 'address', 'where is', 'location', 'map', 'ಸಂಪರ್ಕ']);
    const isPlacement = this.matchesAny(input, ['placement', 'package', 'recruiter', 'salary', 'job', 'ಪ್ಲೇಸ್‌ಮೆಂಟ್']);

    const divName = this.divisions.find(d => d.id === college.division)?.name || college.division;
    let header = `🏛️ <strong>${college.name} (${college.shortName})</strong><br><span class="badge badge-accent">${college.type}</span> • <span class="badge">${college.district || college.taluk}</span> • <span class="badge badge-outline">${divName}</span> • <span class="badge">NAAC ${college.naacGrade}</span><br><br>`;
    let body = "";

    if (isFee) {
      body = `💰 <strong>Fee Structure Overview:</strong><br><br><ul class="detail-list">` +
        college.courses.map(c => `<li><strong>${c.name} (${c.level}):</strong> <span class="text-highlight">${c.annualFee}</span></li>`).join('') +
        `</ul><br>💡 <em>Note: Fee concessions & full reimbursement available through SSP & BCM for eligible SC/ST/OBC/Minority students.</em>`;
    } else if (isCourse) {
      body = `📚 <strong>Courses Offered & Seats:</strong><br><br><ul class="detail-list">` +
        college.courses.map(c => `<li><strong>${c.name}</strong><br>• Duration: ${c.duration} | Seats: ${c.seats || 'As per norms'}<br>• Annual Fee: <strong>${c.annualFee}</strong><br>• Eligibility: <em>${c.eligibility}</em></li>`).join('') +
        `</ul>`;
    } else if (isAdmission) {
      body = `📝 <strong>Admission Procedure & Eligibility:</strong><br><br>
        <p>${college.admissionProcess.replace(/\n/g, '<br>')}</p><br>
        <strong>Entrance Exam:</strong> ${college.courses.map(c => c.entranceExam).filter((v, i, a) => a.indexOf(v) === i).join(', ')}`;
    } else if (isHostel) {
      body = `🏡 <strong>Hostel & Campus Living:</strong><br><br>
        <p><strong>Available:</strong> ${college.hostelAvailable ? '✅ Yes (Separate Boys & Girls Hostels)' : '❌ External PG/Govt Hostels available'}</p>
        <p>${college.hostelDetails || 'Secure hostel accommodation with mess, Wi-Fi, and 24/7 security.'}</p>`;
    } else if (isContact) {
      body = `📞 <strong>Address & Contact Details:</strong><br><br>
        📍 <strong>Address:</strong> ${college.address}<br>
        📞 <strong>Phone:</strong> <a href="tel:${college.phone.split(',')[0].trim()}" class="chat-link">${college.phone}</a><br>
        ✉️ <strong>Email:</strong> <a href="mailto:${college.email.split(',')[0].trim()}" class="chat-link">${college.email}</a><br>
        🌐 <strong>Website:</strong> <a href="${college.website}" target="_blank" rel="noopener" class="chat-link">${college.website}</a><br>
        🗺️ <strong>Google Maps:</strong> <a href="https://maps.google.com/?q=${college.mapQuery}" target="_blank" class="btn btn-sm btn-outline mt-2">Open Map Directions ↗</a>`;
    } else if (isPlacement) {
      const pl = college.placementStats;
      body = `💼 <strong>Placement & Career Track Record:</strong><br><br>
        • <strong>Average Package:</strong> ${pl.averagePackage || '₹4.5 LPA'}<br>
        • <strong>Highest Package:</strong> ${pl.highestPackage || '₹18.0 LPA'}<br>
        • <strong>Placement Rate:</strong> ${pl.placedPercentage || '85%+'}<br>
        • <strong>Top Recruiters:</strong> ${(pl.topRecruiters || []).join(', ')}`;
    } else {
      // General overview card
      body = `<p>${college.description}</p><br>
        <strong>Key Highlights:</strong><br>
        • 🎓 <strong>Affiliation:</strong> ${college.affiliation}<br>
        • 📍 <strong>Location:</strong> ${college.address}<br>
        • 📞 <strong>Helpline:</strong> ${college.phone}<br>
        • 🏡 <strong>Hostel:</strong> ${college.hostelAvailable ? 'Available on campus' : 'External tie-ups'}<br>
        • ⭐ <strong>Rating:</strong> ${college.rating} / 5.0`;
    }

    return {
      text: header + body,
      collegeCard: college,
      quickReplies: [
        `Courses at ${college.shortName}`,
        `Fees at ${college.shortName}`,
        `Admission to ${college.shortName}`,
        `Contact ${college.shortName}`,
        "🏛️ Compare with other colleges",
        "📋 Generate Inquiry Slip"
      ]
    };
  }

  handleStreamQuery(streamId, input) {
    let filtered = this.colleges.filter(c => c.stream === streamId || (streamId === 'medical' && c.stream === 'dental'));
    const streamName = (typeof window !== 'undefined' && window.STREAM_CATEGORIES)?.find(s => s.id === streamId)?.name || streamId;
    
    // Check if user also specified a division in the query (e.g. "degree in bengaluru", "polytechnic in belagavi")
    const matchedDiv = this.findDivisionMatch(input);
    let title = "";
    if (matchedDiv) {
      filtered = filtered.filter(c => c.division === matchedDiv);
      const divName = this.divisions.find(d => d.id === matchedDiv)?.name || matchedDiv;
      title = `Found <strong>${filtered.length} premier ${streamName} institutions</strong> in <strong>${divName}</strong>:`;
    } else {
      title = `Found <strong>${filtered.length} premier ${streamName} institutions</strong> across Karnataka:`;
    }

    return this.renderCollegeListResponse(
      title,
      filtered,
      [
        "Top colleges in Bengaluru",
        "Top colleges in Belagavi",
        "Top colleges in Kalaburagi",
        "Top colleges in Mysuru",
        "Admission procedure & KEA steps"
      ]
    );
  }

  handleDistrictQuery(distName, input) {
    const filtered = this.colleges.filter(c => (c.district || c.taluk || '').toLowerCase().includes(distName.toLowerCase()));
    return this.renderCollegeListResponse(
      `Found <strong>${filtered.length} institutions</strong> located in <strong>${distName}</strong>:`,
      filtered,
      [
        `Engineering in ${distName}`,
        `Medical in ${distName}`,
        "View all Karnataka colleges"
      ]
    );
  }

  handleCourseQuery(courseKey, input) {
    const normalizedKey = courseKey.toLowerCase();
    const matchedColleges = this.colleges.filter(col =>
      col.courses.some(c => c.name.toLowerCase().includes(normalizedKey))
    );

    if (matchedColleges.length === 0) {
      return {
        text: `I couldn't locate specific colleges offering "<strong>${courseKey}</strong>". Would you like to explore related streams?`,
        quickReplies: ["B.E. Computer Science", "MBBS Medical", "B.Sc Degree", "BCA", "B.Pharm Pharmacy"]
      };
    }

    return {
      text: `🎓 <strong>Colleges offering ${courseKey.toUpperCase()} in Karnataka (${matchedColleges.length}):</strong><br><br>
      Here are the institutions offering ${courseKey.toUpperCase()} with seats and fee details:`,
      collegesList: matchedColleges,
      quickReplies: [
        `Eligibility for ${courseKey}`,
        `Fee range for ${courseKey}`,
        "How to apply via KEA/NEET",
        "Download Enquiry Card"
      ]
    };
  }

  handleAdmissionGuideQuery(input) {
    return {
      text: `📋 <strong>Karnataka State Centralized Admissions Guide (2025 - 2027)</strong><br><br>
      Admissions in Karnataka higher education institutions are structured under centralized state portals across all 4 divisions:
      <br><br>
      <strong>1. Engineering & Technology (B.E./B.Tech):</strong><br>
      • Conducted by <strong>KEA (KCET)</strong> for Karnataka students & <strong>COMEDK / JoSAA</strong>.<br>
      • Minimum 45% in 12th/PUC (PCM).<br>
      • Premier institutes: RVCE (E005), BMSCE (E003), SJCE (E024), BEC Bagalkot (E017), PDA Kalaburagi (E019), SIT Tumkur (E011), NIE (E004), NITK Surathkal.
      <br><br>
      <strong>2. Medical (MBBS), Dental (BDS) & AYUSH (BAMS):</strong><br>
      • Purely based on <strong>NEET UG</strong> score via KEA Centralized State Counseling (kea.kar.nic.in) & MCC (mcc.nic.in).<br>
      • BMCRI Bengaluru, MMCRI Mysuru, VIMS Ballari, SNMC Bagalkot, MRMC Kalaburagi, JNMC Belagavi, KMC Manipal/Mangalore.
      <br><br>
      <strong>3. General Degree & Research (BCA, B.Com, B.Sc, BBA, BA):</strong><br>
      • Single-window admission through <strong>Karnataka UUCMS Portal</strong> (uucms.karnataka.gov.in) & direct university portals (IISc, CUK, St. Aloysius).
      <br><br>
      <strong>4. Article 371(J) Special Reservation:</strong><br>
      • 8% state-level and 70% regional-level reservation for students from <strong>Kalaburagi Division</strong> (Kalaburagi, Bidar, Ballari, Raichur, Koppal, Yadgir, Vijayanagara).
      <br><br>
      📁 <strong>Required Documents Checklist:</strong><br>
      10th & 12th Marks Cards, Transfer Certificate (TC), 7 Years Study Certificate (for KEA Quota), Caste & Income Certificate (RD Number for SSP), Aadhaar Card, Passport Photos.`,
      quickReplies: [
        "Engineering KCET Steps",
        "NEET MBBS Counseling",
        "Article 371(J) Rules",
        "UUCMS Degree Registration",
        "Required Documents Checklist"
      ]
    };
  }

  handleVTUQuery(input) {
    const vtuColleges = this.colleges.filter(c => 
      c.stream === 'engineering' && (
        c.affiliation?.toLowerCase().includes('visvesvaraya') || 
        c.affiliation?.toLowerCase().includes('vtu') ||
        c.type?.toLowerCase().includes('technological university')
      )
    );

    const bngVTU = vtuColleges.filter(c => c.division === 'bengaluru');
    const belagaviVTU = vtuColleges.filter(c => c.division === 'belagavi');
    const kalaburgiVTU = vtuColleges.filter(c => c.division === 'kalaburgi');
    const mysuruVTU = vtuColleges.filter(c => c.division === 'mysuru');

    // If specific division is requested
    const targetDiv = this.findDivisionMatch(input);
    if (targetDiv === 'bengaluru') {
      return {
        text: `💻 <strong>VTU Engineering Colleges in Bengaluru Division (${bngVTU.length} Colleges):</strong><br><br>
        Autonomous & Affiliated VTU institutions in Bengaluru Urban, Rural, Tumakuru, Shivamogga, Davanagere, Kolar, and Chikkaballapura:`,
        collegesList: bngVTU,
        quickReplies: ["RVCE Bengaluru", "BMSCE Basavanagudi", "MSRIT Ramaiah", "SIT Tumakuru", "VTU Colleges in Belagavi"]
      };
    } else if (targetDiv === 'belagavi') {
      return {
        text: `💻 <strong>VTU Engineering Colleges in Belagavi Division (${belagaviVTU.length} Colleges):</strong><br><br>
        Home of VTU Headquarters (Jnana Sangama), BEC Bagalkot, KLS GIT, SGBIT, AITM, KLE Tech, SDMCET Dharwad, BLDEA Vijayapura, KLS VDIT Haliyal, GEC Haveri, and TCE Gadag:`,
        collegesList: belagaviVTU,
        quickReplies: ["VTU Belagavi HQs", "BEC Bagalkot", "KLS GIT Belagavi", "KLE Tech Hubballi", "VTU Colleges in Mysuru"]
      };
    } else if (targetDiv === 'kalaburgi') {
      return {
        text: `💻 <strong>VTU Engineering Colleges in Kalaburagi Division (${kalaburgiVTU.length} Colleges):</strong><br><br>
        Kalyana Karnataka region VTU institutions entitled to Article 371(J) benefits including PDA Kalaburagi, GNDEC Bidar, BKIT Bhalki, RYMEC Ballari, BITM Ballari, GEC Raichur, and PDIT Hosapete:`,
        collegesList: kalaburgiVTU,
        quickReplies: ["PDA Kalaburagi", "GNDEC Bidar", "BKIT Bhalki", "RYMEC Ballari", "BITM Ballari"]
      };
    } else if (targetDiv === 'mysuru') {
      return {
        text: `💻 <strong>VTU & Premier Engineering Colleges in Mysuru Division (${mysuruVTU.length} Colleges):</strong><br><br>
        Premier institutions across Mysuru, Dakshina Kannada, Udupi, Hassan, Mandya, Chikkamagaluru, and Kodagu including SJCE / JSS STU, NIE Mysuru, VVCE, GSSSIETW, MCE Hassan, PESCE Mandya, Sahyadri Mangaluru, SJEC Vamanjoor, Canara, MITE Moodabidri, and AIT Chikkamagaluru:`,
        collegesList: mysuruVTU,
        quickReplies: ["SJCE Mysuru", "NIE Mysuru", "VVCE Mysuru", "MCE Hassan", "PESCE Mandya", "Sahyadri Mangaluru"]
      };
    }

    return {
      text: `💻 <strong>Visvesvaraya Technological University (VTU) Engineering Colleges in Karnataka:</strong><br><br>
      VTU governs autonomous, constituent, and affiliated engineering colleges across all 4 regional administrative divisions:<br><br>
      • 🏙️ <strong>Bengaluru Region (${bngVTU.length} Listed):</strong> RVCE, BMSCE, MSRIT, DSCE, BIT, Sir MVIT, BMSIT, RNSIT, NMIT, Dr. AIT, NHCE, TOCE, CIT, GAT, Acharya, SJBIT, MVJCE, CMRIT, DSATM, EWIT, DBIT, KSIT, Atria, HKBK, Vemana, SVIT, NCET, SVCE, SIT Tumkur, JNNCE Shivamogga, UBDT Davanagere, BIET, GMIT, SJCIT.<br><br>
      • 🏰 <strong>Belagavi Region (Headquarters & ${belagaviVTU.length} Listed):</strong> VTU Jnana Sangama HQs, BEC Bagalkot, KLS GIT Belagavi, SGBIT, AITM, JCE, MMEC, KLE Tech BVB, SDMCET Dharwad, AGMR Hubballi, BLDEA Vijayapura, SECAB, KLS VDIT Haliyal, AITM Bhatkal, GEC Haveri, STJIT Ranebennur, TCE Gadag, GEC Nargund.<br><br>
      • 🏛️ <strong>Kalaburagi Region (${kalaburgiVTU.length} Listed - 371J):</strong> PDA Kalaburagi, KBNCE, Appa Institute, Godutai Women, GNDEC Bidar, BKIT Bhalki, RYMEC Ballari, BITM Ballari, GEC Raichur, PDIT Hosapete, GEC Koppal, GEC Yadgir.<br><br>
      • 👑 <strong>Mysuru Region (${mysuruVTU.length} Listed):</strong> SJCE (JSS STU), NIE Mysuru, VVCE, GSSSIETW, MIT Mysore, ATME, MCE Hassan, GEC Hassan, Bahubali BCE, PESCE Mandya, BGSIT, GEC KR Pet, Sahyadri Mangaluru, SJEC Vamanjoor, Canara CEC, MITE Moodabidri, AJIET, Alva's, SMVITM Udupi, AIT Chikkamagaluru, GEC Kushalnagar, GEC Chamarajanagar.<br><br>
      <em>KEA KCET Counseling is the official single-window admission portal for all VTU seats.</em>`,
      collegesList: vtuColleges.slice(0, 10),
      quickReplies: [
        "VTU Colleges in Bengaluru",
        "VTU Colleges in Belagavi",
        "VTU Colleges in Kalaburagi",
        "VTU Colleges in Mysuru",
        "KCET Option Entry Codes"
      ]
    };
  }

  handleHostelQuery(input) {
    const hostelColleges = this.colleges.filter(c => c.hostelAvailable);
    return {
      text: `🏡 <strong>Hostel & Campus Living Facilities in Karnataka</strong><br><br>
      All premier universities and colleges featured on this portal provide secure on-campus residential facilities:
      <br><br>
      <strong>Top Campus Hostels by Division:</strong>
      <ul>
        <li>🏙️ <strong>Bengaluru:</strong> IISc (Research Hostels), RVCE (2000+ capacity), BMSCE, PES University.</li>
        <li>🏰 <strong>Belagavi:</strong> VTU Jnana Sangama, BEC Bagalkot (Vidyagiri), JNMC & KLES Belagavi, SDMCET Dharwad.</li>
        <li>🏛️ <strong>Kalaburagi:</strong> CUK Kadaganchi (654-acre campus), PDA College, ESIC Medical Sedam Road.</li>
        <li>👑 <strong>Mysuru:</strong> NITK Surathkal (Beachfront mega-hostels), SJCE/JSS STU (102-acre campus), KMC Mangalore.</li>
      </ul>
      💡 <strong>Government Hostels:</strong> Eligible SC/ST/OBC students can apply for <strong>BCM & Social Welfare Department Hostels</strong> across all 31 districts for 100% free food and accommodation under Karnataka Govt schemes.`,
      collegesList: hostelColleges.slice(0, 6),
      quickReplies: ["RVCE Hostels", "NITK Hostels", "BEC Bagalkot Hostels", "BCM Govt Hostels"]
    };
  }

  handleFeeQuery(input) {
    return {
      text: `💰 <strong>Tuition Fee Guidelines across Karnataka Institutions:</strong><br><br>
      <strong>1. Government Engineering Colleges & Govt Seats (KEA):</strong> ₹45,000 - ₹1,07,000 / Year.<br>
      <strong>2. Private Engineering (COMED-K):</strong> ₹1,50,000 - ₹2,50,000 / Year.<br>
      <strong>3. Government Medical Colleges (BMCRI, MMCRI, VIMS):</strong> ₹65,000 / Year.<br>
      <strong>4. Private Medical Colleges (Govt Quota in SNMC, MRMC):</strong> ₹1,45,000 / Year.<br>
      <strong>5. Central Universities (IISc, CUK, NITK):</strong> Subsidized Central Govt rates with full fee waivers for SC/ST and low-income families.<br>
      <strong>6. General Degree Colleges (GFGC / Aided):</strong> ₹3,000 - ₹25,000 / Year.<br><br>
      💡 <em>100% Fee reimbursement and hostel allowances are provided by Karnataka State Government via SSP Post-Matric Scholarship portal.</em>`,
      quickReplies: [
        "SSP Scholarship Guide",
        "Low Fee Colleges",
        "Free Education Schemes",
        "View All Colleges"
      ]
    };
  }

  handleScholarshipQuery() {
    return {
      text: `🎓 <strong>Scholarships & Financial Aid Schemes in Karnataka (2025 - 2027)</strong><br><br>
      <strong>1. State Scholarship Portal (SSP Karnataka - ssp.postmatric.karnataka.gov.in):</strong><br>
      • Full fee reimbursement + maintenance allowance for SC/ST/OBC/Minority students in Engineering, Medical, and Degree courses.<br><br>
      <strong>2. Vidyasiri (Food and Accommodation Scheme):</strong><br>
      • ₹1,500/month for students not accommodated in government hostels.<br><br>
      <strong>3. Article 371(J) Special Kalyana Karnataka Benefits:</strong><br>
      • Subsidized fees, dedicated reservation quotas, and special welfare grants.<br><br>
      <strong>4. National Scholarship Portal (NSP) & AICTE Pragati:</strong><br>
      • ₹50,000/year for meritorious girl students in technical degrees.<br><br>
      <strong>5. Institutional & Philanthropic Trusts:</strong><br>
      • B.V.V. Sangha, JSS Mahavidyapeetha, RSST, KLE Society, and SDM Educational Trust merit freeships.`,
      quickReplies: [
        "How to apply for SSP",
        "Article 371(J) Benefits",
        "Engineering Fee Concessions",
        "Medical Scholarship Rules"
      ]
    };
  }

  handleComparisonQuery(input) {
    // Find mentioned colleges
    const matched = [];
    for (const c of this.colleges) {
      if (input.includes(c.shortName.toLowerCase()) || input.includes(c.id.toLowerCase()) || input.includes(c.name.toLowerCase().split(' ')[0])) {
        if (!matched.find(m => m.id === c.id)) matched.push(c);
      }
    }

    if (matched.length >= 2) {
      const c1 = matched[0];
      const c2 = matched[1];
      return {
        text: `⚖️ <strong>Side-by-Side Comparison: ${c1.shortName} vs ${c2.shortName}</strong><br><br>
        <table class="chat-compare-table">
          <tr><th>Feature</th><th>${c1.shortName}</th><th>${c2.shortName}</th></tr>
          <tr><td><strong>Division</strong></td><td>${c1.division.toUpperCase()}</td><td>${c2.division.toUpperCase()}</td></tr>
          <tr><td><strong>District</strong></td><td>${c1.district || c1.taluk}</td><td>${c2.district || c2.taluk}</td></tr>
          <tr><td><strong>Type</strong></td><td>${c1.type}</td><td>${c2.type}</td></tr>
          <tr><td><strong>Estd Year</strong></td><td>${c1.established}</td><td>${c2.established}</td></tr>
          <tr><td><strong>NAAC / Rating</strong></td><td>NAAC ${c1.naacGrade} (${c1.rating}★)</td><td>NAAC ${c2.naacGrade} (${c2.rating}★)</td></tr>
          <tr><td><strong>Avg Placement</strong></td><td>${c1.placementStats?.averagePackage || 'N/A'}</td><td>${c2.placementStats?.averagePackage || 'N/A'}</td></tr>
          <tr><td><strong>Hostel</strong></td><td>${c1.hostelAvailable ? '✅ Yes' : '❌ No'}</td><td>${c2.hostelAvailable ? '✅ Yes' : '❌ No'}</td></tr>
        </table><br>
        👉 Use our interactive <strong>Comparison Dock</strong> on the website to compare up to 3 colleges side-by-side with full curriculum diffs!`,
        quickReplies: [
          `Details of ${c1.shortName}`,
          `Details of ${c2.shortName}`,
          "Compare Other Colleges"
        ]
      };
    }

    return {
      text: `To compare colleges, you can ask for example:<br>
      • <em>"Compare RVCE and SJCE Mysuru"</em><br>
      • <em>"Compare BMCRI and MMCRI"</em><br>
      • <em>"Compare BEC Bagalkot and PDA Kalaburagi"</em><br><br>
      Or click the <strong>'Compare'</strong> button on any college card on the screen!`,
      quickReplies: ["Compare RVCE vs SJCE", "Compare BMCRI vs MMCRI", "Compare BEC vs PDA"]
    };
  }

  handleGeneralContactQuery(input) {
    return {
      text: `📞 <strong>Karnataka Higher Education Central Helpline & Directorate:</strong><br><br>
      • <strong>KEA KCET Helpline:</strong> 080 - 23460460 | <a href="https://kea.kar.nic.in" target="_blank" class="chat-link">kea.kar.nic.in</a><br>
      • <strong>Department of Higher Education (UUCMS):</strong> 080 - 22340555 | <a href="https://uucms.karnataka.gov.in" target="_blank" class="chat-link">uucms.karnataka.gov.in</a><br>
      • <strong>DTE Karnataka Polytechnic:</strong> 080 - 22356949 | <a href="https://dte.karnataka.gov.in" target="_blank" class="chat-link">dte.karnataka.gov.in</a><br>
      • <strong>RGUHS Health Sciences:</strong> 080 - 26961933 | <a href="https://rguhs.ac.in" target="_blank" class="chat-link">rguhs.ac.in</a><br>
      • <strong>VTU Belagavi Technical:</strong> 0831 - 2498100 | <a href="https://vtu.ac.in" target="_blank" class="chat-link">vtu.ac.in</a>`,
      quickReplies: ["KEA KCET Website", "UUCMS Degree Portal", "VTU Helpline", "View Colleges List"]
    };
  }

  getHelpResponse(query) {
    return {
      text: `🤔 I can help you with comprehensive guidance across Karnataka's 4 divisions:<br><br>
      • 🏙️ <strong>Divisions:</strong> Bengaluru, Belagavi, Kalaburagi, Mysuru<br>
      • 🎓 <strong>Streams:</strong> Engineering (B.E./B.Tech), Medical (MBBS), Dental (BDS), AYUSH (BAMS), Degree (BCA/B.Sc/B.Com), Polytechnic<br>
      • 📝 <strong>Admissions:</strong> KCET Cutoffs, NEET Counseling, UUCMS, Article 371(J) Reservations<br>
      • 💰 <strong>Fees & Hostels:</strong> Fee structures, campus hostels, SSP post-matric scholarships<br><br>
      Try asking: <em>"Show top colleges in Bengaluru division"</em> or <em>"Medical colleges in Kalaburagi"</em>.`,
      quickReplies: [
        "🏙️ Bengaluru Division",
        "🏰 Belagavi Division",
        "🏛️ Kalaburagi Division",
        "👑 Mysuru Division",
        "🏥 NEET Medical Colleges",
        "💻 KCET Engineering Colleges"
      ]
    };
  }

  /* ------------------- Matcher Helpers ------------------- */

  findCollegeMatch(input) {
    const clean = input.toLowerCase();
    for (const c of this.colleges) {
      if (clean.includes(c.id.toLowerCase()) || clean.includes(c.shortName.toLowerCase())) {
        return c;
      }
      const words = c.name.toLowerCase().split(' ');
      if (words.some(w => w.length > 3 && clean.includes(w)) && clean.includes(c.shortName.split(' ')[0].toLowerCase())) {
        return c;
      }
    }
    // Check Kannada names
    for (const c of this.colleges) {
      if (c.kannadaName && clean.includes(c.kannadaName.toLowerCase())) return c;
    }
    return null;
  }

  findStreamMatch(input) {
    if (this.matchesAny(input, ['engineering', 'b.e', 'b.tech', 'be', 'btech', 'tech', 'ಇಂಜಿನಿಯರಿಂಗ್', 'ತಾಂತ್ರಿಕ'])) return 'engineering';
    if (this.matchesAny(input, ['medical', 'mbbs', 'doctor', 'ವೈದ್ಯಕೀಯ', 'hospital'])) return 'medical';
    if (this.matchesAny(input, ['dental', 'bds', 'teeth', 'ದಂತ'])) return 'medical';
    if (this.matchesAny(input, ['ayush', 'ayurveda', 'bams', 'ಆಯುರ್ವೇದ'])) return 'ayush';
    if (this.matchesAny(input, ['pharmacy', 'b.pharm', 'd.pharm', 'ಔಷಧ'])) return 'pharmacy';
    if (this.matchesAny(input, ['nursing', 'b.sc nursing', 'gnm', 'ಶುಶ್ರೂಷಾ'])) return 'nursing';
    if (this.matchesAny(input, ['degree', 'bca', 'b.com', 'b.sc', 'ba', 'bba', 'ಪದವಿ'])) return 'degree';
    if (this.matchesAny(input, ['polytechnic', 'diploma', 'ಪಾಲಿಟೆಕ್ನಿಕ್'])) return 'polytechnic';
    if (this.matchesAny(input, ['law', 'llb', 'advocate', 'ಕಾನೂನು'])) return 'law';
    if (this.matchesAny(input, ['mba', 'management', 'ನಿರ್ವಹಣೆ'])) return 'management';
    return null;
  }

  findDistrictMatch(input) {
    const districts = [
      'bengaluru', 'tumakuru', 'shivamogga', 'davanagere', 'kolar', 'chikkaballapura', 'ramanagara', 'chitradurga',
      'belagavi', 'bagalkot', 'dharwad', 'hubballi', 'vijayapura', 'gadag', 'haveri', 'uttara kannada', 'karwar',
      'kalaburagi', 'gulbarga', 'ballari', 'bidar', 'raichur', 'koppal', 'yadgir', 'vijayanagara',
      'mysuru', 'mysore', 'dakshina kannada', 'mangaluru', 'mangalore', 'udupi', 'manipal', 'hassan', 'mandya', 'chikkamagaluru', 'chamarajanagar', 'kodagu'
    ];
    for (const d of districts) {
      if (input.includes(d)) return d;
    }
    return null;
  }

  findCourseMatch(input) {
    const courses = [
      'computer science', 'cse', 'ai & ml', 'aiml', 'artificial intelligence', 'data science',
      'mbbs', 'bds', 'bams', 'bca', 'b.com', 'b.sc', 'bba', 'b.pharm', 'd.pharm', 'nursing',
      'civil engineering', 'mechanical engineering', 'ece', 'electronics', 'diploma', 'mba', 'mca', 'm.tech'
    ];
    for (const cr of courses) {
      if (input.includes(cr)) return cr;
    }
    return null;
  }

  searchCollegesByKeywords(input) {
    const tokens = input.toLowerCase().split(/\s+/).filter(t => t.length > 2);
    if (tokens.length === 0) return [];

    return this.colleges.filter(col => {
      const target = `${col.name} ${col.kannadaName || ''} ${col.shortName} ${col.division} ${col.district || ''} ${col.taluk || ''} ${col.stream} ${col.tagline}`.toLowerCase();
      return tokens.some(tok => target.includes(tok));
    }).slice(0, 6);
  }

  renderCollegeListResponse(title, list, quickReplies) {
    return {
      text: `${title}`,
      collegesList: list,
      quickReplies: quickReplies || ["Admission Process", "Fee Details", "Hostel Facilities", "Compare Colleges"]
    };
  }

  matchesAny(input, keywords) {
    return keywords.some(k => input.includes(k));
  }

  isContextualFollowup(input) {
    return this.matchesAny(input, ['fee', 'cost', 'admission', 'eligibility', 'hostel', 'course', 'branch', 'seats', 'phone', 'contact', 'address', 'placement', 'package', 'rating']);
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

// Export to window
if (typeof window !== "undefined") {
  window.BagalkotEduBot = BagalkotEduBot;
}
