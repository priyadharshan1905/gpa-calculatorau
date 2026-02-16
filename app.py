"""
Flask backend for Anna University GPA calculator
OCR Extraction + Complete 6 Department Database
ALL FILES IN SAME FOLDER - NO TEMPLATES SUBFOLDER
"""

from __future__ import annotations
import os, re, json
from typing import Dict, List, Tuple, Optional
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import numpy as np
import pandas as pd
import cv2
import pytesseract

# --- Configuration ---
TESSERACT_CMD = os.getenv("TESSERACT_CMD")
if TESSERACT_CMD:
    pytesseract.pytesseract.tesseract_cmd = TESSERACT_CMD

app = Flask(__name__)
CORS(app)
app.config["MAX_CONTENT_LENGTH"] = 8 * 1024 * 1024

# ============================================
# COMPLETE SUBJECT DATABASE - ALL 6 DEPARTMENTS
# ============================================

# ----- IT DEPARTMENT -----
IT_SUBJECTS = {
    "1": {
        "BS3171": 2, "CY3151": 3, "GE3151": 3, "GE3152": 1, "GE3171": 2,
        "GE3172": 1, "HS3152": 3, "MA3151": 4, "PH3151": 3
    },
    "2": {
        "BE3251": 3, "CS3251": 3, "CS3271": 2, "GE3251": 4, "GE3252": 1,
        "GE3271": 2, "GE3272": 2, "HS3252": 2, "MA3251": 4, "PH3256": 3
    },
    "3": {
        "CD3281": 2, "CD3291": 3, "CS3351": 4, "CS3352": 3, "CS3361": 2,
        "CS3381": 1.5, "CS3391": 3, "GE3361": 1, "MA3354": 4
    },
    "4": {
        "CS3451": 3, "CS3452": 3, "CS3461": 1.5, "CS3481": 1.5, "CS3491": 4,
        "CS3492": 3, "GE3451": 2, "IT3401": 4
    },
    "5": {
        "CS3551": 3, "CS3591": 4, "CS3691": 4, "IT3501": 3, "IT3511": 2
    },
    "6": {
        "CCS356": 4, "IT3681": 1.5
    },
    "7": {
        "GE3791": 2, "IT3711": 2
    },
    "8": {
        "IT3811": 10
    }
}

# ----- CSE DEPARTMENT -----
CSE_SUBJECTS = {
    "1": {
        "BS3171": 2, "CY3151": 3, "GE3151": 3, "GE3152": 1, "GE3171": 2,
        "GE3172": 1, "HS3152": 3, "MA3151": 4, "PH3151": 3
    },
    "2": {
        "BE3251": 3, "CS3251": 3, "CS3271": 2, "GE3251": 4, "GE3252": 1,
        "GE3271": 2, "GE3272": 2, "HS3252": 2, "MA3251": 4, "PH3256": 3
    },
    "3": {
        "CS3301": 3, "CS3311": 1.5, "CS3351": 4, "CS3352": 3, "CS3361": 2,
        "CS3381": 1.5, "CS3391": 3, "GE3361": 1, "MA3354": 4
    },
    "4": {
        "CS3401": 4, "CS3451": 3, "CS3452": 3, "CS3461": 1.5, "CS3481": 1.5,
        "CS3491": 4, "CS3492": 3, "GE3451": 2
    },
    "5": {
        "CB3491": 3, "CS3501": 4, "CS3551": 3, "CS3591": 4
    },
    "6": {
        "CCS356": 4, "CS3691": 4
    },
    "7": {
        "CS3711": 2, "GE3791": 2
    },
    "8": {
        "CS3811": 10
    }
}

