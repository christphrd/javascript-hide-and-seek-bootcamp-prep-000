function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var objTarget = document.getElementsByClassName('target')
  return objTarget[0]
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}
}

function deepestChild(){
  var List = document.getElementById('grand-node')
  while (typeof List.children[0] !== 'undefined') {
    List = List.querySelector('div')
  }
  return List
}
