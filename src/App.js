import React from 'react';
import 'App.css';
import Counter from 'Counter';
import Message from 'Message';
import Profile from 'Profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile />
        <Message />
        <Counter color="green" />
        <Counter color="blue" />
        <Counter />
      </div>
    );
  }
}
export default App;
