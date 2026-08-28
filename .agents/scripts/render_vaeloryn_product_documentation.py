from pathlib import Path

import pymupdf
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[2]
source = root / "deliverables" / "vaeloryn_product_documentation_v1.pdf"
output = root / ".agents" / "outputs" / "vaeloryn-product-documentation"
output.mkdir(parents=True, exist_ok=True)

doc = pymupdf.open(source)
pages = sorted({0, 1, 5, 8, 10, 13, 15, 16, doc.page_count - 1})
rendered = []
for index in pages:
    path = output / f"page-{index + 1:02d}.png"
    pixmap = doc[index].get_pixmap(matrix=pymupdf.Matrix(1.5, 1.5), alpha=False)
    pixmap.save(path)
    rendered.append(path)

thumb_width = 420
thumbs = []
for path in rendered:
    image = Image.open(path).convert("RGB")
    image.thumbnail((thumb_width, 594))
    thumbs.append((path.name, image.copy()))
rows = (len(thumbs) + 3) // 4
sheet = Image.new("RGB", (thumb_width * 4 + 90, 690 * rows), "#D8D5CE")
draw = ImageDraw.Draw(sheet)
for i, (name, image) in enumerate(thumbs):
    x = 18 + (i % 4) * (thumb_width + 18)
    y = 18 + (i // 4) * 690
    sheet.paste(image, (x, y + 28))
    draw.text((x, y), name, fill="#111318")
sheet.save(output / "contact-sheet.png", quality=92)

print(f"pages={doc.page_count}")
print(f"rendered={','.join(str(i + 1) for i in pages)}")
print(output)