# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Coursework repo for JavaScript24 (frontend for beginner), parts 1 and 2. Each subfolder holds the solution for one sprint (lesson) of the course.

## Structure

```
part1/sprint_02 ... sprint_15   # JavaScript24 part 1
part2/sprint_01 ... sprint_24   # JavaScript24 part 2
```

- Folder number matches the sprint number in the course program (not sequential from 1) — `part1` starts at `sprint_02`, `part2` starts at `sprint_01`, since the earlier sprints in each part are non-coding intro lessons and have no folder.
- Each `sprint_N/README.md` states the lesson topic from the course program — check it before starting work in that folder to confirm which task is being solved.
- No shared build tooling across sprints (no root `package.json`); each sprint is plain HTML/CSS/JS unless that lesson's task says otherwise (e.g. sprints introducing Mocha/Chai, Axios). Check inside the individual sprint folder for any lesson-specific setup before assuming there is none.

## Git workflow

- One branch per sprint, merged into `main` when the sprint's task is done: `git checkout -b part1/sprint_02`, work, then merge back to `main`.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`, `test:`).
