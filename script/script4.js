const largeImg = document.getElementById("largeImg"),
			itemImg = document.getElementsByClassName('itemImg'),
			itemImgLink = document.getElementsByClassName('itemImgLink');


var posInitial,
		itemImgSz = itemImg[0].offsetWidth,
		items = document.getElementById("items"),
    itemsStyle = window.getComputedStyle(items),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
		slidesLength = itemImg.length;


function slide(prev, next) {
  var firstSlide = itemImgLink[0],
      lastSlide = itemImgLink[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;

			console.log(items);
      items.appendChild(cloneFirst);
      items.insertBefore(cloneLast, firstSlide);
			cloneFirst.removeAttribute("data-lightbox");

      prev.addEventListener('click', function() {moveSliderTo(-1) });
      next.addEventListener('click', function() {moveSliderTo(1) });
			document.addEventListener('keydown', function(event) {
				const key = event.key;
				if(event.key === 'ArrowRight') {
					moveSliderTo(1);
				} else if(event.key === 'ArrowLeft') {
					moveSliderTo(-1);
				};
			});
      items.addEventListener('transitionend', checkIndex);

      function moveSliderTo(slideNumbers, action) {
        items.classList.add('shifting');
				console.log(items);
        if (allowShift) {
          if (!action) { posInitial = items.offsetLeft; }

          if (slideNumbers >= 1) {
            items.style.left = (posInitial - (Math.abs(slideNumbers) * itemImgSz)) + "px";
            index++;
          } else if (slideNumbers <= -1) {
            items.style.left = (posInitial + (Math.abs(slideNumbers) * itemImgSz)) + "px";
            index--;
          }
          console.log(slideNumbers)
        };
        allowShift = false;
      }

      function checkIndex() {
					console.log('Transition ended');
          items.classList.remove('shifting');
					console.log(items);
					console.log("index= " + index);
          if (index === -1) {
            items.style.left = -(slidesLength * itemImgSz) + "px";
            index = slidesLength - 1;
          }

          if (index === slidesLength) {
            items.style.left = -(1 * itemImgSz) + "px";
            index = 0;
          }

          allowShift = true;
        }

}



slide(prev, next);
