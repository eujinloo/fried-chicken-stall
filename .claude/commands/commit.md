---
description: Commit all current work with a clear message and push it to GitHub
---

Save all of EJ's current work: commit everything, then push.

1. **Check state.** Run `git status` and `git diff` to see all staged/unstaged/untracked changes. If this directory isn't a git repo yet, run `git init` first. Never touch `/private` — it's gitignored on purpose and must never be committed or pushed.

2. **Stage everything eligible.** Add all changed and new files (respecting `.gitignore`, so `/private` stays excluded). Don't hand-pick files unless something looks like it shouldn't be there (secrets, credentials, huge binaries) — flag those to EJ instead of silently committing them.

3. **Write a clear commit message.** Look at the actual diff and recent `git log` style. Summarize the *why*, not a file-by-file listing, in 1-2 sentences. If there's truly nothing to commit, say so and stop — don't create an empty commit.

4. **Commit.** Create a new commit (never amend). End the message with:
   ```
   Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
   ```

5. **Push.** Check if a remote named `origin` exists (`git remote -v`). If not, ask EJ for the GitHub repo URL (or whether to create one via `gh repo create`) before pushing — don't guess a destination. Push to the current branch's upstream; set upstream with `-u` if this is the first push. Never force-push.

6. **Report back in 2-3 lines**: what was committed (short summary) and confirmation it pushed, including the remote/branch.
