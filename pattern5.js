function leftNumberTriangle3(row) {
    let k=1;
    for (let i = 1; i <= row; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {

            star += k+" ";
            k++;
        }
        console.log(star)
    }
}

leftNumberTriangle3(5)