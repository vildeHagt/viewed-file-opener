function injectButton() {
  const buttonDiv = document.getElementsByClassName(
    "flex-grow-0 flex-shrink-0 pr-review-tools"
  )[0];
  if (buttonDiv && !document.querySelector(".open-viewed-files-btn")) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "open-viewed-files-btn";
    button.textContent = "Open viewed files";
    button.addEventListener("click", () => {
      openViewedFiles();
    });
    buttonDiv.prepend(button);
  }
}

injectButton();

const observer = new MutationObserver(() => {
  injectButton();
});
observer.observe(document.body, { childList: true, subtree: true });
