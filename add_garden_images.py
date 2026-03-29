#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Add images, puzzle and coloring data for forgotten_garden story."""

import re

BASE = 'c:/Users/pc4all/Downloads/Pirls/src/data/'
PUB  = './Тајната на заборавената градина/'

# ─────────────────────────────────────────────
# 1.  imgs.js  — add forgotten_garden entry
# ─────────────────────────────────────────────
with open(BASE + 'imgs.js', encoding='utf-8') as f:
    imgs = f.read()

garden_imgs = (
    "  forgotten_garden: {\n"
    "    p1: '" + PUB + "1. Gemini_Generated_Image_bhirglbhirglbhir.png',\n"
    "    p2: '" + PUB + "2. Gemini_Generated_Image_ct8ognct8ognct8o.png',\n"
    "    p3: '" + PUB + "3. Gemini_Generated_Image_umpy9kumpy9kumpy.png',\n"
    "    p4: '" + PUB + "4. Gemini_Generated_Image_38kc7q38kc7q38kc.png',\n"
    "  },\n"
)

old_close = "\n};\n\nexport default imgs;"
new_close = "\n" + garden_imgs + "};\n\nexport default imgs;"
imgs = imgs.replace(old_close, new_close)

with open(BASE + 'imgs.js', 'w', encoding='utf-8') as f:
    f.write(imgs)
print("OK: imgs.js")

# ─────────────────────────────────────────────
# 2.  storyContent.js  — insert 4 img nodes
# ─────────────────────────────────────────────
with open(BASE + 'storyContent.js', encoding='utf-8') as f:
    sc = f.read()

img1 = "      { type: 'img', src: imgs.forgotten_garden.p1, alt: 'Јана тажна на тремот пред неуредниот двор' },\n"
img2 = "      { type: 'img', src: imgs.forgotten_garden.p2, alt: 'Јана и дедото работат во дворот' },\n"
img3 = "      { type: 'img', src: imgs.forgotten_garden.p3, alt: 'Пролетни лалиња околу камената клупа' },\n"
img4 = "      { type: 'img', src: imgs.forgotten_garden.p4, alt: 'Јана радосно го прегрнува дедо Никола' },\n"

# Insert after paragraph 3 (ends with "трнлив хаос?")
anchor1 = "трнлив хаос?\" },\n"
sc = sc.replace(anchor1, anchor1 + img1, 1)

# Insert after paragraph 5 (ends with "ги полеа со вода.")
anchor2 = "ги полеа со вода.\" },\n"
sc = sc.replace(anchor2, anchor2 + img2, 1)

# Insert after paragraph 7 (ends with "бели цветови.")
anchor3 = "бели цветови.\" },\n"
sc = sc.replace(anchor3, anchor3 + img3, 1)

# Insert after paragraph 9 (ends with "вистинска убавина.")
anchor4 = "вистинска убавина.\" },\n"
sc = sc.replace(anchor4, anchor4 + img4, 1)

with open(BASE + 'storyContent.js', 'w', encoding='utf-8') as f:
    f.write(sc)
print("OK: storyContent.js")

# ─────────────────────────────────────────────
# 3.  inclusiveData.js  — fill puzzle + coloring
# ─────────────────────────────────────────────
PPUZ = PUB + 'хронолоска слагалка/'
PCOL = PUB + 'Coloring book/'

puzzle_entries = [
    (1, 'e2ruzqe2ruzqe2ru',
     'Јана беше многу несреќна поради неуредниот двор полн со трење. Таа сакаше целиот неред едноставно да се покрие со бетон.',
     'Jana ishte shum\u00eb e pak\u00ebnaqur me oborrin e \u00e7rregullt plot me gjemba. Ajo d\u00ebshironte q\u00eb e gjith\u00eb rrm\u00ebmuja thjesht t\u00eb mbulohej me beton.'),
    (2, 'bhirglbhirglbhir',
     'Дедо Никола го нарекол дворот "заспано волшебно царство". Тој верувал дека под нередот се крие убавина.',
     'Gjyshi Nikolla e quajti oborrin "mbret\u00ebri magjike t\u00eb fjetur". Ai besonte se n\u00ebn rrm\u00ebmuj\u00eb fshihej bukuri.'),
    (3, 'cla1m9cla1m9cla1',
     'Заедно со дедо Никола, Јана облече ракавици и напорно работеше за да ги искорне плевелите и сувите гранки.',
     'S\u00eb bashku me gjyshin Nikolla, Jana veshi dorezat dhe punoi shum\u00eb p\u00ebr t\u00eb shkulur bar\u00ebrat e k\u00ebqija dhe deg\u00ebt e thata.'),
    (4, 'ct8ognct8ognct8o',
     'Јана со неверување ги засади грдите луковици кои изгледале како збрчкани камчиња.',
     'Jana me mosbesim mbjelli qepujkat e sh\u00ebmtuara q\u00eb dukeshin si guralek\u00eb t\u00eb rrrudhosur.'),
    (5, 'seoqszseoqszseoq',
     'Дојде зимата и дворот се покри со дебела бела покривка од снег. Јана целосно заборави на луковиците што ги засади.',
     'Erdhi dimri dhe oborri u mbulua me nj\u00eb shtes\u00eb t\u00eb trash\u00eb bore. Jana i harroi plot\u00ebsisht qepujkat q\u00eb kishte mbjell\u00eb.'),
    (6, 'umpy9kumpy9kumpy',
     'Напролет, од оние "грди камчиња" израснале прекрасни жолти и виолетови лалиња околу камената клупа.',
     'N\u00eb pranver\u00eb, nga ata "guralek\u00eb t\u00eb sh\u00ebmtuar" kishin mbir\u00eb tulipan\u00eb t\u00eb buk ur t\u00eb verdh\u00eb dhe vjoll\u00eb\u00ebz rreth stolit t\u00eb gurit.'),
    (7, '38kc7q38kc7q38kc',
     'Јана го прегрна дедо Никола и сфати дека вистинската убавина бара труд и многу трпение.',
     'Jana p\u00ebrqafoi gjyshin Nikolla dhe kuptoi se bukuria e v\u00ebrtet\u00eb k\u00ebrkon pun\u00eb dhe shum\u00eb durim.'),
]

