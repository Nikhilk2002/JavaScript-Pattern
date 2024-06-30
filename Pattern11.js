function  numberTriangle(row) {
    for (let i = 1; i <= row; i++) {
        let star = '';
        let k=1
        for (let j = 1; j <= row + i - 1; j++) {
            if (j <= row - i) {
                star += ' ';
            } else {
                star += k;
                k++
            }
        }

        console.log(star);
    }
}

numberTriangle(5);
