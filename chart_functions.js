new Chart(document.getElementById("platformChart"), {
    type: "doughnut",
    data: {
        labels: ["Instagram", "YouTube", "WhatsApp"],
        datasets: [{
            data: [instagram, youtube, whatsapp],
            backgroundColor: ["#E1306C", "#FF0000", "#25D366"]
        }]
    }
});

  // CGPA vs Social Media Hours (scatter plot)
  new Chart(document.getElementById("cgpaChart"), {
    type: "scatter",
    data: {
      datasets: [{
        label: "Students",
        data: cgpa.map((value, index) => ({ x: value, y: social[index] })),
        backgroundColor: "blue"
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
