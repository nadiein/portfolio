'use strict';
$(document).ready(function() {

	function Slider(node) {
		this.node = node;
		this.Slider = this.buildSlider();
		this.wrapSlider = $('.widget-slider-wrap', this.node);
		this.slideWidth = $('.widget-slider-img', this.node).outerWidth();
		this.shiftImage = this.wrapSlider.position().left - this.slideWidth;
		this.scrollSlider = this.shiftImage;
		this.counter = 0;
		this.autoStartSlider();
	}

	Slider.prototype.buildSlider = function() {
		$('<div class="widget-slider"><ul class="widget-slider-nav"><div class="widget-slider-pointer"></div><li class="widget-slider-nav1"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav2"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav3"></li></ul><div class="widget-slider-show"><ul class="widget-slider-wrap"><li class="widget-slider-img"><img src="img/bg-hn.png" alt=""></li><li class="widget-slider-img"><img src="img/bg-hn.png" alt=""></li><li class="widget-slider-img"><img src="img/bg-hn.png" alt=""></li></ul></div></div>').appendTo(this.node);
		this.node.find('.widget-slider-nav').on('click', this.clickShiftImages.bind(this));
	};

	Slider.prototype.autoStartSlider = function() {
		this.clearPointer();
		this.showPointer();
		this.shift = setInterval(this.autoShiftImages.bind(this), 4000);
	};

	Slider.prototype.clearPointer = function() {
		$('.widget-slider-nav li', this.node).css('background-color', 'rgba(40, 44, 55, .3)');
		$('.widget-slider-pointer', this.node).css('display', 'none');
	};

	Slider.prototype.showPointer = function() {
		$('.widget-slider-nav li', this.node).eq(this.counter).css('background-color', 'white');
		$('.widget-slider-pointer', this.node).eq(this.counter).css('display', 'block');
	};

	Slider.prototype.autoShiftImages = function() {
		this.clearPointer();
		if (this.counter === 2) {
			this.wrapSlider.animate({
				left: 0
			}, 1000);
			this.scrollSlider = this.shiftImage;
			this.counter = 0;
		} else {
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.counter += 1;
			this.scrollSlider += this.shiftImage;
		}
		this.showPointer();
	};

	Slider.prototype.clickShiftImages = function(event) {
		clearInterval(this.shift);
		clearInterval(this.timeoutAfterClick);
		this.clearPointer();
		this.wrapSlider.stop();
		$(event.target).css('background-color', 'white');
		$(event.target.previousElementSibling).css('display', 'block');
		if (event.target.className === 'widget-slider-nav1') {
			this.counter = 0;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		} else if (event.target.className === 'widget-slider-nav2') {
			this.counter = 1;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		} else if (event.target.className === 'widget-slider-nav3') {
			this.counter = 2;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		} else if (event.target.className === 'widget-slider-nav4') {
			this.counter = 3;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		}
		this.timeoutAfterClick = setTimeout(this.autoStartSlider.bind(this), 4000);
	};

	new Slider($('.slider'));
});

(function () {
	'use strict';
	var feedbackOpenButton = document.querySelector('.feedback-button');
	var feedbackCloseButton = document.querySelector('.close');
	var feedbackContainer = document.querySelector('.feedback-show');
	var blackoutHide = document.querySelector('.blackout-hide');
	feedbackOpenButton.addEventListener('click', function () {
			feedbackContainer.style.opacity = '1';
			feedbackContainer.style.visibility = 'visible';
			feedbackContainer.style.transition = "opacity .7s ease-in, visibility .7s ease-in";
			blackoutHide.classList.add('blackout-show');
			blackoutHide.classList.remove('blackout-hide');
	}, false);
	feedbackCloseButton.addEventListener('click', function () {
			feedbackContainer.style.opacity = '0';
			feedbackContainer.style.visibility = 'hidden';
			feedbackContainer.style.transition = "opacity 1s ease-out, visibility 1s ease-out";
			blackoutHide.classList.add('blackout-hide');
			blackoutHide.classList.remove('blackout-show');
	}, false);
}());

(function () {
    var x = document.forms['feedback']['form'].value;
    var submit = document.querySelector('.form-submit');
    var input = document.getElementsByClassName('input');
    submit.addEventListener('click', function () {
    	for (var i = 0; i < input.length; i += 1) {
    		if (x == null || x == '') {
	        	input[0].style.boxShadow = 'inset 0 0 13px rgba(228, 106, 106, 0.75)';
	        	input[1].style.boxShadow = 'inset 0 0 13px rgba(228, 106, 106, 0.75)';
	        	input[2].style.boxShadow = 'inset 0 0 13px rgba(228, 106, 106, 0.75)';
	        	input[0].style.border = '1px solid #ff8383';
	        	input[1].style.border = '1px solid #ff8383';
	        	input[2].style.border = '1px solid #ff8383';
	        	return false;
	    	} else {
	    		input[0].style.boxShadow = 'none';
	    		input[1].style.boxShadow = 'none';
	    		input[2].style.boxShadow = 'none';
	    	}
    	}
    }, false);
}());
(function () {
	'use strict';
	var headerNav = document.querySelector('.header-nav');
	var openCloseNav = document.querySelector('.bars-hader-nav');
	var menuTitle = document.querySelector('.nav-title');

	var asideList = document.querySelector('.items-list');
	var openCloseList = document.querySelector('.fa-list');
	var listTitle = document.querySelector('.list-title');

	function screenSize() {
	    var w, h;
	    w = (window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth));
	    h = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
	    return {w:w, h:h};
	}
	window.onresize = getWindowSize;
	function getWindowSize() {
		console.log(screenSize().w);
	}
	getWindowSize();

	openCloseNav.addEventListener('click', function () {
		if (headerNav.className === 'header-nav') {
			headerNav.classList.add('header-nav-active');
		} else {
			headerNav.classList.toggle('header-nav-active');
		}
	}, false);  

	openCloseList.addEventListener('click', function () {
		if (asideList.className === 'items-list') {
			asideList.classList.add('items-list-active');	
		} else {
			asideList.classList.toggle('items-list-active');
		}
	}, false);  	
}());

