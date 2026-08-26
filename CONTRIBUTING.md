# Contributing

## Git workflow

One branch per sprint, merged into `main` once the task is done.

```
git switch -c part1/sprint_02
# work on the task
git switch main
git merge --no-ff part1/sprint_02
```

Merges into `main` are always real merge commits (`--no-ff`), never fast-forward or squash.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`, `test:`), without a scope.
