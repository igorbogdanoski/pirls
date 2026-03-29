#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Add textSq to all puzzle+coloring entries for 14 stories."""

import re

with open('src/data/inclusiveData.js', encoding='utf-8') as f:
    src = f.read()

# ── Helper ──────────────────────────────────────────────────────────
def add_sq(src, story, entries_sq):
    """
    For each entry dict in entries_sq:
      { 'section': 'puzzle'|'coloring', 'id': N, 'textSq': '...' }
    Find the line in 'story' section that has  id: N  and NO textSq yet,
    and append  , textSq: '...'  before the closing  }
    """
    # Locate the story block (first occurrence wins = the "winning" duplicate)
    # We need the LAST occurrence for stories that appear twice
    # (JS takes last, so last block is the active one)
    pattern = r'  ' + re.escape(story) + r': \{'
    positions = [m.start() for m in re.finditer(pattern, src)]
    if not positions:
        print(f'  SKIP: {story} not found')
        return src
    # Use the last occurrence (wins in JS)
    start = positions[-1]
    # Find end of this block (next top-level story key or end of object)
    rest = src[start:]
    # Walk brace depth to find closing }
    depth = 0
    end = start
    for i, ch in enumerate(rest):
        if ch == '{': depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end = start + i + 1
                break

    block = src[start:end]

    for e in entries_sq:
        section = e['section']
        eid = e['id']
        sq = e['textSq'].replace("'", "\\'")

        # Match the entry line: id: N, ... text: "...", possibly no textSq
        # Pattern: id: {eid}, ... ends with  }  (no textSq present)
        # We look for the line containing "id: {eid}" inside section
        # Find section sub-block
        sec_pat = re.compile(r'(' + re.escape(section) + r': \[)(.*?)(\n    \])', re.DOTALL)
        sm = sec_pat.search(block)
        if not sm:
            print(f'  WARN: section {section} not found in {story}')
            continue
        sec_block = sm.group(0)
        # Find entry with this id that has no textSq
        entry_pat = re.compile(
            r'(\{ id: ' + str(eid) + r',.*?text: (?:"[^"]*"|\'[^\']*\'))(\s*\})',
            re.DOTALL
        )
        def replacer(m):
            if 'textSq' in m.group(0):
                return m.group(0)  # already has textSq
            return m.group(1) + ", textSq: '" + sq + "'" + m.group(2)
        new_sec_block = entry_pat.sub(replacer, sec_block)
        block = block[:sm.start()] + new_sec_block + block[sm.end():]

    src = src[:start] + block + src[end:]
    return src

# ── Data ─────────────────────────────────────────────────────────────

# chest — last block (lines ~401-411): 3 puzzle + 3 coloring
chest_sq = [
    {'section':'puzzle','id':1,'textSq':"Marko ishte i trishtuar që duhej ta kalonte pushimin në fshat."},
    {'section':'puzzle','id':2,'textSq':"Gjyshi i tij e kërkoi të gjente një orë të vjetër në papafingo."},
    {'section':'puzzle','id':3,'textSq':"Marko gjeti një arkë të vogël druri të gdhendur me lule."},
    {'section':'coloring','id':1,'textSq':"Marko ulet në verandë dhe i mërzitet."},
    {'section':'coloring','id':2,'textSq':"Arka e drurit me gdhendje lulesh."},
    {'section':'coloring','id':3,'textSq':"Kujtimet e lumtura të gjyshit."},
]

# kaja — last block (lines ~413-423): 3 puzzle + 3 coloring
kaja_sq = [
    {'section':'puzzle','id':1,'textSq':"Kaja donte të bënte një robot që pastron."},
    {'section':'puzzle','id':2,'textSq':"Gjyshi e ngushëlloi Kajën kur roboti u prish."},
    {'section':'puzzle','id':3,'textSq':"Kaja bëri një ushqyes të mençur për zogjtë."},
    {'section':'coloring','id':1,'textSq':"Laboratori i Kajës."},
    {'section':'coloring','id':2,'textSq':"Bisedë me gjyshin."},
    {'section':'coloring','id':3,'textSq':"Ushqyesi për zogjtë."},
]

