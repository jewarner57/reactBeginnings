import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoItemList extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
            <div className = "listItem">
            
            {this.props.toDoItem.map((toDoItem , index) => (
            
                <ToDoItem textDecoration = {toDoItem.textDecoration} itemID = {toDoItem.itemID} displayedText = {toDoItem.displayedText} index = {index} changed= {this.props.changed} boxChecked = {toDoItem.checked}> </ToDoItem>
            ))}
                
            </div>    
        )
    }
}
