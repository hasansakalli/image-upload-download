
function myInput() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const job = document.getElementById("job").value;
  const email = document.getElementById("email").value;

  document.getElementById("resultName").innerHTML = name;
  document.getElementById("resultAge").innerHTML = age;
  document.getElementById("resultJob").innerHTML = job;
  document.getElementById("resultEmail").innerHTML = email;
}

const land = document.getElementById("land");
const city = document.getElementById("city");
const bgImage = document.querySelector(".container2");

function cityChange() {
  document.getElementById("resultCity").innerHTML = city.options[city.selectedIndex].textContent;

  if (city.value == "1") {
    bgImage.style.backgroundImage =
    " url(images/duesseldorf.jpg)";
  } else if (city.value == "2") {
    bgImage.style.backgroundImage =
      " url(images/stuttgart.jpg)";
  } else if (city.value == "3") {
    bgImage.style.backgroundImage =
      "url(images/berlin.jpg)";
  } else if (city.value == "4") {
    bgImage.style.backgroundImage =
      "url(images/hamburg.jpg)";
  } else if (city.value == "5") {
    bgImage.style.backgroundImage =
      "url(images/mainz.jpg)";
  } else if (city.value == "6") {
    bgImage.style.backgroundImage =
      "url(images/munchen.jpg)";
  } else if (city.value == "7") {
    bgImage.style.backgroundImage =
      " url(images/frankfurt.jpg)";
  } else if (city.value == "8") {
    bgImage.style.backgroundImage =
      "url(images/bremen.jpg)";
  }
}
// ****************download********************
function download() {
  const screenShotTarget = document.querySelector(".container2");

  html2canvas(screenShotTarget).then((canvas) => {
    const baseImageLink = canvas.toDataURL("image/png");
    var aTag = document.createElement("a");
    aTag.setAttribute("href", baseImageLink);
    aTag.setAttribute("download", "Lebenslauf.png");
    aTag.click();
  });
}
// ****************upload********************

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
