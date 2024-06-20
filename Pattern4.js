function leftNumberTriangle2(row) {
    for (let i = 1; i <= row; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {

            star += i+" ";
        }
        console.log(star)
    }
}

leftNumberTriangle2(5)