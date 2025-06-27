import { printLinks } from "./printLinks.js";
import { swLinks } from "./swLinks.js";
import "./work.css";
import "./btn.css";
import { createTabs } from "./tabs.js";

const createWork = () => {
  const page = document.querySelector(".con");
  page.innerHTML = "";

  createTabs(
    page,
    async () => {
      const { createHome } = await import("./home.js");
      createHome();
    },
    () => createWork(),
    async () => {
      const { createAbout } = await import("./about.js");
      createAbout();
    }
  );

  // Print title and links
  const printHead = document.createElement("h1");
  printHead.setAttribute("class", "print");
  printHead.innerHTML = "PRINT";
  const printList = document.createElement("ul");
  for (let i = 0; i < printLinks.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    const a = document.createElement("a");
    a.setAttribute("class", "aList");
    a.textContent = printLinks[i].text;
    a.setAttribute("href", printLinks[i].url);
    li.appendChild(a);
    printList.appendChild(li);
  }
  printHead.appendChild(printList);

  // Selected writing and links
  const swHead = document.createElement("h1");
  swHead.innerHTML = "SELECTED WRITING";
  const swList = document.createElement("ul");
  for (let i = 0; i < swLinks.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    const a = document.createElement("a");
    a.setAttribute("class", "aList");
    a.textContent = swLinks[i].text;
    a.setAttribute("href", swLinks[i].url);
    li.appendChild(a);
    swList.appendChild(li);
  }
  swHead.appendChild(swList);

  page.append(printHead, swHead);

  return page;
};

export { createWork };