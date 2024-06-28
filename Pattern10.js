function Triangle(row) {
    for (let i = 1; i <= row; i++) {
        let star = '';
        
        for (let j = 1; j <= row + i - 1; j++) {
            if (j <= row - i) {
                star += ' ';
            } else {
                star += '*';
            }
        }

        console.log(star);
    }
}

Triangle(5);
