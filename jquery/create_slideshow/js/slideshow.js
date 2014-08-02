// Move the #slideshow element to the top of the body.

// Write code to cycle through the list items inside the element;
// fade one in, display it for a few seconds, then fade it out and fade in the next one.

// When you get to the end of the list, start again at the beginning.

// For an extra challenge, create a navigation area under the slideshow that 
// shows how many images there are and which image you're currently viewing. 
// (Hint: $.fn.prevAll will come in handy for this.)

function SlideShow(element) {
  this.slidesGroup = element.slidesGroup;
}

SlideShow.prototype.displaySlide = function(index) {
  this.slidesGroup
    .eq(index)
      .fadeIn(3000)
      .fadeOut(3000);
};

SlideShow.prototype.runSlideShow = function() {
  var _this = this,
      index = 1,
      groupSize = _this.slidesGroup.length;
  this.displaySlide(0);
  setInterval(function() { 
    _this.displaySlide(index);
    index++;
    if(index == groupSize) {
      index = 0;
    }
  } ,6000);
};

SlideShow.prototype.init = function() {
  $('body').prepend(this.slidesGroup);
  this.slidesGroup.hide();
  this.runSlideShow();
};

$(function() {
  var slideShowElements = {
    slidesGroup: $('#slideshow li')
  };

  var slideShow = new SlideShow(slideShowElements);
  slideShow.init();
});
