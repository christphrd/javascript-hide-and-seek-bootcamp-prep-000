function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.querySelector('#app').querySelectorAll('ul.ranked-list li')
  for (const li of lis) {
    li.innerHTML = parseInt(li.innerHTML) + n
  }
}

function deepestChild(){
  let nested = document.querySelector('#grand-node')
  while (typeof nested.children[0] !== 'undefined') {
    nested = nested.querySelector('div')
  }
  return nested
}
