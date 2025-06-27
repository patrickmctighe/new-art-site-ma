function createTabs(page, onHome, onWork, onAbout) {
  const tabs = document.createElement("div");
  tabs.setAttribute("class", "tabs");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("class", "btn");
  homeBtn.innerHTML = "HOME";
  homeBtn.addEventListener("click", onHome);

  const workBtn = document.createElement("button");
  workBtn.setAttribute("class", "btn");
  workBtn.innerHTML = "WORK";
  workBtn.addEventListener("click", onWork);

  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("class", "btn");
  aboutBtn.innerHTML = "ABOUT";
  aboutBtn.addEventListener("click", onAbout);

  tabs.append(homeBtn, workBtn, aboutBtn);
  page.append(tabs);
}

export { createTabs };