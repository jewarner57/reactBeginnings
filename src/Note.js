
import React, { Component } from 'react';

export default class Note extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.changeColor = this.changeColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.valChanged = this.valChanged.bind(this); 
        this.checked = this.checked.bind(this);
        this.removeSelectedEntries = this.removeSelectedEntries.bind(this);
        
        const entries = [];
        
        
        entries.push({
            
            id: 1,
            text: "Text",
            checked: false,
            decoration: "none"
            
        })
        
        this.state = {textVal: "Enter Text Then Press Submit", currentTextVal: "Text Appears Here", entries: [], count: 1};
    } 
    
    changeColor() {
        
        var tempArray = [...this.state.entries];
        
        for(var i = 0; i < tempArray.length; i++) {
            
            if(tempArray[i].checked == true) {
                
                if(tempArray[i].decoration == "none") {
                    
                    tempArray[i].decoration = "decoration";
                    
                }
                else {
                    
                    tempArray[i].decoration = "none";
                    
                }
                
                tempArray[i].checked = false;
                
            }
            
        }
        
        this.setState({entries: tempArray})
    }
    
    onSubmit(event) {
        
        const array = [...this.state.entries];
        const countTemp = this.state.count+=5;
        this.setState({count: countTemp});
        
        const textTemp = this.state.textVal;
        this.setState({currentTextVal: textTemp})
        
        
        array.push({
            
            id: this.state.count,
            text: textTemp,
            checked: false,
            decoration: "none"
            
        })
        
        this.setState({entries: array});
        event.preventDefault();
    }
    
    valChanged(event) {
        this.setState({textVal: event.target.value});
    }
    
    checked(event) {
        var array = [...this.state.entries];
        array[event.target.id].checked = event.target.checked;
        
        this.setState({entries: array});
    }
    
    removeSelectedEntries() {
        var array = [...this.state.entries];
        var tempArray = [];
        
        for(var i = 0; i < array.length; i++) {
            
            if(array[i].checked == false) {
                tempArray.push(array[i]);
            }
            
        }
        
        this.setState({entries: tempArray})
        
    }
    
    render() {
        return (
            <div>
                <div className ="enterText">
                    <form onSubmit={this.onSubmit}>
                        <textarea rows="8" cols="50" className="textArea" value={this.state.textVal} onChange={this.valChanged} >Test Value</textarea>
                        <input type="Submit" value="Submit" className="submitButton"/> 
                    </form>
                </div>
                <div>
                    {this.state.entries.map((entry, index) => (
            
                        <div className = "listItem">
            
                            <h1><label className = {entry.decoration} id={entry.id}> {entry.text} <input type="checkbox" className="listCheck" id={index} onChange={this.checked} checked={entry.checked}/></label></h1>          
                            
                        </div>
            
                    ))}
                    <button className="button" onClick={this.changeColor} >Bold</button>     
                    <button className="button" onClick={this.removeSelectedEntries} >Delete</button>
                    
                </div>
            </div>
        )
    }
}