# watchmaker — last block (lines ~425-435): 3 puzzle + 3 coloring
watchmaker_sq = [
    {'section':'puzzle','id':1,'textSq':"Marko ndihej i vetmuar në qytetin e ri."},
    {'section':'puzzle','id':2,'textSq':"Qeni i sahatçiut e thirri Markon në ndihmë."},
    {'section':'puzzle','id':3,'textSq':"Marko dhe sahatçiu u bënë miqtë më të mirë."},
    {'section':'coloring','id':1,'textSq':"Marko para shtëpisë."},
    {'section':'coloring','id':2,'textSq':"Takimi me qenin."},
    {'section':'coloring','id':3,'textSq':"Punishja e sahateve."},
]

# kite — last block (lines ~463-473): 3 puzzle + 3 coloring
kite_sq = [
    {'section':'puzzle','id':1,'textSq':"Balonja ishte ngatërruar në degë."},
    {'section':'puzzle','id':2,'textSq':"Fëmijët e rregulluan balonën me shumë durim."},
    {'section':'puzzle','id':3,'textSq':"Balonja fluturoi lart në qiell."},
    {'section':'coloring','id':1,'textSq':"Aksidenti me balonën."},
    {'section':'coloring','id':2,'textSq':"Riparimi në punishte."},
    {'section':'coloring','id':3,'textSq':"Fluturim drejt reve."},
]

# baba — first (and only) block: 5 puzzle + 6 coloring
baba_sq = [
    {'section':'puzzle','id':1,'textSq':"Gjyshja Gun jetonte në një shtëpizë të vogël fshati me bar mbi çati."},
    {'section':'puzzle','id':2,'textSq':"Mjeku i tha se duhej të shpërngulej në një ndërtesë të madhe në qytet."},
    {'section':'puzzle','id':3,'textSq':"Gjyshja Gun fshehurazi i solli pulat në apartamentin e saj të ri."},
    {'section':'puzzle','id':4,'textSq':"Ajo bëri një kopsht të mrekullueshëm në ballkonin e saj."},
    {'section':'puzzle','id':5,'textSq':"Tani gjyshja Gun është e lumtur, por pyet si ta fusë lopën në ashensor!"},
    {'section':'coloring','id':1,'textSq':"Gjyshja Gun me kafshët e saj para shtëpizës në fshat."},
    {'section':'coloring','id':2,'textSq':"Mjeku i thotë të shpërngulet — gjyshja Gun i pako gjërat e saj."},
    {'section':'coloring','id':3,'textSq':"Gjyshja Gun shikon apartamentin e ri me ballkon me pamje nga qyteti."},
    {'section':'coloring','id':4,'textSq':"Gjyshja Gun fshehurazi i ngjit pulat nëpër shkallë."},
    {'section':'coloring','id':5,'textSq':"Gjyshja Gun mbjell bar dhe lule në ballkon — njësoj si në fshat!"},
    {'section':'coloring','id':6,'textSq':"Lopa hyn në ashensor — gjyshja Gun nuk di çfarë të bëjë!"},
]

