function leftNumberTriangle(row) {
    for (let i = 1; i <= row; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {

            star += j;
        }
        console.log(star)
    }
}

leftNumberTriangle(5)