const sheetURL = "https://docs.google.com/spreadsheets/d/1Eb-iJ4XR3yPGDkvhJhvlQPlrMZWzZVZUrB3JQmhTERM/export?format=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    let rows = data.split("\n").slice(1); // Remove header row

    // Counters
    let instagram = 0, youtube = 0, whatsapp = 0;
    let yes = 0, no = 0;
    let cgpa = [];
    let social = [];

    rows.forEach(row => {
      let col = row.split(",");
      if (col.length < 12) return; // Ensure enough columns

      // --- Platform counts (from column G, index 6) ---
      let platforms = col[6] ? col[6].trim().replace(/^"|"$/g, '') : "";
      // Platforms are comma-separated, e.g., "Instagram, WhatsApp, YouTube"
      if (platforms.includes("Instagram")) instagram++;
      if (platforms.includes("YouTube")) youtube++;
      if (platforms.includes("WhatsApp")) whatsapp++;

      // --- Distracted? (from column J, index 9) ---
      let affects = col[9] ? col[9].trim().replace(/^"|"$/g, '') : "";
      // Treat "Yes, negatively" or "Yes, positively" as "yes"
      if (affects.toLowerCase().includes("yes")) yes++;
      else if (affects.toLowerCase().includes("no effect")) no++; // or you can decide to count only those who say yes vs no

      // --- Social media hours (from column F, index 5) ---
      let hoursStr = col[5] ? col[5].trim().replace(/^"|"$/g, '') : "";
      let hours = parseHours(hoursStr); // convert to number

      // --- CGPA (from column I, index 8) ---
      let cgpaStr = col[8] ? col[8].trim().replace(/^"|"$/g, '') : "";
      let cgpaValue = parseCGPA(cgpaStr);

      // Only push if both are valid numbers
      if (!isNaN(hours) && !isNaN(cgpaValue)) {
        social.push(hours);
        cgpa.push(cgpaValue);
      }
    });

    console.log("Instagram:", instagram);
    console.log("YouTube:", youtube);
    console.log("WhatsApp:", whatsapp);
    console.log("Yes (affected):", yes);
    console.log("No (not affected):", no);
    console.log("Valid data points:", cgpa.length);
    console.log("First 5 CGPA:", cgpa.slice(0,5));
    console.log("First 5 Hours:", social.slice(0,5));

    // Call chart function with first 10 points for clarity
    createCharts(instagram, youtube, whatsapp, yes, no, cgpa.slice(0,10), social.slice(0,10));
  })
  .catch(error => console.error("Fetch error:", error));

// Helper: convert hours text to number
function parseHours(h) {
  h = h.toLowerCase();
  if (h.includes("less than 1")) return 0.5;
  if (h.includes("1–2") || h.includes("1-2")) return 1.5;
  if (h.includes("3–4") || h.includes("3-4")) return 3.5;
  if (h.includes("more than 4")) return 5;
  // If it's just a number like "2", parse it
  let num = parseFloat(h);
  if (!isNaN(num)) return num;
  return NaN; // invalid
}

// Helper: clean CGPA string to number
function parseCGPA(g) {
  // Remove any non-numeric characters except decimal point
  let cleaned = g.replace(/[^0-9.]/g, '');
  let num = parseFloat(cleaned);
  // If it's a percentage like 70%, assume out of 100, convert to 4.0 scale? Or just keep as is? 
  // For now, return as is; you might want to scale percentages to 4.0 if needed.
  return isNaN(num) ? NaN : num;
}
