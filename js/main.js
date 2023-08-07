const radios = document.querySelectorAll("[name='carousel']");
let intervalId = setInterval(autoRotate, 2000);
let currentIndex = getCheckedIndex(); // Set to the initially checked radio button

function getCheckedIndex() {
  // Loop through the radio buttons and find the initially checked one
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return i;
    }
  }
  return 0; // If none is checked, default to the first one
}

function autoRotate() {
  currentIndex = (currentIndex + 1) % radios.length;
  console.log(currentIndex);
  radios[currentIndex].checked = true;
  updateImage(); // Update the image immediately
}

function updateImage() {
  document.getElementById(
    "carousel-img"
  ).src = `images/${radios[currentIndex].id}.png`;
}

function changeCarousel(radio) {
  clearInterval(intervalId);
  currentIndex = Array.from(radios).indexOf(radio); // Get the index of the clicked radio button
  updateImage(); // Update the image immediately
  intervalId = setInterval(autoRotate, 2000); // Start rotating again
}

function showMenu() {
  const menu = document.querySelector(".vertical-menu");
  console.log(menu);
  menu.style.display = "flex";
}

function hideMenu() {
  const menu = document.querySelector(".vertical-menu");
  menu.style.display = "none";
}
