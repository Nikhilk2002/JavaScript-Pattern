
const rightUpperTraiangle=(row)=>{
    let star;
    for(let i=1;i<=row;i++){
        star='';
        for(let j=1;j<=row;j++){
            if(j===row||i+j===row+1 || i===row){
                star+="* "
            }
            else{
                star+="  "
            }
           
        }
        console.log(star);
    }
}

rightUpperTraiangle(5)