# ----- AIDS DEPARTMENT -----
AIDS_SUBJECTS = {
    "1": {
        "BS3171": 2, "CY3151": 3, "GE3151": 3, "GE3152": 1, "GE3171": 2,
        "GE3172": 1, "HS3152": 3, "MA3151": 4, "PH3151": 3
    },
    "2": {
        "AD3251": 3, "AD3271": 2, "BE3251": 3, "GE3251": 4, "GE3252": 1,
        "GE3271": 2, "GE3272": 2, "HS3252": 2, "MA3251": 4, "PH3256": 3
    },
    "3": {
        "AD3301": 4, "AD3311": 1.5, "AD3351": 4, "AD3381": 1.5, "AD3391": 3,
        "AL3391": 3, "CS3351": 4, "GE3361": 1, "MA3354": 4
    },
    "4": {
        "AD3411": 2, "AD3461": 2, "AD3491": 3, "AL3451": 3, "AL3452": 4,
        "CS3591": 4, "GE3451": 2, "MA3391": 4
    },
    "5": {
        "AD3501": 3, "AD3511": 2, "AD3512": 2, "CS3334": 3, "CS3551": 3,
        "CW3551": 3
    },
    "6": {
        "CS3691": 4
    },
    "7": {
        "GE3791": 2
    },
    "8": {
        "AD3811": 10
    }
}

# ----- ECE DEPARTMENT -----
ECE_SUBJECTS = {
    "1": {
        "BS3171": 2, "CY3151": 3, "GE3151": 3, "GE3152": 1, "GE3171": 2,
        "GE3172": 1, "HS3152": 3, "MA3151": 4, "PH3151": 3
    },
    "2": {
        "BE3254": 3, "EC3251": 4, "EC3271": 1, "GE3251": 4, "GE3252": 1,
        "GE3271": 2, "GE3272": 2, "HS3252": 2, "MA3251": 4, "PH3254": 3
    },
    "3": {
        "CS3353": 3, "CS3362": 1.5, "EC3351": 3, "EC3352": 4, "EC3353": 3,
        "EC3354": 4, "EC3361": 1.5, "GE3361": 1, "MA3355": 4
    },
    "4": {
        "EC3401": 4, "EC3451": 3, "EC3452": 3, "EC3461": 1.5, "EC3462": 1.5,
        "EC3491": 3, "EC3492": 4, "GE3451": 2
    },
    "5": {
        "EC3501": 4, "EC3551": 3, "EC3552": 3, "EC3561": 2
    },
    "6": {
        "CS3491": 4, "ET3491": 4
    },
    "7": {
        "EC3711": 2, "GE3791": 2
    },
    "8": {
        "EC3811": 10
    }
}

# ----- EEE DEPARTMENT -----
EEE_SUBJECTS = {
    "1": {
        "BS3171": 2, "CY3151": 3, "GE3151": 3, "GE3152": 1, "GE3171": 2,
        "GE3172": 1, "HS3152": 3, "MA3151": 4, "PH3151": 3
    },
    "2": {
        "BE3255": 3, "EE3251": 4, "EE3271": 2, "GE3251": 4, "GE3252": 1,
        "GE3271": 2, "GE3272": 2, "HS3252": 2, "MA3251": 4, "PH3202": 3
    },
    "3": {
        "CS3353": 3, "CS3362": 1.5, "EC3301": 3, "EC3311": 1.5, "EE3301": 4,
        "EE3302": 3, "EE3303": 3, "EE3311": 1.5, "GE3361": 1, "MA3303": 4
    },
    "4": {
        "EE3401": 3, "EE3402": 3, "EE3403": 3, "EE3404": 3, "EE3405": 3,
        "EE3411": 1.5, "EE3412": 1.5, "EE3413": 1.5, "GE3451": 2
    },
    "5": {
        "EE3501": 3, "EE3503": 3, "EE3511": 1.5, "EE3512": 2, "EE3591": 3
    },
    "6": {
        "EE3601": 3, "EE3602": 3, "EE3611": 1.5
    },
    "7": {
        "EE3701": 3, "GE3791": 2
    },
    "8": {
        "EE3811": 10
    }
}

