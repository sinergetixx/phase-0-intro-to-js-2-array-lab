// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let appendedCats = [...cats, name]
    return appendedCats
}

function prependCat(name){
    let prependedCats = [name, ...cats]
    return prependedCats
}

function removeLastCat(){
    let revisedCats = [...cats.slice(0, 2)]
    return revisedCats
}

function removeFirstCat(){
    let revisedCats2 = [...cats.slice(1)]
    return revisedCats2
}