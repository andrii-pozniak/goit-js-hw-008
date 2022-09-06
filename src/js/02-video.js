import Player from "@vimeo/player";

let throttle = require('lodash.throttle');

const STORAGE_KEY = "videoplayer-current-time"
const onSeeTime = document.querySelector(`#vimeo-player`);


 const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on('timeupdate', throttle(onTimePlay, 1000));

        function onTimePlay(timeupdate) {
            console.log(timeupdate)          
            
             localStorage.setItem(STORAGE_KEY, timeupdate.seconds);
                   
        }
      
        const saveMassage = localStorage.getItem(STORAGE_KEY);
        if (saveMassage) {
            player.setCurrentTime(saveMassage); 
        }
       
        