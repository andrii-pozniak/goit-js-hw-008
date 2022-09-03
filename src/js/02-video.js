import Player from "@vimeo/player";

let throttle = require('lodash.throttle');

const onSeeTime = document.querySelector(`#vimeo-player`);


 const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on(`timeupdate`, throttle(onTimePlay, 1000));

        function onTimePlay(timeupdate) {
            console.log(timeupdate)
          
            
             localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
                   
        }
       
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time")); 