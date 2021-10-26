import React, { Component } from 'react';
import SimpleForm from './components/chatbot/SimpleForm';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'}}>
        
        <SimpleForm />
        
      </div>
    );
  }
       
}

export default App;