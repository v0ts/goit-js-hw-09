const inputEL = document.querySelector(".slider__input");
const divEL = document.querySelector(".slider__div");

inputEL.addEventListener(
  "input",
  _.debounce((e) => {
    divEL.style.width = Number(e.target.value) + 100 + "px";
    divEL.style.height = Number(e.target.value) + 100 + "px";
  }, 500)
);

const boxEl = document.getElementById("box");

document.addEventListener(
  "mousemove",
  _.debounce((e) => {
    console.log(e.offsetX, e.offsetY);
    box.style.background = `rgba(${Math.round(
      Math.random() * (255 - 1) + 1
    )}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(
      Math.random() * (255 - 1) + 1
    )})`;
		boxEl.style.marginLeft = e.offsetX + 'px';
  }, 100)
);
