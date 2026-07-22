---
description: Look back at this session and turn it into lasting improvements — permanent instructions, things that worked, things that failed and why
---

Run this at the end of a session. Review the whole conversation and convert it into durable memory using the existing memory system at `/Users/ej/.claude/projects/-Users-ej-Desktop-claude/memory/` (types: user, feedback, project, reference — see system prompt for the full spec and file format).

1. **Scan the session for three things:**
   - **Corrections or rules.** Any time EJ said "no, don't", "stop doing X", "always do Y", or otherwise redirected your approach — this is a permanent instruction. Save it as a `feedback` memory: the rule, a **Why:** (EJ's stated or implied reason), and a **How to apply:** (when it kicks in).
   - **What worked.** Any approach, tool choice, or judgment call EJ tried, accepted, or explicitly confirmed ("yes, exactly", "perfect", or silently kept without pushback) — save as a `feedback` memory describing what to keep doing and why it worked.
   - **What failed.** Any approach that didn't pan out — errored, got rejected, produced a bad result, or EJ explicitly said didn't work. Save as a `feedback` memory with the failure and the **root cause** (not just "this failed" — the actual reason), so it's never blindly retried. If a similar approach could work under different conditions, say what those conditions are.

   Skip anything ephemeral (one-off task details, things fully derivable from code/git) — see "What NOT to save" in the memory system spec.

2. **Check for overlap before writing.** Read `MEMORY.md` and skim any memory files that look related (by topic, not just type) before creating a new one. If a new finding restates or refines an existing note, edit that note in place rather than creating a duplicate — merge them, don't stack them.

3. **File each note correctly.** Most session learnings will be `feedback` type. If something surfaced that's really about EJ himself (role, expertise, preferences) file it as `user`; if it's a fact about ongoing work file it as `project`; if it's a pointer to an external system file it as `reference`. Use the frontmatter and body structure from the memory system spec exactly (name/description/metadata.type, then rule + **Why:** + **How to apply:** for feedback/project notes).

4. **Keep the index tight.** Every note gets exactly one line in `MEMORY.md`, under ~150 characters: `- [Title](file.md) — one-line hook`. Never write memory content directly into `MEMORY.md`. If you merged notes, make sure the index has one line per surviving note, not one per thing you found.

5. **Report back in 3-6 lines max**: what you saved (new), what you merged (updated), and what you deliberately skipped as not durable. If nothing in the session was worth keeping, say so plainly instead of inventing something.
