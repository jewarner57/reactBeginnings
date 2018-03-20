import React, { Component } from 'react';
import ToDoItemList from './ToDoItemList';

export default class ToDoItem extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        console.log(this.props.index)
        
        return (
            <div className = "listItem">
            
                <h1><label className = {this.props.textDecoration} id={this.props.itemID}> {this.props.displayedText} <input type="checkbox" className="listCheck" id={this.props.index} onChange={this.props.changed} checked={this.props.boxChecked}/></label></h1>          
                            
            </div>     
        )
    }
}

