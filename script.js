const YOUR_NAME = 'Nano';
const FILE_NAME = 'background.jpg';

const $ = document.querySelector.bind(document);

(function() {
  const imgExtRegex = /(.jpg|.png|.jpeg)$/i;
  const fileType = imgExtRegex.test(FILE_NAME) ? 'image' : 'video';

  if(fileType === 'image') {
    $('.full-screen').style.background = `url(assets/${FILE_NAME})`;
    return;
  }

  const video = document.createElement('video');
  video.src = `assets/${FILE_NAME}`;
  video.className = 'video'
  video.autoplay  = true;
  video.loop  = true;
  video.muted = true;

  $('.full-screen').appendChild(video);
})();

function calcTime() {
  const now = new Date();
  let ampm  = 'AM',
      asl   = 'morning',
      hours = now.getHours(),
      mins  = now.getMinutes();

  hours > 12 && (sal = 'afternoon');
  hours > 18 && (sal = 'evening');
  hours > 11 && hours < 24 && (ampm = 'PM');
  hours > 12 && (hours -= 12);
  hours < 10 && (hours = '0' + hours);
  mins  < 10 && (mins = '0' + mins);

  render(hours, mins, sal, ampm);
}

function render(hours, mins, sal, ampm) {
  $('.time').innerText = `${hours}:${mins}`;
  $('.ampm').innerText = ampm;
  $('.greetings').innerText = `Good ${sal}, ${YOUR_NAME}`;
}

setInterval(calcTime, 500);
