
const parallelLine=(row)=>{
    let star;
    for(let i=1;i<=row;i++){
        star='';
        for(let j=1;j<=row;j++){
            if(j===1 || j===row){
                star+="* "
            }
            else{
                star+="  "
            }
           
        }
        console.log(star);
    }
}

parallelLine(7)