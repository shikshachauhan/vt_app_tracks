// Move the #slideshow element to the top of the body.

// Write code to cycle through the list items inside the element;
// fade one in, display it for a few seconds, then fade it out and fade in the next one.

// When you get to the end of the list, start again at the beginning.

// For an extra challenge, create a navigation area under the slideshow that 
// shows how many images there are and which image you're currently viewing. 
// (Hint: $.fn.prevAll will come in handy for this.)

var SlideShow = function(element) {
  this.slidesGroup = element.slidesGroup;
  this.slides = element.slidesGroup.find('li');
  this.groupSize = this.slides.length
}

SlideShow.prototype.displaySlide = function(index) {
  this.slides
    .eq(index)
      .fadeIn(3000)
      .fadeOut(3000);
  this.navigationArea.text('Showing ' + (index + 1) + ' out of ' + this.groupSize);
};

SlideShow.prototype.runSlideShow = function() {

  var _this = this,
      index = 1;

  _this.displaySlide(0);
  setInterval(function() {
    _this.displaySlide(index);
    index++;

    //Check if it is the end of the list..
    if(index == _this.groupSize) {
      index = 0;
    }
  } ,6000);

};

SlideShow.prototype.init = function() {
  $('body').prepend(this.slidesGroup);
  this.slidesGroup.wrap($('<div>', {
    height: '400px'
  }));
  this.navigationArea = $('<div>');
  this.slides.after(this.navigationArea);
  this.slides.hide();
  this.runSlideShow();
};

$(function() {
  var slideShowElements = {
    slidesGroup: $('#slideshow')
  };

  var slideShow = new SlideShow(slideShowElements);
  slideShow.init();
});
