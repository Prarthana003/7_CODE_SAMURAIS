import React, { Component } from 'react';
import Analyse from "./analyse"
const list = require("./lessons")
const total = require("./res")

export default function Lesson(){
    console.log(total)
    var l = Analyse(total) 
    return(
        <div>
            <h1>{l[0]}{l[1]}{l[2]}{l[3]}{l[4]}{l[5]}{l[6]}{l[7]}{l[8]}{l[9]}</h1>
            <p>{l}</p>
        </div>
    )
}