import React, { Component } from "react";
import Proptypes from "prop-types";
import { timers } from "jquery";

class Excuse extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            excuse:"primera carga"
        };
        this.generateExcuse= this.generateExcuse.bind(this);
        this.getRandomNumber=this.getRandomNumber.bind(this);
    }
}

let who=['Mi mamá', 'Mi papá', 'Mi hermano', 'Mi amigo']
let what=['se cayó', 'se comió', 'se fue de viaje', 'se retrasó']
let when=['en la mañana', 'en la tarde', 'en la noche', 'en la madrugada']
let feeling=['me sentí triste', 'me dió risa', 'me fui de la casa', 'me enojé']

const getRandomNumber= (length) => {
    return Math.floor(Math.random()*length);
}

function generateExcuse(){
    let excuse =  `${who[getRandomNumber(who.length)]}`;
    excuse +=  `${what[getRandomNumber(what.length)]}`
    excuse +=  `${when[getRandomNumber(when.length)]}`
    excuse +=  `${feeling[getRandomNumber(feeling.length)]}`
    return excuse;
};





props ={

}

export default Excuse;
Excuse.proptypes = {
    excuse: proptypes.string
}