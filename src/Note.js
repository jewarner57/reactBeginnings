
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
        // Think about how you name your variables. This app is small and easy to figure out what they all are.
        // What are "entries"? are the "notes" or "toDoNotes"? What about "textVal"? "textValue" is better but still 
        // not descriptive. Maybe 'newNoteText' or 'newToDoText' or just 'newToDo'? 
        this.state = {textVal: "Enter Text Then Press Submit", currentTextVal: "Text Appears Here", entries: [], count: 1};
    } 
    
    changeColor() {
        // Also best practice is to use const or let instead of var.
        // It helps keep things in scope. Use const for things that stay contsant and
        // let for things that change.
      //
        // again variable naming. 
        var tempArray = [...this.state.entries];
        
        for(var i = 0; i < tempArray.length; i++) {
            
            if(tempArray[i].checked == true) {
                
                if(tempArray[i].decoration == "none" || tempArray[i].decoration == "noneReset") {
                    
                    tempArray[i].decoration = "decoration";
                    
                }
                else {
                    
                    tempArray[i].decoration = "noneReset";
                    
                }
                
                tempArray[i].checked = false;
                
            }
            
        }
        
        this.setState({entries: tempArray})
    }
    
    onSubmit(event) {
      // optional but best practice:  
      //
      // const { entries, count } = this.state;
      //
      // That way you can call "entries" or "count" without using "this.state", this can be in any of the methods.
        
      // variable naming
        const array = [...this.state.entries];
        const countTemp = this.state.count+=5; // the this.state.count+=5 mutates state
        this.setState({count: countTemp});
        
        const textTemp = this.state.textVal;
        this.setState({currentTextVal: textTemp})
        
        
        array.push({
            
            id: this.state.count,
            text: textTemp,
            checked: false,
            decoration: "none"
            
        })
      // Try only calling setState once in this method.
      // Ex: this.setState({ entries: array, count: countTemp, currentTextVal: textTemp });
        
        this.setState({entries: array});
        event.preventDefault();
    }
    
    valChanged(event) {
        this.setState({textVal: event.target.value});
    }
    
    checked(event) {
      // variable naming
        var array = [...this.state.entries];
        array[event.target.id].checked = event.target.checked;
        
        this.setState({entries: array});
    }
    
    removeSelectedEntries() {
      // variable naming
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
      {/* You can use destructuring here: 
          const { textVal, entries } = this.state; */}
        return (
            <div>
                <div className ="enterText">
                    <form onSubmit={this.onSubmit}>
          {/* I'm pretty sure you can add a 'placeholder' prop to and set it to 'Enter Text Then Press Submit'
                        // That way the placeholder text goes away when you start typing. */}
                        <textarea rows="8" cols="50" className="textArea" value={this.state.textVal} onChange={this.valChanged} >Test Value</textarea>
                        <input type="Submit" value="Submit" className="submitButton"/> 
                    </form>
                </div>
                <div>
                    { /* This can be it's own component */
                      this.state.entries.map((entry, index) => (
            
                        <div className = "listItem">
            
                            <h1><label className = {entry.decoration} id={entry.id}> {entry.text} <input type="checkbox" className="listCheck" id={index} onChange={this.checked} checked={entry.checked}/></label></h1>          
                            
                        </div>
            
                    ))}
                    {/* Same for buttons: you can make these their own component so when you call it:
                        <Button onClick={this.function} title={'Bold'} />
                    */}
                    <button className="button" onClick={this.changeColor} >Bold</button>     
                    <button className="button" onClick={this.removeSelectedEntries} >Delete</button>
                    
                </div>
            </div>
        )
    }
}
