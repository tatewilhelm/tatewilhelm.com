from PIL import Image, ExifTags
from pathlib import Path
import os

PROJECT_ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = PROJECT_ROOT / "public" / "photos"
RESIZED_DIR = PROJECT_ROOT / "public" / "photos" / "resized"
OUTPUT_FILE = PROJECT_ROOT / "src" / "pages" / "Photos.js"

VALID_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
MAX_DIMENSION = 1200  # Maximum width or height

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

def resize_image(input_path: Path, output_path: Path):
    """Resize image to max dimension while maintaining aspect ratio and EXIF orientation."""
    with Image.open(input_path) as img:
        # Apply EXIF orientation
        try:
            exif = img.getexif()
            if exif:
                orientation = exif.get(ORIENTATION_TAG)
                if orientation == 3:
                    img = img.rotate(180, expand=True)
                elif orientation == 6:
                    img = img.rotate(270, expand=True)
                elif orientation == 8:
                    img = img.rotate(90, expand=True)
        except Exception:
            pass  # If EXIF processing fails, continue without rotation
        
        # Calculate new dimensions
        width, height = img.size
        if width > MAX_DIMENSION or height > MAX_DIMENSION:
            if width > height:
                new_width = MAX_DIMENSION
                new_height = int(height * (MAX_DIMENSION / width))
            else:
                new_height = MAX_DIMENSION
                new_width = int(width * (MAX_DIMENSION / height))
            
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Save with optimization
        img.save(output_path, optimize=True, quality=85)
        return img.size

def main():
    if not IMAGES_DIR.exists():
        raise SystemExit(f"Image directory not found: {IMAGES_DIR}")

    # Create resized directory if it doesn't exist
    RESIZED_DIR.mkdir(exist_ok=True)

    entries = []

    for filename in sorted(os.listdir(IMAGES_DIR)):
        path = IMAGES_DIR / filename
        ext = path.suffix.lower()

        if ext not in VALID_EXTENSIONS or not path.is_file():
            continue

        # Create resized version
        resized_filename = f"resized_{filename}"
        resized_path = RESIZED_DIR / resized_filename
        
        # Only resize if the resized version doesn't exist or is older than the original
        if not resized_path.exists() or resized_path.stat().st_mtime < path.stat().st_mtime:
            print(f"Resizing {filename}...")
            width, height = resize_image(path, resized_path)
        else:
            print(f"Using cached {resized_filename}")
            width, height = get_display_size(resized_path)

        public_path = f"/photos/resized/{resized_filename}"

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