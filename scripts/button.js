const viewedFile = document.getElementById("manifest.json-viewed-file");

const buttonDiv = document.getElementsByClassName(
  "flex-grow-0 flex-shrink-0 pr-review-tools"
)[0];
const button = document.createElement("button");
button.type = "button";
button.className = "open-viewed-files-btn";
button.textContent = "Open viewed files";

button.addEventListener("click", () => {
  openViewedFiles();
});

buttonDiv.prepend(button);
