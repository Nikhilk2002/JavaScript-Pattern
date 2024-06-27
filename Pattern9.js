function triangle1(row) {
    let number = 1;
    let middle = Math.floor(row / 2);

    for (let i = 1; i <= row; i++) {
        let star = "";
        
        if (i <= middle) {
            for (let j = 1; j <= i; j++) {
                star += number + " ";
                number += 2;
            }
        } else {
            let decrementIndex = row - i + 1;
            let decrementNumber = 1 + (decrementIndex - 1) * 2;
            for (let j = 1; j <= decrementIndex; j++) {
                star += decrementNumber + " ";
                decrementNumber += 2;
            }
        }

        console.log(star);
    }
}

triangle1(9);
