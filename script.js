// ============================================
// ANNA UNIVERSITY GPA CALCULATOR - 2021 REGULATION
// COMPLETE SUBJECT DATABASE - 6 DEPARTMENTS
// ============================================

// ------------------------------------------------------------
// DEPARTMENT 1: INFORMATION TECHNOLOGY (IT) - COMPLETE
// ------------------------------------------------------------
const IT_SUBJECTS = {
    1: [
        { code: "BS3171", name: "PHYSICS AND CHEMISTRY LABORATORY", credit: 2 },
        { code: "CY3151", name: "ENGINEERING CHEMISTRY", credit: 3 },
        { code: "GE3151", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING", credit: 3 },
        { code: "GE3152", name: "HERITAGE OF TAMIL", credit: 1 },
        { code: "GE3171", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING LABORATORY", credit: 2 },
        { code: "GE3172", name: "ENGLISH LABORATORY", credit: 1 },
        { code: "HS3152", name: "PROFESSIONAL ENGLISH 1", credit: 3 },
        { code: "MA3151", name: "MATRICES AND CALCULUS", credit: 4 },
        { code: "PH3151", name: "ENGINEERING PHYSICS", credit: 3 }
    ],
    2: [
        { code: "BE3251", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", credit: 3 },
        { code: "CS3251", name: "PROGRAMMING IN C", credit: 3 },
        { code: "CS3271", name: "PROGRAMMING IN C LABORATORY", credit: 2 },
        { code: "GE3251", name: "ENGINEERING GRAPHICS", credit: 4 },
        { code: "GE3252", name: "TAMIL AND TECHNOLOGY", credit: 1 },
        { code: "GE3271", name: "ENGINEERING PRACTICES LABORATORY", credit: 2 },
        { code: "GE3272", name: "COMMUNICATION LABORATORY", credit: 2 },
        { code: "HS3252", name: "PROFESSIONAL ENGLISH II", credit: 2 },
        { code: "MA3251", name: "STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { code: "PH3256", name: "PHYSICS FOR INFORMATION SCIENCE", credit: 3 }
    ],
    3: [
        { code: "CD3281", name: "DATA STRUCTURES AND ALGORITHMS LABORATORY", credit: 2 },
        { code: "CD3291", name: "DATA STRUCTURES AND ALGORITHMS", credit: 3 },
        { code: "CS3351", name: "DIGITAL PRINCIPLES AND COMPUTER ORGANIZATION", credit: 4 },
        { code: "CS3352", name: "FOUNDATIONS OF DATA SCIENCE", credit: 3 },
        { code: "CS3361", name: "DATA SCIENCE LABORATORY", credit: 2 },
        { code: "CS3381", name: "OBJECT ORIENTED PROGRAMMING LABORATORY", credit: 1.5 },
        { code: "CS3391", name: "OBJECT ORIENTED PROGRAMMING", credit: 3 },
        { code: "GE3361", name: "PROFESSIONAL DEVELOPMENT", credit: 1 },
        { code: "MA3354", name: "DISCRETE MATHEMATICS", credit: 4 }
    ],
    4: [
        { code: "CS3451", name: "INTRODUCTION TO OPERATING SYSTEMS", credit: 3 },
        { code: "CS3452", name: "THEORY OF COMPUTATION", credit: 3 },
        { code: "CS3461", name: "OPERATING SYSTEM LABORATORY", credit: 1.5 },
        { code: "CS3481", name: "DATABASE MANAGEMENT SYSTEMS LABORATORY", credit: 1.5 },
        { code: "CS3491", name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", credit: 4 },
        { code: "CS3492", name: "DATABASE MANAGEMENT SYSTEMS", credit: 3 },
        { code: "GE3451", name: "ENVIRONMENTAL SCIENCES AND SUSTAINABILITY", credit: 2 },
        { code: "IT3401", name: "WEB ESSENTIALS", credit: 4 }
    ],
    5: [
        { code: "CS3551", name: "DISTRIBUTED COMPUTING", credit: 3 },
        { code: "CS3591", name: "COMPUTER NETWORKS", credit: 4 },
        { code: "CS3691", name: "EMBEDDED SYSTEMS AND IOT", credit: 4 },
        { code: "IT3501", name: "FULL STACK WEB DEVELOPMENT", credit: 3 },
        { code: "IT3511", name: "FULLSTACK WEB DEVELOPMENT LABORATORY", credit: 2 },
        { code: "PEC1", name: "PROFESSIONAL ELECTIVE 1", credit: 3, elective: true },
        { code: "PEC2", name: "PROFESSIONAL ELECTIVE 2", credit: 3, elective: true },
        { code: "MNC1", name: "MANDATORY COURSE 1", credit: 0, ignore: true }
    ],
    6: [
        { code: "CCS356", name: "OBJECT ORIENTED SOFTWARE ENGINEERING", credit: 4 },
        { code: "IT3681", name: "MOBILE APPLICATIONS DEVELOPMENT LABORATORY", credit: 1.5 },
        { code: "OE1", name: "OPEN ELECTIVE 1", credit: 3, elective: true },
        { code: "PEC3", name: "PROFESSIONAL ELECTIVE 3", credit: 3, elective: true },
        { code: "PEC4", name: "PROFESSIONAL ELECTIVE 4", credit: 3, elective: true },
        { code: "PEC5", name: "PROFESSIONAL ELECTIVE 5", credit: 3, elective: true },
        { code: "PEC6", name: "PROFESSIONAL ELECTIVE 6", credit: 3, elective: true },
        { code: "MNC2", name: "MANDATORY COURSE 2", credit: 0, ignore: true }
    ],
    7: [
        { code: "GE3791", name: "HUMAN VALUES AND ETHICS", credit: 2 },
        { code: "IT3711", name: "SUMMER INTERNSHIP", credit: 2 },
        { code: "OE2", name: "OPEN ELECTIVE 2", credit: 3, elective: true },
        { code: "OE3", name: "OPEN ELECTIVE 3", credit: 3, elective: true },
        { code: "OE4", name: "OPEN ELECTIVE 4", credit: 3, elective: true }
    ],
    8: [
        { code: "IT3811", name: "PROJECT WORK / INTERNSHIP", credit: 10 }
    ]
};

// ----- CSE DEPARTMENT -----
const CSE_SUBJECTS = {
    1: [
        { code: "BS3171", name: "PHYSICS AND CHEMISTRY LABORATORY", credit: 2 },
        { code: "CY3151", name: "ENGINEERING CHEMISTRY", credit: 3 },
        { code: "GE3151", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING", credit: 3 },
        { code: "GE3152", name: "HERITAGE OF TAMIL", credit: 1 },
        { code: "GE3171", name: "PYTHON PROGRAMMING LABORATORY", credit: 2 },
        { code: "GE3172", name: "ENGLISH LABORATORY", credit: 1 },
        { code: "HS3152", name: "PROFESSIONAL ENGLISH 1", credit: 3 },
        { code: "MA3151", name: "MATRICES AND CALCULUS", credit: 4 },
        { code: "PH3151", name: "ENGINEERING PHYSICS", credit: 3 }
    ],
    2: [
        { code: "BE3251", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", credit: 3 },
        { code: "CS3251", name: "PROGRAMMING IN C", credit: 3 },
        { code: "CS3271", name: "PROGRAMMING IN C LABORATORY", credit: 2 },
        { code: "GE3251", name: "ENGINEERING GRAPHICS", credit: 4 },
        { code: "GE3252", name: "TAMIL AND TECHNOLOGY", credit: 1 },
        { code: "GE3271", name: "ENGINEERING PRACTICES LABORATORY", credit: 2 },
        { code: "GE3272", name: "COMMUNICATION LABORATORY", credit: 2 },
        { code: "HS3252", name: "PROFESSIONAL ENGLISH II", credit: 2 },
        { code: "MA3251", name: "STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { code: "PH3256", name: "PHYSICS FOR INFORMATION SCIENCE", credit: 3 }
    ],
    3: [
        { code: "CS3301", name: "DATA STRUCTURES", credit: 3 },
        { code: "CS3311", name: "DATA STRUCTURES LABORATORY", credit: 1.5 },
        { code: "CS3351", name: "DIGITAL PRINCIPLES AND COMPUTER ORGANIZATION", credit: 4 },
        { code: "CS3352", name: "FOUNDATIONS OF DATA SCIENCE", credit: 3 },
        { code: "CS3361", name: "DATA SCIENCE LABORATORY", credit: 2 },
        { code: "CS3381", name: "OBJECT ORIENTED PROGRAMMING LABORATORY", credit: 1.5 },
        { code: "CS3391", name: "OBJECT ORIENTED PROGRAMMING", credit: 3 },
        { code: "GE3361", name: "PROFESSIONAL DEVELOPMENT", credit: 1 },
        { code: "MA3354", name: "DISCRETE MATHEMATICS", credit: 4 }
    ],
    4: [
        { code: "CS3401", name: "ALGORITHMS", credit: 4 },
        { code: "CS3451", name: "INTRODUCTION TO OPERATING SYSTEMS", credit: 3 },
        { code: "CS3452", name: "THEORY OF COMPUTATION", credit: 3 },
        { code: "CS3461", name: "OPERATING SYSTEMS LABORATORY", credit: 1.5 },
        { code: "CS3481", name: "DATABASE MANAGEMENT SYSTEMS LABORATORY", credit: 1.5 },
        { code: "CS3491", name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", credit: 4 },
        { code: "CS3492", name: "DATABASE MANAGEMENT SYSTEMS", credit: 3 },
        { code: "GE3451", name: "ENVIRONMENTAL SCIENCES AND SUSTAINABILITY", credit: 2 }
    ],
    5: [
        { code: "CB3491", name: "CRYPTOGRAPHY AND CYBER SECURITY", credit: 3 },
        { code: "CS3501", name: "COMPILER DESIGN", credit: 4 },
        { code: "CS3551", name: "DISTRIBUTED COMPUTING", credit: 3 },
        { code: "CS3591", name: "COMPUTER NETWORKS", credit: 4 },
        { code: "PEC1", name: "PROFESSIONAL ELECTIVE I", credit: 3, elective: true },
        { code: "PEC2", name: "PROFESSIONAL ELECTIVE II", credit: 3, elective: true },
        { code: "MNC1", name: "MANDATORY COURSE-I", credit: 0, ignore: true }
    ],
    6: [
        { code: "CCS356", name: "OBJECT ORIENTED SOFTWARE ENGINEERING", credit: 4 },
        { code: "CS3691", name: "EMBEDDED SYSTEMS AND IOT", credit: 4 },
        { code: "OE1", name: "OPEN ELECTIVE – I", credit: 3, elective: true },
        { code: "PEC3", name: "PROFESSIONAL ELECTIVE III", credit: 3, elective: true },
        { code: "PEC4", name: "PROFESSIONAL ELECTIVE IV", credit: 3, elective: true },
        { code: "PEC5", name: "PROFESSIONAL ELECTIVE V", credit: 3, elective: true },
        { code: "PEC6", name: "PROFESSIONAL ELECTIVE VI", credit: 3, elective: true },
        { code: "MNC2", name: "MANDATORY COURSE-II", credit: 0, ignore: true }
    ],
    7: [
        { code: "CS3711", name: "SUMMER INTERNSHIP", credit: 2 },
        { code: "GE3791", name: "HUMAN VALUES AND ETHICS", credit: 2 },
        { code: "MG3791", name: "ELECTIVE – MANAGEMENT", credit: 3, elective: true },
        { code: "OE2", name: "OPEN ELECTIVE – II", credit: 3, elective: true },
        { code: "OE3", name: "OPEN ELECTIVE – III", credit: 3, elective: true },
        { code: "OE4", name: "OPEN ELECTIVE – IV", credit: 3, elective: true }
    ],
    8: [
        { code: "CS3811", name: "PROJECT WORK / INTERNSHIP", credit: 10 }
    ]
};

// ----- AIDS DEPARTMENT -----
const AIDS_SUBJECTS = {
    1: [
        { code: "BS3171", name: "PHYSICS AND CHEMISTRY LABORATORY", credit: 2 },
        { code: "CY3151", name: "ENGINEERING CHEMISTRY", credit: 3 },
        { code: "GE3151", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING", credit: 3 },
        { code: "GE3152", name: "HERITAGE OF TAMIL", credit: 1 },
        { code: "GE3171", name: "PYTHON PROGRAMMING LABORATORY", credit: 2 },
        { code: "GE3172", name: "ENGLISH LABORATORY", credit: 1 },
        { code: "HS3152", name: "PROFESSIONAL ENGLISH 1", credit: 3 },
        { code: "MA3151", name: "MATRICES AND CALCULUS", credit: 4 },
        { code: "PH3151", name: "ENGINEERING PHYSICS", credit: 3 }
    ],
    2: [
        { code: "AD3251", name: "DATA STRUCTURES DESIGN", credit: 3 },
        { code: "AD3271", name: "DATA STRUCTURES DESIGN LABORATORY", credit: 2 },
        { code: "BE3251", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", credit: 3 },
        { code: "GE3251", name: "ENGINEERING GRAPHICS", credit: 4 },
        { code: "GE3252", name: "TAMILS AND TECHNOLOGY", credit: 1 },
        { code: "GE3271", name: "ENGINEERING PRACTICES LABORATORY", credit: 2 },
        { code: "GE3272", name: "COMMUNICATION LABORATORY", credit: 2 },
        { code: "HS3252", name: "PROFESSIONAL ENGLISH - II", credit: 2 },
        { code: "MA3251", name: "STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { code: "PH3256", name: "PHYSICS FOR INFORMATION SCIENCE", credit: 3 }
    ],
    3: [
        { code: "AD3301", name: "DATA EXPLORATION AND VISUALIZATION", credit: 4 },
        { code: "AD3311", name: "ARTIFICIAL INTELLIGENCE LABORATORY", credit: 1.5 },
        { code: "AD3351", name: "DESIGN AND ANALYSIS OF ALGORITHMS", credit: 4 },
        { code: "AD3381", name: "DATABASE DESIGN AND MANAGEMENT LABORATORY", credit: 1.5 },
        { code: "AD3391", name: "DATABASE DESIGN AND MANAGEMENT", credit: 3 },
        { code: "AL3391", name: "ARTIFICIAL INTELLIGENCE", credit: 3 },
        { code: "CS3351", name: "DIGITAL PRINCIPLES AND COMPUTER ORGANIZATION", credit: 4 },
        { code: "GE3361", name: "PROFESSIONAL DEVELOPMENT", credit: 1 },
        { code: "MA3354", name: "DISCRETE MATHEMATICS", credit: 4 }
    ],
    4: [
        { code: "AD3411", name: "DATA SCIENCE AND ANALYTICS LABORATORY", credit: 2 },
        { code: "AD3461", name: "MACHINE LEARNING LABORATORY", credit: 2 },
        { code: "AD3491", name: "FUNDAMENTALS OF DATA SCIENCE AND ANALYTICS", credit: 3 },
        { code: "AL3451", name: "MACHINE LEARNING", credit: 3 },
        { code: "AL3452", name: "OPERATING SYSTEMS", credit: 4 },
        { code: "CS3591", name: "COMPUTER NETWORKS", credit: 4 },
        { code: "GE3451", name: "ENVIRONMENTAL SCIENCES AND SUSTAINABILITY", credit: 2 },
        { code: "MA3391", name: "PROBABILITY AND STATISTICS", credit: 4 }
    ],
    5: [
        { code: "AD3501", name: "DEEP LEARNING", credit: 3 },
        { code: "AD3511", name: "DEEP LEARNING LABORATORY", credit: 2 },
        { code: "AD3512", name: "SUMMER INTERNSHIP", credit: 2 },
        { code: "CS3334", name: "BIG DATA ANALYTICS", credit: 3 },
        { code: "CS3551", name: "DISTRIBUTED COMPUTING", credit: 3 },
        { code: "CW3551", name: "DATA AND INFORMATION SECURITY", credit: 3 },
        { code: "PEC1", name: "PROFESSIONAL ELECTIVE I", credit: 3, elective: true },
        { code: "PEC2", name: "PROFESSIONAL ELECTIVE II", credit: 3, elective: true },
        { code: "MNC1", name: "MANDATORY COURSE-I", credit: 0, ignore: true }
    ],
    6: [
        { code: "CS3691", name: "EMBEDDED SYSTEMS AND IOT", credit: 4 },
        { code: "OE1", name: "OPEN ELECTIVE – I", credit: 3, elective: true },
        { code: "PEC3", name: "PROFESSIONAL ELECTIVE III", credit: 3, elective: true },
        { code: "PEC4", name: "PROFESSIONAL ELECTIVE IV", credit: 3, elective: true },
        { code: "PEC5", name: "PROFESSIONAL ELECTIVE V", credit: 3, elective: true },
        { code: "PEC6", name: "PROFESSIONAL ELECTIVE VI", credit: 3, elective: true },
        { code: "MNC2", name: "MANDATORY COURSE-II", credit: 0, ignore: true }
    ],
    7: [
        { code: "GE3791", name: "HUMAN VALUES AND ETHICS", credit: 2 },
        { code: "MG3791", name: "ELECTIVE – MANAGEMENT", credit: 3, elective: true },
        { code: "OE2", name: "OPEN ELECTIVE – II", credit: 3, elective: true },
        { code: "OE3", name: "OPEN ELECTIVE – III", credit: 3, elective: true },
        { code: "OE4", name: "OPEN ELECTIVE – IV", credit: 3, elective: true }
    ],
    8: [
        { code: "AD3811", name: "PROJECT WORK / INTERNSHIP", credit: 10 }
    ]
};

// ----- ECE DEPARTMENT -----
const ECE_SUBJECTS = {
    1: [
        { code: "BS3171", name: "PHYSICS AND CHEMISTRY LABORATORY", credit: 2 },
        { code: "CY3151", name: "ENGINEERING CHEMISTRY", credit: 3 },
        { code: "GE3151", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING", credit: 3 },
        { code: "GE3152", name: "HERITAGE OF TAMIL", credit: 1 },
        { code: "GE3171", name: "PYTHON PROGRAMMING LABORATORY", credit: 2 },
        { code: "GE3172", name: "ENGLISH LABORATORY", credit: 1 },
        { code: "HS3152", name: "PROFESSIONAL ENGLISH 1", credit: 3 },
        { code: "MA3151", name: "MATRICES AND CALCULUS", credit: 4 },
        { code: "PH3151", name: "ENGINEERING PHYSICS", credit: 3 }
    ],
    2: [
        { code: "BE3254", name: "ELECTRICAL AND INSTRUMENTATION ENGINEERING", credit: 3 },
        { code: "EC3251", name: "CIRCUIT ANALYSIS", credit: 4 },
        { code: "EC3271", name: "CIRCUITS ANALYSIS LABORATORY", credit: 1 },
        { code: "GE3251", name: "ENGINEERING GRAPHICS", credit: 4 },
        { code: "GE3252", name: "TAMILS AND TECHNOLOGY", credit: 1 },
        { code: "GE3271", name: "ENGINEERING PRACTICES LABORATORY", credit: 2 },
        { code: "GE3272", name: "COMMUNICATION LABORATORY", credit: 2 },
        { code: "HS3252", name: "PROFESSIONAL ENGLISH - II", credit: 2 },
        { code: "MA3251", name: "STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { code: "PH3254", name: "PHYSICS FOR ELECTRONICS ENGINEERING", credit: 3 }
    ],
    3: [
        { code: "CS3353", name: "C PROGRAMMING AND DATA STRUCTURES", credit: 3 },
        { code: "CS3362", name: "C PROGRAMMING AND DATA STRUCTURES LABORATORY", credit: 1.5 },
        { code: "EC3351", name: "CONTROL SYSTEMS", credit: 3 },
        { code: "EC3352", name: "DIGITAL SYSTEMS DESIGN", credit: 4 },
        { code: "EC3353", name: "ELECTRONIC DEVICES AND CIRCUITS", credit: 3 },
        { code: "EC3354", name: "SIGNALS AND SYSTEMS", credit: 4 },
        { code: "EC3361", name: "ELECTRONIC DEVICES AND CIRCUITS LABORATORY", credit: 1.5 },
        { code: "GE3361", name: "PROFESSIONAL DEVELOPMENT", credit: 1 },
        { code: "MA3355", name: "RANDOM PROCESSES AND LINEAR ALGEBRA", credit: 4 }
    ],
    4: [
        { code: "EC3401", name: "NETWORKS AND SECURITY", credit: 4 },
        { code: "EC3451", name: "LINEAR INTEGRATED CIRCUITS", credit: 3 },
        { code: "EC3452", name: "ELECTROMAGNETIC FIELDS", credit: 3 },
        { code: "EC3461", name: "COMMUNICATION SYSTEMS LABORATORY", credit: 1.5 },
        { code: "EC3462", name: "LINEAR INTEGRATED CIRCUITS LABORATORY", credit: 1.5 },
        { code: "EC3491", name: "COMMUNICATION SYSTEMS", credit: 3 },
        { code: "EC3492", name: "DIGITAL SIGNAL PROCESSING", credit: 4 },
        { code: "GE3451", name: "ENVIRONMENTAL SCIENCES AND SUSTAINABILITY", credit: 2 }
    ],
    5: [
        { code: "EC3501", name: "WIRELESS COMMUNICATION", credit: 4 },
        { code: "EC3551", name: "TRANSMISSION LINES AND RF SYSTEMS", credit: 3 },
        { code: "EC3552", name: "VLSI AND CHIP DESIGN", credit: 3 },
        { code: "EC3561", name: "VLSI LABORATORY", credit: 2 },
        { code: "PEC1", name: "PROFESSIONAL ELECTIVE I", credit: 3, elective: true },
        { code: "PEC2", name: "PROFESSIONAL ELECTIVE II", credit: 3, elective: true },
        { code: "PEC3", name: "PROFESSIONAL ELECTIVE III", credit: 3, elective: true },
        { code: "MNC1", name: "MANDATORY COURSE-I", credit: 0, ignore: true }
    ],
    6: [
        { code: "CS3491", name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", credit: 4 },
        { code: "ET3491", name: "EMBEDDED SYSTEMS AND IOT DESIGN", credit: 4 },
        { code: "OE1", name: "OPEN ELECTIVE – I", credit: 3, elective: true },
        { code: "PEC4", name: "PROFESSIONAL ELECTIVE IV", credit: 3, elective: true },
        { code: "PEC5", name: "PROFESSIONAL ELECTIVE V", credit: 3, elective: true },
        { code: "PEC6", name: "PROFESSIONAL ELECTIVE VI", credit: 3, elective: true },
        { code: "MNC2", name: "MANDATORY COURSE-II", credit: 0, ignore: true }
    ],
    7: [
        { code: "EC3711", name: "SUMMER INTERNSHIP", credit: 2 },
        { code: "GE3791", name: "HUMAN VALUES AND ETHICS", credit: 2 },
        { code: "MG3791", name: "ELECTIVE – MANAGEMENT", credit: 3, elective: true },
        { code: "OE2", name: "OPEN ELECTIVE – II", credit: 3, elective: true },
        { code: "OE3", name: "OPEN ELECTIVE – III", credit: 3, elective: true },
        { code: "OE4", name: "OPEN ELECTIVE – IV", credit: 3, elective: true }
    ],
    8: [
        { code: "EC3811", name: "PROJECT WORK / INTERNSHIP", credit: 10 }
    ]
};

// ----- EEE DEPARTMENT -----
const EEE_SUBJECTS = {
    1: [
        { code: "BS3171", name: "PHYSICS AND CHEMISTRY LABORATORY", credit: 2 },
        { code: "CY3151", name: "ENGINEERING CHEMISTRY", credit: 3 },
        { code: "GE3151", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING", credit: 3 },
        { code: "GE3152", name: "HERITAGE OF TAMIL", credit: 1 },
        { code: "GE3171", name: "PYTHON PROGRAMMING LABORATORY", credit: 2 },
        { code: "GE3172", name: "ENGLISH LABORATORY", credit: 1 },
        { code: "HS3152", name: "PROFESSIONAL ENGLISH 1", credit: 3 },
        { code: "MA3151", name: "MATRICES AND CALCULUS", credit: 4 },
        { code: "PH3151", name: "ENGINEERING PHYSICS", credit: 3 }
    ],
    2: [
        { code: "BE3255", name: "BASIC CIVIL AND MECHANICAL ENGINEERING", credit: 3 },
        { code: "EE3251", name: "ELECTRIC CIRCUIT ANALYSIS", credit: 4 },
        { code: "EE3271", name: "ELECTRIC CIRCUITS LABORATORY", credit: 2 },
        { code: "GE3251", name: "ENGINEERING GRAPHICS", credit: 4 },
        { code: "GE3252", name: "TAMILS AND TECHNOLOGY", credit: 1 },
        { code: "GE3271", name: "ENGINEERING PRACTICES LABORATORY", credit: 2 },
        { code: "GE3272", name: "COMMUNICATION LABORATORY", credit: 2 },
        { code: "HS3252", name: "PROFESSIONAL ENGLISH - II", credit: 2 },
        { code: "MA3251", name: "STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { code: "PH3202", name: "PHYSICS FOR ELECTRICAL ENGINEERING", credit: 3 }
    ],
    3: [
        { code: "CS3353", name: "C PROGRAMMING AND DATA STRUCTURES", credit: 3 },
        { code: "CS3362", name: "C PROGRAMMING AND DATA STRUCTURES LABORATORY", credit: 1.5 },
        { code: "EC3301", name: "ELECTRON DEVICES AND CIRCUITS", credit: 3 },
        { code: "EC3311", name: "ELECTRONIC DEVICES AND CIRCUITS LABORATORY", credit: 1.5 },
        { code: "EE3301", name: "ELECTROMAGNETIC FIELDS", credit: 4 },
        { code: "EE3302", name: "DIGITAL LOGIC CIRCUITS", credit: 3 },
        { code: "EE3303", name: "ELECTRICAL MACHINES - I", credit: 3 },
        { code: "EE3311", name: "ELECTRICAL MACHINES LABORATORY - I", credit: 1.5 },
        { code: "GE3361", name: "PROFESSIONAL DEVELOPMENT", credit: 1 },
        { code: "MA3303", name: "PROBABILITY AND COMPLEX FUNCTIONS", credit: 4 }
    ],
    4: [
        { code: "EE3401", name: "TRANSMISSION AND DISTRIBUTION", credit: 3 },
        { code: "EE3402", name: "LINEAR INTEGRATED CIRCUITS", credit: 3 },
        { code: "EE3403", name: "MEASUREMENTS AND INSTRUMENTATION", credit: 3 },
        { code: "EE3404", name: "MICROPROCESSOR AND MICROCONTROLLER", credit: 3 },
        { code: "EE3405", name: "ELECTRICAL MACHINES - II", credit: 3 },
        { code: "EE3411", name: "ELECTRICAL MACHINES LABORATORY - II", credit: 1.5 },
        { code: "EE3412", name: "LINEAR AND DIGITAL CIRCUITS LABORATORY", credit: 1.5 },
        { code: "EE3413", name: "MICROPROCESSOR AND MICROCONTROLLER LABORATORY", credit: 1.5 },
        { code: "GE3451", name: "ENVIRONMENTAL SCIENCES AND SUSTAINABILITY", credit: 2 }
    ],
    5: [
        { code: "EE3501", name: "POWER SYSTEM ANALYSIS", credit: 3 },
        { code: "EE3503", name: "CONTROL SYSTEMS", credit: 3 },
        { code: "EE3511", name: "POWER ELECTRONICS LABORATORY", credit: 1.5 },
        { code: "EE3512", name: "CONTROL AND INSTRUMENTATION LABORATORY", credit: 2 },
        { code: "EE3591", name: "POWER ELECTRONICS", credit: 3 },
        { code: "PEC1", name: "PROFESSIONAL ELECTIVE I", credit: 3, elective: true },
        { code: "PEC2", name: "PROFESSIONAL ELECTIVE II", credit: 3, elective: true },
        { code: "PEC3", name: "PROFESSIONAL ELECTIVE III", credit: 3, elective: true },
        { code: "MNC1", name: "MANDATORY COURSE-I", credit: 0, ignore: true }
    ],
    6: [
        { code: "EE3601", name: "PROTECTION AND SWITCHGEAR", credit: 3 },
        { code: "EE3602", name: "POWER SYSTEM OPERATION AND CONTROL", credit: 3 },
        { code: "EE3611", name: "POWER SYSTEM LABORATORY", credit: 1.5 },
        { code: "OE1", name: "OPEN ELECTIVE – I", credit: 3, elective: true },
        { code: "PEC4", name: "PROFESSIONAL ELECTIVE IV", credit: 3, elective: true },
        { code: "PEC5", name: "PROFESSIONAL ELECTIVE V", credit: 3, elective: true },
        { code: "PEC6", name: "PROFESSIONAL ELECTIVE VI", credit: 3, elective: true },
        { code: "MNC2", name: "MANDATORY COURSE-II", credit: 0, ignore: true }
    ],
    7: [
        { code: "EE3701", name: "HIGH VOLTAGE ENGINEERING", credit: 3 },
        { code: "GE3791", name: "HUMAN VALUES AND ETHICS", credit: 2 },
        { code: "MG3791", name: "ELECTIVE – MANAGEMENT", credit: 3, elective: true },
        { code: "OE2", name: "OPEN ELECTIVE – II", credit: 3, elective: true },
        { code: "OE3", name: "OPEN ELECTIVE – III", credit: 3, elective: true },
        { code: "OE4", name: "OPEN ELECTIVE – IV", credit: 3, elective: true },
        { code: "PEC7", name: "PROFESSIONAL ELECTIVE VII", credit: 3, elective: true }
    ],
    8: [
        { code: "EE3811", name: "PROJECT WORK / INTERNSHIP", credit: 10 }
    ]
};

// ----- MECH DEPARTMENT -----
const MECH_SUBJECTS = {
    1: [
        { code: "BS3171", name: "PHYSICS AND CHEMISTRY LABORATORY", credit: 2 },
        { code: "CY3151", name: "ENGINEERING CHEMISTRY", credit: 3 },
        { code: "GE3151", name: "PROBLEM SOLVING AND PYTHON PROGRAMMING", credit: 3 },
        { code: "GE3152", name: "HERITAGE OF TAMIL", credit: 1 },
        { code: "GE3171", name: "PYTHON PROGRAMMING LABORATORY", credit: 2 },
        { code: "GE3172", name: "ENGLISH LABORATORY", credit: 1 },
        { code: "HS3152", name: "PROFESSIONAL ENGLISH 1", credit: 3 },
        { code: "MA3151", name: "MATRICES AND CALCULUS", credit: 4 },
        { code: "PH3151", name: "ENGINEERING PHYSICS", credit: 3 }
    ],
    2: [
        { code: "BE3251", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", credit: 3 },
        { code: "BE3271", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY", credit: 2 },
        { code: "GE3251", name: "ENGINEERING GRAPHICS", credit: 4 },
        { code: "GE3252", name: "TAMILS AND TECHNOLOGY", credit: 1 },
        { code: "GE3271", name: "ENGINEERING PRACTICES LABORATORY", credit: 2 },
        { code: "GE3272", name: "COMMUNICATION LABORATORY", credit: 2 },
        { code: "HS3252", name: "PROFESSIONAL ENGLISH - II", credit: 2 },
        { code: "MA3251", name: "STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { code: "PH3251", name: "MATERIALS SCIENCE", credit: 3 }
    ],
    3: [
        { code: "CE3391", name: "FLUID MECHANICS AND MACHINERY", credit: 4 },
        { code: "GE3361", name: "PROFESSIONAL DEVELOPMENT", credit: 1 },
        { code: "MA3351", name: "TRANSFORMS AND PARTIAL DIFFERENTIAL EQUATIONS", credit: 4 },
        { code: "ME3351", name: "ENGINEERING MECHANICS", credit: 3 },
        { code: "ME3381", name: "COMPUTER AIDED MACHINE DRAWING", credit: 2 },
        { code: "ME3382", name: "MANUFACTURING TECHNOLOGY LABORATORY", credit: 2 },
        { code: "ME3391", name: "ENGINEERING THERMODYNAMICS", credit: 3 },
        { code: "ME3392", name: "ENGINEERING MATERIALS AND METALLURGY", credit: 3 },
        { code: "ME3393", name: "MANUFACTURING PROCESSES", credit: 3 }
    ],
    4: [
        { code: "CE3481", name: "STRENGTH OF MATERIALS AND FLUID MACHINERY LABORATORY", credit: 2 },
        { code: "CE3491", name: "STRENGTH OF MATERIALS", credit: 3 },
        { code: "GE3451", name: "ENVIRONMENTAL SCIENCES AND SUSTAINABILITY", credit: 2 },
        { code: "ME3451", name: "THERMAL ENGINEERING", credit: 4 },
        { code: "ME3461", name: "THERMAL ENGINEERING LABORATORY", credit: 2 },
        { code: "ME3491", name: "THEORY OF MACHINES", credit: 3 },
        { code: "ME3492", name: "HYDRAULICS AND PNEUMATICS", credit: 3 },
        { code: "ME3493", name: "MANUFACTURING TECHNOLOGY", credit: 3 }
    ],
    5: [
        { code: "ME3511", name: "SUMMER INTERNSHIP", credit: 1 },
        { code: "ME3581", name: "METROLOGY AND DYNAMICS LABORATORY", credit: 2 },
        { code: "ME3591", name: "DESIGN OF MACHINE ELEMENTS", credit: 4 },
        { code: "ME3592", name: "METROLOGY AND MEASUREMENTS", credit: 3 },
        { code: "PEC1", name: "PROFESSIONAL ELECTIVE I", credit: 3, elective: true },
        { code: "PEC2", name: "PROFESSIONAL ELECTIVE II", credit: 3, elective: true },
        { code: "PEC3", name: "PROFESSIONAL ELECTIVE III", credit: 3, elective: true },
        { code: "MNC1", name: "MANDATORY COURSE-I", credit: 0, ignore: true }
    ],
    6: [
        { code: "ME3681", name: "CAD/CAM LABORATORY", credit: 2 },
        { code: "ME3682", name: "HEAT TRANSFER LABORATORY", credit: 2 },
        { code: "ME3691", name: "HEAT AND MASS TRANSFER", credit: 4 },
        { code: "OE1", name: "OPEN ELECTIVE – I", credit: 3, elective: true },
        { code: "PEC4", name: "PROFESSIONAL ELECTIVE IV", credit: 3, elective: true },
        { code: "PEC5", name: "PROFESSIONAL ELECTIVE V", credit: 3, elective: true },
        { code: "PEC6", name: "PROFESSIONAL ELECTIVE VI", credit: 3, elective: true },
        { code: "PEC7", name: "PROFESSIONAL ELECTIVE VII", credit: 3, elective: true },
        { code: "MNC2", name: "MANDATORY COURSE-II", credit: 0, ignore: true }
    ],
    7: [
        { code: "GE3791", name: "HUMAN VALUES AND ETHICS", credit: 2 },
        { code: "GE3792", name: "INDUSTRIAL MANAGEMENT", credit: 3 },
        { code: "ME3711", name: "SUMMER INTERNSHIP", credit: 1 },
        { code: "ME3781", name: "MECHATRONICS AND IOT LABORATORY", credit: 2 },
        { code: "ME3791", name: "MECHATRONICS AND IOT", credit: 3 },
        { code: "ME3792", name: "COMPUTER INTEGRATED MANUFACTURING", credit: 3 },
        { code: "OE2", name: "OPEN ELECTIVE – II", credit: 3, elective: true },
        { code: "OE3", name: "OPEN ELECTIVE – III", credit: 3, elective: true },
        { code: "OE4", name: "OPEN ELECTIVE – IV", credit: 3, elective: true }
    ],
    8: [
        { code: "ME3811", name: "PROJECT WORK / INTERNSHIP", credit: 10 }
    ]
};

// ============================================
// MASTER DEPARTMENT DATABASE
// ============================================
const DEPARTMENTS = {
    it: {
        name: 'Information Technology',
        icon: 'fa-laptop-code',
        color: '#6c5ce7',
        subjects: IT_SUBJECTS
    },
    cse: {
        name: 'Computer Science',
        icon: 'fa-computer',
        color: '#00b894',
        subjects: CSE_SUBJECTS
    },
    aids: {
        name: 'AI & Data Science',
        icon: 'fa-robot',
        color: '#e84393',
        subjects: AIDS_SUBJECTS
    },
    ece: {
        name: 'Electronics & Communication',
        icon: 'fa-bolt',
        color: '#0984e3',
        subjects: ECE_SUBJECTS
    },
    eee: {
        name: 'Electrical & Electronics',
        icon: 'fa-microchip',
        color: '#fdcb6e',
        subjects: EEE_SUBJECTS
    },
    mech: {
        name: 'Mechanical Engineering',
        icon: 'fa-cogs',
        color: '#e17055',
        subjects: MECH_SUBJECTS
    }
};

// Grade points mapping
const GRADE_POINTS = {
    'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 0, 'U': 0
};

// Subjects that have D grade
const SUBJECTS_WITH_D = ['CS3492', 'CS3451', 'GE3451', 'EE3402', 'EC3451', 'ME3492'];

let currentDept = 'it';
let currentSemester = null;
let gpaChart = null;

// DOM Elements
const deptCards = {
    it: document.getElementById('dept-it'),
    cse: document.getElementById('dept-cse'),
    aids: document.getElementById('dept-aids'),
    ece: document.getElementById('dept-ece'),
    eee: document.getElementById('dept-eee'),
    mech: document.getElementById('dept-mech')
};

const semesterSelect = document.getElementById('semesterSelect');
const subjectsContainer = document.getElementById('subjectsContainer');
const subjectsGrid = document.getElementById('subjectsGrid');
const actionCenter = document.getElementById('actionCenter');
const calculateBtn = document.getElementById('calculateBtn');
const resultDashboard = document.getElementById('resultDashboard');
const gpaValue = document.getElementById('gpaValue');
const resultMeta = document.getElementById('resultMeta');
const semesterDisplay = document.getElementById('semesterDisplay');
const totalCreditsDisplay = document.getElementById('totalCreditsDisplay');
const electiveHint = document.getElementById('electiveHint');
const deptInfoContainer = document.getElementById('deptInfoContainer');
const uploadBtn = document.getElementById('uploadBtn');

// ============================================
// UTILITY FUNCTIONS
// ============================================
function shouldIgnoreSubject(code) {
    if (!code) return false;
    const upper = code.toUpperCase();
    return upper.startsWith('NM') || upper.startsWith('N') || upper.startsWith('MX');
}

function findSubjectCredit(code, department) {
    if (!code || !department) return 0;
    code = code.toUpperCase().trim();
    
    const deptData = DEPARTMENTS[department];
    if (!deptData) return 0;
    
    for (let sem = 1; sem <= 8; sem++) {
        const subjects = deptData.subjects[sem];
        if (subjects) {
            const found = subjects.find(s => s.code === code);
            if (found) return found.credit;
        }
    }
    return 3; // Unknown subject = 3 credits
}

function getGradeOptionsForSubject(subjectCode) {
    const baseOptions = ['O', 'A+', 'A', 'B+', 'B', 'C', 'U'];
    if (SUBJECTS_WITH_D.includes(subjectCode)) {
        const index = baseOptions.indexOf('U');
        if (index !== -1) {
            baseOptions.splice(index, 0, 'D');
        }
    }
    return baseOptions;
}

// ============================================
// DEPARTMENT SELECTION
// ============================================
function selectDepartment(dept) {
    currentDept = dept;
    
    Object.keys(deptCards).forEach(key => {
        deptCards[key].classList.remove('active');
    });
    deptCards[dept].classList.add('active');
    
    showDepartmentInfo(dept);
    
    semesterSelect.value = '';
    subjectsContainer.style.display = 'none';
    actionCenter.style.display = 'none';
    resultDashboard.classList.remove('show');
}

function showDepartmentInfo(dept) {
    const deptData = DEPARTMENTS[dept];
    const colors = {
        it: '#6c5ce7', cse: '#00b894', aids: '#e84393',
        ece: '#0984e3', eee: '#fdcb6e', mech: '#e17055'
    };
    
    const html = `
        <div class="dept-info" style="border-left-color: ${colors[dept]};">
            <i class="fas ${deptData.icon}" style="color: ${colors[dept]};"></i>
            <div>
                <h3>${deptData.name} · 2021 Regulation</h3>
                <p><i class="fas fa-check-circle" style="color: #10b981;"></i> All 8 semesters available</p>
            </div>
        </div>
    `;
    deptInfoContainer.innerHTML = html;
}

// ============================================
// RENDER SUBJECTS
// ============================================
function renderSubjects(semester) {
    if (!semester || !currentDept) return;
    
    const deptData = DEPARTMENTS[currentDept];
    const subjects = deptData.subjects[semester];
    if (!subjects) return;
    
    currentSemester = semester;
    semesterDisplay.textContent = `Semester ${semester} · ${deptData.name}`;
    
    let totalCredits = 0;
    let html = '';
    
    subjects.forEach(subject => {
        if (subject.ignore) return;
        
        const isElective = subject.elective || 
                          subject.code.includes('PEC') || 
                          subject.code.includes('OE') ||
                          subject.code.includes('MG');
        
        const creditValue = subject.credit || 0;
        totalCredits += creditValue;
        
        const gradeOptions = getGradeOptionsForSubject(subject.code);
        
        let badgesHtml = '';
        gradeOptions.forEach(grade => {
            badgesHtml += `<div class="grade-badge" data-grade="${grade}" data-subject="${subject.code}">${grade}</div>`;
        });
        
        html += `
            <div class="subject-card" data-subject-code="${subject.code}">
                <div class="subject-code">${subject.code}</div>
                <div class="subject-name">${subject.name}</div>
                <div class="subject-credit">
                    <i class="fas fa-weight-hanging"></i> ${creditValue} Cr
                </div>
                
                ${isElective ? `
                    <input type="text" class="elective-input" 
                           placeholder="Enter subject code (optional)" 
                           data-elective="true"
                           value="${!subject.code.includes('PEC') && !subject.code.includes('OE') && !subject.code.includes('MG') ? subject.code : ''}">
                ` : ''}
                
                <div class="grade-grid" data-subject="${subject.code}">
                    ${badgesHtml}
                </div>
            </div>
        `;
    });
    
    subjectsGrid.innerHTML = html;
    subjectsContainer.style.display = 'block';
    actionCenter.style.display = 'flex';
    totalCreditsDisplay.textContent = `Total: ${totalCredits}`;
    
    electiveHint.style.display = semester >= 5 ? 'flex' : 'none';
    
    attachGradeListeners();
}

// ============================================
// ATTACH GRADE LISTENERS
// ============================================
function attachGradeListeners() {
    document.querySelectorAll('.grade-badge').forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const gradeGrid = this.closest('.grade-grid');
            gradeGrid.querySelectorAll('.grade-badge').forEach(b => {
                b.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const subjectCard = this.closest('.subject-card');
            subjectCard.dataset.selectedGrade = this.dataset.grade;
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => { this.style.transform = ''; }, 100);
        });
    });
    
    document.querySelectorAll('.elective-input').forEach(input => {
        input.addEventListener('input', function() {
            const subjectCard = this.closest('.subject-card');
            if (this.value.trim() !== '') {
                subjectCard.dataset.customCode = this.value.trim().toUpperCase();
            } else {
                delete subjectCard.dataset.customCode;
            }
        });
    });
}

// ============================================
// GPA CALCULATION
// ============================================
function calculateGPA() {
    const subjectCards = document.querySelectorAll('.subject-card');
    
    let totalCreditPoints = 0;
    let totalCredits = 0;
    let hasArrear = false;
    let arrears = [];
    let noGrade = [];
    let ignoredSubjects = [];
    
    subjectCards.forEach(card => {
        let subjectCode = card.dataset.subjectCode;
        
        if (card.dataset.customCode) {
            subjectCode = card.dataset.customCode;
        }
        
        // Check if subject should be ignored
        if (shouldIgnoreSubject(subjectCode)) {
            ignoredSubjects.push(subjectCode);
            return;
        }
        
        const creditEl = card.querySelector('.subject-credit');
        const creditMatch = creditEl.textContent.match(/(\d+\.?\d*)/);
        let credit = creditMatch ? parseFloat(creditMatch[0]) : 0;
        
        if (card.querySelector('.elective-input')) {
            if (card.dataset.customCode) {
                const foundCredit = findSubjectCredit(card.dataset.customCode, currentDept);
                if (foundCredit > 0) credit = foundCredit;
            } else {
                credit = 3;
            }
        }
        
        const selectedBadge = card.querySelector('.grade-badge.active');
        
        if (!selectedBadge) {
            noGrade.push(subjectCode);
            return;
        }
        
        const grade = selectedBadge.dataset.grade;
        const gradePoint = GRADE_POINTS[grade] || 0;
        
        if (grade === 'U' || grade === 'D') {
            hasArrear = true;
            arrears.push(`${subjectCode} (${grade})`);
        }
        
        totalCreditPoints += credit * gradePoint;
        totalCredits += credit;
    });
    
    if (noGrade.length > 0) {
        showResult(`⚠️ Select grades for ${noGrade.length} subjects`, 'warning');
        return;
    }
    
    if (hasArrear) {
        showResult(`❌ Arrear: ${arrears.length} subject(s)`, 'arrear');
        gpaValue.textContent = '0.00';
        resultDashboard.classList.add('show');
        updateGaugeChart(0);
        return;
    }
    
    if (totalCredits === 0) {
        showResult('⚠️ No valid subjects', 'warning');
        return;
    }
    
    const gpa = totalCreditPoints / totalCredits;
    const roundedGPA = Math.round(gpa * 100) / 100;
    
    let message = `✅ Credits: ${totalCredits.toFixed(1)} | GPA: ${roundedGPA.toFixed(2)}`;
    if (ignoredSubjects.length > 0) {
        message += ` | Ignored: ${ignoredSubjects.length} NM/N/MX`;
    }
    
    gpaValue.textContent = roundedGPA.toFixed(2);
    showResult(message, 'success');
    resultDashboard.classList.add('show');
    updateGaugeChart(roundedGPA);
    animateNumber(0, roundedGPA, 800);
}

function animateNumber(start, end, duration) {
    const element = gpaValue;
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = current.toFixed(2);
    }, 16);
}

function showResult(message, type) {
    const colors = { success: '#10b981', arrear: '#ef4444', warning: '#f59e0b' };
    resultMeta.innerHTML = `<span style="color: ${colors[type] || '#6c5ce7'};"><i class="fas fa-circle"></i> ${message}</span>`;
}

function updateGaugeChart(gpa) {
    const ctx = document.getElementById('gpaMeter').getContext('2d');
    if (gpaChart) gpaChart.destroy();
    
    const colors = {
        it: '#6c5ce7', cse: '#00b894', aids: '#e84393',
        ece: '#0984e3', eee: '#fdcb6e', mech: '#e17055'
    };
    
    const percentage = (gpa / 10) * 100;
    
    gpaChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: [colors[currentDept] || '#6c5ce7', 'rgba(30, 33, 60, 0.3)'],
                borderWidth: 0,
                circumference: 270,
                rotation: 225
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });
}

// ============================================
// UPLOAD BUTTON HANDLER
// ============================================
function handleUpload() {
    if (!currentDept) {
        alert('Please select a department first');
        return;
    }
    
    // Store selected department and semester in session storage
    sessionStorage.setItem('selectedDepartment', currentDept);
    sessionStorage.setItem('selectedSemester', semesterSelect.value || '');
    
    // Redirect to automatic.html
    window.location.href = '/automatic';
}

// ============================================
// EVENT LISTENERS
// ============================================
deptCards.it.addEventListener('click', () => selectDepartment('it'));
deptCards.cse.addEventListener('click', () => selectDepartment('cse'));
deptCards.aids.addEventListener('click', () => selectDepartment('aids'));
deptCards.ece.addEventListener('click', () => selectDepartment('ece'));
deptCards.eee.addEventListener('click', () => selectDepartment('eee'));
deptCards.mech.addEventListener('click', () => selectDepartment('mech'));

semesterSelect.addEventListener('change', function(e) {
    if (e.target.value) {
        renderSubjects(e.target.value);
        resultDashboard.classList.remove('show');
    } else {
        subjectsContainer.style.display = 'none';
        actionCenter.style.display = 'none';
    }
});

calculateBtn.addEventListener('click', calculateGPA);

if (uploadBtn) {
    uploadBtn.addEventListener('click', handleUpload);
}

// Upload card click handler
const uploadCard = document.getElementById('uploadCard');
if (uploadCard) {
    uploadCard.addEventListener('click', handleUpload);
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    selectDepartment('it');
    
    if ('ontouchstart' in window) {
        document.documentElement.style.setProperty('--hover-scale', 'none');
    }
});