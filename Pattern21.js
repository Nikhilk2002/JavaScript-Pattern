const slashFunction=(row)=>{
    let star;
    for(let i=1;i<=row;i++){
        star=' '
        for(let j=1;j<=row;j++){
            if(i==j){
                star+="* "
            }
            else{
                star+=" "
            }
           
        }
        console.log(star);
    }

}

slashFunction(6)