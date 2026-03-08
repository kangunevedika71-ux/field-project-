function createCharts(i,y,w,yes,no,cgpa,social){

new Chart(document.getElementById("platformChart"),{
type:"pie",
data:{
labels:["Instagram","YouTube","WhatsApp"],
datasets:[{data:[i,y,w]}]
}
});

new Chart(document.getElementById("cgpaChart"),{
type:"bar",
data:{
labels:cgpa,
datasets:[{
label:"Social Media Hours",
data:social
}]
}
});

new Chart(document.getElementById("distractionChart"),{
type:"pie",
data:{
labels:["Distracted","Not Distracted"],
datasets:[{data:[yes,no]}]
}
});

}
