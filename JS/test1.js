const string = "Привет! Как дэла?";
const vowels = ["е", "и", "у", "о", "э", "а", "ё", "ю", "я", "п", "П"];

const getVowels = filt => {
    let extractedVowels = "";


    for (i = 0; i < filt.length; i++) {
        const currentLetter = filt[i];

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }
    
    return extractedVowels;
}

console.log(getVowels(string));