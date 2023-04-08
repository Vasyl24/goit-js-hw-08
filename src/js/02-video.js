import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function currentTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

player.on('timeupdate', throttle(currentTime, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  });
