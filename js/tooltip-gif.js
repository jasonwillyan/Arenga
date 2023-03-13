/* void (function generate_tooltip_gif() {
  const array = document.getElementsByClassName("tooltip-gif");

  for (let i = 0; i < array.length; i++) {
    const gif = array[i].children[0].value;
    const position = array[i].children[1].value;
    const a = array[i].children[2];

    const div = document.createElement("div");
    const img = document.createElement("img");
    const tag_i = document.createElement("i");

    if (position === "bottom") tag_i.classList.add("diamond");
    else tag_i.classList.add("diamond-top");

    div.classList.add(position);
    img.src = gif;
    div.id = "tooltipgif";
    div.appendChild(img);
    div.appendChild(tag_i);
    a.appendChild(div);
  }
})(); */

void(function generate_tooltip_gif() {
  const elements = document.querySelectorAll(".tooltip-gif, .tooltip-gif a");

  elements.forEach(element => {
    const gif = element.getAttribute("data-gif");
    const position = element.getAttribute("data-position");
    console.log(gif, position);

    const div = document.createElement("div");
    const img = document.createElement("img");
    const tag_i = document.createElement("i");

    if (position === "bottom") {
      tag_i.classList.add("diamond");
      div.classList.add("tooltip-container", "bottom");
      img.src = gif;
      div.id = "tooltipgif";
      div.appendChild(img);
      div.appendChild(tag_i);
      element.appendChild(div);
    } else if(position === "top"){
      tag_i.classList.add("diamond-top");
      div.classList.add("tooltip-container", "top");
      img.src = gif;
      div.id = "tooltipgif";
      div.appendChild(img);
      div.appendChild(tag_i);
      element.appendChild(div);
    }
  });
})();

// eslint-disable-next-line no-unused-vars
function change_theme() {
  if (!document.getElementById("dark-mode").checked) {
    document.documentElement.style.setProperty("--main-color", "#000");
    document.documentElement.style.setProperty("--color-text", "#fff");
    document.documentElement.style.setProperty("--color-text-button", "#fff");
    document.documentElement.style.setProperty("--color-button", "rgba(255, 255, 255, 0.1");
    document.documentElement.style.setProperty("--color-button-border", "rgba(255, 255, 255, 0.5");
    window.sessionStorage.setItem("dark-mode", 1);
  } else {
    document.documentElement.style.setProperty("--main-color", "#e9f2f9");
    document.documentElement.style.setProperty("--color-text", "#000");
    document.documentElement.style.setProperty("--color-text-button", "#000");
    document.documentElement.style.setProperty("--color-button", "rgba(0, 0, 0, 0.1");
    document.documentElement.style.setProperty("--color-button-border", "rgba(0, 0, 0, 0.5");
    window.sessionStorage.setItem("dark-mode", 0);
  }
}

void (function initial_theme() {
  if (window.sessionStorage.getItem("dark-mode") == 1) {
    document.getElementById("dark-mode").checked = false; //set mode dark button
    document.documentElement.style.setProperty("--main-color", "#000");
    document.documentElement.style.setProperty("--color-text", "#fff");
    document.documentElement.style.setProperty("--color-text-button", "#fff");
    document.documentElement.style.setProperty("--color-button", "rgba(255, 255, 255, 0.1");
    document.documentElement.style.setProperty("--color-button-border", "rgba(255, 255, 255, 0.5");
  } else {
    document.getElementById("dark-mode").checked = true; //set mode dark button
    document.documentElement.style.setProperty("--main-color", "#e9f2f9");
    document.documentElement.style.setProperty("--color-text", "#000");
    document.documentElement.style.setProperty("--color-text-button", "#000");
    document.documentElement.style.setProperty("--color-button", "rgba(0, 0, 0, 0.1");
    document.documentElement.style.setProperty("--color-button-border", "rgba(0, 0, 0, 0.5");
  }
})();
