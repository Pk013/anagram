
function anagramGrouper() {
    
    let output = document.getElementById("bedestinatin")
    let typedText = alphabetize(document.getElementById("input").value);
    let container = []
    console.log(typedText)
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        let anagram = alphabetize(word)
        if (typedText == anagram){
            console.log(anagram + " " + word)
            container.push(word)
        }
        
    }
    let beConnectin = document.createElement("span")
    beConnectin.appendChild(document.createTextNode(container))
    
    output.appendChild(beConnectin)


}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
