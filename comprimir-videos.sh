#!/bin/bash
# Comprime vídeos de fundo para web. Requer ffmpeg.
# Uso:  ./comprimir-videos.sh pasta-de-entrada pasta-de-saida
IN="${1:-.}"; OUT="${2:-otimizados}"
find "$IN" -type f -iname "*.mp4" -print0 | while IFS= read -r -d '' f; do
  rel="${f#$IN/}"; dest="$OUT/$rel"
  mkdir -p "$(dirname "$dest")"
  ffmpeg -nostdin -y -v error -i "$f" \
    -vf "scale='min(1600,iw)':-2:flags=lanczos" \
    -c:v libx264 -crf 30 -preset slow -profile:v high -pix_fmt yuv420p \
    -an -movflags +faststart "$dest" < /dev/null
  a=$(stat -c%s "$f"); b=$(stat -c%s "$dest")
  echo "$(( a/1048576 )) MB -> $(( b/1048576 )) MB   $rel"
done