# lynx — LAST block (lines ~256-270): 5 puzzle + 5 coloring
lynx_sq = [
    {'section':'puzzle','id':1,'textSq':"Rreqebulli ballkanik është një mace e egër e rrallë që jeton në malet tona."},
    {'section':'puzzle','id':2,'textSq':"Shkencëtarët përdorin kamera speciale për të ndjekur lëvizjet e rreqebullit."},
    {'section':'puzzle','id':3,'textSq':"Rreqebujt janë gjuetarë shumë të aftë dhe lëvizin pa zhurmë nëpër pyll."},
    {'section':'puzzle','id':4,'textSq':"Nëna rreqebull kujdeset për të vegjlit e saj në strofulla të fshehura."},
    {'section':'puzzle','id':5,'textSq':"Duhet të mbrojmë rreqebujt sepse janë shumë të rrallë dhe të rrezikuar."},
    {'section':'coloring','id':1,'textSq':"Rreqebulli me veshë karakteristikë me tufa."},
    {'section':'coloring','id':2,'textSq':"Vendosja e kurthit fotografik në mal."},
    {'section':'coloring','id':3,'textSq':"Rreqebulli duke zgjuar në pyllin me borë."},
    {'section':'coloring','id':4,'textSq':"Rreqebujt e vegjël duke luajtur para strofullës."},
    {'section':'coloring','id':5,'textSq':"Natyra ku jeton rreqebulli ballkanik."},
]

# shovel — last block (lines ~451-461): 3 puzzle + 3 coloring
shovel_sq = [
    {'section':'puzzle','id':1,'textSq':"Xhaxhai me lopata punonte shumë çdo ditë."},
    {'section':'puzzle','id':2,'textSq':"Fëmijët e ndihmonin dhe qeshnin bashkë."},
    {'section':'puzzle','id':3,'textSq':"Xhaxhai u tregonte historitë më të bukura."},
    {'section':'coloring','id':1,'textSq':"Punë në oborr."},
    {'section':'coloring','id':2,'textSq':"Gëzim dhe të qeshura."},
    {'section':'coloring','id':3,'textSq':"Koha për histori."},
]

# pita — last block (lines ~437-449): 4 puzzle + 4 coloring
pita_sq = [
    {'section':'puzzle','id':1,'textSq':"Gjyshja dhe nipi bënë një byrek të shijshëm."},
    {'section':'puzzle','id':2,'textSq':"Ata ia çuan byrekun fqinjit të vjetër."},
    {'section':'puzzle','id':3,'textSq':"Bashkë gëzuan darkën dhe bisedën."},
    {'section':'puzzle','id':4,'textSq':"Armiku u bë miku më i mirë."},
    {'section':'coloring','id':1,'textSq':"Gatim në kuzhinë."},
    {'section':'coloring','id':2,'textSq':"Bartja e byreks."},
    {'section':'coloring','id':3,'textSq':"Darkë te fqinji."},
    {'section':'coloring','id':4,'textSq':"Miqësi e re."},
]

# pot — first (and only) block: 5 puzzle + 6 coloring
pot_sq = [
    {'section':'puzzle','id':1,'textSq':"Perandori plak shpalli se do t'i jepte secilit fëmijë nga një farë."},
    {'section':'puzzle','id':2,'textSq':"Secili fëmijë mori një farë dhe një mundësi të çmuar."},
    {'section':'puzzle','id':3,'textSq':"Xhuni mbolli farën me kujdes, por saksia e tij mbeti e zbrazët."},
    {'section':'puzzle','id':4,'textSq':"Fëmijët e tjerë sollën lule të bukura — Xhuni shkoi me saksinë bosh."},
    {'section':'puzzle','id':5,'textSq':"Perandori e zgjodhi Xhunin sepse ishte i ndershëm — farat ishin zierë!"},
    {'section':'coloring','id':1,'textSq':"Xhuni në kopshtin e tij duke mbjellë me kujdes."},
    {'section':'coloring','id':2,'textSq':"Fëmijët marrin farat e çmuara nga Perandori."},
    {'section':'coloring','id':3,'textSq':"Xhuni e ujit saksinë çdo ditë duke pritur."},
    {'section':'coloring','id':4,'textSq':"Xhuni është i trishtuar sepse fara nuk rritet."},
    {'section':'coloring','id':5,'textSq':"Xhuni i tregon Perandorit saksinë e zbrazët me ndershmëri."},
    {'section':'coloring','id':6,'textSq':"Perandori e zgjedh Xhunin si trashëgimtar të ri."},
]

