function leftAlphabetTriangle(row) {
    for (let i = 1; i <= row; i++) {
        let alphabet = '';
        for (let j = 0; j < i; j++) {
            alphabet += String.fromCharCode(65 + j); 
        }
        console.log(alphabet);
    }
}

leftAlphabetTriangle(5);
