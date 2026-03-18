const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');

const updates = {
  fossil: [
    { id: 2, criteria: ["огромни", "коски", "непознати", "џинови"], hint: "Што мислеле луѓето за големите коски пред да знаат за диносаурусите?" },
    { id: 4, criteria: ["живи", "суштества", "изумрени", "остатоци"], hint: "Како Палиси ги објаснил фосилите во глината?" },
    { id: 8, criteria: ["сплеснат", "гребени", "карпа", "влекачи", "џвакање"], hint: "Зошто обликот на забот му кажал на Мантел дека животното јадело растенија?" },
    { id: 10, criteria: ["сличен", "потврда", "влекач", "споредба"], hint: "Како му помогна малиот заб од игуана да ја реши мистеријата?" },
    { id: 12, criteria: ["промена", "наука", "грешки", "скелети", "вистина"], hint: "Зошто денешните слики од Игуанодон се поинакви од првите цртежи?" },
    { id: 13, criteria: ["задни нозе", "шилец", "палец", "не рог"], hint: "Наброј две грешки што ги направил Мантел во својот прв опис." },
    { id: 15, criteria: ["собирал", "факти", "докази", "години", "трпение"], hint: "Како Мантел успеал да ги убеди другите научници во своето откритие?" }
  ],
  pot: [
    { id: 2, criteria: ["семе", "кралско", "варено"], hint: "Што им даде Царот на сите деца?" },
    { id: 4, criteria: ["дињи", "зелка", "грашок", "соседи", "градина"], hint: "Како соседите знаеле дека Јун е вешт со растенијата?" },
    { id: 9, criteria: ["празна", "саксија", "не никнало", "неуспех"], hint: "Зошто децата му се потсмевале на Јун?" },
    { id: 10, criteria: ["искреност", "вистина", "труд", "чесност"], hint: "Зошто родителите сметале дека е важно да ја покаже вистината?" },
    { id: 16, criteria: ["чесност", "храброст", "единствен", "вистина"], hint: "Што ценеше Царот повеќе од најубавото цвеќе?" },
    { id: 17, criteria: ["итрина", "градинар", "другите", "мамење"], hint: "Зошто Јун не можеше да сфати како кај другите расте, а кај него не?" }
  ]
};

for (const [storyId, questions] of Object.entries(updates)) {
  console.log(`Processing ${storyId}...`);
  // Find the story block starting from storyContent (approx line 303)
  const storyContentStart = content.indexOf('const storyContent = {');
  const storyStart = content.indexOf(`${storyId}: {`, storyContentStart);
  if (storyStart === -1) {
    console.log(`  Story ${storyId} not found.`);
    continue;
  }
  
  // Find the questions array within that story
  const questionsStart = content.indexOf('questions: [', storyStart);
  if (questionsStart === -1) {
    console.log(`  Questions array not found for ${storyId}.`);
    continue;
  }
  
  // Find the matching closing bracket for the array
  let bracketCount = 0;
  let questionsEnd = -1;
  for (let i = questionsStart + 10; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') {
      if (bracketCount === 0) {
        questionsEnd = i;
        break;
      }
      bracketCount--;
    }
  }
  
  // Extract questions content
  let questionsContent = content.substring(questionsStart, questionsEnd + 1);
  
  questions.forEach(q => {
    // Match question by ID
    const qRegex = new RegExp(`{[\\s\\S]*?id:\\s*${q.id},[\\s\\S]*?}`);
    const match = questionsContent.match(qRegex);
    
    if (match) {
      let qObj = match[0];
      if (!qObj.includes('criteria:')) {
        console.log(`  Updating Q ${q.id}`);
        // Inject before the closing brace
        const updatedQ = qObj.replace(/\s*}\s*$/, `,\n      criteria: ${JSON.stringify(q.criteria)},\n      hint: ${JSON.stringify(q.hint)}\n    }`);
        questionsContent = questionsContent.replace(qObj, updatedQ);
      }
    } else {
      console.log(`  Q ${q.id} NOT found in ${storyId}`);
    }
  });
  
  // Replace in main content
  content = content.substring(0, questionsStart) + questionsContent + content.substring(questionsEnd + 1);
}

fs.writeFileSync(appPath, content);
console.log('Done!');