# ----- MECH DEPARTMENT -----
MECH_SUBJECTS = {
    "1": {
        "BS3171": 2, "CY3151": 3, "GE3151": 3, "GE3152": 1, "GE3171": 2,
        "GE3172": 1, "HS3152": 3, "MA3151": 4, "PH3151": 3
    },
    "2": {
        "BE3251": 3, "BE3271": 2, "GE3251": 4, "GE3252": 1, "GE3271": 2,
        "GE3272": 2, "HS3252": 2, "MA3251": 4, "PH3251": 3
    },
    "3": {
        "CE3391": 4, "GE3361": 1, "MA3351": 4, "ME3351": 3, "ME3381": 2,
        "ME3382": 2, "ME3391": 3, "ME3392": 3, "ME3393": 3
    },
    "4": {
        "CE3481": 2, "CE3491": 3, "GE3451": 2, "ME3451": 4, "ME3461": 2,
        "ME3491": 3, "ME3492": 3, "ME3493": 3
    },
    "5": {
        "ME3511": 1, "ME3581": 2, "ME3591": 4, "ME3592": 3
    },
    "6": {
        "ME3681": 2, "ME3682": 2, "ME3691": 4
    },
    "7": {
        "GE3791": 2, "GE3792": 3, "ME3711": 1, "ME3781": 2, "ME3791": 3, "ME3792": 3
    },
    "8": {
        "ME3811": 10
    }
}

# ----- MASTER DEPARTMENT DICTIONARY -----
DEPARTMENT_SUBJECTS = {
    "it": IT_SUBJECTS,
    "cse": CSE_SUBJECTS,
    "aids": AIDS_SUBJECTS,
    "ece": ECE_SUBJECTS,
    "eee": EEE_SUBJECTS,
    "mech": MECH_SUBJECTS
}

# Grade points mapping
GRADE_POINTS = {
    "10": 10,  # O
    "9": 9,    # A+
    "8": 8,    # A
    "7": 7,    # B+
    "6": 6,    # B
    "5": 5,    # C
    "0": 0     # F (Fail)
}

# Grade synonyms for OCR
GRADE_SYNONYMS = {
    "O": "10",
    "A+": "9", 
    "A": "8",
    "B+": "7",
    "B": "6",
    "C": "5",
    "D": "0",
    "U": "0",
    "F": "0",
    "RA": "0",  # Reappear
    "AB": "0",  # Absent
    "WH": "0"   # Withheld
}

# Regex patterns
SUBJECT_CODE_RE = re.compile(r"^[A-Z]{2,4}\d{3,4}$")
SEM_VAL_RE = re.compile(r"^(0?[1-9]|10)$")

# ============================================
# OCR FUNCTIONS - SUBJECT CODE EXTRACTION KEPT EXACTLY SAME
# GRADE EXTRACTION FIXED
# ============================================

def read_image_from_werkzeug(file) -> np.ndarray:
    in_mem = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(in_mem, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("Unsupported or corrupted image. Please upload PNG/JPG/JPEG.")
    return img

def preprocess_for_ocr(img_bgr: np.ndarray) -> np.ndarray:
    gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
    scale = 1.5 if min(gray.shape[:2]) < 1200 else 1.2
    gray = cv2.resize(gray, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
    gray = cv2.bilateralFilter(gray, 11, 15, 15)
    thr = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (2, 2))
    thr = cv2.morphologyEx(thr, cv2.MORPH_CLOSE, kernel, iterations=1)
    return thr

def tesseract_words(img: np.ndarray) -> pd.DataFrame:
    custom_oem_psm_config = r"--oem 1 --psm 6"
    whitelist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/-"
    config = f'{custom_oem_psm_config} -c tessedit_char_whitelist="{whitelist}"'
    data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DATAFRAME, lang="eng", config=config)
    if data is None or data.empty:
        return pd.DataFrame(columns=["text", "conf", "left", "top", "width", "height", "line_num", "block_num", "par_num"])
    df = data.dropna(subset=["text"]).copy()
    df["text"] = df["text"].astype(str).str.strip()
    df["conf"] = pd.to_numeric(df["conf"], errors="coerce").fillna(-1).astype(int)
    df = df[df["text"] != ""]
    return df

