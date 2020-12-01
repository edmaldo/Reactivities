import React from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((values) => (
            <List.Item key={values.id}>{values.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
