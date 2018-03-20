
import React, { Component } from 'react';
import Button from './Button';
import ToDoItem from './ToDoItem';
import ToDoItemList from './ToDoItemList';

export default class Note extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.changeColor = this.changeColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.valChanged = this.valChanged.bind(this); 
        this.checked = this.checked.bind(this);
        this.removeSelectedToDoItem = this.removeSelectedToDoItem.bind(this);
        
        const toDoItem = [];
        
        
        toDoItem.push({
            
            id: 1,
            displayedText: "Text",
            checked: false,
            textDecoration: "none"
            
        })
        
        this.state = {textValue: "Enter Text Then Press Submit", toDoItem: [], toDoItemCount: 1};
    } 
    
    changeColor() {
        
        const toDoItemArray = [...this.state.toDoItem];
        
        for(let i = 0; i < toDoItemArray.length; i++) {
            
            if(toDoItemArray[i].checked == true) {
                
                if(toDoItemArray[i].textDecoration == "none" || toDoItemArray[i].textDecoration == "noneReset") {
                    
                    toDoItemArray[i].textDecoration = "bold";
                    
                }
                else {
                    
                    toDoItemArray[i].textDecoration = "noneReset";
                    
                }
                
                toDoItemArray[i].checked = false;
                
            }
            
        }
        
        this.setState({toDoItem: toDoItemArray})
    }
    
    onSubmit(event) {
        
        const toDoItemArray = [...this.state.toDoItem];
        const toDoItemIDCounter = this.state.toDoItemCount + 1;
        this.setState({toDoItemCount: toDoItemIDCounter});
        const textValue = this.state.textValue;
        
        
        toDoItemArray.push({
            
            id: this.state.toDoItemCount,
            displayedText: textValue,
            checked: false,
            textDecoration: "none"
            
        })
        
        this.setState({toDoItem: toDoItemArray, currentTextVal: textValue, toDoItemCount: this.state.toDoItemCount+1});
        event.preventDefault();
    }
    
    valChanged(event) {
        this.setState({textValue: event.target.value});
    }
    
    checked(event) {
        let toDoItemArray = [...this.state.toDoItem];
        
        toDoItemArray[event.target.id].checked = event.target.checked;
        
        this.setState({toDoItem: toDoItemArray});
    }
    
    removeSelectedToDoItem() {
        const currentToDoItem = [...this.state.toDoItem];
        let newToDoItemList = [];
        
        for(let i = 0; i < currentToDoItem.length; i++) {
            
            if(currentToDoItem[i].checked == false) {
                newToDoItemList.push(currentToDoItem[i]);
            }
            
        }
        
        this.setState({toDoItem: newToDoItemList})
        
    }
    
    render() {
        return (
            <div>
                <div className ="enterText">
                    <form onSubmit={this.onSubmit}>
                        <textarea rows="8" cols="50" className="textArea" placeholder={this.state.textValue} onChange={this.valChanged} ></textarea>
                        <input type="Submit" value="Submit" className="submitButton"/> 
                    </form>
                </div>
                <div>
                    <ToDoItemList toDoItem = {this.state.toDoItem} changed={this.checked}> </ToDoItemList>
                </div>
                
                    <Button buttonClicked={this.changeColor} title = {'Bold'}></Button>    
                    <Button buttonClicked={this.removeSelectedToDoItem} title = {'Delete'}></Button>    
                    
            </div>
        )
    }
}