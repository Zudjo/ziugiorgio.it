Clear-Host

# CONSTANTS
# __________________________________________________
$PathInput = ".\style\sass"
$PathOutput = ".\style\css"
$MiddleMan = ".\style\main.sass"

# VARIABLES
# __________________________________________________
$Output = ""


# MAIN
# __________________________________________________
While ($true) {
  $Files = Get-ChildItem -path $PathInput

  ForEach ($File in $Files) {
    $Output += (Get-Content -path $File.FullName -raw)
  }

  Out-File -inputObject $Output -filePath $MiddleMan -encoding "utf8"

  sass $MiddleMan $PathOutput\main.css

  $Output = ""

  For ($i=5; $i -gt 0; $i--) {
    Write-Host "Next compilation in $i seconds..."
    Start-Sleep 1
    Clear-Host
  }
}
