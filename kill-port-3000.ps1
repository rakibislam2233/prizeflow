$PORT = 3000
$connection = Get-NetTCPConnection -LocalPort $PORT -ErrorAction SilentlyContinue | Where-Object { $_.State -eq "Listen" }

if ($connection) {
    $pid = $connection.OwningProcess
    Write-Host "Port $PORT is in use by PID: $pid. Killing it now..."
    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
    Write-Host "Process killed. Port $PORT should be free now."
} else {
    Write-Host "Port $PORT is free."
}