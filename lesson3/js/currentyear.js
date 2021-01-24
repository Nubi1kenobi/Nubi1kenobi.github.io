const options = { year: "numeric" };
document.getElementById(
  "currentyear"
).textContent = new Date().toLocaleDateString("en-US", options);
