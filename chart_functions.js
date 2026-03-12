function createCharts(instagram, youtube, whatsapp, yes, no, cgpa, social) {
    // Platform doughnut chart
    new Chart(document.getElementById("platformChart"), {
        type: "doughnut",
        data: {
            labels: ["Instagram", "YouTube", "WhatsApp"],
            datasets: [{
                data: [Number(instagram), Number(youtube), Number(whatsapp)],
                backgroundColor: ['#FFD166', '#F9C74F', '#F9844A']
            }]
        }
    });

    // CGPA vs Social Media Usage (bar chart)
    new Chart(document.getElementById("cgpaChart"), {
        type: "bar",
        data: {
            labels: cgpa.map(value => value.toString()),
            datasets: [{
                label: "Social Media Hours",
                data: social,
                backgroundColor: "green",
                borderColor: "darkgreen",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: "CGPA" } },
                y: { title: { display: true, text: "Hours per Day" }, beginAtZero: true }
            }
        }
    });

    // Distraction pie chart
    new Chart(document.getElementById("distractionChart"), {
        type: "pie",
        data: {
            labels: ["Distracted", "Not Distracted"],
            datasets: [{ data: [yes, no] }]
        }
    });
}
