const trianglePattern=(row)=>{
    let star;
   for(let i=1;i<=row;i++){
    star=''
    for(let j=1;j<=row;j++){
        if(j===1 || i===row || j===i){
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