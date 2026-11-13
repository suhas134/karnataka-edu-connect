/**
 * Karnataka Higher Education Connect & Enquiry Portal - Main Application Core
 * Supports 4 Karnataka Administrative Divisions:
 * 1. Bengaluru Division (ಬೆಂಗಳೂರು ವಿಭಾಗ)
 * 2. Belagavi Division (ಬೆಳಗಾವಿ ವಿಭಾಗ)
 * 3. Kalaburagi Division (ಕಲಬುರಗಿ ವಿಭಾಗ - Kalyana Karnataka)
 * 4. Mysuru Division (ಮೈಸೂರು ವಿಭಾಗ)
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    colleges: window.BAGALKOT_COLLEGES_DATA || [],
    divisions: window.KARNATAKA_DIVISIONS || [],
    districts: window.KARNATAKA_DISTRICTS || [],
    filteredColleges: [],
    selectedDivision: 'all', // 'all', 'bengaluru', 'belagavi', 'kalaburgi', 'mysuru'
    selectedStream: 'all',
    selectedDistrict: 'all',
    selectedType: 'all',
    searchQuery: '',
    sortBy: 'rating-desc',
    viewMode: 'grouped', // 'grouped' by division or 'grid'
    compareList: [], // Array of college IDs (max 3)
    bookmarks: JSON.parse(localStorage.getItem('bgk_bookmarks') || '[]'),
    lang: localStorage.getItem('bgk_lang') || 'en',
    theme: localStorage.getItem('bgk_theme') || 'dark',
    activeModalCollege: null,
    bot: null
  };

  // Initialize Chatbot instance
  state.bot = new window.BagalkotEduBot(state.colleges);

  // DOM Elements
  const elements = {
    // Theme & Lang
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    langToggleBtn: document.getElementById('langToggleBtn'),
    
    // Division Bar & Banner
    divisionFilterContainer: document.getElementById('divisionFilterContainer'),
    divisionBannerContainer: document.getElementById('divisionBannerContainer'),

    // Search & Filter
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    streamFilterContainer: document.getElementById('streamFilterContainer'),
    talukSelect: document.getElementById('talukSelect'), // acts as District/Taluk select
    typeSelect: document.getElementById('typeSelect'),
    sortSelect: document.getElementById('sortSelect'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    collegesGrid: document.getElementById('collegesGrid'),
    resultsCount: document.getElementById('resultsCount'),
    noResultsState: document.getElementById('noResultsState'),

    // Compare Dock
    compareDock: document.getElementById('compareDock'),
    compareItemsContainer: document.getElementById('compareItemsContainer'),
    compareBtn: document.getElementById('compareBtn'),
    clearCompareBtn: document.getElementById('clearCompareBtn'),
    compareCountBadge: document.getElementById('compareCountBadge'),

    // Modals
    collegeModal: document.getElementById('collegeModal'),
    modalBody: document.getElementById('modalBody'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    
    compareModal: document.getElementById('compareModal'),
    compareModalBody: document.getElementById('compareModalBody'),
    compareModalCloseBtn: document.getElementById('compareModalCloseBtn'),

    inquiryModal: document.getElementById('inquiryModal'),
    inquiryForm: document.getElementById('inquiryForm'),
    inquiryCollegeSelect: document.getElementById('inquiryCollegeSelect'),
    inquiryModalCloseBtn: document.getElementById('inquiryModalCloseBtn'),
    inquirySuccessCard: document.getElementById('inquirySuccessCard'),
    printInquirySlipBtn: document.getElementById('printInquirySlipBtn'),

    bookmarksModal: document.getElementById('bookmarksModal'),
    bookmarksModalBody: document.getElementById('bookmarksModalBody'),
    bookmarksModalCloseBtn: document.getElementById('bookmarksModalCloseBtn'),
    bookmarksNavBtn: document.getElementById('bookmarksNavBtn'),
    bookmarksCountBadge: document.getElementById('bookmarksCountBadge'),

    // Chatbot Elements
    chatToggleBtn: document.getElementById('chatToggleBtn'),
    chatDrawer: document.getElementById('chatDrawer'),
    chatCloseBtn: document.getElementById('chatCloseBtn'),
    chatMinimizeBtn: document.getElementById('chatMinimizeBtn'),
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    chatSendBtn: document.getElementById('chatSendBtn'),
    chatVoiceBtn: document.getElementById('chatVoiceBtn'),
    chatMuteVoiceBtn: document.getElementById('chatMuteVoiceBtn'),
    chatQuickReplies: document.getElementById('chatQuickReplies'),
    chatNotificationBadge: document.getElementById('chatNotificationBadge'),

    // Eligibility Calculator
    calcForm: document.getElementById('eligibilityCalcForm'),
    calcResultsContainer: document.getElementById('calcResultsContainer')
  };

  // Expose helper functions globally for inline HTML handlers
  window.openCollegeModal = openCollegeModal;
  window.setDivisionFilter = (divId) => {
    state.selectedDivision = divId;
    renderDivisionTabs();
    renderDivisionBanner();
    renderDistrictOptions();
    filterAndRenderColleges();
    const targetSection = document.getElementById('directory');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  window.openInquiry = (collegeId) => {
    if (elements.collegeModal) elements.collegeModal.classList.remove('open');
    openInquiryModal(collegeId);
  };

  // Set Initial Theme & Language
  applyTheme(state.theme);
  applyLanguage(state.lang);

  // Initialize UI components
  renderDivisionTabs();
  renderDivisionBanner();
  renderStreamFilterChips();
  renderDistrictOptions();
  updateBookmarksBadge();
  filterAndRenderColleges();
  setupEventListeners();
  initChatbotUI();

  /* ============================================================
     1. DIVISION NAVIGATION & BANNER RENDERING
     ============================================================ */

  function renderDivisionTabs() {
    if (!elements.divisionFilterContainer) return;
    const divisions = state.divisions;
    
    elements.divisionFilterContainer.innerHTML = divisions.map(d => {
      const count = d.id === 'all' 
        ? state.colleges.length 
        : state.colleges.filter(c => c.division === d.id).length;
      
      const isActive = state.selectedDivision === d.id;
      const displayName = state.lang === 'kn' ? (d.kannadaName || d.name) : d.name;

      return `
        <button class="division-tab-btn ${isActive ? 'active' : ''}" data-division="${d.id}" title="${d.tagline || ''}">
          <i class="${d.icon} div-tab-icon"></i>
          <span class="div-tab-name">${displayName}</span>
          <span class="div-count-pill">${count}</span>
        </button>
      `;
    }).join('');

    elements.divisionFilterContainer.querySelectorAll('.division-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedDivision = btn.dataset.division;
        state.selectedDistrict = 'all'; // reset district filter on division switch
        renderDivisionTabs();
        renderDivisionBanner();
        renderDistrictOptions();
        filterAndRenderColleges();
      });
    });
  }

  function renderDivisionBanner() {
    if (!elements.divisionBannerContainer) return;
    const currentDiv = state.divisions.find(d => d.id === state.selectedDivision) || state.divisions[0];

    const isAll = currentDiv.id === 'all';
    const title = state.lang === 'kn' ? (currentDiv.kannadaName || currentDiv.name) : currentDiv.name;
    const count = isAll ? state.colleges.length : state.colleges.filter(c => c.division === currentDiv.id).length;

    let districtsHTML = '';
    if (!isAll && currentDiv.districts) {
      districtsHTML = `
        <div class="div-banner-districts-row">
          <span class="districts-label"><i class="fas fa-map-pin"></i> Districts in this Division:</span>
          <div class="districts-pills-wrap">
            ${currentDiv.districts.map(dist => `<span class="district-badge-pill">${dist}</span>`).join('')}
          </div>
        </div>
      `;
    }

    elements.divisionBannerContainer.innerHTML = `
      <div class="division-overview-card animate-fade-in ${currentDiv.id}">
        <div class="div-overview-main">
          <div class="div-icon-badge">
            <i class="${currentDiv.icon}"></i>
          </div>
          <div class="div-info-text">
            <div class="div-badge-top">
              <span class="div-karnataka-badge"><i class="fas fa-landmark"></i> Official Revenue Division</span>
              <span class="div-count-badge">${count} Premier Institutions</span>
            </div>
            <h3 class="div-title">${title}</h3>
            <p class="div-tagline">${currentDiv.tagline}</p>
          </div>
        </div>
        ${districtsHTML}
      </div>
    `;
  }

  function renderStreamFilterChips() {
    if (!elements.streamFilterContainer) return;
    const streams = window.STREAM_CATEGORIES || [];
    elements.streamFilterContainer.innerHTML = streams.map(s => `
      <button class="stream-chip ${state.selectedStream === s.id ? 'active' : ''}" data-stream="${s.id}">
        <span class="chip-icon"><i class="${s.icon}"></i></span>
        <span class="chip-text">${state.lang === 'kn' ? s.kannadaName : s.name}</span>
      </button>
    `).join('');

    elements.streamFilterContainer.querySelectorAll('.stream-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedStream = btn.dataset.stream;
        document.querySelectorAll('.stream-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        filterAndRenderColleges();
      });
    });
  }

  function renderDistrictOptions() {
    if (!elements.talukSelect) return;
    const allDistricts = window.KARNATAKA_DISTRICTS || [];
    
    // Filter districts based on currently selected division
    let availableDistricts = allDistricts;
    if (state.selectedDivision !== 'all') {
      availableDistricts = allDistricts.filter(d => d.division === 'all' || d.division === state.selectedDivision);
    }

    elements.talukSelect.innerHTML = availableDistricts.map(d => `
      <option value="${d.id}" ${state.selectedDistrict === d.id ? 'selected' : ''}>${d.name}</option>
    `).join('');
  }

  /* ============================================================
     2. FILTERING & RENDERING ENGINE
     ============================================================ */

  function filterAndRenderColleges() {
    let list = [...state.colleges];

    // Division Filter
    if (state.selectedDivision !== 'all') {
      list = list.filter(c => c.division === state.selectedDivision);
    }

    // Stream Filter
    if (state.selectedStream !== 'all') {
      if (state.selectedStream === 'medical') {
        list = list.filter(c => c.stream === 'medical' || c.stream === 'dental');
      } else {
        list = list.filter(c => c.stream === state.selectedStream);
      }
    }

    // District Filter
    if (state.selectedDistrict !== 'all') {
      list = list.filter(c => {
        const distName = (c.district || c.taluk || '').toLowerCase();
        return distName.includes(state.selectedDistrict.toLowerCase());
      });
    }

    // Management Type Filter
    if (state.selectedType !== 'all') {
      if (state.selectedType === 'govt') {
        list = list.filter(c => c.type.toLowerCase().includes('government') || c.type.toLowerCase().includes('central'));
      } else if (state.selectedType === 'aided') {
        list = list.filter(c => c.type.toLowerCase().includes('aided'));
      } else if (state.selectedType === 'autonomous') {
        list = list.filter(c => c.type.toLowerCase().includes('autonomous'));
      } else if (state.selectedType === 'private') {
        list = list.filter(c => c.type.toLowerCase().includes('private') || c.type.toLowerCase().includes('deemed'));
      }
    }

    // Search Query Text
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(c => {
        const text = `${c.name} ${c.kannadaName || ''} ${c.shortName} ${c.division} ${c.district || ''} ${c.taluk || ''} ${c.stream} ${c.type} ${c.address} ${c.courses.map(cr => cr.name).join(' ')}`.toLowerCase();
        return text.includes(q);
      });
    }

    // Sorting
    if (state.sortBy === 'rating-desc') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'est-asc') {
      list.sort((a, b) => a.established - b.established);
    } else if (state.sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    state.filteredColleges = list;
    renderCollegesGrid(list);
  }

  function renderCollegesGrid(list) {
    if (!elements.collegesGrid) return;

    if (elements.resultsCount) {
      const divLabel = state.selectedDivision === 'all' ? 'Across All 4 Karnataka Divisions' : `in ${state.divisions.find(d => d.id === state.selectedDivision)?.name || state.selectedDivision}`;
      elements.resultsCount.textContent = `${list.length} ${list.length === 1 ? 'College' : 'Colleges'} Found ${divLabel}`;
    }

    if (list.length === 0) {
      elements.collegesGrid.innerHTML = '';
      if (elements.noResultsState) elements.noResultsState.style.display = 'block';
      return;
    }

    if (elements.noResultsState) elements.noResultsState.style.display = 'none';

    // If 'all' divisions is selected and search is empty, render grouped by Karnataka's 4 divisions
    if (state.selectedDivision === 'all' && !state.searchQuery.trim() && state.selectedStream === 'all' && state.selectedDistrict === 'all' && state.selectedType === 'all') {
      renderGroupedByDivisions(list);
    } else {
      renderFlatGrid(list);
    }

    attachCardEventListeners();
  }

  function renderGroupedByDivisions(list) {
    const divisionKeys = ['bengaluru', 'belagavi', 'kalaburgi', 'mysuru'];
    
    let html = '';
    divisionKeys.forEach(divKey => {
      const divObj = state.divisions.find(d => d.id === divKey);
      const divColleges = list.filter(c => c.division === divKey);
      if (divColleges.length === 0) return;

      const divTitle = state.lang === 'kn' ? (divObj?.kannadaName || divObj?.name) : divObj?.name;
      
      html += `
        <div class="division-section-wrapper" id="div-sec-${divKey}">
          <div class="division-section-header ${divKey}">
            <div class="div-sec-title-group">
              <span class="div-sec-badge"><i class="${divObj?.icon}"></i> ${divKey.toUpperCase()} DIVISION</span>
              <h3 class="div-sec-heading">${divTitle}</h3>
              <p class="div-sec-sub">${divObj?.tagline || ''}</p>
            </div>
            <div class="div-sec-actions">
              <span class="div-sec-count">${divColleges.length} Top Institutions</span>
              <button class="btn btn-outline btn-xs" onclick="window.setDivisionFilter('${divKey}')">
                View Only ${divObj?.shortName || divTitle} <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="colleges-grid-inner">
            ${divColleges.map(college => renderCollegeCardHTML(college)).join('')}
          </div>
        </div>
      `;
    });

    elements.collegesGrid.innerHTML = html;
  }

  function renderFlatGrid(list) {
    elements.collegesGrid.innerHTML = `
      <div class="colleges-grid-inner flat">
        ${list.map(college => renderCollegeCardHTML(college)).join('')}
      </div>
    `;
  }

  function renderCollegeCardHTML(college) {
    const isBookmarked = state.bookmarks.includes(college.id);
    const isCompared = state.compareList.includes(college.id);
    const coursesPreview = college.courses.slice(0, 3).map(c => `<span class="course-pill">${c.name.split('(')[0].trim()}</span>`).join('');
    const moreCoursesCount = college.courses.length > 3 ? `+${college.courses.length - 3} more` : '';
    const divObj = state.divisions.find(d => d.id === college.division);

    return `
      <div class="college-card animate-fade-in ${college.division}" data-id="${college.id}">
        <div class="card-header-bar">
          <div class="card-tags-left">
            <span class="stream-badge ${college.stream}">${getStreamLabel(college.stream)}</span>
            <span class="division-pill-badge ${college.division}"><i class="${divObj?.icon || 'fas fa-map-marker-alt'}"></i> ${divObj?.shortName || college.division}</span>
          </div>
          <div class="card-top-actions">
            <button class="btn-icon bookmark-toggle-btn ${isBookmarked ? 'active' : ''}" data-id="${college.id}" title="${isBookmarked ? 'Remove from Saved' : 'Save to Favorites'}">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>

        <div class="card-content">
          <div class="college-title-group">
            <h3 class="college-name">${state.lang === 'kn' ? (college.kannadaName || college.name) : college.name}</h3>
            <p class="college-tagline">${college.tagline}</p>
          </div>

          <div class="college-meta-tags">
            <span class="meta-tag"><i class="fas fa-map-marker-alt"></i> ${college.district || college.taluk}</span>
            <span class="meta-tag"><i class="fas fa-building"></i> ${college.type}</span>
            <span class="meta-tag"><i class="fas fa-certificate"></i> NAAC ${college.naacGrade}</span>
            <span class="meta-tag rating-tag"><i class="fas fa-star text-gold"></i> ${college.rating}</span>
          </div>

          <div class="courses-preview-box">
            <div class="courses-label"><i class="fas fa-graduation-cap"></i> Popular Courses:</div>
            <div class="courses-pills">
              ${coursesPreview}
              ${moreCoursesCount ? `<span class="course-pill more">${moreCoursesCount}</span>` : ''}
            </div>
          </div>

          <div class="facilities-mini-row">
            ${college.hostelAvailable ? '<span class="mini-feat" title="Hostel Available"><i class="fas fa-bed"></i> Hostel</span>' : ''}
            <span class="mini-feat" title="Established Year"><i class="fas fa-history"></i> Estd ${college.established}</span>
            <span class="mini-feat" title="Approved Affiliation"><i class="fas fa-shield-alt"></i> Verified</span>
          </div>
        </div>

        <div class="card-footer-actions">
          <button class="btn btn-primary btn-sm view-details-btn" data-id="${college.id}">
            <i class="fas fa-info-circle"></i> Details
          </button>
          <button class="btn btn-outline btn-sm compare-toggle-btn ${isCompared ? 'active' : ''}" data-id="${college.id}">
            <i class="fas fa-balance-scale"></i> ${isCompared ? 'Compared' : 'Compare'}
          </button>
          <button class="btn btn-ghost btn-sm quick-inquiry-btn" data-id="${college.id}" title="Enquire for Admission">
            <i class="fas fa-paper-plane"></i> Enquire
          </button>
        </div>
      </div>
    `;
  }

  function attachCardEventListeners() {
    elements.collegesGrid.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCollegeModal(btn.dataset.id);
      });
    });

    elements.collegesGrid.querySelectorAll('.compare-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompare(btn.dataset.id);
      });
    });

    elements.collegesGrid.querySelectorAll('.bookmark-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(btn.dataset.id);
      });
    });

    elements.collegesGrid.querySelectorAll('.quick-inquiry-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openInquiryModal(btn.dataset.id);
      });
    });

    elements.collegesGrid.querySelectorAll('.college-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          openCollegeModal(card.dataset.id);
        }
      });
    });
  }

  /* ============================================================
     3. COLLEGE DETAIL MODAL WITH RICH TABS
     ============================================================ */

  function openCollegeModal(collegeId) {
    const college = state.colleges.find(c => c.id === collegeId);
    if (!college) return;
    state.activeModalCollege = college;

    const divObj = state.divisions.find(d => d.id === college.division);
    const divName = state.lang === 'kn' ? (divObj?.kannadaName || divObj?.name) : divObj?.name;

    const coursesHTML = college.courses.map(c => `
      <div class="course-item-card">
        <div class="course-item-header">
          <span class="course-name">${c.name}</span>
          <span class="course-level-badge">${c.level}</span>
        </div>
        <div class="course-details-grid">
          <div><span class="c-label">Duration:</span> ${c.duration}</div>
          <div><span class="c-label">Seats:</span> ${c.seats || 'As per norms'}</div>
          <div><span class="c-label">Annual Fee:</span> <strong class="text-success">${c.annualFee}</strong></div>
          <div><span class="c-label">Entrance Exam:</span> ${c.entranceExam}</div>
        </div>
        <div class="course-eligibility">
          <span class="c-label">Eligibility Criteria:</span> ${c.eligibility}
        </div>
      </div>
    `).join('');

    const facilitiesHTML = college.facilities.map(f => `
      <div class="facility-pill"><i class="fas fa-check-circle text-primary"></i> ${f}</div>
    `).join('');

    const scholarshipsHTML = (college.scholarships || []).map(s => `
      <li><i class="fas fa-award text-gold"></i> ${s}</li>
    `).join('');

    const pl = college.placementStats || {};
    const topRecruitersHTML = (pl.topRecruiters || []).map(r => `
      <span class="recruiter-badge">${r}</span>
    `).join('');

    elements.modalBody.innerHTML = `
      <div class="modal-college-header">
        <div class="modal-title-wrap">
          <div class="modal-badges-row">
            <span class="stream-badge ${college.stream}">${getStreamLabel(college.stream)}</span>
            <span class="division-pill-badge ${college.division}"><i class="${divObj?.icon}"></i> ${divName}</span>
            <span class="badge badge-outline">${college.type}</span>
            <span class="badge badge-accent">NAAC ${college.naacGrade}</span>
            <span class="badge badge-gold"><i class="fas fa-star"></i> ${college.rating}</span>
          </div>
          <h2 class="modal-title">${college.name}</h2>
          <p class="modal-subtitle">${college.kannadaName || ''}</p>
          <p class="modal-tagline"><i class="fas fa-quote-left text-muted"></i> ${college.tagline}</p>
        </div>
        <div class="modal-top-buttons">
          <button class="btn btn-primary btn-sm" onclick="window.openInquiry('${college.id}')">
            <i class="fas fa-paper-plane"></i> Enquire for Admission
          </button>
          <a href="tel:${college.phone.split(',')[0].trim()}" class="btn btn-outline btn-sm">
            <i class="fas fa-phone-alt"></i> Call Helpline
          </a>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="modal-tabs-nav">
        <button class="modal-tab-btn active" data-tab="overview"><i class="fas fa-info-circle"></i> Overview</button>
        <button class="modal-tab-btn" data-tab="courses"><i class="fas fa-book-open"></i> Courses & Fees (${college.courses.length})</button>
        <button class="modal-tab-btn" data-tab="admission"><i class="fas fa-clipboard-check"></i> Admission Process</button>
        <button class="modal-tab-btn" data-tab="facilities"><i class="fas fa-hotel"></i> Facilities & Hostel</button>
        <button class="modal-tab-btn" data-tab="placements"><i class="fas fa-briefcase"></i> Placements</button>
        <button class="modal-tab-btn" data-tab="contact"><i class="fas fa-map-marked-alt"></i> Contact & Location</button>
      </div>

      <!-- Tab Contents -->
      <div class="modal-tabs-content">
        <!-- Overview Tab -->
        <div class="modal-tab-pane active" id="tab-overview">
          <div class="overview-section">
            <h4 class="section-heading">About the Institution</h4>
            <p class="lead-text">${college.description}</p>

            <div class="key-facts-grid">
              <div class="fact-card">
                <i class="fas fa-calendar-alt fact-icon"></i>
                <div>
                  <div class="fact-val">${college.established}</div>
                  <div class="fact-lbl">Year Established</div>
                </div>
              </div>
              <div class="fact-card">
                <i class="fas fa-map-marked-alt fact-icon"></i>
                <div>
                  <div class="fact-val">${college.district || college.taluk}</div>
                  <div class="fact-lbl">District / Region</div>
                </div>
              </div>
              <div class="fact-card">
                <i class="fas fa-medal fact-icon"></i>
                <div>
                  <div class="fact-val">NAAC ${college.naacGrade}</div>
                  <div class="fact-lbl">Accreditation</div>
                </div>
              </div>
              <div class="fact-card">
                <i class="fas fa-layer-group fact-icon"></i>
                <div>
                  <div class="fact-val">${college.courses.length}+ Programs</div>
                  <div class="fact-lbl">Degree Offerings</div>
                </div>
              </div>
            </div>

            <h4 class="section-heading mt-4">University Affiliation & Approvals</h4>
            <p class="affiliation-text"><i class="fas fa-shield-check text-success"></i> ${college.affiliation}</p>

            <h4 class="section-heading mt-4">Available Scholarships & Financial Aid</h4>
            <ul class="scholarships-list">
              ${scholarshipsHTML}
            </ul>
          </div>
        </div>

        <!-- Courses & Fees Tab -->
        <div class="modal-tab-pane" id="tab-courses">
          <div class="courses-list-container">
            <div class="alert-info-box">
              <i class="fas fa-info-circle"></i> Note: Fee structures listed include Karnataka Government Quota / KEA regulatory rates as well as private brackets. Subsidies apply via SSP Scholarship.
            </div>
            ${coursesHTML}
          </div>
        </div>

        <!-- Admission Process Tab -->
        <div class="modal-tab-pane" id="tab-admission">
          <h4 class="section-heading">Step-by-Step Admission Procedure</h4>
          <div class="admission-steps-flow">
            ${college.admissionProcess.split('\n').filter(s => s.trim()).map(step => `
              <div class="admission-step-item">
                <div class="step-indicator"><i class="fas fa-check"></i></div>
                <div class="step-content">${step}</div>
              </div>
            `).join('')}
          </div>

          <h4 class="section-heading mt-4">Required Documents Checklist</h4>
          <div class="docs-checklist-grid">
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> 10th / SSLC Original Marks Card</div>
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> 12th / 2nd PUC Original Marks Card</div>
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> KCET / NEET / PGCET / JEE Rank Card & Allotment Order</div>
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> Transfer Certificate (TC) & Conduct Certificate</div>
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> Caste & Income Certificate (RD Number for SSP / 371J)</div>
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> 7 Years Study Certificate in Karnataka</div>
            <div class="doc-item"><i class="fas fa-file-alt text-primary"></i> Aadhaar Card Copy & 6 Passport Photos</div>
          </div>
        </div>

        <!-- Facilities & Hostel Tab -->
        <div class="modal-tab-pane" id="tab-facilities">
          <div class="hostel-details-card">
            <div class="hostel-header">
              <div class="hostel-icon"><i class="fas fa-bed"></i></div>
              <div>
                <h4>Hostel & Living Accommodations</h4>
                <span class="badge ${college.hostelAvailable ? 'badge-success' : 'badge-outline'}">
                  ${college.hostelAvailable ? 'Hostel Facility Available' : 'External Housing Tie-ups'}
                </span>
              </div>
            </div>
            <p class="hostel-desc">${college.hostelDetails}</p>
          </div>

          <h4 class="section-heading mt-4">Campus Facilities & Infrastructure</h4>
          <div class="facilities-grid">
            ${facilitiesHTML}
          </div>
        </div>

        <!-- Placements Tab -->
        <div class="modal-tab-pane" id="tab-placements">
          <div class="placements-stats-grid">
            <div class="placement-stat-box">
              <div class="p-num text-highlight">${pl.averagePackage || '₹4.5 LPA'}</div>
              <div class="p-lbl">Average Package</div>
            </div>
            <div class="placement-stat-box">
              <div class="p-num text-success">${pl.highestPackage || '₹18 LPA'}</div>
              <div class="p-lbl">Highest Package</div>
            </div>
            <div class="placement-stat-box">
              <div class="p-num text-gold">${pl.placedPercentage || '85%+'}</div>
              <div class="p-lbl">Placement Success Rate</div>
            </div>
          </div>

          <h4 class="section-heading mt-4">Top Campus Recruiters & Healthcare Partners</h4>
          <div class="recruiters-wrap">
            ${topRecruitersHTML}
          </div>
        </div>

        <!-- Contact Tab -->
        <div class="modal-tab-pane" id="tab-contact">
          <div class="contact-info-card">
            <div class="contact-row">
              <i class="fas fa-map-marker-alt text-primary"></i>
              <div>
                <strong>Official Campus Address:</strong>
                <p>${college.address}</p>
                <small class="text-muted">Pincode: ${college.pincode}</small>
              </div>
            </div>
            <div class="contact-row">
              <i class="fas fa-phone-alt text-success"></i>
              <div>
                <strong>Admissions & Enquiry Helpline:</strong>
                <p><a href="tel:${college.phone.split(',')[0].trim()}">${college.phone}</a></p>
              </div>
            </div>
            <div class="contact-row">
              <i class="fas fa-envelope text-accent"></i>
              <div>
                <strong>Official Email Address:</strong>
                <p><a href="mailto:${college.email.split(',')[0].trim()}">${college.email}</a></p>
              </div>
            </div>
            <div class="contact-row">
              <i class="fas fa-globe text-primary"></i>
              <div>
                <strong>College Website:</strong>
                <p><a href="${college.website}" target="_blank" rel="noopener" class="text-highlight">${college.website} <i class="fas fa-external-link-alt"></i></a></p>
              </div>
            </div>
          </div>

          <div class="map-action-box mt-3">
            <a href="https://maps.google.com/?q=${college.mapQuery}" target="_blank" rel="noopener" class="btn btn-outline btn-block">
              <i class="fas fa-map-marked-alt text-danger"></i> Open Location in Google Maps Directions ↗
            </a>
          </div>
        </div>
      </div>
    `;

    // Modal Tab Navigation bindings
    elements.modalBody.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        elements.modalBody.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
        elements.modalBody.querySelectorAll('.modal-tab-pane').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPane = elements.modalBody.querySelector(`#tab-${btn.dataset.tab}`);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    elements.collegeModal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  /* ============================================================
     4. COLLEGE COMPARISON ENGINE
     ============================================================ */

  function toggleCompare(collegeId) {
    const idx = state.compareList.indexOf(collegeId);
    if (idx > -1) {
      state.compareList.splice(idx, 1);
      showToast("Removed from comparison dock", "info");
    } else {
      if (state.compareList.length >= 3) {
        showToast("You can compare maximum 3 colleges simultaneously.", "warning");
        return;
      }
      state.compareList.push(collegeId);
      showToast("Added to comparison dock!", "success");
    }

    updateCompareDock();
    filterAndRenderColleges();
  }

  function updateCompareDock() {
    if (!elements.compareDock) return;

    elements.compareCountBadge.textContent = state.compareList.length;

    if (state.compareList.length > 0) {
      elements.compareDock.classList.add('active');
      elements.compareItemsContainer.innerHTML = state.compareList.map(id => {
        const c = state.colleges.find(col => col.id === id);
        return `
          <div class="compare-pill">
            <span>${c ? c.shortName : id}</span>
            <button class="remove-compare-btn" data-id="${id}">&times;</button>
          </div>
        `;
      }).join('');

      elements.compareItemsContainer.querySelectorAll('.remove-compare-btn').forEach(b => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleCompare(b.dataset.id);
        });
      });
    } else {
      elements.compareDock.classList.remove('active');
    }
  }

  function openCompareModal() {
    if (state.compareList.length < 2) {
      showToast("Select at least 2 colleges to view side-by-side comparison.", "warning");
      return;
    }

    const colleges = state.compareList.map(id => state.colleges.find(c => c.id === id)).filter(Boolean);

    elements.compareModalBody.innerHTML = `
      <div class="compare-table-responsive">
        <table class="compare-table">
          <thead>
            <tr>
              <th style="min-width: 160px;">Comparison Features</th>
              ${colleges.map(c => `
                <th>
                  <div class="compare-col-header">
                    <span class="stream-badge ${c.stream}">${getStreamLabel(c.stream)}</span>
                    <h4 class="mt-1">${c.shortName}</h4>
                    <small class="text-muted">${c.district || c.taluk} (${c.division.toUpperCase()})</small>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Division / Region</strong></td>
              ${colleges.map(c => `<td><strong class="text-highlight">${c.division.toUpperCase()} Division</strong></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Management Type</strong></td>
              ${colleges.map(c => `<td>${c.type}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Established Year</strong></td>
              ${colleges.map(c => `<td>${c.established} (${new Date().getFullYear() - c.established} yrs legacy)</td>`).join('')}
            </tr>
            <tr>
              <td><strong>NAAC Accreditation</strong></td>
              ${colleges.map(c => `<td><span class="badge badge-accent">NAAC ${c.naacGrade}</span></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Student Rating</strong></td>
              ${colleges.map(c => `<td><strong class="text-gold">★ ${c.rating} / 5.0</strong></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Popular Courses Offered</strong></td>
              ${colleges.map(c => `
                <td>
                  <ul class="compare-courses-list">
                    ${c.courses.map(cr => `<li>• <strong>${cr.name}</strong> (${cr.annualFee})</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Hostel Accommodation</strong></td>
              ${colleges.map(c => `<td>${c.hostelAvailable ? '✅ Available on Campus' : '❌ External PG/Govt Hostels'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Average Placement</strong></td>
              ${colleges.map(c => `<td><strong class="text-success">${c.placementStats?.averagePackage || 'N/A'}</strong></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Highest Placement</strong></td>
              ${colleges.map(c => `<td><strong class="text-highlight">${c.placementStats?.highestPackage || 'N/A'}</strong></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Action</strong></td>
              ${colleges.map(c => `
                <td>
                  <button class="btn btn-primary btn-xs" onclick="window.openInquiry('${c.id}')">Enquire Now</button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    elements.compareModal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  /* ============================================================
     5. BOOKMARKS & SAVED COLLEGES
     ============================================================ */

  function toggleBookmark(collegeId) {
    const idx = state.bookmarks.indexOf(collegeId);
    if (idx > -1) {
      state.bookmarks.splice(idx, 1);
      showToast("College removed from saved favorites.", "info");
    } else {
      state.bookmarks.push(collegeId);
      showToast("College saved to favorites! ❤️", "success");
    }
    localStorage.setItem('bgk_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarksBadge();
    filterAndRenderColleges();
  }

  function updateBookmarksBadge() {
    if (elements.bookmarksCountBadge) {
      elements.bookmarksCountBadge.textContent = state.bookmarks.length;
    }
  }

  function openBookmarksModal() {
    const saved = state.bookmarks.map(id => state.colleges.find(c => c.id === id)).filter(Boolean);

    if (saved.length === 0) {
      elements.bookmarksModalBody.innerHTML = `
        <div class="empty-state-pnl">
          <i class="far fa-heart empty-icon"></i>
          <h4>No Saved Colleges Yet</h4>
          <p class="text-muted">Click the heart icon on any college card to save it for quick reference.</p>
        </div>
      `;
    } else {
      elements.bookmarksModalBody.innerHTML = `
        <div class="bookmarks-list">
          ${saved.map(c => `
            <div class="bookmark-item-row">
              <div>
                <strong>${c.name}</strong>
                <div class="text-muted"><small>${c.district || c.taluk} (${c.division.toUpperCase()}) • NAAC ${c.naacGrade} • Rating ★ ${c.rating}</small></div>
              </div>
              <div class="bookmark-actions">
                <button class="btn btn-primary btn-xs" onclick="window.openCollegeModal('${c.id}')">View</button>
                <button class="btn btn-ghost btn-xs remove-fav-btn" data-id="${c.id}" title="Remove"><i class="fas fa-trash text-danger"></i></button>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      elements.bookmarksModalBody.querySelectorAll('.remove-fav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          toggleBookmark(btn.dataset.id);
          openBookmarksModal();
        });
      });
    }

    elements.bookmarksModal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  /* ============================================================
     6. ADMISSION ELIGIBILITY CALCULATOR
     ============================================================ */

  if (elements.calcForm) {
    elements.calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const qual = document.getElementById('calcQual').value;
      const percentage = parseFloat(document.getElementById('calcPercentage').value);
      const category = document.getElementById('calcCategory').value;
      const interest = document.getElementById('calcInterest').value;

      let eligibleColleges = [];

      if (interest === 'engineering') {
        eligibleColleges = state.colleges.filter(c => c.stream === 'engineering');
      } else if (interest === 'medical') {
        eligibleColleges = state.colleges.filter(c => ['medical', 'dental', 'ayush', 'pharmacy', 'nursing'].includes(c.stream));
      } else if (interest === 'degree') {
        eligibleColleges = state.colleges.filter(c => c.stream === 'degree');
      } else if (interest === 'diploma') {
        eligibleColleges = state.colleges.filter(c => c.stream === 'polytechnic');
      } else {
        eligibleColleges = state.colleges.slice(0, 10);
      }

      elements.calcResultsContainer.innerHTML = `
        <div class="calc-success-header animate-fade-in">
          <div class="calc-badge-congrats"><i class="fas fa-check-circle"></i> High Admission Eligibility (${percentage}%)</div>
          <h4>You qualify for <strong>${eligibleColleges.length} Recommended Institutions</strong> across Karnataka:</h4>
        </div>
        <div class="calc-results-list">
          ${eligibleColleges.map(c => `
            <div class="calc-college-row">
              <div>
                <strong>${c.name}</strong> 
                <span class="division-pill-badge ${c.division}">${c.division.toUpperCase()}</span>
                <div class="text-muted"><small>${c.district || c.taluk} • ${c.type} • Entrance: ${c.courses[0]?.entranceExam || 'Merit Based'}</small></div>
              </div>
              <div>
                <button class="btn btn-primary btn-xs" onclick="window.openCollegeModal('${c.id}')">View Details</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    });
  }

  /* ============================================================
     7. ADMISSION ENQUIRY & PRINTABLE SLIP GENERATOR
     ============================================================ */

  function openInquiryModal(collegeId) {
    if (!elements.inquiryModal) return;

    elements.inquiryCollegeSelect.innerHTML = state.colleges.map(c => `
      <option value="${c.id}" ${c.id === collegeId ? 'selected' : ''}>${c.name} (${c.district || c.taluk} - ${c.division.toUpperCase()})</option>
    `).join('');

    elements.inquiryForm.style.display = 'block';
    elements.inquirySuccessCard.style.display = 'none';
    elements.inquiryModal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  if (elements.inquiryForm) {
    elements.inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const colId = elements.inquiryCollegeSelect.value;
      const targetCol = state.colleges.find(c => c.id === colId);
      const studentName = document.getElementById('inqName').value;
      const phone = document.getElementById('inqPhone').value;
      const email = document.getElementById('inqEmail').value;
      const course = document.getElementById('inqCourse').value;
      const marks = document.getElementById('inqMarks').value;
      const taluk = document.getElementById('inqTaluk').value;
      const refId = 'KAR-' + Math.floor(100000 + Math.random() * 900000);

      // Render slip
      document.getElementById('slipRefNo').textContent = refId;
      document.getElementById('slipDate').textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
      document.getElementById('slipCollegeName').textContent = targetCol.name + ` (${targetCol.division.toUpperCase()} DIVISION)`;
      document.getElementById('slipCollegeAddress').textContent = targetCol.address;
      document.getElementById('slipCollegePhone').textContent = targetCol.phone;
      document.getElementById('slipStudentName').textContent = studentName;
      document.getElementById('slipStudentPhone').textContent = phone;
      document.getElementById('slipStudentEmail').textContent = email || 'N/A';
      document.getElementById('slipTargetCourse').textContent = course;
      document.getElementById('slipPrevMarks').textContent = marks + '%';
      document.getElementById('slipHomeTaluk').textContent = taluk;

      elements.inquiryForm.style.display = 'none';
      elements.inquirySuccessCard.style.display = 'block';
      showToast("Admission Inquiry generated successfully!", "success");
    });
  }

  if (elements.printInquirySlipBtn) {
    elements.printInquirySlipBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ============================================================
     8. CHATBOT USER INTERFACE & VOICE INTEGRATION
     ============================================================ */

  function initChatbotUI() {
    if (elements.chatMessages && elements.chatMessages.children.length === 0) {
      appendBotMessage(state.bot.getGreetingResponse());
    }

    if (elements.chatToggleBtn) {
      elements.chatToggleBtn.addEventListener('click', () => {
        elements.chatDrawer.classList.toggle('open');
        if (elements.chatNotificationBadge) elements.chatNotificationBadge.style.display = 'none';
        if (elements.chatDrawer.classList.contains('open')) {
          elements.chatInput.focus();
        }
      });
    }

    if (elements.chatCloseBtn) {
      elements.chatCloseBtn.addEventListener('click', () => {
        elements.chatDrawer.classList.remove('open');
      });
    }

    if (elements.chatMinimizeBtn) {
      elements.chatMinimizeBtn.addEventListener('click', () => {
        elements.chatDrawer.classList.remove('open');
      });
    }

    if (elements.chatSendBtn) {
      elements.chatSendBtn.addEventListener('click', handleUserSendMessage);
    }

    if (elements.chatInput) {
      elements.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleUserSendMessage();
        }
      });
    }

    // Voice recognition
    if (elements.chatVoiceBtn) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN';
        recognition.interimResults = false;

        elements.chatVoiceBtn.addEventListener('click', () => {
          try {
            elements.chatVoiceBtn.classList.add('listening');
            recognition.start();
          } catch (e) {
            recognition.stop();
            elements.chatVoiceBtn.classList.remove('listening');
          }
        });

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          elements.chatInput.value = transcript;
          elements.chatVoiceBtn.classList.remove('listening');
          handleUserSendMessage();
        };

        recognition.onerror = () => {
          elements.chatVoiceBtn.classList.remove('listening');
          showToast("Voice recognition failed. Please try typing.", "info");
        };

        recognition.onend = () => {
          elements.chatVoiceBtn.classList.remove('listening');
        };
      } else {
        elements.chatVoiceBtn.style.display = 'none';
      }
    }

    // Voice mute toggle
    if (elements.chatMuteVoiceBtn) {
      elements.chatMuteVoiceBtn.addEventListener('click', () => {
        state.bot.isVoiceMuted = !state.bot.isVoiceMuted;
        elements.chatMuteVoiceBtn.innerHTML = state.bot.isVoiceMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        showToast(state.bot.isVoiceMuted ? "Bot voice muted" : "Bot voice enabled", "info");
      });
    }
  }

  function handleUserSendMessage() {
    const text = elements.chatInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    elements.chatInput.value = '';

    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const botResponse = state.bot.processQuery(text);
      appendBotMessage(botResponse);
      state.bot.speak(botResponse.text);
    }, 450);
  }

  function appendUserMessage(text) {
    if (!elements.chatMessages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-msg user-msg animate-fade-in';
    bubble.innerHTML = `<div class="msg-content">${escapeHTML(text)}</div>`;
    elements.chatMessages.appendChild(bubble);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }

  function appendBotMessage(response) {
    if (!elements.chatMessages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-msg bot-msg animate-fade-in';

    let cardHTML = '';
    if (response.collegeCard) {
      const c = response.collegeCard;
      cardHTML = `
        <div class="chat-college-card mt-2">
          <h5>${c.name} (${c.shortName})</h5>
          <small class="text-muted">${c.district || c.taluk} (${c.division.toUpperCase()}) • NAAC ${c.naacGrade}</small>
          <div class="mt-2">
            <button class="btn btn-primary btn-xs" onclick="window.openCollegeModal('${c.id}')">View Details</button>
            <button class="btn btn-outline btn-xs" onclick="window.openInquiry('${c.id}')">Enquire</button>
          </div>
        </div>
      `;
    } else if (response.collegesList && response.collegesList.length > 0) {
      cardHTML = `
        <div class="chat-colleges-mini-grid mt-2">
          ${response.collegesList.slice(0, 4).map(c => `
            <div class="mini-college-pill" onclick="window.openCollegeModal('${c.id}')">
              <strong>${c.shortName}</strong> (${c.district || c.taluk})
            </div>
          `).join('')}
        </div>
      `;
    }

    bubble.innerHTML = `
      <div class="bot-avatar-small"><i class="fas fa-robot"></i></div>
      <div class="msg-content">
        ${response.text}
        ${cardHTML}
      </div>
    `;

    elements.chatMessages.appendChild(bubble);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;

    // Render Quick Replies
    if (elements.chatQuickReplies && response.quickReplies) {
      elements.chatQuickReplies.innerHTML = response.quickReplies.map(qr => `
        <button class="chat-reply-chip" data-query="${qr}">${qr}</button>
      `).join('');

      elements.chatQuickReplies.querySelectorAll('.chat-reply-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          elements.chatInput.value = btn.dataset.query;
          handleUserSendMessage();
        });
      });
    }
  }

  function showTypingIndicator() {
    if (!elements.chatMessages) return;
    const typing = document.createElement('div');
    typing.id = 'botTypingIndicator';
    typing.className = 'chat-msg bot-msg typing-msg';
    typing.innerHTML = `
      <div class="bot-avatar-small"><i class="fas fa-robot"></i></div>
      <div class="typing-bubble">
        <span></span><span></span><span></span>
      </div>
    `;
    elements.chatMessages.appendChild(typing);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const typing = document.getElementById('botTypingIndicator');
    if (typing) typing.remove();
  }

  /* ============================================================
     9. EVENT LISTENERS & GENERAL UTILITIES
     ============================================================ */

  function setupEventListeners() {
    // Theme Toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        localStorage.setItem('bgk_theme', state.theme);
      });
    }

    // Language Toggle
    if (elements.langToggleBtn) {
      elements.langToggleBtn.addEventListener('click', () => {
        state.lang = state.lang === 'en' ? 'kn' : 'en';
        applyLanguage(state.lang);
        localStorage.setItem('bgk_lang', state.lang);
        renderDivisionTabs();
        renderDivisionBanner();
        renderStreamFilterChips();
        renderDistrictOptions();
        filterAndRenderColleges();
      });
    }

    // Search Input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (elements.clearSearchBtn) {
          elements.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        }
        filterAndRenderColleges();
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        elements.searchInput.value = '';
        elements.clearSearchBtn.style.display = 'none';
        filterAndRenderColleges();
      });
    }

    // Taluk / District Select
    if (elements.talukSelect) {
      elements.talukSelect.addEventListener('change', (e) => {
        state.selectedDistrict = e.target.value;
        filterAndRenderColleges();
      });
    }

    // Type Select
    if (elements.typeSelect) {
      elements.typeSelect.addEventListener('change', (e) => {
        state.selectedType = e.target.value;
        filterAndRenderColleges();
      });
    }

    // Sort Select
    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        filterAndRenderColleges();
      });
    }

    // Reset Filters
    if (elements.resetFiltersBtn) {
      elements.resetFiltersBtn.addEventListener('click', () => {
        state.selectedDivision = 'all';
        state.selectedStream = 'all';
        state.selectedDistrict = 'all';
        state.selectedType = 'all';
        state.searchQuery = '';
        state.sortBy = 'rating-desc';

        if (elements.searchInput) elements.searchInput.value = '';
        if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
        if (elements.talukSelect) elements.talukSelect.value = 'all';
        if (elements.typeSelect) elements.typeSelect.value = 'all';
        if (elements.sortSelect) elements.sortSelect.value = 'rating-desc';

        renderDivisionTabs();
        renderDivisionBanner();
        renderStreamFilterChips();
        renderDistrictOptions();
        filterAndRenderColleges();
        showToast("All filters have been reset.", "info");
      });
    }

    // Compare Dock
    if (elements.compareBtn) {
      elements.compareBtn.addEventListener('click', openCompareModal);
    }

    if (elements.clearCompareBtn) {
      elements.clearCompareBtn.addEventListener('click', () => {
        state.compareList = [];
        updateCompareDock();
        filterAndRenderColleges();
      });
    }

    // Bookmarks Nav Button
    if (elements.bookmarksNavBtn) {
      elements.bookmarksNavBtn.addEventListener('click', openBookmarksModal);
    }

    // Close Modals on close button or backdrop click
    document.querySelectorAll('.app-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
          document.body.classList.remove('modal-open');
        }
      });
    });

    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', () => {
        elements.collegeModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    if (elements.compareModalCloseBtn) {
      elements.compareModalCloseBtn.addEventListener('click', () => {
        elements.compareModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    if (elements.inquiryModalCloseBtn) {
      elements.inquiryModalCloseBtn.addEventListener('click', () => {
        elements.inquiryModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    if (elements.bookmarksModalCloseBtn) {
      elements.bookmarksModalCloseBtn.addEventListener('click', () => {
        elements.bookmarksModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    // Escape key closes modals & drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.app-modal-overlay.open').forEach(m => m.classList.remove('open'));
        if (elements.chatDrawer) elements.chatDrawer.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
  }

  function applyLanguage(lang) {
    if (elements.langToggleBtn) {
      elements.langToggleBtn.textContent = lang === 'en' ? 'ಕನ್ನಡ' : 'English';
    }
  }

  function getStreamLabel(streamId) {
    const s = window.STREAM_CATEGORIES?.find(st => st.id === streamId);
    if (state.lang === 'kn' && s?.kannadaName) return s.kannadaName;
    return s?.name || streamId.toUpperCase();
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function showToast(msg, type = 'info') {
    const existing = document.querySelector('.app-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `app-toast toast-${type} animate-fade-in`;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${msg}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});
