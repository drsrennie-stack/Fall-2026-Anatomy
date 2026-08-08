/* ============================================================
   BIO 004 Human Anatomy, Fall 2026, Solano Community College
   Vacaville Center. Schedule reference for the three sections.

   REPLACES the earlier version of this file, which described four
   lecture exams plus five lab practicals. That structure was wrong.
   The real structure is FIVE exams per section, each with a lecture
   part and a lab practical part.

   ------------------------------------------------------------
   READ THIS BEFORE WIRING THIS FILE INTO A PAGE
   ------------------------------------------------------------
   This file deliberately does NOT define window.BIO004_SCHEDULE.

   mastery-os-fall-2026.html resolves its schedule in this order:

     store.get('mos-schedule')
       || window.BIO004_SCHEDULE          <-- global, no section
       || FALL_SECTIONS[store.get('mos-section')]
       || (summer fallback)

   Defining window.BIO004_SCHEDULE would therefore override the
   section-aware FALL_SECTIONS lookup and force all three sections
   onto one schedule. Two of the three would silently show the wrong
   exam dates. Mastery OS already carries correct per-section data in
   FALL_MW and FALL_TR, so it needs nothing from this file.

   Use this file as the human-readable source of truth and for any
   tool that wants the dates without loading Mastery OS. Read it as
   window.BIO004_SECTIONS.
   ------------------------------------------------------------

   SOURCES, in authority order:
     LAB sessions and LAB PRACTICAL dates
       "Fall 2026 Vacaville Anatomy and Physiology Lab Schedule
        (Updated)", department master, Anatomy columns only.
        Mon/Wed column drives Class 1. Tues/Thurs column drives
        Classes 2 and 3. The Mon/Wed/Fri column is another
        instructor's section and does not apply here.
     LECTURE sessions and LECTURE EXAM dates
       "Schedule Fall 2026 Lecture check", instructor's own
        lecture schedule.

   Solano Fall 2026 calendar:
     First day of instruction .... Mon Aug 17
     Labor Day .................. Mon Sep 7        campus closed
     Faculty Development ........ Tue Oct 13       no class
     Veterans Day ............... Wed Nov 11       campus closed
     Travel Day ................. Wed Nov 25       no class
     Thanksgiving ............... Thu Nov 26 to Fri Nov 27
     Last day of instruction .... Fri Dec 11

   >>> THE ONE CONFLICT IN THE WHOLE TERM <<<
   Class 1 only, Exam 4. The lecture exam is Wed Nov 18. The lab
   practical is Mon Nov 16, two days earlier, because the department
   sets practical dates for the whole campus. Every other exam in
   every section has both parts on the same day. Do not "fix" the
   Nov 16 date by aligning it to Nov 18; it is correct as written.
   ============================================================ */

