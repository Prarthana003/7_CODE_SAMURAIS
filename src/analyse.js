const lessonList = require("./lessons")

export default function Analyse(list){
    console.log("this is analyse function, list = ",list)
    let s=0
    let level=1

    let limit = list.length

    for(let i=0;i<limit;i++){
        s+=list[i]
    }
    console.log("final total = ",s)
    if (s<30)
        level = 1

    else if(s>=30 && s<100)
        level =2

    else{
        level =3
    }

    return lessonList[level-1]
    
} 