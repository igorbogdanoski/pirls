import re
import os

file_path = 'src/App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Mapping of Latin characters that look like Cyrillic
mapping = {
    'o': 'о', 'a': 'а', 'e': 'е', 'c': 'с', 
    'p': 'р', 'y': 'у', 'x': 'х', 'j': 'ј',
    'O': 'О', 'A': 'А', 'E': 'Е', 'C': 'С',
    'P': 'Р', 'Y': 'У', 'X': 'Х', 'J': 'Ј',
    'i': 'и', 'I': 'И' # Mixed results for i/I but often used for и
}

def clean_text(text):
    # Only replace if the word is mostly Cyrillic
    words = text.split()
    cleaned_words = []
    for word in words:
        cyrillic_count = len(re.findall(r'[\u0400-\u04FF]', word))
        latin_count = len(re.findall(r'[a-zA-Z]', word))
        if cyrillic_count > 0 and latin_count > 0:
            # Mixed word, likely typos
            new_word = ''
            for char in word:
                new_word += mapping.get(char, char)
            cleaned_words.append(new_word)
        else:
            cleaned_words.append(word)
    return ' '.join(cleaned_words)

# Find all content strings in currentStory or other objects
# We look for: content: "..."
def replacer(match):
    prefix = match.group(1)
    text = match.group(2)
    suffix = match.group(3)
    return f'{prefix}{clean_text(text)}{suffix}'

new_content = re.sub(r'(content:\s*")([^"]+)(")', replacer, content)
# Also handle single quotes if any
new_content = re.sub(r"(content:\s*')([^']+)(')", replacer, new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("App.jsx cleaned from mixed Latin/Cyrillic typos.")