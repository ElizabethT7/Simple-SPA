import React from 'react';
import './style.css';

class Watch extends React.Component<{}, { date: Date}> {
  timerID!: number;
  constructor(props: { date: Date }) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <time className='time'>
        {this.state.date.toLocaleTimeString()}
      </time>
    );
  }
}

export default Watch;