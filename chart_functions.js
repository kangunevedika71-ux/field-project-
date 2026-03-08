function createCharts(instagram, youtube, whatsapp, yes, no, cgpa, social) {
  // Platform pie chart
  new Chart(document.getElementById("platformChart"), {
    type: "pie",
    data: {
      labels: ["Instagram", "YouTube", "WhatsApp"],
      datasets: [{ data: [instagram, youtube, whatsapp] }]
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
