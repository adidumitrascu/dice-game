import dogs from '/data.js'
import Dog from './Dog.js'

let index = 0
let firstDog = new Dog(dogs[index])
let isWaiting = false
let isSwiped = false

function renderBtn() {
  document.getElementById('btn').innerHTML = firstDog.getBtnHtml()
  document.getElementById('heart-btn').addEventListener('click', like)
  document.getElementById('cross-btn').addEventListener('click', nope)
}

function render() {
  document.getElementById('card').innerHTML = firstDog.getProfileHtml()
} 

render()
renderBtn()

function like() {
  isSwiped = !isSwiped ? firstDog.setLikedSwiped(true, false) :
  firstDog.setLikedSwiped(false, true)
  render()
  setTimeout(() => renderBtn(), 1500)
  if (!isWaiting) {
    isWaiting = true
    setTimeout(() => {
      index = index < 2 ? index+=1 : index = 0
      firstDog = new Dog(dogs[index])
      isWaiting = false
      render()
    }, 1500)
  }
}

function nope() {
  isSwiped = true
  like()
}  
