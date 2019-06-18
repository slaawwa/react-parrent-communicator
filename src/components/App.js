import React, { Component } from 'react';

import Calendar from './Calendar'
import Modal from './Modal'

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDay: null,
    }
  }

  onSelect = (selectedDay) => {
    // console.log('selectedDay:', selectedDay)
    this.setState({ selectedDay: selectedDay && selectedDay.toISOString() })
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <h1>My React App!</h1>
        <Calendar
          selectedDay={selectedDay}
          onSelect={this.onSelect}
        />
        <hr />
        <Modal
          selectedDay={selectedDay}
        />
      </div>
    );
  }
}

export default App;