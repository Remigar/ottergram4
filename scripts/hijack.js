/*GOAL: When ran, change all links so that they lead nowhere.*/

var LINK_SELECTOR = 'a';


/*NOTE: the function below worked, but only in this particular case.*/
function setHREF(anch) {
  'use strict';
  anch.setAttribute('href', 'https://www.google.com/#q=otters');
}

function getAnchorArray() {
  'use strict';
  var anchors = document.querySelectorAll(LINK_SELECTOR);
  var anchorArray = [].slice.call(anchors);
  return anchorArray;
}

function addAnchClickHandler( anch ) {
  'use strict';
  anch.addEventListener('click', function ( event ) {
    event.preventDefault();
  })
}

function HACKTHEPLANET () {
  'use strict';
  var anchors = getAnchorArray();
  anchors.forEach(addAnchClickHandler);
}

HACKTHEPLANET();
