const sheetURL = "https://docs.google.com/spreadsheets/d/1Eb-iJ4XR3yPGDkvhJhvlQPlrMZWzZVZUrB3JQmhTERM/export?format=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    let rows = data.split("\n").slice(1); // Remove header row

    let instagram = 0;
    let youtube = 0;
    let whatsapp = 0;
    let yes = 0;
    let no = 0;
    let cgpa = [];
    let social = [];

    rows.forEach(row => {
      let col = row.split(",");
      
      // Make sure we have enough columns
      if (col.length < 6) return;

      // Platform (assuming column D = index 3)
      let platform = col[3] ? col[3].trim().replace(/^"|"$/g, '') : "";
      if (platform === "Instagram") instagram++;
      if (platform === "YouTube") youtube++;
      if (platform === "WhatsApp") whatsapp++;

      // Distracted (assuming column F = index 5)
      let distracted = col[5] ? col[5].trim().replace(/^"|"$/g, '') : "";
      if (distracted.toLowerCase() === "yes") yes++;
      if (distracted.toLowerCase() === "no") no++;

      // CGPA (assuming column E = index 4)
      let cgpaValue = parseFloat(col[4]);
      // Social media hours (assuming column C = index 2)
      let hours = parseFloat(col[2]);

      // Only push if both are valid numbers
      if (!isNaN(cgpaValue) && !isNaN(hours)) {
        cgpa.push(cgpaValue);
        social.push(hours);
      }
    });

    // Log to verify data
    console.log("Instagram:", instagram);
    console.log("YouTube:", youtube);
    console.log("WhatsApp:", whatsapp);
    console.log("Yes (distracted):", yes);
    console.log("No (not distracted):", no);
    console.log("Total valid data points:", cgpa.length);
    console.log("First 5 CGPA values:", cgpa.slice(0, 5));
    console.log("First 5 Social hours:", social.slice(0, 5));

    // Call the chart function with limited data (first 10)
    createCharts(instagram, youtube, whatsapp, yes, no, cgpa.slice(0, 10), social.slice(0, 10));
  })
  .catch(error => console.error("Error fetching data:", error));
