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

$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ([guid]::NewGuid())
$tempSprintPath = Join-Path $tempRoot $sprintName
New-Item -ItemType Directory -Force -Path $tempRoot | Out-Null
Copy-Item -Path $fullSprintPath -Destination $tempSprintPath -Recurse

$readmePath = Join-Path $tempSprintPath "README.md"
if (Test-Path $readmePath) {
    Remove-Item $readmePath -Force
}

Compress-Archive -Path $tempSprintPath -DestinationPath $zipPath

Remove-Item -Path $tempRoot -Recurse -Force

Write-Host "Created: $zipPath"
