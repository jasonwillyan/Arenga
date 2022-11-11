void (function generate_tooltip_gif() {
  const array = document.getElementsByClassName("tooltip-gif");

  for (let i = 0; i < array.length; i++) {
    const gif = array[i].children[0].value;
    const position = array[i].children[1].value;
    const a = array[i].children[2];

    const div = document.createElement("div");
    const img = document.createElement("img");
    const tag_i = document.createElement("i");
 
    if(position === "bottom") tag_i.classList.add("diamond");
    else tag_i.classList.add("diamond-top");

    div.classList.add(position);
    img.src = gif;
    div.id = "tooltipgif";
    div.appendChild(img);
    div.appendChild(tag_i);
    a.appendChild(div);
  }
})();
