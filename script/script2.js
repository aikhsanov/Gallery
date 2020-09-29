const cenItem = document.getElementById('central-item');
const cenItemPos = cenItem.getBoundingClientRect().x; /* 195 */
const bigImg = document.getElementById("big-img");
const dSrc = cenItem.getAttribute('src');
const imgItem = document.getElementsByClassName('itemImg');
const itemRight = document.getElementsByClassName('itemImg righthlf');
const itemLeft = document.getElementsByClassName('itemImg lefthlf');
const cenPos = cenItemPos;
let newpos = 0;
console.log("newpos old = " + newpos);

console.log(cenItemPos);
	document.getElementById("big-img").src = dSrc;

  function moveSliderTo(SlideNumber) {
		let slider = document.getElementById("small-img");
		let itemImgSz = imgItem.getComputedStyle(box);
    let sliderStl = window.getComputedStyle(slider);
    let slLeftVal = sliderStl.getPropertyValue("left").replace("px", "");
    slider.style.left = (Number(slLeftVal) - 84) + "px";
    if(Math.abs(slLeftVal) >= "574") {
    	slider.style.left = "0px";
    }

	}


	}
  function bigOnClick(event) {
		bigImg.src = event.target.src;
	}
  let removeClass = function() {
    let clickedItem = document.getElementsByClassName("clicked");
    console.log(clickedItem);
		for(let i = 0; i in clickedItem; i++) {
      if(clickedItem[i].getAttribute('src') != event.target.src) {
        clickedItem[i].className = "";
       }
      }
  	}

document.getElementById("navleft").addEventListener("click", moveSliderTo);

for (var i = 0 ; i < imgItem.length; i++) {
   imgItem[i].addEventListener("click", bigOnClick);
}
for (var i = 0 ; i < imgItem.length; i++) {
   imgItem[i].addEventListener("click", moveSliderOnClick);
}




console.log(document.getElementsByClassName('itemImg'));