window.BIO004_SECTIONS = {

  course: 'BIO 004 Human Anatomy',
  term:   'Fall 2026',
  college:'Solano Community College, Vacaville Center',
  start:  '2026-08-17',
  end:    '2026-12-11',

  closures: [
    { date:'2026-09-07', day:'Mon', name:'Labor Day',           affects:['class1'] },
    { date:'2026-10-13', day:'Tue', name:'Faculty Development', affects:['class2','class3'] },
    { date:'2026-11-11', day:'Wed', name:'Veterans Day',        affects:['class1'] },
    { date:'2026-11-25', day:'Wed', name:'Travel Day',          affects:['class1'] },
    { date:'2026-11-26', day:'Thu', name:'Thanksgiving',        affects:['class2','class3'] }
  ],

  sections: {

    class1: {
      name:'Class 1', crn:'80650', days:'Mon / Wed', when:'Afternoon',
      lecture:'12:30 to 1:50 pm, VC 118',
      lab:'2:00 to 4:50 pm, VC 1137',
      masterColumn:'Mon. / Wed.',
      exams: [
        { n:1, lecture:'2026-09-09', practical:'2026-09-09', sameDay:true,
          practicalCovers:'6 lab sessions, 1.0 through 1.7' },
        { n:2, lecture:'2026-09-30', practical:'2026-09-30', sameDay:true,
          practicalCovers:'5 lab sessions, 2.1 through 2.6' },
        { n:3, lecture:'2026-10-21', practical:'2026-10-21', sameDay:true,
          practicalCovers:'5 lab sessions, 3.1 through 3.5' },
        { n:4, lecture:'2026-11-18', practical:'2026-11-16', sameDay:false,
          practicalCovers:'5 lab sessions, 4.1 through 4.6',
          note:'SPLIT. Practical Mon Nov 16, lecture exam Wed Nov 18. '
             + 'This is the only split exam of the term.' },
        { n:5, lecture:'2026-12-09', practical:'2026-12-09', sameDay:true,
          practicalCovers:'5 lab sessions, 5.1 through 5.5' }
      ]
    },

    class2: {
      name:'Class 2', crn:'80654', days:'Tue / Thu', when:'Early',
      lecture:'9:30 to 10:45 am, VC 212',
      lab:'11:00 am to 1:50 pm, VC 1137',
      masterColumn:'Tues. / Thurs',
      exams: [
        { n:1, lecture:'2026-09-08', practical:'2026-09-08', sameDay:true,
          practicalCovers:'6 lab sessions, 1.0 through 1.7' },
        { n:2, lecture:'2026-09-29', practical:'2026-09-29', sameDay:true,
          practicalCovers:'5 lab sessions, 2.1 through 2.6' },
        { n:3, lecture:'2026-10-22', practical:'2026-10-22', sameDay:true,
          practicalCovers:'5 lab sessions, 3.1 through 3.5' },
        { n:4, lecture:'2026-11-17', practical:'2026-11-17', sameDay:true,
          practicalCovers:'6 lab sessions, 4.1 through 4.6' },
        { n:5, lecture:'2026-12-10', practical:'2026-12-10', sameDay:true,
          practicalCovers:'5 lab sessions, 5.1 through 5.5' }
      ]
    },

    class3: {
      name:'Class 3', crn:'80655', days:'Tue / Thu', when:'Evening',
      lecture:'5:30 to 6:45 pm, VC 118',
      lab:'7:00 to 9:50 pm, VC 1137',
      masterColumn:'Tues. / Thurs',
      /* Identical dates to Class 2. Only the time of day differs. */
      exams: [
        { n:1, lecture:'2026-09-08', practical:'2026-09-08', sameDay:true,
          practicalCovers:'6 lab sessions, 1.0 through 1.7' },
        { n:2, lecture:'2026-09-29', practical:'2026-09-29', sameDay:true,
          practicalCovers:'5 lab sessions, 2.1 through 2.6' },
        { n:3, lecture:'2026-10-22', practical:'2026-10-22', sameDay:true,
          practicalCovers:'5 lab sessions, 3.1 through 3.5' },
        { n:4, lecture:'2026-11-17', practical:'2026-11-17', sameDay:true,
          practicalCovers:'6 lab sessions, 4.1 through 4.6' },
        { n:5, lecture:'2026-12-10', practical:'2026-12-10', sameDay:true,
          practicalCovers:'5 lab sessions, 5.1 through 5.5' }
      ]
    }
  },

  /* Department duty roster, from the header block of the lab master.
     Read as: who sets the lab room up, who breaks it down, and which
     sitting each instructor covers. Confirm with Jim before Aug 17. */
  duties: [
    { exam:1, setup:'Sharilyn or Moe', takedown:'Sharilyn',
      sittings:[ {track:'M/W', who:'Jim',      at:'9:00 am',  tentative:true },
                 {track:'T/R', who:'Moe',      at:'8:00 am',  tentative:true } ] },
    { exam:2, setup:'Sharilyn or Moe', takedown:'Sharilyn',
      sittings:[ {track:'M/W', who:'Jim',      at:'12:00 pm', tentative:true },
                 {track:'T/R', who:'Sharilyn', at:'11:00 am', tentative:false } ] },
    { exam:3, setup:'Jim', takedown:'Sharilyn',
      sittings:[ {track:'M/W', who:'Sharilyn', at:'2:00 pm',  tentative:false },
                 {track:'T/R', who:'Moe',      at:'2:00 pm',  tentative:true } ] },
    { exam:4, setup:'Sharilyn or Moe', takedown:'Sharilyn',
      sittings:[ {track:'T/R', who:'Sharilyn', at:'7:00 pm',  tentative:false } ] },
    { exam:5, setup:'Jim', takedown:'Jim', sittings:[] }
  ]
};
