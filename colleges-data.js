// Karnataka Comprehensive College Directory Data
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
const BAGALKOT_COLLEGES_DATA = [
  {
    "id": "st-josephs-bengaluru",
    "name": "St. Joseph's University (Autonomous / Deemed), Bengaluru",
    "kannadaName": "ಸೈಂಟ್ ಜೋಸೆಫ್ಸ್ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "St. Joseph's University",
    "tagline": "Historic Jesuit Higher Education Landmark (Estd 1882) offering Iconic Science, Arts & Commerce Degrees",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Autonomous / State University",
    "established": 1882,
    "affiliation": "UGC Recognized State University & Jesuit Institution",
    "naacGrade": "A++",
    "rating": 4.9,
    "address": "36, Lalbagh Road, Langford Town, Shanti Nagar, Bengaluru, Karnataka 560027",
    "pincode": "560027",
    "phone": "+91 80 2227 4079, +91 80 2221 1429",
    "email": "admissions@sju.edu.in, registrar@sju.edu.in",
    "website": "https://www.sju.edu.in",
    "mapQuery": "St+Josephs+University+Lalbagh+Road+Bengaluru",
    "description": "Established in 1882 by the Jesuit Fathers, St. Joseph's University is one of South India's oldest and most prestigious institutions. Granted University status in 2022 and accredited with NAAC A++, it is renowned for cutting-edge programs in BCA, Computer Applications, Data Science, Biotechnology, B.Com, BBA, BA Humanities, Visual Communication, and PG Research.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications - AI / Cloud)",
        "level": "UG",
        "duration": "3 - 4 Years (NEP)",
        "seats": 240,
        "annualFee": "₹85,000 - ₹1,20,000 / Year",
        "eligibility": "10+2 / 2nd PUC with Math/CS min 50%",
        "entranceExam": "University Entrance Test & Merit Interview"
      },
      {
        "name": "B.Com (Regular / Professional / ACCA)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 480,
        "annualFee": "₹75,000 - ₹1,40,000 / Year",
        "eligibility": "10+2 Commerce/Science min 50%",
        "entranceExam": "Merit Based on 12th Marks"
      },
      {
        "name": "B.Sc (Data Science, Biotechnology, Electronics, Physics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "10+2 / PUC Science min 50%",
        "entranceExam": "Merit Counseling"
      },
      {
        "name": "BBA (Finance, Marketing, Analytics, Aviation)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹1,10,000 - ₹1,60,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Entrance & Interview"
      }
    ],
    "admissionProcess": "1. Apply online at sju.edu.in.\n2. Merit evaluation and University Entrance/Interview for professional streams (BCA, BBA, B.Com Professional).\n3. Fee payment and document verification.",
    "facilities": [
      "Heritage 1882 Campus in Central Bengaluru",
      "Advanced AI & Data Science Labs",
      "Digital Library with 1.5 Lakh Books",
      "Separate Hostels for Boys & Girls",
      "Auditoriums & Football Turf"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus and nearby Jesuit hostels with clean dining, Wi-Fi, study halls, and 24/7 security.",
    "placementStats": {
      "averagePackage": "₹6.8 LPA",
      "highestPackage": "₹22.5 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Deloitte",
        "Goldman Sachs",
        "EY",
        "KPMG",
        "PwC",
        "Amazon",
        "Infosys",
        "Wipro"
      ]
    },
    "scholarships": [
      "Jesuit Educational Trust Freeships",
      "SSP Karnataka Post-Matric Scholarship"
    ],
    "badges": [
      "Heritage Estd 1882",
      "NAAC A++",
      "Central Bengaluru",
      "NIRF Ranked"
    ]
  },
  {
    "id": "mount-carmel-bengaluru",
    "name": "Mount Carmel College (Autonomous), Bengaluru",
    "kannadaName": "ಮೌಂಟ್ ಕಾರ್ಮೆಲ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "Mount Carmel College (MCC)",
    "tagline": "India's Foremost Autonomous Women's Institution for Science, Commerce & Humanities",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1948,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "58, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560052",
    "pincode": "560052",
    "phone": "+91 80 2226 1759, +91 80 2228 3259",
    "email": "admission@mccblr.edu.in",
    "website": "https://mccblr.edu.in",
    "mapQuery": "Mount+Carmel+College+Palace+Road+Vasanth+Nagar+Bengaluru",
    "description": "Mount Carmel College (MCC), founded in 1948 by the CSST sisters, is one of South Asia's landmark women's degree institutions. Spread over a scenic campus in Vasanth Nagar near Palace Grounds, it offers autonomous degrees in Computer Applications (BCA), Data Science, Commerce, Business Administration, Humanities, and Bio-sciences.",
    "courses": [
      {
        "name": "BCA (Computer Applications - Cloud Computing & AI)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹85,000 - ₹1,30,000 / Year",
        "eligibility": "10+2 Any Stream with Math/CS min 50%",
        "entranceExam": "Merit & College Interview"
      },
      {
        "name": "B.Com (Regular, International Accounting & Finance, Business Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹80,000 - ₹1,50,000 / Year",
        "eligibility": "10+2 Commerce/Science min 55%",
        "entranceExam": "Merit Based on 12th Marks"
      },
      {
        "name": "B.Sc (Biotechnology, Food Science & Nutrition, Psychology)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹70,000 - ₹1,10,000 / Year",
        "eligibility": "PUC Science with PCB / PCM min 50%",
        "entranceExam": "Merit List"
      },
      {
        "name": "BBA (Finance, HR, Marketing, Business Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹1,25,000 - ₹1,75,000 / Year",
        "eligibility": "10+2 Any Stream min 55%",
        "entranceExam": "College Entrance & Interview"
      }
    ],
    "admissionProcess": "Direct online application via mccblr.edu.in followed by merit list publication and document verification.",
    "facilities": [
      "Historic Vasanth Nagar Campus near Palace Grounds",
      "Modern Bio-Sciences & AI Research Labs",
      "Central Library",
      "Girls Hostel with Security",
      "Gymnasium & Indoor Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "On-campus secure women's hostel with dining mess, study areas, and 24/7 security.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹19.8 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Goldman Sachs",
        "McKinsey",
        "Target",
        "EY",
        "Deloitte",
        "Amazon",
        "Infosys"
      ]
    },
    "scholarships": [
      "CSST Educational Freeships",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "Top Women's College",
      "NAAC A+",
      "Palace Road",
      "Estd 1948"
    ]
  },
  {
    "id": "christ-university-bengaluru",
    "name": "Christ University (Central Campus), Bengaluru",
    "kannadaName": "ಕ್ರೈಸ್ಟ್ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಮುಖ್ಯ ಕ್ಯಾಂಪಸ್), ಬೆಂಗಳೂರು",
    "shortName": "Christ University",
    "tagline": "Premier Deemed-to-be-University renowned for Iconic BCA, BBA, Commerce & Sciences",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Deemed to be University",
    "established": 1969,
    "affiliation": "UGC Approved Deemed-to-be-University (CMI Fathers)",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Hosur Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
    "pincode": "560029",
    "phone": "+91 80 4012 9100, +91 80 4012 9600",
    "email": "admissions@christuniversity.in",
    "website": "https://christuniversity.in",
    "mapQuery": "Christ+University+Hosur+Road+Bengaluru",
    "description": "Christ University (Central Campus), established in 1969, is one of India's most sought-after higher education destinations. Celebrated for its lush eco-friendly campus on Hosur Road, exceptional discipline, global curriculum, and top rankings across BCA, B.Com (Hons), BBA, Economics, Psychology, and Media Studies.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹1,30,000 - ₹1,80,000 / Year",
        "eligibility": "10+2 Any Stream with min 55%",
        "entranceExam": "Christ University Entrance Test (CUET) & Micro Presentation"
      },
      {
        "name": "B.Com (Honours / Strategic Finance / International Finance)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 600,
        "annualFee": "₹1,45,000 - ₹2,10,000 / Year",
        "eligibility": "10+2 Commerce/Science min 60%",
        "entranceExam": "CUET Entrance & Interview"
      },
      {
        "name": "BBA (Finance, Marketing, Business Analytics, Tourism)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 450,
        "annualFee": "₹1,80,000 - ₹2,75,000 / Year",
        "eligibility": "10+2 Any Stream min 60%",
        "entranceExam": "CUET Entrance & Micro Presentation"
      },
      {
        "name": "B.Sc (Data Science, Biotechnology, Physics, Computer Science)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹95,000 - ₹1,50,000 / Year",
        "eligibility": "PUC Science min 55%",
        "entranceExam": "CUET & Skill Assessment"
      }
    ],
    "admissionProcess": "Apply online at christuniversity.in -> Appear for Christ University Entrance Test (CUET) -> Micro Presentation & Personal Interview -> Final Selection.",
    "facilities": [
      "75-Acre Eco-Friendly Central Campus",
      "Bloomberg Financial Trading Lab",
      "Research Labs & Auditoriums",
      "Separate Boys & Girls Hostels",
      "State-of-the-Art Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Jonas Hall for Women and St. Kuriakose Elias Hall for Men with high-speed Wi-Fi, fitness centre, and dining.",
    "placementStats": {
      "averagePackage": "₹7.5 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "De Shaw",
        "Goldman Sachs",
        "Boston Consulting Group",
        "Deloitte",
        "EY",
        "KPMG",
        "Amazon"
      ]
    },
    "scholarships": [
      "Christ Merit Scholarships",
      "Need-Based Fee Concessions"
    ],
    "badges": [
      "NIRF Top Ranked",
      "Hosur Road Hub",
      "Bloomberg Lab",
      "CUET Admissions"
    ]
  },
  {
    "id": "mes-college-bengaluru",
    "name": "MES College of Arts, Commerce and Science (Autonomous), Bengaluru",
    "kannadaName": "ಎಂ.ಇ.ಎಸ್. ಕಲಾ, ವಾಣಿಜ್ಯ ಮತ್ತು ವಿಜ್ಞಾನ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "MES Malleshwaram",
    "tagline": "Iconic Cultural & Academic Temple of Malleshwaram founded in 1956",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1956,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "15th Cross, Malleshwaram, Bengaluru, Karnataka 560003",
    "pincode": "560003",
    "phone": "+91 80 2334 1225, +91 80 2334 7045",
    "email": "mesdegreecollege@gmail.com",
    "website": "https://www.mesdegreecollege.org",
    "mapQuery": "MES+College+of+Arts+Commerce+and+Science+Malleshwaram+Bengaluru",
    "description": "MES College, situated at the heart of Malleshwaram, is a cultural and academic monument of Bengaluru since 1956. Autonomous under BCU, it offers exceptional education in BCA, B.Com, B.Sc (Electronics, Computer Science, Statistics, Mathematics), BBA, and Arts.",
    "courses": [
      {
        "name": "BCA (Computer Applications & AI Electives)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹55,000 - ₹75,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Admission"
      },
      {
        "name": "B.Com (General, Banking & Finance, Accounting)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹25,000 (Aided) - ₹50,000 (Unaided)",
        "eligibility": "10+2 Commerce min 50%",
        "entranceExam": "Merit Cutoff"
      },
      {
        "name": "B.Sc (Electronics, Computer Science, Mathematics, Physics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹30,000 - ₹45,000 / Year",
        "eligibility": "10+2 / PUC Science min 50%",
        "entranceExam": "Merit Counseling"
      }
    ],
    "admissionProcess": "Online application through UUCMS and MES Admissions Portal followed by document verification.",
    "facilities": [
      "Iconic Malleshwaram Heritage Campus",
      "Modern Computer & Electronics Labs",
      "Central Library",
      "Auditorium",
      "Cultural Associations"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Nearby private paying guest accommodations and student hostels across Malleshwaram.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Wipro",
        "Infosys",
        "Cognizant",
        "EY",
        "Capgemini",
        "Concentrix"
      ]
    },
    "scholarships": [
      "SSP Post-Matric Scholarship",
      "MES Management Merit Endowment"
    ],
    "badges": [
      "Malleshwaram Iconic Hub",
      "Estd 1956",
      "Autonomous",
      "Affordable Quality"
    ]
  },
  {
    "id": "national-college-basavanagudi",
    "name": "The National College (Autonomous), Basavanagudi, Bengaluru",
    "kannadaName": "ದಿ ನ್ಯಾಷನಲ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬಸವನಗುಡಿ, ಬೆಂಗಳೂರು",
    "shortName": "National College Basavanagudi",
    "tagline": "Historic Institution founded in 1945 by Dr. H. Narasimhaiah fostering Scientific Temper",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1945,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Pampa Mahakavi Road, Basavanagudi, Bengaluru, Karnataka 560004",
    "pincode": "560004",
    "phone": "+91 80 2667 4441, +91 80 2667 4442",
    "email": "ncb.principal@gmail.com",
    "website": "https://ncb.ac.in",
    "mapQuery": "The+National+College+Basavanagudi+Bengaluru",
    "description": "The National College Basavanagudi, established in 1945 under the National Education Society of Karnataka (NES) and shaped by legendary physicist and rationalist Dr. H. Narasimhaiah (HN), is an intellectual fortress. It is famous for producing eminent scientists, ISRO leaders, artists, and leaders through its degrees in BCA, B.Sc, B.Com, and BA.",
    "courses": [
      {
        "name": "BCA (Computer Applications & Software Development)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹50,000 - ₹70,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Sc (Physics, Mathematics, Computer Science, Electronics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹20,000 (Aided) - ₹35,000 (Unaided)",
        "eligibility": "PUC Science min 50%",
        "entranceExam": "Direct Merit Admission"
      },
      {
        "name": "B.Com (General, Accounting & Taxation)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹22,000 - ₹45,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit List"
      }
    ],
    "admissionProcess": "Apply via UUCMS Karnataka or college portal -> Merit List -> Verification & Allotment.",
    "facilities": [
      "Historic Basavanagudi Campus",
      "J.N. Planetarium Associates & Science Center",
      "Central Library",
      "H.N. Kalakshetra Cultural Auditorium",
      "NES Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "NES Hostel for boys in Basavanagudi with affordable vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹15.5 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture",
        "SAP",
        "LTI Mindtree",
        "EY"
      ]
    },
    "scholarships": [
      "Dr. HN Memorial Freeship",
      "SSP Post-Matric Karnataka Scholarship"
    ],
    "badges": [
      "Dr. HN Heritage",
      "Estd 1945",
      "Basavanagudi Landmark",
      "Autonomous"
    ]
  },
  {
    "id": "national-college-jayanagar",
    "name": "The National College (Autonomous), Jayanagar, Bengaluru",
    "kannadaName": "ದಿ ನ್ಯಾಷನಲ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಜಯನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "National College Jayanagar",
    "tagline": "Prestigious Autonomous Degree Institution of South Bengaluru (Estd 1965 by NES)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1965,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "36th Cross, 7th Block, Jayanagar, Bengaluru, Karnataka 560070",
    "pincode": "560070",
    "phone": "+91 80 2654 9684, +91 80 2654 9685",
    "email": "ncjayanagar@gmail.com",
    "website": "https://ncj.ac.in",
    "mapQuery": "The+National+College+Jayanagar+7th+Block+Bengaluru",
    "description": "The National College Jayanagar, founded in 1965 by NES of Karnataka, is situated on an expansive campus in Jayanagar 7th Block. It is celebrated for its stellar science and computer applications laboratories, vibrant cultural environment (B.V. Karanth Rangamandira), and high student success rate.",
    "courses": [
      {
        "name": "BCA (Computer Applications & AI Electives)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹55,000 - ₹75,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Sc (Computer Science, Electronics, Mathematics, Physics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹25,000 - ₹40,000 / Year",
        "eligibility": "10+2 Science min 50%",
        "entranceExam": "Merit Admission"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹30,000 - ₹60,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit"
      }
    ],
    "admissionProcess": "Admissions through UUCMS and college direct merit counseling.",
    "facilities": [
      "Spacious Jayanagar Campus",
      "Advanced IT & Electronics Labs",
      "Central Library",
      "B.V. Karanth Rangamandira Auditorium",
      "Playground"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Multiple student PGs and hostels available in Jayanagar and Banashankari.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "Cognizant",
        "TCS",
        "Accenture"
      ]
    },
    "scholarships": [
      "SSP Scholarship",
      "NES Merit Aid"
    ],
    "badges": [
      "Jayanagar 7th Block",
      "Autonomous",
      "Estd 1965",
      "NAAC A"
    ]
  },
  {
    "id": "vijaya-college-bengaluru",
    "name": "Vijaya College (Autonomous), RV Road, Basavanagudi, Bengaluru",
    "kannadaName": "ವಿಜಯ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಆರ್.ವಿ. ರಸ್ತೆ, ಬಸವನಗುಡಿ, ಬೆಂಗಳೂರು",
    "shortName": "Vijaya College RV Road",
    "tagline": "Historic Science & Commerce Powerhouse founded in 1945 by BHS Higher Education Society",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1945,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "RV Road, Basavanagudi, Bengaluru, Karnataka 560004",
    "pincode": "560004",
    "phone": "+91 80 2693 3221, +91 80 2693 3220",
    "email": "vijayacollegeblr@gmail.com",
    "website": "https://www.vijayacollege.ac.in",
    "mapQuery": "Vijaya+College+RV+Road+Basavanagudi+Bengaluru",
    "description": "Vijaya College, located on RV Road near South End Circle in Basavanagudi, is an autonomous degree institution established in 1945 by BHS Higher Education Society. It has educated generations of Karnataka's top mathematicians, scientists, IT professionals, and chartered accountants.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 160,
        "annualFee": "₹60,000 - ₹80,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Sc (PCM, Electronics, Computer Science, Biotechnology)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹25,000 - ₹45,000 / Year",
        "eligibility": "10+2 / PUC Science min 50%",
        "entranceExam": "Direct Merit"
      },
      {
        "name": "B.Com (Regular, Finance, Accounting)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹28,000 - ₹55,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Cutoff"
      },
      {
        "name": "BBA (Business Administration)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹65,000 - ₹90,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Interview"
      }
    ],
    "admissionProcess": "Online application through UUCMS and college direct merit list counseling.",
    "facilities": [
      "RV Road Basavanagudi Campus next to South End Metro",
      "State-of-the-Art Science Labs",
      "Digital Library",
      "Auditorium",
      "Indoor Sports Room"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Conveniently located near South End Circle with numerous student hostels and Metro connectivity.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Oracle",
        "SAP",
        "EY"
      ]
    },
    "scholarships": [
      "SSP Scholarship",
      "BHS Society Merit Aid"
    ],
    "badges": [
      "Estd 1945",
      "Basavanagudi RV Road",
      "Autonomous",
      "Metro Adjacent"
    ]
  },
  {
    "id": "maharani-cluster-university-bengaluru",
    "name": "Maharani Cluster University (Maharani's Arts, Commerce & Science), Bengaluru",
    "kannadaName": "ಮಹಾರಾಣಿ ಕ್ಲಸ್ಟರ್ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಮಹಾರಾಣಿ ಕಲಾ, ವಾಣಿಜ್ಯ & ವಿಜ್ಞಾನ ಕಾಲೇಜು), ಬೆಂಗಳೂರು",
    "shortName": "Maharani Cluster University",
    "tagline": "Karnataka's Historic 143-Year Premier Public Women's University on Palace Road (Estd 1881)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "State Public University / Government",
    "established": 1881,
    "affiliation": "UGC Recognized State Public University (Govt of Karnataka)",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Palace Road / Seshadri Road, Gandhi Nagar, Bengaluru, Karnataka 560001",
    "pincode": "560001",
    "phone": "+91 80 2226 2796, +91 80 2226 0122",
    "email": "registrar@mcu.karnataka.gov.in, maharanisblr@gmail.com",
    "website": "https://mcu.karnataka.gov.in",
    "mapQuery": "Maharani+Cluster+University+Palace+Road+Bengaluru",
    "description": "Maharani Cluster University, originally founded in 1881 by the Royal Family of Mysore (Maharani Kempananjammanni Vani Vilasa Sannidhana), is Karnataka's premier public women's university. Comprising historic Maharani's Science College, Arts College, and Commerce & Management College on Palace Road, it empowers thousands of women from across Karnataka with heavily subsidized degrees.",
    "courses": [
      {
        "name": "BCA & B.Sc in Data Analytics / AI / Computer Science",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹8,000 - ₹18,000 / Year (Govt Subsidized)",
        "eligibility": "10+2 / PUC with Math/CS min 45%",
        "entranceExam": "UUCMS Single-Window Merit"
      },
      {
        "name": "B.Com (General, Corporate Accounting, E-Commerce)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 600,
        "annualFee": "₹6,000 - ₹12,000 / Year",
        "eligibility": "10+2 Any Stream min 45%",
        "entranceExam": "UUCMS Merit List"
      },
      {
        "name": "B.Sc (Microbiology, Biotechnology, Biochemistry, Physics, Chemistry)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 450,
        "annualFee": "₹7,500 - ₹15,000 / Year",
        "eligibility": "10+2 PUC Science min 45%",
        "entranceExam": "UUCMS Direct Counseling"
      },
      {
        "name": "BA (Journalism, Psychology, English Literature, Kannada, History)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹5,000 - ₹9,000 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Merit"
      },
      {
        "name": "BBA (Finance, Marketing, HR)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹10,000 - ₹20,000 / Year",
        "eligibility": "10+2 Any Stream min 45%",
        "entranceExam": "UUCMS Allotment"
      }
    ],
    "admissionProcess": "Apply online through UUCMS Karnataka Portal (uucms.karnataka.gov.in) -> Select Maharani Cluster University -> Single-window merit seat allotment.",
    "facilities": [
      "Majestic Heritage Palace Road Campus",
      "Advanced Science & Computing Research Labs",
      "Central Library with Heritage Archives",
      "Government Women's Hostels with Free Food Scheme",
      "Auditorium & Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government BCM/Social Welfare and University hostels for women with free boarding for eligible categories.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12.5 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture",
        "Capgemini",
        "Concentrix",
        "State Govt Services"
      ]
    },
    "scholarships": [
      "Full Govt Fee Waiver for SC/ST/Cat-1",
      "SSP Post-Matric & Vidyasiri Scholarships"
    ],
    "badges": [
      "Royal Heritage Estd 1881",
      "State Public University",
      "Palace Road Landmark",
      "Low Govt Fees"
    ]
  },
  {
    "id": "kristu-jayanti-bengaluru",
    "name": "Kristu Jayanti College (Autonomous), Bengaluru",
    "kannadaName": "ಕ್ರಿಸ್ತು ಜಯಂತಿ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "Kristu Jayanti College",
    "tagline": "India's Cleanest Higher Education Campus offering Premier Autonomous Degrees",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 1999,
    "affiliation": "Bengaluru North University (BNU) & UGC Autonomous",
    "naacGrade": "A++",
    "rating": 4.8,
    "address": "K. Narayanapura, Kothanur Post, Bengaluru, Karnataka 560077",
    "pincode": "560077",
    "phone": "+91 80 6873 7777, +91 80 2846 5611",
    "email": "admission@kristujayanti.com",
    "website": "https://kristujayanti.edu.in",
    "mapQuery": "Kristu+Jayanti+College+Kothanur+Bengaluru",
    "description": "Kristu Jayanti College, founded in 1999 by the CMI fathers, is one of South India's fastest-growing academic campuses. Accredited with NAAC A++ (CGPA 3.78) and recipient of the National Clean Campus Award, it is a powerhouse for BCA, Data Science, Cyber Security, B.Com, BBA, Psychology, and Media Studies.",
    "courses": [
      {
        "name": "BCA (Cloud Computing, AI, IoT, Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹95,000 - ₹1,40,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct University Interview"
      },
      {
        "name": "B.Com (Regular, ACCA, CMA, Business Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 600,
        "annualFee": "₹85,000 - ₹1,50,000 / Year",
        "eligibility": "10+2 Commerce/Science min 50%",
        "entranceExam": "Merit Counseling"
      },
      {
        "name": "BBA (Finance, Marketing, Aviation, Business Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹1,20,000 - ₹1,75,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Interview & Screening"
      }
    ],
    "admissionProcess": "Apply online at kristujayanti.edu.in -> Online Interview / Screening -> Merit Allotment.",
    "facilities": [
      "Cleanest Green Campus in North Bengaluru",
      "Advanced Cloud & Cyber Security Labs",
      "Central Library",
      "Separate Hostels",
      "Sports Stadium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for men and women managed by CMI Fathers / Sisters with secure dining.",
    "placementStats": {
      "averagePackage": "₹6.4 LPA",
      "highestPackage": "₹21.5 LPA",
      "placedPercentage": "93%",
      "topRecruiters": [
        "Deloitte",
        "KPMG",
        "EY",
        "Morgan Stanley",
        "Amazon",
        "Wipro",
        "Infosys"
      ]
    },
    "scholarships": [
      "Jayantian Merit Scholarships",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "NAAC A++ (3.78)",
      "Cleanest Campus Award",
      "North Bengaluru Hub"
    ]
  },
  {
    "id": "gfgc-central-college-bengaluru",
    "name": "Government First Grade College (GFGC & Central College Campus), Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು (ಸೆಂಟ್ರಲ್ ಕಾಲೇಜ್ ಆವರಣ), ಬೆಂಗಳೂರು",
    "shortName": "GFGC Central College",
    "tagline": "Karnataka's Flagship Government First Grade College on Historic Central College Campus",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Government (Department of Collegiate Education)",
    "established": 1985,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Central College Campus, Dr. Ambedkar Veedhi, Bengaluru, Karnataka 560001",
    "pincode": "560001",
    "phone": "+91 80 2221 4455",
    "email": "gfgccentralcollege@gmail.com",
    "website": "https://gfgc.kar.nic.in/central-college",
    "mapQuery": "Government+First+Grade+College+Central+College+Bengaluru",
    "description": "Government First Grade College on the Central College Campus is Karnataka's premier public degree institution managed directly by the Department of Collegiate Education. Offering heavily subsidized fees, state scholarships, and experienced government faculty.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years (NEP)",
        "seats": 120,
        "annualFee": "₹6,500 / Year (Subsidized Govt Fee)",
        "eligibility": "10+2 / 2nd PUC with Math/CS min 45%",
        "entranceExam": "UUCMS Merit Based Admission"
      },
      {
        "name": "B.Com (General, Corporate Accounting)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Single Window"
      },
      {
        "name": "B.Sc & BA Degrees",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹4,200 - ₹6,000 / Year",
        "eligibility": "10+2 Science/Arts min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "Direct single-window admission through UUCMS Karnataka portal (uucms.karnataka.gov.in).",
    "facilities": [
      "Heritage Central Bengaluru Campus",
      "Computer Labs",
      "Library with 50,000+ Books",
      "BCM/Govt Hostel Access"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Free government BCM / Social Welfare hostel facilities for SC, ST, OBC and rural students.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹9.5 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "TCS",
        "Wipro",
        "Infosys BPM",
        "Cognizant",
        "State Govt Departments"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST and Girl Students",
      "SSP Karnataka & Vidyasiri Scheme"
    ],
    "badges": [
      "Flagship Govt College",
      "Low Fees ₹4k",
      "Central Bengaluru",
      "UUCMS Direct"
    ]
  },
  {
    "id": "gfgc-vijayanagar-bengaluru",
    "name": "Government First Grade College (GFGC), Vijayanagar, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ವಿಜಯನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "GFGC Vijayanagar",
    "tagline": "Leading Public Degree Institution in West Bengaluru with Stellar UUCMS Merit Enrollment",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru West",
    "stream": "degree",
    "type": "Government",
    "established": 1993,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "B++",
    "rating": 4.5,
    "address": "Near Metro Station, RPC Layout, Vijayanagar, Bengaluru, Karnataka 560104",
    "pincode": "560104",
    "phone": "+91 80 2339 9677",
    "email": "gfgcvijayanagar@gmail.com",
    "website": "https://gfgc.kar.nic.in/vijayanagar",
    "mapQuery": "Government+First+Grade+College+Vijayanagar+Bengaluru",
    "description": "GFGC Vijayanagar is one of the most sought-after government degree colleges in Bengaluru West. Located right next to Vijayanagar Metro Station, it offers affordable BA, B.Com, B.Sc, BBA, and BCA programs with government fee concessions and digital classrooms.",
    "courses": [
      {
        "name": "BCA (Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 100,
        "annualFee": "₹6,800 / Year",
        "eligibility": "10+2 with Math/CS min 45%",
        "entranceExam": "UUCMS Portal Merit"
      },
      {
        "name": "B.Com (General, Banking & Insurance)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹4,600 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Direct"
      },
      {
        "name": "BBA & B.Sc (Computer Science / Math)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹5,500 - ₹7,000 / Year",
        "eligibility": "10+2 min 45%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "Apply via UUCMS Karnataka single-window admission portal.",
    "facilities": [
      "Modern Multi-Storey Building",
      "Computer Lab",
      "Central Library",
      "Near Metro Station"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Associated with government BCM and Post-Matric hostels nearby.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "78%",
      "topRecruiters": [
        "TCS",
        "Infosys BPM",
        "Wipro",
        "State Bank Operations"
      ]
    },
    "scholarships": [
      "SSP Govt Scholarship",
      "Fee Waiver for SC/ST/Cat-1"
    ],
    "badges": [
      "Metro Connected",
      "Subsidized Fees",
      "West Bengaluru",
      "UUCMS Portal"
    ]
  },
  {
    "id": "gfgc-yelahanka-bengaluru",
    "name": "Government First Grade College (GFGC), Yelahanka, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "GFGC Yelahanka",
    "tagline": "Premier Public Degree College serving North Bengaluru & Yelahanka Satellite Town",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Yelahanka",
    "stream": "degree",
    "type": "Government",
    "established": 2007,
    "affiliation": "Bengaluru North University (BNU)",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "NES Office Road, Yelahanka Old Town, Bengaluru, Karnataka 560064",
    "pincode": "560064",
    "phone": "+91 80 2856 2200",
    "email": "gfgcyelahanka@gmail.com",
    "website": "https://gfgc.kar.nic.in/yelahanka",
    "mapQuery": "Government+First+Grade+College+Yelahanka+Bengaluru",
    "description": "GFGC Yelahanka offers high-quality higher education in North Bengaluru. Providing BCA, B.Com, BBA, B.Sc, and BA programs under Bengaluru North University with experienced government faculty and full state scholarship coverage.",
    "courses": [
      {
        "name": "BCA & B.Sc Computer Science",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹6,500 / Year",
        "eligibility": "10+2 with Math/CS min 45%",
        "entranceExam": "UUCMS Merit"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹4,800 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Portal"
      }
    ],
    "admissionProcess": "Centralized online admission through UUCMS Karnataka.",
    "facilities": [
      "Spacious Yelahanka Campus",
      "Computer Center",
      "Library",
      "NSS/NCC Units"
    ],
    "hostelAvailable": true,
    "hostelDetails": "State government hostel facilities available for rural and reserved category students.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "75%",
      "topRecruiters": [
        "Wipro BPM",
        "TCS",
        "Concentrix",
        "Axis Bank"
      ]
    },
    "scholarships": [
      "SSP Scholarship",
      "Full SC/ST Fee Exemption"
    ],
    "badges": [
      "North Bengaluru",
      "Govt College",
      "Low Fees",
      "UUCMS Portal"
    ]
  },
  {
    "id": "gfgc-malleshwaram-bengaluru",
    "name": "Government First Grade College (GFGC 18th Cross), Malleshwaram, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು (18ನೇ ಕ್ರಾಸ್), ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು",
    "shortName": "GFGC 18th Cross Malleshwaram",
    "tagline": "Reputed Public Degree College in the Academic Heart of Malleshwaram",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Government",
    "established": 2007,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "B+",
    "rating": 4.4,
    "address": "18th Cross, Malleshwaram, Bengaluru, Karnataka 560003",
    "pincode": "560003",
    "phone": "+91 80 2346 5500",
    "email": "gfgc18thcross@gmail.com",
    "website": "https://gfgc.kar.nic.in/malleshwaram-18th-cross",
    "mapQuery": "Government+First+Grade+College+18th+Cross+Malleshwaram+Bengaluru",
    "description": "GFGC 18th Cross Malleshwaram is a prime government degree college offering accessible, merit-based education in Science, Commerce, and Arts with subsidized fees.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹5,000 - ₹7,000 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Merit"
      },
      {
        "name": "B.Sc & BA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "UUCMS single-window merit counseling.",
    "facilities": [
      "Malleshwaram Campus",
      "Computer Lab",
      "Library",
      "Seminar Hall"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Government hostel tie-ups in Rajajinagar and Malleshwaram.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "74%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Govt Fee Concession"
    ],
    "badges": [
      "Malleshwaram Hub",
      "Govt College",
      "UUCMS Direct"
    ]
  },
  {
    "id": "gfgc-kr-puram-bengaluru",
    "name": "Government First Grade College (GFGC), K.R. Puram, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ಕೆ.ಆರ್. ಪುರಂ, ಬೆಂಗಳೂರು",
    "shortName": "GFGC KR Puram",
    "tagline": "Prominent East Bengaluru Public Degree Institution near IT Corridor",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "degree",
    "type": "Government",
    "established": 2001,
    "affiliation": "Bengaluru North University (BNU)",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Old Madras Road, K.R. Puram, Bengaluru, Karnataka 560036",
    "pincode": "560036",
    "phone": "+91 80 2561 8899",
    "email": "gfgckrpuram@gmail.com",
    "website": "https://gfgc.kar.nic.in/kr-puram",
    "mapQuery": "Government+First+Grade+College+KR+Puram+Bengaluru",
    "description": "GFGC K.R. Puram serves thousands of students across the eastern tech corridor of Bengaluru, offering B.Com, BCA, BBA, B.Sc, and BA courses with low government fees.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 350,
        "annualFee": "₹5,000 - ₹7,000 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Portal"
      },
      {
        "name": "BBA & B.Sc",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹5,500 / Year",
        "eligibility": "10+2 min 45%",
        "entranceExam": "UUCMS Portal"
      }
    ],
    "admissionProcess": "Online admission via UUCMS Karnataka.",
    "facilities": [
      "IT Corridor Location",
      "Computer Lab",
      "Library",
      "Placement Cell"
    ],
    "hostelAvailable": true,
    "hostelDetails": "State Social Welfare hostels in KR Puram and Mahadevapura.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "76%"
    },
    "scholarships": [
      "SSP State Scholarship",
      "Full SC/ST Concessions"
    ],
    "badges": [
      "East Bengaluru",
      "IT Corridor Proximity",
      "Govt College"
    ]
  },
  {
    "id": "gfgc-frazer-town-bengaluru",
    "name": "Government First Grade College (GFGC), Frazer Town / Pulakeshinagar, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ಫ್ರೇಜರ್ ಟೌನ್ / ಪುಲಕೇಶಿನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "GFGC Frazer Town",
    "tagline": "Central-East Bengaluru Public Degree College offering Multidisciplinary Degrees",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Government",
    "established": 2008,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "B+",
    "rating": 4.3,
    "address": "Promenade Road, Frazer Town, Pulakeshinagar, Bengaluru, Karnataka 560005",
    "pincode": "560005",
    "phone": "+91 80 2548 1122",
    "email": "gfgcfrazertown@gmail.com",
    "website": "https://gfgc.kar.nic.in/frazer-town",
    "mapQuery": "Government+First+Grade+College+Frazer+Town+Bengaluru",
    "description": "GFGC Frazer Town caters to urban students in central and east Bengaluru, providing accessible higher education in Commerce, Computer Applications, and Arts.",
    "courses": [
      {
        "name": "B.Com & BCA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹4,800 - ₹6,800 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      },
      {
        "name": "BA & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 160,
        "annualFee": "₹4,200 - ₹5,500 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "UUCMS single-window portal.",
    "facilities": [
      "Central Location",
      "Computer Lab",
      "Library"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Nearest government hostels in Shivajinagar.",
    "placementStats": {
      "averagePackage": "₹3.4 LPA",
      "highestPackage": "₹6.5 LPA",
      "placedPercentage": "72%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Minority & SC/ST Concessions"
    ],
    "badges": [
      "Frazer Town",
      "Govt College",
      "Low Fees"
    ]
  },
  {
    "id": "gfgc-rajajinagar-bengaluru",
    "name": "Government First Grade College (GFGC), Rajajinagar, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ರಾಜಾಜಿನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "GFGC Rajajinagar",
    "tagline": "Prime Public Degree Institution in Rajajinagar offering Modern UG Programs",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Government",
    "established": 2008,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "B+",
    "rating": 4.3,
    "address": "Dr. Rajkumar Road, 2nd Block, Rajajinagar, Bengaluru, Karnataka 560010",
    "pincode": "560010",
    "phone": "+91 80 2312 4433",
    "email": "gfgcrajajinagar@gmail.com",
    "website": "https://gfgc.kar.nic.in/rajajinagar",
    "mapQuery": "Government+First+Grade+College+Rajajinagar+Bengaluru",
    "description": "GFGC Rajajinagar provides affordable higher education across West Bengaluru on Dr. Rajkumar Road with B.Com, BCA, BBA, and BA courses.",
    "courses": [
      {
        "name": "B.Com & BCA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 260,
        "annualFee": "₹4,800 - ₹6,800 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Portal"
      }
    ],
    "admissionProcess": "Direct UUCMS single-window merit.",
    "facilities": [
      "Dr. Rajkumar Road Campus",
      "Computer Center",
      "Library"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Associated with nearby government post-matric hostels.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "73%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Govt Freeships"
    ],
    "badges": [
      "Rajajinagar Hub",
      "Govt College",
      "Metro Nearby"
    ]
  },
  {
    "id": "sjcc-bengaluru",
    "name": "St. Joseph's College of Commerce (SJCC Autonomous), Bengaluru",
    "kannadaName": "ಸೈಂಟ್ ಜೋಸೆಫ್ಸ್ ವಾಣಿಜ್ಯ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "SJCC Brigade Road",
    "tagline": "India's Premier Autonomous Commerce & Business Institution on Brigade Road (Estd 1972)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 1972,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A++",
    "rating": 4.9,
    "address": "163, Brigade Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025",
    "pincode": "560025",
    "phone": "+91 80 2536 0644, +91 80 2536 0646",
    "email": "admissions@sjcc.edu.in",
    "website": "https://www.sjcc.edu.in",
    "mapQuery": "St+Josephs+College+of+Commerce+Brigade+Road+Bengaluru",
    "description": "St. Joseph's College of Commerce (SJCC), located on Brigade Road, is internationally recognized for excellence in commerce education. Accredited with NAAC A++ (CGPA 3.57) and ranked among India's top 10 commerce colleges by NIRF, offering B.Com (BPM, Analytics, ACCA, International Accounting) and BBA.",
    "courses": [
      {
        "name": "B.Com (Regular, Analytics, Professional International Accounting & Finance)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 480,
        "annualFee": "₹95,000 - ₹1,65,000 / Year",
        "eligibility": "10+2 Commerce/Science min 60%",
        "entranceExam": "SJCC Entrance & Interview"
      },
      {
        "name": "BBA (Regular, Entrepreneurship, Professional - Finance & Marketing)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹1,40,000 - ₹2,10,000 / Year",
        "eligibility": "10+2 Any Stream min 60%",
        "entranceExam": "Entrance Test & Group Discussion"
      }
    ],
    "admissionProcess": "Online application at sjcc.edu.in -> SJCC Online Entrance Test -> Personal Interview.",
    "facilities": [
      "Brigade Road Central Location",
      "Bloomberg Finance Lab",
      "Digital Research Library",
      "Jesuit Hostels",
      "Gymnasium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Jesuit hostel accommodation for outstation students near Brigade Road.",
    "placementStats": {
      "averagePackage": "₹7.2 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Goldman Sachs",
        "Morgan Stanley",
        "EY",
        "Deloitte",
        "KPMG",
        "PwC",
        "JP Morgan"
      ]
    },
    "scholarships": [
      "Jesuit Educational Trust Scholarships",
      "Need-Based Fee Concessions"
    ],
    "badges": [
      "Top 10 India Commerce",
      "NAAC A++",
      "Brigade Road",
      "Estd 1972"
    ]
  },
  {
    "id": "seshadripuram-college-bengaluru",
    "name": "Seshadripuram College (Autonomous), Bengaluru",
    "kannadaName": "ಶೇಷಾದ್ರಿಪುರಂ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "Seshadripuram College",
    "tagline": "Flagship Autonomous Commerce & Management Institution of Seshadripuram Educational Trust",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1973,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Nagappa Street, Seshadripuram, Bengaluru, Karnataka 560020",
    "pincode": "560020",
    "phone": "+91 80 2295 5354, +91 80 2295 5355",
    "email": "principalspmcollege@gmail.com",
    "website": "https://www.spm.ac.in",
    "mapQuery": "Seshadripuram+College+Nagappa+Street+Bengaluru",
    "description": "Seshadripuram College, established in 1973 under the renowned Seshadripuram Educational Trust (SET), is an autonomous commerce, computer applications, and management hub situated near Majestic.",
    "courses": [
      {
        "name": "BCA (Computer Applications & Cloud)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹75,000 - ₹1,05,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Merit Interview"
      },
      {
        "name": "B.Com (Regular, Corporate Accounting, Finance)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 600,
        "annualFee": "₹45,000 - ₹80,000 / Year",
        "eligibility": "10+2 Commerce/Science min 50%",
        "entranceExam": "Merit Based on 12th"
      },
      {
        "name": "BBA (Business Administration)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹85,000 - ₹1,20,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Interview"
      }
    ],
    "admissionProcess": "Online application through SET Admissions and UUCMS -> Merit Verification.",
    "facilities": [
      "Seshadripuram Campus near Majestic",
      "Modern Computer & Coding Labs",
      "Central Digital Library",
      "Auditorium",
      "Placement Center"
    ],
    "hostelAvailable": true,
    "hostelDetails": "SET student hostels with hygienic food in Seshadripuram and Kumara Park.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Deloitte",
        "EY",
        "KPMG",
        "Amazon",
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture"
      ]
    },
    "scholarships": [
      "SET Merit Concessions",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "Central Seshadripuram",
      "NAAC A+",
      "Autonomous",
      "High Placements"
    ]
  },
  {
    "id": "seshadripuram-first-grade-yelahanka",
    "name": "Seshadripuram First Grade College (SFGC), Yelahanka, Bengaluru",
    "kannadaName": "ಶೇಷಾದ್ರಿಪುರಂ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು (ಎಸ್.ಎಫ್.ಜಿ.ಸಿ), ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "SFGC Yelahanka",
    "tagline": "Premier Degree & Post Graduate Centre of Seshadripuram Trust in North Bengaluru",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Yelahanka",
    "stream": "degree",
    "type": "Private Unaided",
    "established": 1992,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "CA Site No. 26, Yelahanka New Town, Bengaluru, Karnataka 560064",
    "pincode": "560064",
    "phone": "+91 80 2295 5369, +91 80 2295 5371",
    "email": "info@sfgc.ac.in",
    "website": "https://www.sfgc.ac.in",
    "mapQuery": "Seshadripuram+First+Grade+College+Yelahanka+Bengaluru",
    "description": "SFGC Yelahanka, established in 1992 by Seshadripuram Educational Trust, offers premier programs in BCA, B.Sc (Electronics, Computer Science, Biotechnology), B.Com, BBA, and MBA/M.Com PG centers.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹75,000 - ₹95,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 450,
        "annualFee": "₹50,000 - ₹85,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Based"
      },
      {
        "name": "B.Sc (Biotechnology, Microbiology, Computer Science)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 150,
        "annualFee": "₹55,000 - ₹75,000 / Year",
        "eligibility": "PUC Science min 50%",
        "entranceExam": "Merit Allotment"
      }
    ],
    "admissionProcess": "Apply online at sfgc.ac.in -> Document verification -> Fee payment.",
    "facilities": [
      "Spacious Yelahanka New Town Campus",
      "Biotechnology & IT Labs",
      "Central Library",
      "Hostels",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North/South Indian mess and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Wipro",
        "Infosys",
        "EY",
        "Cognizant",
        "Capgemini"
      ]
    },
    "scholarships": [
      "SET Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "Yelahanka New Town",
      "NAAC A",
      "SET Trust",
      "Spacious Campus"
    ]
  },
  {
    "id": "mlac-bengaluru",
    "name": "Maharani Lakshmi Ammanni College for Women (mLAC Autonomous), Bengaluru",
    "kannadaName": "ಮಹಾರಾಣಿ ಲಕ್ಷ್ಮಿ ಅಮ್ಮಣ್ಣಿ ಮಹಿಳಾ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "mLAC Malleshwaram",
    "tagline": "Empowering Women Through Excellence in Science, IT & Commerce since 1972",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1972,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "18th Cross, Malleshwaram, Bengaluru, Karnataka 560012",
    "pincode": "560012",
    "phone": "+91 80 2334 9311, +91 80 2334 4793",
    "email": "admission@mlacw.edu.in",
    "website": "https://www.mlacw.edu.in",
    "mapQuery": "Maharani+Lakshmi+Ammanni+College+Malleshwaram+Bengaluru",
    "description": "mLAC Autonomous in Malleshwaram is a premier women's degree and PG research institution. Known for its strong Department of Biotechnology (Star College Status from DBT, Govt of India), Computer Science, Commerce, and Management.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications - Cloud & AI)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹65,000 - ₹90,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Admission"
      },
      {
        "name": "B.Sc (Biotechnology, Biochemistry, Genetics, CS)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹45,000 - ₹75,000 / Year",
        "eligibility": "10+2 / PUC Science min 50%",
        "entranceExam": "Merit List"
      },
      {
        "name": "B.Com (Regular, Corporate Administration)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹40,000 - ₹70,000 / Year",
        "eligibility": "10+2 Commerce/Science min 50%",
        "entranceExam": "Merit Based"
      },
      {
        "name": "BBA (Business Administration)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹75,000 - ₹1,10,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Interview"
      }
    ],
    "admissionProcess": "Apply online at mlacw.edu.in -> Merit List -> Verification & Admission.",
    "facilities": [
      "Malleshwaram 18th Cross Campus",
      "DBT Star College Biotech Labs",
      "Central Digital Library",
      "Girls Hostel",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Safe on-campus women's hostel with biometric security and hygienic food.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹16.5 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Biocon",
        "Infosys",
        "Deloitte",
        "TCS",
        "Cognizant",
        "EY",
        "Wipro"
      ]
    },
    "scholarships": [
      "DBT Star College Fellowships",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "DBT Star Status",
      "Malleshwaram",
      "Autonomous",
      "Women's Empowerment"
    ]
  },
  {
    "id": "jyoti-nivas-college-bengaluru",
    "name": "Jyoti Nivas College (Autonomous for Women), Koramangala, Bengaluru",
    "kannadaName": "ಜ್ಯೋತಿ ನಿವಾಸ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ ಮಹಿಳಾ ಕಾಲೇಜು), ಕೋರಮಂಗಲ, ಬೆಂಗಳೂರು",
    "shortName": "Jyoti Nivas College (JNC)",
    "tagline": "Premier Autonomous Women's College in Koramangala (Estd 1966 by St. Joseph of Tarbes)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1966,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Hosur Road, Koramangala, Bengaluru, Karnataka 560095",
    "pincode": "560095",
    "phone": "+91 80 2553 0137, +91 80 2552 9175",
    "email": "info@jyotinivas.org",
    "website": "https://www.jyotinivas.org",
    "mapQuery": "Jyoti+Nivas+College+Koramangala+Bengaluru",
    "description": "Jyoti Nivas College (Autonomous), founded in 1966 by the Sisters of St. Joseph of Tarbes, is situated on a verdant 10-acre campus in Koramangala. Celebrated for high academic standards in BCA, B.Com, BBA, B.Sc (Genetics, Psychology, Computer Science), and BA Media Studies.",
    "courses": [
      {
        "name": "BCA (Computer Applications - AI & Web Tech)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 150,
        "annualFee": "₹80,000 - ₹1,15,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit & Interview"
      },
      {
        "name": "B.Com (Regular, International Business, Travel & Tourism)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹70,000 - ₹1,20,000 / Year",
        "eligibility": "10+2 Commerce/Science min 55%",
        "entranceExam": "Merit List"
      },
      {
        "name": "BBA & B.Sc (Genetics, Chemistry, CS, Psychology)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹75,000 - ₹1,30,000 / Year",
        "eligibility": "10+2 min 50%",
        "entranceExam": "Merit Interview"
      }
    ],
    "admissionProcess": "Apply online at jyotinivas.org -> Merit screening and document verification.",
    "facilities": [
      "10-Acre Green Koramangala Campus",
      "Modern Computing Labs",
      "Central Library",
      "Girls Hostel",
      "Auditorium & Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "On-campus convent-managed women's hostel with high security and dining.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Goldman Sachs",
        "Deloitte",
        "EY",
        "Amazon",
        "Infosys",
        "Wipro",
        "TCS"
      ]
    },
    "scholarships": [
      "SJT Trust Freeships",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "Koramangala Hub",
      "Autonomous",
      "NAAC A+",
      "Estd 1966"
    ]
  },
  {
    "id": "kle-nijalingappa-bengaluru",
    "name": "KLE Society's S. Nijalingappa College (Autonomous), Rajajinagar, Bengaluru",
    "kannadaName": "ಕೆ.ಎಲ್.ಇ ಸಂಸ್ಥೆಯ ಎಸ್. ನಿಜಲಿಂಗಪ್ಪ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ರಾಜಾಜಿನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "KLE Nijalingappa College",
    "tagline": "Premier Autonomous Multi-Disciplinary Institution of KLE Society in Bengaluru (Estd 1963)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1963,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "No. 1040, 2nd Block, Rajajinagar, Bengaluru, Karnataka 560010",
    "pincode": "560010",
    "phone": "+91 80 2332 5020, +91 80 2352 6055",
    "email": "info@klesnc.org",
    "website": "https://www.klesnc.org",
    "mapQuery": "KLE+Societys+S+Nijalingappa+College+Rajajinagar+Bengaluru",
    "description": "KLE Society's S. Nijalingappa College, established in 1963 in Rajajinagar, is accredited with NAAC A+ (CGPA 3.53). Offering autonomous degrees in BCA, B.Sc (Fashion Technology, Biotechnology, CS), B.Com, BBA, BHM (Hotel Management), and Tourism.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 160,
        "annualFee": "₹65,000 - ₹90,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹45,000 - ₹80,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Cutoff"
      },
      {
        "name": "BHM (Bachelor of Hotel Management) & B.Sc",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹60,000 - ₹1,10,000 / Year",
        "eligibility": "10+2 min 45%",
        "entranceExam": "Direct Merit"
      }
    ],
    "admissionProcess": "Online application through klesnc.org and UUCMS.",
    "facilities": [
      "Rajajinagar 2nd Block Campus near Metro",
      "Training Restaurant & Kitchen Labs",
      "Digital Library",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate KLE hostels for boys and girls with pure vegetarian North/South dining.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "Taj Group",
        "Marriott",
        "Infosys",
        "Wipro",
        "TCS",
        "Deloitte",
        "EY"
      ]
    },
    "scholarships": [
      "KLE Society Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "KLE Society",
      "Rajajinagar Metro",
      "NAAC A+",
      "Autonomous"
    ]
  },
  {
    "id": "surana-college-bengaluru",
    "name": "Surana College (Autonomous), South End Circle, Bengaluru",
    "kannadaName": "ಸುರಾನಾ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್, ಬೆಂಗಳೂರು",
    "shortName": "Surana College",
    "tagline": "Premier Autonomous Institution for Computer Applications, Commerce & Management (Estd 1995)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 1995,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "16, South End Road, Basavanagudi, Bengaluru, Karnataka 560004",
    "pincode": "560004",
    "phone": "+91 80 2244 6140, +91 80 2244 6141",
    "email": "admissions@suranacollege.edu.in",
    "website": "https://www.suranacollege.edu.in",
    "mapQuery": "Surana+College+South+End+Road+Bengaluru",
    "description": "Surana College (Autonomous), situated at South End Circle in Basavanagudi with a sprawling PG/UG campus at Kengeri/Peenya, is accredited with NAAC A+. It offers cutting-edge BCA (Data Science, Cloud, AI), B.Com, BBA, B.Sc, and MBA/MCA programs.",
    "courses": [
      {
        "name": "BCA (Data Science, AI & Full Stack)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹80,000 - ₹1,10,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Interview"
      },
      {
        "name": "B.Com & BBA (Regular, Aviation, Logistics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 450,
        "annualFee": "₹65,000 - ₹1,20,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Screening"
      }
    ],
    "admissionProcess": "Online application at suranacollege.edu.in followed by counseling.",
    "facilities": [
      "South End Circle Campus near Metro",
      "Advanced AI & IT Labs",
      "Central Library",
      "Auditorium",
      "Placement Cell"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel tie-ups with clean boarding and security.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹17 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Cognizant",
        "TCS",
        "Infosys",
        "EY",
        "Capgemini",
        "Amazon",
        "Wipro"
      ]
    },
    "scholarships": [
      "Surana Educational Trust Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "South End Metro",
      "NAAC A+",
      "Autonomous",
      "High Placement Rate"
    ]
  },
  {
    "id": "dsac-bengaluru",
    "name": "Dayananda Sagar College of Arts, Science and Commerce (DSCASC), Bengaluru",
    "kannadaName": "ದಯಾನಂದ ಸಾಗರ ಕಲಾ, ವಿಜ್ಞಾನ ಮತ್ತು ವಾಣಿಜ್ಯ ಕಾಲೇಜು (ಡಿ.ಎಸ್.ಸಿ.ಎ.ಎಸ್.ಸಿ), ಬೆಂಗಳೂರು",
    "shortName": "Dayananda Sagar Degree (DSCASC)",
    "tagline": "Premier Autonomous Degree Institution on 29-Acre Kumaraswamy Layout Campus",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 1979,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru, Karnataka 560078",
    "pincode": "560078",
    "phone": "+91 80 4216 1704, +91 80 2666 2226",
    "email": "admissions@dayanandasagar.edu",
    "website": "https://www.dscasc.edu.in",
    "mapQuery": "Dayananda+Sagar+College+of+Arts+Science+and+Commerce+Kumaraswamy+Layout+Bengaluru",
    "description": "DSCASC Kumaraswamy Layout is a premier degree institution under the DSI banner. Spread across a 29-acre campus in South Bengaluru, offering autonomous BCA, B.Sc (Biotechnology, Genetics, Microbiology, Computer Science), B.Com, BBA, MCA, and MBA.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications - AI & Cloud)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹85,000 - ₹1,25,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Com & BBA (Regular, CMA, Aviation, Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 480,
        "annualFee": "₹75,000 - ₹1,40,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Screening"
      },
      {
        "name": "B.Sc (Biotechnology, Genetics, Microbiology, CS)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "PUC Science min 50%",
        "entranceExam": "Direct Merit"
      }
    ],
    "admissionProcess": "Apply online at dayanandasagar.edu -> Merit list and counseling.",
    "facilities": [
      "29-Acre Kumaraswamy Layout Campus",
      "Centre of Innovation & Labs",
      "Central Digital Library",
      "Mega Hostels for Boys & Girls",
      "Amphitheatre & Food Court"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus high-comfort hostels with Wi-Fi, gym, and dining.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹19.5 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Accenture",
        "Infosys",
        "Wipro",
        "Deloitte",
        "EY",
        "KPMG",
        "Amazon"
      ]
    },
    "scholarships": [
      "DSI Merit Scholarships",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "29 Acre Campus",
      "DSI Group",
      "Kumaraswamy Layout",
      "NAAC A+"
    ]
  },
  {
    "id": "presidency-college-bengaluru",
    "name": "Presidency College (Autonomous), Kempapura, Hebbal, Bengaluru",
    "kannadaName": "ಪ್ರೆಸಿಡೆನ್ಸಿ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಕೆಂಪಾಪುರ, ಹೆಬ್ಬಾಳ, ಬೆಂಗಳೂರು",
    "shortName": "Presidency College Hebbal",
    "tagline": "NIRF Top Ranked Autonomous Institution in North Bengaluru (Estd 2000)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 2000,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "33/2C, Kempapura, Hebbal, Bengaluru, Karnataka 560024",
    "pincode": "560024",
    "phone": "+91 80 4247 8700, +91 80 4247 8701",
    "email": "admission-pc@presidency.edu.in",
    "website": "https://presidencycollege.ac.in",
    "mapQuery": "Presidency+College+Kempapura+Hebbal+Bengaluru",
    "description": "Presidency College (Autonomous), located in Kempapura, Hebbal, is ranked among India's top degree colleges by NIRF and accredited with NAAC A+. It offers autonomous BCA, B.Com, BBA, BA Journalism, and MCA/MBA programs.",
    "courses": [
      {
        "name": "BCA (Cloud Computing, AI & Cyber Security)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹95,000 - ₹1,35,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Interview"
      },
      {
        "name": "B.Com & BBA (Regular, Professional, Aviation, Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 500,
        "annualFee": "₹85,000 - ₹1,50,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Screening"
      }
    ],
    "admissionProcess": "Apply online at presidencycollege.ac.in followed by interview.",
    "facilities": [
      "Modern Kempapura Campus near Hebbal Flyover",
      "Hi-Tech Computer Centers",
      "Digital Library",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Secure off-campus hostels with bus facility, Wi-Fi, and mess.",
    "placementStats": {
      "averagePackage": "₹5.6 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Deloitte",
        "EY",
        "KPMG",
        "Amazon",
        "Infosys",
        "Wipro",
        "TCS"
      ]
    },
    "scholarships": [
      "Presidency Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "Hebbal Kempapura",
      "NIRF Ranked",
      "Autonomous",
      "NAAC A+"
    ]
  },
  {
    "id": "new-horizon-college-kasturinagar",
    "name": "New Horizon College (Kasturinagar & Marathahalli Campuses), Bengaluru",
    "kannadaName": "ನ್ಯೂ ಹೊರೈಜನ್ ಕಾಲೇಜು (ಕಸ್ತೂರಿನಗರ ಮತ್ತು ಮಾರತಹಳ್ಳಿ), ಬೆಂಗಳೂರು",
    "shortName": "New Horizon College",
    "tagline": "Premier Degree Institution under New Horizon Educational Institution (NHEI, Estd 1970)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "degree",
    "type": "Private Unaided",
    "established": 1970,
    "affiliation": "Bengaluru North University (BNU) & Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "100 Feet Road, 2nd Main, Kasturinagar, Bengaluru, Karnataka 560043",
    "pincode": "560043",
    "phone": "+91 80 2542 9362, +91 98805 34935",
    "email": "admissionsnhc@newhorizonindia.edu",
    "website": "https://newhorizonindia.edu/nhc_kasturinagar",
    "mapQuery": "New+Horizon+College+Kasturinagar+Bengaluru",
    "description": "New Horizon College (Kasturinagar & Marathahalli) provides high-standard education in BCA (Executive/Professional), B.Com, and BBA with dedicated placement training and 100% placement support.",
    "courses": [
      {
        "name": "BCA (Executive / Professional / Global)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹85,000 - ₹1,30,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Com & BBA (Executive / Professional / Global)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 480,
        "annualFee": "₹75,000 - ₹1,40,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Screening"
      }
    ],
    "admissionProcess": "Apply online at newhorizonindia.edu -> Merit counseling -> Direct admission.",
    "facilities": [
      "Kasturinagar & Marathahalli Campuses",
      "Air-conditioned Labs",
      "Library",
      "Hostels",
      "Indoor Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern amenities and dining.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹16.5 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Capgemini",
        "Infosys",
        "Wipro",
        "TCS",
        "EY",
        "Cognizant",
        "Amazon"
      ]
    },
    "scholarships": [
      "NHEI Merit Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "NHEI Group",
      "Kasturinagar",
      "100% Placement Support"
    ]
  },
  {
    "id": "oxford-science-bengaluru",
    "name": "The Oxford College of Science & Arts, HSR Layout, Bengaluru",
    "kannadaName": "ದಿ ಆಕ್ಸ್‌ಫರ್ಡ್ ವಿಜ್ಞಾನ ಮತ್ತು ಕಲಾ ಕಾಲೇಜು, ಎಚ್.ಎಸ್.ಆರ್ ಬಡಾವಣೆ, ಬೆಂಗಳೂರು",
    "shortName": "The Oxford College of Science",
    "tagline": "Premier Multi-Disciplinary Science & IT Hub of Children's Education Society (Estd 1974)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 1994,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "No. 32, 19th Main, Sector 4, HSR Layout, Bengaluru, Karnataka 560102",
    "pincode": "560102",
    "phone": "+91 80 6175 4542, +91 80 6175 4543",
    "email": "scienceprincipal@theoxford.edu",
    "website": "https://www.theoxford.edu/science",
    "mapQuery": "The+Oxford+College+of+Science+HSR+Layout+Bengaluru",
    "description": "The Oxford College of Science in HSR Layout Sector 4 is a premier science and IT education hub. Autonomous under BCU, it offers BCA, B.Sc (Biotechnology, Microbiology, Genetics, Data Science, CS), B.Com, BBA, and PG research programs.",
    "courses": [
      {
        "name": "BCA & B.Sc (Computer Science / Data Science)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹75,000 - ₹1,05,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Sc (Biotechnology, Microbiology, Genetics, Biochemistry)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹60,000 - ₹85,000 / Year",
        "eligibility": "10+2 Science min 50%",
        "entranceExam": "Direct Merit"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Based"
      }
    ],
    "admissionProcess": "Online application through theoxford.edu -> Document verification.",
    "facilities": [
      "HSR Layout Sector 4 Campus",
      "Advanced Biotechnology & IT Labs",
      "Central Library",
      "Hostels for Boys & Girls",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels in HSR Layout with secure dining and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹4.9 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Biocon",
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture",
        "Cognizant",
        "Eurofins"
      ]
    },
    "scholarships": [
      "Oxford Educational Trust Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "HSR Layout Hub",
      "Autonomous",
      "NAAC A",
      "Biotech & IT Leader"
    ]
  },
  {
    "id": "bishop-cotton-women-bengaluru",
    "name": "Bishop Cotton Women's Christian College, Mission Road, Bengaluru",
    "kannadaName": "ಬಿಷಪ್ ಕಾಟನ್ ಮಹಿಳಾ ಕ್ರಿಶ್ಚಿಯನ್ ಕಾಲೇಜು, ಮಿಷನ್ ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "Bishop Cotton Women's College",
    "tagline": "Historic Women's Higher Education Institution under CSI Karnataka Central Diocese (Estd 1987)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided",
    "established": 1987,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "No. 19, CSI Compound, Mission Road, Bengaluru, Karnataka 560027",
    "pincode": "560027",
    "phone": "+91 80 2221 2933, +91 80 2212 9880",
    "email": "cottonscollege@gmail.com",
    "website": "https://www.bcwcc.edu.in",
    "mapQuery": "Bishop+Cotton+Womens+Christian+College+Mission+Road+Bengaluru",
    "description": "Bishop Cotton Women's Christian College on Mission Road is renowned for holistic women's education, offering BCA, B.Com, BBA, B.Sc (Computer Science, Home Science, Chemistry), and BA degrees.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit Admission"
      },
      {
        "name": "BBA & B.Sc",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹60,000 - ₹85,000 / Year",
        "eligibility": "10+2 min 50%",
        "entranceExam": "Merit Screening"
      }
    ],
    "admissionProcess": "Online application at bcwcc.edu.in -> Merit list.",
    "facilities": [
      "Central Mission Road Campus",
      "Computer Labs",
      "Library",
      "Chapel & Auditorium",
      "Girls Hostel"
    ],
    "hostelAvailable": true,
    "hostelDetails": "On-campus women's hostel with high security and dining.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "87%",
      "topRecruiters": [
        "Deloitte",
        "EY",
        "Infosys",
        "Wipro",
        "TCS",
        "Amazon"
      ]
    },
    "scholarships": [
      "CSI Diocese Freeships",
      "SSP Scholarship"
    ],
    "badges": [
      "Mission Road",
      "Women's College",
      "CSI Institution",
      "NAAC A"
    ]
  },
  {
    "id": "al-ameen-arts-science-bengaluru",
    "name": "Al-Ameen Arts, Science & Commerce College, Near Lalbagh, Bengaluru",
    "kannadaName": "ಅಲ್-ಅಮೀನ್ ಕಲಾ, ವಿಜ್ಞಾನ ಮತ್ತು ವಾಣಿಜ್ಯ ಕಾಲೇಜು, ಲಾಲ್‌ಬಾಗ್ ಬಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "Al-Ameen College",
    "tagline": "Premier Minority Higher Education Landmark founded in 1968 by Dr. Mumtaz Ahmed Khan",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided (Minority)",
    "established": 1968,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Hosur Road, Near Lalbagh Main Gate, Bengaluru, Karnataka 560027",
    "pincode": "560027",
    "phone": "+91 80 2222 2402, +91 80 2223 5626",
    "email": "alameen_ascc@yahoo.com",
    "website": "https://www.alameenarts.edu.in",
    "mapQuery": "Al-Ameen+Arts+Science+and+Commerce+College+Lalbagh+Bengaluru",
    "description": "Al-Ameen Arts, Science & Commerce College, situated near Lalbagh Main Gate, was established in 1968 by the visionary Dr. Mumtaz Ahmed Khan. Offering BCA, B.Sc (Microbiology, Biotechnology, CS), B.Com, and BBA with scholarships for minorities and rural students.",
    "courses": [
      {
        "name": "BCA & B.Sc (Computer Science / Biotech)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹45,000 - ₹70,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹35,000 - ₹60,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit List"
      }
    ],
    "admissionProcess": "Apply online through UUCMS and college direct admissions counter.",
    "facilities": [
      "Lalbagh Main Road Campus",
      "Science & Computer Labs",
      "Central Library",
      "Auditorium",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Al-Ameen Trust hostels for boys and girls with clean dining.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12.5 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "Wipro",
        "Infosys",
        "TCS",
        "Accenture",
        "Cognizant",
        "ICICI Bank"
      ]
    },
    "scholarships": [
      "Al-Ameen Trust Freeships",
      "National Minority Scholarship",
      "SSP Scholarship"
    ],
    "badges": [
      "Near Lalbagh",
      "Estd 1968",
      "Minority Hub",
      "Affordable Education"
    ]
  },
  {
    "id": "acharya-institute-graduate-studies",
    "name": "Acharya Institute of Graduate Studies (AIGS), Hesaraghatta, Bengaluru",
    "kannadaName": "ಆಚಾರ್ಯ ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಗ್ರಾಜುಯೇಟ್ ಸ್ಟಡೀಸ್ (ಎ.ಐ.ಜಿ.ಎಸ್), ಹೆಸರಘಟ್ಟ, ಬೆಂಗಳೂರು",
    "shortName": "Acharya Graduate Studies (AIGS)",
    "tagline": "Premier Degree Institution on 120-Acre Acharya Dr. Sarvepalli Radhakrishnan Campus",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Autonomous",
    "established": 2005,
    "affiliation": "Bengaluru City University (BCU) & UGC Autonomous",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Hesaraghatta Main Road, Bengaluru, Karnataka 560107",
    "pincode": "560107",
    "phone": "+91 80 2255 5555, +91 80 2372 2222",
    "email": "admissions@acharya.ac.in",
    "website": "https://www.acharya.ac.in/aigs",
    "mapQuery": "Acharya+Institute+of+Graduate+Studies+Soladevanahalli+Bengaluru",
    "description": "AIGS is part of the sprawling 120-acre Acharya Institutes campus in Soladevanahalli. Autonomous under BCU, it offers cutting-edge BCA (Data Science, Cloud, AI), BBA (Aviation, Digital Marketing, Business Analytics), B.Com, B.Sc (Fashion Design, Psychology, Animation, Biotechnology), and Media Studies.",
    "courses": [
      {
        "name": "BCA (Cloud Computing, AI & Data Science)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹85,000 - ₹1,25,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "BBA (Aviation, Digital Marketing, Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹95,000 - ₹1,45,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Interview"
      },
      {
        "name": "B.Sc (Fashion & Apparel Design, Animation, Biotechnology)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 200,
        "annualFee": "₹80,000 - ₹1,20,000 / Year",
        "eligibility": "10+2 min 50%",
        "entranceExam": "Merit List"
      }
    ],
    "admissionProcess": "Apply online at acharya.ac.in -> Merit screening and document verification.",
    "facilities": [
      "120-Acre Multidisciplinary Campus",
      "Central Library",
      "10,000-Capacity Stadium",
      "International Student Hostels",
      "Innovation Labs"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus luxury and regular hostels with multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Amazon",
        "EY",
        "Cognizant",
        "Deloitte",
        "LTI Mindtree"
      ]
    },
    "scholarships": [
      "Acharya Merit Fellowships",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "120 Acre Campus",
      "Autonomous",
      "NAAC A+",
      "International Students Hub"
    ]
  },
  {
    "id": "cmr-center-business-studies",
    "name": "CMR Center for Business Studies & Degree College, Kalyan Nagar, Bengaluru",
    "kannadaName": "ಸಿ.ಎಂ.ಆರ್ ಸೆಂಟರ್ ಫಾರ್ ಬಿಸಿನೆಸ್ ಸ್ಟಡೀಸ್ & ಡಿಗ್ರಿ ಕಾಲೇಜು, ಕಲ್ಯಾಣ ನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "CMR Center for Business Studies",
    "tagline": "Premier Commerce & Computer Applications College of CMR Group in North-East Bengaluru",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "degree",
    "type": "Private Unaided",
    "established": 1991,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "No. 5, Bhuvanagiri, OMBR Layout, Banaswadi / Kalyan Nagar, Bengaluru, Karnataka 560043",
    "pincode": "560043",
    "phone": "+91 80 2545 3077, +91 80 2545 3088",
    "email": "info.cbs@cmr.ac.in",
    "website": "https://www.cmr.ac.in/institutes/cmr-center-for-business-studies",
    "mapQuery": "CMR+Center+for+Business+Studies+Banaswadi+Bengaluru",
    "description": "CMR Center for Business Studies in HRBR/OMBR Layout Banaswadi is a premier destination for BCA, B.Com, BBA, and MBA programs under CMR Jnanadhara Trust.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹75,000 - ₹1,10,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "BBA (Finance, Marketing, Analytics)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹85,000 - ₹1,25,000 / Year",
        "eligibility": "10+2 min 50%",
        "entranceExam": "Merit Screening"
      }
    ],
    "admissionProcess": "Apply online at cmr.ac.in -> Merit screening.",
    "facilities": [
      "OMBR Layout Campus",
      "Computer Labs",
      "Digital Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "CMR hostels for boys and girls with modern amenities.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "EY",
        "Infosys",
        "Wipro",
        "Deloitte",
        "Amazon"
      ]
    },
    "scholarships": [
      "CMR Leadership Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "CMR Group",
      "Banaswadi / HRBR",
      "NAAC A"
    ]
  },
  {
    "id": "sindhi-college-bengaluru",
    "name": "Sindhi College, Kempapura, Hebbal, Bengaluru",
    "kannadaName": "ಸಿಂಧಿ ಕಾಲೇಜು, ಕೆಂಪಾಪುರ, ಹೆಬ್ಬಾಳ, ಬೆಂಗಳೂರು",
    "shortName": "Sindhi College Hebbal",
    "tagline": "Reputed Commerce, Computer Applications & Management Institution in North Bengaluru",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Unaided",
    "established": 2002,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "33/2B, Kempapura, Hebbal, Bengaluru, Karnataka 560024",
    "pincode": "560024",
    "phone": "+91 80 2363 7543, +91 80 2363 7544",
    "email": "mail@sindhicollege.edu.in",
    "website": "https://www.sindhicollege.edu.in",
    "mapQuery": "Sindhi+College+Kempapura+Hebbal+Bengaluru",
    "description": "Sindhi College, established in 2002 under Sindhi Seva Samiti, offers high-quality BCA, B.Com, BBA, B.Sc, and M.Com programs with dedicated skill development.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "BBA (Business Administration)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 150,
        "annualFee": "₹75,000 - ₹1,10,000 / Year",
        "eligibility": "10+2 min 50%",
        "entranceExam": "Merit List"
      }
    ],
    "admissionProcess": "Apply online at sindhicollege.edu.in.",
    "facilities": [
      "Kempapura Campus",
      "Computer Labs",
      "Library",
      "Auditorium"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Nearby student PG accommodations across Hebbal.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "TCS",
        "Wipro",
        "Infosys",
        "EY",
        "Concentrix"
      ]
    },
    "scholarships": [
      "Sindhi Seva Samiti Freeships",
      "SSP Scholarship"
    ],
    "badges": [
      "Hebbal Kempapura",
      "NAAC A",
      "Sindhi Seva Samiti"
    ]
  },
  {
    "id": "east-point-higher-education",
    "name": "East Point College of Higher Education, Bidarahalli, Bengaluru",
    "kannadaName": "ಈಸ್ಟ್ ಪಾಯಿಂಟ್ ಉನ್ನತ ಶಿಕ್ಷಣ ಕಾಲೇಜು, ಬಿದರಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "East Point Higher Education",
    "tagline": "Premier Multidisciplinary Degree Institution on 100-Acre Jnana Prabha Campus",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "degree",
    "type": "Private Unaided",
    "established": 1997,
    "affiliation": "Bengaluru North University (BNU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Jnana Prabha, East Point Campus, Virgo Nagar Post, Bidarahalli, Bengaluru, Karnataka 560049",
    "pincode": "560049",
    "phone": "+91 80 2561 3044, +91 72042 29999",
    "email": "admissions@eastpoint.ac.in",
    "website": "https://www.eastpoint.ac.in",
    "mapQuery": "East+Point+Campus+Bidarahalli+Virgo+Nagar+Bengaluru",
    "description": "East Point College of Higher Education, situated on the 100-acre lush green Jnana Prabha campus in Bidarahalli, East Bengaluru, offers BCA, B.Com, BBA, B.Sc, and M.Com programs.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "BBA & B.Sc",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹70,000 - ₹1,05,000 / Year",
        "eligibility": "10+2 min 50%",
        "entranceExam": "Merit Allotment"
      }
    ],
    "admissionProcess": "Apply online at eastpoint.ac.in -> Counseling.",
    "facilities": [
      "100-Acre Jnana Prabha Campus",
      "Central Library",
      "Boys & Girls Hostels",
      "Sports Complex",
      "Attached Hospital"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Modern residential hostels with multi-cuisine dining and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "87%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "EY"
      ]
    },
    "scholarships": [
      "MG Charitable Trust Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "100 Acre Campus",
      "Bidarahalli",
      "East Point Group"
    ]
  },
  {
    "id": "baldwin-methodist-bengaluru",
    "name": "Baldwin Methodist College, Richmond Town, Bengaluru",
    "kannadaName": "ಬಾಲ್ಡ್ವಿನ್ ಮೆಥೋಡಿಸ್ಟ್ ಕಾಲೇಜು, ರಿಚ್ಮಂಡ್ ಟೌನ್, ಬೆಂಗಳೂರು",
    "shortName": "Baldwin Methodist College",
    "tagline": "Historic Christian Minority Degree Institution in Central Bengaluru (Estd 1988)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided (Minority)",
    "established": 1988,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "B++",
    "rating": 4.5,
    "address": "Hosur Road, Richmond Town, Bengaluru, Karnataka 560025",
    "pincode": "560025",
    "phone": "+91 80 2221 2174, +91 80 2221 2175",
    "email": "principal@bmcblr.edu.in",
    "website": "https://www.bmcblr.edu.in",
    "mapQuery": "Baldwin+Methodist+College+Richmond+Town+Bengaluru",
    "description": "Baldwin Methodist College, managed by the Methodist Church in India, is situated in central Richmond Town. Offering BCA, B.Com, and BBA degrees.",
    "courses": [
      {
        "name": "BCA, B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹60,000 - ₹90,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit Based"
      }
    ],
    "admissionProcess": "Apply online at bmcblr.edu.in.",
    "facilities": [
      "Central Bengaluru Campus",
      "Computer Labs",
      "Library",
      "Chapel"
    ],
    "hostelAvailable": false,
    "hostelDetails": "Hostel tie-ups nearby.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "84%"
    },
    "scholarships": [
      "Methodist Trust Freeships",
      "SSP Scholarship"
    ],
    "badges": [
      "Richmond Town",
      "Central Bengaluru",
      "Methodist Institution"
    ]
  },
  {
    "id": "sambhram-academy-bengaluru",
    "name": "Sambhram Academy of Management Studies (SAMS), Vidyaranyapura, Bengaluru",
    "kannadaName": "ಸಂಭ್ರಮ್ ಅಕಾಡೆಮಿ ಆಫ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಸ್ಟಡೀಸ್ (ಎಸ್.ಎ.ಎಂ.ಎಸ್), ವಿದ್ಯಾರಣ್ಯಪುರ, ಬೆಂಗಳೂರು",
    "shortName": "Sambhram Academy",
    "tagline": "Premier Degree & Management Hub in North Bengaluru under Sambhram Group",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "degree",
    "type": "Private Unaided",
    "established": 1999,
    "affiliation": "Bengaluru City University (BCU)",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "M.S. Palya, Via Jalahalli East, Vidyaranyapura Post, Bengaluru, Karnataka 560097",
    "pincode": "560097",
    "phone": "+91 80 2364 8444, +91 80 2364 8445",
    "email": "sams@sambhram.org",
    "website": "https://www.sambhram.org",
    "mapQuery": "Sambhram+Academy+of+Management+Studies+MS+Palya+Bengaluru",
    "description": "Sambhram Academy of Management Studies (SAMS) in M.S. Palya / Vidyaranyapura offers BCA, B.Com, BBA, MCA, and MBA degrees.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹65,000 - ₹95,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "BBA & MBA",
        "level": "UG/PG",
        "duration": "2 - 3 Years",
        "seats": 180,
        "annualFee": "₹75,000 - ₹1,50,000 / Year",
        "eligibility": "Recognized 12th/Graduation",
        "entranceExam": "Direct / PGCET"
      }
    ],
    "admissionProcess": "Direct online application at sambhram.org.",
    "facilities": [
      "Green Campus in Vidyaranyapura",
      "Computer Centers",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "85%"
    },
    "scholarships": [
      "Sambhram Trust Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "Vidyaranyapura",
      "Sambhram Group",
      "NAAC A"
    ]
  },
  {
    "id": "bms-commerce-law-bengaluru",
    "name": "BMS College of Commerce and Management & BMS Law College, Bengaluru",
    "kannadaName": "ಬಿ.ಎಂ.ಎಸ್. ವಾಣಿಜ್ಯ ಮತ್ತು ನಿರ್ವಹಣಾ ಕಾಲೇಜು ಹಾಗೂ ಬಿ.ಎಂ.ಎಸ್. ಕಾನೂನು ಕಾಲೇಜು",
    "shortName": "BMS Commerce & Law",
    "tagline": "Premier Autonomous Commerce, Management & Law Campus under Historic BMSET (Estd 1950)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "degree",
    "type": "Private Aided / Autonomous",
    "established": 1950,
    "affiliation": "Bengaluru City University (BCU) & Karnataka State Law University (KSLU)",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "No. 97, Kavi Lakshmisha Road, V.V. Puram, Bengaluru, Karnataka 560004",
    "pincode": "560004",
    "phone": "+91 80 2661 0174, +91 80 2661 0175",
    "email": "principal@bmsccm.ac.in, info@bmslc.ac.in",
    "website": "https://www.bmsccm.ac.in",
    "mapQuery": "BMS+College+of+Commerce+and+Management+VV+Puram+Bengaluru",
    "description": "BMS College of Commerce and Management and BMS Law College in VV Puram are prestigious institutions under the BMS Educational Trust (BMSET). Offering BCA, B.Com, BBA, BA LLB, and BBA LLB degrees.",
    "courses": [
      {
        "name": "BCA (Computer Applications - AI / Cloud)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 180,
        "annualFee": "₹80,000 - ₹1,15,000 / Year",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "Direct Merit Based"
      },
      {
        "name": "B.Com & BBA (Regular, Professional)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹65,000 - ₹1,20,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "Merit Based"
      },
      {
        "name": "5-Year Integrated BA LLB / BBA LLB",
        "level": "UG",
        "duration": "5 Years",
        "seats": 120,
        "annualFee": "₹85,000 - ₹1,35,000 / Year",
        "eligibility": "10+2 with min 45%",
        "entranceExam": "CLAT / Merit Interview"
      }
    ],
    "admissionProcess": "Apply online at bmsccm.ac.in / bmslc.ac.in -> Merit screening.",
    "facilities": [
      "Historic VV Puram Campus",
      "Moot Court Hall",
      "Digital Central Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "BMSET hostels with clean dining and security.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Deloitte",
        "EY",
        "KPMG",
        "Amazon",
        "Infosys",
        "Trilegal",
        "Shardul Amarchand"
      ]
    },
    "scholarships": [
      "BMSET Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "BMSET Trust",
      "VV Puram",
      "NAAC A+",
      "Commerce & Law Landmark"
    ]
  },
  {
    "id": "gfgc-tumakuru",
    "name": "Government First Grade College (GFGC), Tumakuru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ತುಮಕೂರು",
    "shortName": "GFGC Tumakuru",
    "tagline": "Premier Government Degree Institution of Tumakuru District with 4000+ Students",
    "division": "bengaluru",
    "district": "Tumakuru",
    "taluk": "Tumakuru",
    "stream": "degree",
    "type": "Government",
    "established": 1982,
    "affiliation": "Tumkur University",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "B.H. Road, Near Town Hall, Tumakuru, Karnataka 572101",
    "pincode": "572101",
    "phone": "+91 816 2278456",
    "email": "gfgctumkur@gmail.com",
    "website": "https://gfgc.kar.nic.in/tumkur",
    "mapQuery": "Government+First+Grade+College+BH+Road+Tumakuru",
    "description": "GFGC Tumakuru on BH Road is the leading public degree institution of Tumakuru district. Affiliated with Tumkur University, offering BCA, B.Com, B.Sc, BBA, and BA programs with heavily subsidized government fees and scholarships.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years (NEP)",
        "seats": 120,
        "annualFee": "₹6,000 / Year",
        "eligibility": "10+2 with Math/CS min 45%",
        "entranceExam": "UUCMS Merit"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹4,500 - ₹5,800 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Portal"
      },
      {
        "name": "B.Sc (Physics, Chemistry, Math, Computer Science)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹5,200 / Year",
        "eligibility": "10+2 Science min 45%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "Direct single-window admission through UUCMS Karnataka (uucms.karnataka.gov.in).",
    "facilities": [
      "Tumakuru Central BH Road Campus",
      "Computer Labs",
      "Library with 60,000+ Books",
      "BCM/Govt Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Free government BCM/Social Welfare hostel facilities for SC, ST, OBC and rural students.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "78%"
    },
    "scholarships": [
      "Full Fee Exemption for SC/ST/Cat-1",
      "SSP Karnataka & Vidyasiri Scholarships"
    ],
    "badges": [
      "Tumakuru District Hub",
      "Govt College",
      "Low Fees ₹4.5k",
      "UUCMS Direct"
    ]
  },
  {
    "id": "sahyadri-shivamogga",
    "name": "Sahyadri Science & Arts College (Autonomous), Shivamogga",
    "kannadaName": "ಸಹ್ಯಾದ್ರಿ ವಿಜ್ಞಾನ ಹಾಗೂ ಕಲಾ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಶಿವಮೊಗ್ಗ",
    "shortName": "Sahyadri College Shivamogga",
    "tagline": "Historic 84-Year Landmark of Malnad Higher Education founded in 1940 (Kuvempu University)",
    "division": "bengaluru",
    "district": "Shivamogga",
    "taluk": "Shivamogga",
    "stream": "degree",
    "type": "Government Constituent / Autonomous",
    "established": 1940,
    "affiliation": "Kuvempu University & UGC Autonomous",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Vidyanagar, B.H. Road, Shivamogga, Karnataka 577203",
    "pincode": "577203",
    "phone": "+91 8182 240435, +91 8182 240436",
    "email": "sahyadriscience@gmail.com",
    "website": "https://sahyadrisciencecollege.in",
    "mapQuery": "Sahyadri+Science+College+Vidyanagar+Shivamogga",
    "description": "Sahyadri Science College, established in 1940 and the alma mater of Rashtrakavi Kuvempu and former CM S. Bangarappa, is an iconic autonomous constituent college of Kuvempu University. Spread over 80 acres in Vidyanagar, offering BCA, B.Sc, B.Com, and PG programs.",
    "courses": [
      {
        "name": "BCA (Bachelor of Computer Applications)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 120,
        "annualFee": "₹18,000 / Year (Subsidized Autonomous Rate)",
        "eligibility": "10+2 with Math/CS min 50%",
        "entranceExam": "UUCMS Merit Based Admission"
      },
      {
        "name": "B.Sc (Biotechnology, Microbiology, Physics, Math, Chemistry)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 400,
        "annualFee": "₹8,000 - ₹14,000 / Year",
        "eligibility": "PUC Science min 50%",
        "entranceExam": "UUCMS Single Window"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹10,000 - ₹16,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "Apply online through UUCMS Karnataka Portal -> Kuvempu University counseling.",
    "facilities": [
      "80-Acre Heritage Vidyanagar Campus",
      "Advanced Science & Computing Labs",
      "Central Library",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate government and constituent university hostels on campus with mess.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Biocon",
        "Cognizant",
        "Govt Sector"
      ]
    },
    "scholarships": [
      "SSP Post-Matric Scholarship",
      "Kuvempu University Merit Fellowships"
    ],
    "badges": [
      "Heritage Estd 1940",
      "80 Acre Campus",
      "Kuvempu Alma Mater",
      "NAAC A"
    ]
  },
  {
    "id": "gfgc-davanagere",
    "name": "Government First Grade College & PG Centre, Davanagere",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು ಹಾಗೂ ಸ್ನಾತಕೋತ್ತರ ಕೇಂದ್ರ, ದಾವಣಗೆರೆ",
    "shortName": "GFGC Davanagere",
    "tagline": "Premier Public Degree & PG College of Central Karnataka (Estd 1971)",
    "division": "bengaluru",
    "district": "Davanagere",
    "taluk": "Davanagere",
    "stream": "degree",
    "type": "Government",
    "established": 1971,
    "affiliation": "Davanagere University",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "MCC B Block, Kuvempu Road, Davanagere, Karnataka 577004",
    "pincode": "577004",
    "phone": "+91 8192 220556",
    "email": "gfgcdvg@gmail.com",
    "website": "https://gfgc.kar.nic.in/davanagere",
    "mapQuery": "Government+First+Grade+College+MCC+B+Block+Davanagere",
    "description": "GFGC Davanagere is the central higher education institution for Davanagere district. Offering BCA, B.Com, B.Sc, BBA, BA, and M.Com/M.Sc PG courses with subsidized government fees.",
    "courses": [
      {
        "name": "BCA & B.Sc (Computer Science / Math)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 150,
        "annualFee": "₹6,000 / Year",
        "eligibility": "10+2 with Math/CS min 45%",
        "entranceExam": "UUCMS Merit"
      },
      {
        "name": "B.Com & BBA",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10+2 Any Stream min 40%",
        "entranceExam": "UUCMS Single Window"
      }
    ],
    "admissionProcess": "Direct single-window admission through UUCMS Karnataka.",
    "facilities": [
      "MCC B Block Campus",
      "Computer Lab",
      "Central Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government BCM/Social Welfare hostels nearby.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹9 LPA",
      "placedPercentage": "79%"
    },
    "scholarships": [
      "Full Govt Fee Exemption for SC/ST",
      "SSP Scholarship"
    ],
    "badges": [
      "Davanagere Hub",
      "Govt College",
      "Low Fees",
      "UUCMS Direct"
    ]
  },
  {
    "id": "gfgc-kolar",
    "name": "Government First Grade College (GFGC), Kolar",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ಕೋಲಾರ",
    "shortName": "GFGC Kolar",
    "tagline": "Premier Public Degree Institution of Kolar District (Bengaluru North University)",
    "division": "bengaluru",
    "district": "Kolar",
    "taluk": "Kolar",
    "stream": "degree",
    "type": "Government",
    "established": 1980,
    "affiliation": "Bengaluru North University (BNU)",
    "naacGrade": "B++",
    "rating": 4.5,
    "address": "Gulpet, Near Clock Tower, Kolar, Karnataka 563101",
    "pincode": "563101",
    "phone": "+91 8152 222340",
    "email": "gfgckolar@gmail.com",
    "website": "https://gfgc.kar.nic.in/kolar",
    "mapQuery": "Government+First+Grade+College+Gulpet+Kolar",
    "description": "GFGC Kolar provides accessible, quality degree education to thousands of students across Kolar district with BCA, B.Com, BBA, B.Sc, and BA courses.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 300,
        "annualFee": "₹4,800 - ₹6,500 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "UUCMS online counseling.",
    "facilities": [
      "Kolar Town Campus",
      "Computer Lab",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government post-matric hostels available.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "76%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Govt Fee Waiver"
    ],
    "badges": [
      "Kolar District Hub",
      "Govt College",
      "Low Fees"
    ]
  },
  {
    "id": "gfgc-ramanagara",
    "name": "Government First Grade College (GFGC), Ramanagara",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ರಾಮನಗರ",
    "shortName": "GFGC Ramanagara",
    "tagline": "Leading Public Higher Education College of Silk City Ramanagara",
    "division": "bengaluru",
    "district": "Ramanagara",
    "taluk": "Ramanagara",
    "stream": "degree",
    "type": "Government",
    "established": 1984,
    "affiliation": "Bangalore University (BU)",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "BM Road, Ramanagara, Karnataka 562159",
    "pincode": "562159",
    "phone": "+91 80 2727 1250",
    "email": "gfgcramanagara@gmail.com",
    "website": "https://gfgc.kar.nic.in/ramanagara",
    "mapQuery": "Government+First+Grade+College+Ramanagara",
    "description": "GFGC Ramanagara on BM Road provides higher education across Silk City Ramanagara and surrounding rural taluks with BCA, B.Com, BBA, B.Sc, and BA programs.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 250,
        "annualFee": "₹4,800 - ₹6,500 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "UUCMS single-window portal.",
    "facilities": [
      "BM Road Campus",
      "Computer Center",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "State government hostels available for eligible students.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "75%"
    },
    "scholarships": [
      "SSP Scholarship",
      "SC/ST Full Waiver"
    ],
    "badges": [
      "Ramanagara Silk City",
      "Govt College",
      "Low Fees"
    ]
  },
  {
    "id": "gfgc-chikkaballapura",
    "name": "Government First Grade College (GFGC), Chikkaballapura",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು, ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    "shortName": "GFGC Chikkaballapura",
    "tagline": "Premier Public Degree Institution of Chikkaballapura District (Birthplace of Sir MV)",
    "division": "bengaluru",
    "district": "Chikkaballapura",
    "taluk": "Chikkaballapura",
    "stream": "degree",
    "type": "Government",
    "established": 1980,
    "affiliation": "Bengaluru North University (BNU)",
    "naacGrade": "B++",
    "rating": 4.5,
    "address": "BB Road, Near Court Complex, Chikkaballapura, Karnataka 562101",
    "pincode": "562101",
    "phone": "+91 8156 272250",
    "email": "gfgcchikkaballapur@gmail.com",
    "website": "https://gfgc.kar.nic.in/chikkaballapura",
    "mapQuery": "Government+First+Grade+College+Chikkaballapura",
    "description": "GFGC Chikkaballapura offers affordable degree education in BCA, B.Com, BBA, B.Sc, and BA with state-of-the-art computer labs and experienced faculty.",
    "courses": [
      {
        "name": "BCA & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 280,
        "annualFee": "₹4,800 - ₹6,500 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "UUCMS portal merit counseling.",
    "facilities": [
      "BB Road Campus",
      "Computer Lab",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government BCM/Social Welfare hostels in Chikkaballapura.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "75%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Govt Fee Waiver"
    ],
    "badges": [
      "Chikkaballapura Hub",
      "Govt College",
      "Low Fees"
    ]
  },
  {
    "id": "gfgc-chitradurga",
    "name": "Government First Grade College (GFGC & Science College), Chitradurga",
    "kannadaName": "ಸರ್ಕಾರಿ ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು ಹಾಗೂ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಚಿತ್ರದುರ್ಗ",
    "shortName": "GFGC Chitradurga",
    "tagline": "Historic Public Degree Institution of the Fort City Chitradurga",
    "division": "bengaluru",
    "district": "Chitradurga",
    "taluk": "Chitradurga",
    "stream": "degree",
    "type": "Government",
    "established": 1973,
    "affiliation": "Davanagere University",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "BD Road, Fort Area, Chitradurga, Karnataka 577501",
    "pincode": "577501",
    "phone": "+91 8194 222850",
    "email": "gfgcchitradurga@gmail.com",
    "website": "https://gfgc.kar.nic.in/chitradurga",
    "mapQuery": "Government+First+Grade+College+BD+Road+Chitradurga",
    "description": "GFGC Chitradurga on BD Road provides quality higher education in BCA, B.Sc, B.Com, BBA, and BA across the historic Fort City.",
    "courses": [
      {
        "name": "BCA, B.Sc & B.Com",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 350,
        "annualFee": "₹4,500 - ₹6,500 / Year",
        "eligibility": "10+2 min 40%",
        "entranceExam": "UUCMS Merit"
      }
    ],
    "admissionProcess": "Direct single-window admission through UUCMS.",
    "facilities": [
      "BD Road Campus",
      "Science Labs",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government post-matric hostels available.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "78%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Govt Fee Exemption"
    ],
    "badges": [
      "Chitradurga Fort City",
      "Govt College",
      "Low Fees"
    ]
  },
  {
    "id": "iisc-bengaluru",
    "name": "Indian Institute of Science (IISc), Bengaluru",
    "kannadaName": "ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ಐ.ಐ.ಎಸ್ಸಿ), ಬೆಂಗಳೂರು",
    "shortName": "IISc Bengaluru",
    "tagline": "India's #1 Premier Research & Higher Learning Institute (Estd 1909 by Jamsetji Tata)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Deemed University / Institute of Eminence",
    "established": 1909,
    "affiliation": "UGC / Institute of Eminence (Ministry of Education, Govt of India)",
    "naacGrade": "A++",
    "rating": 4.9,
    "address": "CV Raman Road, Armane Nagar, Bengaluru, Karnataka 560012",
    "pincode": "560012",
    "phone": "+91 80 2293 2004, +91 80 2293 2210",
    "email": "registrar@iisc.ac.in, admission@iisc.ac.in",
    "website": "https://www.iisc.ac.in",
    "mapQuery": "Indian+Institute+of+Science+Bengaluru",
    "description": "Founded in 1909 by Jamsetji Tata and Maharaja Nalwadi Krishnaraja Wadiyar, IISc Bengaluru is India's crown jewel of scientific research and higher education. Consistently ranked NIRF #1 University in India.",
    "courses": [
      {
        "name": "B.Tech in Mathematics & Computing",
        "level": "UG",
        "duration": "4 Years",
        "seats": 52,
        "annualFee": "₹2,20,000 / Year",
        "eligibility": "10+2 with PCM + Top Rank in JEE Advanced",
        "entranceExam": "JEE Advanced"
      },
      {
        "name": "Bachelor of Science (Research - Physics, Chem, Bio, Math)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹35,000 / Year (Govt Subsidized)",
        "eligibility": "10+2 PCM/PCB min 60% + Top JEE/NEET/IAT",
        "entranceExam": "JEE Main / JEE Advanced / NEET UG / IAT"
      }
    ],
    "admissionProcess": "National Entrance Test (JEE Advanced / JEE Main / NEET / GATE) followed by centralized merit allotment.",
    "facilities": [
      "400+ Acre Green Heritage Campus",
      "Param Pravega Supercomputer",
      "Central Library",
      "Research Hostels",
      "Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Full residential campus with high-speed Wi-Fi, single and double occupancy hostel rooms, multi-cuisine messes.",
    "placementStats": {
      "averagePackage": "₹28.5 LPA",
      "highestPackage": "₹85 LPA",
      "placedPercentage": "98%",
      "topRecruiters": [
        "Google Research",
        "Microsoft",
        "Apple",
        "ISRO",
        "DRDO",
        "Intel",
        "NVIDIA"
      ]
    },
    "scholarships": [
      "IISc Merit Fellowship (₹5,000 - ₹7,000/mo)",
      "PMRF Fellowship",
      "INSPIRE"
    ],
    "badges": [
      "NIRF #1 University",
      "Heritage 1909",
      "Institute of Eminence",
      "High Placements"
    ]
  },
  {
    "id": "rvce-bengaluru",
    "name": "R.V. College of Engineering (RVCE Autonomous), Bengaluru",
    "kannadaName": "ಆರ್.ವಿ. ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "RVCE Bengaluru",
    "tagline": "Karnataka's #1 Ranked Autonomous VTU Engineering College with Stellar Placements (Estd 1963)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1963,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "Mysuru Road, RV Vidyaniketan Post, Bengaluru, Karnataka 560059",
    "pincode": "560059",
    "phone": "+91 80 6818 8100, +91 80 6818 8111",
    "email": "principal@rvce.edu.in, admissions@rvce.edu.in",
    "website": "https://www.rvce.edu.in",
    "mapQuery": "RV+College+of+Engineering+Mysuru+Road+Bengaluru",
    "description": "Established in 1963 by RSST, RVCE Bengaluru is Karnataka's premier autonomous VTU engineering college, famous for highest KCET cutoffs, aerospace & AI centers of excellence, and international placements.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,50,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45% + Top KCET Rank",
        "entranceExam": "KCET (KEA Code: E005) / COMED-K"
      },
      {
        "name": "B.E. Artificial Intelligence & Machine Learning",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,50,000 (ComedK)",
        "eligibility": "PUC/10+2 with PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      },
      {
        "name": "B.E. Electronics & Communication Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      },
      {
        "name": "B.E. Information Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "Admissions via KEA KCET counseling (College Code: E005), COMED-K, and Management Quota.",
    "facilities": [
      "52-Acre Green Campus on Mysuru Road",
      "Bosch, Cisco & Samsung Center of Excellence",
      "Modern Hostels for 2000+",
      "Central Library",
      "Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for men and women on campus with Wi-Fi, South/North Indian mess, 24/7 security.",
    "placementStats": {
      "averagePackage": "₹15.8 LPA",
      "highestPackage": "₹62 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Cisco",
        "Atlassian",
        "Adobe",
        "Qualcomm",
        "NVIDIA"
      ]
    },
    "scholarships": [
      "RSST Merit Scholarships",
      "SSP Post-Matric Karnataka Scholarship"
    ],
    "badges": [
      "#1 VTU College",
      "Autonomous",
      "KEA Code: E005",
      "Highest Placements",
      "NAAC A+"
    ]
  },
  {
    "id": "bmsce-bengaluru",
    "name": "B.M.S. College of Engineering (BMSCE Autonomous), Bengaluru",
    "kannadaName": "ಬಿ.ಎಂ.ಎಸ್. ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "BMSCE Basavanagudi",
    "tagline": "India's First Private Sector Engineering College (Estd 1946 by Bhusanayana Mukundadas Sreenivasaiah)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1946,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A++",
    "rating": 4.9,
    "address": "P.O. Box No. 1908, Bull Temple Road, Basavanagudi, Bengaluru, Karnataka 560019",
    "pincode": "560019",
    "phone": "+91 80 2662 2130, +91 80 2662 2135",
    "email": "principal@bmsce.ac.in, admissions@bmsce.ac.in",
    "website": "https://www.bmsce.ac.in",
    "mapQuery": "BMS+College+of+Engineering+Bull+Temple+Road+Bengaluru",
    "description": "Founded in 1946 by Dharmaprakasha B.M. Sreenivasaiah, BMSCE is an autonomous engineering landmark situated on Bull Temple Road, Basavanagudi. Accredited with NAAC A++ (CGPA 3.83).",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 276,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,50,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45% + Top KCET Rank",
        "entranceExam": "KCET (KEA Code: E003) / COMED-K"
      },
      {
        "name": "B.E. Artificial Intelligence & Data Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "PUC/10+2 with PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      },
      {
        "name": "B.E. Electronics & Communication Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 276,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "Admissions via KEA KCET (College Code: E003), COMED-K, and BMSET Management Quota.",
    "facilities": [
      "Historic 15-Acre Basavanagudi Campus",
      "Platypus Innovation Labs",
      "Central Library",
      "Separate Hostels",
      "Indoor Stadium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate secure hostels for boys and girls with vegetarian and multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹14.2 LPA",
      "highestPackage": "₹55 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Oracle",
        "Cisco",
        "Bosch",
        "Texas Instruments",
        "Deloitte"
      ]
    },
    "scholarships": [
      "BMSET Merit Aid",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "Heritage Estd 1946",
      "NAAC A++ (3.83)",
      "Autonomous VTU",
      "KEA Code: E003"
    ]
  },
  {
    "id": "msrit-bengaluru",
    "name": "Ramaiah Institute of Technology (MSRIT Autonomous), Bengaluru",
    "kannadaName": "ರಾಮಯ್ಯ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಎಂ.ಎಸ್.ಆರ್.ಐ.ಟಿ ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "Ramaiah Institute (MSRIT)",
    "tagline": "Premier Autonomous VTU Engineering Institution founded in 1962 by Dr. M.S. Ramaiah",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1962,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "MSR Nagar, MSRIT Post, Mathikere, Bengaluru, Karnataka 560054",
    "pincode": "560054",
    "phone": "+91 80 2360 0822, +91 80 2360 6934",
    "email": "principal@msrit.edu, admn@msrit.edu",
    "website": "https://www.msrit.edu",
    "mapQuery": "Ramaiah+Institute+of+Technology+Mathikere+Bengaluru",
    "description": "Ramaiah Institute of Technology (MSRIT), established in 1962 by industrialist and philanthropist Dr. M.S. Ramaiah, is an autonomous powerhouse under VTU situated on an expansive campus in Mathikere.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,50,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E006) / COMED-K"
      },
      {
        "name": "B.E. Information Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "PUC with PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      },
      {
        "name": "B.E. Artificial Intelligence & Machine Learning",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E006), COMED-K, and Ramaiah Trust Quota.",
    "facilities": [
      "Mathikere 25-Acre Campus",
      "Centre of Excellence in AI & Cyber Security",
      "Hostels for 2500+",
      "Central Library",
      "Ramaiah Memorial Hospital Support"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for men and women on campus with modern dining.",
    "placementStats": {
      "averagePackage": "₹12.8 LPA",
      "highestPackage": "₹50 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Adobe",
        "Amazon",
        "Capgemini",
        "Cisco",
        "Deloitte",
        "Goldman Sachs",
        "Intuit",
        "Samsung"
      ]
    },
    "scholarships": [
      "Gokula Education Foundation Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "NIRF Top Ranked",
      "Autonomous VTU",
      "KEA Code: E006",
      "Estd 1962"
    ]
  },
  {
    "id": "pes-university-bengaluru",
    "name": "PES University (PESU - Ring Road & Electronic City Campuses), Bengaluru",
    "kannadaName": "ಪಿ.ಇ.ಎಸ್. ವಿಶ್ವವಿದ್ಯಾಲಯ (ರಿಂಗ್ ರೋಡ್ & ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ), ಬೆಂಗಳೂರು",
    "shortName": "PES University (PESU)",
    "tagline": "Top-Tier Private University renowned for Computer Science & High-Tech Placements",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private State University",
    "established": 1988,
    "affiliation": "UGC Recognized Private State University",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka 560085",
    "pincode": "560085",
    "phone": "+91 80 2672 1983, +91 80 2672 2108",
    "email": "admissions@pes.edu",
    "website": "https://pes.edu",
    "mapQuery": "PES+University+Ring+Road+Banashankari+Bengaluru",
    "description": "PES University, founded in 1988 by Dr. M.R. Doreswamy, is one of South India's most prestigious private universities.",
    "courses": [
      {
        "name": "B.Tech in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 720,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹4,50,000 (PESSAT)",
        "eligibility": "10+2 PCM min 50%",
        "entranceExam": "PESSAT / KCET (KEA Code: E007)"
      }
    ],
    "admissionProcess": "PESSAT (All-India Online Test) / KCET State Counseling (College Code: E007).",
    "facilities": [
      "30-Acre Ring Road Campus",
      "Crucible Research Centers",
      "Hostels for 3000+",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate ultra-modern residential hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹14.5 LPA",
      "highestPackage": "₹65 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Apple",
        "Google",
        "Morgan Stanley",
        "Cisco"
      ]
    },
    "scholarships": [
      "Prof CNR Rao Merit Scholarships",
      "MRD Merit Concessions"
    ],
    "badges": [
      "PESSAT / KCET",
      "Top Tier Engineering",
      "₹65 LPA Highest"
    ]
  },
  {
    "id": "dsce-bengaluru",
    "name": "Dayananda Sagar College of Engineering (DSCE Autonomous), Bengaluru",
    "kannadaName": "ದಯಾನಂದ ಸಾಗರ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "DSCE Kumaraswamy Layout",
    "tagline": "Premier Autonomous VTU Institution on 29-Acre Hills with 18+ Engineering Branches",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1979,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru, Karnataka 560078",
    "pincode": "560078",
    "phone": "+91 80 4216 1704, +91 80 2666 2226",
    "email": "principal@dayanandasagar.edu, admissions@dayanandasagar.edu",
    "website": "https://www.dsce.edu.in",
    "mapQuery": "Dayananda+Sagar+College+of+Engineering+Kumaraswamy+Layout+Bengaluru",
    "description": "DSCE Bengaluru, established in 1979 under DSI, is an autonomous VTU college offering the widest range of engineering disciplines across a 29-acre campus in South Bengaluru.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,50,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E008) / COMED-K"
      },
      {
        "name": "B.E. AI & Machine Learning / Data Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "PUC with PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      },
      {
        "name": "B.E. Information Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E008), COMED-K, and Management Quota.",
    "facilities": [
      "29-Acre Scenic Campus",
      "DSI Innovation Centre",
      "Hostels for 2500+",
      "Central Digital Library",
      "Amphitheatre"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels with Wi-Fi, gym, multi-cuisine dining, and 24/7 security.",
    "placementStats": {
      "averagePackage": "₹9.8 LPA",
      "highestPackage": "₹45 LPA",
      "placedPercentage": "93%",
      "topRecruiters": [
        "Amazon",
        "Mercedes-Benz",
        "Accenture",
        "Infosys",
        "Cisco",
        "Oracle",
        "Cognizant"
      ]
    },
    "scholarships": [
      "DSI Merit Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "29 Acre Campus",
      "Autonomous VTU",
      "KEA Code: E008",
      "Top Tier Engineering"
    ]
  },
  {
    "id": "bit-bengaluru",
    "name": "Bangalore Institute of Technology (BIT Autonomous), Bengaluru",
    "kannadaName": "ಬೆಂಗಳೂರು ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಟೆಕ್ನಾಲಜಿ (ಬಿ.ಐ.ಟಿ ಸ್ವಾಯತ್ತ), ಬೆಂಗಳೂರು",
    "shortName": "BIT VV Puram",
    "tagline": "Historic Autonomous VTU Technical Landmark in Central Bengaluru (Estd 1979 by VVS)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1979,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "K.R. Road, V.V. Puram, Bengaluru, Karnataka 560004",
    "pincode": "560004",
    "phone": "+91 80 2661 5865, +91 80 2661 3233",
    "email": "principal@bit-bangalore.edu.in",
    "website": "https://bit-bangalore.edu.in",
    "mapQuery": "Bangalore+Institute+of+Technology+KR+Road+Bengaluru",
    "description": "Bangalore Institute of Technology (BIT), founded in 1979 under Rajya Vokkaligara Sangha, is an autonomous engineering institution in central VV Puram, adjacent to National College Metro Station.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,40,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E009) / COMED-K"
      },
      {
        "name": "B.E. Information Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      },
      {
        "name": "B.E. Electronics & Communication",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E009), COMED-K, and VVS Quota.",
    "facilities": [
      "Central VV Puram Location next to Metro",
      "Advanced Computer Centers",
      "Digital Library",
      "Boys & Girls Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate VVS hostels in VV Puram and Banashankari with hygienic vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹8.8 LPA",
      "highestPackage": "₹38 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Cisco",
        "Oracle",
        "Infosys",
        "Wipro",
        "TCS",
        "Akamai",
        "Dell"
      ]
    },
    "scholarships": [
      "VVS Sangha Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "VV Puram Metro",
      "Autonomous VTU",
      "KEA Code: E009",
      "Estd 1979"
    ]
  },
  {
    "id": "sir-mvit-bengaluru",
    "name": "Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Yelahanka, Bengaluru",
    "kannadaName": "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಸರ್ ಎಂ.ವಿ.ಐ.ಟಿ), ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "Sir MVIT Yelahanka",
    "tagline": "Premier 133-Acre Lush Green Technical Campus named after Bharat Ratna Sir MV (Estd 1986)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Yelahanka",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1986,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "International Airport Road, Hunasamaranahalli, Yelahanka, Bengaluru, Karnataka 562157",
    "pincode": "562157",
    "phone": "+91 80 2846 7248, +91 80 2847 7024",
    "email": "principal@sirmvit.edu, admissions@sirmvit.edu",
    "website": "https://www.sirmvit.edu",
    "mapQuery": "Sir+M+Visvesvaraya+Institute+of+Technology+Hunasamaranahalli+Bengaluru",
    "description": "Sir MVIT, established in 1986 by Sri Krishnadevaraya Educational Trust (KSET) on a scenic 133-acre campus on International Airport Road in Yelahanka, offers autonomous VTU engineering degrees.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E012) / COMED-K"
      },
      {
        "name": "B.E. Information Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E012), COMED-K, and KSET Quota.",
    "facilities": [
      "133-Acre Green Campus near Airport",
      "Hostels for 2000+ Students",
      "Central Digital Library",
      "Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus residential hostels with North/South dining, gym, and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹8.2 LPA",
      "highestPackage": "₹34 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Amazon",
        "TCS",
        "Wipro",
        "Infosys",
        "Mindtree",
        "Capgemini",
        "Collins Aerospace"
      ]
    },
    "scholarships": [
      "KSET Merit Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "133 Acre Campus",
      "Near Airport",
      "Autonomous VTU",
      "KEA Code: E012"
    ]
  },
  {
    "id": "bmsit-bengaluru",
    "name": "BMS Institute of Technology and Management (BMSIT&M Autonomous), Yelahanka",
    "kannadaName": "ಬಿ.ಎಂ.ಎಸ್. ತಾಂತ್ರಿಕ ಮತ್ತು ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ (ಸ್ವಾಯತ್ತ), ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "BMSIT&M Yelahanka",
    "tagline": "Autonomous VTU Institution of BMSET in North Bengaluru (Estd 2002)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Yelahanka",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2002,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru, Karnataka 560064",
    "pincode": "560064",
    "phone": "+91 80 6873 0444, +91 80 2856 1576",
    "email": "principal@bmsit.in",
    "website": "https://www.bmsit.ac.in",
    "mapQuery": "BMS+Institute+of+Technology+and+Management+Yelahanka+Bengaluru",
    "description": "BMSIT&M, established in 2002 under the BMS Educational Trust (BMSET), is an autonomous VTU engineering college in Yelahanka.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,40,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E098) / COMED-K"
      },
      {
        "name": "B.E. AI & Machine Learning",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E098), COMED-K, and BMSET Quota.",
    "facilities": [
      "25-Acre Yelahanka Campus",
      "Research Centers",
      "Central Library",
      "Boys & Girls Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern amenities and dining.",
    "placementStats": {
      "averagePackage": "₹9.2 LPA",
      "highestPackage": "₹44 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Amazon",
        "Dell",
        "Capgemini",
        "Infosys",
        "Wipro",
        "TCS",
        "SAP"
      ]
    },
    "scholarships": [
      "BMSET Merit Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "BMSET Trust",
      "Yelahanka Hub",
      "Autonomous VTU",
      "KEA Code: E098"
    ]
  },
  {
    "id": "rnsit-bengaluru",
    "name": "R.N.S. Institute of Technology (RNSIT Autonomous), Channasandra, Bengaluru",
    "kannadaName": "ಆರ್.ಎನ್.ಎಸ್. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಆರ್.ಎನ್.ಎಸ್.ಐ.ಟಿ ಸ್ವಾಯತ್ತ), ಚನ್ನಸಂದ್ರ",
    "shortName": "RNSIT Rajarajeshwari Nagar",
    "tagline": "Premier Autonomous VTU Institution on 108-Acre Dr. Vishnuvardhan Road Campus (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Dr. Vishnuvardhan Road, Post Box No. 9837, Channasandra, RR Nagar Post, Bengaluru, Karnataka 560098",
    "pincode": "560098",
    "phone": "+91 80 2861 1880, +91 80 2861 1881",
    "email": "principal@rnsit.ac.in",
    "website": "https://www.rnsit.ac.in",
    "mapQuery": "RNS+Institute+of+Technology+Channasandra+Bengaluru",
    "description": "RNSIT, founded in 2001 by industrialist Dr. R.N. Shetty, is an autonomous VTU engineering campus located on Dr. Vishnuvardhan Road in RR Nagar.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,30,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E091) / COMED-K"
      },
      {
        "name": "B.E. Information Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹1,07,000 (Govt/KEA)",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E091), COMED-K, and RNS Trust Quota.",
    "facilities": [
      "108-Acre Green Campus",
      "AI & Robotics Labs",
      "Hostels for 2000+",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels with South/North Indian mess.",
    "placementStats": {
      "averagePackage": "₹8.5 LPA",
      "highestPackage": "₹42 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Amazon",
        "Adobe",
        "Bosch",
        "Infosys",
        "Wipro",
        "Cognizant",
        "TCS"
      ]
    },
    "scholarships": [
      "RNS Trust Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "108 Acre Campus",
      "Autonomous VTU",
      "KEA Code: E091",
      "R.N. Shetty Group"
    ]
  },
  {
    "id": "nmit-bengaluru",
    "name": "Nitte Meenakshi Institute of Technology (NMIT Autonomous), Yelahanka, Bengaluru",
    "kannadaName": "ನಿಟ್ಟೆ ಮೀನಾಕ್ಷಿ ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಟೆಕ್ನಾಲಜಿ (ಸ್ವಾಯತ್ತ), ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "NMIT Yelahanka",
    "tagline": "Autonomous VTU Engineering Institution under Nitte Education Trust (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Yelahanka",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Govindapura, Gollahalli, PB No. 6429, Yelahanka, Bengaluru, Karnataka 560064",
    "pincode": "560064",
    "phone": "+91 80 2216 7800, +91 80 2216 7801",
    "email": "principal@nmit.ac.in",
    "website": "https://www.nmit.ac.in",
    "mapQuery": "Nitte+Meenakshi+Institute+of+Technology+Yelahanka+Bengaluru",
    "description": "NMIT Yelahanka is an autonomous VTU engineering college on a 23-acre campus in North Bengaluru. Renowned for small satellite development (STUDSAT), robotics, and aerospace.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,40,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E094) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E094), COMED-K, and Nitte Trust Quota.",
    "facilities": [
      "23-Acre Campus",
      "ISRO STUDSAT Satellite Ground Station",
      "Hostels for 1800+",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels with Wi-Fi and dining.",
    "placementStats": {
      "averagePackage": "₹8.0 LPA",
      "highestPackage": "₹40 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Amazon",
        "Microsoft",
        "Capgemini",
        "Infosys",
        "Wipro",
        "TCS",
        "Nutanix"
      ]
    },
    "scholarships": [
      "Nitte Merit Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "STUDSAT Satellite",
      "Autonomous VTU",
      "KEA Code: E094",
      "NAAC A+"
    ]
  },
  {
    "id": "dr-ait-bengaluru",
    "name": "Dr. Ambedkar Institute of Technology (Dr. AIT Autonomous), Mallathahalli",
    "kannadaName": "ಡಾ. ಅಂಬೇಡ್ಕರ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಮಲ್ಲತ್ತಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "Dr. AIT Mallathahalli",
    "tagline": "Historic Autonomous Aided Engineering College near Bangalore University (Estd 1980)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru West",
    "stream": "engineering",
    "type": "Government Aided / Autonomous",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "BDA Outer Ring Road, Near Jnana Bharathi Campus, Mallathahalli, Bengaluru, Karnataka 560056",
    "pincode": "560056",
    "phone": "+91 80 2321 1505, +91 80 2321 1506",
    "email": "principal@drait.edu.in",
    "website": "https://www.drait.edu.in",
    "mapQuery": "Dr+Ambedkar+Institute+of+Technology+Mallathahalli+Bengaluru",
    "description": "Dr. AIT, established in 1980 by Sri M.H. Jayaprakash Narayan under PMA Educational Trust, is an autonomous government-aided VTU college spread across 23 acres in Mallathahalli.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹85,000 (Govt/KEA) | ₹1,80,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E014) / COMED-K"
      }
    ],
    "admissionProcess": "Admissions via KEA KCET Counseling (College Code: E014) and COMED-K.",
    "facilities": [
      "23-Acre Campus near BU",
      "Advanced VLSI & IT Labs",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate aided and regular hostels on campus.",
    "placementStats": {
      "averagePackage": "₹7.2 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree",
        "L&T"
      ]
    },
    "scholarships": [
      "Full Govt Fee Concessions for SC/ST",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Aided",
      "Autonomous VTU",
      "KEA Code: E014",
      "Mallathahalli"
    ]
  },
  {
    "id": "nhce-bengaluru",
    "name": "New Horizon College of Engineering (NHCE Autonomous), Marathahalli / Bellandur",
    "kannadaName": "ನ್ಯೂ ಹೊರೈಜನ್ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಮಾರತಹಳ್ಳಿ / ಬೆಳ್ಳಂದೂರು",
    "shortName": "NHCE Bellandur",
    "tagline": "Autonomous VTU Engineering Powerhouse on Outer Ring Road Tech Corridor (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Bellandur Main Road, Near Marathahalli, Outer Ring Road, Bengaluru, Karnataka 560103",
    "pincode": "560103",
    "phone": "+91 80 6629 7777, +91 98805 34935",
    "email": "admissionsnhce@newhorizonindia.edu",
    "website": "https://newhorizonindia.edu/nhengineering",
    "mapQuery": "New+Horizon+College+of+Engineering+Bellandur+Bengaluru",
    "description": "NHCE, located right in the heart of Bengaluru's IT corridor on Outer Ring Road Bellandur, is an autonomous VTU engineering college with world-class international tie-ups (Japan, France).",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,50,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E092) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E092), COMED-K, and Management Quota.",
    "facilities": [
      "Prime ORR Tech Corridor Location",
      "Capgemini & Schneider Center of Excellence",
      "Hostels",
      "Sports Stadium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern rooms, Wi-Fi, and dining.",
    "placementStats": {
      "averagePackage": "₹8.6 LPA",
      "highestPackage": "₹44 LPA",
      "placedPercentage": "93%",
      "topRecruiters": [
        "Amazon",
        "Capgemini",
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture",
        "Rakuten Japan"
      ]
    },
    "scholarships": [
      "NHEI Merit Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "ORR Tech Corridor",
      "Autonomous VTU",
      "KEA Code: E092",
      "Japan Placements"
    ]
  },
  {
    "id": "oxford-engineering-bengaluru",
    "name": "The Oxford College of Engineering (TOCE Autonomous), Bommanahalli, Bengaluru",
    "kannadaName": "ದಿ ಆಕ್ಸ್‌ಫರ್ಡ್ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬೊಮ್ಮನಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "The Oxford Engineering",
    "tagline": "Premier Autonomous VTU Campus on Hosur Road Bommanahalli (Estd 2000)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2000,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Hosur Road, Bommanahalli, Bengaluru, Karnataka 560068",
    "pincode": "560068",
    "phone": "+91 80 6175 4601, +91 80 6175 4602",
    "email": "engprincipal@theoxford.edu",
    "website": "https://www.theoxford.edu/engineering",
    "mapQuery": "The+Oxford+College+of+Engineering+Bommanahalli+Bengaluru",
    "description": "TOCE Bommanahalli, situated on Hosur Road near Electronic City, is an autonomous VTU college offering modern undergraduate and postgraduate programs.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E084) / COMED-K"
      }
    ],
    "admissionProcess": "Admissions via KEA KCET (College Code: E084) and COMED-K.",
    "facilities": [
      "Hosur Road Campus",
      "Advanced Computing Labs",
      "Central Library",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with secure dining.",
    "placementStats": {
      "averagePackage": "₹7.2 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree",
        "Oracle"
      ]
    },
    "scholarships": [
      "Oxford Trust Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "Bommanahalli Hosur Road",
      "Autonomous VTU",
      "KEA Code: E084"
    ]
  },
  {
    "id": "cit-krpuram-bengaluru",
    "name": "Cambridge Institute of Technology (CIT Autonomous), K.R. Puram, Bengaluru",
    "kannadaName": "ಕೇಂಬ್ರಿಡ್ಜ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಟೆಕ್ನಾಲಜಿ (ಸ್ವಾಯತ್ತ), ಕೆ.ಆರ್. ಪುರಂ, ಬೆಂಗಳೂರು",
    "shortName": "Cambridge Institute (CIT)",
    "tagline": "Autonomous VTU Technical Hub in East Bengaluru near ITPL Corridor (Estd 2007)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Jai Bhuvaneshwari Layout, Basavanapura, K.R. Puram, Bengaluru, Karnataka 560036",
    "pincode": "560036",
    "phone": "+91 80 2561 8798, +91 97399 99999",
    "email": "principal@cambridge.edu.in",
    "website": "https://www.cambridge.edu.in",
    "mapQuery": "Cambridge+Institute+of+Technology+KR+Puram+Bengaluru",
    "description": "Cambridge Institute of Technology (CIT), located in KR Puram near Whitefield, is an autonomous VTU college accredited with NAAC A+.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E139) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E139) and COMED-K.",
    "facilities": [
      "KR Puram Campus",
      "Samsung Innovation Lab",
      "Hostels for Boys & Girls",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern amenities and dining.",
    "placementStats": {
      "averagePackage": "₹7.5 LPA",
      "highestPackage": "₹30 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "Amazon",
        "TCS",
        "Infosys",
        "Wipro",
        "Capgemini",
        "Accenture"
      ]
    },
    "scholarships": [
      "Cambridge Trust Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "KR Puram / Whitefield",
      "Autonomous VTU",
      "KEA Code: E139",
      "NAAC A+"
    ]
  },
  {
    "id": "gat-bengaluru",
    "name": "Global Academy of Technology (GAT Autonomous), Rajarajeshwari Nagar, Bengaluru",
    "kannadaName": "ಗ್ಲೋಬಲ್ ಅಕಾಡೆಮಿ ಆಫ್ ಟೆಕ್ನಾಲಜಿ (ಸ್ವಾಯತ್ತ), ರಾಜರಾಜೇಶ್ವರಿ ನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "Global Academy (GAT)",
    "tagline": "Premier Autonomous VTU Institution on 10-Acre Campus in RR Nagar (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Ideal Homes Township, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    "pincode": "560098",
    "phone": "+91 80 2860 3158, +91 80 2860 3159",
    "email": "info@gat.ac.in",
    "website": "https://www.gat.ac.in",
    "mapQuery": "Global+Academy+of+Technology+RR+Nagar+Bengaluru",
    "description": "GAT, situated in the scenic Ideal Homes Township in RR Nagar, is an autonomous VTU college offering cutting-edge engineering programs.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E093) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E093) and COMED-K.",
    "facilities": [
      "RR Nagar Green Campus",
      "Centre of Excellence in IoT",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls on campus.",
    "placementStats": {
      "averagePackage": "₹7.4 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "National Education Foundation Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "RR Nagar Ideal Homes",
      "Autonomous VTU",
      "KEA Code: E093"
    ]
  },
  {
    "id": "acharya-engineering-bengaluru",
    "name": "Acharya Institute of Technology (AIT Autonomous), Soladevanahalli, Bengaluru",
    "kannadaName": "ಆಚಾರ್ಯ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಟೆಕ್ನಾಲಜಿ (ಸ್ವಾಯತ್ತ), ಸೋಲದೇವನಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "Acharya Institute (AIT)",
    "tagline": "Premier Autonomous VTU Institution on 120-Acre Multidisciplinary Campus (Estd 2000)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2000,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Hesaraghatta Main Road, Bengaluru, Karnataka 560107",
    "pincode": "560107",
    "phone": "+91 80 2255 5555, +91 80 2372 2222",
    "email": "admissions@acharya.ac.in",
    "website": "https://www.acharya.ac.in/ait",
    "mapQuery": "Acharya+Institute+of+Technology+Soladevanahalli+Bengaluru",
    "description": "AIT, located on the prestigious 120-acre Acharya campus in Soladevanahalli, is an autonomous VTU college offering B.E., M.Tech, and Ph.D degrees.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E089) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E089) and COMED-K.",
    "facilities": [
      "120-Acre Campus",
      "Modern Computer & Aeronautical Labs",
      "Hostels for 3500+",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels with multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹7.6 LPA",
      "highestPackage": "₹32 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "Amazon",
        "TCS",
        "Infosys",
        "Wipro",
        "EY",
        "Cognizant",
        "LTI Mindtree"
      ]
    },
    "scholarships": [
      "Acharya Merit Fellowships",
      "SSP Scholarship"
    ],
    "badges": [
      "120 Acre Campus",
      "Autonomous VTU",
      "KEA Code: E089",
      "NAAC A+"
    ]
  },
  {
    "id": "sjbit-bengaluru",
    "name": "SJB Institute of Technology (SJBIT), Kengeri, Bengaluru",
    "kannadaName": "ಎಸ್.ಜೆ.ಬಿ. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಸ್.ಜೆ.ಬಿ.ಐ.ಟಿ), ಕೆಂಗೇರಿ, ಬೆಂಗಳೂರು",
    "shortName": "SJBIT Kengeri",
    "tagline": "Premier Engineering Institution under Sri Adichunchanagiri Shikshana Trust (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Kengeri",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "BGS Health & Education City, Dr. Vishnuvardhan Road, Kengeri, Bengaluru, Karnataka 560060",
    "pincode": "560060",
    "phone": "+91 80 2861 2445, +91 80 2861 2446",
    "email": "principal@sjbit.edu.in",
    "website": "https://www.sjbit.edu.in",
    "mapQuery": "SJB+Institute+of+Technology+Kengeri+Bengaluru",
    "description": "SJBIT, situated in BGS Health & Education City in Kengeri, is an autonomous VTU college offering B.E. in CSE, ISE, ECE, AI&ML, and Data Science.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,00,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E097) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E097) and COMED-K.",
    "facilities": [
      "BGS Health City 50-Acre Campus",
      "Hostels for 2000+",
      "Library",
      "Cricket Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with vegetarian dining and security.",
    "placementStats": {
      "averagePackage": "₹7.2 LPA",
      "highestPackage": "₹26 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Accenture",
        "Mindtree",
        "Capgemini"
      ]
    },
    "scholarships": [
      "BGS Trust Merit Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "BGS Trust",
      "Kengeri Health City",
      "Autonomous VTU",
      "KEA Code: E097"
    ]
  },
  {
    "id": "mvjce-bengaluru",
    "name": "MVJ College of Engineering (MVJCE Autonomous), Whitefield, Bengaluru",
    "kannadaName": "ಎಂ.ವಿ.ಜೆ. ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ವೈಟ್‌ಫೀಲ್ಡ್, ಬೆಂಗಳೂರು",
    "shortName": "MVJCE Whitefield",
    "tagline": "Autonomous VTU Institution in the Heart of Whitefield IT Hub (Estd 1982 by Venkatesha Trust)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1982,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Near ITPB, Channasandra, Kadugodi Post, Whitefield, Bengaluru, Karnataka 560067",
    "pincode": "560067",
    "phone": "+91 80 4299 1000, +91 80 2845 4505",
    "email": "principal@mvjce.edu.in",
    "website": "https://www.mvjce.edu.in",
    "mapQuery": "MVJ+College+of+Engineering+Whitefield+Bengaluru",
    "description": "MVJCE Whitefield, located near ITPB, is an autonomous VTU college on a 15-acre campus offering modern engineering and aerospace disciplines.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E010) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E010) and COMED-K.",
    "facilities": [
      "Whitefield IT Corridor Campus",
      "Centre of Excellence in Aero & AI",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern boarding.",
    "placementStats": {
      "averagePackage": "₹7.4 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Capgemini",
        "Airbus"
      ]
    },
    "scholarships": [
      "Venkatesha Trust Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "Whitefield ITPB",
      "Autonomous VTU",
      "KEA Code: E010",
      "Estd 1982"
    ]
  },
  {
    "id": "cmrit-bengaluru",
    "name": "CMR Institute of Technology (CMRIT Autonomous), Whitefield, Bengaluru",
    "kannadaName": "ಸಿ.ಎಂ.ಆರ್. ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಸಿ.ಎಂ.ಆರ್.ಐ.ಟಿ ಸ್ವಾಯತ್ತ), ವೈಟ್‌ಫೀಲ್ಡ್, ಬೆಂಗಳೂರು",
    "shortName": "CMRIT Whitefield",
    "tagline": "Premier Autonomous VTU Institution on ITPL Main Road Kundalahalli (Estd 2000)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru East",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2000,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A++",
    "rating": 4.7,
    "address": "132, AECS Layout, ITPL Main Road, Kundalahalli, Bengaluru, Karnataka 560037",
    "pincode": "560037",
    "phone": "+91 80 2852 4466, +91 80 2852 4467",
    "email": "principal@cmrit.ac.in",
    "website": "https://www.cmrit.ac.in",
    "mapQuery": "CMR+Institute+of+Technology+ITPL+Main+Road+Bengaluru",
    "description": "CMRIT is an autonomous VTU college accredited with NAAC A++ (CGPA 3.71) located on ITPL Main Road Kundalahalli in Whitefield.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,40,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E095) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E095), COMED-K, and CMR Trust Quota.",
    "facilities": [
      "ITPL Main Road Campus",
      "MakerSpace Innovation Labs",
      "Hostels for Boys & Girls",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern amenities and dining.",
    "placementStats": {
      "averagePackage": "₹8.4 LPA",
      "highestPackage": "₹44 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Amazon",
        "Microsoft",
        "TCS",
        "Infosys",
        "Wipro",
        "EY",
        "Deloitte"
      ]
    },
    "scholarships": [
      "CMR Leadership Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "NAAC A++ (3.71)",
      "ITPL Main Road",
      "Autonomous VTU",
      "KEA Code: E095"
    ]
  },
  {
    "id": "gec-ramanagara",
    "name": "Government Engineering College (GEC), Ramanagara",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿ.ಇ.ಸಿ), ರಾಮನಗರ",
    "shortName": "GEC Ramanagara",
    "tagline": "Premier Public Engineering Institution in Silk City under Directorate of Technical Education",
    "division": "bengaluru",
    "district": "Ramanagara",
    "taluk": "Ramanagara",
    "stream": "engineering",
    "type": "Government",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Near Jalamangala Road, Ramanagara, Karnataka 562159",
    "pincode": "562159",
    "phone": "+91 80 2727 6001",
    "email": "gec.ramanagara@gmail.com",
    "website": "https://gec.karnataka.gov.in/gecramanagara",
    "mapQuery": "Government+Engineering+College+Ramanagara",
    "description": "GEC Ramanagara is a state government engineering college offering VTU degrees with subsidized government fees.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E175)"
      }
    ],
    "admissionProcess": "Direct 100% allotment through KEA KCET Online Counseling (College Code: E175).",
    "facilities": [
      "Government Campus",
      "Computing Labs",
      "Central Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government BCM/Social Welfare hostels for engineering students.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "80%"
    },
    "scholarships": [
      "Full Govt Fee Exemption for SC/ST",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Engineering",
      "Low Fees ₹42k",
      "VTU Affiliated",
      "KEA Code: E175"
    ]
  },
  {
    "id": "sit-tumakuru",
    "name": "Siddaganga Institute of Technology (SIT Autonomous), Tumakuru",
    "kannadaName": "ಸಿದ್ಧಗಂಗಾ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ತುಮಕೂರು",
    "shortName": "SIT Tumakuru",
    "tagline": "Iconic Autonomous VTU Engineering Institution founded in 1963 by Sri Sri Shivakumara Swamiji",
    "division": "bengaluru",
    "district": "Tumakuru",
    "taluk": "Tumakuru",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1963,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A++",
    "rating": 4.8,
    "address": "B.H. Road, Tumakuru, Karnataka 572103",
    "pincode": "572103",
    "phone": "+91 816 2214001, +91 816 2282696",
    "email": "principal@sit.ac.in",
    "website": "https://www.sit.ac.in",
    "mapQuery": "Siddaganga+Institute+of+Technology+Tumakuru",
    "description": "SIT Tumakuru, established in 1963 under Sree Siddaganga Math, is an autonomous VTU engineering college on a 65-acre campus. Ranked in NIRF Top 100.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,07,000 (Govt/KEA) | ₹2,20,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E015) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E015) and COMED-K.",
    "facilities": [
      "65-Acre Campus",
      "Advanced Labs & Incubation Center",
      "Hostels for 3000+",
      "Library with 1.3 Lakh Books"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with hygienic pure vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹8.8 LPA",
      "highestPackage": "₹42 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Amazon",
        "Cisco",
        "Siemens",
        "Infosys",
        "TCS",
        "Wipro",
        "Bosch"
      ]
    },
    "scholarships": [
      "Sree Siddaganga Math Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "Siddaganga Math",
      "Autonomous VTU",
      "NAAC A++",
      "KEA Code: E015",
      "NIRF Top 100"
    ]
  },
  {
    "id": "jnnce-shivamogga",
    "name": "Jawaharlal Nehru National College of Engineering (JNNCE Autonomous), Shivamogga",
    "kannadaName": "ಜವಾಹರಲಾಲ್ ನೆಹರು ರಾಷ್ಟ್ರೀಯ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಶಿವಮೊಗ್ಗ",
    "shortName": "JNNCE Shivamogga",
    "tagline": "Premier Autonomous VTU Technical Landmark of Malnad Region (Estd 1980 by NES)",
    "division": "bengaluru",
    "district": "Shivamogga",
    "taluk": "Shivamogga",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Savlanga Road, Navule, Shivamogga, Karnataka 577204",
    "pincode": "577204",
    "phone": "+91 8182 276707, +91 8182 276708",
    "email": "principal@jnnce.ac.in",
    "website": "https://www.jnnce.ac.in",
    "mapQuery": "JNNCE+Engineering+College+Navule+Shivamogga",
    "description": "JNNCE Shivamogga, established in 1980 by National Education Society (NES), is an autonomous VTU engineering college on a 40-acre campus in Navule, Shivamogga.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹85,000 (Govt/KEA) | ₹1,60,000 (ComedK)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E021) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E021) and COMED-K.",
    "facilities": [
      "40-Acre Navule Campus",
      "Hostels for 1800+",
      "Library",
      "Robotics Lab"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with Malnad vegetarian food and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Mindtree",
        "Cognizant",
        "SLK Software",
        "Wipro"
      ]
    },
    "scholarships": [
      "NES Trust Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "Malnad Premier Hub",
      "Autonomous VTU",
      "KEA Code: E021"
    ]
  },
  {
    "id": "ubdt-davanagere",
    "name": "University B.D.T. College of Engineering (UBDTCE Constituent VTU), Davanagere",
    "kannadaName": "ಯೂನಿವರ್ಸಿಟಿ ಬಿ.ಡಿ.ಟಿ. ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಯು.ಬಿ.ಡಿ.ಟಿ), ದಾವಣಗೆರೆ",
    "shortName": "UBDT Davanagere",
    "tagline": "Historic Government Constituent Engineering College of VTU (Estd 1951)",
    "division": "bengaluru",
    "district": "Davanagere",
    "taluk": "Davanagere",
    "stream": "engineering",
    "type": "Government Constituent (VTU)",
    "established": 1951,
    "affiliation": "Constituent College of Visvesvaraya Technological University (VTU)",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Hadadi Road, Davanagere, Karnataka 577004",
    "pincode": "577004",
    "phone": "+91 8192 233412, +91 8192 233414",
    "email": "principal@ubdtce.org",
    "website": "https://www.ubdtce.org",
    "mapQuery": "University+BDT+College+of+Engineering+Davanagere",
    "description": "UBDT College of Engineering, established in 1951, is the only constituent government engineering college under VTU Belagavi, offering heavily subsidized engineering degrees.",
    "courses": [
      {
        "name": "B.E. Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E027)"
      }
    ],
    "admissionProcess": "100% centralized online allotment via KEA KCET Counseling (College Code: E027).",
    "facilities": [
      "Historic 30-Acre Campus",
      "VTU Digital Labs",
      "Hostels for Boys & Girls",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate government constituent hostels with clean mess.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "L&T",
        "Bosch",
        "Tech Mahindra"
      ]
    },
    "scholarships": [
      "Full Fee Exemption for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Constituent College",
      "Estd 1951",
      "Low Govt Fees ₹42k",
      "KEA Code: E027"
    ]
  },
  {
    "id": "dsatm-bengaluru",
    "name": "Dayananda Sagar Academy of Technology and Management (DSATM), Kanakapura Road, Bengaluru",
    "kannadaName": "ದಯಾನಂದ ಸಾಗರ ಅಕಾಡೆಮಿ ಆಫ್ ಟೆಕ್ನಾಲಜಿ ಅಂಡ್ ಮ್ಯಾನೇಜ್ಮೆಂಟ್ (ಡಿಎಸ್‌ಎಟಿಎಂ), ಕನಕಪುರ ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "DSATM Kanakapura Road",
    "tagline": "Premier Technical Institution under DSI on Kanakapura Main Road (Estd 2011)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private",
    "established": 2011,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Opposite Art of Living, Udayapura, Kanakapura Road, Bengaluru, Karnataka 560082",
    "pincode": "560082",
    "phone": "+91 80 2843 2999",
    "email": "principal@dsatm.edu.in",
    "website": "https://www.dsatm.edu.in",
    "mapQuery": "Dayananda+Sagar+Academy+of+Technology+and+Management+Bengaluru",
    "description": "DSATM is a 10-acre state-of-the-art campus on Kanakapura Road, offering NBA-accredited engineering degrees with centralized DSI placements and modern innovation labs.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-DS",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,35,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E171) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E171) & COMEDK UGET.",
    "facilities": [
      "Kanakapura Road Campus",
      "Innovation Labs",
      "Hostels for Boys & Girls",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with modern dining and sports.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Amazon",
        "Mercedes-Benz",
        "Infosys",
        "TCS",
        "Accenture",
        "Capgemini"
      ]
    },
    "scholarships": [
      "DSI Merit Scholarships",
      "SSP State Portal"
    ],
    "badges": [
      "VTU Affiliated",
      "DSI Group",
      "NAAC A+",
      "KEA Code: E171"
    ]
  },
  {
    "id": "ewit-bengaluru",
    "name": "East West Institute of Technology (EWIT), Magadi Main Road, Bengaluru",
    "kannadaName": "ಈಸ್ಟ್ ವೆಸ್ಟ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಇಡಬ್ಲ್ಯುಐಟಿ), ಮಾಗಡಿ ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "EWIT Magadi Road",
    "tagline": "Premier 20-Acre Engineering Campus in West Bengaluru (Estd 2001 by N Subramanya)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru West",
    "stream": "engineering",
    "type": "Private",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Off Magadi Main Road, Vishwaneedam Post, Bengaluru, Karnataka 560091",
    "pincode": "560091",
    "phone": "+91 80 2328 6732",
    "email": "principal@ewit.edu.in",
    "website": "https://www.ewit.edu.in",
    "mapQuery": "East+West+Institute+of+Technology+Magadi+Road+Bengaluru",
    "description": "EWIT Bengaluru is a 20-acre lush green campus offering B.E., M.Tech, MBA, and MCA with strong industrial internship programs and high placement track records.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,95,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E109) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (College Code: E109) and COMED-K.",
    "facilities": [
      "20-Acre Campus",
      "Modern Computer Centers",
      "Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian & non-vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree",
        "Capgemini"
      ]
    },
    "scholarships": [
      "East West Trust Scholarships",
      "SSP Karnataka"
    ],
    "badges": [
      "VTU Affiliated",
      "20-Acre Campus",
      "NAAC A",
      "KEA Code: E109"
    ]
  },
  {
    "id": "dbit-bengaluru",
    "name": "Don Bosco Institute of Technology (DBIT Autonomous), Kumbalagodu, Mysuru Road, Bengaluru",
    "kannadaName": "ಡಾನ್ ಬಾಸ್ಕೊ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಡಿಬಿಐಟಿ ಸ್ವಾಯತ್ತ), ಕುಂಬಳಗೋಡು, ಮೈಸೂರು ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "DBIT Mysore Road",
    "tagline": "Autonomous 36-Acre Engineering Landmark on Bengaluru-Mysuru Highway (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Mysore Road, Kumbalagodu, Bengaluru, Karnataka 560074",
    "pincode": "560074",
    "phone": "+91 80 2843 7028",
    "email": "principal@dbit.co.in",
    "website": "https://www.dbit.co.in",
    "mapQuery": "Don+Bosco+Institute+of+Technology+Kumbalagodu+Bengaluru",
    "description": "DBIT Bengaluru is an autonomous institution on a 36-acre campus on Mysore Road, featuring advanced robotics labs, IoT centres of excellence, and high campus recruitments.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E112) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E112) & COMEDK UGET.",
    "facilities": [
      "36-Acre Sprawling Campus",
      "Centre of Excellence in AI & Robotics",
      "Hostels for Boys & Girls",
      "Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with modern amenities.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Wipro",
        "Cognizant",
        "Mindtree",
        "L&T"
      ]
    },
    "scholarships": [
      "Don Bosco Merit Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Autonomous VTU",
      "36-Acre Campus",
      "NAAC A+",
      "KEA Code: E112"
    ]
  },
  {
    "id": "ksit-bengaluru",
    "name": "K.S. Institute of Technology (KSIT), Kanakapura Road, Bengaluru",
    "kannadaName": "ಕೆ.ಎಸ್. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಕೆಎಸ್‌ಐಟಿ), ಕನಕಪುರ ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "KSIT Kanakapura Road",
    "tagline": "Premier Technical Landmark under Kammavari Sangham (Estd 1999)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private",
    "established": 1999,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "No. 14, Raghuvanahalli, Kanakapura Main Road, Bengaluru, Karnataka 560109",
    "pincode": "560109",
    "phone": "+91 80 2843 5722",
    "email": "principal@ksit.edu.in",
    "website": "https://www.ksit.ac.in",
    "mapQuery": "KS+Institute+of+Technology+Raghuvanahalli+Bengaluru",
    "description": "KSIT Bengaluru offers NBA-accredited engineering programs with state-of-the-art computer labs, incubation centers, and top IT placements.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-DS",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E089) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E089) and COMED-K.",
    "facilities": [
      "Kanakapura Road Campus",
      "Advanced Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.6 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Kammavari Sangham Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "Kammavari Sangham",
      "NAAC A",
      "KEA Code: E089"
    ]
  },
  {
    "id": "atria-bengaluru",
    "name": "Atria Institute of Technology, Hebbal / Anandnagar, Bengaluru",
    "kannadaName": "ಆಟ್ರಿಯಾ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ಹೆಬ್ಬಾಳ / ಆನಂದನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "Atria Hebbal",
    "tagline": "Premier Central Bengaluru Engineering Campus near Hebbal Flyover (Estd 2000)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Private",
    "established": 2000,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A++",
    "rating": 4.6,
    "address": "ASKB Campus, 1st Main Road, AGs Colony, Anandnagar, Hebbal, Bengaluru, Karnataka 560024",
    "pincode": "560024",
    "phone": "+91 80 2354 7299",
    "email": "principal@atria.edu",
    "website": "https://atria.edu",
    "mapQuery": "Atria+Institute+of+Technology+Anandnagar+Hebbal+Bengaluru",
    "description": "Atria Institute of Technology is situated in prime Hebbal near Manyata Tech Park, offering high-standard engineering degrees with direct corporate hiring.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,35,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E092) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E092) and COMED-K.",
    "facilities": [
      "Prime Hebbal Campus",
      "Digital Labs",
      "Hostels for Boys & Girls",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with dining and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Amazon",
        "TCS",
        "Infosys",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Atria Foundation Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "Hebbal Manyata Vicinity",
      "NAAC A++",
      "KEA Code: E092"
    ]
  },
  {
    "id": "hkbk-bengaluru",
    "name": "HKBK College of Engineering, Nagawara, Manyata Tech Park Road, Bengaluru",
    "kannadaName": "ಎಚ್.ಕೆ.ಬಿ.ಕೆ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ನಾಗವಾರ, ಮಾನ್ಯತಾ ಟೆಕ್ ಪಾರ್ಕ್ ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "HKBK Manyata Nagawara",
    "tagline": "Premier Engineering Campus adjacent to Manyata Tech Park (Estd 1997)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Private (Minority)",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "22/1, Nagawara, Arabic College Post, Bengaluru, Karnataka 560045",
    "pincode": "560045",
    "phone": "+91 80 2544 1722",
    "email": "admissions@hkbk.edu.in",
    "website": "https://www.hkbk.edu.in",
    "mapQuery": "HKBK+College+of+Engineering+Nagawara+Bengaluru",
    "description": "HKBK College of Engineering is located right next to Manyata Embassy Business Park, ensuring unparalleled IT internship and placement opportunities for students.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-DS",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E084) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E084) and COMED-K.",
    "facilities": [
      "Nagawara Campus",
      "High-Speed Computing Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Amazon",
        "TCS",
        "Infosys",
        "Wipro",
        "IBM",
        "Manyata Tech Park MNCs"
      ]
    },
    "scholarships": [
      "Minority Directorate Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "Manyata Tech Park Vicinity",
      "NAAC A",
      "KEA Code: E084"
    ]
  },
  {
    "id": "vemana-bengaluru",
    "name": "Vemana Institute of Technology, Koramangala, Bengaluru",
    "kannadaName": "ವೇಮನ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ಕೋರಮಂಗಲ, ಬೆಂಗಳೂರು",
    "shortName": "Vemana Koramangala",
    "tagline": "Premier Engineering Campus in Startup Capital Koramangala (Estd 1999 by KRJS)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "engineering",
    "type": "Private (KRJS)",
    "established": 1999,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "1, 3rd Block, 100 Feet Road, Koramangala, Bengaluru, Karnataka 560034",
    "pincode": "560034",
    "phone": "+91 80 2552 9874",
    "email": "vemanait@rediffmail.com",
    "website": "https://www.vemanait.edu.in",
    "mapQuery": "Vemana+Institute+of+Technology+Koramangala+Bengaluru",
    "description": "Vemana IT, situated in Bengaluru's startup heartland Koramangala, offers direct proximity to hundreds of tech enterprises, incubators, and corporate hiring hubs.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,20,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E094) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E094) and COMED-K.",
    "facilities": [
      "Koramangala 100ft Road Campus",
      "Incubation Center",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel facilities available with dining.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Mindtree",
        "Cognizant",
        "Koramangala Startups"
      ]
    },
    "scholarships": [
      "KRJS Trust Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "Koramangala Landmark",
      "NAAC A",
      "KEA Code: E094"
    ]
  },
  {
    "id": "svit-bengaluru",
    "name": "Sai Vidya Institute of Technology (SVIT), Rajanukunte, Yelahanka, Bengaluru",
    "kannadaName": "ಸಾಯಿ ವಿದ್ಯಾ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಸ್‌ವಿಐಟಿ), ರಾಜಾನುಕುಂಟೆ, ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "Sai Vidya (SVIT) Yelahanka",
    "tagline": "Premier Engineering Campus founded by Eminent Professors (Estd 2008 by SSSE Trust)",
    "division": "bengaluru",
    "district": "Bengaluru Rural",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Private",
    "established": 2008,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Rajanukunte, Doddaballapur Main Road, Yelahanka, Bengaluru, Karnataka 560064",
    "pincode": "560064",
    "phone": "+91 80 2846 8191",
    "email": "principal@saividya.ac.in",
    "website": "https://www.saividya.ac.in",
    "mapQuery": "Sai+Vidya+Institute+of+Technology+Rajanukunte+Bengaluru",
    "description": "SVIT Bengaluru is an NBA-accredited institution founded by academicians, known for high student mentorship, lush 12-acre campus, and consistent VTU ranks.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-DS",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E168) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E168) and COMED-K.",
    "facilities": [
      "12-Acre Green Campus",
      "Robotics Lab",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian meals.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree",
        "KPIT"
      ]
    },
    "scholarships": [
      "SSSE Trust Scholarships",
      "SSP State Portal"
    ],
    "badges": [
      "VTU Affiliated",
      "Professors Initiative",
      "NAAC A",
      "KEA Code: E168"
    ]
  },
  {
    "id": "ncet-devanahalli",
    "name": "Nagarjuna College of Engineering & Technology (NCET Autonomous), Devanahalli, Bengaluru",
    "kannadaName": "ನಾಗಾರ್ಜುನ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎನ್‌ಸಿಇಟಿ ಸ್ವಾಯತ್ತ), ದೇವನಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "NCET Devanahalli Airport",
    "tagline": "Autonomous 100-Acre Engineering Mega-Campus near Kempegowda International Airport (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Rural",
    "taluk": "Devanahalli",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Mudugurki, Venkatagirikote Post, Devanahalli, Bengaluru Rural, Karnataka 562110",
    "pincode": "562110",
    "phone": "+91 80 6746 2700",
    "email": "principal@ncetmail.com",
    "website": "https://www.nagarjunaeducation.com/ncet",
    "mapQuery": "Nagarjuna+College+of+Engineering+and+Technology+Devanahalli",
    "description": "NCET Devanahalli is an autonomous 100-acre green campus situated near Bangalore International Airport, offering industry-integrated B.Tech degrees and startup incubation.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E108) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E108) & COMEDK UGET.",
    "facilities": [
      "100-Acre Campus",
      "Centre for AI & Robotics",
      "Mega Hostels",
      "Sports Stadium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with multi-cuisine food.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Wipro",
        "Cognizant",
        "Mindtree",
        "Capgemini"
      ]
    },
    "scholarships": [
      "NES Trust Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Autonomous VTU",
      "100-Acre Airport Campus",
      "NAAC A+",
      "KEA Code: E108"
    ]
  },
  {
    "id": "svce-bengaluru",
    "name": "Sri Venkateshwara College of Engineering (SVCE Autonomous), Airport Road, Bengaluru",
    "kannadaName": "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಏರ್‌ಪೋರ್ಟ್ ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "SVCE Airport Road",
    "tagline": "Autonomous Engineering Landmark on International Airport Highway (Estd 2001)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "NH-7, Vidyanagar, International Airport Road, Bengaluru, Karnataka 562157",
    "pincode": "562157",
    "phone": "+91 80 6902 2333",
    "email": "principal@svcengg.edu.in",
    "website": "https://www.svcengg.edu.in",
    "mapQuery": "Sri+Venkateshwara+College+of+Engineering+Airport+Road+Bengaluru",
    "description": "SVCE Bengaluru is an autonomous institution on a 30-acre campus on Airport Road, with NBA-accredited branches and specialized AICTE research labs.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Cyber Security",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,20,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E102) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E102) and COMED-K.",
    "facilities": [
      "30-Acre Airport Campus",
      "Apple iOS Lab",
      "Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with modern amenities.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹21 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "SVCE Merit Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Autonomous VTU",
      "Airport Road",
      "NAAC A+",
      "KEA Code: E102"
    ]
  },
  {
    "id": "sjcit-chickballapur",
    "name": "S.J.C. Institute of Technology (SJCIT Autonomous), Chickballapur",
    "kannadaName": "ಎಸ್.ಜೆ.ಸಿ. ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಎಸ್‌ಜೆಸಿಐಟಿ ಸ್ವಾಯತ್ತ), ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    "shortName": "SJCIT Chickballapur",
    "tagline": "Historic Autonomous Technical Landmark under Sri Adichunchanagiri Shikshana Trust (Estd 1986)",
    "division": "bengaluru",
    "district": "Chikkaballapura",
    "taluk": "Chickballapur",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1986,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "PB No. 20, BB Road, Chickballapur, Karnataka 562101",
    "pincode": "562101",
    "phone": "+91 8156 263182",
    "email": "principal@sjcit.ac.in",
    "website": "https://www.sjcit.ac.in",
    "mapQuery": "SJCIT+College+of+Engineering+Chickballapur",
    "description": "SJCIT Chickballapur, founded in 1986 by Sri Balagangadharanatha Swamiji, is an autonomous 53-acre engineering campus offering Aerospace, Computer Science, and AI degrees.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Aeronautical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,85,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E033) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E033) & COMEDK UGET.",
    "facilities": [
      "53-Acre Lush Campus",
      "Aero Simulation Lab",
      "Hostels for 1,500+ Students",
      "Sports Stadium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree",
        "KPIT",
        "L&T"
      ]
    },
    "scholarships": [
      "BGS Trust Merit Aid",
      "SSP Karnataka"
    ],
    "badges": [
      "Autonomous VTU",
      "53-Acre Campus",
      "BGS Trust",
      "Estd 1986",
      "KEA Code: E033"
    ]
  },
  {
    "id": "dr-ttit-kgf",
    "name": "Dr. T. Thimmaiah Institute of Technology (Dr. TTIT), Kolar Gold Fields (KGF), Kolar",
    "kannadaName": "ಡಾ. ಟಿ. ತಿಮ್ಮಯ್ಯ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಡಾ. ಟಿಟಿಐಟಿ), ಕೆ.ಜಿ.ಎಫ್., ಕೋಲಾರ",
    "shortName": "Dr. TTIT KGF Kolar",
    "tagline": "Historic Mining & Technical Engineering Landmark in KGF (Estd 1986 by GVET)",
    "division": "bengaluru",
    "district": "Kolar",
    "taluk": "KGF",
    "stream": "engineering",
    "type": "Private",
    "established": 1986,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Oorgaum Post, Kolar Gold Fields (KGF), Kolar District, Karnataka 563120",
    "pincode": "563120",
    "phone": "+91 8153 260388",
    "email": "principal@drttit.edu.in",
    "website": "https://www.drttit.edu.in",
    "mapQuery": "Dr+T+Thimmaiah+Institute+of+Technology+KGF",
    "description": "Dr. TTIT KGF, established in 1986 by former Minister Dr. T. Thimmaiah, is a pioneer technical institution offering Mining, Computer Science, and Electronics engineering.",
    "courses": [
      {
        "name": "B.E. in Mining Engineering & Computer Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E034)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E034) & Management Quota.",
    "facilities": [
      "Historic 30-Acre Campus",
      "Mining Engineering Lab",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Coal India",
        "Tata Steel",
        "TCS",
        "Infosys",
        "Wipro",
        "BEML"
      ]
    },
    "scholarships": [
      "GVET Trust Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Mining Engineering Pioneer",
      "Estd 1986",
      "KGF Landmark",
      "KEA Code: E034"
    ]
  },
  {
    "id": "ssit-tumakuru",
    "name": "Sri Siddhartha Institute of Technology (SSIT / SSAHE), Maralur, Tumakuru",
    "kannadaName": "ಶ್ರೀ ಸಿದ್ಧಾರ್ಥ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಸ್‌ಎಸ್‌ಐಟಿ), ಮಾರಲೂರು, ತುಮಕೂರು",
    "shortName": "SSIT Tumakuru",
    "tagline": "Premier Engineering Campus under Sri Siddhartha Academy of Higher Education (Estd 1979)",
    "division": "bengaluru",
    "district": "Tumakuru",
    "taluk": "Tumakuru",
    "stream": "engineering",
    "type": "Deemed University (SSAHE)",
    "established": 1979,
    "affiliation": "Sri Siddhartha Academy of Higher Education (Deemed) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Maralur, Kunigal Road, Tumakuru, Karnataka 572105",
    "pincode": "572105",
    "phone": "+91 816 2200314",
    "email": "principal@ssit.edu.in",
    "website": "https://www.ssit.edu.in",
    "mapQuery": "Sri+Siddhartha+Institute+of+Technology+Tumakuru",
    "description": "SSIT Tumakuru is a 50-acre deemed university engineering campus established in 1979 by Dr. G. Parameshwara and Sri Siddhartha Education Society, featuring TEQIP labs and top placements.",
    "courses": [
      {
        "name": "B.Tech in Computer Science & AI-DS",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | Deemed Quota: ₹1,95,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / SSAHE Entrance"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & SSAHE Deemed University Admissions.",
    "facilities": [
      "50-Acre Campus",
      "TEQIP Research Laboratories",
      "Mega Hostels",
      "Sports Pavilion"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with clean dining.",
    "placementStats": {
      "averagePackage": "₹5.6 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree",
        "L&T",
        "KPIT"
      ]
    },
    "scholarships": [
      "SSAHE Merit Scholarships",
      "SSP State Portal"
    ],
    "badges": [
      "SSAHE Deemed University",
      "Estd 1979",
      "50-Acre Campus",
      "KEA Code: E030"
    ]
  },
  {
    "id": "gmit-davanagere",
    "name": "GM Institute of Technology (GMIT), PB Road, Davanagere",
    "kannadaName": "ಜಿ.ಎಂ. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಜಿಎಂಐಟಿ), ಪಿ.ಬಿ. ರಸ್ತೆ, ದಾವಣಗೆರೆ",
    "shortName": "GMIT Davanagere",
    "tagline": "Premier High-Tech Engineering Campus under Srishyla Trust (Estd 2001)",
    "division": "bengaluru",
    "district": "Davanagere",
    "taluk": "Davanagere",
    "stream": "engineering",
    "type": "Private (Srishyla Educational Trust)",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "PB Road, Post Box No. 4, Davanagere, Karnataka 577006",
    "pincode": "577006",
    "phone": "+91 8192 233377",
    "email": "principal@gmit.ac.in",
    "website": "https://www.gmit.ac.in",
    "mapQuery": "GM+Institute+of+Technology+Davanagere",
    "description": "GMIT Davanagere is an autonomous 54-acre modern engineering campus on PB Road, offering cutting-edge robotics, IoT, and Computer Science programs with heavy recruitment.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,95,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E110) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E110) & COMEDK UGET.",
    "facilities": [
      "54-Acre Campus",
      "Centre of Excellence in IoT",
      "Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree",
        "L&T"
      ]
    },
    "scholarships": [
      "Srishyla Trust Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "54-Acre Campus",
      "NAAC A+",
      "KEA Code: E110"
    ]
  },
  {
    "id": "biet-davanagere",
    "name": "Bapuji Institute of Engineering and Technology (BIET Autonomous), Davanagere",
    "kannadaName": "ಬಾಪೂಜಿ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಬಿಐಇಟಿ ಸ್ವಾಯತ್ತ), ದಾವಣಗೆರೆ",
    "shortName": "BIET Davanagere",
    "tagline": "Historic Autonomous Engineering Landmark in Davanagere (Estd 1979 by BEA)",
    "division": "bengaluru",
    "district": "Davanagere",
    "taluk": "Davanagere",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1979,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Shamanur Road, PB No. 325, Davanagere, Karnataka 577004",
    "pincode": "577004",
    "phone": "+91 8192 221461, +91 8192 220938",
    "email": "principal@bietdvg.edu",
    "website": "https://www.bietdvg.edu",
    "mapQuery": "Bapuji+Institute+of+Engineering+and+Technology+Davanagere",
    "description": "BIET Davanagere, founded in 1979 by Bapuji Educational Association (BEA), is a 63-acre autonomous technical institution known for NBA-accredited courses and alumni leadership.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E011) / COMED-K"
      },
      {
        "name": "B.E. in Information Science / Civil / Mechanical (Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E011) & COMEDK UGET.",
    "facilities": [
      "63-Acre Shamanur Road Campus",
      "Advanced Research Centres",
      "Hostels for Boys & Girls",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus residential hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹26 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Bosch",
        "Mercedes-Benz",
        "Mindtree",
        "L&T"
      ]
    },
    "scholarships": [
      "BEA Trust Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "Autonomous VTU",
      "Estd 1979",
      "63-Acre Campus",
      "NAAC A+",
      "KEA Code: E011"
    ]
  },
  {
    "id": "sjmit-chitradurga",
    "name": "S.J.M. Institute of Technology (SJMIT), Chitradurga",
    "kannadaName": "ಶ್ರೀ ಜಗದ್ಗುರು ಮುರುಘರಾಜೇಂದ್ರ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಸ್‌ಜೆಎಂಐಟಿ), ಚಿತ್ರದುರ್ಗ",
    "shortName": "SJMIT Chitradurga",
    "tagline": "Historic Engineering Institution under Sri Murugha Math (Estd 1980)",
    "division": "bengaluru",
    "district": "Chitradurga",
    "taluk": "Chitradurga",
    "stream": "engineering",
    "type": "Private",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "PB No. 73, NH-4 Bypass, Chitradurga, Karnataka 577502",
    "pincode": "577502",
    "phone": "+91 8194 223512",
    "email": "principal@sjmit.ac.in",
    "website": "https://www.sjmit.ac.in",
    "mapQuery": "SJMIT+Engineering+College+Chitradurga",
    "description": "SJMIT Chitradurga, established in 1980 on a 30-acre campus on NH-4, offers engineering programs in Computer Science, AI, Mechanical, and Civil with rich laboratory facilities.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Civil Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E031) / COMED-K"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (KEA Code: E031) and Management Quota.",
    "facilities": [
      "30-Acre Campus",
      "Computer Labs",
      "Hostels with Veg Dining",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian meals.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree"
      ]
    },
    "scholarships": [
      "SJM Vidyapeetha Scholarships",
      "SSP State Portal"
    ],
    "badges": [
      "VTU Affiliated",
      "Estd 1980",
      "Chitradurga Landmark",
      "KEA Code: E031"
    ]
  },
  {
    "id": "gec-challakere-chitradurga",
    "name": "Government Engineering College (GEC), Challakere, Chitradurga",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಚಳ್ಳಕೆರೆ, ಚಿತ್ರದುರ್ಗ",
    "shortName": "GEC Challakere Science City",
    "tagline": "Premier Government Engineering College near Science City Challakere (Estd 2019)",
    "division": "bengaluru",
    "district": "Chitradurga",
    "taluk": "Challakere",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2019,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Science City Road, Challakere, Chitradurga District, Karnataka 577522",
    "pincode": "577522",
    "phone": "+91 8195 250100",
    "email": "gecchallakere@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gecchallakere",
    "mapQuery": "Government+Engineering+College+Challakere+Chitradurga",
    "description": "GEC Challakere is situated adjacent to India's upcoming Science City (ISRO, IISc, DRDO, BARC), offering subsidized government B.E. degrees with state-of-the-art facilities.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Civil Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA Code: E249)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Counseling (College Code: E249).",
    "facilities": [
      "Science City Proximity",
      "Modern Computing Labs",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "DRDO/ISRO Contractors"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Science City Proximity",
      "Low Fees ₹42k",
      "KEA Code: E249"
    ]
  },
  {
    "id": "bmcri-bengaluru",
    "name": "Bangalore Medical College and Research Institute (BMCRI), Bengaluru",
    "kannadaName": "ಬೆಂಗಳೂರು ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಮತ್ತು ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (ಬಿ.ಎಂ.ಸಿ.ಆರ್.ಐ), ಬೆಂಗಳೂರು",
    "shortName": "BMCRI Bengaluru",
    "tagline": "Karnataka's #1 Ranked Government Medical College with Victoria & Bowring Hospitals",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "medical",
    "type": "Government Autonomous",
    "established": 1955,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC Recognized",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "Fort, K.R. Road, Near City Market, Bengaluru, Karnataka 560002",
    "pincode": "560002",
    "phone": "+91 80 2670 1529, +91 80 2670 0810",
    "email": "director_bmcri@yahoo.co.in",
    "website": "https://bmcribangalore.karnataka.gov.in",
    "mapQuery": "Bangalore+Medical+College+and+Research+Institute+Fort+Bengaluru",
    "description": "BMCRI, established in 1955, is Karnataka's undisputed top government medical institution. Affiliated with historic 3,500+ bed hospital complexes (Victoria Hospital, Vani Vilas Women & Children Hospital, Minto Eye Hospital, and Super Speciality Trauma Care).",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 250,
        "annualFee": "₹65,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCB min 50% + Top Rank in NEET UG",
        "entranceExam": "NEET UG (KEA State / MCC AIQ)"
      }
    ],
    "admissionProcess": "Centralized NEET UG Online Counseling conducted by KEA (85% State Quota) and MCC (15% All-India Quota).",
    "facilities": [
      "3500+ Bed Hospital Complex",
      "Minto Ophthalmic Hospital",
      "Vani Vilas Hospital",
      "Super Speciality Trauma Care",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate government medical hostels on campus with hygienic dining.",
    "placementStats": {
      "averagePackage": "₹12.0 LPA",
      "highestPackage": "₹30 LPA",
      "placedPercentage": "100%",
      "topRecruiters": [
        "Victoria Hospital",
        "AIIMS",
        "Apollo",
        "Fortis",
        "Manipal",
        "Govt Health Services"
      ]
    },
    "scholarships": [
      "SSP State Govt Medical Scholarship",
      "National Merit Scholarships"
    ],
    "badges": [
      "#1 Govt Medical in Karnataka",
      "3500+ Beds",
      "Estd 1955",
      "Fort Area",
      "KEA NEET Code: M001"
    ]
  },
  {
    "id": "st-johns-medical-bengaluru",
    "name": "St. John's Medical College & Hospital (SJMC), Koramangala, Bengaluru",
    "kannadaName": "ಸೈಂಟ್ ಜಾನ್ಸ್ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹಾಗೂ ಆಸ್ಪತ್ರೆ (ಎಸ್.ಜೆ.ಎಂ.ಸಿ), ಕೋರಮಂಗಲ",
    "shortName": "St. John's Medical College",
    "tagline": "India's Top-5 Ranked Medical Institution on 140-Acre Koramangala Campus (Estd 1963)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "medical",
    "type": "Private (CBCI Society)",
    "established": 1963,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC Recognized",
    "naacGrade": "A++",
    "rating": 4.9,
    "address": "Sarjapur Road, John Nagar, Koramangala, Bengaluru, Karnataka 560034",
    "pincode": "560034",
    "phone": "+91 80 4946 6000, +91 80 2206 5000",
    "email": "sjmc.admission@stjohns.in",
    "website": "https://www.stjohns.in",
    "mapQuery": "St+Johns+Medical+College+Sarjapur+Road+Koramangala+Bengaluru",
    "description": "St. John's Medical College, established in 1963 by the Catholic Bishops' Conference of India (CBCI), is consistently ranked among India's top 5 medical colleges by NIRF. Spread over 140 acres in Koramangala with a 1,350-bed super speciality hospital.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 150,
        "annualFee": "Govt Quota: ₹1.45 Lakh | Institutional: ₹7.5 Lakh",
        "eligibility": "10+2 with PCB min 50% + High NEET UG Rank",
        "entranceExam": "NEET UG (KEA Centralized Counseling)"
      }
    ],
    "admissionProcess": "Centralized counseling via KEA Karnataka based on NEET UG rank with dedicated Christian Minority and Institutional quotas.",
    "facilities": [
      "140-Acre Lush Campus",
      "1350-Bed Teaching Hospital",
      "St. John's Research Institute (SJRI)",
      "Central Medical Library",
      "Full Residential Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Full residential campus with separate high-security hostels for men and women.",
    "placementStats": {
      "averagePackage": "₹14.5 LPA",
      "highestPackage": "₹35 LPA",
      "placedPercentage": "100%",
      "topRecruiters": [
        "St. John's Hospital",
        "NHS UK",
        "Apollo",
        "Manipal",
        "Max Healthcare",
        "WHO"
      ]
    },
    "scholarships": [
      "CBCI Trust Scholarships",
      "Need-Based Medical Freeships"
    ],
    "badges": [
      "NIRF Top 5 Medical",
      "140 Acre Campus",
      "1350 Bed Hospital",
      "Koramangala Hub"
    ]
  },
  {
    "id": "ramaiah-medical-bengaluru",
    "name": "Ramaiah Medical College & Hospital (MSRMC), Mathikere, Bengaluru",
    "kannadaName": "ರಾಮಯ್ಯ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹಾಗೂ ಆಸ್ಪತ್ರೆ (ಎಂ.ಎಸ್.ಆರ್.ಎಂ.ಸಿ), ಮತ್ತಿಕೆರೆ",
    "shortName": "Ramaiah Medical College",
    "tagline": "Premier Medical Institution with 1300+ Bedded Ramaiah Memorial Super Speciality Hospital",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "medical",
    "type": "Private Autonomous",
    "established": 1979,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "MSR Nagar, MSRIT Post, Mathikere, Bengaluru, Karnataka 560054",
    "pincode": "560054",
    "phone": "+91 80 2360 5190, +91 80 2360 5408",
    "email": "ms_rmc@msrmc.ac.in",
    "website": "https://www.msrmc.ac.in",
    "mapQuery": "Ramaiah+Medical+College+Mathikere+Bengaluru",
    "description": "Ramaiah Medical College, founded in 1979 by Dr. M.S. Ramaiah, is one of South India's foremost medical destinations with a 1,300+ bed hospital, advanced simulation center, and organ transplant units.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 150,
        "annualFee": "Govt Quota: ₹1.45 Lakh | Private Quota: ₹10.92 Lakh",
        "eligibility": "10+2 with PCB min 50% + NEET UG Qualified",
        "entranceExam": "NEET UG (KEA Centralized Counseling)"
      }
    ],
    "admissionProcess": "Centralized online counseling via KEA Karnataka (kea.kar.nic.in).",
    "facilities": [
      "1300+ Bed Multi-Speciality Hospital",
      "Advanced Clinical Simulation Lab",
      "Centrally AC Medical Library",
      "Separate Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls on campus with multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹12.0 LPA",
      "highestPackage": "₹30 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "Gokula Education Foundation Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "Top Ranked Medical",
      "1300 Bed Hospital",
      "Mathikere Hub",
      "NMC Recognized"
    ]
  },
  {
    "id": "kims-medical-bengaluru",
    "name": "Kempegowda Institute of Medical Sciences (KIMS), Banashankari, Bengaluru",
    "kannadaName": "ಕೆಂಪೇಗೌಡ ವೈದ್ಯಕೀಯ ವಿಜ್ಞಾನಗಳ ಸಂಸ್ಥೆ (ಕಿಮ್ಸ್), ಬನಶಂಕರಿ, ಬೆಂಗಳೂರು",
    "shortName": "KIMS Medical College",
    "tagline": "Premier Medical Institution founded in 1980 by Rajya Vokkaligara Sangha with 1000+ Bed Hospital",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "medical",
    "type": "Private (VVS Sangha)",
    "established": 1980,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Banashankari 2nd Stage, Near BDA Complex, Bengaluru, Karnataka 560070",
    "pincode": "560070",
    "phone": "+91 80 2671 5790, +91 80 2671 2720",
    "email": "principalkims@gmail.com",
    "website": "https://www.kimsbangalore.edu.in",
    "mapQuery": "Kempegowda+Institute+of+Medical+Sciences+Banashankari+Bengaluru",
    "description": "KIMS Bengaluru, established in 1980 by Rajya Vokkaligara Sangha, is situated on an expansive campus in Banashankari with a 1,000-bed hospital in VV Puram/BSK.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 150,
        "annualFee": "Govt Quota: ₹1.45 Lakh | Private Quota: ₹10.92 Lakh",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA Counseling)"
      }
    ],
    "admissionProcess": "Centralized counseling via KEA Karnataka.",
    "facilities": [
      "1000+ Bed KIMS Hospital",
      "Advanced Cath Lab & Trauma Care",
      "Hostels for 1500+",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for men and women with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹11.0 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "VVS Sangha Merit Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "Banashankari Hub",
      "1000 Beds",
      "Estd 1980",
      "NMC Recognized"
    ]
  },
  {
    "id": "bowring-medical-bengaluru",
    "name": "Sri Atal Bihari Vajpayee Medical College & Research Institute (Bowring Hospital), Shivajinagar",
    "kannadaName": "ಶ್ರೀ ಅಟಲ್ ಬಿಹಾರಿ ವಾಜಪೇಯಿ ವೈದ್ಯಕೀಯ ಮಹಾವಿದ್ಯಾಲಯ (ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆ), ಶಿವಾಜಿನಗರ",
    "shortName": "SABVMCRI Bowring",
    "tagline": "Autonomous Government Medical College on Historic Lady Curzon Road Shivajinagar",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "medical",
    "type": "Government Autonomous",
    "established": 2019,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Lady Curzon Road, Tasker Town, Shivajinagar, Bengaluru, Karnataka 560001",
    "pincode": "560001",
    "phone": "+91 80 2559 1325, +91 80 2559 1326",
    "email": "director.sabvmcri@gmail.com",
    "website": "https://sabvmcri.karnataka.gov.in",
    "mapQuery": "Sri+Atal+Bihari+Vajpayee+Medical+College+Shivajinagar+Bengaluru",
    "description": "SABVMCRI, established as an autonomous government medical college in Shivajinagar, is attached to historic Bowring and Lady Curzon Hospitals (800+ beds).",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 150,
        "annualFee": "₹65,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA State / MCC AIQ)"
      }
    ],
    "admissionProcess": "KEA NEET UG Centralized Counseling (85%) & MCC AIQ (15%).",
    "facilities": [
      "800+ Bed Bowring & Lady Curzon Hospital",
      "Central Shivajinagar Location",
      "Modern Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government medical hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹10.5 LPA",
      "highestPackage": "₹25 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "SSP State Medical Scholarship",
      "Full SC/ST Concessions"
    ],
    "badges": [
      "Govt Autonomous",
      "Shivajinagar Bowring",
      "Subsidized ₹65k",
      "NMC Recognized"
    ]
  },
  {
    "id": "gdcri-dental-bengaluru",
    "name": "Government Dental College and Research Institute (GDCRI), Victoria Campus",
    "kannadaName": "ಸರ್ಕಾರಿ ದಂತ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹಾಗೂ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (ಜಿ.ಡಿ.ಸಿ.ಆರ್.ಐ), ಬೆಂಗಳೂರು",
    "shortName": "GDCRI Dental Bengaluru",
    "tagline": "Karnataka's #1 Premier Government Dental College established in 1958 in Fort Area",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "medical",
    "type": "Government Autonomous",
    "established": 1958,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & DCI Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Victoria Hospital Complex, Fort, K.R. Market, Bengaluru, Karnataka 560002",
    "pincode": "560002",
    "phone": "+91 80 2670 5053",
    "email": "principal_gdcri@yahoo.co.in",
    "website": "https://gdcri.karnataka.gov.in",
    "mapQuery": "Government+Dental+College+Victoria+Hospital+Bengaluru",
    "description": "GDCRI is Karnataka's premier government dental institution, offering subsidized BDS and MDS degrees in oral surgery, orthodontics, and prosthodontics.",
    "courses": [
      {
        "name": "BDS (Bachelor of Dental Surgery)",
        "level": "UG",
        "duration": "4 Years + 1 Year Internship",
        "seats": 60,
        "annualFee": "₹45,000 / Year (Govt Rate)",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA Counseling)"
      }
    ],
    "admissionProcess": "KEA NEET UG Dental Counseling.",
    "facilities": [
      "Victoria Hospital Campus",
      "Dental Surgery Wings",
      "Central Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government medical/dental hostels.",
    "placementStats": {
      "averagePackage": "₹8.0 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Full SC/ST Fee Waiver"
    ],
    "badges": [
      "#1 Govt Dental in Karnataka",
      "Estd 1958",
      "Fort Area",
      "DCI Recognized"
    ]
  },
  {
    "id": "gamc-ayurveda-bengaluru",
    "name": "Government Ayurvedic Medical College & Hospital (GAMC), Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಆಯುರ್ವೇದ ವೈದ್ಯಕೀಯ ಮಹಾವಿದ್ಯಾಲಯ ಹಾಗೂ ಆಸ್ಪತ್ರೆ (ಜಿ.ಎ.ಎಂ.ಸಿ), ಬೆಂಗಳೂರು",
    "shortName": "GAMC Dhanvanthri Road",
    "tagline": "Karnataka's Century-Old Premier Flagship Government Ayurvedic College (Estd 1948)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "ayush",
    "type": "Government (AYUSH Dept, Govt of Karnataka)",
    "established": 1948,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCISM Recognized",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "Dhanvanthri Road, Near Anand Rao Circle & Majestic, Bengaluru, Karnataka 560009",
    "pincode": "560009",
    "phone": "+91 80 2287 2848, +91 80 2287 7490",
    "email": "gamcbangalore@gmail.com",
    "website": "https://gamcblr.karnataka.gov.in",
    "mapQuery": "Government+Ayurvedic+Medical+College+Dhanvanthri+Road+Majestic+Bengaluru",
    "description": "GAMC Bengaluru on historic Dhanvanthri Road near Majestic is Karnataka's premier public institution for Ayurvedic education. Attached to Sri Jayachamarajendra Institute of Indian Medicine (Hospital) with 300+ beds and Panchakarma treatment center, offering subsidized BAMS and MD/MS Ayurveda.",
    "courses": [
      {
        "name": "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 100,
        "annualFee": "₹35,000 / Year (Subsidized Govt Fee)",
        "eligibility": "10+2 / 2nd PUC with PCB min 50% + NEET UG Qualified",
        "entranceExam": "NEET UG (KEA AYUSH Centralized Counseling)"
      },
      {
        "name": "MD / MS (Ayurveda - Panchakarma, Shalya Tantra, Kayachikitsa)",
        "level": "PG",
        "duration": "3 Years",
        "seats": 45,
        "annualFee": "₹45,000 / Year",
        "eligibility": "BAMS Degree + AIAPGET Rank",
        "entranceExam": "AIAPGET (All India AYUSH PG Test)"
      }
    ],
    "admissionProcess": "Admissions conducted centrally by KEA Karnataka through online AYUSH counseling based on NEET UG rank.",
    "facilities": [
      "300-Bed Associated Ayurvedic Teaching Hospital",
      "Panchakarma Research Ward",
      "Herbal Botanical Gardens",
      "Pharmacy Manufacturing Unit",
      "Central Library & Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate government hostels for boys and girls on campus with mess facilities.",
    "placementStats": {
      "averagePackage": "₹7.5 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "100%",
      "topRecruiters": [
        "Govt AYUSH Hospitals",
        "Himalaya Wellness",
        "Kottakkal Arya Vaidya Sala",
        "Patanjali",
        "Dabur",
        "SDM Ayurveda"
      ]
    },
    "scholarships": [
      "Full Govt Fee Exemption for SC/ST/Cat-1",
      "SSP Post-Matric Karnataka Scholarship"
    ],
    "badges": [
      "#1 Govt Ayurveda College",
      "Estd 1948",
      "Dhanvanthri Road",
      "Subsidized ₹35k",
      "NCISM Recognized"
    ]
  },
  {
    "id": "sri-sri-ayurveda-bengaluru",
    "name": "Sri Sri College of Ayurvedic Science and Research (SSCASR), Kanakapura Road",
    "kannadaName": "ಶ್ರೀ ಶ್ರೀ ಆಯುರ್ವೇದ ವಿಜ್ಞಾನ ಹಾಗೂ ಸಂಶೋಧನಾ ಕಾಲೇಜು (ಎಸ್.ಎಸ್.ಸಿ.ಎ.ಎಸ್.ಆರ್), ಕನಕಪುರ ರಸ್ತೆ",
    "shortName": "Sri Sri Ayurveda College",
    "tagline": "World-Class Ayurvedic Teaching & Research Hospital at Art of Living International Center (Estd 2004)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "ayush",
    "type": "Private (Sri Sri Ravi Shankar Trust)",
    "established": 2004,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCISM Recognized",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "21st Km, Kanakapura Road, Udayapura Post, Bengaluru, Karnataka 560082",
    "pincode": "560082",
    "phone": "+91 80 2843 2477, +91 80 2843 2733",
    "email": "info@sscasr.org, admissions@sscasr.org",
    "website": "https://www.sscasr.org",
    "mapQuery": "Sri+Sri+College+of+Ayurvedic+Science+and+Research+Kanakapura+Road+Bengaluru",
    "description": "SSCASR, located inside the serene Art of Living International Center on Kanakapura Road, is a world-renowned Ayurvedic institution. It combines ancient Vedic wisdom with modern diagnostics, attached to Sri Sri Ayurveda Hospital (300+ beds) and GMP-certified medicine manufacturing labs.",
    "courses": [
      {
        "name": "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 100,
        "annualFee": "Govt Quota: ₹1.05 Lakh | Private Quota: ₹3.5 Lakh",
        "eligibility": "10+2 with PCB min 50% + NEET UG Qualified",
        "entranceExam": "NEET UG (KEA AYUSH Counseling)"
      },
      {
        "name": "MD / MS Ayurveda (Panchakarma, Shalakya, Dravyaguna)",
        "level": "PG",
        "duration": "3 Years",
        "seats": 30,
        "annualFee": "₹2,50,000 - ₹4,00,000 / Year",
        "eligibility": "BAMS Degree + AIAPGET",
        "entranceExam": "AIAPGET / KEA"
      }
    ],
    "admissionProcess": "Centralized Counseling conducted by KEA (kea.kar.nic.in) for Karnataka seats and AACCC for All-India seats.",
    "facilities": [
      "300-Bed Multi-Speciality Ayurvedic Hospital",
      "Extensive Medicinal Botanical Garden",
      "GMP Medicine Production Unit",
      "Holistic Meditation & Yoga Shalas",
      "Separate Residential Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate serene on-campus residential hostels with pure vegetarian sattvic dining, Wi-Fi, and 24/7 security.",
    "placementStats": {
      "averagePackage": "₹8.2 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Sri Sri Tattva",
        "Art of Living Health Centers",
        "Himalaya Drug Company",
        "Global Wellness Centers"
      ]
    },
    "scholarships": [
      "SSRVM Trust Merit Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Art of Living Campus",
      "Kanakapura Road",
      "300 Bed Hospital",
      "NCISM Recognized"
    ]
  },
  {
    "id": "sdm-ayurveda-bengaluru",
    "name": "SDM College of Ayurveda and Hospital (SDMCAH), Mysore Road, Bengaluru",
    "kannadaName": "ಎಸ್.ಡಿ.ಎಂ. ಆಯುರ್ವೇದ ಮಹಾವಿದ್ಯಾಲಯ ಹಾಗೂ ಆಸ್ಪತ್ರೆ, ಮೈಸೂರು ರಸ್ತೆ / ಕೆಂಗೇರಿ",
    "shortName": "SDM Ayurveda Bengaluru",
    "tagline": "Premier Ayurvedic Institution of SDM Educational Society (Dr. D. Veerendra Heggade)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Kengeri",
    "stream": "ayush",
    "type": "Private (SDM Educational Society)",
    "established": 2010,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCISM Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Anchepalya, Mysore Road, Kengeri Post, Bengaluru, Karnataka 560074",
    "pincode": "560074",
    "phone": "+91 80 2271 8051, +91 80 2271 8052",
    "email": "sdmcahb@gmail.com, principal@sdmcahblr.ac.in",
    "website": "https://www.sdmcahblr.ac.in",
    "mapQuery": "SDM+College+of+Ayurveda+and+Hospital+Anchepalya+Mysore+Road+Bengaluru",
    "description": "SDMCAH Bengaluru, established under the visionary leadership of Dr. D. Veerendra Heggade of Dharmasthala, is a landmark Ayurvedic teaching hospital on Mysore Road near Kengeri. Attached to SDM Ayurvedic Hospital offering specialty treatments in Panchakarma, spine care, and skin ailments.",
    "courses": [
      {
        "name": "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 100,
        "annualFee": "Govt Quota: ₹1.05 Lakh | Private Quota: ₹3.25 Lakh",
        "eligibility": "10+2 with PCB min 50% + NEET UG Qualified",
        "entranceExam": "NEET UG (KEA AYUSH Counseling)"
      }
    ],
    "admissionProcess": "Admissions via KEA Karnataka centralized AYUSH counseling based on NEET UG rank.",
    "facilities": [
      "250-Bed Attached Ayurvedic Hospital",
      "Specialized Panchakarma Theatres",
      "Central Herbal Garden",
      "Digital Library",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels with hygienic pure vegetarian mess and study environment.",
    "placementStats": {
      "averagePackage": "₹7.8 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "SDM Health Care Centers",
        "Himalaya",
        "Patanjali",
        "Kottakkal",
        "Ayush Govt Services"
      ]
    },
    "scholarships": [
      "SDM Dharmasthala Merit Concessions",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "Dharmasthala Trust",
      "Mysore Road / Kengeri",
      "NAAC A+",
      "250 Bed Hospital"
    ]
  },
  {
    "id": "sushrutha-ayurveda-bengaluru",
    "name": "Sushrutha Ayurvedic Medical College & Hospital (SAMC), Bengaluru",
    "kannadaName": "ಸುಶ್ರುತ ಆಯುರ್ವೇದ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆ, ಬೆಂಗಳೂರು",
    "shortName": "Sushrutha Ayurveda College",
    "tagline": "Reputed Ayurvedic College affiliated with RGUHS offering Quality AYUSH Education (Estd 2002)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "ayush",
    "type": "Private Unaided",
    "established": 2002,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCISM",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Prashanthi Kuteera, Swami Vivekananda Yoga Anusandhana Samsthana Campus, Kalluballu, Jigani, Bengaluru, Karnataka 560105",
    "pincode": "560105",
    "phone": "+91 80 2974 5354, +91 94484 76600",
    "email": "sushrutha.ayurveda@gmail.com",
    "website": "https://www.sushruthaayurvedacollege.com",
    "mapQuery": "Sushrutha+Ayurvedic+Medical+College+Bengaluru",
    "description": "Sushrutha Ayurvedic Medical College, established in 2002, offers BAMS and MD Ayurveda programs with intensive clinical training at attached multi-bed hospitals.",
    "courses": [
      {
        "name": "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 100,
        "annualFee": "Govt Quota: ₹1.05 Lakh | Private Quota: ₹3.0 Lakh",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA Counseling)"
      }
    ],
    "admissionProcess": "KEA AYUSH NEET UG Centralized Counseling.",
    "facilities": [
      "Hospital Complex",
      "Panchakarma Center",
      "Herbal Garden",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for men and women on campus.",
    "placementStats": {
      "averagePackage": "₹6.8 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "92%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Trust Merit Aid"
    ],
    "badges": [
      "Estd 2002",
      "NCISM Recognized",
      "BAMS Admissions",
      "KEA Code"
    ]
  },
  {
    "id": "ramakrishna-ayurveda-bengaluru",
    "name": "Ramakrishna Ayurvedic Medical College, Hospital & Research Centre, Yelahanka",
    "kannadaName": "ರಾಮಕೃಷ್ಣ ಆಯುರ್ವೇದ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹಾಗೂ ಆಸ್ಪತ್ರೆ, ಯಲಹಂಕ, ಬೆಂಗಳೂರು",
    "shortName": "Ramakrishna Ayurveda Yelahanka",
    "tagline": "Premier Ayurvedic Teaching Hospital of North Bengaluru (Estd 1999)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Yelahanka",
    "stream": "ayush",
    "type": "Private Unaided",
    "established": 1999,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCISM",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Ramakrishna Layout, Bagalur Cross, Yelahanka, Bengaluru, Karnataka 560064",
    "pincode": "560064",
    "phone": "+91 80 2856 6204, +91 80 2856 6205",
    "email": "ramakrishnaayurveda@gmail.com",
    "website": "https://www.ramakrishnaayurvedacollege.com",
    "mapQuery": "Ramakrishna+Ayurvedic+Medical+College+Yelahanka+Bengaluru",
    "description": "Ramakrishna Ayurvedic Medical College in Yelahanka offers BAMS and MD Ayurveda degrees with clinical exposure in its attached hospital.",
    "courses": [
      {
        "name": "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 100,
        "annualFee": "Govt Quota: ₹1.05 Lakh | Private: ₹3.0 Lakh",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA Counseling)"
      }
    ],
    "admissionProcess": "KEA AYUSH Centralized Counseling.",
    "facilities": [
      "Yelahanka Campus",
      "Ayurvedic Hospital",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "90%"
    },
    "scholarships": [
      "SSP Scholarship",
      "Trust Aid"
    ],
    "badges": [
      "North Bengaluru Yelahanka",
      "Estd 1999",
      "NCISM Recognized"
    ]
  },
  {
    "id": "ghmc-homeopathy-bengaluru",
    "name": "Government Homeopathic Medical College & Hospital (GHMC), Basaveshwaranagar",
    "kannadaName": "ಸರ್ಕಾರಿ ಹೋಮಿಯೋಪತಿ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆ (ಜಿ.ಎಚ್.ಎಂ.ಸಿ), ಬಸವೇಶ್ವರನಗರ",
    "shortName": "GHMC Homeopathy Bengaluru",
    "tagline": "Karnataka's Flagship Public Homeopathic Medical College (Estd 1985 by AYUSH Dept)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru West",
    "stream": "ayush",
    "type": "Government (AYUSH Dept)",
    "established": 1985,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCH Recognized",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Dr. Siddaiah Puranik Road, Basaveshwaranagar, Bengaluru, Karnataka 560079",
    "pincode": "560079",
    "phone": "+91 80 2348 2056",
    "email": "ghmc.bangalore@gmail.com",
    "website": "https://ghmcblr.karnataka.gov.in",
    "mapQuery": "Government+Homeopathic+Medical+College+Basaveshwaranagar+Bengaluru",
    "description": "GHMC Bengaluru in Basaveshwaranagar is Karnataka's premier government homeopathic medical institution, offering subsidized BHMS and MD Homeopathy degrees.",
    "courses": [
      {
        "name": "BHMS (Bachelor of Homeopathic Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 100,
        "annualFee": "₹30,000 / Year (Subsidized Govt Fee)",
        "eligibility": "10+2 with PCB min 50% + NEET UG Qualified",
        "entranceExam": "NEET UG (KEA AYUSH Counseling)"
      }
    ],
    "admissionProcess": "Centralized online AYUSH counseling by KEA Karnataka based on NEET UG rank.",
    "facilities": [
      "Attached Homeopathic Teaching Hospital",
      "Pharmacy Lab",
      "Central Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels available on and near campus.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "Full Govt Fee Exemption for SC/ST",
      "SSP Scholarship"
    ],
    "badges": [
      "#1 Govt Homeopathy",
      "Basaveshwaranagar",
      "Subsidized ₹30k",
      "NCH Recognized"
    ]
  },
  {
    "id": "gumc-unani-bengaluru",
    "name": "Government Unani Medical College & Hospital (GUMC), Basaveshwaranagar",
    "kannadaName": "ಸರ್ಕಾರಿ ಯುನಾನಿ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆ (ಜಿ.ಯು.ಎಂ.ಸಿ), ಬಸವೇಶ್ವರನಗರ",
    "shortName": "GUMC Unani Bengaluru",
    "tagline": "Karnataka's Premier Public Unani Medicine & Surgery Institution (Estd 1975)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru West",
    "stream": "ayush",
    "type": "Government (AYUSH Dept)",
    "established": 1975,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NCISM",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "GIMS Complex, Dr. Siddaiah Puranik Road, Basaveshwaranagar, Bengaluru, Karnataka 560079",
    "pincode": "560079",
    "phone": "+91 80 2348 2057",
    "email": "gumcbangalore@gmail.com",
    "website": "https://gumcblr.karnataka.gov.in",
    "mapQuery": "Government+Unani+Medical+College+Basaveshwaranagar+Bengaluru",
    "description": "GUMC Bengaluru is Karnataka's leading government Unani medical institution, offering subsidized BUMS (Bachelor of Unani Medicine & Surgery) and MD Unani degrees.",
    "courses": [
      {
        "name": "BUMS (Bachelor of Unani Medicine & Surgery)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 60,
        "annualFee": "₹30,000 / Year (Subsidized Govt Fee)",
        "eligibility": "10+2 with PCB min 50% + Urdu/Arabic knowledge + NEET UG",
        "entranceExam": "NEET UG (KEA AYUSH Counseling)"
      }
    ],
    "admissionProcess": "KEA AYUSH Centralized Counseling based on NEET UG rank.",
    "facilities": [
      "100-Bed Teaching Hospital",
      "Unani Pharmacology Labs",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel facilities available.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "Full Govt Fee Exemption for SC/ST/OBC",
      "SSP Scholarship"
    ],
    "badges": [
      "#1 Govt Unani College",
      "Basaveshwaranagar",
      "Low Fees ₹30k",
      "NCISM Recognized"
    ]
  },
  {
    "id": "svyasa-yoga-naturopathy-bengaluru",
    "name": "S-VYASA Deemed University (Swami Vivekananda Yoga Anusandhana Samsthana), Jigani",
    "kannadaName": "ಎಸ್-ವ್ಯಾಸ ಡೀಮ್ಡ್ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಯೋಗ ಅನುಸಂಧಾನ ಸಂಸ್ಥಾನ), ಜಿಗಣಿ",
    "shortName": "S-VYASA University (BNYS)",
    "tagline": "India's Premier Deemed University for BNYS (Naturopathy & Yoga) and Integrative Health",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Anekal",
    "stream": "ayush",
    "type": "Deemed to be University",
    "established": 2002,
    "affiliation": "UGC Approved Deemed-to-be-University & Ministry of AYUSH",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Prashanti Kuteera, Kalluballu Post, Jigani Hobli, Anekal Taluk, Bengaluru, Karnataka 560105",
    "pincode": "560105",
    "phone": "+91 80 2263 9961, +91 80 2263 9962",
    "email": "admissions@svyasa.edu.in",
    "website": "https://svyasa.edu.in",
    "mapQuery": "S-VYASA+University+Prashanti+Kuteera+Jigani+Bengaluru",
    "description": "S-VYASA Deemed University at Prashanti Kuteera in Jigani is India's pioneer institution for Naturopathy, Yoga Therapy, and integrative biomedical sciences.",
    "courses": [
      {
        "name": "BNYS (Bachelor of Naturopathy and Yogic Sciences)",
        "level": "UG",
        "duration": "4.5 Years + 1 Year Internship",
        "seats": 120,
        "annualFee": "₹1,25,000 / Year",
        "eligibility": "10+2 with PCB min 50% + NEET / Merit",
        "entranceExam": "NEET UG / University Entrance"
      }
    ],
    "admissionProcess": "Apply online at svyasa.edu.in / KEA AYUSH Counseling.",
    "facilities": [
      "100-Acre Eco Campus at Prashanti Kuteera",
      "Arogyadhama Holistic Hospital",
      "Hostels for 2000+",
      "Yoga Shalas"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Full residential hostels with sattvic vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹7.0 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "95%"
    },
    "scholarships": [
      "S-VYASA Merit Fellowships",
      "Central AYUSH Scholarships"
    ],
    "badges": [
      "#1 BNYS in India",
      "Prashanti Kuteera",
      "Deemed University",
      "AYUSH Hub"
    ]
  },
  {
    "id": "nlsiu-law-bengaluru",
    "name": "National Law School of India University (NLSIU), Nagarbhavi, Bengaluru",
    "kannadaName": "ನ್ಯಾಷನಲ್ ಲಾ ಸ್ಕೂಲ್ ಆಫ್ ಇಂಡಿಯಾ ಯೂನಿವರ್ಸಿಟಿ (ಎನ್.ಎಲ್.ಎಸ್.ಐ.ಯು), ನಾಗರಭಾವಿ",
    "shortName": "NLSIU Law Bengaluru",
    "tagline": "India's #1 Ranked Premier National Law University (NIRF Law Rank #1 since inception)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru West",
    "stream": "law",
    "type": "National Law University (Statutory)",
    "established": 1987,
    "affiliation": "Statutory University & Bar Council of India (BCI)",
    "naacGrade": "A++",
    "rating": 5,
    "address": "Gnana Bharathi Main Road, Nagarbhavi, Bengaluru, Karnataka 560072",
    "pincode": "560072",
    "phone": "+91 80 2321 3160, +91 80 2316 0532",
    "email": "admissions@nls.ac.in, registrar@nls.ac.in",
    "website": "https://www.nls.ac.in",
    "mapQuery": "National+Law+School+of+India+University+Nagarbhavi+Bengaluru",
    "description": "NLSIU Bengaluru is India's crown jewel of legal education, ranked NIRF #1 Law University in the country without interruption. Sprawled across a 23-acre campus in Nagarbhavi with 25% Karnataka Domicile Reservation.",
    "courses": [
      {
        "name": "B.A., LL.B. (Honours - 5-Year Integrated)",
        "level": "UG",
        "duration": "5 Years",
        "seats": 300,
        "annualFee": "₹3,50,000 / Year (25% Karnataka Domicile Reservation)",
        "eligibility": "10+2 Any Stream min 45% + Top CLAT All-India Rank",
        "entranceExam": "CLAT UG (Common Law Admission Test)"
      }
    ],
    "admissionProcess": "Admissions strictly based on CLAT UG Rank through Consortium of NLUs (25% Karnataka Domicile Quota).",
    "facilities": [
      "23-Acre Green Campus in Nagarbhavi",
      "Sri Narayan Rao Melgiri Memorial Law Library (Largest in South Asia)",
      "Moot Court Halls",
      "Residential Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Full residential campus with high-standard student halls, dining, and Wi-Fi.",
    "placementStats": {
      "averagePackage": "₹18.5 LPA",
      "highestPackage": "₹36 LPA (Domestic) | £60,000 (International)",
      "placedPercentage": "100%",
      "topRecruiters": [
        "Shardul Amarchand",
        "Cyril Amarchand",
        "Trilegal",
        "AZB & Partners",
        "Linklaters London",
        "Supreme Court Clerks"
      ]
    },
    "scholarships": [
      "Full Need-Based Fee Waivers",
      "Karnataka Domicile Concessions",
      "SSP Scholarship"
    ],
    "badges": [
      "NIRF #1 Law University",
      "CLAT Top Ranks",
      "25% Karnataka Quota",
      "Nagarbhavi Hub"
    ]
  },
  {
    "id": "govt-pharmacy-bengaluru",
    "name": "Government College of Pharmacy (GCP), Subbaiah Circle, Bengaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು (ಜಿ.ಸಿ.ಪಿ), ಸುಬ್ಬಯ್ಯ ಸರ್ಕಲ್, ಬೆಂಗಳೂರು",
    "shortName": "Govt Pharmacy College (GCP)",
    "tagline": "Karnataka's #1 Premier Public Pharmacy College (Estd 1964 by Govt of Karnataka)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "pharmacy",
    "type": "Government (Directorate of Medical Education)",
    "established": 1964,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "No. 2, P. Kalinga Rao Road, Subbaiah Circle, Bengaluru, Karnataka 560027",
    "pincode": "560027",
    "phone": "+91 80 2222 4110, +91 80 2222 4111",
    "email": "gcp.bangalore@gmail.com",
    "website": "https://gcpblr.karnataka.gov.in",
    "mapQuery": "Government+College+of+Pharmacy+Subbaiah+Circle+Bengaluru",
    "description": "Government College of Pharmacy (GCP), established in 1964, is Karnataka's premier public pharmacy institution, offering subsidized B.Pharm, Pharm.D, and M.Pharm degrees.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "₹18,000 / Year (Subsidized Govt Fee)",
        "eligibility": "10+2 with PCM/PCB min 45% + KCET Rank",
        "entranceExam": "KCET (KEA Pharmacy Counseling)"
      }
    ],
    "admissionProcess": "100% allotment through KEA KCET Online Counseling.",
    "facilities": [
      "Subbaiah Circle Campus",
      "Modern Pharmaceutical Formulation Labs",
      "Central Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels available for boys and girls.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Biocon",
        "AstraZeneca",
        "Novartis",
        "Sun Pharma",
        "Dr. Reddy's",
        "Cipla"
      ]
    },
    "scholarships": [
      "Full Govt Fee Waiver for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "#1 Govt Pharmacy in Karnataka",
      "Low Fees ₹18k",
      "Estd 1964",
      "PCI Recognized"
    ]
  },
  {
    "id": "al-ameen-pharmacy-bengaluru",
    "name": "Al-Ameen College of Pharmacy, Hosur Road, Bengaluru",
    "kannadaName": "ಅಲ್-ಅಮೀನ್ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಹೊಸೂರು ರಸ್ತೆ, ಬೆಂಗಳೂರು",
    "shortName": "Al-Ameen Pharmacy",
    "tagline": "Premier Pharmacy Education Institution (Estd 1983 by Al-Ameen Educational Society)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "pharmacy",
    "type": "Private Aided (Minority)",
    "established": 1983,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Hosur Road, Near Lalbagh Main Gate, Bengaluru, Karnataka 560027",
    "pincode": "560027",
    "phone": "+91 80 2223 4583, +91 80 2223 4584",
    "email": "alameen_pharmacy@yahoo.com",
    "website": "https://www.alameenpharmacy.edu.in",
    "mapQuery": "Al+Ameen+College+of+Pharmacy+Hosur+Road+Bengaluru",
    "description": "Al-Ameen College of Pharmacy, established in 1983, is a recognized research center offering B.Pharm, Pharm.D, and M.Pharm degrees.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 45%",
        "entranceExam": "KCET / Merit"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Trust Merit.",
    "facilities": [
      "Lalbagh Road Campus",
      "Pharmaceutics Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "92%"
    },
    "scholarships": [
      "Minority Scholarships",
      "SSP Scholarship"
    ],
    "badges": [
      "Near Lalbagh",
      "Estd 1983",
      "PCI Approved",
      "NAAC A+"
    ]
  },
  {
    "id": "sjc-polytechnic-bengaluru",
    "name": "Sri Jayachamarajendra (SJC) Polytechnic (Autonomous), KR Circle, Bengaluru",
    "kannadaName": "ಶ್ರೀ ಜಯಚಾಮರಾಜೇಂದ್ರ (ಎಸ್.ಜೆ.ಸಿ) ಪಾಲಿಟೆಕ್ನಿಕ್ (ಸ್ವಾಯತ್ತ), ಕೆ.ಆರ್. ವೃತ್ತ, ಬೆಂಗಳೂರು",
    "shortName": "SJC Polytechnic KR Circle",
    "tagline": "India's Oldest & Premier Heritage Autonomous Technical Diploma Institution (Estd 1943 by Nalwadi Krishnaraja Wadiyar)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "polytechnic",
    "type": "Government Autonomous (DTE Karnataka)",
    "established": 1943,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "Seshadri Road, K.R. Circle, Near Maharani College & High Court, Bengaluru, Karnataka 560001",
    "pincode": "560001",
    "phone": "+91 80 2221 1690, +91 80 2221 4056",
    "email": "principal_sjcp@yahoo.co.in",
    "website": "https://dtek.karnataka.gov.in/sjcpolytechnic",
    "mapQuery": "SJC+Polytechnic+KR+Circle+Bengaluru",
    "description": "SJC Polytechnic, founded in 1943 by the Maharaja of Mysore, is one of Asia's largest and most prestigious polytechnics. Spanning 18 acres at K.R. Circle in the heart of Bengaluru, it offers 14+ diploma disciplines with World Bank-funded laboratories.",
    "courses": [
      {
        "name": "Diploma in Computer Science & Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹4,500 / Year (Govt Subsidized Rate)",
        "eligibility": "SSLC / 10th Standard Pass min 35%",
        "entranceExam": "DTE Karnataka Centralized Merit"
      },
      {
        "name": "Diploma in Electronics & Communication / Cybersecurity",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10th Standard Pass min 35%",
        "entranceExam": "DTE Single Window"
      },
      {
        "name": "Diploma in Mechanical, Automobile, Civil & Electrical",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 360,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10th Standard Pass",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "Centralized online allotment by Directorate of Technical Education (dtek.karnataka.gov.in) strictly by 10th standard SSLC percentage.",
    "facilities": [
      "18-Acre Historic K.R. Circle Campus",
      "Advanced CNC Machining & Robotics Centre",
      "Central Technical Library",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels near City Railway Station with dining and sports facilities.",
    "placementStats": {
      "averagePackage": "₹4.2 LPA",
      "highestPackage": "₹10.5 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Toyota Kirloskar",
        "L&T Construction",
        "Bosch",
        "Tata Motors",
        "BHEL",
        "HAL",
        "Infosys BPM",
        "Schneider Electric"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Post-Matric Scholarship",
      "Vidyasiri Concessions"
    ],
    "badges": [
      "Historic Estd 1943",
      "Autonomous Diploma",
      "KR Circle Landmark",
      "Low Fees ₹4.5k",
      "DTE Code: 101"
    ]
  },
  {
    "id": "gpt-women-bengaluru",
    "name": "Government Polytechnic for Women, Seshadripuram, Bengaluru",
    "kannadaName": "ಮಹಿಳೆಯರ ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ ಕಾಲೇಜು, ಶೇಷಾದ್ರಿಪುರಂ, ಬೆಂಗಳೂರು",
    "shortName": "GPT Women Seshadripuram",
    "tagline": "Premier Women-Empowering Government Technical Diploma Institution (Estd 1961)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "polytechnic",
    "type": "Government (Women Only)",
    "established": 1961,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Palace Road, Near Seshadripuram College, Bengaluru, Karnataka 560020",
    "pincode": "560020",
    "phone": "+91 80 2336 2955",
    "email": "gptwbengaluru@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptwbengaluru",
    "mapQuery": "Government+Polytechnic+for+Women+Palace+Road+Bengaluru",
    "description": "Government Polytechnic for Women at Seshadripuram is Karnataka's premier all-women technical institution offering diplomas in Computer Science, App Design, Electronics, Commercial Practice, and Apparel Design.",
    "courses": [
      {
        "name": "Diploma in Computer Science & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year (Govt Rate)",
        "eligibility": "Female students only with SSLC Pass min 35%",
        "entranceExam": "DTE Karnataka Single Window"
      },
      {
        "name": "Diploma in Commercial Practice & Apparel Design",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹4,500 / Year",
        "eligibility": "Female SSLC Pass",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "DTE Single Window Admissions for female students.",
    "facilities": [
      "High-Security Campus",
      "Modern Computer Labs",
      "On-Campus Girls Hostel",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Round-the-clock secure government hostel for female students with mess.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8.5 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Titan",
        "Bosch"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "Pratibha Puraskara for Girls",
      "SSP State Scholarship"
    ],
    "badges": [
      "Women Only",
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Seshadripuram"
    ]
  },
  {
    "id": "mei-polytechnic-bengaluru",
    "name": "M.E.I. Polytechnic (Autonomous), Rajajinagar, Bengaluru",
    "kannadaName": "ಎಂ.ಇ.ಐ. ಪಾಲಿಟೆಕ್ನಿಕ್ (ಸ್ವಾಯತ್ತ), ರಾಜಾಜಿನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "MEI Polytechnic Rajajinagar",
    "tagline": "Premier Aided Autonomous Technical Landmark in Rajajinagar (Estd 1962)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "polytechnic",
    "type": "Private Aided / Autonomous",
    "established": 1962,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Rajajinagar Industrial Area, Near Tollgate, Bengaluru, Karnataka 560010",
    "pincode": "560010",
    "phone": "+91 80 2335 1587",
    "email": "meipolytechnic@yahoo.com",
    "website": "https://www.meipolytechnic.com",
    "mapQuery": "MEI+Polytechnic+Rajajinagar+Bengaluru",
    "description": "MEI Polytechnic, established in 1962 by Mysore Electrical Industries Society, is an autonomous technical institute known for rigorous workshop training and top industrial placements.",
    "courses": [
      {
        "name": "Diploma in Computer Science & Electrical Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹8,500 / Year (Aided Subsidized)",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      },
      {
        "name": "Diploma in Mechanical & Electronics Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹8,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "DTE Karnataka Centralized Merit Counseling & Trust Seats.",
    "facilities": [
      "Rajajinagar Campus",
      "Heavy Machinery & CNC Labs",
      "Digital Library",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel accommodations with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8.0 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Toyota",
        "L&T",
        "Bosch",
        "ABB",
        "TVS Motors"
      ]
    },
    "scholarships": [
      "MEI Trust Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Autonomous Diploma",
      "Estd 1962",
      "Rajajinagar",
      "Low Fees ₹8.5k"
    ]
  },
  {
    "id": "acharya-polytechnic-bengaluru",
    "name": "Acharya Polytechnic, Soladevanahalli, Bengaluru",
    "kannadaName": "ಆಚಾರ್ಯ ಪಾಲಿಟೆಕ್ನಿಕ್, ಸೋಲದೇವನಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "Acharya Polytechnic",
    "tagline": "India's Largest 120-Acre Multidisciplinary Polytechnic Campus (Estd 1990)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "polytechnic",
    "type": "Private",
    "established": 1990,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Bengaluru, Karnataka 560107",
    "pincode": "560107",
    "phone": "+91 80 2255 5555",
    "email": "admissions@acharya.ac.in",
    "website": "https://www.acharya.ac.in/acharya-polytechnic",
    "mapQuery": "Acharya+Polytechnic+Soladevanahalli+Bengaluru",
    "description": "Acharya Polytechnic is situated on a lush 120-acre mega-campus in Soladevanahalli, offering 10+ diploma specializations with international-grade lab equipment and global student community.",
    "courses": [
      {
        "name": "Diploma in Computer Science, AI & Machine Learning",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹12,000 | Private: ₹45,000",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window / Direct Merit"
      },
      {
        "name": "Diploma in Aeronautical, Automobile, Mining & Civil",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹12,000 | Private: ₹40,000",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "DTE Single Window Allotment & Acharya Trust Direct Admissions.",
    "facilities": [
      "120-Acre Sprawling Campus",
      "Aerospace Hangar with Aircraft",
      "Multi-Cuisine Food Court",
      "Mega Hostels for 4,000+ Students"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus residential hostels with high-speed Wi-Fi, gym, and laundromat.",
    "placementStats": {
      "averagePackage": "₹4.0 LPA",
      "highestPackage": "₹9.5 LPA",
      "placedPercentage": "93%",
      "topRecruiters": [
        "Toyota",
        "L&T",
        "Bosch",
        "Infosys BPM",
        "Schneider Electric",
        "Volvo"
      ]
    },
    "scholarships": [
      "Acharya Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "120-Acre Campus",
      "Estd 1990",
      "Aircraft Hangar",
      "KEA Code: 204"
    ]
  },
  {
    "id": "dayananda-sagar-polytechnic",
    "name": "Dayananda Sagar Polytechnic, Kumaraswamy Layout, Bengaluru",
    "kannadaName": "ದಯಾನಂದ ಸಾಗರ ಪಾಲಿಟೆಕ್ನಿಕ್, ಕುಮಾರಸ್ವಾಮಿ ಲೇಔಟ್, ಬೆಂಗಳೂರು",
    "shortName": "Dayananda Sagar Polytechnic",
    "tagline": "Premier Technical Diploma Campus in South Bengaluru (Estd 1980 by DSI)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "polytechnic",
    "type": "Private Aided",
    "established": 1980,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru, Karnataka 560078",
    "pincode": "560078",
    "phone": "+91 80 4216 1700",
    "email": "dspolytechnic@dayanandasagar.edu",
    "website": "https://www.dayanandasagar.edu/dsp",
    "mapQuery": "Dayananda+Sagar+Polytechnic+Kumaraswamy+Layout+Bengaluru",
    "description": "Dayananda Sagar Polytechnic offers comprehensive 3-year technical diplomas with modern maker spaces and immediate campus recruitment across top tech companies.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹8,500 | Private: ₹35,000",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Single Window Allotment & DSI Management Merit.",
    "facilities": [
      "DSI Hilltop Campus",
      "Computer Labs",
      "Hostels with Mess",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with Wi-Fi and food court.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "Toyota",
        "Bosch",
        "L&T"
      ]
    },
    "scholarships": [
      "DSI Trust Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "DSI Group",
      "Estd 1980",
      "Kumaraswamy Layout",
      "DTE Code: 112"
    ]
  },
  {
    "id": "gpt-tumakuru",
    "name": "Government Polytechnic (GPT), BH Road, Tumakuru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಬಿ.ಎಚ್. ರಸ್ತೆ, ತುಮಕೂರು",
    "shortName": "GPT Tumakuru",
    "tagline": "Premier Government Technical Diploma Institution in Tumakuru (Estd 1958)",
    "division": "bengaluru",
    "district": "Tumakuru",
    "taluk": "Tumakuru",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1958,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "B.H. Road, Near Town Hall, Tumakuru, Karnataka 572102",
    "pincode": "572102",
    "phone": "+91 816 2278255",
    "email": "gpttumkur@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gpttumakuru",
    "mapQuery": "Government+Polytechnic+BH+Road+Tumakuru",
    "description": "Government Polytechnic Tumakuru, established in 1958, is a prominent technical institute offering subsidized engineering diplomas with excellent placement records in Vasanthanarasapura industrial zone.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & Civil",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 300,
        "annualFee": "₹4,500 / Year (Govt Rate)",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Centralized Merit Counseling.",
    "facilities": [
      "BH Road Campus",
      "Workshops",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels available.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.8 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "Tata Motors",
        "Toyota",
        "L&T",
        "Bosch"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Portal"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1958",
      "Low Fees ₹4.5k",
      "Tumakuru"
    ]
  },
  {
    "id": "siddaganga-polytechnic-tumakuru",
    "name": "Siddaganga Polytechnic, Siddaganga Mutt, Tumakuru",
    "kannadaName": "ಸಿದ್ಧಗಂಗಾ ಪಾಲಿಟೆಕ್ನಿಕ್, ಸಿದ್ಧಗಂಗಾ ಮಠ, ತುಮಕೂರು",
    "shortName": "Siddaganga Polytechnic",
    "tagline": "Historic Technical Diploma Institution under Sree Siddaganga Mutt (Estd 1984 by Dr. Shivakumara Swamiji)",
    "division": "bengaluru",
    "district": "Tumakuru",
    "taluk": "Tumakuru",
    "stream": "polytechnic",
    "type": "Private Aided",
    "established": 1984,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Siddaganga Mutt Campus, Tumakuru, Karnataka 572104",
    "pincode": "572104",
    "phone": "+91 816 2282411",
    "email": "spt_tumkur@yahoo.com",
    "website": "https://www.siddaganga.org",
    "mapQuery": "Siddaganga+Polytechnic+Mutt+Tumakuru",
    "description": "Siddaganga Polytechnic, run by Sree Siddaganga Education Society, offers value-based technical diploma courses with free Prasad / boarding for needy students.",
    "courses": [
      {
        "name": "Diploma in Mechanical, Electrical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹8,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Allotment & Mutt Merit.",
    "facilities": [
      "Siddaganga Mutt Campus",
      "Modern Workshops",
      "Free Hostel / Mess",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Mutt hostels with free boarding and lodging for deserving students.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8.0 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "TVS Motors",
        "Tata Motors",
        "L&T",
        "Toyota"
      ]
    },
    "scholarships": [
      "Siddaganga Mutt Dasoha Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Siddaganga Mutt",
      "Free Boarding Available",
      "Estd 1984",
      "Tumakuru"
    ]
  },
  {
    "id": "gpt-shivamogga",
    "name": "Government Polytechnic (GPT), Shivamogga",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಶಿವಮೊಗ್ಗ",
    "shortName": "GPT Shivamogga",
    "tagline": "Premier Public Technical Diploma Institution in Malnad Region (Estd 1960)",
    "division": "bengaluru",
    "district": "Shivamogga",
    "taluk": "Shivamogga",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1960,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Savalanga Road, Shivamogga, Karnataka 577204",
    "pincode": "577204",
    "phone": "+91 8182 222168",
    "email": "gptshivamogga@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptshivamogga",
    "mapQuery": "Government+Polytechnic+Savalanga+Road+Shivamogga",
    "description": "Government Polytechnic Shivamogga, established in 1960, provides high-quality practical training across engineering diploma streams with active campus drives.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & Civil",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Merit Allotment.",
    "facilities": [
      "Savalanga Road Campus",
      "Workshops",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels with subsidized boarding.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Tata Motors",
        "L&T",
        "Bosch",
        "Infosys BPM"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1960",
      "Low Fees ₹4.5k",
      "Shivamogga"
    ]
  },
  {
    "id": "gpt-davanagere",
    "name": "Government Polytechnic (GPT), Hadadi Road, Davanagere",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಹದಡಿ ರಸ್ತೆ, ದಾವಣಗೆರೆ",
    "shortName": "GPT Davanagere",
    "tagline": "Premier Government Diploma Institution in Central Karnataka (Estd 1962)",
    "division": "bengaluru",
    "district": "Davanagere",
    "taluk": "Davanagere",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1962,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Hadadi Road, Near UBDT College, Davanagere, Karnataka 577005",
    "pincode": "577005",
    "phone": "+91 8192 232268",
    "email": "gptdavanagere@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptdavanagere",
    "mapQuery": "Government+Polytechnic+Hadadi+Road+Davanagere",
    "description": "Government Polytechnic Davanagere offers practical engineering diploma training in proximity to the UBDT engineering campus with modern lab setups.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Single Window Allotment.",
    "facilities": [
      "Hadadi Road Campus",
      "Workshops",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "87%",
      "topRecruiters": [
        "Tata Motors",
        "L&T",
        "Kirloskar",
        "Wipro"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Karnataka"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1962",
      "Low Fees ₹4.5k",
      "Davanagere"
    ]
  },
  {
    "id": "gpt-kolar",
    "name": "Government Polytechnic (GPT), Kolar",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಕೋಲಾರ",
    "shortName": "GPT Kolar",
    "tagline": "Public Technical Diploma Institution in Kolar District (Estd 1985)",
    "division": "bengaluru",
    "district": "Kolar",
    "taluk": "Kolar",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1985,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Gulpet, Kolar, Karnataka 563101",
    "pincode": "563101",
    "phone": "+91 8152 222168",
    "email": "gptkolar@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptkolar",
    "mapQuery": "Government+Polytechnic+Gulpet+Kolar",
    "description": "Government Polytechnic Kolar provides career-oriented technical diploma education with strong ties to nearby Narasapura industrial area.",
    "courses": [
      {
        "name": "Diploma in Automobile, Mechanical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 200,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Single Window Allotment.",
    "facilities": [
      "Workshops",
      "Automobile Labs",
      "Hostel",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.2 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "Honda Narasapura",
        "Mahindra",
        "Tata Motors"
      ]
    },
    "scholarships": [
      "SC/ST Full Tuition Waiver",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Narasapura Ties",
      "Low Fees ₹4.5k",
      "Kolar"
    ]
  },
  {
    "id": "ds-pharmacy-bengaluru",
    "name": "Dayananda Sagar College of Pharmacy (DSCP), Kumaraswamy Layout, Bengaluru",
    "kannadaName": "ದಯಾನಂದ ಸಾಗರ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಕುಮಾರಸ್ವಾಮಿ ಲೇಔಟ್, ಬೆಂಗಳೂರು",
    "shortName": "Dayananda Sagar Pharmacy",
    "tagline": "Premier Pharmacy Campus with Sagar Hospital Clinical Training (Estd 1991 by DSI)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "pharmacy",
    "type": "Private (Dayananda Sagar University / RGUHS)",
    "established": 1991,
    "affiliation": "Dayananda Sagar University / RGUHS & Pharmacy Council of India (PCI)",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru, Karnataka 560078",
    "pincode": "560078",
    "phone": "+91 80 4216 1750, +91 80 4216 1751",
    "email": "admissions@dayanandasagar.edu",
    "website": "https://www.dsu.edu.in/pharmacy",
    "mapQuery": "Dayananda+Sagar+College+of+Pharmacy+Bengaluru",
    "description": "Dayananda Sagar College of Pharmacy offers world-class B.Pharm, Pharm.D, and M.Pharm degrees. Students gain extensive bedside clinical pharmacy training at the 600-bed Sagar Hospitals.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Univ Quota: ₹1,75,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA Pharmacy) / DSU Entrance"
      },
      {
        "name": "Pharm.D (Doctor of Pharmacy)",
        "level": "UG/PG",
        "duration": "6 Years (incl 1 Yr Internship)",
        "seats": 30,
        "annualFee": "Govt Quota: ₹1,10,000 | Univ Quota: ₹2,80,000",
        "eligibility": "10+2 PCB min 50%",
        "entranceExam": "KCET / DSU Entrance"
      },
      {
        "name": "M.Pharm in Pharmacology, Pharmaceutics & Analysis",
        "level": "PG",
        "duration": "2 Years",
        "seats": 60,
        "annualFee": "₹1,50,000 / Year",
        "eligibility": "B.Pharm min 55% + GPAT / PGCET",
        "entranceExam": "GPAT / Karnataka PGCET"
      }
    ],
    "admissionProcess": "Centralized KEA KCET Pharmacy Online Counseling & DSU University Direct Admissions.",
    "facilities": [
      "High-Tech DSI Campus",
      "Sagar Hospitals Clinical Training",
      "Advanced Drug Testing Instrumentation Lab",
      "Hostels with Multi-Cuisine Dining"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels for boys and girls with high-speed Wi-Fi and gym.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹16.5 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Biocon",
        "Novartis",
        "AstraZeneca",
        "Cipla",
        "Dr. Reddy's",
        "Sun Pharma",
        "Micro Labs",
        "QuintilesIMS"
      ]
    },
    "scholarships": [
      "DSU Merit Fellowships",
      "Govt Post-Matric SSP Scholarships"
    ],
    "badges": [
      "Sagar Hospital Tied",
      "Pharm.D Hub",
      "NAAC A+",
      "DSI Group",
      "KEA Code: P005"
    ]
  },
  {
    "id": "ramaiah-pharmacy-bengaluru",
    "name": "Faculty of Pharmacy, Ramaiah University of Applied Sciences (RUAS FAP), Bengaluru",
    "kannadaName": "ರಾಮಯ್ಯ ಔಷಧ ವಿಜ್ಞಾನ ನಿಕಾಯ (ರುಆಸ್ ಎಫ್‌ಎಪಿ), ಎಂ.ಎಸ್. ರಾಮಯ್ಯ ನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "Ramaiah Pharmacy (RUAS)",
    "tagline": "NIRF Ranked Premier Pharmaceutical & Clinical Research Faculty (Estd 1993)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "pharmacy",
    "type": "Private University (RUAS)",
    "established": 1993,
    "affiliation": "Ramaiah University of Applied Sciences (RUAS) & PCI Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "MSR Nagar, Gnanagangothri Campus, Mathikere, Bengaluru, Karnataka 560054",
    "pincode": "560054",
    "phone": "+91 80 4536 6666, +91 80 2360 8942",
    "email": "dean.ph@msruas.ac.in",
    "website": "https://www.msruas.ac.in/faculty-pharmacy",
    "mapQuery": "Ramaiah+Faculty+of+Pharmacy+Mathikere+Bengaluru",
    "description": "Ramaiah Faculty of Pharmacy is attached to the 1,500-bed Ramaiah Medical College Hospital, providing benchmark clinical pharmacy training and industrial formulation research.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | RUAS Quota: ₹2,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET / RUAT Entrance"
      },
      {
        "name": "Pharm.D (Doctor of Pharmacy - Clinical Residency)",
        "level": "UG/PG",
        "duration": "6 Years",
        "seats": 30,
        "annualFee": "Govt Quota: ₹1,10,000 | RUAS Quota: ₹3,20,000",
        "eligibility": "10+2 PCB min 50%",
        "entranceExam": "KCET / RUAT"
      }
    ],
    "admissionProcess": "Centralized KEA KCET counseling & Ramaiah University RUAT All-India Merit.",
    "facilities": [
      "1,500-Bed Hospital Tie-up",
      "Advanced HPLC & Molecular Modeling Labs",
      "Modern Hostels",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹6.8 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Novartis",
        "Pfizer",
        "Biocon",
        "AstraZeneca",
        "IQVIA",
        "Sun Pharma",
        "Dr. Reddy's"
      ]
    },
    "scholarships": [
      "Gokula Education Foundation Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "1,500 Bed Hospital",
      "NIRF Ranked",
      "RUAS University",
      "Mathikere Hub"
    ]
  },
  {
    "id": "pes-pharmacy-bengaluru",
    "name": "PES College of Pharmacy (PESCP), Hanumanthanagar, Bengaluru",
    "kannadaName": "ಪಿ.ಇ.ಎಸ್. ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಹನುಮಂತನಗರ, ಬೆಂಗಳೂರು",
    "shortName": "PES Pharmacy Hanumanthanagar",
    "tagline": "Historic Flagship Pharmacy Institution of PES Group (Estd 1982 by Dr. M.R. Doreswamy)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "pharmacy",
    "type": "Private (PES University / RGUHS)",
    "established": 1982,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) / PES Univ & PCI",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "50 Feet Road, Hanumanthanagar, BSK 1st Stage, Bengaluru, Karnataka 560050",
    "pincode": "560050",
    "phone": "+91 80 2660 0113, +91 80 2660 0114",
    "email": "pescp@pes.edu",
    "website": "https://pes.edu/pescp",
    "mapQuery": "PES+College+of+Pharmacy+Hanumanthanagar+Bengaluru",
    "description": "PES College of Pharmacy, founded in 1982, is a pioneer pharmaceutical institute in Hanumanthanagar offering B.Pharm, Pharm.D, and post-graduate specializations.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,80,000",
        "eligibility": "10+2 PCM/PCB min 50%",
        "entranceExam": "KCET (KEA Pharmacy) / PESSAT"
      },
      {
        "name": "Pharm.D (Doctor of Pharmacy)",
        "level": "UG/PG",
        "duration": "6 Years",
        "seats": 30,
        "annualFee": "Govt Quota: ₹1,10,000 | Private: ₹2,60,000",
        "eligibility": "10+2 PCB min 50%",
        "entranceExam": "KCET / PESSAT"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & PESSAT All-India Merit.",
    "facilities": [
      "Hanumanthanagar Campus",
      "Bio-Analytical Research Centre",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Biocon",
        "Cipla",
        "Novartis",
        "Syngene",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "PES MRD Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "PES Group",
      "Estd 1982",
      "Hanumanthanagar",
      "PCI Approved",
      "KEA Code: P026"
    ]
  },
  {
    "id": "oxford-pharmacy-bengaluru",
    "name": "The Oxford College of Pharmacy, Bommanahalli, Bengaluru",
    "kannadaName": "ದಿ ಆಕ್ಸ್‌ಫರ್ಡ್ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಬೊಮ್ಮನಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "The Oxford Pharmacy",
    "tagline": "Premier Pharmacy Campus on Hosur Road (Estd 1992 by Children's Education Society)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "pharmacy",
    "type": "Private",
    "established": 1992,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "6/9, 1st Cross, Begur Road, Hongasandra, Bommanahalli, Bengaluru, Karnataka 560068",
    "pincode": "560068",
    "phone": "+91 80 6175 4600",
    "email": "tocp@theoxford.edu",
    "website": "https://www.theoxford.edu/pharmacy",
    "mapQuery": "The+Oxford+College+of+Pharmacy+Hongasandra+Bengaluru",
    "description": "The Oxford College of Pharmacy, established in 1992, offers B.Pharm, Pharm.D, and M.Pharm with state-of-the-art pharmaceutics and clinical trials labs.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,35,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Oxford Trust Merit.",
    "facilities": [
      "Bommanahalli Campus",
      "Formulation Labs",
      "Hostels for Boys & Girls",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels with mess.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Cipla",
        "Micro Labs",
        "Biocon",
        "AstraZeneca",
        "Sun Pharma"
      ]
    },
    "scholarships": [
      "Oxford Merit Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Oxford Group",
      "Estd 1992",
      "Hosur Road Hub",
      "KEA Code: P025"
    ]
  },
  {
    "id": "acharya-pharmacy-bengaluru",
    "name": "Acharya & B.M. Reddy College of Pharmacy (NIRF Rank #43), Soladevanahalli, Bengaluru",
    "kannadaName": "ಆಚಾರ್ಯ ಹಾಗೂ ಬಿ.ಎಂ. ರೆಡ್ಡಿ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಸೋಲದೇವನಹಳ್ಳಿ, ಬೆಂಗಳೂರು",
    "shortName": "Acharya Pharmacy (ABMRCP)",
    "tagline": "NIRF Top 50 Pharmacy Institution of India (Estd 1992)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru North",
    "stream": "pharmacy",
    "type": "Private",
    "established": 1992,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI / NBA Accredited",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Bengaluru, Karnataka 560107",
    "pincode": "560107",
    "phone": "+91 80 2255 5555",
    "email": "principalabmrcp@acharya.ac.in",
    "website": "https://www.acharya.ac.in/acharya-bm-reddy-college-of-pharmacy",
    "mapQuery": "Acharya+BM+Reddy+College+of+Pharmacy+Bengaluru",
    "description": "Acharya & BM Reddy College of Pharmacy is NIRF ranked #43 in India, situated on the 120-acre Acharya campus with DSIR-recognized research center.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy - NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,65,000",
        "eligibility": "10+2 PCM/PCB min 50%",
        "entranceExam": "KCET (KEA) / Direct Merit"
      },
      {
        "name": "Pharm.D (Doctor of Pharmacy) & M.Pharm Programs",
        "level": "UG/PG",
        "duration": "6 Years",
        "seats": 30,
        "annualFee": "₹2,50,000 / Year",
        "eligibility": "10+2 PCB min 50%",
        "entranceExam": "KCET / Merit"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Acharya Trust All-India Seats.",
    "facilities": [
      "120-Acre Campus",
      "DSIR Research Centre",
      "Animal House",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with modern amenities.",
    "placementStats": {
      "averagePackage": "₹6.4 LPA",
      "highestPackage": "₹17 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Biocon",
        "Novartis",
        "Sun Pharma",
        "Dr. Reddy's",
        "Syngene",
        "Cipla"
      ]
    },
    "scholarships": [
      "Acharya Merit Aid",
      "SSP Karnataka"
    ],
    "badges": [
      "NIRF Rank #43",
      "120-Acre Campus",
      "NAAC A+",
      "NBA Accredited",
      "KEA Code: P002"
    ]
  },
  {
    "id": "vips-pharmacy-bengaluru",
    "name": "Visveswarapura Institute of Pharmaceutical Sciences (VIPS), BIT Campus, Bengaluru",
    "kannadaName": "ವಿಶ್ವೇಶ್ವರಪುರ ಔಷಧ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ವಿಐಪಿಎಸ್), ಬಿಐಟಿ ಕ್ಯಾಂಪಸ್, ಬೆಂಗಳೂರು",
    "shortName": "VIPS Pharmacy VV Puram",
    "tagline": "Premier Pharmacy Landmark in Central Bengaluru (Estd 1980 by Rajya Vokkaligara Sangha)",
    "division": "bengaluru",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "stream": "pharmacy",
    "type": "Private (Rajya Vokkaligara Sangha)",
    "established": 1980,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "24th Main, 22nd Cross, BSK 2nd Stage, Bengaluru, Karnataka 560070",
    "pincode": "560070",
    "phone": "+91 80 2671 2707",
    "email": "vips.kIMS@gmail.com",
    "website": "https://www.vips.edu.in",
    "mapQuery": "Visveswarapura+Institute+of+Pharmaceutical+Sciences+Bengaluru",
    "description": "VIPS Bengaluru, run by Rajya Vokkaligara Sangha, is attached to KIMS Hospital for clinical pharmacy postings, offering B.Pharm and Pharm.D degrees.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,20,000",
        "eligibility": "10+2 PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Vokkaligara Sangha Merit.",
    "facilities": [
      "KIMS Hospital Attached",
      "Pharmacology Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Micro Labs",
        "Cipla",
        "Biocon",
        "Sun Pharma"
      ]
    },
    "scholarships": [
      "Vokkaligara Sangha Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "KIMS Hospital Tie-up",
      "Estd 1980",
      "Vokkaligara Sangha",
      "KEA Code: P037"
    ]
  },
  {
    "id": "siddaganga-pharmacy-tumakuru",
    "name": "Sree Siddaganga College of Pharmacy, Tumakuru",
    "kannadaName": "ಶ್ರೀ ಸಿದ್ಧಗಂಗಾ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ತುಮಕೂರು",
    "shortName": "Siddaganga Pharmacy Tumakuru",
    "tagline": "Pioneering Pharmacy Institution under Siddaganga Mutt (Estd 1983)",
    "division": "bengaluru",
    "district": "Tumakuru",
    "taluk": "Tumakuru",
    "stream": "pharmacy",
    "type": "Private Aided",
    "established": 1983,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Dr. Sree Sree Shivakumara Swamiji Road, Batawadi, Tumakuru, Karnataka 572102",
    "pincode": "572102",
    "phone": "+91 816 2273331",
    "email": "sscop_tmk@hotmail.com",
    "website": "https://www.sscaptmk.org",
    "mapQuery": "Sree+Siddaganga+College+of+Pharmacy+Tumakuru",
    "description": "Sree Siddaganga College of Pharmacy, established in 1983 under Sree Siddaganga Education Society, provides quality B.Pharm, Pharm.D, and M.Pharm degrees with District Hospital training.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy) & Pharm.D",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Allotment & Mutt Merit Seats.",
    "facilities": [
      "Batawadi Campus",
      "Analytical Chemistry Labs",
      "Hostels with Free Food for Needy",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Mutt hostels with vegetarian meals.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Cipla",
        "Micro Labs",
        "Dr. Reddy's",
        "Aurobindo",
        "Biocon"
      ]
    },
    "scholarships": [
      "Siddaganga Mutt Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "Siddaganga Mutt",
      "Estd 1983",
      "PCI Approved",
      "KEA Code: P032"
    ]
  },
  {
    "id": "national-pharmacy-shivamogga",
    "name": "National College of Pharmacy (NES), Shivamogga",
    "kannadaName": "ನ್ಯಾಷನಲ್ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು (ಎನ್‌ಇಎಸ್), ಶಿವಮೊಗ್ಗ",
    "shortName": "National Pharmacy Shivamogga",
    "tagline": "Historic Pharmacy Institution in Malnad Region (Estd 1968 by NES)",
    "division": "bengaluru",
    "district": "Shivamogga",
    "taluk": "Shivamogga",
    "stream": "pharmacy",
    "type": "Private Aided",
    "established": 1968,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Balaraj Urs Road, Shivamogga, Karnataka 577201",
    "pincode": "577201",
    "phone": "+91 8182 278321",
    "email": "ncpsmg@yahoo.co.in",
    "website": "https://www.ncpsmg.org.in",
    "mapQuery": "National+College+of+Pharmacy+Shivamogga",
    "description": "National College of Pharmacy, founded in 1968 by the National Education Society (NES), is one of Karnataka's oldest pharmacy institutions offering B.Pharm, Pharm.D, and clinical research.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy) & Pharm.D",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & NES Society Seats.",
    "facilities": [
      "Balaraj Urs Road Campus",
      "Pharmacology Labs",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with Malnad vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹13 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Cipla",
        "Micro Labs",
        "Biocon",
        "AstraZeneca"
      ]
    },
    "scholarships": [
      "NES Trust Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Historic Estd 1968",
      "NES Society",
      "Malnad Landmark",
      "KEA Code: P022"
    ]
  },
  {
    "id": "bapuji-pharmacy-davanagere",
    "name": "Bapuji Pharmacy College (BEA), SSIMS Campus, Davanagere",
    "kannadaName": "ಬಾಪೂಜಿ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು (ಬಿಇಎ), ಎಸ್.ಎಸ್.ಐ.ಎಂ.ಎಸ್ ಆವರಣ, ದಾವಣಗೆರೆ",
    "shortName": "Bapuji Pharmacy Davanagere",
    "tagline": "Premier Pharmacy Landmark in Central Karnataka (Estd 1992 by Bapuji Educational Association)",
    "division": "bengaluru",
    "district": "Davanagere",
    "taluk": "Davanagere",
    "stream": "pharmacy",
    "type": "Private (BEA)",
    "established": 1992,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "SSIMS & RC Campus, NH-4 Bypass, Davanagere, Karnataka 577005",
    "pincode": "577005",
    "phone": "+91 8192 222501",
    "email": "bapujipharmacy@gmail.com",
    "website": "https://www.bapujipharmacy.org",
    "mapQuery": "Bapuji+Pharmacy+College+SSIMS+Davanagere",
    "description": "Bapuji Pharmacy College, part of the prestigious Bapuji Educational Association (BEA), is attached to the 1,000-bed SSIMS Hospital, offering top B.Pharm and Pharm.D programs.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & BEA Management Seats.",
    "facilities": [
      "SSIMS Medical Campus",
      "1,000-Bed Hospital Tie-up",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with mess.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Cipla",
        "Dr. Reddy's",
        "Micro Labs",
        "Biocon"
      ]
    },
    "scholarships": [
      "BEA Trust Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "BEA Davanagere",
      "SSIMS Hospital Tied",
      "Estd 1992",
      "KEA Code: P007"
    ]
  },
  {
    "id": "vtu-belagavi",
    "name": "Visvesvaraya Technological University (VTU Headquarters), Belagavi",
    "kannadaName": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ (ವಿಟಿಯು), ಬೆಳಗಾವಿ",
    "shortName": "VTU Belagavi",
    "tagline": "Apex Technical University of Karnataka governing 200+ Engineering Colleges",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "engineering",
    "type": "State Technological University",
    "established": 1998,
    "affiliation": "UGC Recognized State University & AICTE Apex Body",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Jnana Sangama, Machhe, Belagavi, Karnataka 590018",
    "pincode": "590018",
    "phone": "+91 831 2498100, +91 831 2405458",
    "email": "registrar@vtu.ac.in",
    "website": "https://vtu.ac.in",
    "mapQuery": "VTU+Jnana+Sangama+Machhe+Belagavi",
    "description": "VTU is one of India's largest and most prestigious technological universities, established in 1998 in Belagavi. The 120-acre lush green Jnana Sangama campus houses university departments, advanced PG centers, and Centre of Excellence in Aerospace.",
    "courses": [
      {
        "name": "M.Tech in Artificial Intelligence, VLSI & Robotics",
        "level": "PG",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹35,000 / Year (Govt Subsidized)",
        "eligibility": "B.E./B.Tech with min 50% + GATE / PGCET",
        "entranceExam": "GATE / Karnataka PGCET"
      },
      {
        "name": "MCA & MBA Programs (VTU PG Centers)",
        "level": "PG",
        "duration": "2 Years",
        "seats": 180,
        "annualFee": "₹30,000 / Year",
        "eligibility": "Recognized Bachelor's Degree min 50%",
        "entranceExam": "Karnataka PGCET / KMAT"
      }
    ],
    "admissionProcess": "Admissions conducted centrally via Karnataka PGCET / GATE for PG and VTU ETR for Ph.D research scholars.",
    "facilities": [
      "120-Acre Sprawling Green Jnana Sangama Campus",
      "Dassault Systems Centre of Excellence",
      "Central Digital Library",
      "Modern PG Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "University PG hostel accommodation with clean mess and sports facilities.",
    "placementStats": {
      "averagePackage": "₹6.8 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Dassault Systems",
        "Infosys",
        "TCS",
        "Siemens",
        "L&T",
        "Bosch"
      ]
    },
    "scholarships": [
      "VTU Merit Fellowship for PG Students",
      "SSP Post-Matric Scholarship"
    ],
    "badges": [
      "Apex University",
      "120 Acre Campus",
      "NAAC A+",
      "Jnana Sangama"
    ]
  },
  {
    "id": "git-belagavi",
    "name": "KLS Gogte Institute of Technology (GIT Autonomous), Belagavi",
    "kannadaName": "ಕರ್ನಾಟಕ ಲಾ ಸೊಸೈಟಿಯ ಗೋಗ್ಟೆ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಬೆಳಗಾವಿ",
    "shortName": "KLS GIT Belagavi",
    "tagline": "Premier Autonomous VTU Engineering Landmark in Belagavi (Estd 1979 by KLS)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1979,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Jnana Ganga, Khanapur Road, Udyambag, Belagavi, Karnataka 590008",
    "pincode": "590008",
    "phone": "+91 831 2405500, +91 831 2405501",
    "email": "principal@git.edu",
    "website": "https://www.git.edu",
    "mapQuery": "KLS+Gogte+Institute+of+Technology+Udyambag+Belagavi",
    "description": "KLS GIT Belagavi is the flagship autonomous engineering college of North Karnataka, spanning a 23-acre campus with NBA accredited branches, incubation center, and stellar placement records.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,40,000",
        "eligibility": "10+2 with PCM min 45% (40% for SC/ST/OBC)",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in Artificial Intelligence & Data Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,40,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Aeronautical & Mechanical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,75,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "Admissions via KEA KCET Online Counseling (Govt Quota 45%), COMEDK (30%), and Management Merit Quota (25%).",
    "facilities": [
      "23-Acre Green Campus",
      "GIT Innovation & Incubation Centre",
      "High-Performance Computing Lab",
      "Hostels with North & South Mess"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels for boys and girls with high-speed Wi-Fi and gym.",
    "placementStats": {
      "averagePackage": "₹6.4 LPA",
      "highestPackage": "₹33.5 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Mercedes-Benz",
        "Amazon",
        "Texas Instruments",
        "TCS Digital",
        "Infosys",
        "Mindtree",
        "KPIT"
      ]
    },
    "scholarships": [
      "KLS Merit Scholarship",
      "SSP Karnataka e-PASS Scholarship",
      "Fee concessions for rural toppers"
    ],
    "badges": [
      "Autonomous VTU",
      "NAAC A+",
      "NBA Accredited",
      "Estd 1979",
      "KEA Code: E018"
    ]
  },
  {
    "id": "sgbit-belagavi",
    "name": "S.G. Balekundri Institute of Technology (SGBIT), Belagavi",
    "kannadaName": "ಎಸ್.ಜಿ. ಬಾಳೇಕುಂದ್ರಿ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ, ಬೆಳಗಾವಿ",
    "shortName": "SGBIT Belagavi",
    "tagline": "Premier Engineering College established by Shri Siddharoodha Swamiji Trust",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "engineering",
    "type": "Private",
    "established": 2008,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.4,
    "address": "Shivabasava Nagar, Belagavi, Karnataka 590010",
    "pincode": "59010",
    "phone": "+91 831 2407101",
    "email": "principal@sgbit.edu.in",
    "website": "https://www.sgbit.edu.in",
    "mapQuery": "S+G+Balekundri+Institute+of+Technology+Belagavi",
    "description": "SGBIT Belagavi is named after legendary irrigation engineer Dr. S.G. Balekundri, offering cutting-edge engineering programs with a strong focus on technical skill development.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil & Mechanical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Direct Institute Management Quota.",
    "facilities": [
      "Wi-Fi Campus",
      "Robotics & IoT Lab",
      "Modern Hostels",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "In-campus residential facilities with strict security and clean dining.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Capgemini",
        "Tata Elxsi"
      ]
    },
    "scholarships": [
      "SSP State Scholarship",
      "Trust Merit Scholarships"
    ],
    "badges": [
      "VTU Affiliated",
      "NAAC A",
      "KEA Code: E169"
    ]
  },
  {
    "id": "aitm-belagavi",
    "name": "Suresh Angadi Education Foundation's Angadi Institute of Technology & Management (AITM), Belagavi",
    "kannadaName": "ಅಂಗಡಿ ತಾಂತ್ರಿಕ ಹಾಗೂ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ (ಎಐಟಿಎಂ), ಬೆಳಗಾವಿ",
    "shortName": "Angadi Institute (AITM)",
    "tagline": "Dynamic Engineering & Management Campus in Belagavi (Estd 2009 by Suresh Angadi)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "engineering",
    "type": "Private",
    "established": 2009,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.3,
    "address": "Savagaon Road, Belagavi, Karnataka 590009",
    "pincode": "590009",
    "phone": "+91 831 2438100",
    "email": "director.aitm@saef.ac.in",
    "website": "https://www.aitmbgm.ac.in",
    "mapQuery": "Angadi+Institute+of+Technology+and+Management+Belagavi",
    "description": "AITM Belagavi offers multi-disciplinary B.E., MBA, and MCA courses with state-of-the-art infrastructure, sports complexes, and active industry tie-ups.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI/ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "MBA & MCA Programs",
        "level": "PG",
        "duration": "2 Years",
        "seats": 120,
        "annualFee": "₹65,000 / Year",
        "eligibility": "Graduation min 50%",
        "entranceExam": "Karnataka PGCET / KMAT"
      }
    ],
    "admissionProcess": "Centralized KEA KCET / PGCET counseling and SAEF trust admissions.",
    "facilities": [
      "Lush Green Campus",
      "Digital Seminar Halls",
      "Hostels",
      "Gym & Cafeteria"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Boys and Girls hostels with modern amenities.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "Cognizant",
        "Infosys",
        "SLK Software",
        "DXC Technology"
      ]
    },
    "scholarships": [
      "SAEF Foundation Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "SAEF Campus",
      "KEA Code: E177"
    ]
  },
  {
    "id": "jce-belagavi",
    "name": "Jain College of Engineering (JCE), Belagavi",
    "kannadaName": "ಜೈನ್ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜೆಸಿಇ), ಬೆಳಗಾವಿ",
    "shortName": "JCE Belagavi",
    "tagline": "Premier Technical Institution managed by JGI Group in Belagavi (Estd 2010)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "engineering",
    "type": "Private (JGI Group)",
    "established": 2010,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.4,
    "address": "599/2, T.S. No. 599/2, Machhe, Belagavi, Karnataka 590014",
    "pincode": "590014",
    "phone": "+91 831 2411192, +91 831 2411193",
    "email": "principal@jce.ac.in",
    "website": "https://www.jce.ac.in",
    "mapQuery": "Jain+College+of+Engineering+Machhe+Belagavi",
    "description": "JCE Belagavi, part of the prestigious JGI Group, offers quality engineering and MBA education near VTU headquarters in Machhe, Belagavi.",
    "courses": [
      {
        "name": "B.E. in Computer Science, AI-DS & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil & Mechanical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET / COMEDK UGET counseling & JGI merit seats.",
    "facilities": [
      "Modern Computing Labs",
      "Innovation Hub",
      "Hostel Blocks",
      "Transportation Fleet"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North & South Indian mess.",
    "placementStats": {
      "averagePackage": "₹5.1 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "TCS",
        "Wipro",
        "Infosys",
        "Hexaware",
        "SLK Software"
      ]
    },
    "scholarships": [
      "JGI Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "JGI Group",
      "KEA Code: E180"
    ]
  },
  {
    "id": "mmec-belagavi",
    "name": "Maratha Mandal Engineering College (MMEC), Belagavi",
    "kannadaName": "ಮರಾಠಾ ಮಂಡಳ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಎಂಡಿಎಂಇಸಿ), ಬೆಳಗಾವಿ",
    "shortName": "MMEC Belagavi",
    "tagline": "Heritage Engineering Institution in Belagavi (Estd 1997 by Maratha Mandal)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "engineering",
    "type": "Private",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.2,
    "address": "1007, RS No 47/2, Bauxite Road, Halaga, Belagavi, Karnataka 590016",
    "pincode": "590016",
    "phone": "+91 831 2470650",
    "email": "mmecbgm@gmail.com",
    "website": "https://www.mmec.edu.in",
    "mapQuery": "Maratha+Mandal+Engineering+College+Halaga+Belagavi",
    "description": "MMEC Belagavi provides comprehensive engineering education across multiple disciplines with rich laboratory infrastructure and sports grounds.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Electronics & Communication Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "Admissions through KEA KCET and management quota.",
    "facilities": [
      "Spacious Halaga Campus",
      "Robotics Lab",
      "Hostel Facilities",
      "Canteen"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel facilities available with mess and security.",
    "placementStats": {
      "averagePackage": "₹4.2 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Tech Mahindra",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Maratha Mandal Trust Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "Estd 1997",
      "KEA Code: E064"
    ]
  },
  {
    "id": "bec-bagalkot",
    "name": "Basaveshwar Engineering College (BEC Autonomous), Bagalkot",
    "kannadaName": "ಬಸವೇಶ್ವರ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಬಾಗಲಕೋಟೆ",
    "shortName": "BEC Bagalkot",
    "tagline": "Historic Heritage Autonomous Engineering Landmark of North Karnataka (Estd 1963 by B.V.V. Sangha)",
    "division": "belagavi",
    "district": "Bagalkot",
    "taluk": "Bagalkot",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1963,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Vidyagiri, Bagalkot, Karnataka 587102",
    "pincode": "587102",
    "phone": "+91 8354 237222, +91 8354 237223",
    "email": "principalbecbgk@gmail.com",
    "website": "https://www.becbgk.edu",
    "mapQuery": "Basaveshwar+Engineering+College+Bagalkot",
    "description": "Basaveshwar Engineering College (BEC Bagalkot), founded in 1963 by B.V.V. Sangha, is a World Bank TEQIP-funded premier autonomous engineering institution spanning a 125-acre campus in Vidyagiri.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,95,000",
        "eligibility": "10+2 with PCM min 45% (40% for SC/ST/OBC)",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in Artificial Intelligence & Machine Learning",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,95,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil, Mechanical & E&E Engineering (Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "Centralized KEA KCET Online Counseling, COMEDK UGET, and B.V.V. Sangha merit seats.",
    "facilities": [
      "125-Acre Sprawling Vidyagiri Campus",
      "TEQIP Research Laboratories",
      "Advanced CAD/CAM & Robotics Centre",
      "Central Library with 1.2 Lakh Volumes"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate multi-block residential hostels for boys and girls with North Karnataka vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹30 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Robert Bosch",
        "TCS",
        "Infosys",
        "Mercedes-Benz",
        "Cognizant",
        "L&T",
        "Wipro",
        "Toyota Kirloskar"
      ]
    },
    "scholarships": [
      "B.V.V. Sangha Merit Scholarships",
      "Govt Post-Matric SSP Scholarships",
      "Alumni Endowment Awards"
    ],
    "badges": [
      "Historic Landmark 1963",
      "Autonomous VTU",
      "TEQIP Funded",
      "125 Acre Campus",
      "KEA Code: E017"
    ]
  },
  {
    "id": "bgmit-mudhol",
    "name": "Biluru Gurubasava Mahaswamiji Institute of Technology (BGMIT), Mudhol",
    "kannadaName": "ಬಿಳೂರು ಗುರುಬಸವ ಮಹಾಸ್ವಾಮೀಜಿ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಬಿಜಿಎಂಐಟಿ), ಮುಧೋಳ",
    "shortName": "BGMIT Mudhol",
    "tagline": "Leading Technical Education Hub in Mudhol Taluk, Bagalkot (Estd 2009 by BVV Sangha)",
    "division": "belagavi",
    "district": "Bagalkot",
    "taluk": "Mudhol",
    "stream": "engineering",
    "type": "Private",
    "established": 2009,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Mudhol-Nippani Road, Mudhol, Bagalkot, Karnataka 587313",
    "pincode": "587313",
    "phone": "+91 8350 281350, +91 8350 281351",
    "email": "principal@bgmit.ac.in",
    "website": "https://www.bgmit.ac.in",
    "mapQuery": "BGMIT+College+Mudhol+Bagalkot",
    "description": "BGMIT Mudhol, established by the venerable B.V.V. Sangha Bagalkot, delivers quality technical education to rural and semi-urban talent in Northern Karnataka.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & B.V.V. Sangha Management Seats.",
    "facilities": [
      "30-Acre Campus",
      "Modern Computer Centers",
      "Hostel Facilities",
      "Fleet of College Buses"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Well-furnished hostels for boys and girls with North Karnataka meals.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Hexaware",
        "Mindtree"
      ]
    },
    "scholarships": [
      "BVV Sangha Fee Waivers",
      "SSP Scholarship"
    ],
    "badges": [
      "B.V.V. Sangha Unit",
      "Mudhol Landmark",
      "VTU Affiliated",
      "KEA Code: E182"
    ]
  },
  {
    "id": "kle-tech-hubballi",
    "name": "KLE Technological University (formerly B.V. Bhoomaraddi College / BVB CET), Hubballi",
    "kannadaName": "ಕೆ.ಎಲ್.ಇ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಬಿ.ವಿ. ಭೂಮರೆಡ್ಡಿ ಕಾಲೇಜು), ಹುಬ್ಬಳ್ಳಿ",
    "shortName": "KLE Tech Hubballi",
    "tagline": "Premier Private Technological University of Karnataka (Estd 1947 by KLE Society)",
    "division": "belagavi",
    "district": "Dharwad",
    "taluk": "Hubballi",
    "stream": "engineering",
    "type": "Private State University",
    "established": 1947,
    "affiliation": "UGC Recognized State Private University & AICTE",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "B.V. Bhoomaraddi Campus, Vidyanagar, Hubballi, Karnataka 580031",
    "pincode": "580031",
    "phone": "+91 836 2378123, +91 836 2374150",
    "email": "info@kletech.ac.in",
    "website": "https://www.kletech.ac.in",
    "mapQuery": "KLE+Technological+University+Vidyanagar+Hubballi",
    "description": "KLE Tech (BVB Hubballi) is one of India's oldest and most prestigious engineering campuses (Estd 1947). Spanning a 64-acre campus in Vidyanagar Hubballi, it boasts the Make-in-BVB Innovation Centre and alumni like Sudha Murty.",
    "courses": [
      {
        "name": "B.Tech in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 300,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹2,60,000",
        "eligibility": "10+2 with PCM min 50%",
        "entranceExam": "KCET / KLE Tech Entrance / COMEDK"
      },
      {
        "name": "B.Tech in AI & Machine Learning / Robotics & Automation",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹2,60,000",
        "eligibility": "10+2 with PCM min 50%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.Tech in Electronics, Mechanical, Civil & Biotech",
        "level": "UG",
        "duration": "4 Years",
        "seats": 480,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (40% Govt seats), COMEDK UGET, and University All India Merit Quota.",
    "facilities": [
      "64-Acre World-Class Campus",
      "Centre for Technology Innovation and Entrepreneurship (CTIE)",
      "Automotive Research Labs",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential student residences for 2,000+ students with gym and food court.",
    "placementStats": {
      "averagePackage": "₹8.2 LPA",
      "highestPackage": "₹43.3 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Amazon",
        "Microsoft",
        "Robert Bosch",
        "Sony",
        "Texas Instruments",
        "Mercedes-Benz",
        "TCS Digital",
        "Accenture"
      ]
    },
    "scholarships": [
      "KLE Society Merit Scholarships",
      "Pratibha Puraskara",
      "SSP Karnataka"
    ],
    "badges": [
      "Estd 1947 Heritage",
      "NAAC A+",
      "NIRF Top 150",
      "Hubballi Landmark",
      "KEA Code: E022"
    ]
  },
  {
    "id": "sdmcet-dharwad",
    "name": "SDM College of Engineering & Technology (SDMCET Autonomous), Dharwad",
    "kannadaName": "ಎಸ್.ಡಿ.ಎಂ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಧಾರವಾಡ",
    "shortName": "SDMCET Dharwad",
    "tagline": "Autonomous VTU Engineering Institution under SDM Educational Society (Estd 1979 by Veerendra Heggade)",
    "division": "belagavi",
    "district": "Dharwad",
    "taluk": "Dharwad",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1979,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Dhavalagiri, Kalghatgi Road, Dharwad, Karnataka 580002",
    "pincode": "580002",
    "phone": "+91 836 2447465, +91 836 2448327",
    "email": "principal@sdmcet.ac.in",
    "website": "https://www.sdmcet.ac.in",
    "mapQuery": "SDM+College+of+Engineering+and+Technology+Dharwad",
    "description": "SDMCET Dharwad, situated on a scenic 72-acre campus at Dhavalagiri, is a top autonomous VTU institution known for academic excellence, value-based education, and strong placements.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,20,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Data Science / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,20,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "Centralized KEA KCET Online Allotment, COMEDK UGET, and SDM Society Merit Seats.",
    "facilities": [
      "72-Acre Dhavalagiri Hilltop Campus",
      "High Performance Computing Centre",
      "Hostels with Pure Veg Mess",
      "Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate vegetarian on-campus hostels with Wi-Fi and indoor sports.",
    "placementStats": {
      "averagePackage": "₹6.6 LPA",
      "highestPackage": "₹32 LPA",
      "placedPercentage": "93%",
      "topRecruiters": [
        "Societe Generale",
        "Bosch",
        "Infosys",
        "TCS",
        "Accenture",
        "Mercedes Benz",
        "Texas Instruments"
      ]
    },
    "scholarships": [
      "SDM Trust Scholarships",
      "SSP Post-Matric Karnataka"
    ],
    "badges": [
      "Autonomous VTU",
      "SDM Society",
      "72-Acre Campus",
      "KEA Code: E025"
    ]
  },
  {
    "id": "agmr-hubballi",
    "name": "AGM Rural College of Engineering & Technology (AGMR), Varur, Hubballi",
    "kannadaName": "ಎ.ಜಿ.ಎಂ ಗ್ರಾಮೀಣ ತಾಂತ್ರಿಕ ಕಾಲೇಜು (ಎಜಿಎಂಆರ್), ವರೂರ, ಹುಬ್ಬಳ್ಳಿ",
    "shortName": "AGMR Hubballi",
    "tagline": "Prominent Engineering College on Pune-Bengaluru Highway in Dharwad District",
    "division": "belagavi",
    "district": "Dharwad",
    "taluk": "Hubballi",
    "stream": "engineering",
    "type": "Private",
    "established": 2014,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "NH-4, Pune-Bengaluru Highway, Varur, Hubballi, Karnataka 581207",
    "pincode": "581207",
    "phone": "+91 836 2200234",
    "email": "principal@agmr.ac.in",
    "website": "https://www.agmr.ac.in",
    "mapQuery": "AGM+Rural+College+of+Engineering+Varur+Hubballi",
    "description": "AGMR College of Engineering provides quality technical education with modern laboratories and highway connectivity near Hubballi.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Electronics & Civil Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and Management admissions.",
    "facilities": [
      "Highway Campus",
      "Computer Labs",
      "Hostels",
      "Bus Transportation"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel accommodation for outstation students.",
    "placementStats": {
      "averagePackage": "₹4.4 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "81%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "KPIT"
      ]
    },
    "scholarships": [
      "SSP State Scholarship",
      "Rural Student Concessions"
    ],
    "badges": [
      "VTU Affiliated",
      "Varur Hubballi",
      "KEA Code: E223"
    ]
  },
  {
    "id": "bldea-vijayapura",
    "name": "BLDEA's V.P. Dr. P.G. Halakatti College of Engineering & Technology (Autonomous), Vijayapura",
    "kannadaName": "ಬಿ.ಎಲ್.ಡಿ.ಇ ಸಂಸ್ಥೆಯ ಡಾ. ಪಿ.ಜಿ. ಹಳಕಟ್ಟಿ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ವಿಜಯಪುರ",
    "shortName": "BLDEA Vijayapura",
    "tagline": "Autonomous Technical Landmark of Historic Vijayapura (Estd 1980 by BLDE Association)",
    "division": "belagavi",
    "district": "Vijayapura",
    "taluk": "Vijayapura",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Ashram Road, Adarsh Nagar, Vijayapura, Karnataka 586103",
    "pincode": "586103",
    "phone": "+91 8352 261120, +91 8352 262644",
    "email": "principal@bldeacet.ac.in",
    "website": "https://www.bldeacet.ac.in",
    "mapQuery": "BLDEA+Engineering+College+Vijayapura",
    "description": "BLDEA's V.P. Dr. P.G. Halakatti College of Engineering is an autonomous institution with NBA-accredited branches, modern research centers, and a 20-acre campus in historic Vijayapura.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,80,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / Civil / Mechanical",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Allotment, COMEDK, and BLDE Association Management seats.",
    "facilities": [
      "20-Acre Campus",
      "Advanced Siemens Center of Excellence",
      "Central Library",
      "Boys & Girls Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with North Karnataka vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Tech Mahindra",
        "Mindtree",
        "SLK Software",
        "Persistent Systems"
      ]
    },
    "scholarships": [
      "BLDE Association Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Autonomous VTU",
      "BLDE Association",
      "NAAC A+",
      "KEA Code: E029"
    ]
  },
  {
    "id": "secab-vijayapura",
    "name": "SECAB Institute of Engineering & Technology (SIET), Vijayapura",
    "kannadaName": "ಸೆಕಾಬ್ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಎಸ್‌ಐಇಟಿ), ವಿಜಯಪುರ",
    "shortName": "SECAB SIET Vijayapura",
    "tagline": "Premier Minority Engineering Institution in Vijayapura (Estd 2002 by SECAB Association)",
    "division": "belagavi",
    "district": "Vijayapura",
    "taluk": "Vijayapura",
    "stream": "engineering",
    "type": "Private (Minority)",
    "established": 2002,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.4,
    "address": "Jalanagar, Bagalkot Road, Vijayapura, Karnataka 586109",
    "pincode": "586109",
    "phone": "+91 8352 278370, +91 8352 278371",
    "email": "secab_siet@yahoo.co.in",
    "website": "https://www.siet.secab.org",
    "mapQuery": "SECAB+Institute+of+Engineering+Vijayapura",
    "description": "SECAB SIET Vijayapura is an acclaimed engineering institute offering UG and PG technical education with rich laboratory facilities and strong industry placement records.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil & Mechanical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and SECAB Association merit seats.",
    "facilities": [
      "Green Campus",
      "Digital Library",
      "Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostel facilities with modern dining.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "83%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Cognizant"
      ]
    },
    "scholarships": [
      "Minority Directorate Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "SECAB Association",
      "KEA Code: E115"
    ]
  },
  {
    "id": "kls-vdit-haliyal",
    "name": "KLS Vishwanathrao Deshpande Institute of Technology (VDIT), Haliyal",
    "kannadaName": "ಕರ್ನಾಟಕ ಲಾ ಸೊಸೈಟಿಯ ವಿ.ಡಿ. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ಹಳಿಯಾಳ",
    "shortName": "KLS VDIT Haliyal",
    "tagline": "Premier Engineering Institution in Western Ghats, Uttara Kannada (Estd 2004 by KLS)",
    "division": "belagavi",
    "district": "Uttara Kannada",
    "taluk": "Haliyal",
    "stream": "engineering",
    "type": "Private",
    "established": 2004,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Udyog Vidya Nagar, Dandeli Road, Haliyal, Uttara Kannada, Karnataka 581329",
    "pincode": "581329",
    "phone": "+91 8284 220861, +91 8284 220862",
    "email": "principal@klsvdit.edu.in",
    "website": "https://www.klsvdit.edu.in",
    "mapQuery": "KLS+VDIT+Haliyal+Uttara+Kannada",
    "description": "KLS VDIT Haliyal provides high-quality technical education in a pristine 26-acre campus in Uttara Kannada district, run by the Karnataka Law Society (KLS).",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Electronics",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & KLS Management Quota.",
    "facilities": [
      "26-Acre Green Campus",
      "IoT & Robotics Labs",
      "Hostels with Mess",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with clean vegetarian food.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "SLK Software",
        "KPIT",
        "Mindtree"
      ]
    },
    "scholarships": [
      "KLS Merit Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "KLS Society",
      "Uttara Kannada Hub",
      "VTU Affiliated",
      "KEA Code: E135"
    ]
  },
  {
    "id": "aitm-bhatkal",
    "name": "Anjuman Institute of Technology and Management (AITM), Bhatkal",
    "kannadaName": "ಅಂಜುಮನ್ ತಾಂತ್ರಿಕ ಹಾಗೂ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ (ಎಐಟಿಎಂ), ಭಟ್ಕಳ",
    "shortName": "AITM Bhatkal",
    "tagline": "Coastal Engineering Landmark in Uttara Kannada (Estd 1980 by Anjuman Hami-e-Muslimeen)",
    "division": "belagavi",
    "district": "Uttara Kannada",
    "taluk": "Bhatkal",
    "stream": "engineering",
    "type": "Private (Minority)",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Anjumanabad, Bhatkal, Uttara Kannada, Karnataka 581320",
    "pincode": "581320",
    "phone": "+91 8385 226224, +91 8385 226225",
    "email": "principal@aitm.edu.in",
    "website": "https://www.aitm.edu.in",
    "mapQuery": "Anjuman+Institute+of+Technology+Bhatkal",
    "description": "AITM Bhatkal is a prominent coastal engineering institution established in 1980, offering technical programs on a 50-acre hilltop campus overlooking the Arabian Sea.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil, Mechanical & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and Anjuman trust seats.",
    "facilities": [
      "50-Acre Hilltop Campus",
      "Computer Centers",
      "Hostels for Boys & Girls",
      "Sports Pavilion"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with sea view and dining.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "Infosys",
        "Wipro",
        "TCS",
        "Cognizant",
        "L&T"
      ]
    },
    "scholarships": [
      "Anjuman Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "Estd 1980",
      "Coastal Campus",
      "KEA Code: E027"
    ]
  },
  {
    "id": "gec-haveri",
    "name": "Government Engineering College (GEC), Haveri",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಹಾವೇರಿ",
    "shortName": "GEC Haveri",
    "tagline": "Premier Public Technical Institution in Haveri District (Estd 2007 by Govt of Karnataka)",
    "division": "belagavi",
    "district": "Haveri",
    "taluk": "Haveri",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Devagiri, Haveri, Karnataka 581110",
    "pincode": "581110",
    "phone": "+91 8375 233777",
    "email": "principal.gechaveri@gmail.com",
    "website": "https://gechaveri.ac.in",
    "mapQuery": "Government+Engineering+College+Devagiri+Haveri",
    "description": "GEC Haveri is a prominent government engineering college established in 2007, providing subsidized high-quality engineering degrees across Computer Science, Electronics, Civil, and Mechanical.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      },
      {
        "name": "B.E. in Electronics & Communication / Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% Centralized Admissions via Karnataka Examination Authority (KEA KCET).",
    "facilities": [
      "50-Acre Devagiri Campus",
      "Modern Computer Centers",
      "Govt Hostels for Boys & Girls",
      "Sports Facilities"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels with subsidized boarding.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "SLK Software",
        "Mindtree"
      ]
    },
    "scholarships": [
      "100% Tuition Waiver for SC/ST",
      "SSP State Scholarship",
      "OBC Vidyasiri"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "VTU Affiliated",
      "KEA Code: E164"
    ]
  },
  {
    "id": "stjit-ranebennur",
    "name": "S.T.J. Institute of Technology (STJIT), Ranebennur, Haveri",
    "kannadaName": "ಶ್ರೀ ತರಳಬಾಳು ಜಗದ್ಗುರು ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಎಸ್‌ಟಿಜೆಐಟಿ), ರಾಣೆಬೆನ್ನೂರು",
    "shortName": "STJIT Ranebennur",
    "tagline": "Historic Technical Landmark in Haveri District (Estd 1980 by Taralabalu Mutt)",
    "division": "belagavi",
    "district": "Haveri",
    "taluk": "Ranebennur",
    "stream": "engineering",
    "type": "Private",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "PB Road, Ranebennur, Haveri, Karnataka 581115",
    "pincode": "581115",
    "phone": "+91 8373 266343",
    "email": "principalstjit@gmail.com",
    "website": "https://www.stjit.ac.in",
    "mapQuery": "STJIT+Engineering+College+Ranebennur",
    "description": "STJIT Ranebennur, established in 1980 under Sri Taralabalu Jagadguru Vidya Peetha, offers quality engineering programs on a 52-acre campus on PB Road.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil, Mechanical & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and Trust Management Quota.",
    "facilities": [
      "52-Acre Campus",
      "Computing Labs",
      "Hostels for Boys & Girls",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "In-campus residential hostel with vegetarian food.",
    "placementStats": {
      "averagePackage": "₹4.4 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Tech Mahindra",
        "Wipro"
      ]
    },
    "scholarships": [
      "Taralabalu Peetha Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "Estd 1980",
      "52 Acre Campus",
      "KEA Code: E028"
    ]
  },
  {
    "id": "tontadarya-gadag",
    "name": "Tontadarya College of Engineering (TCE), Gadag",
    "kannadaName": "ತೋಂಟದಾರ್ಯ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಟಿಸಿಇ), ಗದಗ",
    "shortName": "TCE Gadag",
    "tagline": "Premier Engineering Landmark in Gadag District (Estd 1997 by Tontadarya Sansthan Math)",
    "division": "belagavi",
    "district": "Gadag",
    "taluk": "Gadag",
    "stream": "engineering",
    "type": "Private",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Mundargi Road, Gadag, Karnataka 582101",
    "pincode": "582101",
    "phone": "+91 8372 235389, +91 8372 235390",
    "email": "principal@tcegadag.edu.in",
    "website": "https://www.tcegadag.edu.in",
    "mapQuery": "Tontadarya+College+of+Engineering+Gadag",
    "description": "TCE Gadag is the leading technical college in Gadag district, founded under Sri Jagadguru Tontadarya Sansthan Math. It features lush 20-acre grounds and NBA-oriented learning.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Electronics & Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Sansthan Math Management Quota.",
    "facilities": [
      "20-Acre Campus",
      "Modern Computing Labs",
      "Hostels with Clean Mess",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North Karnataka food.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "SLK Software",
        "HCL Tech"
      ]
    },
    "scholarships": [
      "Sansthan Math Scholarships",
      "SSP Karnataka"
    ],
    "badges": [
      "Gadag Landmark",
      "VTU Affiliated",
      "NAAC A",
      "KEA Code: E063"
    ]
  },
  {
    "id": "gec-nargund-gadag",
    "name": "Government Engineering College (GEC), Nargund, Gadag",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ನರಗುಂದ, ಗದಗ",
    "shortName": "GEC Nargund",
    "tagline": "State Government Technical Institution in Nargund, Gadag District",
    "division": "belagavi",
    "district": "Gadag",
    "taluk": "Nargund",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2019,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Hubli-Solapur Highway, Nargund, Gadag, Karnataka 582207",
    "pincode": "582207",
    "phone": "+91 8377 245100",
    "email": "gecnargund@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gecnargund",
    "mapQuery": "Government+Engineering+College+Nargund+Gadag",
    "description": "GEC Nargund offers affordable government-subsidized engineering degrees in Gadag district with modern lab facilities and experienced faculty.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Civil Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year (Govt Fee)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Counseling.",
    "facilities": [
      "Government Campus",
      "Computer Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel facilities.",
    "placementStats": {
      "averagePackage": "₹4.2 LPA",
      "highestPackage": "₹10 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "VTU Affiliated",
      "KEA Code: E246"
    ]
  },
  {
    "id": "snmc-bagalkot",
    "name": "S. Nijalingappa Medical College & HSK Hospital (SNMC), Bagalkot",
    "kannadaName": "ಎಸ್. ನಿಜಲಿಂಗಪ್ಪ ವೈದ್ಯಕೀಯ ಮಹಾವಿದ್ಯಾಲಯ ಹಾಗೂ ಎಚ್.ಎಸ್.ಕೆ ಆಸ್ಪತ್ರೆ, ಬಾಗಲಕೋಟೆ",
    "shortName": "SNMC Bagalkot",
    "tagline": "Premier Medical Landmark of North Karnataka (Estd 2002 by B.V.V. Sangha)",
    "division": "belagavi",
    "district": "Bagalkot",
    "taluk": "Bagalkot",
    "stream": "medical",
    "type": "Private (B.V.V. Sangha)",
    "established": 2002,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru & NMC Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Navanagar, Bagalkot, Karnataka 587102",
    "pincode": "587102",
    "phone": "+91 8354 235360, +91 8354 235400",
    "email": "snmcbk@yahoo.com",
    "website": "https://www.snmcbgk.in",
    "mapQuery": "S+Nijalingappa+Medical+College+Navanagar+Bagalkot",
    "description": "SNMC Bagalkot, named after Karnataka's visionary former Chief Minister S. Nijalingappa, is attached to the 1,000-bed Hanagal Shri Kumareshwar (HSK) Hospital & Research Centre in Navanagar Bagalkot.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "level": "UG",
        "duration": "5.5 Years (incl 1 Yr Internship)",
        "seats": 250,
        "annualFee": "Govt Quota: ₹1,41,196 | Private Quota: ₹10,92,852",
        "eligibility": "10+2 with PCB min 50% + NEET UG Qualification",
        "entranceExam": "NEET UG (KEA State Counseling)"
      },
      {
        "name": "MD / MS Post Graduate Specializations (18 Clinical & Para-Clinical)",
        "level": "PG",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "Govt: ₹3,60,000 | Private: ₹12,50,000",
        "eligibility": "MBBS + NEET PG Pass",
        "entranceExam": "NEET PG (KEA / MCC)"
      }
    ],
    "admissionProcess": "Centralized Online Counseling conducted by KEA (85% State Quota) & MCC (15% All India Quota) strictly based on NEET UG rank.",
    "facilities": [
      "1,000-Bed HSK Super-Specialty Teaching Hospital",
      "Advanced Clinical Skill Labs & Simulation Centre",
      "Central Medical Library",
      "Separate AC / Non-AC Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for male and female resident doctors with vegetarian mess and 24/7 power backup.",
    "placementStats": {
      "averagePackage": "₹10.5 LPA (Junior Doctor Residency)",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "100%",
      "topRecruiters": [
        "HSK Hospital",
        "Apollo Hospitals",
        "Fortis Healthcare",
        "Manipal Hospitals",
        "Government Health Services"
      ]
    },
    "scholarships": [
      "SSP Post-Matric Scholarship",
      "BVV Sangha Medical Merit Concessions"
    ],
    "badges": [
      "1,000 Bed Hospital",
      "NMC Recognized",
      "250 MBBS Seats",
      "NAAC A+",
      "KEA Code: M035"
    ]
  },
  {
    "id": "jnmc-belagavi",
    "name": "Jawaharlal Nehru Medical College (JNMC / KAHER), Belagavi",
    "kannadaName": "ಜವಾಹರಲಾಲ್ ನೆಹರು ವೈದ್ಯಕೀಯ ಮಹಾವಿದ್ಯಾಲಯ (ಜೆಎನ್‌ಎಂಸಿ), ಬೆಳಗಾವಿ",
    "shortName": "JNMC Belagavi",
    "tagline": "World-Renowned Deemed Medical Landmark (Estd 1963 by KLE Society)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "medical",
    "type": "Deemed University (KAHER)",
    "established": 1963,
    "affiliation": "KLE Academy of Higher Education and Research (Deemed) & NMC",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "JNMC Campus, Nehru Nagar, Belagavi, Karnataka 590010",
    "pincode": "590010",
    "phone": "+91 831 2473777",
    "email": "principal@jnmc.edu",
    "website": "https://www.jnmc.edu",
    "mapQuery": "Jawaharlal+Nehru+Medical+College+Belagavi",
    "description": "JNMC Belagavi is one of India's premier medical institutions, attached to the 2,400-bed KLE Dr. Prabhakar Kore Charitable Hospital.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 200,
        "annualFee": "Deemed Quota: ₹18,30,000 / Year",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (MCC Deemed Counseling)"
      }
    ],
    "admissionProcess": "All India MCC Deemed University NEET UG counseling.",
    "facilities": [
      "2,400-Bed Super Specialty Hospital",
      "Clinical Skills Lab",
      "Air-conditioned Hostels",
      "Olympic Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Premium multi-story hostels for boys and girls with multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹12.0 LPA",
      "highestPackage": "₹30 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "KAHER Merit Fellowships",
      "KLE Society Scholarships"
    ],
    "badges": [
      "2,400 Bed Hospital",
      "NIRF Top 40 Medical",
      "Estd 1963",
      "NAAC A+"
    ]
  },
  {
    "id": "kle-pharmacy-belagavi",
    "name": "KLE College of Pharmacy (KAHER), Belagavi",
    "kannadaName": "ಕೆ.ಎಲ್.ಇ ಔಷಧ ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಬೆಳಗಾವಿ",
    "shortName": "KLE Pharmacy Belagavi",
    "tagline": "NIRF Top-Ranked Pharmacy Institute of India (Estd 1968 by KLE Society)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "pharmacy",
    "type": "Deemed University (KAHER)",
    "established": 1968,
    "affiliation": "KLE Academy of Higher Education & Research & PCI Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "JNMC Campus, Nehru Nagar, Belagavi, Karnataka 590010",
    "pincode": "590010",
    "phone": "+91 831 2471399",
    "email": "principal@klepharm.edu",
    "website": "https://www.klepharm.edu",
    "mapQuery": "KLE+College+of+Pharmacy+Belagavi",
    "description": "KLE College of Pharmacy Belagavi is NIRF ranked among India's top 25 pharmacy colleges, offering B.Pharm, Pharm.D, and M.Pharm degrees.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D (Doctor of Pharmacy)",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "₹1,20,000 - ₹2,20,000 / Year",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KAHER Test / KCET"
      }
    ],
    "admissionProcess": "KAHER All-India Merit & KEA KCET Pharmacy Counseling.",
    "facilities": [
      "Advanced Formulation Labs",
      "Animal House Facility",
      "Hostels for Boys & Girls",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "On-campus residential hostels with Wi-Fi and dining.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Sun Pharma",
        "Cipla",
        "Dr. Reddy's",
        "Novartis",
        "Biocon",
        "Pfizer"
      ]
    },
    "scholarships": [
      "KAHER Merit Fellowships",
      "SSP Scholarship"
    ],
    "badges": [
      "NIRF Top 25 Pharmacy",
      "KLE Society",
      "PCI Recognized",
      "Pharm.D Hub"
    ]
  },
  {
    "id": "maratha-mandal-pharmacy-belagavi",
    "name": "Maratha Mandal's College of Pharmacy, Belagavi",
    "kannadaName": "ಮರಾಠಾ ಮಂಡಳ ಔಷಧ ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಬೆಳಗಾವಿ",
    "shortName": "Maratha Mandal Pharmacy",
    "tagline": "Pioneering Pharmacy College in Belagavi (Estd 1984)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "pharmacy",
    "type": "Private",
    "established": 1984,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "No. 1007, Malmaruti Extension, Belagavi, Karnataka 590016",
    "pincode": "590016",
    "phone": "+91 831 2473346",
    "email": "mmcoph_bgm@yahoo.com",
    "website": "https://www.mmcop.edu.in",
    "mapQuery": "Maratha+Mandal+College+of+Pharmacy+Belagavi",
    "description": "Maratha Mandal's College of Pharmacy, established in 1984, offers B.Pharm, D.Pharm, and M.Pharm courses with strong emphasis on clinical formulations and hospital internships.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,15,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA Pharmacy)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Management Seats.",
    "facilities": [
      "Pharmacology Labs",
      "Central Library",
      "Hostels",
      "Machine Room"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Cipla",
        "Lupin",
        "Micro Labs",
        "AstraZeneca"
      ]
    },
    "scholarships": [
      "Maratha Mandal Trust Aid",
      "SSP Karnataka"
    ],
    "badges": [
      "Estd 1984",
      "PCI Approved",
      "RGUHS Affiliated",
      "KEA Code: P048"
    ]
  },
  {
    "id": "bvvs-pharmacy-bagalkot",
    "name": "B.V.V.S. Hanagal Shri Kumareshwar College of Pharmacy, Bagalkot",
    "kannadaName": "ಬಿ.ವಿ.ವಿ ಸಂಘದ ಹಾನಗಲ್ ಶ್ರೀ ಕುಮಾರೇಶ್ವರ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಬಾಗಲಕೋಟೆ",
    "shortName": "BVVS Pharmacy Bagalkot",
    "tagline": "Historic Pharmacy Institution of North Karnataka (Estd 1992 by B.V.V. Sangha)",
    "division": "belagavi",
    "district": "Bagalkot",
    "taluk": "Bagalkot",
    "stream": "pharmacy",
    "type": "Private (B.V.V. Sangha)",
    "established": 1992,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI Recognized",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "BVVS Campus, Bagalkot, Karnataka 587101",
    "pincode": "587101",
    "phone": "+91 8354 220008, +91 8354 225340",
    "email": "hskbpharm@yahoo.co.in",
    "website": "https://www.hskcpharmacy.org",
    "mapQuery": "Hanagal+Shri+Kumareshwar+College+of+Pharmacy+Bagalkot",
    "description": "BVVS HSK College of Pharmacy in Bagalkot provides B.Pharm, Pharm.D, and M.Pharm degrees with extensive clinical training at 1,000-bed HSK Hospital.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy) & Pharm.D",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA Pharmacy)"
      }
    ],
    "admissionProcess": "KEA KCET Online Counseling & BVVS Trust Merit.",
    "facilities": [
      "BVVS Campus",
      "Clinical Pharmacy Unit in HSK Hospital",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels with vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Cipla",
        "Dr. Reddy's",
        "Biocon",
        "Aurobindo",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "BVVS Trust Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "Bagalkot Landmark",
      "Estd 1992",
      "HSK Hospital Tie-up",
      "PCI Approved"
    ]
  },
  {
    "id": "sdm-pharmacy-dharwad",
    "name": "SDM College of Pharmacy & Research Centre, Sattur, Dharwad",
    "kannadaName": "ಎಸ್.ಡಿ.ಎಂ ಔಷಧ ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ ಹಾಗೂ ಸಂಶೋಧನಾ ಕೇಂದ್ರ, ಸತ್ತೂರು, ಧಾರವಾಡ",
    "shortName": "SDM Pharmacy Dharwad",
    "tagline": "Premier Pharmacy & Clinical Research Centre under SDM University (Estd 2006)",
    "division": "belagavi",
    "district": "Dharwad",
    "taluk": "Dharwad",
    "stream": "pharmacy",
    "type": "Private (SDM University)",
    "established": 2006,
    "affiliation": "SDM University Dharwad & Pharmacy Council of India (PCI)",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "SDM University Campus, Sattur, Dharwad, Karnataka 580009",
    "pincode": "580009",
    "phone": "+91 836 2461622",
    "email": "principal@sdmcop.edu.in",
    "website": "https://www.sdmuniversity.edu.in/pharmacy",
    "mapQuery": "SDM+College+of+Pharmacy+Sattur+Dharwad",
    "description": "SDM College of Pharmacy Dharwad is tied to the 1,200-bed SDM Medical Hospital, offering cutting-edge B.Pharm, Pharm.D, and M.Pharm degrees.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D (Doctor of Pharmacy)",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹50,000 | Univ: ₹1,50,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET / SDM Entrance"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and SDM University Merit.",
    "facilities": [
      "1,200-Bed Hospital Tie-up",
      "Analytical Research Labs",
      "Hostels with Veg Mess",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Modern residential hostels with pure vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Novartis",
        "Pfizer",
        "Sun Pharma",
        "Biocon",
        "Cipla"
      ]
    },
    "scholarships": [
      "SDM Merit Fellowships",
      "SSP State Scholarship"
    ],
    "badges": [
      "SDM University",
      "NAAC A+",
      "Hospital Attached",
      "PCI Approved"
    ]
  },
  {
    "id": "bldea-pharmacy-vijayapura",
    "name": "BLDEA's Shri Sanganabasava Mahaswamiji College of Pharmacy, Vijayapura",
    "kannadaName": "ಬಿ.ಎಲ್.ಡಿ.ಇ ಸಂಸ್ಥೆಯ ಶ್ರೀ ಸಂಗನಬಸವ ಮಹಾಸ್ವಾಮೀಜಿ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ವಿಜಯಪುರ",
    "shortName": "BLDEA Pharmacy Vijayapura",
    "tagline": "Historic Pharmacy Institution in Vijayapura (Estd 1982 by BLDE Association)",
    "division": "belagavi",
    "district": "Vijayapura",
    "taluk": "Vijayapura",
    "stream": "pharmacy",
    "type": "Private (BLDE Association)",
    "established": 1982,
    "affiliation": "BLDE (Deemed to be University) / RGUHS & PCI Recognized",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "BLDE Campus, Ashram Road, Vijayapura, Karnataka 586103",
    "pincode": "586103",
    "phone": "+91 8352 260505",
    "email": "bldeassmcop@gmail.com",
    "website": "https://www.bldeassmcop.ac.in",
    "mapQuery": "BLDEA+SSM+College+of+Pharmacy+Vijayapura",
    "description": "BLDEA's SSM College of Pharmacy Vijayapura, established in 1982, provides premier education in B.Pharm, Pharm.D, and pharmaceutical analysis.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET / KEA"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and BLDE Trust merit.",
    "facilities": [
      "Instrumental Lab",
      "Animal House",
      "Hostels for Boys & Girls",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with dining and security.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹13 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Cipla",
        "Dr. Reddy's",
        "Alembic",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "BLDE Association Aid",
      "SSP Scholarship"
    ],
    "badges": [
      "Estd 1982",
      "BLDE Association",
      "PCI Approved",
      "KEA Code: P011"
    ]
  },
  {
    "id": "kle-pharmacy-hubballi",
    "name": "KLE Society's College of Pharmacy, Vidyanagar, Hubballi",
    "kannadaName": "ಕೆ.ಎಲ್.ಇ ಸಂಸ್ಥೆಯ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ವಿದ್ಯಾನಗರ, ಹುಬ್ಬಳ್ಳಿ",
    "shortName": "KLE Pharmacy Hubballi",
    "tagline": "Renowned Pharmacy College in Hubballi (Estd 1985 by KLE Society)",
    "division": "belagavi",
    "district": "Dharwad",
    "taluk": "Hubballi",
    "stream": "pharmacy",
    "type": "Private",
    "established": 1985,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "KLE Tech Campus, Vidyanagar, Hubballi, Karnataka 580031",
    "pincode": "580031",
    "phone": "+91 836 2373174",
    "email": "klecoph@gmail.com",
    "website": "https://www.klescophubballi.org",
    "mapQuery": "KLE+College+of+Pharmacy+Vidyanagar+Hubballi",
    "description": "KLE Society's College of Pharmacy Hubballi provides quality pharmaceutical education with state-of-the-art analytical chemistry and formulation labs.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,20,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & KLE Society Merit.",
    "facilities": [
      "KLE Tech Campus",
      "Advanced Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with Wi-Fi and mess.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Sun Pharma",
        "Biocon",
        "Cipla",
        "Torrent"
      ]
    },
    "scholarships": [
      "KLE Merit Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "KLE Society",
      "Estd 1985",
      "PCI Approved",
      "KEA Code: P016"
    ]
  },
  {
    "id": "bvvs-polytechnic-bagalkot",
    "name": "B.V.V. Sangha's Polytechnic (Autonomous), Bagalkot",
    "kannadaName": "ಬಿ.ವಿ.ವಿ ಸಂಘದ ಪಾಲಿಟೆಕ್ನಿಕ್ ಕಾಲೇಜು (ಸ್ವಾಯತ್ತ), ಬಾಗಲಕೋಟೆ",
    "shortName": "BVVS Polytechnic Bagalkot",
    "tagline": "Historic Autonomous Technical Diploma Landmark of North Karnataka (Estd 1958)",
    "division": "belagavi",
    "district": "Bagalkot",
    "taluk": "Bagalkot",
    "stream": "polytechnic",
    "type": "Private Aided / Autonomous",
    "established": 1958,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Vidyagiri, Bagalkot, Karnataka 587102",
    "pincode": "587102",
    "phone": "+91 8354 220854, +91 8354 220855",
    "email": "bvvs_polytech@yahoo.com",
    "website": "https://www.bvvspolytech.ac.in",
    "mapQuery": "BVVS+Polytechnic+Vidyagiri+Bagalkot",
    "description": "BVVS Polytechnic Bagalkot, established in 1958, is an autonomous polytechnic offering 3-year diplomas in Computer Science, Mechanical, Civil, E&C, Electrical, and Automobile.",
    "courses": [
      {
        "name": "Diploma in Computer Science & Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 60,
        "annualFee": "₹8,500 / Year (Aided Subsidized)",
        "eligibility": "SSLC / 10th Standard Pass min 35%",
        "entranceExam": "DTE Karnataka Centralized Merit"
      },
      {
        "name": "Diploma in Mechanical & Civil Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹8,500 / Year",
        "eligibility": "10th Standard Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "Online application through DTE Karnataka Single Window Admission Portal (dtek.karnataka.gov.in).",
    "facilities": [
      "Vidyagiri Campus",
      "Advanced CNC & CAD Workshops",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "On-campus hostels with North Karnataka vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8.5 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Tata Motors",
        "Toyota Kirloskar",
        "L&T",
        "Bosch",
        "TVS Motors",
        "Infosys BPM"
      ]
    },
    "scholarships": [
      "Full Fee Exemption for SC/ST",
      "SSP Post-Matric Scholarship"
    ],
    "badges": [
      "Autonomous Diploma",
      "Estd 1958",
      "Low Fees ₹8.5k",
      "DTE Code: 104"
    ]
  },
  {
    "id": "govt-polytechnic-belagavi",
    "name": "Government Polytechnic (GPT), Belagavi",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಬೆಳಗಾವಿ",
    "shortName": "GPT Belagavi",
    "tagline": "Premier Government Technical Diploma Institution in Belagavi (Estd 1980)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1980,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Camp, Khanapur Road, Near Fish Market, Belagavi, Karnataka 590001",
    "pincode": "590001",
    "phone": "+91 831 2420456",
    "email": "gptbelgaum@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptbelagavi",
    "mapQuery": "Government+Polytechnic+Khanapur+Road+Belagavi",
    "description": "Government Polytechnic Belagavi is a premier public diploma institute offering subsidized 3-year engineering diplomas with state-of-the-art labs and high placement rates.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year (Govt Subsidized Rate)",
        "eligibility": "SSLC / 10th Standard Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "Centralized merit admission via DTE Karnataka portal (dtek.karnataka.gov.in).",
    "facilities": [
      "Belagavi Camp Campus",
      "Machining & Electronics Labs",
      "Government Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government BCM and Social Welfare hostels available.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Tata Motors",
        "Mahindra",
        "Wipro Infrastructure",
        "Quest Global"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Karnataka Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Belagavi Camp",
      "DTE Single Window"
    ]
  },
  {
    "id": "gpt-hubballi",
    "name": "Government Polytechnic (GPT), Hubballi",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಹುಬ್ಬಳ್ಳಿ",
    "shortName": "GPT Hubballi",
    "tagline": "Major Government Polytechnic on BVB Road in Hubballi (Estd 1962)",
    "division": "belagavi",
    "district": "Dharwad",
    "taluk": "Hubballi",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1962,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "B.V.B. College Road, Vidyanagar, Hubballi, Karnataka 580031",
    "pincode": "580031",
    "phone": "+91 836 2372480",
    "email": "gpthubli@yahoo.co.in",
    "website": "https://dtek.karnataka.gov.in/gpthubballi",
    "mapQuery": "Government+Polytechnic+Vidyanagar+Hubballi",
    "description": "Government Polytechnic Hubballi, established in 1962, is one of the oldest and largest government polytechnics in North Karnataka offering 3-year diplomas with high campus recruitment.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & Electrical",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 300,
        "annualFee": "₹4,500 / Year (Govt Rate)",
        "eligibility": "SSLC / 10th Pass min 35%",
        "entranceExam": "DTE Single Window Merit"
      }
    ],
    "admissionProcess": "DTE Karnataka Centralized Merit Counseling.",
    "facilities": [
      "Vidyanagar Campus",
      "Workshops",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel facilities.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Tata Motors",
        "Toyota",
        "L&T",
        "Bosch"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Karnataka"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1962",
      "Low Fees ₹4.5k",
      "Hubballi"
    ]
  },
  {
    "id": "gpt-vijayapura",
    "name": "Government Polytechnic (GPT), Vijayapura",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ವಿಜಯಪುರ",
    "shortName": "GPT Vijayapura",
    "tagline": "Key Government Technical Diploma Institution in Historic Vijayapura (Estd 1965)",
    "division": "belagavi",
    "district": "Vijayapura",
    "taluk": "Vijayapura",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1965,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Solapur Road, Vijayapura, Karnataka 586103",
    "pincode": "586103",
    "phone": "+91 8352 261168",
    "email": "gptbijapur@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptvijayapura",
    "mapQuery": "Government+Polytechnic+Solapur+Road+Vijayapura",
    "description": "Government Polytechnic Vijayapura provides industry-aligned 3-year diploma programs in engineering with fully equipped workshops and laboratories.",
    "courses": [
      {
        "name": "Diploma in Civil, Mechanical, E&C & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "DTE Karnataka Centralized Single Window.",
    "facilities": [
      "Workshops",
      "Computer Labs",
      "Hostel",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel accommodation available.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Tata Motors",
        "Mahindra",
        "Wipro",
        "L&T"
      ]
    },
    "scholarships": [
      "Fee Exemption for SC/ST/OBC",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Vijayapura",
      "DTE Code: 110"
    ]
  },
  {
    "id": "gpt-haveri",
    "name": "Government Polytechnic (GPT), Haveri",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಹಾವೇರಿ",
    "shortName": "GPT Haveri",
    "tagline": "Government Diploma Institution in Haveri District",
    "division": "belagavi",
    "district": "Haveri",
    "taluk": "Haveri",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1986,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Near Court Complex, PB Road, Haveri, Karnataka 581110",
    "pincode": "581110",
    "phone": "+91 8375 232468",
    "email": "gpthaveri@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gpthaveri",
    "mapQuery": "Government+Polytechnic+PB+Road+Haveri",
    "description": "Government Polytechnic Haveri delivers practical engineering diploma training with dedicated lab facilities and high placement support.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Centralized Admissions.",
    "facilities": [
      "Workshops",
      "Computer Centre",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.4 LPA",
      "highestPackage": "₹6.5 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "Tata Motors",
        "TVS",
        "L&T"
      ]
    },
    "scholarships": [
      "SC/ST Full Fee Waiver",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Haveri"
    ]
  },
  {
    "id": "gpt-gadag",
    "name": "Government Polytechnic (GPT), Gadag",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಗದಗ",
    "shortName": "GPT Gadag",
    "tagline": "Public Technical Diploma Institution in Gadag (Estd 1983)",
    "division": "belagavi",
    "district": "Gadag",
    "taluk": "Gadag",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1983,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Near Old Bus Stand, Gadag-Betageri, Karnataka 582101",
    "pincode": "582101",
    "phone": "+91 8372 238128",
    "email": "gptgadag@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptgadag",
    "mapQuery": "Government+Polytechnic+Gadag",
    "description": "Government Polytechnic Gadag offers affordable and skill-centric diploma programs across engineering branches for 10th standard graduates.",
    "courses": [
      {
        "name": "Diploma in Mechanical, Civil & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Online Merit Allotment.",
    "facilities": [
      "Labs",
      "Mechanical Workshops",
      "Library",
      "Hostel"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Govt BCM hostel facility.",
    "placementStats": {
      "averagePackage": "₹3.4 LPA",
      "highestPackage": "₹6.8 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "Tata Motors",
        "Mahindra",
        "Wipro Infrastructure"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Portal"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Gadag"
    ]
  },
  {
    "id": "gpt-karwar",
    "name": "Government Polytechnic (GPT), Karwar, Uttara Kannada",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಕಾರವಾರ, ಉತ್ತರ ಕನ್ನಡ",
    "shortName": "GPT Karwar",
    "tagline": "Premier Government Technical Diploma Institution in Coastal Karwar (Estd 1958)",
    "division": "belagavi",
    "district": "Uttara Kannada",
    "taluk": "Karwar",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1958,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "MG Road, Kodibag, Karwar, Uttara Kannada, Karnataka 581303",
    "pincode": "581303",
    "phone": "+91 8382 225244",
    "email": "gptkarwar@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptkarwar",
    "mapQuery": "Government+Polytechnic+Kodibag+Karwar",
    "description": "Government Polytechnic Karwar, founded in 1958, is one of coastal Karnataka's historic technical institutions offering specialized diplomas in Commercial Practice, Mechanical, Civil, and Computer Science.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & Civil",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 200,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Counseling.",
    "facilities": [
      "Coastal Campus",
      "Workshops",
      "Computer Labs",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel facilities available.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.2 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "L&T",
        "Tata Motors",
        "Infosys BPM",
        "Adani Power"
      ]
    },
    "scholarships": [
      "SSP State Scholarship",
      "Fee Waiver for SC/ST"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1958",
      "Coastal Karwar",
      "Low Fees ₹4.5k"
    ]
  },
  {
    "id": "gomatesh-polytechnic-belagavi",
    "name": "Gomatesh Polytechnic, Hindwadi, Belagavi",
    "kannadaName": "ಗೊಮಟೇಶ ಪಾಲಿಟೆಕ್ನಿಕ್, ಹಿಂಡವಾಡಿ, ಬೆಳಗಾವಿ",
    "shortName": "Gomatesh Polytechnic",
    "tagline": "Acclaimed Private Technical Diploma Institute in Belagavi (Estd 1984)",
    "division": "belagavi",
    "district": "Belagavi",
    "taluk": "Belagavi",
    "stream": "polytechnic",
    "type": "Private Aided",
    "established": 1984,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Hindwadi, Belagavi, Karnataka 590011",
    "pincode": "590011",
    "phone": "+91 831 2465355",
    "email": "gomateshpolytechnic@gmail.com",
    "website": "https://www.gomateshpolytechnic.com",
    "mapQuery": "Gomatesh+Polytechnic+Hindwadi+Belagavi",
    "description": "Gomatesh Polytechnic Belagavi offers career-oriented engineering diploma courses with excellent workshop facilities and training programs.",
    "courses": [
      {
        "name": "Diploma in Mechanical, Electrical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹10,500 / Year",
        "eligibility": "10th Standard Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Single Window & Trust Merit Admissions.",
    "facilities": [
      "Hindwadi Campus",
      "Workshops",
      "Library",
      "Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "Tata Motors",
        "Mahindra",
        "Bosch",
        "Kirloskar"
      ]
    },
    "scholarships": [
      "Trust Merit Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Estd 1984",
      "Belagavi Hindwadi",
      "DTE Approved"
    ]
  },
  {
    "id": "cuk-kalaburagi",
    "name": "Central University of Karnataka (CUK), Kadaganchi, Kalaburagi",
    "kannadaName": "ಕರ್ನಾಟಕ ಕೇಂದ್ರೀಯ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಸಿಯುಕೆ), ಕಡಗಂಚಿ, ಕಲಬುರಗಿ",
    "shortName": "CUK Kalaburagi",
    "tagline": "Premier Central University of Karnataka (Estd 2009 by Parliament of India)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Aland",
    "stream": "degree",
    "type": "Central University (Govt of India)",
    "established": 2009,
    "affiliation": "UGC Recognized Central University & NAAC A",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Kadaganchi, Aland Road, Kalaburagi District, Karnataka 585367",
    "pincode": "585367",
    "phone": "+91 8777 263202, +91 8777 263200",
    "email": "registrar@cuk.ac.in",
    "website": "https://www.cuk.ac.in",
    "mapQuery": "Central+University+of+Karnataka+Kadaganchi+Kalaburagi",
    "description": "Central University of Karnataka (CUK) is a prestigious 654-acre Central University campus in Kadaganchi, offering integrated UG, PG, B.Tech, and Doctoral programs with world-class faculty and laboratories.",
    "courses": [
      {
        "name": "Integrated B.Sc - M.Sc in Physics, Chemistry, Mathematics & Life Sciences",
        "level": "UG/PG Integrated",
        "duration": "5 Years",
        "seats": 160,
        "annualFee": "₹18,000 / Year (Central Govt Subsidized)",
        "eligibility": "10+2 with Science min 50%",
        "entranceExam": "CUET UG (NTA All-India)"
      },
      {
        "name": "B.Tech in Computer Science & Electrical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 80,
        "annualFee": "₹45,000 / Year",
        "eligibility": "10+2 PCM min 50% + CUET/JEE Main",
        "entranceExam": "CUET UG / JEE Main (CSAB)"
      },
      {
        "name": "BBA / B.Com & Integrated MBA Programs",
        "level": "UG/PG",
        "duration": "3 - 5 Years",
        "seats": 120,
        "annualFee": "₹16,000 / Year",
        "eligibility": "10+2 Any Stream min 50%",
        "entranceExam": "CUET UG"
      }
    ],
    "admissionProcess": "100% Centralized All-India Admissions through NTA CUET UG & CUET PG online counseling (samarth portal).",
    "facilities": [
      "654-Acre Sprawling Green Smart Campus",
      "Central Instrumentation Facility (CIF)",
      "Modern Residential Hostels for Boys & Girls",
      "High-Speed NKN Wi-Fi"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate multi-story university hostels for boys and girls with North & South Indian mess.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Federal Bank",
        "Azim Premji Foundation",
        "Cognizant"
      ]
    },
    "scholarships": [
      "Central Sector Scholarships",
      "UGC Post-Graduate Fellowships",
      "SSP Karnataka"
    ],
    "badges": [
      "Central Govt University",
      "654 Acre Campus",
      "CUET Admissions",
      "Kadaganchi"
    ]
  },
  {
    "id": "pda-kalaburagi",
    "name": "Poojya Doddappa Appa College of Engineering (PDA Autonomous), Kalaburagi",
    "kannadaName": "ಪೂಜ್ಯ ದೊಡ್ಡಪ್ಪ ಅಪ್ಪ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಪಿಡಿಎ ಸ್ವಾಯತ್ತ), ಕಲಬುರಗಿ",
    "shortName": "PDA Kalaburagi",
    "tagline": "North Karnataka's 1st & Historic Autonomous Engineering Landmark (Estd 1958 by HKE Society)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1958,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Aiwan-E-Shahi Area, Kalaburagi, Karnataka 585102",
    "pincode": "585102",
    "phone": "+91 8472 220646, +91 8472 220647",
    "email": "principal@pdaengg.com",
    "website": "https://www.pdaengg.com",
    "mapQuery": "PDA+College+of+Engineering+Aiwan-E-Shahi+Kalaburagi",
    "description": "PDA College of Engineering, founded in 1958 by Hyderabad Karnataka Education (HKE) Society, is a TEQIP-funded autonomous temple of engineering sprawling across 70 acres in Aiwan-E-Shahi, Kalaburagi.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,80,000",
        "eligibility": "10+2 with PCM min 45% (371J Kalyana Karnataka quota applicable)",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil, Mechanical & Electrical (Govt Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "Centralized KEA KCET Online Counseling (with 371J Kalyana Karnataka 8% statewide and 70% local reservation), COMEDK UGET, and HKE Society seats.",
    "facilities": [
      "70-Acre Heritage Campus",
      "World Bank TEQIP Labs",
      "Advanced Material Testing Center",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus residential hostels with vegetarian and non-vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Robert Bosch",
        "TCS",
        "Infosys",
        "Mercedes-Benz",
        "Cognizant",
        "L&T",
        "Mindtree",
        "JSW Steel"
      ]
    },
    "scholarships": [
      "371J Special Govt Scholarships",
      "HKE Society Merit Concessions",
      "SSP Karnataka"
    ],
    "badges": [
      "Historic Estd 1958",
      "Autonomous VTU",
      "HKE Society",
      "TEQIP Funded",
      "KEA Code: E013"
    ]
  },
  {
    "id": "kbn-kalaburagi",
    "name": "Khaja Bandanawaz University Faculty of Engineering (KBNCE), Kalaburagi",
    "kannadaName": "ಖ್ವಾಜಾ ಬಂದಾನವಾಜ್ ವಿಶ್ವವಿದ್ಯಾಲಯ ತಾಂತ್ರಿಕ ನಿಕಾಯ (ಕೆಬಿಎನ್‌ಸಿಇ), ಕಲಬುರಗಿ",
    "shortName": "KBNCE Kalaburagi",
    "tagline": "Historic Minority Technical University Campus in Kalaburagi (Estd 1980 by KBN Society)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "engineering",
    "type": "Private University (KBNU)",
    "established": 1980,
    "affiliation": "Khaja Bandanawaz University (KBNU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Rauza-i Buzurg, Kalaburagi, Karnataka 585104",
    "pincode": "585104",
    "phone": "+91 8472 221208",
    "email": "dean.engineering@kbnu.edu.in",
    "website": "https://www.kbnu.edu.in",
    "mapQuery": "Khaja+Bandanawaz+College+of+Engineering+Kalaburagi",
    "description": "KBN College of Engineering, established in 1980 and now part of KBN University, offers high-quality engineering and M.Tech programs with sprawling laboratory infrastructure in Rauza Kalaburagi.",
    "courses": [
      {
        "name": "B.Tech in Computer Science, AI-DS & Aeronautical",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹1,65,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / KBNU Entrance"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & KBNU Merit Seats.",
    "facilities": [
      "University Campus",
      "Aeronautical Simulator Lab",
      "Hostels for Boys & Girls",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Minority Welfare Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Estd 1980",
      "KBN University",
      "NAAC A",
      "KEA Code: E014"
    ]
  },
  {
    "id": "appa-institute-kalaburagi",
    "name": "Appa Institute of Engineering & Technology (AIET), Sharan Nagar, Kalaburagi",
    "kannadaName": "ಅಪ್ಪ ತಾಂತ್ರಿಕ ಹಾಗೂ ಇಂಜಿನಿಯರಿಂಗ್ ಸಂಸ್ಥೆ (ಎಐಇಟಿ), ಶರಣ ನಗರ, ಕಲಬುರಗಿ",
    "shortName": "Appa Institute (AIET)",
    "tagline": "Premier High-Tech Campus under Sharnbasva University (Estd 2002 by Poojya Dr. Sharnbaswappa Appa)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "engineering",
    "type": "Private (Sharnbasva University)",
    "established": 2002,
    "affiliation": "Sharnbasva University Kalaburagi & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Brahmpur, Sharan Nagar, Kalaburagi, Karnataka 585103",
    "pincode": "585103",
    "phone": "+91 8472 277852",
    "email": "principal@aiet.edu.in",
    "website": "https://sharnbasvauniversity.edu.in",
    "mapQuery": "Appa+Institute+of+Engineering+and+Technology+Kalaburagi",
    "description": "Appa Institute of Engineering & Technology, part of Sharnbasva University, offers advanced B.Tech and M.Tech degrees with modern computing labs and digital classrooms.",
    "courses": [
      {
        "name": "B.Tech in Computer Science & AI/ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹1,70,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / University Entrance"
      }
    ],
    "admissionProcess": "KEA KCET Counseling and Sharnbasva University seats.",
    "facilities": [
      "Brahmpur Campus",
      "High Performance Labs",
      "Hostels with Veg Dining",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North Karnataka vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Wipro",
        "Capgemini",
        "Hexaware"
      ]
    },
    "scholarships": [
      "Sharnbasveshwar Vidya Vardhak Sangha Aid",
      "SSP Karnataka"
    ],
    "badges": [
      "Sharnbasva University",
      "Kalaburagi Central",
      "KEA Code: E114"
    ]
  },
  {
    "id": "godutai-women-kalaburagi",
    "name": "Godutai Doddappa Appa Institute of Technology for Women, Kalaburagi",
    "kannadaName": "ಗೋದೂತಾಯಿ ದೊಡ್ಡಪ್ಪ ಅಪ್ಪ ಮಹಿಳಾ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ಕಲಬುರಗಿ",
    "shortName": "Godutai Women's Engineering",
    "tagline": "Exclusive Women's Engineering College in Kalyana Karnataka (Estd 2011 by HKE Society)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "engineering",
    "type": "Private (Women Only)",
    "established": 2011,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.4,
    "address": "HKE Society Campus, Aiwan-E-Shahi, Kalaburagi, Karnataka 585102",
    "pincode": "585102",
    "phone": "+91 8472 220649",
    "email": "principal@gdaengg.com",
    "website": "https://www.gdaengg.com",
    "mapQuery": "Godutai+Engineering+College+Aiwan-E-Shahi+Kalaburagi",
    "description": "Godutai Women's Engineering College, run by HKE Society, empowers female engineers across Kalyana Karnataka with high-tech education, safe residential facilities, and career support.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI-DS",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "Women candidates only with 10+2 PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & HKE Society seats.",
    "facilities": [
      "Secure Campus",
      "Computer Labs",
      "Hostels for Women",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Round-the-clock secure hostel for female students.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant"
      ]
    },
    "scholarships": [
      "HKE Society Scholarships",
      "Pratibha Puraskara"
    ],
    "badges": [
      "Women Only",
      "HKE Society",
      "VTU Affiliated",
      "KEA Code: E199"
    ]
  },
  {
    "id": "gndec-bidar",
    "name": "Guru Nanak Dev Engineering College (GNDEC), Bidar",
    "kannadaName": "ಗುರು ನಾನಕ್ ದೇವ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಜಿಎನ್‌ಡಿಇಸಿ), ಬೀದರ್",
    "shortName": "GNDEC Bidar",
    "tagline": "Premier Engineering Landmark of Bidar District (Estd 1980 by Guru Nanak Group)",
    "division": "kalaburgi",
    "district": "Bidar",
    "taluk": "Bidar",
    "stream": "engineering",
    "type": "Private (Minority)",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Mailoor Road, Bidar, Karnataka 585403",
    "pincode": "585403",
    "phone": "+91 8482 226949, +91 8482 235214",
    "email": "principalgndec@yahoo.com",
    "website": "https://www.gndec.ac.in",
    "mapQuery": "Guru+Nanak+Dev+Engineering+College+Mailoor+Bidar",
    "description": "GNDEC Bidar is a landmark 28-acre campus in historic Bidar, offering high-standard engineering programs, active placement cell, robotics laboratories, and incubation center.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,80,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / Civil / Mechanical",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (with 371J quota), COMEDK UGET, and Guru Nanak Trust Merit.",
    "facilities": [
      "28-Acre Mailoor Campus",
      "Advanced Computing & AI Centre",
      "Hostels with North Indian & South Indian Mess",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate multi-story hostels for boys and girls with clean vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Tech Mahindra",
        "SLK Software",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Guru Nanak Trust Aid",
      "SSP Post-Matric Karnataka"
    ],
    "badges": [
      "Estd 1980 Heritage",
      "NAAC A",
      "Bidar Landmark",
      "KEA Code: E023"
    ]
  },
  {
    "id": "bkit-bhalki",
    "name": "Bheemanna Khandre Institute of Technology (BKIT Autonomous), Bhalki, Bidar",
    "kannadaName": "ಭೀಮಣ್ಣ ಖಂಡ್ರೆ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಬಿಕೆಐಟಿ ಸ್ವಾಯತ್ತ), ಭಾಲ್ಕಿ, ಬೀದರ್",
    "shortName": "BKIT Bhalki",
    "tagline": "Premier Autonomous Technical Landmark in Bhalki (Estd 1982 by Shanti Vardhak Trust)",
    "division": "kalaburgi",
    "district": "Bidar",
    "taluk": "Bhalki",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1982,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Basavakalyan Road, Bhalki, Bidar District, Karnataka 585328",
    "pincode": "585328",
    "phone": "+91 8484 262288, +91 8484 262128",
    "email": "principal@recbhalki.org",
    "website": "https://bkitbhalki.org",
    "mapQuery": "BKIT+Bheemanna+Khandre+Institute+of+Technology+Bhalki",
    "description": "BKIT Bhalki (formerly REC Bhalki), founded in 1982 by veteran freedom fighter Dr. Bheemanna Khandre, is an autonomous technical campus on 35 acres with top-tier labs and placements.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,75,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Electronics / Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Allotment, COMEDK UGET, and Shanti Vardhak Sangha Merit Seats.",
    "facilities": [
      "35-Acre Bhalki Campus",
      "High Performance Computing Labs",
      "Hostels with North Karnataka Food",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North Karnataka vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Hexaware",
        "SLK Software"
      ]
    },
    "scholarships": [
      "SVE Trust Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Autonomous VTU",
      "Estd 1982",
      "35 Acre Campus",
      "KEA Code: E024"
    ]
  },
  {
    "id": "rymec-ballari",
    "name": "Rao Bahadur Y. Mahabaleshwarappa Engineering College (RYMEC), Ballari",
    "kannadaName": "ರಾವ್ ಬಹದ್ದೂರ್ ವೈ. ಮಹಾಬಲೇಶ್ವರಪ್ಪ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಆರ್‌ವೈಎಂಇಸಿ), ಬಳ್ಳಾರಿ",
    "shortName": "RYMEC Ballari",
    "tagline": "Historic Engineering Landmark of Mining City Ballari (Estd 1980 by V.V. Sangha)",
    "division": "kalaburgi",
    "district": "Ballari",
    "taluk": "Ballari",
    "stream": "engineering",
    "type": "Private (V.V. Sangha)",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Cantonment, Ballari, Karnataka 583104",
    "pincode": "583104",
    "phone": "+91 8392 244809, +91 8392 244585",
    "email": "principalrymec@gmail.com",
    "website": "https://www.rymec.in",
    "mapQuery": "RYMEC+Engineering+College+Cantonment+Ballari",
    "description": "RYMEC Ballari, established in 1980 by the venerable Veerasaiva Vidyavardhaka (V.V.) Sangha, is a 55-acre premier engineering institution with NBA-accredited courses and active JSW Steel collaboration.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,80,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Machine Learning / Metallurgy / Mechanical",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling (371J quota enabled), COMEDK, and V.V. Sangha Management Seats.",
    "facilities": [
      "55-Acre Cantonment Campus",
      "Metallurgy & Advanced Robotics Labs",
      "Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Spacious hostels with North Karnataka vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.6 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "JSW Steel",
        "TCS",
        "Infosys",
        "Mindtree",
        "L&T",
        "KPIT"
      ]
    },
    "scholarships": [
      "V.V. Sangha Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "V.V. Sangha Landmark",
      "Estd 1980",
      "55 Acre Campus",
      "KEA Code: E020"
    ]
  },
  {
    "id": "bitm-ballari",
    "name": "Ballari Institute of Technology and Management (BITM Autonomous), Ballari",
    "kannadaName": "ಬಳ್ಳಾರಿ ತಾಂತ್ರಿಕ ಹಾಗೂ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ (ಬಿಐಟಿಎಂ ಸ್ವಾಯತ್ತ), ಬಳ್ಳಾರಿ",
    "shortName": "BITM Ballari",
    "tagline": "Autonomous High-Tech Engineering Landmark in Ballari (Estd 1997 by TMGSS)",
    "division": "kalaburgi",
    "district": "Ballari",
    "taluk": "Ballari",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Jnana Gangotri Campus, Hospet Road, Allipur, Ballari, Karnataka 583104",
    "pincode": "583104",
    "phone": "+91 8392 237150, +91 8392 237151",
    "email": "principal@bitm.edu.in",
    "website": "https://www.bitm.edu.in",
    "mapQuery": "BITM+Hospet+Road+Allipur+Ballari",
    "description": "BITM Ballari is an autonomous NAAC A+ accredited institution on a 15-acre campus on Hospet Road, featuring specialized IBM, Texas Instruments, and Wipro learning centers.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Data Science / E&C / Mechanical",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & COMEDK UGET Allotment.",
    "facilities": [
      "Jnana Gangotri Campus",
      "Texas Instruments IoT Centre",
      "Hostels with Modern Dining",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with Wi-Fi and cafeteria.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Mindtree",
        "JSW Steel"
      ]
    },
    "scholarships": [
      "TMGSS Trust Aid",
      "SSP State Scholarship"
    ],
    "badges": [
      "Autonomous VTU",
      "NAAC A+",
      "Jnana Gangotri",
      "KEA Code: E066"
    ]
  },
  {
    "id": "gec-raichur",
    "name": "Government Engineering College (GEC), Yeramarus, Raichur",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಯರಮರಸ್, ರಾಯಚೂರು",
    "shortName": "GEC Raichur",
    "tagline": "Premier Public Technical Institution in Raichur (Estd 2007 by Govt of Karnataka)",
    "division": "kalaburgi",
    "district": "Raichur",
    "taluk": "Raichur",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Yeramarus Camp, Raichur, Karnataka 584134",
    "pincode": "584134",
    "phone": "+91 8532 235559",
    "email": "principal.gecr@gmail.com",
    "website": "https://gecraichur.ac.in",
    "mapQuery": "Government+Engineering+College+Yeramarus+Raichur",
    "description": "GEC Raichur is a prominent public engineering college offering subsidized engineering degrees with state-of-the-art labs near Yeramarus Thermal Power Station.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 PCM min 45% (371J applicable)",
        "entranceExam": "KCET (KEA)"
      },
      {
        "name": "B.E. in Civil, Mechanical & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹42,000 / Year",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Allotment with 371J reservation.",
    "facilities": [
      "Spacious Yeramarus Campus",
      "Computer Labs",
      "Govt Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "KPCL",
        "Wipro"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "371J Benefit",
      "KEA Code: E167"
    ]
  },
  {
    "id": "pdit-hosapete",
    "name": "Proudhadevaraya Institute of Technology (PDIT), Hosapete, Vijayanagara",
    "kannadaName": "ಪ್ರೌಢದೇವರಾಯ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಪಿಡಿಐಟಿ), ಹೊಸಪೇಟೆ, ವಿಜಯನಗರ",
    "shortName": "PDIT Hosapete",
    "tagline": "Premier Engineering Institution in World Heritage Hampi Region (Estd 1997 by V.V. Sangha)",
    "division": "kalaburgi",
    "district": "Vijayanagara",
    "taluk": "Hosapete",
    "stream": "engineering",
    "type": "Private (V.V. Sangha)",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "TB Dam Road, Hosapete, Vijayanagara District, Karnataka 583225",
    "pincode": "583225",
    "phone": "+91 8394 258051",
    "email": "principal@pdit.ac.in",
    "website": "https://www.pdit.ac.in",
    "mapQuery": "Proudhadevaraya+Institute+of+Technology+Hosapete",
    "description": "PDIT Hosapete, managed by V.V. Sangha Ballari, is situated near the iconic TB Dam on a 20-acre lush campus, offering quality technical degrees and JSW Steel internships.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Mechanical / Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & V.V. Sangha Management Seats.",
    "facilities": [
      "20-Acre TB Dam Campus",
      "IoT Labs",
      "Hostels with Clean Dining",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "JSW Steel",
        "TCS",
        "Infosys",
        "Wipro",
        "Tech Mahindra"
      ]
    },
    "scholarships": [
      "V.V. Sangha Scholarships",
      "SSP Karnataka"
    ],
    "badges": [
      "V.V. Sangha Unit",
      "Hosapete TB Dam",
      "NAAC A",
      "KEA Code: E067"
    ]
  },
  {
    "id": "gec-koppal",
    "name": "Government Engineering College (GEC), Koppal",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಕೊಪ್ಪಳ",
    "shortName": "GEC Koppal",
    "tagline": "Premier Government Technical Institution in Koppal District (Estd 2019)",
    "division": "kalaburgi",
    "district": "Koppal",
    "taluk": "Koppal",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2019,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Koppal Bypass, Koppal, Karnataka 583231",
    "pincode": "583231",
    "phone": "+91 8539 220011",
    "email": "principalgeckoppal@gmail.com",
    "website": "https://dtek.karnataka.gov.in/geckoppal",
    "mapQuery": "Government+Engineering+College+Koppal",
    "description": "GEC Koppal offers affordable government-subsidized engineering degrees with new campus laboratories and faculty under DTE Karnataka.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Civil Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year (Govt Fee)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Counseling.",
    "facilities": [
      "Campus Labs",
      "Computer Centre",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels.",
    "placementStats": {
      "averagePackage": "₹4.2 LPA",
      "highestPackage": "₹10 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "371J Benefit",
      "KEA Code: E247"
    ]
  },
  {
    "id": "gec-yadgir",
    "name": "Government Engineering College (GEC), Gurmitkal / Yadgir",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಗುರುಮಿಟ್ಕಲ್ / ಯಾದಗಿರಿ",
    "shortName": "GEC Yadgir",
    "tagline": "Public Technical Institution in Yadgir District (Estd 2019)",
    "division": "kalaburgi",
    "district": "Yadgir",
    "taluk": "Gurmitkal",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2019,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Gurmitkal Road, Yadgir District, Karnataka 585214",
    "pincode": "585214",
    "phone": "+91 8473 250100",
    "email": "gecyadgir@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gecyadgir",
    "mapQuery": "Government+Engineering+College+Yadgir",
    "description": "GEC Yadgir delivers high-quality engineering degrees at government subsidized rates for students of the Kalyana Karnataka region.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Mechanical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Counseling.",
    "facilities": [
      "Labs",
      "Workshops",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel accommodations.",
    "placementStats": {
      "averagePackage": "₹4.0 LPA",
      "highestPackage": "₹9 LPA",
      "placedPercentage": "78%",
      "topRecruiters": [
        "TCS",
        "Infosys"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "Yadgir 371J",
      "KEA Code: E248"
    ]
  },
  {
    "id": "mrmc-kalaburagi",
    "name": "Mahadevappa Rampure Medical College (MRMC), Kalaburagi",
    "kannadaName": "ಮಹಾದೇವಪ್ಪ ರಾಂಪುರೆ ವೈದ್ಯಕೀಯ ಮಹಾವಿದ್ಯಾಲಯ (ಎಂಆರ್‌ಎಂಸಿ), ಕಲಬುರಗಿ",
    "shortName": "MRMC Kalaburagi",
    "tagline": "Historic Medical Landmark of Kalyana Karnataka (Estd 1963 by HKE Society)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "medical",
    "type": "Private (HKE Society)",
    "established": 1963,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC Recognized",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Sedam Road, Mahadevappa Rampure Marg, Kalaburagi, Karnataka 585105",
    "pincode": "585105",
    "phone": "+91 8472 220307, +91 8472 221085",
    "email": "mrmc_gug@sify.com",
    "website": "https://www.mrmcklb.com",
    "mapQuery": "Mahadevappa+Rampure+Medical+College+Kalaburagi",
    "description": "MRMC Kalaburagi is an iconic 60-year-old medical college attached to the 850-bed Basaveshwar Teaching Hospital and 750-bed Sangameshwar Hospital.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 150,
        "annualFee": "Govt Quota: ₹1,41,196 | Private: ₹10,92,852",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA Counseling)"
      }
    ],
    "admissionProcess": "Centralized NEET UG online counseling conducted by KEA (85%) & MCC (15%).",
    "facilities": [
      "1,600 Combined Hospital Beds",
      "Modern Clinical Labs",
      "Hostels for Men & Women",
      "Central Medical Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for MBBS & PG doctors.",
    "placementStats": {
      "averagePackage": "₹10.5 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "HKE Society Medical Aid",
      "SSP Post-Matric"
    ],
    "badges": [
      "Historic Estd 1963",
      "NMC Recognized",
      "Basaveshwar Hospital",
      "KEA Code: M030"
    ]
  },
  {
    "id": "esic-kalaburagi",
    "name": "ESIC Medical College & PGIMSR, Kalaburagi",
    "kannadaName": "ಇಎಸ್‌ಐಸಿ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹಾಗೂ ಆಸ್ಪತ್ರೆ, ಕಲಬುರಗಿ",
    "shortName": "ESIC Kalaburagi",
    "tagline": "Ultra-Modern Central Government Medical Mega Complex in Kalaburagi (Estd 2013)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "medical",
    "type": "Central Government (ESIC, Ministry of Labour)",
    "established": 2013,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Sedam Road, Kalaburagi, Karnataka 585106",
    "pincode": "585106",
    "phone": "+91 8472 265546",
    "email": "dean-gulbarga@esic.nic.in",
    "website": "https://www.esic.gov.in",
    "mapQuery": "ESIC+Medical+College+Sedam+Road+Kalaburagi",
    "description": "ESIC Medical College Kalaburagi is a state-of-the-art ₹1,000 crore Central Govt healthcare complex with a 500-bed multi-specialty hospital.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 150,
        "annualFee": "IP Quota: ₹24,000 | State Quota: ₹1,00,000 / Year",
        "eligibility": "10+2 PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA / MCC)"
      }
    ],
    "admissionProcess": "KEA & MCC counseling with dedicated ESIC Insured Person (IP) ward quota.",
    "facilities": [
      "₹1,000 Crore Mega Campus",
      "500-Bed Super Specialty Hospital",
      "Air-Conditioned Hostels",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Premium residential hostels on campus.",
    "placementStats": {
      "averagePackage": "₹11.0 LPA",
      "highestPackage": "₹25 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "ESIC Stipends",
      "SSP State Scholarship"
    ],
    "badges": [
      "Central Govt ESIC",
      "₹1000 Cr Campus",
      "Low Fees",
      "KEA Code: M067"
    ]
  },
  {
    "id": "vims-ballari",
    "name": "Vijayanagar Institute of Medical Sciences (VIMS), Cantonment, Ballari",
    "kannadaName": "ವಿಜಯನಗರ ವೈದ್ಯಕೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ವಿಮ್ಸ್), ಕಂಟೋನ್ಮೆಂಟ್, ಬಳ್ಳಾರಿ",
    "shortName": "VIMS Ballari",
    "tagline": "Historic Government Autonomous Medical Landmark (Estd 1961)",
    "division": "kalaburgi",
    "district": "Ballari",
    "taluk": "Ballari",
    "stream": "medical",
    "type": "Government Autonomous Medical College",
    "established": 1961,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Cantonment, Ballari, Karnataka 583104",
    "pincode": "583104",
    "phone": "+91 8392 235201",
    "email": "principalvimsbellary@gmail.com",
    "website": "https://www.vims.karnataka.gov.in",
    "mapQuery": "VIMS+Vijayanagar+Institute+of+Medical+Sciences+Ballari",
    "description": "VIMS Ballari is a 173-acre government medical institution with 1,080 hospital beds, serving as the tertiary healthcare lifeline of Kalyana Karnataka.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 200,
        "annualFee": "₹65,000 / Year (Govt Subsidized)",
        "eligibility": "10+2 PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA / MCC)"
      }
    ],
    "admissionProcess": "Centralized NEET UG counseling by KEA (85%) & MCC (15%).",
    "facilities": [
      "173-Acre Campus",
      "1,080-Bed Hospital",
      "Hostels for Boys & Girls",
      "Digital Medical Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹11.0 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt Medical",
      "Estd 1961",
      "1,080 Beds",
      "KEA Code: M003"
    ]
  },
  {
    "id": "rims-raichur",
    "name": "Raichur Institute of Medical Sciences (RIMS), Raichur",
    "kannadaName": "ರಾಯಚೂರು ವೈದ್ಯಕೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ರಿಮ್ಸ್), ರಾಯಚೂರು",
    "shortName": "RIMS Raichur",
    "tagline": "Premier Government Autonomous Medical College in Raichur (Estd 2007)",
    "division": "kalaburgi",
    "district": "Raichur",
    "taluk": "Raichur",
    "stream": "medical",
    "type": "Government Autonomous",
    "established": 2007,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Hyderabad Road, Raichur, Karnataka 584102",
    "pincode": "584102",
    "phone": "+91 8532 238488",
    "email": "info@rims-raichur.com",
    "website": "https://rims-raichur.karnataka.gov.in",
    "mapQuery": "RIMS+Raichur+Institute+of+Medical+Sciences",
    "description": "RIMS Raichur is a premier public autonomous medical college attached to a 750-bed teaching hospital on Hyderabad Road.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 150,
        "annualFee": "₹65,000 / Year (Govt Subsidized)",
        "eligibility": "10+2 PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET / NEET UG Counseling with 371J quota.",
    "facilities": [
      "750-Bed Teaching Hospital",
      "Hostels",
      "Central Library",
      "Simulation Labs"
    ],
    "hostelAvailable": true,
    "hostelDetails": "On-campus hostels for resident doctors.",
    "placementStats": {
      "averagePackage": "₹10.5 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt Medical",
      "371J Benefit",
      "750 Beds",
      "KEA Code: M007"
    ]
  },
  {
    "id": "brims-bidar",
    "name": "Bidar Institute of Medical Sciences (BRIMS), Bidar",
    "kannadaName": "ಬೀದರ್ ವೈದ್ಯಕೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ಬ್ರಿಮ್ಸ್), ಬೀದರ್",
    "shortName": "BRIMS Bidar",
    "tagline": "Autonomous Government Medical College in Historic Bidar (Estd 2007)",
    "division": "kalaburgi",
    "district": "Bidar",
    "taluk": "Bidar",
    "stream": "medical",
    "type": "Government Autonomous",
    "established": 2007,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Udgir Road, Bidar, Karnataka 585401",
    "pincode": "585401",
    "phone": "+91 8482 228366",
    "email": "director@brims-bidar.in",
    "website": "https://brims.karnataka.gov.in",
    "mapQuery": "BRIMS+Bidar+Institute+of+Medical+Sciences",
    "description": "BRIMS Bidar is an autonomous government medical college attached to the 750-bed District Hospital on Udgir Road Bidar.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 150,
        "annualFee": "₹65,000 / Year (Govt Subsidized)",
        "eligibility": "10+2 PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (KEA)"
      }
    ],
    "admissionProcess": "KEA & MCC Centralized NEET UG counseling.",
    "facilities": [
      "750-Bed Hospital",
      "Modern Skill Labs",
      "Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹10.5 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "SC/ST Full Tuition Reimbursement",
      "SSP Scholarship"
    ],
    "badges": [
      "100% Govt Medical",
      "371J Benefit",
      "Bidar Udgir Rd",
      "KEA Code: M008"
    ]
  },
  {
    "id": "hke-pharmacy-kalaburagi",
    "name": "H.K.E. Society's Matoshree Taradevi Rampure Institute of Pharmaceutical Sciences, Kalaburagi",
    "kannadaName": "ಎಚ್.ಕೆ.ಇ ಸಂಸ್ಥೆಯ ಮಾತೋಶ್ರೀ ತಾರಾದೇವಿ ರಾಂಪುರೆ ಔಷಧ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ, ಕಲಬುರಗಿ",
    "shortName": "HKE Pharmacy Kalaburagi",
    "tagline": "Historic Pharmacy Landmark of Kalyana Karnataka (Estd 1973 by HKE Society)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "pharmacy",
    "type": "Private (HKE Society)",
    "established": 1973,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Sedam Road, Mahadevappa Rampure Marg, Kalaburagi, Karnataka 585105",
    "pincode": "585105",
    "phone": "+91 8472 221392",
    "email": "hkescops@yahoo.co.in",
    "website": "https://hkes.edu.in/pharmacy",
    "mapQuery": "HKE+Society+College+of+Pharmacy+Sedam+Road+Kalaburagi",
    "description": "HKE Society's College of Pharmacy Kalaburagi is the oldest pharmacy institute in Kalyana Karnataka, offering B.Pharm, Pharm.D, and M.Pharm with Basaveshwar Hospital clinical internships.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy) & Pharm.D",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 PCM/PCB min 50%",
        "entranceExam": "KCET (KEA Pharmacy)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & HKE Society Merit Seats.",
    "facilities": [
      "Sedam Road Campus",
      "Hospital Attached Clinical Unit",
      "Hostels",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with mess.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Sun Pharma",
        "Cipla",
        "Dr. Reddy's",
        "Biocon",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "HKE Trust Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "Historic Estd 1973",
      "HKE Society",
      "PCI Approved",
      "KEA Code: P012"
    ]
  },
  {
    "id": "luqman-pharmacy-kalaburagi",
    "name": "Luqman College of Pharmacy, Kalaburagi",
    "kannadaName": "ಲುಕ್ಮಾನ್ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಕಲಬುರಗಿ",
    "shortName": "Luqman Pharmacy Kalaburagi",
    "tagline": "Premier Minority Pharmacy Institution in Kalaburagi (Estd 1982)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "pharmacy",
    "type": "Private (Minority)",
    "established": 1982,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Behind PB Complex, Jewargi Road, Kalaburagi, Karnataka 585102",
    "pincode": "585102",
    "phone": "+91 8472 245100",
    "email": "luqmancop@gmail.com",
    "website": "https://www.luqmanpharmacy.com",
    "mapQuery": "Luqman+College+of+Pharmacy+Jewargi+Road+Kalaburagi",
    "description": "Luqman College of Pharmacy, established in 1982, offers B.Pharm, D.Pharm, and M.Pharm degrees with modern analytical equipment and hospital postings.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Trust Merit.",
    "facilities": [
      "Jewargi Road Campus",
      "Pharmacology Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel accommodation with mess.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Cipla",
        "Lupin",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "Minority Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Estd 1982",
      "PCI Approved",
      "RGUHS Affiliated",
      "KEA Code: P019"
    ]
  },
  {
    "id": "vl-pharmacy-raichur",
    "name": "V.L. College of Pharmacy (T.V.V. Sangha), Raichur",
    "kannadaName": "ವಿ.ಎಲ್. ಔಷಧ ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ (ಟಿ.ವಿ.ವಿ ಸಂಘ), ರಾಯಚೂರು",
    "shortName": "VL Pharmacy Raichur",
    "tagline": "Historic Pharmacy Landmark in Raichur (Estd 1980 by T.V.V. Sangha)",
    "division": "kalaburgi",
    "district": "Raichur",
    "taluk": "Raichur",
    "stream": "pharmacy",
    "type": "Private Aided",
    "established": 1980,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Manikprabhu Temple Road, Raichur, Karnataka 584103",
    "pincode": "584103",
    "phone": "+91 8532 240405",
    "email": "vlcopr@yahoo.com",
    "website": "https://www.vlcop.in",
    "mapQuery": "VL+College+of+Pharmacy+Raichur",
    "description": "V.L. College of Pharmacy Raichur is a pioneer pharmaceutical institute in the Krishna-Tungabhadra doab, offering B.Pharm, Pharm.D, and research specializations.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy) & Pharm.D",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Allotment & TVV Sangha Seats.",
    "facilities": [
      "Historic Campus",
      "Pharmaceutics Labs",
      "Hostels",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "Cipla",
        "Dr. Reddy's",
        "Aurobindo",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "TVV Sangha Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "Estd 1980",
      "TVV Sangha",
      "NAAC A",
      "KEA Code: P038"
    ]
  },
  {
    "id": "tvm-pharmacy-ballari",
    "name": "Togari Veeramallappa Memorial (TVM) College of Pharmacy, Ballari",
    "kannadaName": "ತೋಗರಿ ವೀರಮಲ್ಲಪ್ಪ ಸ್ಮಾರಕ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಬಳ್ಳಾರಿ",
    "shortName": "TVM Pharmacy Ballari",
    "tagline": "Historic Pharmacy Institution under V.V. Sangha (Estd 1985)",
    "division": "kalaburgi",
    "district": "Ballari",
    "taluk": "Ballari",
    "stream": "pharmacy",
    "type": "Private (V.V. Sangha)",
    "established": 1985,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Gandhi Nagar, Ballari, Karnataka 583103",
    "pincode": "583103",
    "phone": "+91 8392 257544",
    "email": "tvmcop@gmail.com",
    "website": "https://www.tvmcop.in",
    "mapQuery": "TVM+College+of+Pharmacy+Gandhi+Nagar+Ballari",
    "description": "TVM College of Pharmacy Ballari offers B.Pharm, D.Pharm, and M.Pharm degrees with extensive practical exposure in pharmaceutics and hospital training.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & V.V. Sangha Seats.",
    "facilities": [
      "Gandhi Nagar Campus",
      "Formulation Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian meals.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹13 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Cipla",
        "Sun Pharma",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "V.V. Sangha Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "V.V. Sangha",
      "Estd 1985",
      "PCI Approved",
      "KEA Code: P036"
    ]
  },
  {
    "id": "gpt-kalaburagi",
    "name": "Government Polytechnic (GPT), Aiwan-E-Shahi, Kalaburagi",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಐವಾನ್-ಎ-ಶಾಹಿ, ಕಲಬುರಗಿ",
    "shortName": "GPT Kalaburagi",
    "tagline": "Premier Government Technical Diploma Institution in Kalyana Karnataka (Estd 1955)",
    "division": "kalaburgi",
    "district": "Kalaburagi",
    "taluk": "Kalaburagi",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1955,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Aiwan-E-Shahi Area, Near Old Bus Stand, Kalaburagi, Karnataka 585102",
    "pincode": "585102",
    "phone": "+91 8472 220677",
    "email": "gptgulbarga@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptkalaburagi",
    "mapQuery": "Government+Polytechnic+Aiwan-E-Shahi+Kalaburagi",
    "description": "Government Polytechnic Kalaburagi, founded in 1955, is the flagship public polytechnic of Hyderabad-Karnataka region, offering 3-year subsidized technical diplomas with active campus drives.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year (Govt Subsidized Rate)",
        "eligibility": "SSLC / 10th Standard Pass min 35%",
        "entranceExam": "DTE Karnataka Single Window Merit"
      }
    ],
    "admissionProcess": "Centralized merit admissions through DTE Karnataka portal (dtek.karnataka.gov.in).",
    "facilities": [
      "Aiwan-E-Shahi Campus",
      "Heavy CNC & Electronic Labs",
      "Govt Hostels for Boys & Girls",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels with dining.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.8 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Tata Motors",
        "L&T",
        "JSW Steel",
        "Wipro Infrastructure"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Karnataka e-PASS"
    ],
    "badges": [
      "Historic Estd 1955",
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "DTE Code: 105"
    ]
  },
  {
    "id": "gpt-ballari",
    "name": "Government Polytechnic (GPT), Ballari",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಬಳ್ಳಾರಿ",
    "shortName": "GPT Ballari",
    "tagline": "Key Public Technical Diploma Institution in Ballari (Estd 1957)",
    "division": "kalaburgi",
    "district": "Ballari",
    "taluk": "Ballari",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1957,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Anantapur Road, Cantonment, Ballari, Karnataka 583101",
    "pincode": "583101",
    "phone": "+91 8392 272445",
    "email": "gptbellary@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptballari",
    "mapQuery": "Government+Polytechnic+Anantapur+Road+Ballari",
    "description": "Government Polytechnic Ballari, established in 1957, provides hands-on 3-year engineering diplomas with heavy industry tie-ups across the steel and manufacturing belt.",
    "courses": [
      {
        "name": "Diploma in Metallurgy, Mechanical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC / 10th Pass min 35%",
        "entranceExam": "DTE Single Window Merit"
      }
    ],
    "admissionProcess": "DTE Karnataka Centralized Merit Counseling.",
    "facilities": [
      "Cantonment Campus",
      "Metallurgy & Foundry Labs",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8.2 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "JSW Steel",
        "Tata Motors",
        "L&T",
        "Kirloskar"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "Estd 1957",
      "Metallurgy Hub",
      "Low Fees ₹4.5k",
      "DTE Code: 106"
    ]
  },
  {
    "id": "gpt-bidar",
    "name": "Government Polytechnic (GPT), Naubad, Bidar",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ನೌಬಾದ್, ಬೀದರ್",
    "shortName": "GPT Bidar",
    "tagline": "Premier Government Diploma Institution in Bidar District (Estd 1960)",
    "division": "kalaburgi",
    "district": "Bidar",
    "taluk": "Bidar",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1960,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Naubad, Bidar, Karnataka 585402",
    "pincode": "585402",
    "phone": "+91 8482 232244",
    "email": "gptbidar@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptbidar",
    "mapQuery": "Government+Polytechnic+Naubad+Bidar",
    "description": "Government Polytechnic Bidar offers practical 3-year engineering diplomas with well-equipped workshops and placement programs.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & Civil",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Allotment.",
    "facilities": [
      "Naubad Campus",
      "Workshops",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Tata Motors",
        "Mahindra",
        "Wipro Infrastructure"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1960",
      "Low Fees ₹4.5k",
      "Bidar"
    ]
  },
  {
    "id": "gpt-raichur",
    "name": "Government Polytechnic (GPT), Raichur",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ರಾಯಚೂರು",
    "shortName": "GPT Raichur",
    "tagline": "Key Public Technical Diploma Institution in Raichur (Estd 1986)",
    "division": "kalaburgi",
    "district": "Raichur",
    "taluk": "Raichur",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1986,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Near Askihal, Raichur, Karnataka 584102",
    "pincode": "584102",
    "phone": "+91 8532 234120",
    "email": "gptraichur@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptraichur",
    "mapQuery": "Government+Polytechnic+Raichur",
    "description": "Government Polytechnic Raichur provides skill-driven diploma programs across engineering branches with industry workshop training.",
    "courses": [
      {
        "name": "Diploma in Civil, Mechanical, E&C & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Single Window Merit Allotment.",
    "facilities": [
      "Workshops",
      "Computer Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "84%",
      "topRecruiters": [
        "Tata Motors",
        "KPCL",
        "L&T"
      ]
    },
    "scholarships": [
      "SC/ST Full Tuition Waiver",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Raichur"
    ]
  },
  {
    "id": "gpt-koppal",
    "name": "Government Polytechnic (GPT), Koppal",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಕೊಪ್ಪಳ",
    "shortName": "GPT Koppal",
    "tagline": "Government Diploma Institution in Koppal (Estd 1986)",
    "division": "kalaburgi",
    "district": "Koppal",
    "taluk": "Koppal",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1986,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Kinnal Road, Koppal, Karnataka 583231",
    "pincode": "583231",
    "phone": "+91 8539 220268",
    "email": "gptkoppal@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptkoppal",
    "mapQuery": "Government+Polytechnic+Kinnal+Road+Koppal",
    "description": "Government Polytechnic Koppal offers affordable 3-year engineering diplomas with workshop practicals.",
    "courses": [
      {
        "name": "Diploma in Mechanical, Electrical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Allotment.",
    "facilities": [
      "Workshops",
      "Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel accommodations.",
    "placementStats": {
      "averagePackage": "₹3.4 LPA",
      "highestPackage": "₹6.5 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "Tata Motors",
        "TVS",
        "L&T"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Portal"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Koppal"
    ]
  },
  {
    "id": "gpt-yadgir",
    "name": "Government Polytechnic (GPT), Yadgir",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಯಾದಗಿರಿ",
    "shortName": "GPT Yadgir",
    "tagline": "Public Technical Diploma Institution in Yadgir District (Estd 2008)",
    "division": "kalaburgi",
    "district": "Yadgir",
    "taluk": "Yadgir",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 2008,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Chittapur Road, Yadgir, Karnataka 585202",
    "pincode": "585202",
    "phone": "+91 8473 250268",
    "email": "gptyadgir@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptyadgir",
    "mapQuery": "Government+Polytechnic+Chittapur+Road+Yadgir",
    "description": "Government Polytechnic Yadgir offers subsidized technical diplomas for students of Kalyana Karnataka.",
    "courses": [
      {
        "name": "Diploma in Civil, Mechanical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Merit Allotment.",
    "facilities": [
      "Workshops",
      "Labs",
      "Hostel",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.4 LPA",
      "highestPackage": "₹6.5 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "Tata Motors",
        "L&T"
      ]
    },
    "scholarships": [
      "SC/ST Full Tuition Waiver",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Yadgir"
    ]
  },
  {
    "id": "sjce-mysuru",
    "name": "Sri Jayachamarajendra College of Engineering (SJCE / JSS STU), Mysuru",
    "kannadaName": "ಶ್ರೀ ಜಯಚಾಮರಾಜೇಂದ್ರ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಸ್.ಜೆ.ಸಿ.ಇ / ಜೆ.ಎಸ್.ಎಸ್ ಎಸ್.ಟಿ.ಯು), ಮೈಸೂರು",
    "shortName": "SJCE Mysuru",
    "tagline": "Top Tier Heritage Technological University Campus in Mysuru (Estd 1963 by JSS Mahavidyapeetha)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "engineering",
    "type": "Private State University (JSS STU)",
    "established": 1963,
    "affiliation": "JSS Science & Technology University & AICTE",
    "naacGrade": "A+",
    "rating": 4.9,
    "address": "JSS Technical Institutions Campus, Manasagangothri, Mysuru, Karnataka 570006",
    "pincode": "570006",
    "phone": "+91 821 2548285, +91 821 2548286",
    "email": "principal@sjce.ac.in",
    "website": "https://jssstuniv.in",
    "mapQuery": "SJCE+JSS+Technical+Institutions+Campus+Mysuru",
    "description": "SJCE Mysuru, established in 1963 by Sri Shivarathri Rajendra Mahaswamiji, is recognized as one of India's benchmark engineering and research colleges. Spanning a 102-acre lush campus in Manasagangothri Mysuru, SJCE is a World Bank TEQIP-funded centre.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹2,75,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in Information Science / AI & Machine Learning",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | Univ Quota: ₹2,75,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Electronics & Communication / Electrical (Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "Centralized counseling by KEA (KCET 45%), COMEDK UGET (30%), and JSS University Merit (25%).",
    "facilities": [
      "102-Acre Manasagangothri Campus",
      "STEP Technology Business Incubator",
      "World Bank TEQIP High-Performance Computing Center",
      "Hostels for 2,500+ Students"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus residential hostels for boys and girls with multi-cuisine dining.",
    "placementStats": {
      "averagePackage": "₹9.2 LPA",
      "highestPackage": "₹44 LPA",
      "placedPercentage": "96%",
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Cisco",
        "Qualcomm",
        "Texas Instruments",
        "Mercedes-Benz",
        "Schneider Electric",
        "Intuit"
      ]
    },
    "scholarships": [
      "JSS Mahavidyapeetha Merit Aid",
      "SSP Karnataka e-PASS Scholarship"
    ],
    "badges": [
      "Top 5 Karnataka",
      "102 Acre Campus",
      "JSS STU",
      "TEQIP Funded",
      "KEA Code: E021"
    ]
  },
  {
    "id": "nie-mysuru",
    "name": "The National Institute of Engineering (NIE Autonomous), Mysuru",
    "kannadaName": "ದಿ ನ್ಯಾಷನಲ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಇಂಜಿನಿಯರಿಂಗ್ (ಎನ್‌ಐಇ ಸ್ವಾಯತ್ತ), ಮೈಸೂರು",
    "shortName": "NIE Mysuru",
    "tagline": "India's 2nd Oldest Engineering College in Karnataka (Estd 1946 by Sir M.V. Visionaries)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1946,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "South Campus: Manandavadi Road / North Campus: Hootagalli Industrial Area, Mysuru 570008",
    "pincode": "570008",
    "phone": "+91 821 2480475, +91 821 4004900",
    "email": "principal@nie.ac.in",
    "website": "https://www.nie.ac.in",
    "mapQuery": "National+Institute+of+Engineering+Manandavadi+Road+Mysuru",
    "description": "The National Institute of Engineering (NIE Mysuru), founded in 1946, is a revered temple of technical education having alumni like Narayana Murthy (Infosys Co-Founder). Spanning both historic South Campus and high-tech 25-acre North Campus.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,60,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in Information Science / AI & Machine Learning",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,60,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Civil, Mechanical & Electrical Engineering (Govt Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "Admissions strictly via KEA KCET Online Counseling, COMEDK UGET, and NIE Society Merit Quota.",
    "facilities": [
      "Historic South & Modern North Campuses",
      "NIE-EICHER Center of Excellence in Automotive Tech",
      "Nano-Technology Research Center",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels in South & North campuses with Wi-Fi, gym, and mess.",
    "placementStats": {
      "averagePackage": "₹8.8 LPA",
      "highestPackage": "₹56 LPA",
      "placedPercentage": "95%",
      "topRecruiters": [
        "Cisco",
        "Amazon",
        "Twilio",
        "JP Morgan",
        "Texas Instruments",
        "Titan",
        "TCS Digital",
        "Infosys"
      ]
    },
    "scholarships": [
      "NIE Silver Jubilee Endowment Scholarships",
      "SSP Karnataka Post-Matric"
    ],
    "badges": [
      "Estd 1946 Heritage",
      "Autonomous VTU",
      "Narayana Murthy Alma Mater",
      "KEA Code: E016"
    ]
  },
  {
    "id": "vvce-mysuru",
    "name": "Vidyavardhaka College of Engineering (VVCE Autonomous), Mysuru",
    "kannadaName": "ವಿದ್ಯಾವರ್ಧಕ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ವಿವಿಸಿಇ ಸ್ವಾಯತ್ತ), ಗೋಕುಲಂ, ಮೈಸೂರು",
    "shortName": "VVCE Gokulam Mysuru",
    "tagline": "Premier Autonomous VTU Engineering Landmark in Gokulam Mysuru (Estd 1997)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "P.B. No. 206, Kannada Sahitya Parishath Road, III Stage, Gokulam, Mysuru, Karnataka 570002",
    "pincode": "570002",
    "phone": "+91 821 4276200, +91 821 4276201",
    "email": "principal@vvce.ac.in",
    "website": "https://vvce.ac.in",
    "mapQuery": "Vidyavardhaka+College+of+Engineering+Gokulam+Mysuru",
    "description": "VVCE Mysuru is a premier autonomous engineering institute in Gokulam, known for research excellence, modern maker spaces, active MoUs with top IT giants, and stellar placement records.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,35,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,35,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Allotment, COMEDK UGET, and VV Sangha Merit Admissions.",
    "facilities": [
      "Gokulam Campus",
      "Apple iOS Developer Lab",
      "Incubation & Entrepreneurship Cell",
      "Hostels with Clean Dining"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North & South Indian meals.",
    "placementStats": {
      "averagePackage": "₹6.5 LPA",
      "highestPackage": "₹33.3 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Amazon",
        "Target",
        "Mercedes-Benz",
        "Infosys",
        "Mindtree",
        "TCS",
        "Accenture"
      ]
    },
    "scholarships": [
      "VV Sangha Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "Autonomous VTU",
      "Gokulam Campus",
      "NAAC A",
      "KEA Code: E062"
    ]
  },
  {
    "id": "gsssietw-mysuru",
    "name": "GSSS Institute of Engineering & Technology for Women (Autonomous), Mysuru",
    "kannadaName": "ಜಿ.ಎಸ್.ಎಸ್.ಎಸ್ ಮಹಿಳಾ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಮೈಸೂರು",
    "shortName": "GSSSIETW Women's Engineering",
    "tagline": "Karnataka's First & Premier Exclusive Women's Engineering College (Estd 2003)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "engineering",
    "type": "Private Autonomous (Women Only)",
    "established": 2003,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "KRS Road, Metagalli, Mysuru, Karnataka 570016",
    "pincode": "570016",
    "phone": "+91 821 4257304, +91 821 4257305",
    "email": "gsssietw@gsss.edu.in",
    "website": "https://gecw.ac.in",
    "mapQuery": "GSSSIETW+KRS+Road+Metagalli+Mysuru",
    "description": "GSSSIETW Mysuru is Karnataka's premier all-women engineering college, providing empowering technological education, high-security hostels, and strong recruitment from top Fortune 500 MNCs.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "Women candidates only with 10+2 PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Electronics & Telecommunication",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & COMEDK Seats for female candidates.",
    "facilities": [
      "High-Security KRS Road Campus",
      "Advanced Women Entrepreneurship Cell",
      "On-Campus Girl Hostels",
      "Gym & Cafeteria"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Dedicated round-the-clock secure on-campus girls hostel with biometric access.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹26 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Accenture",
        "Dell",
        "Cisco",
        "HP",
        "Infosys",
        "Capgemini",
        "Wipro"
      ]
    },
    "scholarships": [
      "Pratibha Puraskara for Girl Students",
      "SSP Post-Matric"
    ],
    "badges": [
      "Autonomous VTU",
      "Women Only",
      "NAAC A",
      "KEA Code: E117"
    ]
  },
  {
    "id": "mit-mysuru",
    "name": "Maharaja Institute of Technology (MIT Mysore), Srirangapatna / Mysuru",
    "kannadaName": "ಮಹಾರಾಜ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಂಐಟಿ ಮೈಸೂರು), ಶ್ರೀರಂಗಪಟ್ಟಣ / ಮೈಸೂರು",
    "shortName": "MIT Mysore",
    "tagline": "Leading Engineering Institution under MET Trust (Estd 2007)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "engineering",
    "type": "Private",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "Belawadi, PB No. 28, Srirangapatna Taluk, Mysuru-Bangalore Road, Karnataka 571477",
    "pincode": "571477",
    "phone": "+91 8236 292601",
    "email": "principal@mitmysore.in",
    "website": "https://www.mitmysore.in",
    "mapQuery": "Maharaja+Institute+of+Technology+Belawadi+Mysuru",
    "description": "MIT Mysore offers top-notch engineering programs across Computer Science, AI, Mechanical, Civil, and Management with active placement cell and modern maker labs.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,00,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Allotment & COMEDK UGET counseling.",
    "facilities": [
      "Lush Green Campus",
      "Robotics Lab",
      "Hostels for Boys & Girls",
      "Bus Fleet across Mysuru"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with Wi-Fi and cafeteria.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Wipro",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "MET Trust Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "NAAC A",
      "KEA Code: E158"
    ]
  },
  {
    "id": "atme-mysuru",
    "name": "ATME College of Engineering, Bannur Road, Mysuru",
    "kannadaName": "ಎಟಿಎಂಇ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ಬನ್ನೂರು ರಸ್ತೆ, ಮೈಸೂರು",
    "shortName": "ATME Mysuru",
    "tagline": "Fast Growing Engineering Institute on Bannur Road Mysuru (Estd 2010)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "engineering",
    "type": "Private",
    "established": 2010,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.4,
    "address": "13th KM Stone, Bannur Road, Mysuru, Karnataka 570028",
    "pincode": "570028",
    "phone": "+91 821 2593335",
    "email": "info@atme.in",
    "website": "https://www.atme.in",
    "mapQuery": "ATME+College+of+Engineering+Bannur+Road+Mysuru",
    "description": "ATME College of Engineering provides contemporary engineering programs with modern infrastructure, green campus certifications, and strong placement drives.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Machine Learning / E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Management Quota.",
    "facilities": [
      "Green Campus",
      "IoT Labs",
      "Hostels",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel accommodation with mess.",
    "placementStats": {
      "averagePackage": "₹5.0 LPA",
      "highestPackage": "₹15 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Hexaware"
      ]
    },
    "scholarships": [
      "SSP State Scholarship",
      "Merit Concessions"
    ],
    "badges": [
      "VTU Affiliated",
      "NAAC A",
      "KEA Code: E198"
    ]
  },
  {
    "id": "mce-hassan",
    "name": "Malnad College of Engineering (MCE Autonomous), Hassan",
    "kannadaName": "ಮಲ್ನಾಡ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಂಸಿಇ ಸ್ವಾಯತ್ತ), ಹಾಸನ",
    "shortName": "MCE Hassan",
    "tagline": "Historic TEQIP-Funded Autonomous Engineering Landmark in Malnad Region (Estd 1960)",
    "division": "mysuru",
    "district": "Hassan",
    "taluk": "Hassan",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1960,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Salagame Road, PB No. 21, Hassan, Karnataka 573202",
    "pincode": "573202",
    "phone": "+91 8172 245093, +91 8172 245317",
    "email": "principal@mcehassan.ac.in",
    "website": "https://www.mcehassan.ac.in",
    "mapQuery": "Malnad+College+of+Engineering+Salagame+Road+Hassan",
    "description": "MCE Hassan, founded in 1960, is an autonomous, World Bank TEQIP-funded technical landmark sprawling across 44 acres in Hassan, known for robust research culture and top-tier placements.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Mechanical, Civil & E&E (Govt Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Online Allotment, COMEDK UGET, and MTES Society Merit Seats.",
    "facilities": [
      "44-Acre Lush Campus",
      "TEQIP Advanced Research Labs",
      "Central Library with Digital Repository",
      "Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus residential hostels with vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹6.8 LPA",
      "highestPackage": "₹36 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Mercedes-Benz",
        "Bosch",
        "TCS",
        "Infosys",
        "Cisco",
        "Accenture",
        "L&T"
      ]
    },
    "scholarships": [
      "MTES Merit Scholarships",
      "Govt Post-Matric SSP Scheme"
    ],
    "badges": [
      "Autonomous VTU",
      "Estd 1960",
      "TEQIP Funded",
      "NAAC A+",
      "KEA Code: E015"
    ]
  },
  {
    "id": "gec-hassan",
    "name": "Government Engineering College (GEC), Mosalehosahalli, Hassan",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಮೊಸಳೆಹೊಸಹಳ್ಳಿ, ಹಾಸನ",
    "shortName": "GEC Hassan",
    "tagline": "Premier Government Technical Institution in Hassan District (Estd 2007)",
    "division": "mysuru",
    "district": "Hassan",
    "taluk": "Hassan",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Mosalehosahalli, Hassan, Karnataka 573212",
    "pincode": "573212",
    "phone": "+91 8172 240400",
    "email": "principalgech@gmail.com",
    "website": "https://gechassan.ac.in",
    "mapQuery": "Government+Engineering+College+Mosalehosahalli+Hassan",
    "description": "GEC Hassan is a state government engineering college offering high-quality technical education at subsidized government fee rates.",
    "courses": [
      {
        "name": "B.E. in Computer Science, Mechanical & Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹42,000 / Year (Govt Subsidized)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Allotment.",
    "facilities": [
      "Spacious Campus",
      "Computer Centers",
      "Govt Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel facilities.",
    "placementStats": {
      "averagePackage": "₹4.5 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "83%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "L&T"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "VTU Affiliated",
      "KEA Code: E165"
    ]
  },
  {
    "id": "bahubali-shravanabelagola",
    "name": "Bahubali College of Engineering (BCE), Shravanabelagola, Hassan",
    "kannadaName": "ಬಾಹುಬಲಿ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಬಿಸಿಇ), ಶ್ರವಣಬೆಳಗೊಳ, ಹಾಸನ",
    "shortName": "Bahubali BCE Hassan",
    "tagline": "Technical Institution in Historic Heritage Town Shravanabelagola (Estd 1997)",
    "division": "mysuru",
    "district": "Hassan",
    "taluk": "Channarayapatna",
    "stream": "engineering",
    "type": "Private",
    "established": 1997,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Shravanabelagola, Hassan District, Karnataka 573135",
    "pincode": "573135",
    "phone": "+91 8176 257275",
    "email": "principal@bce.edu.in",
    "website": "https://www.bce.edu.in",
    "mapQuery": "Bahubali+College+of+Engineering+Shravanabelagola",
    "description": "BCE Shravanabelagola offers comprehensive engineering programs with dedicated lab facilities and peaceful campus surroundings near the Gommateshwara statue.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Civil Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Trust Quota.",
    "facilities": [
      "Hostels with Pure Veg Mess",
      "Computer Labs",
      "Library",
      "Sports"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Pure vegetarian hostel accommodations.",
    "placementStats": {
      "averagePackage": "₹4.2 LPA",
      "highestPackage": "₹10 LPA",
      "placedPercentage": "80%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro"
      ]
    },
    "scholarships": [
      "Jain Trust Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "VTU Affiliated",
      "Estd 1997",
      "KEA Code: E065"
    ]
  },
  {
    "id": "pesce-mandya",
    "name": "P.E.S. College of Engineering (PESCE Autonomous), Mandya",
    "kannadaName": "ಪಿ.ಇ.ಎಸ್. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಮಂಡ್ಯ",
    "shortName": "PESCE Mandya",
    "tagline": "Historic Autonomous Engineering Landmark in Mandya (Estd 1962 by PET)",
    "division": "mysuru",
    "district": "Mandya",
    "taluk": "Mandya",
    "stream": "engineering",
    "type": "Private Aided / Autonomous",
    "established": 1962,
    "affiliation": "Visvesvaraya Technological University (VTU), Belagavi & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "PES Engineering College Road, Mandya, Karnataka 571401",
    "pincode": "571401",
    "phone": "+91 8232 220043, +91 8232 220120",
    "email": "principal@pesce.ac.in",
    "website": "https://www.pesce.ac.in",
    "mapQuery": "PES+College+of+Engineering+Mandya",
    "description": "PESCE Mandya is a prestigious autonomous engineering institution established in 1962 by People's Education Trust (PET), sprawling across a 62-acre campus in Mandya.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in Mechanical, Civil & E&E (Govt Aided)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Aided Fee: ₹45,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Centralized Counseling, COMEDK UGET, and PET Management Quota.",
    "facilities": [
      "62-Acre Green Campus",
      "World Bank TEQIP Labs",
      "Central Digital Library",
      "Separate Hostels for Boys & Girls"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Spacious residential hostels with dining and sports grounds.",
    "placementStats": {
      "averagePackage": "₹6.4 LPA",
      "highestPackage": "₹28 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Mercedes-Benz",
        "Robert Bosch",
        "Wipro",
        "L&T",
        "Mindtree"
      ]
    },
    "scholarships": [
      "PET Trust Merit Aid",
      "Govt Post-Matric SSP Scholarships"
    ],
    "badges": [
      "Autonomous VTU",
      "Estd 1962",
      "62-Acre Campus",
      "NAAC A+",
      "KEA Code: E019"
    ]
  },
  {
    "id": "bgsit-mandya",
    "name": "BGS Institute of Technology (BGSIT / ACU), BG Nagara, Mandya",
    "kannadaName": "ಬಿ.ಜಿ.ಎಸ್ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ (ಬಿಜಿಎಸ್‌ಐಟಿ / ಎಸಿಯು), ಬಿಜಿ ನಗರ, ಮಂಡ್ಯ",
    "shortName": "BGSIT BG Nagara",
    "tagline": "Premier Engineering Campus under Adichunchanagiri University (Estd 2005)",
    "division": "mysuru",
    "district": "Mandya",
    "taluk": "Nagamangala",
    "stream": "engineering",
    "type": "Private (Adichunchanagiri University)",
    "established": 2005,
    "affiliation": "Adichunchanagiri University (ACU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "BG Nagara, Nagamangala Taluk, Mandya District, Karnataka 571448",
    "pincode": "571448",
    "phone": "+91 8234 288418",
    "email": "principal@bgsit.ac.in",
    "website": "https://bgsit.ac.in",
    "mapQuery": "BGS+Institute+of+Technology+BG+Nagara+Mandya",
    "description": "BGSIT BG Nagara, part of Adichunchanagiri University, provides technical education on a modern university campus with state-of-the-art laboratories and hosteling.",
    "courses": [
      {
        "name": "B.Tech in Computer Science, AI-ML & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | ACU Quota: ₹1,80,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / ACU Entrance"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & ACU University Seats.",
    "facilities": [
      "ACU Mega Campus",
      "Innovation Labs",
      "Hostels for Boys & Girls",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with vegetarian mess.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Wipro",
        "Cognizant",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Adichunchanagiri Mutt Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "ACU University",
      "BG Nagara",
      "NAAC A",
      "KEA Code: E149"
    ]
  },
  {
    "id": "gec-krpet-mandya",
    "name": "Government Engineering College (GEC), KR Pet, Mandya",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಕೆ.ಆರ್. ಪೇಟೆ, ಮಂಡ್ಯ",
    "shortName": "GEC KR Pet",
    "tagline": "Government Engineering Institution in KR Pet, Mandya District (Estd 2007)",
    "division": "mysuru",
    "district": "Mandya",
    "taluk": "KR Pet",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "KR Pet, Mandya, Karnataka 571426",
    "pincode": "571426",
    "phone": "+91 8230 262222",
    "email": "geckrpet@gmail.com",
    "website": "https://dtek.karnataka.gov.in/geckrpet",
    "mapQuery": "Government+Engineering+College+KR+Pet+Mandya",
    "description": "GEC KR Pet offers affordable government-subsidized engineering degrees with dedicated faculty and modern labs in Mandya district.",
    "courses": [
      {
        "name": "B.E. in Computer Science, Mechanical & Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Counseling.",
    "facilities": [
      "Campus Workshops",
      "Computer Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels.",
    "placementStats": {
      "averagePackage": "₹4.4 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "VTU Affiliated",
      "KEA Code: E166"
    ]
  },
  {
    "id": "nitk-surathkal",
    "name": "National Institute of Technology Karnataka (NITK), Surathkal, Mangaluru",
    "kannadaName": "ರಾಷ್ಟ್ರೀಯ ತಾಂತ್ರಿಕ ಸಂಸ್ಥೆ ಕರ್ನಾಟಕ (ಎನ್‌ಐಟಿಕೆ), ಸುರತ್ಕಲ್, ಮಂಗಳೂರು",
    "shortName": "NITK Surathkal",
    "tagline": "India's Top Tier Institute of National Importance with Private Beach (Estd 1960)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "engineering",
    "type": "Institute of National Importance (INI - Central Govt)",
    "established": 1960,
    "affiliation": "Autonomous Central Institute (Act of Parliament) & NIRF Top 12",
    "naacGrade": "A++",
    "rating": 4.95,
    "address": "NH 66, Srinivasnagar, Surathkal, Mangaluru, Karnataka 575025",
    "pincode": "575025",
    "phone": "+91 824 2474000, +91 824 2474006",
    "email": "registrar@nitk.ac.in",
    "website": "https://www.nitk.ac.in",
    "mapQuery": "NITK+Surathkal+Mangalore",
    "description": "NITK Surathkal is one of India's premier technical universities of National Importance (NIRF Ranked 12 in India). Situated on a 295-acre campus with its own private Arabian Sea beach.",
    "courses": [
      {
        "name": "B.Tech in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹1,45,000 / Year (JoSAA Central Govt Rates)",
        "eligibility": "10+2 with PCM min 75% + Top JEE Main Rank",
        "entranceExam": "JEE Main (JoSAA / CSAB Counseling)"
      },
      {
        "name": "B.Tech in AI & Data Science / IT / Electronics",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "₹1,45,000 / Year",
        "eligibility": "10+2 PCM min 75% + JEE Main",
        "entranceExam": "JEE Main"
      },
      {
        "name": "B.Tech in Mechanical, Civil, Chemical & Metallurgy",
        "level": "UG",
        "duration": "4 Years",
        "seats": 480,
        "annualFee": "₹1,45,000 / Year",
        "eligibility": "10+2 PCM min 75%",
        "entranceExam": "JEE Main"
      }
    ],
    "admissionProcess": "Centralized All India JoSAA / CSAB Counseling based on JEE Main Rank (50% Home State Karnataka Quota).",
    "facilities": [
      "295-Acre Beachside Campus",
      "Centre for System Design",
      "Central Research Facility (CRF)",
      "Multi-Story Hostels for 5,000+ Students"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Mega hostels with high-speed LAN/Wi-Fi and multiple mess blocks.",
    "placementStats": {
      "averagePackage": "₹15.8 LPA",
      "highestPackage": "₹54.5 LPA",
      "placedPercentage": "98%",
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Uber",
        "Goldman Sachs",
        "DE Shaw",
        "Amazon",
        "Oracle",
        "Nvidia"
      ]
    },
    "scholarships": [
      "Central Sector Top Class Education Scholarship",
      "Fee Waivers for low-income candidates"
    ],
    "badges": [
      "NIRF Rank #12",
      "National Importance",
      "295 Acre Campus",
      "Private Beach"
    ]
  },
  {
    "id": "sahyadri-mangaluru",
    "name": "Sahyadri College of Engineering & Management (Autonomous), Adyar, Mangaluru",
    "kannadaName": "ಸಹ್ಯಾದ್ರಿ ತಾಂತ್ರಿಕ ಹಾಗೂ ನಿರ್ವಹಣಾ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ಅಡ್ಯಾರ್, ಮಂಗಳೂರು",
    "shortName": "Sahyadri Mangaluru",
    "tagline": "Premier Autonomous Tech & Innovation Landmark on Netravati Riverbank (Estd 2007)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.8,
    "address": "Sahyadri Campus, NH-75, Adyar, Mangaluru, Karnataka 575007",
    "pincode": "575007",
    "phone": "+91 824 2277222, +91 824 2277333",
    "email": "sahyadri@sahyadri.edu.in",
    "website": "https://www.sahyadri.edu.in",
    "mapQuery": "Sahyadri+College+of+Engineering+Adyar+Mangalore",
    "description": "Sahyadri Mangaluru is an autonomous institution known for in-house tech start-ups, innovation centres, and riverside campus on the banks of River Netravati.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,40,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Data Science / Cyber Security",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,40,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling, COMEDK UGET, and Sahyadri Merit Quota.",
    "facilities": [
      "30-Acre Riverfront Campus",
      "Sahyadri Hands-on Innovation Centre",
      "Start-up Incubator",
      "Hostels with River View"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with modern amenities.",
    "placementStats": {
      "averagePackage": "₹6.8 LPA",
      "highestPackage": "₹42 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Amazon",
        "Microsoft",
        "Infosys",
        "TCS",
        "Adobe",
        "Cognizant",
        "SLK Software"
      ]
    },
    "scholarships": [
      "Bhandary Foundation Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Autonomous VTU",
      "Riverfront Campus",
      "NAAC A",
      "KEA Code: E154"
    ]
  },
  {
    "id": "sjec-mangaluru",
    "name": "St Joseph Engineering College (SJEC Autonomous), Vamanjoor, Mangaluru",
    "kannadaName": "ಸೇಂಟ್ ಜೋಸೆಫ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಸ್ವಾಯತ್ತ), ವಾಮಂಜೂರು, ಮಂಗಳೂರು",
    "shortName": "SJEC Vamanjoor",
    "tagline": "Autonomous Catholic Premier Technical Institution in Mangaluru (Estd 2002)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "engineering",
    "type": "Private Autonomous (Minority)",
    "established": 2002,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Vamanjoor, Mangaluru, Dakshina Kannada, Karnataka 575028",
    "pincode": "575028",
    "phone": "+91 824 2263753, +91 824 2263755",
    "email": "sjec@sjec.ac.in",
    "website": "https://www.sjec.ac.in",
    "mapQuery": "St+Joseph+Engineering+College+Vamanjoor+Mangalore",
    "description": "SJEC Vamanjoor is an autonomous premier Catholic institution managed by the Diocese of Mangalore, situated on a 25-acre campus with NBA-accredited branches.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,30,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK UGET"
      },
      {
        "name": "B.E. in AI & Machine Learning / E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling, COMEDK, and Diocesan Management Seats.",
    "facilities": [
      "25-Acre Vamanjoor Campus",
      "Siemens PLM Centre",
      "Modern Hostels",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Well-furnished on-campus hostels with hygienic dining.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹26 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Cognizant",
        "Mindtree",
        "Bosch",
        "L&T Technology"
      ]
    },
    "scholarships": [
      "Diocese Scholarships",
      "SSP State Scholarship"
    ],
    "badges": [
      "Autonomous VTU",
      "NAAC A+",
      "Diocese of Mangalore",
      "KEA Code: E116"
    ]
  },
  {
    "id": "canara-mangaluru",
    "name": "Canara Engineering College (CEC), Benjanapadavu, Bantwal / Mangaluru",
    "kannadaName": "ಕೆನರಾ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ, ಬೆಂಜನಪದವು, ಬಂಟ್ವಾಳ / ಮಂಗಳೂರು",
    "shortName": "Canara Engineering (CEC)",
    "tagline": "Premier Institution managed by Canara High School Association (Estd 2001)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Bantwal",
    "stream": "engineering",
    "type": "Private",
    "established": 2001,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Benjanapadavu, Bantwal Taluk, Dakshina Kannada, Karnataka 574219",
    "pincode": "574219",
    "phone": "+91 824 2278666",
    "email": "canaraengineering@gmail.com",
    "website": "https://www.canaraengineering.in",
    "mapQuery": "Canara+Engineering+College+Benjanapadavu+Mangalore",
    "description": "Canara Engineering College, run by the 130-year-old Canara High School Association (CHSA), offers value-based technical education on a lush 26-acre campus.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,00,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Machine Learning / Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & COMEDK Seats.",
    "facilities": [
      "26-Acre Green Campus",
      "Robotics Lab",
      "Hostels",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian meals.",
    "placementStats": {
      "averagePackage": "₹5.8 LPA",
      "highestPackage": "₹24 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Capgemini",
        "Cognizant",
        "Mindtree",
        "Robosoft"
      ]
    },
    "scholarships": [
      "CHSA Merit Concessions",
      "SSP Karnataka"
    ],
    "badges": [
      "CHSA Mangalore",
      "NAAC A",
      "VTU Affiliated",
      "KEA Code: E111"
    ]
  },
  {
    "id": "mite-moodabidri",
    "name": "Mangalore Institute of Technology & Engineering (MITE Autonomous), Moodabidri",
    "kannadaName": "ಮಂಗಳೂರು ತಾಂತ್ರಿಕ ಹಾಗೂ ಇಂಜಿನಿಯರಿಂಗ್ ಸಂಸ್ಥೆ (ಮೈಟ್ ಸ್ವಾಯತ್ತ), ಮೂಡುಬಿದಿರೆ",
    "shortName": "MITE Moodabidri",
    "tagline": "Autonomous Institution with Bosch & Siemens Centres of Excellence (Estd 2007)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Moodabidri",
    "stream": "engineering",
    "type": "Private Autonomous",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.7,
    "address": "Badaga Mijar, Moodabidri, Dakshina Kannada, Karnataka 574225",
    "pincode": "574225",
    "phone": "+91 8258 262695, +91 8258 262696",
    "email": "info@mite.ac.in",
    "website": "https://www.mite.ac.in",
    "mapQuery": "MITE+Badaga+Mijar+Moodabidri",
    "description": "MITE Moodabidri is an autonomous institution spanning 70 acres in scenic Moodabidri, hosting Bosch and Siemens Centres of Excellence and strong industry tie-ups.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering (NBA)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹2,10,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Data Science / Aeronautical Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Allotment & COMEDK UGET.",
    "facilities": [
      "70-Acre Eco Campus",
      "Bosch Rexroth Centre",
      "Hostels with Modern Dining",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with clean dining.",
    "placementStats": {
      "averagePackage": "₹6.0 LPA",
      "highestPackage": "₹23 LPA",
      "placedPercentage": "91%",
      "topRecruiters": [
        "Bosch",
        "Amazon",
        "Infosys",
        "TCS",
        "KPIT",
        "Mindtree"
      ]
    },
    "scholarships": [
      "Rajalaxmi Trust Aid",
      "SSP State Portal"
    ],
    "badges": [
      "Autonomous VTU",
      "70 Acre Campus",
      "NAAC A+",
      "KEA Code: E153"
    ]
  },
  {
    "id": "ajiet-mangaluru",
    "name": "A.J. Institute of Engineering & Technology (AJIET), Kottara Chowki, Mangaluru",
    "kannadaName": "ಎ.ಜೆ. ತಾಂತ್ರಿಕ ಹಾಗೂ ಇಂಜಿನಿಯರಿಂಗ್ ಸಂಸ್ಥೆ (ಎಜೆಐಇಟಿ), ಕೊಟ್ಟಾರ ಚೌಕಿ, ಮಂಗಳೂರು",
    "shortName": "AJIET Mangaluru",
    "tagline": "Premier Engineering Campus under Laxmi Memorial Education Trust (Estd 2016)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "engineering",
    "type": "Private",
    "established": 2016,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "NH-66, Kottara Chowki, Mangaluru, Karnataka 575006",
    "pincode": "575006",
    "phone": "+91 824 2457788",
    "email": "ajietmangalore@gmail.com",
    "website": "https://www.ajiet.edu.in",
    "mapQuery": "AJ+Institute+of+Engineering+Kottara+Chowki+Mangalore",
    "description": "AJIET Mangaluru, part of the acclaimed AJ Group, provides cutting-edge technical education on NH-66 with modern labs and hospital tech collaborations.",
    "courses": [
      {
        "name": "B.E. in Computer Science & AI/ML",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Trust Merit.",
    "facilities": [
      "Modern NH-66 Campus",
      "Advanced Computing Labs",
      "Hostels",
      "Auditorium"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with dining.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant"
      ]
    },
    "scholarships": [
      "LMET Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "VTU Affiliated",
      "AJ Group",
      "NAAC A",
      "KEA Code: E235"
    ]
  },
  {
    "id": "alvas-engineering-moodabidri",
    "name": "Alva's Institute of Engineering & Technology (AIET), Mijar, Moodabidri",
    "kannadaName": "ಆಳ್ವಾಸ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಐಇಟಿ), ಮಿಜಾರು, ಮೂಡುಬಿದಿರೆ",
    "shortName": "Alva's Engineering Moodabidri",
    "tagline": "Acclaimed Engineering Institution under Alva's Education Foundation (Estd 2008)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Moodabidri",
    "stream": "engineering",
    "type": "Private",
    "established": 2008,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A+",
    "rating": 4.6,
    "address": "Shobhavana Campus, Mijar, Moodabidri, Dakshina Kannada, Karnataka 574225",
    "pincode": "574225",
    "phone": "+91 8258 262724",
    "email": "principalaiet08@gmail.com",
    "website": "https://www.aiet.org.in",
    "mapQuery": "Alvas+Institute+of+Engineering+Mijar+Moodabidri",
    "description": "Alva's Engineering College is known for its sprawling Shobhavana campus, Alva's Pragati mega job fair, cultural enrichment, and excellent academic training.",
    "courses": [
      {
        "name": "B.E. in Computer Science, AI-ML & Information Science",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Alva's Foundation Merit.",
    "facilities": [
      "Shobhavana Green Campus",
      "Mega Placement Drives",
      "Hostels for Boys & Girls",
      "Sports Complex"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Multi-block hostel accommodation with nutritious meals.",
    "placementStats": {
      "averagePackage": "₹5.6 LPA",
      "highestPackage": "₹22 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "Alva's Pragati Drives",
        "Amazon",
        "Infosys",
        "TCS",
        "Cognizant"
      ]
    },
    "scholarships": [
      "Alva's Sports & Cultural Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Alva's Foundation",
      "Pragati Job Fair",
      "NAAC A+",
      "KEA Code: E167"
    ]
  },
  {
    "id": "smvitm-udupi",
    "name": "Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM), Bantakal, Udupi",
    "kannadaName": "ಶ್ರೀ ಮಧ್ವ ವಾದಿರಾಜ ತಾಂತ್ರಿಕ ಹಾಗೂ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ, ಬಂಟಕಲ್ಲು, ಉಡುಪಿ",
    "shortName": "SMVITM Bantakal Udupi",
    "tagline": "Premier Engineering Institution under Sode Vadiraja Mutt Education Trust (Estd 2010)",
    "division": "mysuru",
    "district": "Udupi",
    "taluk": "Udupi",
    "stream": "engineering",
    "type": "Private",
    "established": 2010,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Vishwothama Nagar, Bantakal, Udupi, Karnataka 574115",
    "pincode": "574115",
    "phone": "+91 820 2589182",
    "email": "principal@sode-edu.in",
    "website": "https://sode-edu.in",
    "mapQuery": "Shri+Madhwa+Vadiraja+Institute+Bantakal+Udupi",
    "description": "SMVITM Bantakal is established by Shri Sode Vadiraja Mutt of Udupi, offering high-standard engineering programs on a 70-acre green campus with value-based orientation.",
    "courses": [
      {
        "name": "B.E. in Computer Science, AI-DS & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 240,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Trust Merit.",
    "facilities": [
      "70-Acre Campus",
      "Modern Labs",
      "Pure Veg Hostels",
      "Central Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Pure vegetarian hostel accommodation.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "89%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree",
        "Robosoft"
      ]
    },
    "scholarships": [
      "Sode Mutt Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Sode Mutt",
      "Udupi Landmark",
      "NAAC A",
      "KEA Code: E192"
    ]
  },
  {
    "id": "ait-chikkamagaluru",
    "name": "Adichunchanagiri Institute of Technology (AIT), Chikkamagaluru",
    "kannadaName": "ಆದಿಚುಂಚನಗಿರಿ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ (ಎಐಟಿ), ಚಿಕ್ಕಮಗಳೂರು",
    "shortName": "AIT Chikkamagaluru",
    "tagline": "Premier Hill-Station Technical Institution in Coffee Land (Estd 1980 by Sri Balagangadharanatha Swamiji)",
    "division": "mysuru",
    "district": "Chikkamagaluru",
    "taluk": "Chikkamagaluru",
    "stream": "engineering",
    "type": "Private",
    "established": 1980,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Jyothinagara, KM Road, Chikkamagaluru, Karnataka 577102",
    "pincode": "577102",
    "phone": "+91 8262 220444, +91 8262 220063",
    "email": "principal@aitckm.in",
    "website": "https://www.aitckm.in",
    "mapQuery": "Adichunchanagiri+Institute+of+Technology+Chikkamagaluru",
    "description": "AIT Chikkamagaluru is a 65-acre hilltop campus in the Western Ghats coffee capital, offering engineering courses with modern research centers and active sports complexes.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000 | COMEDK: ₹1,85,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      },
      {
        "name": "B.E. in AI & Machine Learning / Civil / Mechanical",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "Govt Quota: ₹1,07,000",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET / COMEDK"
      }
    ],
    "admissionProcess": "KEA KCET Online Counseling & BGS Trust Management Quota.",
    "facilities": [
      "65-Acre Coffee-Lush Campus",
      "Advanced Computing & IoT Labs",
      "Hostels with Veg Dining",
      "Sports Pavilion"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with North and South Indian dining.",
    "placementStats": {
      "averagePackage": "₹5.4 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Infosys",
        "TCS",
        "Wipro",
        "Mindtree",
        "Cognizant",
        "SLK Software"
      ]
    },
    "scholarships": [
      "BGS Trust Merit Scholarship",
      "SSP State Scholarship"
    ],
    "badges": [
      "Western Ghats Landmark",
      "65-Acre Campus",
      "Estd 1980",
      "KEA Code: E026"
    ]
  },
  {
    "id": "gec-kushalnagar",
    "name": "Government Engineering College (GEC), Kushalnagar, Kodagu (Coorg)",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಕುಶಾಲನಗರ, ಕೊಡಗು",
    "shortName": "GEC Kushalnagar Kodagu",
    "tagline": "Premier Government Technical Institution in Picturesque Kodagu District (Estd 2007)",
    "division": "mysuru",
    "district": "Kodagu",
    "taluk": "Kushalnagar",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Kushalnagar, Kodagu District, Karnataka 571234",
    "pincode": "571234",
    "phone": "+91 8276 274150",
    "email": "principalgeck@gmail.com",
    "website": "https://geckushalnagar.ac.in",
    "mapQuery": "Government+Engineering+College+Kushalnagar+Kodagu",
    "description": "GEC Kushalnagar is Kodagu's premier public engineering institution, offering subsidized B.E. degrees in Computer Science, Mechanical, Civil, and Electronics amidst scenic hills.",
    "courses": [
      {
        "name": "B.E. in Computer Science & Engineering",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "₹42,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      },
      {
        "name": "B.E. in Civil, Mechanical & E&C",
        "level": "UG",
        "duration": "4 Years",
        "seats": 120,
        "annualFee": "₹42,000 / Year",
        "eligibility": "10+2 with PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% Centralized Allotment via Karnataka Examination Authority (KEA KCET).",
    "facilities": [
      "Picturesque Coorg Campus",
      "Digital Computing Labs",
      "Govt Hostels for Boys & Girls",
      "Sports Ground"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels with subsidized mess facility.",
    "placementStats": {
      "averagePackage": "₹4.4 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "82%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Mindtree"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "Kodagu Hub",
      "KEA Code: E163"
    ]
  },
  {
    "id": "gec-chamarajanagar",
    "name": "Government Engineering College (GEC), Chamarajanagar",
    "kannadaName": "ಸರ್ಕಾರಿ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು (ಜಿಇಸಿ), ಚಾಮರಾಜನಗರ",
    "shortName": "GEC Chamarajanagar",
    "tagline": "Key Public Engineering College in Chamarajanagar District (Estd 2007)",
    "division": "mysuru",
    "district": "Chamarajanagar",
    "taluk": "Chamarajanagar",
    "stream": "engineering",
    "type": "Government (DTE Karnataka)",
    "established": 2007,
    "affiliation": "Visvesvaraya Technological University (VTU) & AICTE",
    "naacGrade": "B++",
    "rating": 4.3,
    "address": "Bedaguli Road, Chamarajanagar, Karnataka 571313",
    "pincode": "571313",
    "phone": "+91 8226 222055",
    "email": "principalgecc@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gecchamarajanagar",
    "mapQuery": "Government+Engineering+College+Chamarajanagar",
    "description": "GEC Chamarajanagar offers high-quality engineering degrees at government fees with modern laboratory workshops.",
    "courses": [
      {
        "name": "B.E. in Computer Science, Mechanical & Civil",
        "level": "UG",
        "duration": "4 Years",
        "seats": 180,
        "annualFee": "₹42,000 / Year",
        "eligibility": "10+2 PCM min 45%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "100% KEA KCET Online Allotment.",
    "facilities": [
      "Workshops",
      "Computer Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹4.3 LPA",
      "highestPackage": "₹10 LPA",
      "placedPercentage": "81%",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro"
      ]
    },
    "scholarships": [
      "SC/ST Full Fee Waiver",
      "SSP Scholarship"
    ],
    "badges": [
      "100% Govt College",
      "Low Fees ₹42k",
      "VTU Affiliated",
      "KEA Code: E162"
    ]
  },
  {
    "id": "mmcri-mysuru",
    "name": "Mysore Medical College and Research Institute (MMCRI), Mysuru",
    "kannadaName": "ಮೈಸೂರು ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹಾಗೂ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (ಎಂಎಂಸಿಆರ್‌ಐ), ಮೈಸೂರು",
    "shortName": "MMCRI Mysuru",
    "tagline": "India's 7th & Karnataka's 1st Royal Government Medical College (Estd 1924 by Nalwadi Krishnaraja Wadiyar)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "medical",
    "type": "Government Autonomous Medical College",
    "established": 1924,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & NMC Recognized",
    "naacGrade": "A+",
    "rating": 4.95,
    "address": "Irwin Road, Next to Mysuru Railway Station, Mysuru, Karnataka 570001",
    "pincode": "570001",
    "phone": "+91 821 2520512, +91 821 2529884",
    "email": "omc_my@yahoo.com",
    "website": "https://www.mmcrimysore.in",
    "mapQuery": "Mysore+Medical+College+Irwin+Road+Mysuru",
    "description": "MMCRI Mysuru, celebrating its Centenary (1924-2024), is Karnataka's first medical college. Attached to 1,300+ bed K.R. Hospital, Cheluvamba Hospital, and PKTB Hospital in the heart of Mysore.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 250,
        "annualFee": "₹65,000 / Year (Govt Subsidized Rate)",
        "eligibility": "10+2 with PCB min 50% + Top NEET UG Rank",
        "entranceExam": "NEET UG (KEA / MCC)"
      },
      {
        "name": "MD / MS Post Graduate Specializations (21 Disciplines)",
        "level": "PG",
        "duration": "3 Years",
        "seats": 150,
        "annualFee": "₹1,15,000 / Year",
        "eligibility": "MBBS + NEET PG Rank",
        "entranceExam": "NEET PG (KEA / MCC)"
      }
    ],
    "admissionProcess": "Centralized NEET UG counseling by KEA (85% State Quota) and MCC (15% All India Quota).",
    "facilities": [
      "Centenary Heritage Campus",
      "1,300+ Bed K.R. Hospital & Cheluvamba Super Specialty Block",
      "Heritage Medical Library",
      "Separate Hostels"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for male and female MBBS and PG resident doctors.",
    "placementStats": {
      "averagePackage": "₹11.5 LPA",
      "highestPackage": "₹26 LPA",
      "placedPercentage": "100%",
      "topRecruiters": [
        "K.R. Hospital",
        "Govt Health Dept",
        "Manipal Hospitals",
        "Apollo Hospitals"
      ]
    },
    "scholarships": [
      "100% Fee Reimbursement for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "Centenary 1924-2024",
      "100% Govt Medical",
      "K.R. Hospital Attached",
      "250 MBBS Seats",
      "KEA Code: M002"
    ]
  },
  {
    "id": "kmc-manipal-mangalore",
    "name": "Kasturba Medical College (KMC Mangalore / MAHE), Mangaluru",
    "kannadaName": "ಕಸ್ತೂರ್ಬಾ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು (ಕೆಎಂಸಿ ಮಂಗಳೂರು / ಮಾಹೆ), ಮಂಗಳೂರು",
    "shortName": "KMC Mangalore",
    "tagline": "NIRF Top 30 Medical Institution in India (Estd 1953 by Dr. TMA Pai)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "medical",
    "type": "Deemed University (MAHE)",
    "established": 1953,
    "affiliation": "Manipal Academy of Higher Education (MAHE) & NMC Recognized",
    "naacGrade": "A++",
    "rating": 4.95,
    "address": "Light House Hill Road, Hampankatta, Mangaluru, Karnataka 575001",
    "pincode": "575001",
    "phone": "+91 824 2422271",
    "email": "kmcmlr@manipal.edu",
    "website": "https://manipal.edu/kmc-mangalore",
    "mapQuery": "KMC+Light+House+Hill+Road+Mangalore",
    "description": "KMC Mangalore is an internationally celebrated medical college under MAHE, attached to the 1,000-bed Govt Wenlock Hospital and KMC Hospital.",
    "courses": [
      {
        "name": "MBBS (Bachelor of Medicine & Surgery)",
        "level": "UG",
        "duration": "5.5 Years",
        "seats": 250,
        "annualFee": "Deemed Quota: ₹17,80,000 / Year",
        "eligibility": "10+2 with PCB min 50% + NEET UG",
        "entranceExam": "NEET UG (MCC All India Counseling)"
      }
    ],
    "admissionProcess": "Centralized All India MCC Deemed University NEET UG counseling.",
    "facilities": [
      "1,000+ Bed Teaching Hospitals",
      "World-Class Simulation Centre",
      "Lush Hostels",
      "Central Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "AC & Non-AC residential hostels with food court and gym.",
    "placementStats": {
      "averagePackage": "₹12.5 LPA",
      "highestPackage": "₹32 LPA",
      "placedPercentage": "100%"
    },
    "scholarships": [
      "MAHE Kalam-Pai Merit Scholarships",
      "Scholarships for Academy Alumni"
    ],
    "badges": [
      "NIRF Top 30 Medical",
      "MAHE Deemed A++",
      "Estd 1953",
      "Light House Hill"
    ]
  },
  {
    "id": "st-aloysius-mangaluru",
    "name": "St. Aloysius (Deemed to be University), Mangaluru",
    "kannadaName": "ಸೇಂಟ್ ಅಲೋಶಿಯಸ್ (ಡೀಮ್ಡ್ ವಿಶ್ವವಿದ್ಯಾಲಯ), ಮಂಗಳೂರು",
    "shortName": "St. Aloysius Mangaluru",
    "tagline": "144-Year-Old Jesuit Landmark Higher Education University (Estd 1880)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "degree",
    "type": "Deemed to be University",
    "established": 1880,
    "affiliation": "UGC Recognized Deemed University & Jesuit Institution",
    "naacGrade": "A++",
    "rating": 4.9,
    "address": "St. Aloysius College Road, Kodialbail, Mangaluru, Karnataka 575003",
    "pincode": "575003",
    "phone": "+91 824 2449700, +91 824 2449701",
    "email": "aloysius.principal@gmail.com",
    "website": "https://www.staloysius.edu.in",
    "mapQuery": "St+Aloysius+College+Kodialbail+Mangaluru",
    "description": "St. Aloysius, founded in 1880 by the Jesuit Fathers, is a 37-acre iconic educational powerhouse on Light House Hill, home to the famous Chapel murals and multi-disciplinary degree courses.",
    "courses": [
      {
        "name": "BCA (Data Science / AI & Cloud Computing)",
        "level": "UG",
        "duration": "3 - 4 Years (FYUP)",
        "seats": 180,
        "annualFee": "₹75,000 / Year",
        "eligibility": "10+2 Pass in any stream with Maths/CS",
        "entranceExam": "Direct Merit Admission"
      },
      {
        "name": "B.Com (Professional / ACCA / CMA Integrated)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 360,
        "annualFee": "₹65,000 / Year",
        "eligibility": "10+2 Commerce / Arts / Science min 50%",
        "entranceExam": "Merit Based"
      },
      {
        "name": "B.Sc (Biotechnology, Food Science, Animation)",
        "level": "UG",
        "duration": "3 - 4 Years",
        "seats": 240,
        "annualFee": "₹55,000 / Year",
        "eligibility": "10+2 with Science min 50%",
        "entranceExam": "Merit Based"
      }
    ],
    "admissionProcess": "Online application via University portal (staloysius.edu.in).",
    "facilities": [
      "37-Acre Historic Campus",
      "Historic Chapel & Museum",
      "Biotech Research Incubator",
      "Hostels with Coastal Cuisine"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate on-campus hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹5.5 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "EY",
        "KPMG",
        "Deloitte",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Federal Bank"
      ]
    },
    "scholarships": [
      "Jesuit Educational Trust Scholarships",
      "SSP Karnataka"
    ],
    "badges": [
      "144 Years Heritage",
      "NAAC A++ (3.67 CGPA)",
      "Jesuit Landmark",
      "Light House Hill"
    ]
  },
  {
    "id": "jss-pharmacy-mysuru",
    "name": "JSS College of Pharmacy (NIRF Rank #7), SS Nagar, Mysuru",
    "kannadaName": "ಜೆ.ಎಸ್.ಎಸ್ ಔಷಧ ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ, ಎಸ್.ಎಸ್ ನಗರ, ಮೈಸೂರು",
    "shortName": "JSS Pharmacy Mysuru",
    "tagline": "NIRF All-India Rank 7 Pharmacy Landmark (Estd 1973 by JSS AHER)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "pharmacy",
    "type": "Deemed University (JSS AHER)",
    "established": 1973,
    "affiliation": "JSS Academy of Higher Education & Research & PCI / AICTE",
    "naacGrade": "A++",
    "rating": 4.95,
    "address": "Sri Shivarathreeshwara Nagara, Bannimantap, Mysuru, Karnataka 570015",
    "pincode": "570015",
    "phone": "+91 821 2548353, +91 821 2548354",
    "email": "jsscpmy@jssuni.edu.in",
    "website": "https://jssuni.edu.in/jssaher/jssaher-academies/jssaher-pharmacy-mysore",
    "mapQuery": "JSS+College+of+Pharmacy+Bannimantap+Mysuru",
    "description": "JSS College of Pharmacy Mysuru is officially ranked 7th in all of India by NIRF (MHRD). Offering B.Pharm, Pharm.D, and M.Pharm degrees with state-of-the-art drug discovery labs.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy - NBA Accredited)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 100,
        "annualFee": "Govt Quota: ₹45,000 | Univ: ₹1,65,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA Pharmacy) / JSS AHER"
      },
      {
        "name": "Pharm.D (Doctor of Pharmacy) & M.Pharm Specializations",
        "level": "UG/PG",
        "duration": "6 Years",
        "seats": 30,
        "annualFee": "₹2,75,000 / Year",
        "eligibility": "10+2 PCB min 50%",
        "entranceExam": "JSS Entrance / KCET"
      }
    ],
    "admissionProcess": "KEA KCET Pharmacy Online Counseling & JSS AHER Deemed All-India Merit.",
    "facilities": [
      "NIRF Rank 7 National Facility",
      "Drug Testing & Analytical Lab",
      "Animal House (CPCSEA Approved)",
      "Hostels with Modern Mess"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Separate hostels for boys and girls with multi-cuisine food.",
    "placementStats": {
      "averagePackage": "₹7.5 LPA",
      "highestPackage": "₹18 LPA",
      "placedPercentage": "98%",
      "topRecruiters": [
        "Novartis",
        "AstraZeneca",
        "Pfizer",
        "Sun Pharma",
        "Biocon",
        "Cipla",
        "Dr. Reddy's",
        "GSK"
      ]
    },
    "scholarships": [
      "JSS Research Fellowships",
      "SSP Karnataka e-PASS"
    ],
    "badges": [
      "NIRF Rank #7 in India",
      "NAAC A++",
      "JSS AHER Deemed",
      "Pharm.D National Hub"
    ]
  },
  {
    "id": "mcops-manipal",
    "name": "Manipal College of Pharmaceutical Sciences (MCOPS / MAHE), Manipal, Udupi",
    "kannadaName": "ಮಣಿಪಾಲ ಔಷಧ ವಿಜ್ಞಾನ ಮಹಾವಿದ್ಯಾಲಯ (ಎಂಸಿಒಪಿಎಸ್ / ಮಾಹೆ), ಮಣಿಪಾಲ, ಉಡುಪಿ",
    "shortName": "MCOPS Manipal",
    "tagline": "NIRF Top 10 Pharmacy College in India (Estd 1963 by Dr. TMA Pai)",
    "division": "mysuru",
    "district": "Udupi",
    "taluk": "Udupi",
    "stream": "pharmacy",
    "type": "Deemed University (MAHE)",
    "established": 1963,
    "affiliation": "Manipal Academy of Higher Education (MAHE) & PCI Recognized",
    "naacGrade": "A++",
    "rating": 4.95,
    "address": "MAHE Campus, Manipal, Udupi District, Karnataka 576104",
    "pincode": "576104",
    "phone": "+91 820 2922482",
    "email": "mcops@manipal.edu",
    "website": "https://manipal.edu/mcops-manipal",
    "mapQuery": "MCOPS+Manipal+College+of+Pharmaceutical+Sciences",
    "description": "MCOPS Manipal is one of India's top 10 pharmacy colleges under MAHE, offering world-class pharmaceutical sciences education and drug testing labs.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "MAHE Quota: ₹3,10,000 / Year",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "MET (Manipal Entrance Test) / KCET"
      }
    ],
    "admissionProcess": "Manipal Entrance Test (MET) and KCET counseling.",
    "facilities": [
      "MAHE World-Class Campus",
      "Advanced Drug Testing Unit",
      "Hostels",
      "Digital Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "International standard hostels with dining and gym.",
    "placementStats": {
      "averagePackage": "₹7.8 LPA",
      "highestPackage": "₹20 LPA",
      "placedPercentage": "98%",
      "topRecruiters": [
        "Pfizer",
        "Novartis",
        "AstraZeneca",
        "Sun Pharma",
        "Biocon"
      ]
    },
    "scholarships": [
      "MAHE Merit Scholarships",
      "Kalam-Pai Scholarships"
    ],
    "badges": [
      "NIRF Top 10 Pharmacy",
      "MAHE Deemed A++",
      "Estd 1963",
      "PCI Approved"
    ]
  },
  {
    "id": "ngsm-pharmacy-mangaluru",
    "name": "NGSM Institute of Pharmaceutical Sciences (Nitte Deemed University), Deralakatte, Mangaluru",
    "kannadaName": "ಎನ್‌ಜಿಎಸ್‌ಎಂ ಔಷಧ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ನಿಟ್ಟೆ ವಿಶ್ವವಿದ್ಯಾಲಯ), ದೇರಳಕಟ್ಟೆ, ಮಂಗಳೂರು",
    "shortName": "NGSM Pharmacy Nitte",
    "tagline": "NIRF Top 50 Pharmacy Institution in India (Estd 1983 by Nitte Education Trust)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "pharmacy",
    "type": "Deemed University (Nitte)",
    "established": 1983,
    "affiliation": "Nitte (Deemed to be University) & PCI Recognized",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "Medical Sciences Complex, Deralakatte, Mangaluru, Karnataka 575018",
    "pincode": "575018",
    "phone": "+91 824 2203991",
    "email": "principal.ngsmips@nitte.edu.in",
    "website": "https://ngsmips.nitte.edu.in",
    "mapQuery": "NGSM+Institute+of+Pharmaceutical+Sciences+Deralakatte+Mangalore",
    "description": "NGSM Institute of Pharmaceutical Sciences offers high-end B.Pharm, Pharm.D, and M.Pharm degrees attached to the 1,000-bed Justice K.S. Hegde Hospital.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Nitte Quota: ₹1,80,000",
        "eligibility": "10+2 PCM/PCB min 50%",
        "entranceExam": "KCET / Nitte Entrance (NUCAT)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & NUCAT Merit Allotment.",
    "facilities": [
      "Hospital Attached",
      "Analytical Labs",
      "Hostels with Coastal Food",
      "Sports Arena"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Residential hostels with vegetarian and non-vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹6.2 LPA",
      "highestPackage": "₹16 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Cipla",
        "Dr. Reddy's",
        "Biocon",
        "Novartis",
        "Lupin"
      ]
    },
    "scholarships": [
      "Nitte Merit Concessions",
      "SSP State Scholarship"
    ],
    "badges": [
      "Nitte University",
      "NIRF Top 50",
      "NAAC A+",
      "Deralakatte"
    ]
  },
  {
    "id": "srinivas-pharmacy-mangaluru",
    "name": "Srinivas College of Pharmacy, Valachil, Mangaluru",
    "kannadaName": "ಶ್ರೀನಿವಾಸ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ವಳಚಿಲ್, ಮಂಗಳೂರು",
    "shortName": "Srinivas Pharmacy Mangaluru",
    "tagline": "Premier Pharmacy Campus under Srinivas Group (Estd 2004)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "pharmacy",
    "type": "Private (Srinivas University)",
    "established": 2004,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) / Srinivas Univ & PCI",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Valachil, Arkula, Farangipete Post, Mangaluru, Karnataka 574143",
    "pincode": "574143",
    "phone": "+91 824 2274722",
    "email": "scpharmacy@gmail.com",
    "website": "https://srinivasgroup.com/srinivas-college-of-pharmacy",
    "mapQuery": "Srinivas+College+of+Pharmacy+Valachil+Mangalore",
    "description": "Srinivas College of Pharmacy provides comprehensive pharmaceutical education with dedicated pharmacology, pharmacognosy, and pharmaceutical chemistry labs.",
    "courses": [
      {
        "name": "B.Pharm & Pharm.D Programs",
        "level": "UG",
        "duration": "4 - 6 Years",
        "seats": 130,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,20,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Srinivas Group Merit.",
    "facilities": [
      "Valachil Campus",
      "Machine Room",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with mess facilities.",
    "placementStats": {
      "averagePackage": "₹5.2 LPA",
      "highestPackage": "₹14 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "Cipla",
        "Micro Labs",
        "Strides Pharma",
        "Sun Pharma"
      ]
    },
    "scholarships": [
      "Srinivas Trust Concessions",
      "SSP Karnataka"
    ],
    "badges": [
      "Srinivas Group",
      "Valachil Mangaluru",
      "PCI Approved",
      "KEA Code: P033"
    ]
  },
  {
    "id": "sarada-vilas-pharmacy-mysuru",
    "name": "Sarada Vilas College of Pharmacy, Krishnamurthypuram, Mysuru",
    "kannadaName": "ಶಾರದಾ ವಿಲಾಸ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ಕೃಷ್ಣಮೂರ್ತಿಪುರಂ, ಮೈಸೂರು",
    "shortName": "Sarada Vilas Pharmacy",
    "tagline": "Historic Educational Institution in Mysuru (Estd 1992 by Sarada Vilas Trust)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "pharmacy",
    "type": "Private Aided",
    "established": 1992,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "B++",
    "rating": 4.5,
    "address": "Sarada Vilas Centenary Building, Krishnamurthypuram, Mysuru, Karnataka 570004",
    "pincode": "570004",
    "phone": "+91 821 2332560",
    "email": "svcopmysore@gmail.com",
    "website": "https://saradavilas.com",
    "mapQuery": "Sarada+Vilas+College+of+Pharmacy+Krishnamurthypuram+Mysuru",
    "description": "Sarada Vilas College of Pharmacy, situated in Krishnamurthypuram Mysuru, offers quality B.Pharm, D.Pharm, and M.Pharm courses with seasoned faculty and hospital training.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "Govt Quota: ₹45,000 | Private: ₹1,10,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Sarada Vilas Trust Admissions.",
    "facilities": [
      "Heritage Campus",
      "Pharmacy Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostels with vegetarian dining.",
    "placementStats": {
      "averagePackage": "₹4.8 LPA",
      "highestPackage": "₹12 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Cipla",
        "Micro Labs",
        "AstraZeneca",
        "Biocon"
      ]
    },
    "scholarships": [
      "Trust Merit Scholarships",
      "SSP Post-Matric"
    ],
    "badges": [
      "Heritage 1992",
      "Mysuru Central",
      "PCI Approved",
      "KEA Code: P031"
    ]
  },
  {
    "id": "farooqia-pharmacy-mysuru",
    "name": "Farooqia Dental and Pharmacy College, Tilak Nagar, Mysuru",
    "kannadaName": "ಫಾರೂಖಿಯಾ ಔಷಧ ವಿಜ್ಞಾನ ಕಾಲೇಜು, ತಿಲಕ್ ನಗರ, ಮೈಸೂರು",
    "shortName": "Farooqia Pharmacy Mysuru",
    "tagline": "Premier Minority Pharmacy College in Mysuru (Estd 1980 by RMET)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "pharmacy",
    "type": "Private (Minority)",
    "established": 1980,
    "affiliation": "Rajiv Gandhi University of Health Sciences (RGUHS) & PCI",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Farooqia Campus, Eidgah Ground, Tilak Nagar, Mysuru, Karnataka 570021",
    "pincode": "570021",
    "phone": "+91 821 2491143",
    "email": "farooqiaphar@yahoo.com",
    "website": "https://farooqiacollege.com",
    "mapQuery": "Farooqia+College+of+Pharmacy+Tilak+Nagar+Mysuru",
    "description": "Farooqia College of Pharmacy, founded in 1980, provides B.Pharm and D.Pharm courses with focus on formulation techniques and clinical chemistry.",
    "courses": [
      {
        "name": "B.Pharm (Bachelor of Pharmacy)",
        "level": "UG",
        "duration": "4 Years",
        "seats": 60,
        "annualFee": "Govt Quota: ₹45,000",
        "eligibility": "10+2 with PCM/PCB min 50%",
        "entranceExam": "KCET (KEA)"
      }
    ],
    "admissionProcess": "KEA KCET Counseling & Minority Trust Seats.",
    "facilities": [
      "Tilak Nagar Campus",
      "Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Hostel facilities available.",
    "placementStats": {
      "averagePackage": "₹4.6 LPA",
      "highestPackage": "₹11 LPA",
      "placedPercentage": "85%",
      "topRecruiters": [
        "Cipla",
        "Lupin",
        "Micro Labs"
      ]
    },
    "scholarships": [
      "Minority Scholarships",
      "SSP State Portal"
    ],
    "badges": [
      "Estd 1980",
      "RGUHS Affiliated",
      "PCI Approved",
      "KEA Code: P009"
    ]
  },
  {
    "id": "kpt-mangaluru",
    "name": "Karnataka (Govt) Polytechnic (KPT), Kadri Hills, Mangaluru",
    "kannadaName": "ಕರ್ನಾಟಕ (ಸರ್ಕಾರಿ) ಪಾಲಿಟೆಕ್ನಿಕ್ (ಕೆ.ಪಿ.ಟಿ), ಕದ್ರಿ ಹಿಲ್ಸ್, ಮಂಗಳೂರು",
    "shortName": "KPT Mangaluru",
    "tagline": "Premier Heritage Government Technical Diploma Institution of Coastal Karnataka (Estd 1946)",
    "division": "mysuru",
    "district": "Dakshina Kannada",
    "taluk": "Mangaluru",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1946,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A+",
    "rating": 4.8,
    "address": "KPT Junction, Kadri Hills, Airport Road, Mangaluru, Karnataka 575004",
    "pincode": "575004",
    "phone": "+91 824 2211624, +91 824 2211625",
    "email": "kptmangalore@gmail.com",
    "website": "https://dtek.karnataka.gov.in/kptmangalore",
    "mapQuery": "Karnataka+Polytechnic+KPT+Kadri+Hills+Mangalore",
    "description": "KPT Mangaluru, established in 1946 on a scenic 30-acre campus at Kadri Hills, is coastal Karnataka's premier public diploma institution offering high-demand engineering diploma streams.",
    "courses": [
      {
        "name": "Diploma in Computer Science & Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 60,
        "annualFee": "₹4,500 / Year (Govt Subsidized Rate)",
        "eligibility": "SSLC / 10th Standard Pass min 35%",
        "entranceExam": "DTE Karnataka Centralized Merit"
      },
      {
        "name": "Diploma in Mechanical, Automobile & Civil Engineering",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10th Standard Pass min 35%",
        "entranceExam": "DTE Single Window Merit"
      },
      {
        "name": "Diploma in Electronics & Communication / Polymer Tech",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 120,
        "annualFee": "₹4,500 / Year",
        "eligibility": "10th Standard Pass",
        "entranceExam": "DTE Merit"
      }
    ],
    "admissionProcess": "Centralized single-window admission portal of DTE Karnataka (dtek.karnataka.gov.in) strictly by 10th standard SSLC merit.",
    "facilities": [
      "30-Acre Kadri Hills Campus",
      "Modern Automobile & CNC Workshops",
      "Govt Hostels for Boys & Girls",
      "Central Technical Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels on campus with clean boarding.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹9.2 LPA",
      "placedPercentage": "94%",
      "topRecruiters": [
        "Toyota Kirloskar",
        "L&T Construction",
        "MRPL",
        "Tata Motors",
        "Bosch",
        "Infosys BPM",
        "Adani Ports"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Post-Matric Scholarship",
      "Vidyasiri OBC Concessions"
    ],
    "badges": [
      "Historic Estd 1946",
      "Kadri Hills Campus",
      "Low Fees ₹4.5k",
      "DTE Code: 102"
    ]
  },
  {
    "id": "gpt-mysuru",
    "name": "Government Polytechnic (GPT), Nazarbad, Mysuru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ನಜರ್‌ಬಾದ್, ಮೈಸೂರು",
    "shortName": "GPT Nazarbad Mysuru",
    "tagline": "Premier Government Technical Diploma Institution in Heritage Mysuru (Estd 1939)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1939,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.7,
    "address": "Nazarbad Main Road, Near Zoo & Palace, Mysuru, Karnataka 570010",
    "pincode": "570010",
    "phone": "+91 821 2440333",
    "email": "gptmysore@yahoo.co.in",
    "website": "https://dtek.karnataka.gov.in/gptmysore",
    "mapQuery": "Government+Polytechnic+Nazarbad+Mysuru",
    "description": "Government Polytechnic Nazarbad Mysuru, founded in 1939 under the Mysore Royal administration, offers 3-year technical diploma programs with heavy lab practicals and high job placements.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 300,
        "annualFee": "₹4,500 / Year (Govt Subsidized)",
        "eligibility": "SSLC / 10th Standard Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "Centralized online allotment by DTE Karnataka.",
    "facilities": [
      "Nazarbad Heritage Campus",
      "Heavy Machinery & Electronics Labs",
      "Government Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostels for boys and girls.",
    "placementStats": {
      "averagePackage": "₹3.8 LPA",
      "highestPackage": "₹8 LPA",
      "placedPercentage": "92%",
      "topRecruiters": [
        "TVS Motors",
        "L&T",
        "Tata Motors",
        "Schneider Electric",
        "Infosys"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Scholarship"
    ],
    "badges": [
      "Royal Heritage 1939",
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "DTE Code: 101"
    ]
  },
  {
    "id": "cpc-polytechnic-mysuru",
    "name": "CPC (Centenary) Government Polytechnic, Ashoka Road, Mysuru",
    "kannadaName": "ಸಿ.ಪಿ.ಸಿ (ಶತಮಾನೋತ್ಸವ) ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್, ಅಶೋಕ ರಸ್ತೆ, ಮೈಸೂರು",
    "shortName": "CPC Polytechnic Mysuru",
    "tagline": "Historic Technical Landmark in Central Mysuru (Estd 1954)",
    "division": "mysuru",
    "district": "Mysuru",
    "taluk": "Mysuru",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1954,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.6,
    "address": "Ashoka Road, St. Philomena Church Area, Mysuru, Karnataka 570001",
    "pincode": "570001",
    "phone": "+91 821 2441199",
    "email": "cpcpolytechnic@gmail.com",
    "website": "https://dtek.karnataka.gov.in/cpcpolytechnic",
    "mapQuery": "CPC+Polytechnic+Ashoka+Road+Mysuru",
    "description": "CPC Government Polytechnic Mysuru offers subsidized technical diplomas in Civil, Mechanical, Electrical, Machine Tool Tech, and Computer Science.",
    "courses": [
      {
        "name": "Diploma in Mechanical, Electrical & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Centralized Merit Allotment.",
    "facilities": [
      "Central Mysuru Campus",
      "Advanced Tool Room Workshops",
      "Hostel",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel facility.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "90%",
      "topRecruiters": [
        "TVS",
        "L&T",
        "Bosch",
        "Tata Motors"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1954",
      "Low Fees ₹4.5k",
      "DTE Code: 103"
    ]
  },
  {
    "id": "gpt-mandya",
    "name": "Government Polytechnic (GPT), Mandya",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಮಂಡ್ಯ",
    "shortName": "GPT Mandya",
    "tagline": "Premier Public Technical Diploma Institution in Sugar City Mandya (Estd 1985)",
    "division": "mysuru",
    "district": "Mandya",
    "taluk": "Mandya",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1985,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Sugar Town, Mandya, Karnataka 571402",
    "pincode": "571402",
    "phone": "+91 8232 222384",
    "email": "gptmandya@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptmandya",
    "mapQuery": "Government+Polytechnic+Sugar+Town+Mandya",
    "description": "Government Polytechnic Mandya offers industry-tailored 3-year diplomas in engineering with dedicated workshops and placement ties.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & E&C",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 180,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Single Window Merit Admissions.",
    "facilities": [
      "Workshops",
      "Computer Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostel accommodations.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "Tata Motors",
        "TVS",
        "L&T"
      ]
    },
    "scholarships": [
      "SC/ST Full Tuition Waiver",
      "SSP Scholarship"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Mandya"
    ]
  },
  {
    "id": "gpt-hassan",
    "name": "Government Polytechnic (GPT), Hassan",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಹಾಸನ",
    "shortName": "GPT Hassan",
    "tagline": "Public Technical Diploma Institution in Hassan (Estd 1982)",
    "division": "mysuru",
    "district": "Hassan",
    "taluk": "Hassan",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1982,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "B++",
    "rating": 4.4,
    "address": "Near Dairy Circle, BM Road, Hassan, Karnataka 573201",
    "pincode": "573201",
    "phone": "+91 8172 268299",
    "email": "gpthassan@yahoo.co.in",
    "website": "https://dtek.karnataka.gov.in/gpthassan",
    "mapQuery": "Government+Polytechnic+BM+Road+Hassan",
    "description": "Government Polytechnic Hassan provides hands-on technical diploma courses with well-equipped labs and placement assistance.",
    "courses": [
      {
        "name": "Diploma in Civil, Mechanical, E&C & Computer Science",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 240,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Centralized Admissions.",
    "facilities": [
      "BM Road Campus",
      "Workshops",
      "Hostel",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Subsidized government hostel.",
    "placementStats": {
      "averagePackage": "₹3.5 LPA",
      "highestPackage": "₹7.2 LPA",
      "placedPercentage": "86%",
      "topRecruiters": [
        "Tata Motors",
        "L&T",
        "Bosch"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP State Portal"
    ],
    "badges": [
      "Govt Polytechnic",
      "Low Fees ₹4.5k",
      "Hassan"
    ]
  },
  {
    "id": "gpt-chikkamagaluru",
    "name": "Government Polytechnic (GPT), Chikkamagaluru",
    "kannadaName": "ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್ (ಜಿ.ಪಿ.ಟಿ), ಚಿಕ್ಕಮಗಳೂರು",
    "shortName": "GPT Chikkamagaluru",
    "tagline": "Premier Government Diploma Institution in Coffee Land (Estd 1958)",
    "division": "mysuru",
    "district": "Chikkamagaluru",
    "taluk": "Chikkamagaluru",
    "stream": "polytechnic",
    "type": "Government (DTE Karnataka)",
    "established": 1958,
    "affiliation": "Directorate of Technical Education (DTE), Karnataka & AICTE",
    "naacGrade": "A",
    "rating": 4.5,
    "address": "KM Road, Jyothinagara, Chikkamagaluru, Karnataka 577102",
    "pincode": "577102",
    "phone": "+91 8262 220268",
    "email": "gptckm@gmail.com",
    "website": "https://dtek.karnataka.gov.in/gptchikkamagaluru",
    "mapQuery": "Government+Polytechnic+KM+Road+Chikkamagaluru",
    "description": "Government Polytechnic Chikkamagaluru, established in 1958, provides technical diplomas with strong laboratory training and high recruitment.",
    "courses": [
      {
        "name": "Diploma in Computer Science, Mechanical & Civil",
        "level": "Diploma",
        "duration": "3 Years",
        "seats": 200,
        "annualFee": "₹4,500 / Year",
        "eligibility": "SSLC Pass min 35%",
        "entranceExam": "DTE Single Window"
      }
    ],
    "admissionProcess": "DTE Karnataka Single Window Allotment.",
    "facilities": [
      "KM Road Campus",
      "Labs",
      "Hostels",
      "Library"
    ],
    "hostelAvailable": true,
    "hostelDetails": "Government hostels available.",
    "placementStats": {
      "averagePackage": "₹3.6 LPA",
      "highestPackage": "₹7.5 LPA",
      "placedPercentage": "88%",
      "topRecruiters": [
        "Tata Motors",
        "L&T",
        "Infosys BPM"
      ]
    },
    "scholarships": [
      "100% Free Tuition for SC/ST",
      "SSP Karnataka"
    ],
    "badges": [
      "Govt Polytechnic",
      "Estd 1958",
      "Low Fees ₹4.5k",
      "Chikkamagaluru"
    ]
  }
];

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
