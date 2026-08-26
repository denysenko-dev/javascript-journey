# Scripts

Helper scripts for managing sprint folders. Run from the repo root. Each script's usage comment at the top of the file has the exact flags.

- **setup-sprint.ps1** — unpacks the course's template archive from Downloads into a sprint folder to scaffold a new sprint.
  ```
  .\scripts\setup-sprint.ps1 part1/sprint_12
  ```

- **archive-sprint.ps1** — zips a sprint folder for submission, saved to the Desktop by default. Pass `-Fix` to append a `_fix` suffix when re-submitting a correction.
  ```
  .\scripts\archive-sprint.ps1 part1/sprint_12
  .\scripts\archive-sprint.ps1 part1/sprint_12 -Fix
  ```
