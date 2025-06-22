let inputText = document.querySelector(".wordsContent");
let wordCount = document.querySelector(".wordCount");
let characterCount = document.querySelector(".charCount");
let sentenceCount = document.querySelector(".sentencesCount");
let paragraphCount = document.querySelector(".paragraphCount");

inputText.addEventListener("input",()=>{
    characterCount.textContent = inputText.value.length;

    let textTrim = inputText.value.trim();

    wordCount.textContent = textTrim.split(/\s+/).filter((item) => item).length;

    sentenceCount.textContent = textTrim.split(".").filter((item) => item).length;

    paragraphCount.textContent = textTrim.split("\n\n").filter((item) => item).length;

});


// clear button
document.getElementById('clearBtn').addEventListener('click', function() {
    let inputText = document.querySelector(".wordsContent");
    let wordCount = document.querySelector(".wordCount");
    let characterCount = document.querySelector(".charCount");
    let sentenceCount = document.querySelector(".sentencesCount");
    let paragraphCount = document.querySelector(".paragraphCount");

    inputText.value = '';

    wordCount.textContent = 0;
    characterCount.textContent = 0;
    sentenceCount.textContent = 0;
    paragraphCount.textContent = 0;
});

//Paste button
document.getElementById('pasteBtn').addEventListener('click', function() {
    navigator.clipboard.readText().then(text => {
        let inputText = document.querySelector(".wordsContent");
        inputText.value = text;

        // Trigger the input event to update counts
        inputText.dispatchEvent(new Event('input'));
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
});
