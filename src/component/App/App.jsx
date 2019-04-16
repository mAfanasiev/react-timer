import React, { Component } from 'react';

import '../../styles/app.scss';
import Status from '../TimerСontainer/Status';
import AddTimer from '../TimerСontainer/AddTimer';
import Timer from '../TimerСontainer/Timer';

export default class App extends Component {
  id = 0;

  state = {
    timersData: [],
    finish: null,
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  start = () => {
    this.timerId = setInterval(() => this.tick(), 10);
  }

  stop = () => {
    clearInterval(this.timerId);
  }

  addTimer = (amount = 1) => {
    const { timersData } = this.state;
    const newArr = [...timersData];
    for (let i = 0; i < amount; i += 1) {
      newArr.push(this.createTimer());
    }
    this.setState({ timersData: newArr });
  };

  tick = () => {
    const { timersData } = this.state;
    const newArr = [...timersData];
    const timerArray = this.functionForArrayMap(newArr);
    this.setState({ timersData: timerArray });
  };

  functionForArrayMap = array => (
    array.map((item) => {
      let { time } = item;
      let done = false;

      if (time <= 0) {
        done = true;
        time = 0;
      } else {
        time = (time - 0.01).toFixed(2);
      }

      return {
        ...item,
        done,
        time,
      };
    })
  );

  deleteTimer = (id) => {
    const { timersData } = this.state;
    const idx = timersData.findIndex(el => el.id === id);
    const newArray = [...timersData.slice(0, idx), ...timersData.slice(idx + 1)];
    this.setState({ timersData: newArray });
  };

  createTimer() {
    this.id += 1;
    const idx = this.id;
    return {
      done: false,
      id: idx,
      time: Math.floor(3 + Math.random() * 8),
    };
  }

  render() {
    const { timersData, finish } = this.state;

    return (
      <div className="App">
        <h1>Timers</h1>
        <Status data={finish} />
        <AddTimer addTimer={() => this.addTimer()} />
        <AddTimer how={10} addTimer={() => this.addTimer(10)} />
        <Timer onDeleted={this.deleteTimer} data={timersData} />
      </div>
    );
  }
}
