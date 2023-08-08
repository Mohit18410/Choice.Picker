'use strict'
const tags = document.getElementById('tags')
const inputValue = document.getElementById('choice-filling')

inputValue.addEventListener('keyup', (e) => {
  createTag(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTag(input) {
  const tagItem = input
    .split(',')
    .filter((tagItem) => tagItem.trim() !== '')
    .map((tagItem) => tagItem.trim())

  tags.innerHTML = ''

  tagItem.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tags.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlight(randomTag)

    setTimeout(() => {
      removeHighlight(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlight(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const random = document.querySelectorAll('.tag')
  return random[Math.floor(Math.random() * random.length)]
}

function highlight(tag) {
  tag.classList.add('highlight')
}

function removeHighlight(tag) {
  tag.classList.remove('highlight')
}
