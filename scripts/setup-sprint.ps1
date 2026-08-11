# Usage: .\scripts\setup-sprint.ps1 part1/sprint_12
# Finds the course template archive in Downloads (js24_unit_<NN>_template.zip
# for part1, js242_unit_<NN>_template.zip for part2; NN is the zero-padded
# sprint number), unpacks it, strips the .vscode folder, and copies the
# contents into the given sprint folder (keeping README.md).

param(
    [Parameter(Mandatory = $true)]
    [string]$SprintPath,

    [string]$DownloadsDir = "$HOME\Downloads",

    [switch]$Force
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$fullSprintPath = Join-Path $repoRoot $SprintPath

if (-not (Test-Path $fullSprintPath -PathType Container))
{
    Write-Error "Sprint folder not found: $fullSprintPath"
    exit 1
}

$sprintName = Split-Path -Leaf $fullSprintPath
if ($sprintName -notmatch 'sprint_(\d+)')
{
    Write-Error "Could not parse sprint number from folder name: $sprintName"
    exit 1
}
$unitPadded = '{0:D2}' -f [int]$Matches[1]

$partName = Split-Path -Leaf (Split-Path -Parent $fullSprintPath)
$courseCode = switch ($partName)
{
    'part1' {
        'js24'
    }
    'part2' {
        'js242'
    }
    default {
        Write-Error "Unknown part folder: $partName"; exit 1
    }
}

$existing = Get-ChildItem -Path $fullSprintPath -Force | Where-Object { $_.Name -ne 'README.md' }
if ($existing -and -not $Force)
{
    Write-Error "Sprint folder already has files beyond README.md. Re-run with -Force to overwrite."
    exit 1
}

$zipName = "${courseCode}_unit_${unitPadded}_template.zip"
$zipPath = Join-Path $DownloadsDir $zipName

if (-not (Test-Path $zipPath))
{
    Write-Error "Template archive not found: $zipPath"
    exit 1
}

$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ([guid]::NewGuid())
New-Item -ItemType Directory -Force -Path $tempRoot | Out-Null

Expand-Archive -Path $zipPath -DestinationPath $tempRoot -Force

$extractedRoot = Get-ChildItem -Path $tempRoot -Directory | Select-Object -First 1
if (-not $extractedRoot)
{
    Write-Error "Archive did not contain a top-level folder."
    Remove-Item -Path $tempRoot -Recurse -Force
    exit 1
}

$vscodePath = Join-Path $extractedRoot.FullName ".vscode"
if (Test-Path $vscodePath)
{
    Remove-Item -Path $vscodePath -Recurse -Force
}

Get-ChildItem -Path $extractedRoot.FullName -Force | Where-Object { $_.Name -ne 'README.md' } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $fullSprintPath -Recurse -Force
}

Remove-Item -Path $tempRoot -Recurse -Force

Write-Host "Unpacked $zipName into $fullSprintPath"
