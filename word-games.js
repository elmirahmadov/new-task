const words = [
  "Elmir",
  "Soltan",
  "Dürrə",
  "Səma",
  "Musa",
  "İzzət",
  "Emil",
  "Sərxan",
  "Murad",
  "İbrahim",
];

function randomElements(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  return arr[randomIndex1];
}

const guessWords = randomElements(words);

const hiddenWords = guessWords.split("").map(function () {
  return "_";
});

while (hiddenWords.includes("_")) {
  alert(`Your secret word:  ${hiddenWords.join(" ")}`);

  const letter = prompt(`Enter your letter: ${hiddenWords.join(" ")}`);

  let found = false;
  for (let i = 0; i < guessWords.length; i++) {
    if (guessWords[i].toLowerCase() === letter.toLowerCase()) {
      hiddenWords[i] = letter;
      found = true;
    }
  }

  if (!found) {
    alert("Letter not found.");
  }

  alert(hiddenWords.join(" "));
}

alert("Congratulations, you found it!");
