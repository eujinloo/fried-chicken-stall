---
description: File a new resource into /raw or /private and write a pointer note in /wiki
---

Add a new resource to this project. The argument is a path to a file (ask for one if none was given).

1. **Classify.** Decide if the file is private or not:
   - **Private** — bank statements, IC/passport/ID, contracts, payslips, medical, or anything else personal to EJ.
   - **Everything else** (articles, references, screenshots, general documents) — not private.
   If it's genuinely unclear from the filename/content, ask EJ rather than guessing.

2. **File the original.**
   - Private → copy the file into `/private`, unchanged, keeping the original filename (append a date or number suffix only if a same-named file already exists there).
   - Not private → copy the file into `/raw` the same way. Per this project's rules, `/raw` is append-only: never rename, move, or edit anything already in it.

3. **Write the wiki note.** Create one short markdown file in `/wiki` (filename = a slug of the resource name, e.g. `2026-07-dbs-statement.md`). Contents:
   - **Not private:** title, one-line description, date added, and the relative path to the file in `/raw`.
   - **Private:** title, what kind of document it is, date added, and the relative path to the file in `/private` — plain facts only, so EJ can find it again. Never write account numbers, ID numbers, balances, amounts, or any other sensitive figure into the note, even if they're in the source file.

4. Confirm in one line: where the original went and that the wiki note was written. Do not push, commit, or share anything — this is a local filing step only.
