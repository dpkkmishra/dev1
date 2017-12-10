import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import  MainItems  from './MainItems';
class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;
     
        if (this.title !== "") {
            itemArray.unshift({
                text: this.title,
                description: this.description,
                key: Date.now()
            });
     
            this.setState({
                items: itemArray
            });
         
            this.title = "";
            this.description = "";
        }    
            
        console.log(itemArray);
       
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return ( 
            <div>
              <Form onSubmit={this.addItem}>
                <Form.Group widths=''>
                  <Form.Field id='title' control={Input} label='Title' placeholder='' onChange={e => this.title = e.target.value}  />
                </Form.Group>
                <Form.Field  width="100%" height="400" id='description' control={TextArea} label='Description' placeholder='' onChange={e => this.description = e.target.value}/>
                <Form.Field id='form-button-control-public' type="submit" control={Button} content='save'/>
              </Form>
              <MainItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default Main;