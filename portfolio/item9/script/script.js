window.onload = function() {
    'use strict';
    (function() {
        function Phone(node) {
            this.node = node;
            this.Phone = this.BuildPhone();
            this.play = this.node.querySelector('.fa-play');
            this.pause = this.node.querySelector('.fa-pause');
            this.shuffle = this.node.querySelector('.shuffle');
            this.nextSong = this.node.querySelector('.next');
            this.prevSong = this.node.querySelector('.previous');
            this.elapsedTime = 0;
        }
        Phone.prototype.BuildPhone = function() {
            var container = document.createElement('div');
            container.className += ' edging';
            container.innerHTML = '<div class="phone-container"><div class="home-button"></div><div class="bright-sensor"></div><div class="camera"></div><div class="speaker"></div><div class="screen"><div class="top-of-screen"><div class="signal-level"><div></div><div></div><div></div><div></div><div></div></div><div class="operator"></div><i class="fa fa-wifi"></i><span class="current-time"></span><div class="bluetooth"></div><span class="battery-digit">92%</span><div class="battery-cont"></div></div><div class="player-cont"><i class="fa fa-angle-left"></i><span class="songs-count-cont">1 of 500</span><i class="fa fa-list-ul"></i><div class="list-window"><span class="rating">Rating</span><span class="done">Done</span><div class="list-song-title"><span class="list-artist">Triangle Sun</span><span class="list-album">Unknown album</span><span class="list-quantity-songs">2 songs</span><span class="list-total-duration">7:39</span></div><div class="list-all-songs"></div><div class="rating-box"><div class="rating-star"></div><div class="rating-star"></div><div class="rating-star"></div><div class="rating-star"></div><div class="rating-star"></div></div></div><div class="album-cover-cont"></div><div class="progress-bar"><input type="range" min="0" max="100" step="1" id="fader1" value="0"><span class="time time-elapsed">0:00</span><span class="time time-remain">-3:00</span></div><div class="current-song"><span class="song">Your Little Clown</span><span class="artist">Triangle Sun</span></div><div class="controls"><i class="fa fa-backward"></i><i class="fa fa-pause"></i><i class="fa fa-play"></i><i class="fa fa-forward"></i></div><div class="volume"><i class="fa fa-volume-off"></i><input type="range" min="0" max="100" step="1" id="fader2" value="0"><i class="fa fa-volume-up"></i></div><input type="button" value="Repeat" class="repeat"><div class="repeat-window"><li>Repeat Off</li><li>Repeat Song</li><li>Repeat All</li><li class="cancel">Cancel</li></div><input type="button" value="Create" class="create"><div class="create-window"><li>Genius Playlist</li><li>New Station from Artist</li><li>New Station from Song</li><li class="cancel">Cancel</li></div><input type="button" value="Shuffle" class="shuffle"></div></div></div>';
            this.node.appendChild(container);
            //if 0:0 => will be 00:00 etc.
            function checkForZero(i) {
                if (i < 10) {
                    i = '0' + i;
                }
                return i;
            }
            //Clock in the bar
            window.time = function () {
                var date = new Date();
                var el = document.querySelector('.current-time');
                var amPm;
                if (date.getHours() > 0 && date.getHours() < 12) {
                    amPm = 'AM';
                } else if (date.getHours() < 24 && date.getHours() > 12) {
                    amPm = 'PM';
                } else {
                    amPm = 'PM';
                }
                var local = checkForZero(date.getHours()) + ':' + checkForZero(date.getMinutes()) + ' ' + amPm;
                el.innerHTML = local;
                setTimeout('time()', 1000);
            }
            time();
            //Toggle shuffle button on the bottom
            window.shuffle = function () {
            	var shuf = document.querySelector('.shuffle');
            	shuf.addEventListener('click', function () {
            		if (shuf.value == "Shuffle") {
            			shuf.value = "Shuffle All";
            			shuf.style.background = '#FC214B';
    					shuf.style.color = 'white';
    					shuf.style.borderRadius = '3px';
    				} else { 
    					shuf.value = "Shuffle";
    					shuf.style.background = 'white';
    					shuf.style.color = '#FC214B';
    				}
            	}, false);
            }
            shuffle();
            //Drop down menus of Create, Repeat and List
            window.menus = function () {
            	var divRepeat = document.querySelector('.repeat-window');
            	var divCreate = document.querySelector('.create-window');
            	var divList = document.querySelector('.list-window')
            	var getScreen = document.querySelector('.screen'); 
            	var create = document.querySelector('.create');
            	var repeat = document.querySelector('.repeat');
            	var list = document.querySelector('.fa-list-ul')
            	var cancel = document.querySelector('.cancel');
            	var screenShadow = document.createElement('div');
            	var albumBg = document.querySelector('.album-cover-cont ');
            	//Opening menus listeners
            	create.addEventListener('click', function () {
            		divCreate.style.top = '-151px';
            		if (screenShadow.className == '') {
            			screenShadow.classList.add('screen-shadow');
            		} else {
            			screenShadow.classList.toggle('screen-shadow');
            		}
            		getScreen.appendChild(screenShadow);
            		}, false);
            	repeat.addEventListener('click', function () {
            		divRepeat.style.top = '-40px';
					if (screenShadow.className == '') {
            			screenShadow.classList.add('screen-shadow');
            		} else {
            			screenShadow.classList.toggle('screen-shadow');
            		}
            		getScreen.appendChild(screenShadow);
            		}, false);
            	list.addEventListener('click', function () {
            		divList.style.top = '25px';
            	}, false);
            	//Closing menus listeners
            	getScreen.addEventListener('click', function (e) {
            		var event = e || window.event,
            			target = event.CurrentTarget || event.srcElement;
            			if (target.className == 'cancel' || target.className == 'done') {
            				divCreate.style.top = '-30px';
            				divRepeat.style.top = '80px';
            				divList.style.top = '340px';
            				if (screenShadow.className == 'screen-shadow') {
            					screenShadow.classList.toggle('screen-shadow');
            				} 
            			}
            	}, false);

            }
            menus();
            window.playerControls = function () {
        	var play = document.querySelector('.fa-play');;
        	var pause = document.querySelector('.fa-pause');
        	play.addEventListener('click', function () {
        		play.style.display = 'none';
        		play.style.opacity = '0';
        		pause.style.opacity = '1';
        		pause.style.display = 'block';
        	}, false);
        	pause.addEventListener('click', function () {
        		play.style.opacity = '1';
        		play.style.display = 'block';
        		pause.style.display = 'none';
        		pause.style.opacity = '0';
        	}, false);
        }
        playerControls();
        };


        // Phone.prototype.currentTime = function () {

        // };

        new Phone(document.querySelector('.wrapper'));

    }());
};

