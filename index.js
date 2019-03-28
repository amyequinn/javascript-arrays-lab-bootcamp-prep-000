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
  kittens.pop(Ralph)
  return kittens
}
