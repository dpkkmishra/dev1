import React, { Component } from 'react';
import { Button, Image, List } from 'semantic-ui-react'
 
class MainItems extends Component {
  
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }
 
  createTasks(item) {    
    return <List.Item>
                <List.Content floated='right'>
                    <Button onClick={(e) => this.delete(item.key, e)}>Delete</Button>
                </List.Content>
                <List.Content>
                    {item.text}
                </List.Content>
            </List.Item>    
  }

  delete(key) {
    this.props.delete(key);
  }
 
  render() {    
    var listItems = this.props.entries.map(this.createTasks);
 
    return (
        <List divided verticalAlign='middle'>
          {listItems}
        </List>
    );
  }
};
 
export default MainItems;