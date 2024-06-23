function righttriangle(row){

    for(let i=1;i<=row;i++){
        let star=''
        for(let j=row;j>=1;j--){
            if(j>i){
                 star +=" "
            }
            else{
                star +="*"
            }
        }
        console.log(star);
    }

}

righttriangle(5)