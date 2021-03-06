const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setDate() {
  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const seconds = now.getSeconds()

  const hourDegrees = (hour / 12) * 360 + 90
  const minsDegrees = (mins / 60) * 360 + 90
  const secondsDegrees = (seconds / 60) * 360 + 90

  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minHand.style.transform = `rotate(${minsDegrees}deg)`
}

setInterval(setDate, 1000)
