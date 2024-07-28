const trianglePattern=(row)=>{
    let star;
   for(let i=1;i<=row;i++){
    star=''
    for(let j=1;j<=row;j++){
        if(j===1 || i+j===row+1 || i===1){
            star+="* "
        }
        else{
            star+="  "
        }
    }
    console.log(star);
   }
}

trianglePattern(6)