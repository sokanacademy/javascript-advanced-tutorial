import { toggleBtn, hiddenText } from "./modules/dom-loader.js";
import {camelCase} from "lodash"

let show = false;

toggleBtn.addEventListener("click", toggleState);
updateParagraph();

function toggleState() {
  show = !show;
  updateParagraph();
  updateBtnContent();
}

function updateParagraph(){
  if (show) {
    hiddenText.style.display = "block";
  } else {
    hiddenText.style.display = "none";
  }
}

const updateBtnContent = ()=> {
  if (show) {
    toggleBtn.textContent = camelCase("hide text");
  } else {
    toggleBtn.textContent = camelCase("show text");
  }
}


