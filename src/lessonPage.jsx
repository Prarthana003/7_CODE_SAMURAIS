import React, { Component } from 'react';
import Analyse from "./analyse"
const list = require("./lessons")


export default function Lesson(){
    var l = Analyse([0,0,3,0,0,0,0,0,0,0]) 
    return(
        <div>
            <h1>{l[0]}{l[1]}{l[2]}{l[3]}{l[4]}{l[5]}{l[6]}{l[7]}{l[8]}{l[9]}</h1>
            <p>{l}</p>
        </div>
    )
}