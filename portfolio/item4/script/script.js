// 'use strict';
// $(document).ready(function() {

// 	function Slider(node) {
// 		this.node = node;
// 		this.Slider = this.buildSlider();
// 		this.wrapSlider = $('.widget-slider-wrap', this.node);
// 		this.slideWidth = $('.widget-slider-img', this.node).outerWidth();
// 		this.shiftImage = this.wrapSlider.position().left - this.slideWidth;
// 		this.scrollSlider = this.shiftImage;
// 		this.counter = 0;
// 		this.autoStartSlider();
// 	}

// 	Slider.prototype.buildSlider = function() {
// 		$('<div class="widget-slider"><ul class="widget-slider-nav"><div class="widget-slider-pointer"></div><li class="widget-slider-nav1"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav2"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav3"></li></ul><div class="widget-slider-show"><ul class="widget-slider-wrap"><li class="widget-slider-img"><img src="img/bg-hn.png" alt=""></li><li class="widget-slider-img"><img src="img/bg-hn.png" alt=""></li><li class="widget-slider-img"><img src="img/bg-hn.png" alt=""></li></ul></div></div>').appendTo(this.node);
// 		this.node.find('.widget-slider-nav').on('click', this.clickShiftImages.bind(this));
// 	};

// 	Slider.prototype.autoStartSlider = function() {
// 		this.clearPointer();
// 		this.showPointer();
// 		this.shift = setInterval(this.autoShiftImages.bind(this), 4000);
// 	};

// 	Slider.prototype.clearPointer = function() {
// 		$('.widget-slider-nav li', this.node).css('background-color', 'rgba(40, 44, 55, .3)');
// 		$('.widget-slider-pointer', this.node).css('display', 'none');
// 	};

// 	Slider.prototype.showPointer = function() {
// 		$('.widget-slider-nav li', this.node).eq(this.counter).css('background-color', 'white');
// 		$('.widget-slider-pointer', this.node).eq(this.counter).css('display', 'block');
// 	};

// 	Slider.prototype.autoShiftImages = function() {
// 		this.clearPointer();
// 		if (this.counter === 2) {
// 			this.wrapSlider.animate({
// 				left: 0
// 			}, 1000);
// 			this.scrollSlider = this.shiftImage;
// 			this.counter = 0;
// 		} else {
// 			this.wrapSlider.animate({
// 				left: this.scrollSlider
// 			}, 1000);
// 			this.counter += 1;
// 			this.scrollSlider += this.shiftImage;
// 		}
// 		this.showPointer();
// 	};

// 	Slider.prototype.clickShiftImages = function(event) {
// 		clearInterval(this.shift);
// 		clearInterval(this.timeoutAfterClick);
// 		this.clearPointer();
// 		this.wrapSlider.stop();
// 		$(event.target).css('background-color', 'white');
// 		$(event.target.previousElementSibling).css('display', 'block');
// 		if (event.target.className === 'widget-slider-nav1') {
// 			this.counter = 0;
// 			this.scrollSlider = this.counter * this.shiftImage;
// 			this.wrapSlider.animate({
// 				left: this.scrollSlider
// 			}, 1000);
// 			this.scrollSlider += this.shiftImage;
// 		} else if (event.target.className === 'widget-slider-nav2') {
// 			this.counter = 1;
// 			this.scrollSlider = this.counter * this.shiftImage;
// 			this.wrapSlider.animate({
// 				left: this.scrollSlider
// 			}, 1000);
// 			this.scrollSlider += this.shiftImage;
// 		} else if (event.target.className === 'widget-slider-nav3') {
// 			this.counter = 2;
// 			this.scrollSlider = this.counter * this.shiftImage;
// 			this.wrapSlider.animate({
// 				left: this.scrollSlider
// 			}, 1000);
// 			this.scrollSlider += this.shiftImage;
// 		} else if (event.target.className === 'widget-slider-nav4') {
// 			this.counter = 3;
// 			this.scrollSlider = this.counter * this.shiftImage;
// 			this.wrapSlider.animate({
// 				left: this.scrollSlider
// 			}, 1000);
// 			this.scrollSlider += this.shiftImage;
// 		}
// 		this.timeoutAfterClick = setTimeout(this.autoStartSlider.bind(this), 4000);
// 	};

