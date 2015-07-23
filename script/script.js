'use strict';
;(function () {
	var buttonForShow = document.querySelector('.vertical-header');
	var containerForShow = document.querySelector('.hide-scroll');
	var copyRight = document.getElementsByTagName('footer')[0];
	var column = document.querySelector('.column');
	var canvas = document.querySelector('.canvas');
	var ctx = canvas.getContext('2d');
	var activeLink = document.querySelectorAll('.active');

	if (buttonForShow.hasChildNodes()) {
		var buttonChildren = buttonForShow.children;
		console.log(buttonChildren);
		for (var i = 0; i < buttonChildren.length; i += 1) {
			buttonChildren[4].addEventListener('click', showElementResume, false);
			buttonChildren[5].addEventListener('click', showElementPortfolio, false);
			buttonChildren[6].addEventListener('click', showElementContacts, false);		
		}
	}
	function showElementResume () {
		for (var i = 1; i < containerForShow.children.length; i += 1) {
			containerForShow.children[0].style.display = 'none';
			containerForShow.children[1].style.display = 'block';
			containerForShow.children[2].style.display = 'none';
			containerForShow.children[3].style.display = 'none';
		}
		for(var i = 0; i < activeLink.length; i += 1) {
			activeLink[0].style.display = 'block';
			activeLink[1].style.display = 'none';
			activeLink[2].style.display = 'none';
		}
	}
	function showElementPortfolio () {
		for (var i = 1; i < containerForShow.children.length; i += 1) {
			containerForShow.children[2].style.display = 'block';
			containerForShow.children[0].style.display = 'none';
			containerForShow.children[1].style.display = 'none';
			containerForShow.children[3].style.display = 'none';
		}
		for(var i = 0; i < activeLink.length; i += 1) {
			activeLink[0].style.display = 'none';
			activeLink[1].style.display = 'block';
			activeLink[2].style.display = 'none';
		}
	}
	function showElementContacts () {
		for (var i = 1; i < containerForShow.children.length; i += 1) {
			containerForShow.children[3].style.display = 'block';
			containerForShow.children[0].style.display = 'none';
			containerForShow.children[1].style.display = 'none';
			containerForShow.children[2].style.display = 'none';
		}
		for(var i = 0; i < activeLink.length; i += 1) {
			activeLink[0].style.display = 'none';
			activeLink[1].style.display = 'none';
			activeLink[2].style.display = 'block';
		}
	}
	function drawEducationShape() {
		if (canvas.getContext) {
			ctx.fillStyle = 'grey';
			ctx.fillRect(400, 430, 20, 300);
		//Drawing the experience circles
		for (var i = 0; i < 4; i += 1) {
			for (var j = 0; j < 1; j += 1) {
				ctx.beginPath();
				var x = 410 + j * 50;
				var y = 460 + i * 80;
				var radius = 12;
				var startAngle = 0;
				var endAngle = Math.PI * 2;
				var anticlockwise = i % 2 == 0 ? false : true;
				ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
				if (i >= 0) {
					ctx.fillStyle = 'white';
					ctx.fill();
				} else {
					ctx.strokeStyle = 'white';
					ctx.stroke()
				}
			}
		}
		//Drawing the education paths
			ctx.beginPath();
			ctx.moveTo(430, 460);
			ctx.lineTo(470, 490);
			ctx.lineTo(660, 490);
			ctx.moveTo(390, 540)
			ctx.lineTo(350, 510);
			ctx.lineTo(185, 510);
			ctx.moveTo(430, 620);
			ctx.lineTo(470, 590);
			ctx.lineTo(655, 590);
			ctx.moveTo(390, 700);
			ctx.lineTo(350, 670);
			ctx.lineTo(95, 670);
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'grey';
			ctx.stroke();
		}
	}
	drawEducationShape();
	function drawExperienceShape() {
		if (canvas.getContext) {
			ctx.fillStyle = 'grey';
			ctx.fillRect(400, 50, 20, 300);
		//Drawing the experience circles
		for (var i = 0; i < 5; i += 1) {
			for (var j = 0; j < 1; j += 1) {
				ctx.beginPath();
				var x = 410 + j * 50;
				var y = 110 + i * 50;
				var radius = 12;
				var startAngle = 0;
				var endAngle = Math.PI * 2;
				var anticlockwise = i % 2 == 0 ? false : true;
				ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
				if (i >= 0) {
					ctx.fillStyle = 'white';
					ctx.fill();
				} else {
					ctx.strokeStyle = 'white';
					ctx.stroke()
				}
			}
		}
		//Drawing the experience paths
		ctx.beginPath();
		ctx.moveTo(390, 110);
		ctx.lineTo(350, 140);
		ctx.lineTo(95, 140);
		ctx.moveTo(430, 160);
		ctx.lineTo(470, 130);
		ctx.lineTo(690, 130);
		ctx.moveTo(390, 210);
		ctx.lineTo(350, 240);
		ctx.lineTo(255, 240);
		ctx.moveTo(430, 260);
		ctx.lineTo(470, 230);
		ctx.lineTo(640, 230);
		ctx.moveTo(390, 310);
		ctx.lineTo(350, 340);
		ctx.lineTo(210, 340);
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'grey';
		ctx.stroke();
		}
	}
	drawExperienceShape();

}());

