(function() {
var video = document.getElementById('video');
var playBtnIcon = document.querySelector('.fa-play-circle-o');
var backgroundForVideo = document.querySelector('.bg-for-video');
var videoTitleBox = document.querySelector('.video-title-box');
playBtnIcon.style.fontSize = '72px';
playBtnIcon.style.color = 'white';
playBtnIcon.style.position = 'absolute';
playBtnIcon.style.top = '300px'
playBtnIcon.style.left = '50%';
playBtnIcon.style.zIndex = '1';
playBtnIcon.style.cursor = 'pointer';
playBtnIcon.addEventListener('click', playThis, false);
video.addEventListener('click', pauseThis, false);
function pauseThis() {
	video.pause();
	playBtnIcon.style.visibility = 'visible';
	backgroundForVideo.style.visibility = 'visible';
	videoTitleBox.style.visibility = 'visible';
}
function playThis(){
		video.play();
		playBtnIcon.style.visibility = 'hidden';
		backgroundForVideo.style.visibility = 'hidden';
		videoTitleBox.style.visibility = 'hidden';
}
}());
