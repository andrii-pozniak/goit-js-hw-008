import Player from "@vimeo/player";

let throttle = require('lodash.throttle');

const onSeeTime = document.querySelector(`#vimeo-player`);

// const onTimePlay = 0;

 const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on(`timeupdate`, throttle(onTimePlay, 1000));

        function onTimePlay(timeupdate) {
            console.log(timeupdate)
            // timeupdate.preventDefault();
            const run = timeupdate.seconds;
            const onRun = localStorage.setItem("videoplayer-current-time", timeupdate.seconds);

            console.log(onRun)

            player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
               const onBeginPlay = localStorage.getItem("videoplayer-current-time")
                seconds = onBeginPlay;
            }).catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                        // the time was less than 0 or greater than the video’s duration
                        break;
            
                    default:
                        // some other error occurred
                        break;
                }
            });
        };

        // player.setCurrentTime(onRun).then(function(seconds) {
        //     seconds = onRun;
        // }).catch(function(error) {
        //     switch (error.name) {
        //         case 'RangeError':
        //             // the time was less than 0 or greater than the video’s duration
        //             break;
        
        //         default:
        //             // some other error occurred
        //             break;
        //     }
        // });

        // function onStartPlay(timeupdate) {
            
        // }