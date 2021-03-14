window.addEventListener("load", (event) => {
  const update = document.querySelector("#lastupdated");
  update.textContent = document.lastModified;
});
