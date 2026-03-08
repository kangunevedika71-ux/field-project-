const sheetURL = "https://docs.google.com/spreadsheets/d/1Eb-iJ4XR3yPGDkvhJhvlQPlrMZWzZVZUrB3JQmhTERM/export?format=csv";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

let rows = data.split("\n").slice(1);

let instagram=0;
let youtube=0;
let whatsapp=0;

let yes=0;
let no=0;

let cgpa=[];
let social=[];

rows.forEach(row =>{

let col=row.split(",");

let platform=col[3];
let cg=col[4];
let sm=col[2];
let distracted=col[5];

if(platform=="Instagram") instagram++;
if(platform=="YouTube") youtube++;
if(platform=="WhatsApp") whatsapp++;

if(distracted=="Yes") yes++;
else no++;

cgpa.push(cg);
social.push(sm);

});

createCharts(instagram,youtube,whatsapp,yes,no,cgpa,social);

});
