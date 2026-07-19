# Usage: .\scripts\archive-sprint.ps1 part1/sprint_02
# Creates a zip (named after the sprint folder) containing that folder,
# saved outside the repo in %USERPROFILE%\Desktop by default.

param(
    [Parameter(Mandatory = $true)]
    [string]$SprintPath,

    [string]$OutputDir = "$HOME\Desktop"
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$fullSprintPath = Join-Path $repoRoot $SprintPath

if (-not (Test-Path $fullSprintPath -PathType Container)) {
    Write-Error "Sprint folder not found: $fullSprintPath"
    exit 1
}

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

$sprintName = Split-Path -Leaf $fullSprintPath
$zipPath = Join-Path $OutputDir "$sprintName.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Compress-Archive -Path $fullSprintPath -DestinationPath $zipPath

Write-Host "Created: $zipPath"