coloring_entries = [
    (1, 'grz5ktgrz5ktgrz5',
     'Јана тажна на тремот пред неуредниот двор.',
     'Jana e trishtuar n\u00eb verand\u00eb para oborrit t\u00eb \u00e7rregullt.'),
    (2, 'mk2r1fmk2r1fmk2r',
     'Дедо Никола ѝ покажува скриената убавина на дворот.',
     'Gjyshi Nikolla i tregon Jan\u00ebs bukurin\u00eb e fshehur t\u00eb oborrit.'),
    (3, 'bjc0r5bjc0r5bjc0',
     'Јана и дедо Никола напорно работат за да го исчистат дворот.',
     'Jana dhe gjyshi Nikolla punojn\u00eb shum\u00eb p\u00ebr t\u00eb pastruar oborrin.'),
    (4, 'eo29v3eo29v3eo29',
     'Дедо Никола ѝ подава грди луковици на Јана да ги засади.',
     'Gjyshi Nikolla i jep Jan\u00ebs qepujka t\u00eb sh\u00ebmtuara p\u00ebr t\'i mbjell\u00eb.'),
    (5, 'apfx4rapfx4rapfx',
     'Дворот покриен со снег преку зимата.',
     'Oborri i mbuluar me bor\u00eb gjat\u00eb dimrit.'),
    (6, 'f60h2gf60h2gf60h',
     'Прекрасни лалиња цветаат напролет околу камената клупа.',
     'Tulipan\u00eb t\u00eb buk ur lul\u00ebzojn\u00eb rreth stolit t\u00eb gurit n\u00eb pranver\u00eb.'),
    (7, 'h13hv9h13hv9h13h',
     'Јана радосно го прегрнува дедо Никола во пролетниот двор.',
     'Jana e lumtur p\u00ebrqafon gjyshin Nikolla n\u00eb kopshtin pranveror.'),
]

def make_entry(img_path, id_, text_mk, text_sq):
    return (
        "      { id: " + str(id_) + ", img: '" + img_path + "',\n"
        "        text: '" + text_mk.replace("'", "\\'") + "',\n"
        "        textSq: '" + text_sq.replace("'", "\\'") + "' },\n"
    )

puzzle_block = "    puzzle: [\n"
for id_, hash_, mk, sq in puzzle_entries:
    img = PPUZ + str(id_) + '. Gemini_Generated_Image_' + hash_ + '.png'
    puzzle_block += make_entry(img, id_, mk, sq)
puzzle_block += "    ],\n"

coloring_block = "    coloring: [\n"
for id_, hash_, mk, sq in coloring_entries:
    img = PCOL + str(id_) + '. Gemini_Generated_Image_' + hash_ + '.png'
    coloring_block += make_entry(img, id_, mk, sq)
coloring_block += "    ]\n"

new_garden = (
    "  forgotten_garden: {\n"
    + puzzle_block
    + coloring_block
    + "  }"
)

with open(BASE + 'inclusiveData.js', encoding='utf-8') as f:
    inc = f.read()

# Replace the empty entry
old_entry = "  forgotten_garden: {\n    puzzle: [],\n    coloring: []\n  }"
if old_entry not in inc:
    # Try alternative whitespace
    old_entry = "  forgotten_garden: { puzzle: [], coloring: [] }"
if old_entry in inc:
    inc = inc.replace(old_entry, new_garden, 1)
    print("OK: inclusiveData.js")
else:
    print("ERROR: could not find forgotten_garden entry in inclusiveData.js")
    print("Searching for pattern...")
    idx = inc.find("forgotten_garden")
    if idx >= 0:
        print("Found at:", idx)
        print(repr(inc[idx:idx+80]))

with open(BASE + 'inclusiveData.js', 'w', encoding='utf-8') as f:
    f.write(inc)