# lakestar — only block: 6 puzzle + 5 coloring
lakestar_sq = [
    {'section':'puzzle','id':1,'textSq':"Çdo natë në qiell shkëlqente një yll shumë i veçantë."},
    {'section':'puzzle','id':2,'textSq':"Një mbrëmje, ylli ra drejt në liqenin e qetë."},
    {'section':'puzzle','id':3,'textSq':"Të gjitha kafshët e pyllit u mblodhën të shihnin çfarë ndodhi."},
    {'section':'puzzle','id':4,'textSq':"Ylli i ktheu të gjithë peshqit në qenie ndriçuese."},
    {'section':'puzzle','id':5,'textSq':"Liqeni filloi të shkëlqejë në ngjyrat e ylberit."},
    {'section':'puzzle','id':6,'textSq':"Që atëherë, liqeni është një mrekulli që njerëzit vijnë ta shohin."},
    {'section':'coloring','id':1,'textSq':"Qielli i natës mbi liqen."},
    {'section':'coloring','id':2,'textSq':"Rënia e yllit."},
    {'section':'coloring','id':3,'textSq':"Kafshët mblidhen në breg."},
    {'section':'coloring','id':4,'textSq':"Peshqit magjikë ndriçues në ujë."},
    {'section':'coloring','id':5,'textSq':"Liqeni ndriçues."},
]

# lambe — only block: 5 puzzle + 5 coloring
lambe_sq = [
    {'section':'puzzle','id':1,'textSq':"Gjergji ishte një plak që jetonte qetë, derisa minjtë u shtuan aq shumë."},
    {'section':'puzzle','id':2,'textSq':"Minjtë ishin shumë të zgjuar dhe nuk ziheshin në kurthet me djathë."},
    {'section':'puzzle','id':3,'textSq':"Gjergji ngjiti të gjitha orenditë nga poshtë lart — në tavan."},
    {'section':'puzzle','id':4,'textSq':"Minjtë menduan se ishin përmbysur dhe filluan të bënin panik."},
    {'section':'puzzle','id':5,'textSq':"Pasi i mashtroi, Gjergji i çoi minjtë në pyll."},
    {'section':'coloring','id':1,'textSq':"Plaku Gjergj shqetësohet nga shtimi i minjve."},
    {'section':'coloring','id':2,'textSq':"Minjtë qeshin dhe mendojnë se ai është budalla."},
    {'section':'coloring','id':3,'textSq':"Gjergji ngjit orenditë në tavan."},
    {'section':'coloring','id':4,'textSq':"Minjtë shohin orenditë lart dhe bëjnë panik."},
    {'section':'coloring','id':5,'textSq':"Gjergji i mbledh minjtë e fikur nga dyshemeja."},
]

