from PIL import Image, ImageFilter, ImageOps
import os
import glob

def create_coloring_page(image_path, output_path):
    try:
        # Load image
        img = Image.open(image_path)
        
        # Convert to grayscale
        gray = img.convert('L')
        
        # Edge detection
        edges = gray.filter(ImageFilter.FIND_EDGES)
        
        # Invert (black lines on white)
        inverted = ImageOps.invert(edges)
        
        # Enhance contrast to make lines darker
        bw = inverted.point(lambda x: 0 if x < 200 else 255, '1')
        
        # Save output
        bw.save(output_path)
        print(f"Saved: {output_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def process_folders():
    base_dir = r"c:\Users\pc4all\Downloads\Pirls\public\PDF PIRLS Slidedecks"
    output_base = r"c:\Users\pc4all\Downloads\Pirls\public\storyboard"
    
    if not os.path.exists(output_base):
        os.makedirs(output_base)

    folders = [
        "Baba_Gun_s_City_Farm",
        "Baba_Gun_s_City_Garden",
        "Born_to_Soar",
        "Octopus_Field_Journal",
        "Patience_Takes_Flight",
        "The_Awakened_Eagle",
        "The_Balkan_Lynx",
        "The_Brave_Wooden_Boat",
        "The_Clever_Octopus",
        "The_Empty_Pot",
        "The_First_Dinosaur",
        "The_Iguanodon_Discovery",
        "The_Lake_Star",
        "The_Lambe_Enigma",
        "The_Seed_of_Truth"
    ]

    for folder in folders:
        folder_path = os.path.join(base_dir, folder)
        output_folder = os.path.join(output_base, folder)
        
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
            
        images = glob.glob(os.path.join(folder_path, "*.png"))
        for img_path in images:
            filename = os.path.basename(img_path)
            output_path = os.path.join(output_folder, filename)
            create_coloring_page(img_path, output_path)

if __name__ == "__main__":
    process_folders()
