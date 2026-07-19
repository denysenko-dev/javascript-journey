# javascript-journey

JavaScript24 course — frontend for beginner. Task solutions organized by sprint.

## Structure

```
part1/
  sprint_02/ ... sprint_15/
part2/
  sprint_01/ ... sprint_24/
```

- `part1` — JavaScript24 (part 1), sprints starting from `sprint_02` (00 and 01 are intro lessons, no code).
- `part2` — JavaScript24 (part 2), sprints starting from `sprint_01` (00 is an intro lesson, no code).
- Folder name = sprint number in the course program; the `README.md` inside each folder states the lesson topic.

## Git workflow

One branch per sprint, merged into `main` once the task is done.

```
git checkout -b part1/sprint_02
# work on the task
git checkout main
git merge part1/sprint_02
```
