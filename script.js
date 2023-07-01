async function getNouns() {
    return fetch("json/nouns.json").then(res => res.json()).then(json => json.nouns); 
}; 

async function main() {
    const element = document.querySelector("#text");
    const nouns = await getNouns();
    
    let word;
    let splitWord;
    let joinChars;

    function randomWord() {
        let noun = nouns[Math.floor(Math.random() * nouns.length)];
        word = noun.charAt(0).toLowerCase() + noun.slice(1);

        splitWord = word.split("");
        joinChars = splitWord.join("");
    };
    randomWord();

    function updateElement() {
        element.innerHTML = joinChars;
    };
    updateElement();

    const lastPressedKey = document.addEventListener(
        "keydown",
        function(event) {
            console.log(event.key);
            if (event.key === splitWord[0]) {
                splitWord.shift();
                joinChars = splitWord.join("");
                if (joinChars === "") {
                    randomWord();
                };
                updateElement();
            };
        }
    );
};

main();