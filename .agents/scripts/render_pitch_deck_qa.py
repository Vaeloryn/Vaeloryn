from pathlib import Path
import sys

import fitz
from PIL import Image, ImageDraw


def main() -> None:
    pdf_path = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    document = fitz.open(pdf_path)
    rendered: list[Image.Image] = []

    for page_index, page in enumerate(document):
        pixmap = page.get_pixmap(matrix=fitz.Matrix(1.25, 1.25), alpha=False)
        page_path = output_dir / f"slide-{page_index + 1:02d}.png"
        pixmap.save(page_path)
        rendered.append(Image.open(page_path).convert("RGB"))

    thumb_width = 480
    thumb_height = 270
    label_height = 34
    columns = 3
    rows = (len(rendered) + columns - 1) // columns
    sheet = Image.new(
        "RGB",
        (columns * thumb_width, rows * (thumb_height + label_height)),
        "#171717",
    )
    draw = ImageDraw.Draw(sheet)

    for index, image in enumerate(rendered):
        thumbnail = image.resize((thumb_width, thumb_height))
        x = (index % columns) * thumb_width
        y = (index // columns) * (thumb_height + label_height)
        sheet.paste(thumbnail, (x, y))
        draw.text((x + 12, y + thumb_height + 8), f"Slide {index + 1}", fill="#f4eddd")

    contact_sheet_path = output_dir / "contact-sheet.png"
    sheet.save(contact_sheet_path, quality=95)
    print(f"Rendered {len(rendered)} slides")
    print(contact_sheet_path)


if __name__ == "__main__":
    main()