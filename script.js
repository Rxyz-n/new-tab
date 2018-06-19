const NAME  = 'KHƯƠNG JIREN'

const calcTime = () => {
	let	ampm  = "AM",
			sal   = "morning",
			date  = new Date(),
			hours = date.getHours(),
			mins  = date.getMinutes()

	hours > 12 && (sal = "afternoon")
	hours > 18 && (sal = "evening")
	hours > 11 && hours < 24 && (ampm = "PM")
	hours > 12 && (hours -= 12)
	hours < 10 && (hours = '0' + hours)
	mins  < 10 && (mins = '0' + mins)

	renderClock(hours, mins, sal, ampm)	
}

const renderClock = (h, m, s, a) => {
	const clock = document.querySelector('.clock')
	
	clock.querySelector('#time').innerText = `${h}:${m}`
	clock.querySelector('#ampm').innerText = a
	clock.querySelector('#greetings').innerText = `Good ${s}, ${NAME}`
}

setInterval(() => calcTime(), 500)
