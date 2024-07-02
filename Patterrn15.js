function reverseLeftTriangle(row) {
    for (let i = row; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += String.fromCharCode(65 + j - 1); 
        }
        console.log(pattern);
    }
}

reverseLeftTriangle(4);
