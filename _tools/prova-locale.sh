#!/bin/bash
# netstat.exe non parte su questa macchina (snmpapi.dll mancante): i PID si leggono con Get-NetTCPConnection.
# Avvia PHP (8080) e astro dev (4321), verifica index e proxy /api, ferma i server.
cd "$(dirname "$0")/.." || exit 1
mkdir -p _temp

php -S 127.0.0.1:8080 -t public > _temp/php.log 2>&1 &
npx astro dev --port 4321 --host 127.0.0.1 > _temp/astro.log 2>&1 &

for i in $(seq 1 60); do
  if curl -s -o /dev/null http://127.0.0.1:8080/api/ping.php && curl -s -o /dev/null http://127.0.0.1:4321/; then
    break
  fi
  sleep 1
done

index=$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:4321/)
body=$(curl -s http://127.0.0.1:4321/api/ping.php)
if echo "$body" | grep -q '"ok":true'; then
  ping=ok
else
  ping=ko
fi

for port in 4321 8080; do
  for pid in $(powershell -NoProfile -Command "(Get-NetTCPConnection -State Listen -LocalPort $port -ErrorAction SilentlyContinue).OwningProcess" | tr -d '\r' | sort -u); do
    taskkill //F //T //PID "$pid" > /dev/null 2>&1
  done
done

echo "index=$index ping=$ping"
