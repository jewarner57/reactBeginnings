import React, { Component } from 'react';

export default class Button extends React.Component {
    
    constructor(props) {
        super(props);
        
    } 
    
    render() {
        return (
            <button className="button" onClick = {this.props.buttonClicked}>{this.props.title}</button>     
        )
    }
}
