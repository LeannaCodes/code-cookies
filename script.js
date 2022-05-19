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

function guessMyAge() {
    let answer;


    do{
    
    answer = prompt("How old is Leanna? Guess a number between 20-30")

    if(answer!=27) {
        alert("Nope, you're wrong...");
    }
    else {
        alert("Well done, you didn't offend me.")
    }
    
    }while (answer != 27)
}
guessMyAge();
