# Build one script with injected marked version
echo "updating submodules…"
git submodule update --init;
echo "→ done"
echo "building script"
cat marked/marked.min.js > md.release.js;
cat md.js >> md.release.js;
echo "→ done"

# minify script