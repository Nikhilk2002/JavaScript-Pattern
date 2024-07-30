
const rightUpperTraiangle=(row)=>{
    let star;
    for(let i=1;i<=row;i++){
        star='';
        for(let j=1;j<=row;j++){
            if(i===1 ||i===j || j===row){
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