def extract_semester_global(df: pd.DataFrame) -> Optional[str]:
    up = df["text"].str.upper()
    sem_rows = df[up.str.contains(r"\bSEM\b|\bSEMESTER\b", regex=True, na=False)]
    candidates = []
    def find_near(rows):
        for _, r in rows.iterrows():
            cx, cy = int(r.left + r.width // 2), int(r.top + r.height // 2)
            near = df[df.left.between(cx - 180, cx + 180) & df.top.between(cy - 60, cy + 60)]
            for t in near["text"].astype(str):
                t2 = t.strip()
                if SEM_VAL_RE.fullmatch(t2):
                    candidates.append(str(int(t2)))
    if not sem_rows.empty:
        find_near(sem_rows)
    if not candidates:
        for _, group in df.groupby(["block_num", "par_num", "line_num"]):
            joined = " ".join(group["text"].astype(str)).upper()
            if "SEM" in joined or "SEMESTER" in joined:
                for tok in group["text"].astype(str):
                    if SEM_VAL_RE.fullmatch(tok.strip()):
                        candidates.append(str(int(tok)))
    return candidates[0] if candidates else None

def normalize_grade(g: str) -> Optional[str]:
    """Convert OCR grade text to grade point"""
    g = (g or "").strip().upper().replace(" ", "")
    if not g:
        return None
    
    # Direct grade points
    if g in ["10", "9", "8", "7", "6", "5", "0"]:
        return g
    
    # Letter grades to points
    if g in GRADE_SYNONYMS:
        return GRADE_SYNONYMS[g]
    
    # Handle common OCR variations
    if g == "APLUS" or g == "A PLUS":
        return "9"
    if g == "BPLUS" or g == "B PLUS":
        return "7"
    if g == "O" or g == "0":  # OCR might read O as 0
        return "10"
    
    return None

def find_rows_subjects_and_grades(df: pd.DataFrame) -> List[Dict]:
    """Find subjects and their grades - SUBJECT CODE LOGIC KEPT EXACTLY SAME, GRADE LOGIC FIXED"""
    rows = []
    
    # Group by line (approximate vertical position)
    lines = []
    current_line = []
    current_top = None
    
    df_sorted = df.sort_values(["top", "left"])
    
    for _, row in df_sorted.iterrows():
        if current_top is None or abs(row.top - current_top) < 30:
            current_line.append(row)
            if current_top is None:
                current_top = row.top
        else:
            lines.append(sorted(current_line, key=lambda x: x.left))
            current_line = [row]
            current_top = row.top
    
    if current_line:
        lines.append(sorted(current_line, key=lambda x: x.left))
    
    # Process each line
    for line in lines:
        # Find subject codes in this line (SAME AS BEFORE)
        subject_codes = []
        grade_values = []
        
        for item in line:
            text = item["text"].strip().upper().replace(" ", "")
            
            # Subject code detection (EXACTLY SAME)
            if SUBJECT_CODE_RE.match(text):
                subject_codes.append({
                    "code": text,
                    "left": item["left"],
                    "top": item["top"],
                    "width": item["width"],
                    "height": item["height"]
                })
            
            # Grade detection (FIXED)
            # Look for common grade patterns
            grade_text = item["text"].strip().upper()
            grade_point = normalize_grade(grade_text)
            if grade_point:
                grade_values.append({
                    "grade": grade_text,
                    "grade_point": grade_point,
                    "left": item["left"],
                    "top": item["top"]
                })
        
        # Match subject codes with closest grade to the right
        for subject in subject_codes:
            best_grade = None
            min_distance = float('inf')
            
            for grade in grade_values:
                # Grade should be to the right of subject code
                if grade["left"] > subject["left"]:
                    distance = grade["left"] - subject["left"]
                    # Also consider vertical alignment
                    v_distance = abs(grade["top"] - subject["top"])
                    if v_distance < 50 and distance < min_distance:
                        min_distance = distance
                        best_grade = grade["grade"]
            
            rows.append({
                "subject_code": subject["code"],
                "grade": best_grade
            })
    
    return rows

# ============================================
# GPA CALCULATION FUNCTION
# ============================================

def should_ignore_subject(code: str) -> bool:
    """Check if subject should be ignored (NM, N, MX prefixes)"""
    if not code:
        return False
    code_upper = code.upper()
    return code_upper.startswith("NM") or code_upper.startswith("N") or code_upper.startswith("MX")

def calculate_gpa(user_data: dict, department: str) -> dict:
    semester = user_data.get("semester", "4")
    subjects = user_data.get("subjects", [])
    
    # Get department subject database
    dept_subjects = DEPARTMENT_SUBJECTS.get(department, IT_SUBJECTS)
    semester_subjects = dept_subjects.get(semester, {})
    
    total_credit_points = 0
    total_credits = 0
    has_arrear = False
    invalid_subjects = []
    ignored_subjects = []
    details = []
    
    # First pass: check for arrears (F/U grades = 0)
    for subject in subjects:
        grade = subject.get("grade", "")
        if grade == "0":
            has_arrear = True
            break
    
    if has_arrear:
        return {
            "success": False,
            "message": "Arrear Found! You have failed in one or more subjects.",
            "gpa": 0,
            "details": []
        }
    
    # Calculate GPA for each subject
    for subject in subjects:
        subject_code = subject.get("subject_code", "").upper().strip()
        grade = subject.get("grade", "")
        
        # Skip empty subject codes
        if not subject_code:
            continue
        
        # Check if subject should be ignored (NM, N, MX)
        if should_ignore_subject(subject_code):
            ignored_subjects.append(subject_code)
            details.append({
                "subject_code": subject_code,
                "credits": 0,
                "grade": grade if grade else "N/A",
                "note": f"Ignored ({subject_code[:2]} prefix - excluded)"
            })
            continue
        
        # Get credit value for the subject
        credits = 0
        note = ""
        
        # Check if subject exists in department database
        if subject_code in semester_subjects:
            credits = semester_subjects[subject_code]
            note = "Core subject"
        else:
            # Unknown subject code - assume 3 credits (elective)
            credits = 3
            note = "Unknown subject - assumed 3 credits"
        
        if not grade:
            details.append({
                "subject_code": subject_code,
                "credits": credits,
                "grade": "N/A",
                "note": "Grade not provided - " + note
            })
            continue
        
        try:
            # Convert letter grade to points if needed
            if grade in GRADE_SYNONYMS:
                grade_point = float(GRADE_SYNONYMS[grade])
            else:
                grade_point = float(grade)
            
            if grade_point not in GRADE_POINTS.values():
                raise ValueError("Invalid grade point")
        except:
            details.append({
                "subject_code": subject_code,
                "credits": credits,
                "grade": grade,
                "note": "Invalid grade format"
            })
            continue
        
        # Add to totals
        weighted_points = credits * grade_point
        total_credit_points += weighted_points
        total_credits += credits
        
        details.append({
            "subject_code": subject_code,
            "credits": credits,
            "grade": grade,
            "grade_point": grade_point,
            "weighted_points": round(weighted_points, 2),
            "note": note
        })
    
    # Check if we have any valid subjects
    if total_credits == 0:
        return {
            "success": False,
            "message": "No valid subjects found for calculation.",
            "gpa": 0,
            "details": details,
            "ignored_subjects": ignored_subjects
        }
    
    # Calculate GPA
    gpa = total_credit_points / total_credits if total_credits > 0 else 0
    
    message_parts = []
    if ignored_subjects:
        message_parts.append(f"Ignored {len(ignored_subjects)} NM/N/MX subjects")
    
    return {
        "success": True,
        "message": "GPA calculated successfully. " + " | ".join(message_parts) if message_parts else "GPA calculated successfully.",
        "gpa": round(gpa, 2),
        "total_credits": round(total_credits, 2),
        "total_credit_points": round(total_credit_points, 2),
        "details": details,
        "ignored_subjects": ignored_subjects
    }

# ============================================
# ROUTES - ALL FILES IN SAME FOLDER
# ============================================

@app.route("/")
def home():
    return send_from_directory('.', 'index.html')

@app.route("/automatic")
def automatic():
    return send_from_directory('.', 'automatic.html')

@app.route("/style.css")
def serve_css():
    return send_from_directory('.', 'style.css')

@app.route("/script.js")
def serve_js():
    return send_from_directory('.', 'script.js')

@app.route("/api/health", methods=["GET"])
def health():
    total_subjects = 0
    for dept in DEPARTMENT_SUBJECTS.values():
        for sem in dept.values():
            total_subjects += len(sem)
    return jsonify({
        "ok": True,
        "departments": list(DEPARTMENT_SUBJECTS.keys()),
        "subjects_loaded": total_subjects
    })

@app.route("/api/extract", methods=["POST"])
def api_extract():
    if "file" not in request.files:
        return jsonify({"error": "Upload a file field named 'file'"}), 400
    
    f = request.files["file"]
    if f.filename == "":
        return jsonify({"error": "Empty filename"}), 400
    
    # Get department from request
    department = request.form.get("department", "it")
    
    try:
        img = read_image_from_werkzeug(f)
        proc = preprocess_for_ocr(img)
        df = tesseract_words(proc)
        global_sem = extract_semester_global(df)
        rows = find_rows_subjects_and_grades(df)
        
        # Format for frontend
        out_rows = []
        for r in rows:
            subject_code = r.get("subject_code", "")
            grade = r.get("grade", "")
            
            # Convert grade points back to letters for display if needed
            if grade == "10":
                formatted_grade = "O"
            elif grade == "9":
                formatted_grade = "A+"
            elif grade == "8":
                formatted_grade = "A"
            elif grade == "7":
                formatted_grade = "B+"
            elif grade == "6":
                formatted_grade = "B"
            elif grade == "5":
                formatted_grade = "C"
            elif grade == "0":
                formatted_grade = "U"
            else:
                formatted_grade = grade  # Keep as is (might be letter grade)
            
            # Mark ignored subjects
            is_ignored = should_ignore_subject(subject_code)
            
            out_rows.append({
                "subject_code": subject_code,
                "grade": formatted_grade,
                "is_ignored": is_ignored
            })
        
        return jsonify({
            "semester_detected": global_sem,
            "extracted_rows": out_rows,
            "note": "Review and edit subjects before calculation. NM/N/MX subjects will be ignored."
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/compute", methods=["POST"])
def api_compute():
    try:
        payload = request.get_json(force=True)
        semester = payload.get("semester", "4")
        department = payload.get("department", "it")
        rows = payload.get("rows", [])
        
        # Clean and validate data
        subjects = []
        for r in rows:
            subject_code = (r.get("subject_code") or "").strip().upper()
            grade = (r.get("grade") or "").strip().upper()
            
            # Skip empty rows
            if not subject_code and not grade:
                continue
            
            # Convert letter grades to points if needed
            if grade in GRADE_SYNONYMS:
                grade = GRADE_SYNONYMS[grade]
            
            subjects.append({
                "subject_code": subject_code,
                "grade": grade
            })
        
        # Prepare user data for calculation
        user_data = {
            "semester": semester,
            "subjects": subjects
        }
        
        # Calculate GPA using the correct logic with department
        result = calculate_gpa(user_data, department)
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# ============================================
# MAIN
# ============================================
if __name__ == "__main__":
    print("=" * 60)
    print("Anna University GPA Calculator - ALL 6 DEPARTMENTS")
    print("=" * 60)
    print("✅ All files in same folder - No subfolders needed")
    print("=" * 60)
    dept_counts = {dept: sum(len(sem) for sem in subjects.values()) for dept, subjects in DEPARTMENT_SUBJECTS.items()}
    for dept, count in dept_counts.items():
        print(f"📚 {dept.upper()}: {count} subjects")
    print("=" * 60)
    print("⚠️  Subjects starting with NM, N, MX will be IGNORED")
    print("⚠️  Unknown subject codes = 3 credits (elective assumption)")
    print("=" * 60)
    print("🚀 Server running at http://localhost:5000")
    print("📸 OCR Upload at http://localhost:5000/automatic")
    print("=" * 60)
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=True)