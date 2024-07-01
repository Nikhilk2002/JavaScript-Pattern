function rightAlphabetTriangle(row) {
    for (let i = 1; i <= row; i++) {
        let alphabet = '';
        for (let j = row; j >= 1; j--) {
            if (j <= i) {
                alphabet += String.fromCharCode(65 + j - 1);
            } else {
                alphabet += " ";
            }
        }
        console.log(alphabet);
    }
}

rightAlphabetTriangle(6);
