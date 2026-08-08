# Complete push, v2

**Repo:** `drsrennie-stack/Fall-2026-Anatomy`
**Location:** repo root. The repo is flat, so every file goes at the top level. No folders.

This replaces the earlier zip. That one only covered the files I had opened. This one covers the whole repo, because 13 more files were carrying the same wrong dates and I found them by sweeping every file instead of the ones I happened to be in.

**Count:** 37 files for the repo, 33 replacing existing filenames and 4 new. Plus this manifest, which is for you and does not need to go in the repo.

**Upload all 37 files in one commit.** Add file, Upload files, drag the whole set, commit. Every filename here already exists in the repo except the four new ones, so the rest simply overwrite.

---

## First: the dead links from the deletion

You already deleted `indexMW.html`, `indexTTH1.html` and `indexTTH2.html`. The only thing that referenced them was the **Course home** chip on `welcome.html`, one per section. Right now that chip 404s. `welcome.html` itself still loads and everything else on it works.

The corrected `welcome.html` in this zip points that chip at `class1/2/3.html`. Once it is up, the problem is gone. Nothing else in the repo ever referenced those three filenames, so there is nothing else to repair and no reason to restore them.

While I was in that file I also fixed the meeting line, which showed only the lab room. It now shows both, since your lecture rooms differ: Class 1 VC 118, Class 2 VC 212, Class 3 VC 118, labs all VC 1137.

---

## What is in this zip

### 4 new files

| File | What it is |
|---|---|
| `bio004-master-schedule-fall2026.html` | The master schedule. All three sections, lecture beside lab, every meeting day. Prints landscape. |
| `schedule-reconciliation.html` | Audit trail: every change, your exam duty roster, and the items to raise with the department. Instructor only, do not link from a student page. |
| `compliance-notes.md` | Accessibility compliance notes, contrast audit, and the data assertion results. |
| `fall-2026-prep-sequence.html` | Your prep tracker through Aug 17. Instructor only. Optional. |

### 33 replacements

**Carried a wrong Exam 4 date (10 files).** Class 1 practical was showing Nov 18. It is Mon Nov 16.

`class1.html` · `syllabus-class1.html` · `fall-2026-syllabus.html` · `mastery-os-fall-2026.html` · `mastery-os-fall-2026-instructor.html` · `bio004-course-calendar.html` · `bio004-exam-modules.html` · `fall-2026-schedule-mw.html` · `fall-2026-schedule-tr.html` · `week-14.html`

**Carried content errors (day-one cell anatomy, the Sep 28 Open Lab, the combined skull/spine title, renal and reproductive combined, GI accessory as its own M/W session).**

`class2.html` · `class3.html` · `syllabus-class2.html` · `syllabus-class3.html` · `week-1.html` · `week-5.html` · `week-7.html` · `week-13.html` · `week-15.html`

**Link and room fix.** `welcome.html`

**Rewritten.** `schedule-fall2026.js`

**Style rules only, no schedule change.** These had italics or Lora, both on your never-use list. 106 `<em>` tags came out of the syllabi, 40 more out of the week pages, plus the italic byline, the Lora font links, and two student-facing labels in Mastery OS that read "Given not Googled".

`index.html` · `start-here.html` · `week-2.html` · `week-4.html` · `week-6.html` · `week-8.html` · `week-9.html` · `week-10.html` · `week-11.html` · `week-12.html` · `week-16.html` · `week-17.html`

### Deliberately unchanged

`repair-round-activity.html`, `fall-2026-schedule.html`, `week-1-mw.html`, `week-3.html`, `competencies-fall2026.js`, `competenciesfall2026.js`. Nothing stale in them.

Also: weeks 4, 7, 10 and 17 say "lecture exam + lab practical" and that is **correct** for those exams, because exams 1, 2, 3 and 5 do have both parts on the same day in every section. I only changed that wording in `week-14.html`, where it was wrong. Do not "fix" the others.

---

## The one thing to understand before pushing

**Class 1 Exam 4 is split.** Lab practical **Mon Nov 16**, lecture exam **Wed Nov 18**. Two sittings, two days. The practical date comes from the department lab master and covers the whole Vacaville lab room, so it is not yours to move. Classes 2 and 3 sit both parts Tue Nov 17.

Every other exam in every section has both parts on the same day. If anyone later sees Nov 16 and Nov 18 and assumes one is a typo, this is the paragraph that stops them.

**Why `schedule-fall2026.js` was rewritten.** Mastery OS resolves its schedule from a chain of fallbacks, and the old chain checked `window.BIO004_SCHEDULE` **before** the per-section data. The old version of that file defined exactly that global. Any page loading it would have pinned all three sections to one calendar and shown two of them the wrong practical date, silently. The new file exposes `window.BIO004_SECTIONS` instead, and Mastery OS now puts per-section data first and only accepts a generic global if it names the matching section. You do not need a `<script>` tag for it; it is the human-readable source of truth, nothing more.

---

## After you push, check these

On the live Pages URL, not locally.

1. `welcome.html`, each section, click **Course home**. Lands on `class1/2/3.html`, not a 404.
2. `class1.html`, **Mon Nov 16**. Reads "Exam 4 Lab Practical" and the note explains the split.
3. `class1.html`, **Wed Nov 18**. Reads "Renal Anatomy" and notes the lecture exam is today.
4. `week-14.html` on the M/W track. Both Nov 16 and Nov 18 show as exam days, with different halves.
5. `bio004-course-calendar.html`, scroll to November. Nov 16 carries a Practical 4 badge.
6. `class2.html`, **Sep 15 and Sep 17**. Skull, then Vertebrae & Ribs. Not the same title twice.
7. Any class page, **day one**. "Intro to Anatomy Lab, Lab Safety & Introduction to Histology". No cell anatomy, no microscope.
8. `mastery-os-fall-2026.html`, browser console clean, and each section shows its own Exam 4 date.

---

## Still on your plate, not in this zip

- **Print.** Module 1 packet, 70 pages, three sections. The only item with a queue you do not control.
- **Module 1 Part C structure list.** Cell anatomy stays off it and the microscope lab is gone. If there is a microscopy block in the packet it needs pulling before print.
- **Tell Class 1 out loud about Nov 16 and Nov 18.** The files say it now. That is not the same as the students knowing it.
- **Message Jim.** The M/W column lists lab 4.5 twice (Nov 4 and Nov 9), three lab numbers have typos (`1. 1`, `14 & 1.5`, `52`), and the M/W sittings on exams 1 and 2 are parenthesised and read as tentative. You have takedown on exams 1 through 4.
- **Module 2 packet.** Due Week 4, Sep 7.

---

Verification on this set: 36 HTML and JS files rendered in a headless browser, zero page errors. All 15 lab practical dates match the department master. All 20 Mastery OS section dates match. No duplicate lab titles, no placeholder slots, no stale strings on any of the six patterns I was tracking. Zero em dashes, zero italic tags or CSS, zero Lora, zero "Given not Googled" across all 36 files. Failures: 0.
