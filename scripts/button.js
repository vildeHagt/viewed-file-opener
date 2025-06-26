const viewedFile = document.getElementById("manifest.json-viewed-file");

console.log("ActionBar found");

const buttonDiv = document.getElementsByClassName(
  "flex-grow-0 flex-shrink-0 pr-review-tools"
)[0];
const button = document.createElement("button");
button.type = "button";
button.style.backgroundColor = "#212830";
button.style.borderColor = "#3d444d";
button.textContent = "Open Viewed files";

button.addEventListener("click", () => {
  const prText = openViewedFiles();
});

buttonDiv.appendChild(button);
