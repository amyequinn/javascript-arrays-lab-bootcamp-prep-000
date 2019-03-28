var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens
}

function destructivelyPrependKitten(Amy){
  kittens.unshift(Amy)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(Broom){
  var appendKitten= ['Broom'];
  console.log(kittens.concat(appendKitten));
}
