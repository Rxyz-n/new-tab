const YOUR_NAME = 'Nano';
const FILE_NAME = 'background.jpg';

const $ = document.querySelector.bind(document);

(() => {
  const imgExtRegex = /(.jpg|.png|.jpeg)$/i;
  const fileType = imgExtRegex.test(FILE_NAME) ? 'image' : 'video';

  if(fileType === 'image') {
    $('.full-screen').style.background = `url(assets/${FILE_NAME})`;
    return;
  }

  const video = document.createElement('video');
  video.src = `assets/${FILE_NAME}`;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;

  $('.full-screen').appendChild(video);
})();

// const calcTime = () => {
// 	let	ampm  = "AM",
// 			sal   = "morning",
// 			date  = new Date(),
// 			hours = date.getHours(),
// 			mins  = date.getMinutes()

// 	hours > 12 && (sal = "afternoon")
// 	hours > 18 && (sal = "evening")
// 	hours > 11 && hours < 24 && (ampm = "PM")
// 	hours > 12 && (hours -= 12)
// 	hours < 10 && (hours = '0' + hours)
// 	mins  < 10 && (mins = '0' + mins)

// 	renderClock(hours, mins, sal, ampm)
// }

// const renderClock = (h, m, s, a) => {
// 	const clock = document.querySelector('.background')

// 	clock.querySelector('#time').innerText = `${h}:${m}`
// 	clock.querySelector('#ampm').innerText = a
// 	clock.querySelector('#greetings').innerText = `Good ${s}, ${NAME}`
// }

// setInterval(calcTime, 1000)
