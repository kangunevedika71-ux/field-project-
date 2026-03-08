let existingChart = Chart.getChart("platformChart");
if (existingChart) existingChart.destroy();

new Chart(document.getElementById("platformChart"), {
    type: "doughnut",
    data: {
        labels: ["Instagram", "YouTube", "WhatsApp"],
        datasets: [{
            data: [Number(instagram), Number(youtube), Number(whatsapp)],
            backgroundColor: ["#E1306C", "#FF0000", "#25D366"]
        }]
    }
});

    // CGPA vs Social Media Hours (scatter plot) – now green
    new Chart(document.getElementById("cgpaChart"), {
        type: "scatter",
        data: {
            datasets: [{
                label: "Students",
                data: cgpa.map((value, index) => ({ x: value, y: social[index] })),
                backgroundColor: "green",
                borderColor: "darkgreen",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: "CGPA" } },
                y: { title: { display: true, text: "Hours per Day" } }
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
