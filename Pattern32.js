
const Hpattern=(row)=>{
    let star;
    let mid =Math.round(row/2)
    for(let i=1;i<=row;i++){
        star='';
        for(let j=1;j<=row;j++){
            if(j===1 || j===row || i===mid){
                star+="* "
            }
            else{
                star+="  "
            }
           
        }
        console.log(star);
    }
}

Hpattern(7)