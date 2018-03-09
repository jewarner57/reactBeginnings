
import React, { Component } from 'react';

export default class Note extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.changeColor = this.changeColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.valChanged = this.valChanged.bind(this); 
        
        const entries = [];
        
        
        entries.push({
            
            id: 1,
            text: "Text"
            
        })
        
        this.state = {started: true, textVal: "Enter Text Then Press Submit", currentTextVal: "Text Appears Here", entries: [], count: 1};
    } 
    
    changeColor() {
        this.setState({started: !this.state.started});
    }
    
    onSubmit(event) {
        
        const array = [...this.state.entries];
        const countTemp = this.state.count+=5;
        this.setState({count: countTemp});
        
        const textTemp = this.state.textVal;
        this.setState({currentTextVal: textTemp})
        
        
        array.push({
            
            id: this.state.count,
            text: textTemp
            
            
        })
        this.setState({entries: array});
        event.preventDefault();
    }
    
    valChanged(event) {
        this.setState({textVal: event.target.value});
    }
    
    render() {
        
        var display = "decoration";
        
        if(this.state.started) {
            display = "decoration";
        }
        else {
            display = "none";
        }
        
        return (
            <div>
                <div className ="enterText">
                    <form onSubmit={this.onSubmit}>
                        <textarea rows="8" cols="50" className="textArea" value={this.state.textVal} onChange={this.valChanged} >Test Value</textarea>
                        <input type="Submit"/> 
                    </form>
                </div>
                <div>
                    {this.state.entries.map((entry, index) => (
            
                        <div>
                            <h1 key={entry.id} className = {display} > {entry.text} </h1>
                        </div>
            
                    ))}
                    <button className="button" onClick={this.changeColor} >Bold</button>     
                    
                </div>
            </div>
        )
    }
}