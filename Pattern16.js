function reverseRihtTriangle(row){
    for(let i=1;i<=row;i++){
        let star="";
        for(j=1;j<=row;j++){
            if(j>=i){
                star+="*"
            }
            else{
                star+=" "
            }
        }
        console.log(star)
    }
}

reverseRihtTriangle(6)