// 	new Slider($('.slider'));
// });


								//Menu 
(function () {
	'use strict';
	var menuOpenButton = document.querySelector('.menu-bar');
	var menuCloseButton = document.querySelector('.close-menu');
	var menuContainer = document.querySelector('.menu');
	var videoOpenButton = document.querySelector('.watch-video');
	var videoCloseButton = document.querySelector('.close-video');
	var videoContainer = document.querySelector('.video-container');
	var blackoutHide = document.querySelector('.blackout-hide');

	menuOpenButton.addEventListener('click', function () {
			menuContainer.style.display = 'flex'
			menuContainer.style.opacity = '1';
			menuContainer.style.visibility = 'visible';
			menuContainer.style.transition = "opacity .7s ease-in, visibility .7s ease-in";
			blackoutHide.classList.add('blackout-show');
			blackoutHide.classList.remove('blackout-hide');
	}, false);
	menuCloseButton.addEventListener('click', function () {
			menuContainer.style.display = ''
			menuContainer.style.opacity = '0';
			menuContainer.style.visibility = 'hidden';
			menuContainer.style.transition = "opacity 1s ease-out, visibility 1s ease-out";
			blackoutHide.classList.add('blackout-hide');
			blackoutHide.classList.remove('blackout-show');
	}, false);

	videoOpenButton.addEventListener('click', function () {
			videoContainer.style.display = 'flex'
			videoContainer.style.opacity = '1';
			videoContainer.style.visibility = 'visible';
			videoContainer.style.transition = "opacity .7s ease-in, visibility .7s ease-in";
			blackoutHide.classList.add('blackout-show');
			blackoutHide.classList.remove('blackout-hide');
	}, false);
	videoCloseButton.addEventListener('click', function () {
			videoContainer.style.display = ''
			videoContainer.style.opacity = '0';
			videoContainer.style.visibility = 'hidden';
			videoContainer.style.transition = "opacity 1s ease-out, visibility 1s ease-out";
			blackoutHide.classList.add('blackout-hide');
			blackoutHide.classList.remove('blackout-show');
	}, false);

}());


							//Video player 
