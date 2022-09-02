import Player from "@vimeo/player";

let throttle = require('lodash.throttle');

const onSeeTime = document.querySelector(`#vimeo-player`);

// const onTimePlay = 0;

 const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on(`timeupdate`, throttle(onTimePlay, 1000));

        function onTimePlay(timeupdate) {

            const run = timeupdate.seconds;
            const onRun = localStorage.setItem("videoplayer-current-time", timeupdate.seconds);

            console.log(onRun)
        };

        function onStartPlay(timeupdate) {
            
        }