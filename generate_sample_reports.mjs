import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import fs from 'fs';

const makePdf = (fileName, meta, studentRows, itemRows) => {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });

  doc.setFontSize(16);
  doc.text(meta.title, 40, 40);
  doc.setFontSize(11);
  doc.text(`Class code: ${meta.code}`, 40, 60);
  doc.text(`Students: ${meta.students}`, 170, 60);
  doc.text(`Accuracy: ${meta.accuracy}%`, 280, 60);
  doc.text(`Answers: ${meta.answers}`, 390, 60);

  autoTable(doc, {
    startY: 80,
    head: [['Student', 'Answers', 'Correct', 'Accuracy %']],
    body: studentRows,
    theme: 'grid',
    styles: { fontSize: 9 },
    headStyles: { fillColor: [79, 70, 229] },
  });

  const nextY = (doc.lastAutoTable?.finalY || 260) + 24;
  doc.setFontSize(12);
  doc.text('Item Analysis (PIRLS / IEA style)', 40, nextY);

  autoTable(doc, {
    startY: nextY + 10,
    head: [['Item', 'Difficulty %', 'Discrimination %', 'Non-response %', 'Avg Time (s)', 'Recommendation']],
    body: itemRows,
    theme: 'striped',
    styles: { fontSize: 8 },
    headStyles: { fillColor: [16, 185, 129] },
  });

  const pdfData = doc.output('arraybuffer');
  fs.writeFileSync(fileName, Buffer.from(pdfData));
  console.log(`Created ${fileName}`);
};

const studentsA = [
  ['Ana Petrova', '15', '12', '80%'],
  ['Ardit Rexhepi', '15', '10', '67%'],
  ['Mila Stojanova', '15', '13', '87%'],
  ['Blerim Hoxha', '14', '9', '64%'],
];

const itemsA = [
  ['CHEST Q1', '72%', '22%', '0%', '18.2', 'Keep as is'],
  ['CHEST Q5', '41%', '14%', '11%', '39.7', 'Add short scaffold'],
  ['KITE Q12', '28%', '8%', '24%', '52.1', 'Revise wording and hint'],
  ['OCTOPUS Q9', '84%', '11%', '3%', '17.6', 'Slightly increase complexity'],
  ['LAMBE Q14', '36%', '17%', '19%', '44.5', 'Model evidence-based answer'],
];

const studentsB = [
  ['Elena Jakimovska', '15', '14', '93%'],
  ['Dion Ismaili', '15', '11', '73%'],
  ['Sara Trajkovska', '15', '10', '67%'],
  ['Aron Berisha', '13', '8', '62%'],
  ['Ina Velkov', '15', '12', '80%'],
];

const itemsB = [
  ['LYNX Q3', '58%', '19%', '6%', '26.4', 'Keep as is'],
  ['PUFFINS Q7', '33%', '13%', '21%', '47.0', 'Add vocabulary pre-teach'],
  ['RABBIT Q10', '49%', '16%', '9%', '34.5', 'Keep as is'],
  ['FOSSIL Q13', '22%', '7%', '29%', '58.2', 'Rewrite prompt and examples'],
  ['LIGHTHOUSE Q4', '76%', '20%', '2%', '16.1', 'Keep as is'],
];

makePdf(
  'sample_report_class_A.pdf',
  { title: 'PIRLS Class Report - Sample A', code: 'A1B2C3', students: 4, accuracy: 74, answers: 59 },
  studentsA,
  itemsA,
);

makePdf(
  'sample_report_class_B.pdf',
  { title: 'PIRLS Class Report - Sample B', code: 'D4E5F6', students: 5, accuracy: 77, answers: 73 },
  studentsB,
  itemsB,
);
