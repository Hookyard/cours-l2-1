import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
     time: 0,
     
    }
 
  }

  componentDidMount() {
    // ...
    
    
    this.timer = setInterval(() => this.setState({
    time: Math.round(this.state.time +1/10)
       }), 1000).toFixed(2);
    
  }

  componentWillUnmount() {
    // ...
  }
  
  render () {
    return (
      <div data-testid="timer">
      
      <h1>  {this.state.time} </h1>
        
        
      </div>
    );
  }
}

export default Timer;

