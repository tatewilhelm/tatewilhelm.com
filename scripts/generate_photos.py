from PIL import Image, ExifTags
from pathlib import Path
import os

PROJECT_ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = PROJECT_ROOT / "public" / "photos"
OUTPUT_FILE = PROJECT_ROOT / "src" / "pages" / "Photos.js"

VALID_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

# Find the EXIF Orientation tag ID (usually 274)
ORIENTATION_TAG = next(
    (k for k, v in ExifTags.TAGS.items() if v == "Orientation"),
    274,
)

def get_display_size(path: Path):
    with Image.open(path) as img:
        width, height = img.size

        exif = img.getexif()
        orientation = exif.get(ORIENTATION_TAG)

        # Any of these means "rotated 90°" in some way → swap dims
        if orientation in (5, 6, 7, 8):
            width, height = height, width

        return width, height

def main():
    if not IMAGES_DIR.exists():
        raise SystemExit(f"Image directory not found: {IMAGES_DIR}")

    entries = []

    for filename in sorted(os.listdir(IMAGES_DIR)):
        path = IMAGES_DIR / filename
        ext = path.suffix.lower()

        if ext not in VALID_EXTENSIONS or not path.is_file():
            continue

        width, height = get_display_size(path)
        public_path = f"/photos/{filename}"

        entries.append(
            {
                "src": public_path,
                "width": width,
                "height": height,
            }
        )

    lines = []
    lines.append("// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.")
    lines.append("// Run scripts/generate_photos.py to regenerate.\n")
    lines.append("const preshuffle_photos = [")
    for e in entries:
        lines.append(
            f'  {{ src: "{e["src"]}", width: {e["width"]}, height: {e["height"]} }},'
        )
    lines.append("];\n")
    lines.append("""function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
                 
                 const photos = shuffleArray(preshuffle_photos)
""")
    lines.append("export default photos;")
    content = "\n".join(lines) + "\n"

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(content, encoding="utf-8")
    print(f"Wrote {OUTPUT_FILE} with {len(entries)} photos.")

if __name__ == "__main__":
    main()
