#!/usr/bin/env bash
# Локальная выкладка на GitHub Pages (ветка gh-pages): игра в корне, тест WebXR в /xr-test/.
# CI не используем (минуты платные): проверки и сборка выполняются здесь.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
(cd "$ROOT/game" && npm run check)
(cd "$ROOT/xr-test" && npx vite build >/dev/null)
TMP="$(mktemp -d)"
cp -r "$ROOT/game/dist/." "$TMP/"
mkdir "$TMP/xr-test" && cp -r "$ROOT/xr-test/dist/." "$TMP/xr-test/"
mkdir "$TMP/design" && cp "$ROOT/docs/design/screens.html" "$TMP/design/index.html"
cd "$TMP"
git init -q -b gh-pages
git add -A
git commit -q -m "Деплой $(date -Iseconds)"
git remote add origin "$(git -C "$ROOT" remote get-url origin)"
git push -q -f origin gh-pages
echo "Готово: https://vromga.github.io/rubezh/"
