const squareStar= (row)=>{
    let star;
    for (let i=1;i<=row;i++){
        star=""
        for(let j=1;j<=row;j++){
            if(i===1 || j===1 ||i===row || j===row || i===j){
                star+="* "
            }
            else{
                star+="  ";
            }
           
        }
        console.log(star);
    }
}

squareStar(6)