function stringTriangle(row) {
    for (let i = 1; i <= row; i++) {
        let result = '';
        let k = 0;
        for (let j = 1; j <= row + i - 1; j++) {
            if (j <= row - i) {
                result += ' ';
            } else {
                result += String.fromCharCode(65 + k);
                k++;
            }
        }
        console.log(result);
    }
}

stringTriangle(5);
