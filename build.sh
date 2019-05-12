# Build one script with injected marked version

git submodule update --init;
cat marked/marked.min.js > md.release.js;
cat md.js >> md.release.js;

# minify script