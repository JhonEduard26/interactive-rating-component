const button = document.querySelector('.button')
const container1 = document.querySelector('.first-card')
const container2 = document.querySelector('.second-card')

const handleButton = () => {
  container1.classList.add('hidden')
  container2.classList.add('show')
}

button.addEventListener('click', handleButton)

const cards = document.querySelectorAll('.card__rating-item')

const cardTag = document.querySelector('.card__tag-text')

const handleCards = (event) => {
  let numberSelected = event.target.textContent
  cards.forEach((btn) => {
    btn.classList.remove('active')
  })
  event.target.classList.add('active')
  cardTag.textContent = `You selected ${numberSelected} out of 5`
}

cards.forEach((card) => {
  card.addEventListener('click', handleCards)
})
