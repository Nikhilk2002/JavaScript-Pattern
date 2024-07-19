
const xPattern=(row)=>{
    let star;
    for(let i=1;i<=row;i++){
        star=' '
        for(let j=1;j<=row;j++){
            if(i===j || i+j===row+1){
                star+="* "
            }
            else{
                star+="  "
            }
        }
        console.log(star);
    }
}

xPattern(7)