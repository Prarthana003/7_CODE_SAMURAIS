const lessonList = require("./lessons")

export default function Analyse(list){
    let s=0
    let level=1
    for(var i=0;i<10;i++){
        s+=list[i]
    }

    if (s<10)
        level = 1

    else if(s>=10 && s<30)
        level =2

    else{
        level =3
    }

    return lessonList[level-1]
    
} 