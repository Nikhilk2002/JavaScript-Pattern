function rightNumberTriangle1(row){

    for(let i=1;i<=row;i++){
        let star=''
        for(let j=row;j>=1;j--){
            if(j<=i){
               
                 star +=i;
            }
            else{
                star +=" "
            }
        }
        console.log(star);
    }

}

rightNumberTriangle1(6)