(function () {
	'use strict';
	var videoCont = document.querySelector('.video-container');
	var playPauseButton = document.querySelector('.play-pause-btn');
	var play = document.querySelector('.play');
	var pause = document.querySelector('.pause');
	var volume = document.querySelector('.volume');
	var hdTrigger = document.querySelector('.hd-trigger-active');
	var resize = document.querySelector('.fa-expand-resize');
	var deresize = document.querySelector('.fa-expand-deresize');
	var progress = document.querySelector('.progress-bar');
	var buffer = document.querySelector('.buffer');
	var mediaPlayer = document.querySelector('.media-video');
	var videoLike = document.querySelector('.video-like');
	var oldx = 0;

	playPauseButton.addEventListener('click', function () {
		if (mediaPlayer.paused || mediaPlayer.ended) {
			play.style.opacity = '0';
			pause.style.opacity = '1';
			play.style.display = 'none';
			pause.style.display = 'flex';
			mediaPlayer.play();
		} else {
			pause.style.opacity = '0';
			play.style.opacity = '1';
			pause.style.display = 'none';
			play.style.display = 'flex';
			mediaPlayer.pause();
		}
	}, false);

	volume.addEventListener('mousemove', function (event) {
		if (typeof event == 'undefined') { 
			event = window.event; 
		}
		var target = event.target||event.srcElement; 
			if (event.pageX < oldx) {
	            if (target.tagName === 'LI') {
           			mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
					target.style.backgroundColor = '#6b6f70';
				}
	        } else if (event.pageX > oldx) {
           		if (target.tagName === 'LI') {
	            	mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
					target.style.backgroundColor = '#00adef';
				}
        	}
        mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
        oldx = event.pageX;
	}, false);

	hdTrigger.addEventListener('click', function () {
		if (hdTrigger.className === 'hd-trigger-active') {
			hdTrigger.classList.add('hd-trigger');
			hdTrigger.classList.remove('hd-trigger-active');
		} else {
			hdTrigger.classList.toggle('hd-trigger-active');
			hdTrigger.classList.remove('hd-trigger');
		}
	}, false);

	document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
		function initialiseMediaPlayer() {
	   	mediaPlayer.controls = false;
	}

	resize.addEventListener('click', function () {
		if (videoCont.requestFullscreen) {
		  	videoCont.requestFullscreen();
		  	resize.style.display = 'none';
		  	deresize.style.display = 'flex';
		  	deresize.setAttribute('style', 'display:flex !important');
		  	videoLike.style.display = 'none';
		} else if (videoCont.mozRequestFullScreen) {
			videoCont.mozRequestFullScreen();
			resize.style.display = 'none';
			deresize.style.display = 'flex';
			deresize.setAttribute('style', 'display:flex !important');
			videoLike.style.display = 'none';
		} else if (videoCont.webkitRequestFullscreen) {
		  	videoCont.webkitRequestFullscreen();
		  	resize.style.display = 'none';
		  	deresize.style.display = 'flex';
		  	deresize.setAttribute('style', 'display:flex !important');
		  	videoLike.style.display = 'none';
		}
	}, false);

	deresize.addEventListener('click', function () {
		if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	        resize.style.display = 'flex';
		  	deresize.style.display = 'none';
		  	videoLike.style.display = 'flex';
	    } else {
	        document.webkitCancelFullScreen();
	        resize.style.display = 'flex';
		  	deresize.style.display = 'none';
		  	videoLike.style.display = 'flex';
	    }
	}, false);

	// mediaPlayer.addEventListener('progress', function () {
	// 	var bufferedEnd = mediaPlayer.buffered.end(mediaPlayer.buffered.length - 1);
	// 	var duration = mediaPlayer.duration;
	// 	if (duration > 0) {
	// 		buffer.style.width = ((bufferedEnd / duration) * 100) + '%';
	// 	}
	// }, false);

	mediaPlayer.addEventListener('timeupdate', function () {
		var percentage = Math.floor((100 / mediaPlayer.duration) *mediaPlayer.currentTime);
		progress.value = percentage;
		var duration = mediaPlayer.duration;
		if (duration > 0) {
			buffer.style.width = ((mediaPlayer.currentTime / duration) * 100) + '%';
		}
	}, false);
}());

							//Extras
(function () {
	var extras = document.querySelector('.extras'); 
	var closeExtras = document.querySelector('.extras-close');
	var openExtras = document.querySelector('.extras-open');

	closeExtras.addEventListener('click', function () {
		extras.style.display = 'none';
		openExtras.style.display = 'flex';
	}, false);

	openExtras.addEventListener('click', function () {
		extras.style.display = 'flex';
		openExtras.style.display = 'none';
	}, false);
}());

							//Send feedback
(function () {
	var inputCont = document.querySelector('.input-cont'); 
	var fillForm = document.querySelector('.fill-form'); 
	var buttonInput = document.getElementsByName('button-input');
	var emailInput = document.getElementsByName('email-form');
	var sendButton = document.getElementsByName('button-submit');
	var success = document.querySelector('.success');
	var circle = document.querySelector('.fa-check-circle');

	buttonInput[0].addEventListener('click', function () {
		setTimeout(function () {
			setTimeout(function () {
				inputCont.style.opacity = '0';
			}, 100);
			setTimeout(function () {
				fillForm.style.opacity = '1';
			}, 200);
			inputCont.style.display = 'none';
			fillForm.style.display = 'flex';
		}, 200);
	}, false);

	sendButton[0].addEventListener('click', function () {
		setTimeout(function () {
			setTimeout(function () {
				fillForm.style.opacity = '0';
			}, 50);
			setTimeout(function () {
				success.style.opacity = '1';
				success.style.display = 'flex';
			}, 50);
			setTimeout(function () {
				success.style.textDecoration = 'none';
				success.style.display = 'none';
				success.style.opacity = '0';
			}, 3000);
			setTimeout(function () {
				inputCont.style.opacity = '1';
			}, 3500);
			inputCont.style.display = 'flex';
			inputCont.style.textDecoration = 'none';;
			fillForm.style.display = 'none';
		}, 400);
	}, false);
}());
