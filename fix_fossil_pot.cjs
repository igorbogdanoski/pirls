const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');

const updates = {
  fossil: {
    questions: [
      { id: 2, criteria: ["огромни", "коски", "непознати", "џинови"], hint: "Што мислеле луѓето за големите коски пред да знаат за диносаурусите?" },
      { id: 4, criteria: ["живи", "суштества", "изумрени", "остатоци"], hint: "Како Палиси ги објаснил фосилите во глината?" },
      { id: 8, criteria: ["сплеснат", "гребени", "карпа", "влекачи", "џвакање"], hint: "Зошто обликот на забот му кажал на Мантел дека животното јадело растенија?" },
      { id: 10, criteria: ["сличен", "потврда", "влекач", "споредба"], hint: "Како му помогна малиот заб од игуана да ја реши мистеријата?" },
      { id: 12, criteria: ["промена", "наука", "грешки", "скелети", "вистина"], hint: "Зошто денешните слики од Игуанодон се поинакви од првите цртежи?" },
      { id: 13, criteria: ["задни нозе", "шилец", "палец", "не рог"], hint: "Наброј две грешки што ги направил Мантел во својот прв опис." },
      { id: 15, criteria: ["собирал", "факти", "докази", "години", "трпение"], hint: "Како Мантел успеал да ги убеди другите научници во своето откритие?" }
    ]
  },
  pot: {
    questions: [
      { id: 2, criteria: ["семе", "кралско", "варено"], hint: "Што им даде Царот на сите деца?" },
      { id: 4, criteria: ["дињи", "зелка", "грашок", "соседи", "градина"], hint: "Како соседите знаеле дека Јун е вешт со растенијата?" },
      { id: 9, criteria: ["празна", "саксија", "не никнало", "неуспех"], hint: "Зошто децата му се потсмевале на Јун?" },
      { id: 10, criteria: ["искреност", "вистина", "труд", "чесност"], hint: "Зошто родителите сметале дека е важно да ја покаже вистината?" },
      { id: 16, criteria: ["чесност", "храброст", "единствен", "вистина"], hint: "Што ценеше Царот повеќе од најубавото цвеќе?" },
      { id: 17, criteria: ["итрина", "градинар", "другите", "мамење"], hint: "Зошто Јун не можеше да сфати како кај другите расте, а кај него не?" }
    ]
  }
};

for (const [storyId, data] of Object.entries(updates)) {
  console.log(`Updating story: ${storyId}`);
  data.questions.forEach(qUpdate => {
    // Find the question object within the story context
    // This regex looks for the story ID, then the questions array, then the specific question ID
    const searchRegex = new RegExp(`(${storyId}:\\s*{[\\s\\S]*?questions:\\s*\\[[\\s\\S]*?{\\s*id:\\s*${qUpdate.id},\\s*type:\\s*'text',\\s*q:\\s*"[^"]+")(}\\s*,|}\\s*\\])`, 'g');
    
    if (content.match(searchRegex)) {
        console.log(`  Found question ID: ${qUpdate.id}`);
        content = content.replace(searchRegex, `$1, criteria: ${JSON.stringify(qUpdate.criteria)}, hint: ${JSON.stringify(qUpdate.hint)} $2`);
    } else {
        console.log(`  NOT FOUND: question ID: ${qUpdate.id}`);
    }
  });
}

fs.writeFileSync(appPath, content);
console.log('Update complete!');
