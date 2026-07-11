/* ============================================================
   BIO 004 Human Anatomy, Fall 2026 — 17-week semester + finals.
   Course schedule, source of truth for Mastery OS.

   Built to match the instructor's own master schedule (the same
   week-by-week structure used in Spring), moved onto the official
   Solano Fall 2026 calendar. Competency IDs are unchanged
   (competencies.js re-keyed to these 17 weeks), so resources.js
   and the recall cards keep working.

   >>> EXAM DATES ARE THE FIXED ANCHORS <<<
   Lecture Exams 1 to 4, Lab Practical Exams 1 to 5, and the
   Cumulative Final are placed on the same week + weekday as the
   instructor's schedule and are locked. Teaching material is
   arranged around them. Adjust topics freely; move an exam only
   on purpose.

   Solano Fall 2026 calendar used:
     First day of instruction ... Mon Aug 17, 2026
     Labor Day (campus closed) .. Mon Sep 7  (Week 4)
     Veterans Day (campus closed) Wed Nov 11 (Week 13)
     Thanksgiving break ......... Nov 25 to 29 (Week 15 loses Thu)
     Last day of instruction .... Fri Dec 11  (Week 17)
     Finals week ................ Dec 12 to 18

   NOTE ON LECTURE EXAMS: the app reads lecture exams from the
   'lectureMidterm' field, so each of the four lecture exams is
   carried there (one per week, never two in a week). The name is
   correct ('Lecture Exam 1' etc.); only the field key is reused so
   the 3-Day Cram and Gap Finder pull the right weeks.

   CONFIRM: meeting pattern (assumed lecture + lab on Tue/Thu),
   the exact Final Exam time slot, and whether any TBL days apply.
   ============================================================ */
