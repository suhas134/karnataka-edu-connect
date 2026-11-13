const fs = require('fs');

const bngDegree = require('./data-bengaluru-degree.js');
const bngEngg = require('./data-bengaluru-engineering.js');
const bngMedAyush = require('./data-bengaluru-medical-ayush.js');
const bngPolytechnic = require('./data-bengaluru-polytechnic.js');
const bngPharmacy = require('./data-bengaluru-pharmacy.js');
const belagavi = require('./data-belagavi.js');
const kalaburgi = require('./data-kalaburgi.js');
const mysuru = require('./data-mysuru.js');

const allColleges = [
  ...bngDegree,
  ...bngEngg,
  ...bngMedAyush,
  ...bngPolytechnic,
  ...bngPharmacy,
  ...belagavi,
  ...kalaburgi,
  ...mysuru
];

console.log('Total Colleges compiled:', allColleges.length);

const counts = {};
allColleges.forEach(c => {
  counts[c.division] = (counts[c.division] || 0) + 1;
});
console.log('Division-wise counts:', counts);

const streams = {};
allColleges.forEach(c => {
  streams[c.stream] = (streams[c.stream] || 0) + 1;
});
console.log('Stream-wise counts:', streams);

// Master JS Template
const masterContent = `// Karnataka Comprehensive College Directory Data
// Divided across the 4 Official Administrative Revenue Divisions of Karnataka:
// 1. Bengaluru Division (ಬೆಂಗಳೂರು ವಿಭಾಗ)
// 2. Belagavi Division (ಬೆಳಗಾವಿ ವಿಭಾಗ)
// 3. Kalaburagi Division (ಕಲಬುರಗಿ ವಿಭಾಗ - Kalyana Karnataka)
// 4. Mysuru Division (ಮೈಸೂರು ವಿಭಾಗ)

// 4 Administrative Divisions of Karnataka
const KARNATAKA_DIVISIONS = [
  {
    id: "all",
    name: "All Karnataka",
    kannadaName: "ಸಮಗ್ರ ಕರ್ನಾಟಕ",
    shortName: "All Divisions",
    tagline: "Explore Higher Education Institutions across all 4 Divisions & 31 Districts of Karnataka",
    hq: "Statewide (ರಾಜ್ಯವ್ಯಾಪಿ)",
    districtsCount: 31,
    icon: "fa-solid fa-map-location-dot",
    badgeColor: "#6366f1",
    districts: ["All Karnataka Districts"]
  },
  {
    id: "bengaluru",
    name: "Bengaluru Division",
    kannadaName: "ಬೆಂಗಳೂರು ವಿಭಾಗ",
    shortName: "Bengaluru",
    tagline: "Global Tech Capital & South Asia's Premier Research, Degree, VTU Engineering, Medical & AYUSH Hub",
    hq: "Bengaluru (ಬೆಂಗಳೂರು)",
    districtsCount: 9,
    icon: "fa-solid fa-city",
    badgeColor: "#0284c7",
    districts: ["Bengaluru Urban", "Bengaluru Rural", "Ramanagara", "Chikkaballapura", "Kolar", "Tumakuru", "Shivamogga", "Chitradurga", "Davanagere"],
    description: "The academic and technical capital of Karnataka housing world-renowned research institutes (IISc), top autonomous & common degree colleges (St. Joseph's, Mount Carmel, Christ, MES, National College, Maharani Cluster University, GFGCs), autonomous VTU engineering institutions (RVCE, BMSCE, MSRIT, PESU, DSCE, BIT, MVIT, BMSIT, RNSIT, NMIT, Dr. AIT, NHCE, TOCE, CIT, GAT, Acharya, SJBIT, MVJCE, CMRIT, SIT Tumkur, JNNCE Shivamogga, UBDT Davanagere), premier medical institutions (BMCRI, St. John's, Ramaiah, KIMS, Bowring), AYUSH & Ayurvedic centers (GAMC Dhanvanthri Road, Sri Sri, SDM Ayurveda, GHMC, GUMC, S-VYASA), and NLSIU Law."
  },
  {
    id: "belagavi",
    name: "Belagavi Division",
    kannadaName: "ಬೆಳಗಾವಿ ವಿಭಾಗ",
    shortName: "Belagavi",
    tagline: "North Karnataka Technical & Medical Hub - Home of VTU Headquarters, Heritage Universities & B.V.V. Sangha",
    hq: "Belagavi (ಬೆಳಗಾವಿ)",
    districtsCount: 7,
    icon: "fa-solid fa-fort-awesome",
    badgeColor: "#10b981",
    districts: ["Belagavi", "Bagalkot", "Vijayapura", "Dharwad", "Gadag", "Haveri", "Uttara Kannada (Karwar)"],
    description: "North-Western Karnataka's technical and healthcare heartland hosting Visvesvaraya Technological University (VTU) headquarters, historic Basaveshwar Engineering College (BEC Bagalkot), KLS GIT Belagavi, KLE Tech (BVB Hubballi), SDMCET Dharwad, BLDEA Vijayapura, BGMIT Mudhol, GEC Haveri, SNMC Medical, and JNMC Belagavi."
  },
  {
    id: "kalaburgi",
    name: "Kalaburagi Division",
    kannadaName: "ಕಲಬುರಗಿ ವಿಭಾಗ (Kalyana Karnataka)",
    shortName: "Kalaburagi",
    tagline: "Kalyana Karnataka Regional Hub with Central University, High-Tech VTU Engineering & Medical Centers",
    hq: "Kalaburagi (ಕಲಬುರಗಿ)",
    districtsCount: 7,
    icon: "fa-solid fa-landmark-dome",
    badgeColor: "#f59e0b",
    districts: ["Kalaburagi", "Bidar", "Ballari", "Raichur", "Koppal", "Yadgir", "Vijayanagara"],
    description: "The historical Kalyana Karnataka region (Article 371J beneficiary) hosting Central University of Karnataka (CUK), Poojya Doddappa Appa (PDA) Engineering, Guru Nanak Dev (GNDEC Bidar), BKIT Bhalki, RYMEC & BITM Ballari, GEC Raichur, PDIT Hosapete, MR Medical College, ESIC Medical College, and VIMS Ballari."
  },
  {
    id: "mysuru",
    name: "Mysuru Division",
    kannadaName: "ಮೈಸೂರು ವಿಭಾಗ",
    shortName: "Mysuru",
    tagline: "Royal Cultural & Coastal Higher Education Capital - University of Mysore, NITK Surathkal & VTU Centers",
    hq: "Mysuru (ಮೈಸೂರು)",
    districtsCount: 8,
    icon: "fa-solid fa-crown",
    badgeColor: "#d946ef",
    districts: ["Mysuru", "Chamarajanagar", "Mandya", "Hassan", "Kodagu (Coorg)", "Dakshina Kannada (Mangaluru)", "Udupi", "Chikkamagaluru"],
    description: "Celebrated for century-old academic traditions and coastal educational excellence. Home to century-old University of Mysore, SJCE / JSS Science & Technology University, NIE Mysuru, VVCE Mysuru, GSSSIETW, MCE Hassan, PESCE Mandya, Sahyadri Mangaluru, SJEC Vamanjoor, AIT Chikkamagaluru, GEC Kushalnagar, NITK Surathkal, MMCRI, and KMC Mangaluru."
  }
];

// District Mapping for Karnataka
const KARNATAKA_DISTRICTS = [
  { id: "all", name: "All Districts (ಸಮಗ್ರ ಜಿಲ್ಲೆಗಳು)", division: "all" },
  
  // Bengaluru Division Districts
  { id: "Bengaluru Urban", name: "Bengaluru Urban (ಬೆಂಗಳೂರು ನಗರ)", division: "bengaluru" },
  { id: "Bengaluru Rural", name: "Bengaluru Rural (ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ)", division: "bengaluru" },
  { id: "Tumakuru", name: "Tumakuru (ತುಮಕೂರು)", division: "bengaluru" },
  { id: "Shivamogga", name: "Shivamogga (ಶಿವಮೊಗ್ಗ)", division: "bengaluru" },
  { id: "Davanagere", name: "Davanagere (ದಾವಣಗೆರೆ)", division: "bengaluru" },
  { id: "Kolar", name: "Kolar (ಕೋಲಾರ)", division: "bengaluru" },
  { id: "Chikkaballapura", name: "Chikkaballapura (ಚಿಕ್ಕಬಳ್ಳಾಪುರ)", division: "bengaluru" },
  { id: "Ramanagara", name: "Ramanagara (ರಾಮನಗರ)", division: "bengaluru" },
  { id: "Chitradurga", name: "Chitradurga (ಚಿತ್ರದುರ್ಗ)", division: "bengaluru" },

  // Belagavi Division Districts
  { id: "Belagavi", name: "Belagavi (ಬೆಳಗಾವಿ)", division: "belagavi" },
  { id: "Bagalkot", name: "Bagalkot (ಬಾಗಲಕೋಟೆ)", division: "belagavi" },
  { id: "Dharwad", name: "Dharwad / Hubballi (ಧಾರವಾಡ/ಹುಬ್ಬಳ್ಳಿ)", division: "belagavi" },
  { id: "Vijayapura", name: "Vijayapura (ವಿಜಯಪುರ)", division: "belagavi" },
  { id: "Gadag", name: "Gadag (ಗದಗ)", division: "belagavi" },
  { id: "Haveri", name: "Haveri (ಹಾವೇರಿ)", division: "belagavi" },
  { id: "Uttara Kannada", name: "Uttara Kannada / Karwar (ಉತ್ತರ ಕನ್ನಡ)", division: "belagavi" },

  // Kalaburagi Division Districts
  { id: "Kalaburagi", name: "Kalaburagi (ಕಲಬುರಗಿ)", division: "kalaburgi" },
  { id: "Ballari", name: "Ballari (ಬಳ್ಳಾರಿ)", division: "kalaburgi" },
  { id: "Bidar", name: "Bidar (ಬೀದರ್)", division: "kalaburgi" },
  { id: "Raichur", name: "Raichur (ರಾಯಚೂರು)", division: "kalaburgi" },
  { id: "Koppal", name: "Koppal (ಕೊಪ್ಪಳ)", division: "kalaburgi" },
  { id: "Yadgir", name: "Yadgir (ಯಾದಗಿರಿ)", division: "kalaburgi" },
  { id: "Vijayanagara", name: "Vijayanagara (ವಿಜಯನಗರ)", division: "kalaburgi" },

  // Mysuru Division Districts
  { id: "Mysuru", name: "Mysuru (ಮೈಸೂರು)", division: "mysuru" },
  { id: "Dakshina Kannada", name: "Dakshina Kannada / Mangaluru (ದಕ್ಷಿಣ ಕನ್ನಡ)", division: "mysuru" },
  { id: "Udupi", name: "Udupi / Manipal (ಉಡುಪಿ)", division: "mysuru" },
  { id: "Hassan", name: "Hassan (ಹಾಸನ)", division: "mysuru" },
  { id: "Mandya", name: "Mandya (ಮಂಡ್ಯ)", division: "mysuru" },
  { id: "Chikkamagaluru", name: "Chikkamagaluru (ಚಿಕ್ಕಮಗಳೂರು)", division: "mysuru" },
  { id: "Chamarajanagar", name: "Chamarajanagar (ಚಾಮರಾಜನಗರ)", division: "mysuru" },
  { id: "Kodagu", name: "Kodagu / Madikeri (ಕೊಡಗು)", division: "mysuru" }
];

// Master Comprehensive Karnataka Colleges Database (120+ Colleges Across 4 Divisions)
const BAGALKOT_COLLEGES_DATA = ` + JSON.stringify(allColleges, null, 2) + `;

// Quick Stream categories for filters
const STREAM_CATEGORIES = [
  { id: "all", name: "All Colleges", kannadaName: "ಎಲ್ಲಾ ಕಾಲೇಜುಗಳು", icon: "fa-solid fa-graduation-cap" },
  { id: "degree", name: "Degree & Research (BCA/BCom/BSc/BA)", kannadaName: "ಪದವಿ & ವಿಜ್ಞಾನ (BCA/BCom)", icon: "fa-solid fa-book-open-reader" },
  { id: "engineering", name: "Engineering & Tech (B.E./B.Tech)", kannadaName: "ಇಂಜಿನಿಯರಿಂಗ್ (B.E.)", icon: "fa-solid fa-laptop-code" },
  { id: "medical", name: "Medical & Dental (MBBS/BDS)", kannadaName: "ವೈದ್ಯಕೀಯ & ದಂತ", icon: "fa-solid fa-user-doctor" },
  { id: "ayush", name: "Ayurveda & AYUSH (BAMS/BHMS)", kannadaName: "ಆಯುರ್ವೇದ & ಆಯುಷ್", icon: "fa-solid fa-spa" },
  { id: "pharmacy", name: "Pharmacy (B.Pharm)", kannadaName: "ಔಷಧ ವಿಜ್ಞಾನ", icon: "fa-solid fa-pills" },
  { id: "nursing", name: "Nursing & Allied Health", kannadaName: "ಶುಶ್ರೂಷಾ ವಿಜ್ಞಾನ", icon: "fa-solid fa-heart-pulse" },
  { id: "law", name: "Law (LL.B / B.A. LL.B)", kannadaName: "ಕಾನೂನು ಶಿಕ್ಷಣ (LL.B)", icon: "fa-solid fa-scale-balanced" },
  { id: "management", name: "Management (BBA/MBA)", kannadaName: "ನಿರ್ವಹಣಾ ಶಾಸ್ತ್ರ (BBA/MBA)", icon: "fa-solid fa-chart-line" },
  { id: "polytechnic", name: "Polytechnic / Diploma", kannadaName: "ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾ", icon: "fa-solid fa-wrench" }
];

// District Taluks / Regions Reference
const BAGALKOT_TALUKS = [
  { id: "all", name: "All Taluks / Districts (ಸಮಗ್ರ ಕರ್ನಾಟಕ)", count: BAGALKOT_COLLEGES_DATA.length }
];

// Admission Deadlines & Entrance Exams Guide
const ENTRANCE_EXAMS_GUIDE = [
  {
    exam: "UUCMS (Unified University College Management System)",
    authority: "Dept of Higher Education, Govt of Karnataka",
    courses: "All General Degree Courses (BA, B.Com, B.Sc, BCA, BBA, BSW) in Government, Aided & Affiliated Colleges",
    eligibility: "PUC / 10+2 Any Stream Pass",
    website: "https://uucms.karnataka.gov.in",
    status: "Direct Merit Based Single-Window State Portal"
  },
  {
    exam: "KCET (Karnataka Common Entrance Test)",
    authority: "KEA (Karnataka Examination Authority)",
    courses: "B.E. / B.Tech (RVCE, BMSCE, MSRIT, SJCE, BEC, PDA, SIT, NIE, KLS GIT), B.Pharm, B.Sc Nursing, B.Sc Agriculture",
    eligibility: "12th / 2nd PUC (PCM / PCB) with minimum 45% (40% for Reserved categories)",
    website: "https://kea.kar.nic.in",
    status: "State Level Online Counseling across 4 Divisions (KEA Option Entry)"
  },
  {
    exam: "NEET UG (National Eligibility cum Entrance Test)",
    authority: "NTA / KEA Karnataka State Counseling",
    courses: "MBBS (BMCRI, MMCRI, VIMS, SNMC, MRMC, JNMC, KMC, St. Johns), BDS, BAMS (GAMC, Sri Sri, SDM), BHMS, BUMS",
    eligibility: "12th / PUC with Physics, Chemistry, Biology and English min 50%",
    website: "https://neet.nta.nic.in / kea.kar.nic.in",
    status: "Centralized Counseling by KEA (85%) & MCC (15%)"
  },
  {
    exam: "University Direct Entrance (SJU / Christ / MCC / SJCC / CLAT)",
    authority: "Individual Autonomous & National Law Universities",
    courses: "BCA, BBA, B.Com (Hons), B.Sc Data Science, BA LLB (NLSIU), Media Studies",
    eligibility: "10+2 with 50% - 60% in relevant streams",
    website: "Direct University Portals & Consortium of NLUs",
    status: "Merit & Entrance Test / Interview Allotment"
  },
  {
    exam: "Karnataka PGCET / GATE / KMAT",
    authority: "KEA (Karnataka Examination Authority)",
    courses: "MBA, MCA, M.Tech, M.Pharm across VTU, Bangalore Univ, BCU, BNU, Kuvempu Univ, Mysore Univ",
    eligibility: "Recognized Bachelor's Degree with min 50% (45% for SC/ST/OBC)",
    website: "https://kea.kar.nic.in",
    status: "State Level PG Online Counseling"
  }
];

// Export to window if in browser environment
if (typeof window !== "undefined") {
  window.KARNATAKA_DIVISIONS = KARNATAKA_DIVISIONS;
  window.KARNATAKA_DISTRICTS = KARNATAKA_DISTRICTS;
  window.BAGALKOT_COLLEGES_DATA = BAGALKOT_COLLEGES_DATA;
  window.STREAM_CATEGORIES = STREAM_CATEGORIES;
  window.BAGALKOT_TALUKS = BAGALKOT_TALUKS;
  window.ENTRANCE_EXAMS_GUIDE = ENTRANCE_EXAMS_GUIDE;
}
`;

fs.writeFileSync('js/colleges-data.js', masterContent, 'utf8');
console.log('Master js/colleges-data.js successfully written!');
