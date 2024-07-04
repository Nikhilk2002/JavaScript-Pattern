function reverseNumberRihtTriangle(row){
    let k=1
    for(let i=1;i<=row;i++){
        let star="";
        for(j=1;j<=row;j++){
            if(j>=i){
                star+=j
               
            }
            else{
                star+=" "
            }
          
        }
        console.log(star)
    }
}

reverseNumberRihtTriangle(6)