window.BIO004_SCHEDULE = {
  course: 'BIO 004 Human Anatomy',
  term: 'Fall 2026',
  start: '2026-08-17',
  end: '2026-12-18',
  meets: 'Tuesday and Thursday (confirm lecture/lab day pattern)',
  highyield: 'Tissue types, heart blood flow, brachial plexus, skin layers, cranial nerves',
  rules: 'Required home study 16 to 20 h per week. Exam dates are fixed anchors: Lab Practicals in Weeks 4, 8, 11, 14, 17; Lecture Exams in Weeks 5, 8, 12, 15; Cumulative Final in finals week (about 50% since Lecture Exam 4, 50% cumulative). Labor Day Sep 7, Veterans Day Nov 11, Thanksgiving Nov 25 to 29. Week 15 loses its Thursday to Thanksgiving.',
  weeks: [
    { n:1, start:'2026-08-17', end:'2026-08-21', title:'Introduction and the Language of Anatomy',
      lecture:['Introduction to anatomy','The language of anatomy','Structural hierarchy','Positional terminology'],
      lab:['Introduction and lab safety','Anatomical terminology','The microscope'],
      labExam:null, tbl:null, note:'Text Ch 1.' },

    { n:2, start:'2026-08-24', end:'2026-08-28', title:'Cells and Tissues I',
      lecture:['Cells, structure and function','Epithelial tissue','Cell junctions','Endocrine and exocrine glands','Connective tissue'],
      lab:['Histology: epithelium','Histology: connective tissue'],
      labExam:null, tbl:null, note:'Text Ch 2 and 4.' },

    { n:3, start:'2026-08-31', end:'2026-09-04', title:'Tissues II and the Integument',
      lecture:['Muscle tissue','Nervous tissue','Integumentary system'],
      lab:['Histology: muscle tissue','Histology: nervous tissue','Histology: blood'],
      labExam:null, tbl:null, note:'Text Ch 4 and 5.' },

    { n:4, start:'2026-09-07', end:'2026-09-11', title:'Bone Tissue and the Axial Skeleton',
      lecture:['Cartilage and bone architecture','Bone development and repair','Axial skeleton'],
      lab:['Histology: integumentary system'],
      labExam:{ name:'Lab Practical Exam 1', date:'2026-09-10', covers:'Weeks 1 to 4' },
      tbl:null, note:'Labor Day Mon Sep 7, campus closed. Lab Practical 1 Thu Sep 10.' },

    { n:5, start:'2026-09-14', end:'2026-09-18', title:'Appendicular Skeleton',
      lecture:['Appendicular skeleton'],
      lab:['Axial skeleton: skull','Axial skeleton: vertebrae and ribs'],
      labExam:null,
      lectureMidterm:{ name:'Lecture Exam 1', date:'2026-09-15', covers:'Weeks 1 to 4' },
      tbl:null, note:'Lecture Exam 1 Tue Sep 15 (Ch 1, 2, 4, 5, 6).' },

    { n:6, start:'2026-09-21', end:'2026-09-25', title:'Joints and Muscle Structure',
      lecture:['Classification and structure of joints','Selected synovial joints','Muscle: structure and sarcomeres'],
      lab:['Upper extremity and pectoral girdle'],
      labExam:null, tbl:null, note:'Text Ch 9 and 10.' },

    { n:7, start:'2026-09-28', end:'2026-10-02', title:'Muscle Mechanics and Endocrine',
      lecture:['Muscle: fascicle arrangement and lever systems','The endocrine system'],
      lab:['Lower extremity and pelvic girdle','Selected synovial joints'],
      labExam:null, tbl:null, note:'Text Ch 11 and 17.' },

    { n:8, start:'2026-10-05', end:'2026-10-09', title:'Blood; Practical 2 and Lecture Exam 2',
      lecture:['Blood: composition, formation, and disorders'],
      lab:['Thorax: heart and major vessels','Muscles of the head, neck, and shoulder'],
      labExam:{ name:'Lab Practical Exam 2', date:'2026-10-06', covers:'Weeks 5 to 7' },
      lectureMidterm:{ name:'Lecture Exam 2', date:'2026-10-08', covers:'Weeks 5 to 8' },
      tbl:null, note:'Lab Practical 2 Tue Oct 6. Lecture Exam 2 Thu Oct 8 (Ch 7, 8, 9, 10, 11).' },

    { n:9, start:'2026-10-12', end:'2026-10-16', title:'The Heart',
      lecture:['Heart structures and valves','Cardiac muscle tissue','Pathway of blood'],
      lab:['Anterior torso and arm muscles'],
      labExam:null, tbl:null, note:'Text Ch 19.' },

    { n:10, start:'2026-10-19', end:'2026-10-23', title:'Cardiac Conduction and Blood Vessels',
      lecture:['Cardiac conduction system and disorders','Blood vessels: structure and types','Blood vessels: disorders and fetal circulation'],
      lab:['Posterior torso and arm muscles','Anterior forearm muscles'],
      labExam:null, tbl:null, note:'Text Ch 19 and 20.' },

    { n:11, start:'2026-10-26', end:'2026-10-30', title:'Lymphatic and Respiratory Systems',
      lecture:['Lymphatic system','Respiratory system'],
      lab:['Posterior forearm muscles','Histology of blood vessels'],
      labExam:{ name:'Lab Practical Exam 3', date:'2026-10-29', covers:'Weeks 8 to 11' },
      tbl:null, note:'Lab Practical 3 Thu Oct 29.' },

    { n:12, start:'2026-11-02', end:'2026-11-06', title:'Digestive System I; Lecture Exam 3',
      lecture:['Digestive system: alimentary canal and accessory organs'],
      lab:['Thoracic anatomy: respiration','Histology of the trachea and lungs','Hip and anterior thigh','The leg'],
      labExam:null,
      lectureMidterm:{ name:'Lecture Exam 3', date:'2026-11-03', covers:'Weeks 8 to 11' },
      tbl:null, note:'Lecture Exam 3 Tue Nov 3 (Ch 17, 18, 19, 20, 21).' },

    { n:13, start:'2026-11-09', end:'2026-11-13', title:'Digestive II and Urinary System',
      lecture:['Digestive system: alimentary canal and accessory organs','Urinary system: kidneys, ureters, bladder, urethra'],
      lab:['Abdominal wall and viscera I','Abdominal wall and viscera II'],
      labExam:null, tbl:null, note:'Veterans Day Wed Nov 11, campus closed (Tue/Thu classes meet). Text Ch 23 and 24.' },

    { n:14, start:'2026-11-16', end:'2026-11-20', title:'Reproductive Systems; Practical 4',
      lecture:['Reproductive system: male','Reproductive system: female','Reproductive system: labor and delivery'],
      lab:['Abdominal cavity blood vessels','Histology of the alimentary canal and accessory organs'],
      labExam:{ name:'Lab Practical Exam 4', date:'2026-11-19', covers:'Weeks 12 to 14' },
      tbl:null, note:'Lab Practical 4 Thu Nov 19. Text Ch 25.' },

    { n:15, start:'2026-11-23', end:'2026-11-27', title:'Nervous System Foundations; Lecture Exam 4',
      lecture:['Nervous system: functional organization and nervous tissue','Gross anatomy and neuronal integration'],
      lab:['Pelvic anatomy I: urinary system','Histology of the urinary system','Pelvic anatomy II: male reproductive','Pelvic anatomy III: female reproductive','Histology of the reproductive system'],
      labExam:null,
      lectureMidterm:{ name:'Lecture Exam 4', date:'2026-11-24', covers:'Weeks 12 to 14' },
      tbl:null, note:'Lecture Exam 4 Tue Nov 24 (Ch 22, 23, 24, 25). Thanksgiving Thu Nov 26 to Fri Nov 27, NO CLASS. This lab-heavy week loses its Thursday, move or compress the pelvic labs.' },

    { n:16, start:'2026-11-30', end:'2026-12-04', title:'Central Nervous System',
      lecture:['CNS: the brain and spinal cord','CNS: meninges and CSF'],
      lab:['Brain: meninges, ventricles, and lobes','Brainstem and cranial nerves','Histology of the nervous system'],
      labExam:null, tbl:null, note:'Heaviest new-work week (whole CNS). Text Ch 13 and 14.' },

    { n:17, start:'2026-12-07', end:'2026-12-11', title:'Peripheral and Autonomic Nervous Systems; Practical 5',
      lecture:['Peripheral nervous system','Autonomic nervous system'],
      lab:['Spinal cord and spinal nerves','Autonomic nervous system'],
      labExam:{ name:'Lab Practical Exam 5', date:'2026-12-10', covers:'Weeks 15 to 17' },
      tbl:null, note:'Last content week. Lab Practical 5 Thu Dec 10. Last day of instruction Fri Dec 11. Text Ch 15.' },

    { n:18, start:'2026-12-14', end:'2026-12-18', title:'Finals Week',
      lecture:[], lab:null, labExam:null,
      lectureMidterm:{ name:'Cumulative Final Exam', date:'2026-12-17', covers:'Weeks 1 to 17' },
      tbl:null, note:'Cumulative Lecture Final, about 50% material since Lecture Exam 4 and 50% from Lecture Exams 1 to 4. CONFIRM the official finals time slot (Spring ran Thursday 8 to 10 am).' }
  ]
};
