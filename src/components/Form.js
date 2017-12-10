import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
class Form1 extends Component {
	constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);        
    }
    addItem(e) {
        var itemArray = this.state.items;
     	console.log(this.title);
     	console.log(this.description);

        if (this.title.value !== "") {
            itemArray.unshift({
                text: this.title,
                description: this.description                
            });
     
            this.setState({
                items: itemArray
            });
         
            this.title = "";
            this.description = "";
        }
       
        e.preventDefault();
    }

	render() {
        return ( 
            <Form onSubmit={this.addItem}>
                <Form.Group widths=''>
                    <Form.Field id='title' control={Input} label='Title' placeholder='' onChange={e => this.title = e.target.value}  />
                </Form.Group>
                <Form.Field  width="100%" height="400" id='description' control={TextArea} label='Description' placeholder='' onChange={e => this.description = e.target.value}/>
                <Form.Field id='form-button-control-public' type="submit" control={Button} content='save'/>
            </Form>
            <Main1 entries={this.state.items}
                delete={this.deleteItem}/>
            </div>
		);
	}
}

export default Form1;