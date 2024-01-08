const copyBtn = document.getElementById("copy-btn");
const lengthInput = document.getElementById("length-input");
const lengthSlider = document.getElementById("length-slider");

lengthInput.addEventListener("input", () => {
    lengthSlider.value = lengthInput.value;
    generatePassword();
});
lengthSlider.addEventListener("input", () => {
    lengthInput.value = lengthSlider.value;
    generatePassword();

});

const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generate-btn");
const passwordDisplay = document.getElementById("password-display");

//generate on option change
uppercaseCheck.addEventListener("change", () => {
    generatePassword();
});
lowercaseCheck.addEventListener("change", () => {
    generatePassword();
});
numbersCheck.addEventListener("change", () => {
    generatePassword();
});
symbolsCheck.addEventListener("change", () => {
    generatePassword();
});


//function to get random uppercase or lowercase or number or symbol in array
const randomFunction = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};
// function to get random uppercase
function getRandomUpper() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// function to get random lowercase
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// function to get random number
function getRandomNumber() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// function to get random symbol
function getRandomSymbol() {
    const symbols = '~`!@$%^&*()-_+={}[]|;:<>,./?"';

    return symbols[Math.floor(Math.random() * symbols.length)];
}

// function to get generate password
function generatePassword() {
    const upper = uppercaseCheck.checked;
    const lower = lowercaseCheck.checked;
    const number = numbersCheck.checked;
    const symbol = symbolsCheck.checked;
    const length = lengthInput.value;
    let generatedPassword = "";
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{
        upper
    }, {
        lower
    }, {
        number
    }, {
        symbol
    }].filter(
        (item) => Object.values(item)[0]
    );
    //getting the selected options
    if (typesCount === 0) {
        passwordDisplay.value = "Please select at least one option below.";
        return;
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const functionName = Object.keys(type)[0];
            generatedPassword += randomFunction[functionName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    passwordDisplay.value = finalPassword;
}
generatePassword();

//generate on button click
generateBtn.addEventListener("click", () => {
    generatePassword();
})
//copy button to copy password
copyBtn.addEventListener("click", () => {
    const password = passwordDisplay.value;
    if (!password) {
        return;
    }
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("copied");
});