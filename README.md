# javascript-journey

Курс JavaScript24 — frontend for beginner. Розв'язання завдань по спринтах.

## Структура

```
part1/
  sprint_02/ ... sprint_15/
part2/
  sprint_01/ ... sprint_24/
```

- `part1` — JavaScript24 (part 1), спринти з `sprint_02` (00 і 01 — вступні, без коду).
- `part2` — JavaScript24 (part 2), спринти з `sprint_01` (00 — вступний, без коду).
- Назва папки = номер спринту в програмі курсу, README.md всередині містить назву теми.

## Git workflow

Для кожного спринту — окрема гілка, після завершення роботи мерджимо в `main`.

```
git checkout -b part1/sprint_02
# робота над завданням
git checkout main
git merge part1/sprint_02
```
