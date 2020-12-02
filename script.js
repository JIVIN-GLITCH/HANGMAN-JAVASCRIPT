// DECLARE variables
const alphaButtons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let word = 'EVAPORATE'
let dashedWord = []
let turns = 15


// Functions
function display() {

	// Displays the dashes on page load
	for (let i = 0; i < word.length; i++) {
		dashedWord.push('__')
		result.textContent += dashedWord[i] + ' ';
	}
}

function checkLetter(btn) {

	// Check if the button pressed is a letter of the word
	if (word.includes(btn.innerText)) {
		for (let i = 0; i < word.length; i++) {
			if (word[i] === btn.innerText) {
				// Changes the dash with correct word
				dashedWord[i] = btn.innerText;
			}
		}
		result.textContent = '';
		for (let i = 0; i < word.length; i++) {
			// Displays the correct letter on the screen
		result.textContent += dashedWord[i] + ' ';
		}

		if (!(dashedWord.includes('__'))) {
			// Checks if the user has won
			alert('congrats!');
		}
	}


	else {
		// Reduces a turn
		turns --;

		// Checks if the user has lost
		if (turns <= 0) {
			alert('You lost!')
		}
		else {
			// Displays the number of turns left
			document.querySelector('#turns').textContent = 'Turns Left: ' + turns;
		}
	}
}