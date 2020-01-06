"use strict";

(bestNode => {
  if(!bestNode) {
    let nodes = document.querySelectorAll(
      "input:not([disabled]):not([readonly]):not([type=submit]):not([type=button]):not([type=reset]):not([type=hidden]):not([type=checkbox]):not([type=radio])"
    );
    let width = window.innerWidth;
    let height = window.innerHeight;

    let halfWidth = width/2;
    let halfHeight = height/2;

    let bestScore;

    for(let n of nodes) {
      if(!("selectionStart" in n)) continue;

      let rect = n.getBoundingClientRect();
      let x = rect.left + rect.width/2;
      let y = rect.top + rect.height/2;

      if(x >= 0 && x <= width && y >= 0 && y <= height) {

        let score = Math.pow((halfWidth - x)/width, 2) + Math.pow((halfHeight - y)/height, 2);
        if(n.type === "password") score *= 1.5;

        if(!bestNode || score < bestScore) {
          bestNode = n;
          bestScore = score;
        }
      }
    }
  }

  if(bestNode) {
    bestNode.focus();
  } else {
    alert(chrome.i18n.getMessage("alertNoFocus"));
  }

})(document.querySelector("input[autofocus]"));