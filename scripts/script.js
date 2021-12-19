// active header indication in current page
const primaryNavigation = document.querySelectorAll(".header-menu a");

function activeLink(item) {
  const currentUrl = window.location.href;
  const currentTab = item.href;

  if (currentUrl.includes(currentTab)) {
    item.classList.add("active");
  }
}

if (primaryNavigation) primaryNavigation.forEach(activeLink);

// active insurance items
const insuranceParams = new URLSearchParams(window.location.search);

function activeProduct(param) {
  const element = document.getElementById(param);
  if (element) element.checked = true;
}

if (insuranceParams) insuranceParams.forEach(activeProduct);

// insurance questions expand control
const questions = document.querySelectorAll(".insurance-questions-list button");

function expandQuestions(question) {
  question.addEventListener("click", (event) => {
    const currentElement = event.currentTarget;

    const controls = currentElement.getAttribute("aria-controls");
    const anwser = document.getElementById(controls);

    const isActive = anwser.classList.toggle("active");
    console.log(isActive);
    currentElement.setAttribute("aria-expanded", isActive);
  });
}

if (questions) questions.forEach(expandQuestions);

// bike image galery control
const bikeGalery = document.querySelectorAll(".bike-galery img");
const bikeGaleryContainer = document.querySelector(".bike-galery");

function changeImgFocus(img) {
  img.addEventListener("click", (event) => {
    const currentImg = event.currentTarget;

    const minWidth =
      matchMedia("(min-width: 460px) and (max-width: 800px)").matches ||
      matchMedia("(min-width: 920px)").matches;

    if (minWidth) {
      bikeGaleryContainer.prepend(currentImg);
    }
  });
}

if (bikeGalery) bikeGalery.forEach(changeImgFocus);
