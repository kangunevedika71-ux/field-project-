function createCharts(instagram, youtube, whatsapp, yes, no, cgpa, social) {
    // Platform chart (pie)
    new Chart(document.getElementById("platformChart"), {
        type: "pie",
        data: {
            labels: ["Instagram", "YouTube", "WhatsApp"],
            datasets: [{
                data: [instagram, youtube, whatsapp]
            }]
        }
    });

    // CGPA vs Social Media Usage (bar chart)
    new Chart(document.getElementById("cgpaChart"), {
        type: "bar",
        data: {
            labels: cgpa,          // e.g., ["3.5", "3.8", ...]
            datasets: [{
                label: "Social Media Hours",
                data: social        // array of numbers matching each cgpa
            }]
        }
    });

    // Distraction chart (pie)
    new Chart(document.getElementById("distractionChart"), {
        type: "pie",
        data: {
            labels: ["Distracted", "Not Distracted"],
            datasets: [{
                data: [yes, no]
            }]
        }
    });
}
