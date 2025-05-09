document.addEventListener('DOMContentLoaded', () => {
    let textArea = document.getElementById('textarea');
    let characterCountEl = document.getElementById('characterCount');
    let wordCountEl = document.getElementById('wordCount');

    textArea.addEventListener('input', function () {
        let content = this.value;
        characterCountEl.textContent = content.length;

        content = content.trim();

        let wordList = content.trim().split(/\s+/);

        let words = wordList.filter(function (element) {
            return element != "";
        });

        wordCountEl.textContent = words.length;
    });
})
