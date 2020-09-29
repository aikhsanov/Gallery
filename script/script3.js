const bigImg = document.getElementById("big-img");
const imgItem = document.getElementsByClassName('itemImg');
let newpos = 0;
let slider = document.getElementById("small-img");
let itemImgMarg = window.getComputedStyle(imgItem[0]).getPropertyValue("marginLeft") + window.getComputedStyle(imgItem[0]).getPropertyValue("marginRight");
let itemImgSz = imgItem[0].offsetWidth + itemImgMarg;
console.log(window.getComputedStyle(imgItem[0]));
console.log(itemImgMarg);
console.log(itemImgSz);
console.log(document.getElementsByClassName('itemImg')[5].getBoundingClientRect().x)
console.log(smallImg[0]);


  function moveSliderTo(event, slideNumber) {
		let slider = document.getElementById("small-img");
    let sliderStl = window.getComputedStyle(slider);
    let slLeftVal = sliderStl.getPropertyValue("left").replace("px", "");
    let slRightVal = sliderStl.getPropertyValue("right").replace("px", "");
    let pos = event.target.getBoundingClientRect().x;
    let targetSrc = event.target.src
    let itemsLength = imgItem.length;
		console.log("itemlength= " + itemsLength);
    slideNumber = 0;
    for(let i = 0; i in imgItem, i < imgItem.length; i++) {
      if(imgItem[i].src === targetSrc) {
      	slideNumber = i;
      }
    }
		console.log("slideNumber =" + slideNumber)

    if(slideNumber > Math.ceil(itemsLength / 2)) {
    	slider.style.left = (Number(slLeftVal) - slideNumber * itemImgSz) + "px";
    } else if(slideNumber < Math.ceil(itemsLength / 2)) {
    	slider.style.left = (Number(slLeftVal) + slideNumber * itemImgSz) + "px";
    }
		event.target.className = "clicked";
    removeClass();
    bigImg.src = targetSrc;
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

for (var i = 0 ; i < imgItem.length; i++) {
   imgItem[i].addEventListener("click", moveSliderTo);
}
