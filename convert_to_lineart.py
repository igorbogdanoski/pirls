import os
from PIL import Image, ImageOps, ImageFilter

def convert_to_coloring_book(image_path, output_path):
    try:
        # Open the image
        img = Image.open(image_path).convert("L")  # Convert to grayscale
        
        # Apply edge detection (Contour)
        img_contour = img.filter(ImageFilter.CONTOUR)
        
        # Invert to get black lines on white background
        img_inverted = ImageOps.invert(img_contour)
        
        # Threshold to clean up the noise and make it pure black and white
        # This part might need tuning. Let's try a simple point transformation.
        threshold = 240
        img_bw = img_inverted.point(lambda p: 255 if p > threshold else 0)
        
        # Dilate a bit if lines are too thin (optional, skip for now)
        
        img_bw.save(output_path)
        print(f"Processed: {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def process_directory(base_dir):
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                # Only process images that are intended for coloring (we can refine this later if needed)
                # For now, let's process everything in the PDF folders as the user asked
                file_path = os.path.join(root, file)
                # Overwrite original to avoid path issues in App.jsx
                convert_to_coloring_book(file_path, file_path)

if __name__ == "__main__":
    target_dir = r"c:\Users\pc4all\Downloads\Pirls\public"
    process_directory(target_dir)