# fossil — only block: 7 puzzle + 7 coloring
fossil_sq = [
    {'section':'puzzle','id':1,'textSq':"Njerëzit gjenin fosile gjigante në shkëmbinj dhe nuk dinin çfarë ishin."},
    {'section':'puzzle','id':2,'textSq':"Bernard Palissy në Francë studioi fosilet dhe kuptoi se janë mbetje të gjallesave të zhdukura."},
    {'section':'puzzle','id':3,'textSq':"Mary Anning në Angli gjeti një dhëmb fosil të çuditshëm dhe ia çoi burrit të saj Gideon Mantellit."},
    {'section':'puzzle','id':4,'textSq':"Gideon Mantell e studioi dhëmbin me zmadhues dhe e çoi nëpër muze të botës për të zbuluar çfarë ishte."},
    {'section':'puzzle','id':5,'textSq':"Mantell zbuloi se dhëmbi i përkiste një zvarranikut të madh si iguana dhe e quajti Iguanodon."},
    {'section':'puzzle','id':6,'textSq':"Mantell gabimisht e vizatoi Iguanodonin me bri në hundë — në fakt ishte gjembi i gishtit të madh."},
    {'section':'puzzle','id':7,'textSq':"Në vitin 1842 shkencëtari Richard Owen shpiku fjalën 'dinosauria' — zvarranik i tmerrshëm i madh."},
    {'section':'coloring','id':1,'textSq':"Kocka fosile në shkëmb."},
    {'section':'coloring','id':2,'textSq':"Bernard Palissy me fosilin."},
    {'section':'coloring','id':3,'textSq':"Mary Anning gjen fosilin."},
    {'section':'coloring','id':4,'textSq':"Gideon Mantell studion dhëmbin."},
    {'section':'coloring','id':5,'textSq':"Iguanodoni — vizatim i gabuar me bri."},
    {'section':'coloring','id':6,'textSq':"Pamja e saktë e Iguanodonit."},
    {'section':'coloring','id':7,'textSq':"Dinosaurët në botën parahistorike."},
]

# lighthouse — only block: 7 puzzle + 7 coloring
lighthouse_sq = [
    {'section':'puzzle','id':1,'textSq':"Liam frikësohej nga stuhitë dhe fshihej çdo herë kur fillonte moti i keq."},
    {'section':'puzzle','id':2,'textSq':"Fshati i peshkatarëve varësohet nga drita e farit për t'u kthyer i sigurt."},
    {'section':'puzzle','id':3,'textSq':"Gjatë mjegullës së dendur, varka e babait të Liamit humbi drejt."},
    {'section':'puzzle','id':4,'textSq':"Liam ndodhej i vetëm dhe i frikësuar në dhomën e errët gjatë stuhisë."},
    {'section':'puzzle','id':5,'textSq':"Liam u ngjit shkallëve të ngushtë spirale drejt dhomës së llambës."},
    {'section':'puzzle','id':6,'textSq':"Liam e ndezi llambën e madhe — drita e fuqishme ndriçoi detin e errët."},
    {'section':'puzzle','id':7,'textSq':"Babai i Liamit u kthye i sigurt dhe e përqafoi Liamin me lot gëzimi."},
    {'section':'coloring','id':1,'textSq':"Fari mbi shkëmb pranë fshatit të peshkatarëve."},
    {'section':'coloring','id':2,'textSq':"Mjegulla e dendur mbulon detin dhe fshatin."},
    {'section':'coloring','id':3,'textSq':"Liam i vetëm dhe i frikësuar brenda farit të errët."},
    {'section':'coloring','id':4,'textSq':"Liam duke u ngjitur shkallëve spirale drejt llambës."},
    {'section':'coloring','id':5,'textSq':"Llamba e madhe e farit ndriçon detin e stuhishëm."},
    {'section':'coloring','id':6,'textSq':"Varka e babait duke lundruar drejt dritës shpëtuese."},
    {'section':'coloring','id':7,'textSq':"Liam dhe babai i tij në përqafim të ngrohtë pas shpëtimit."},
]

# ── Apply all ────────────────────────────────────────────────────────
all_stories = [
    ('chest', chest_sq),
    ('kaja', kaja_sq),
    ('watchmaker', watchmaker_sq),
    ('kite', kite_sq),
    ('baba', baba_sq),
    ('lynx', lynx_sq),
    ('shovel', shovel_sq),
    ('pita', pita_sq),
    ('pot', pot_sq),
    ('lakestar', lakestar_sq),
    ('lambe', lambe_sq),
    ('fossil', fossil_sq),
    ('lighthouse', lighthouse_sq),
]

for story_id, entries in all_stories:
    src = add_sq(src, story_id, entries)
    print(f'OK: {story_id}')

with open('src/data/inclusiveData.js', 'w', encoding='utf-8') as f:
    f.write(src)

print('\nDone. Run: npm run build')
