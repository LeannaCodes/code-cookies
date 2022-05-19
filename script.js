function getUsername() {
    let myName = prompt("What is your name?");
    return document.write(myName)
}
function getPet() {
    let pet = prompt("Do you prefer Cats or Dogs?");
    let title = "code:cookies" 
    if (pet == "cat") {
        title = "meow:cookies";
    }
    else if (pet = "dog") {
    title = "woof:cookies";
    }
    return document.write(title)
}

function getVegetable() {
    let myVegetable = prompt("Name your favourite vegetable") 
    return document.write(myVegetable)
}

