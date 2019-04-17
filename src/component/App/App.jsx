import React, { Component } from 'react';

import '../../styles/app.scss';
import Status from '../TimerСontainer/Status';
import AddTimer from '../TimerСontainer/AddTimer';
import Timer from '../TimerСontainer/Timer';

import { functionForArrayMap, filtredDoneArray, func } from '../helpers/utils';

export default class App extends Component {
  id = 0;

  canRunInterval = true;

  state = {
    timersData: [],
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startInterval = () => {
    this.timerId = setInterval(this.tick, 10);
    this.canRunInterval = false;
  }

  stopInterval = () => {
    clearInterval(this.timerId);
    this.canRunInterval = true;
  }

  addTimer = (amount = 1) => {
    const { timersData } = this.state;
    const newArr = [...timersData];
    for (let i = 0; i < amount; i += 1) {
      newArr.push(this.createTimer());
    }
    this.setState(
      { timersData: newArr },
      () => {
        if (this.canRunInterval) { this.startInterval(); }
      },
    );
  };

  tick = () => {
    const { timersData } = this.state;
    const newArr = [...timersData];
    const timerArray = functionForArrayMap(newArr);
    const filtredArray = filtredDoneArray(timerArray);
    this.setState({ timersData: filtredArray });
    if (newArr.length === 0) {
      this.stopInterval();
    }
  };

  deleteTimer = (id) => {
    const { timersData } = this.state;
    const idx = timersData.findIndex(el => el.id === id);
    const newArray = [...timersData.slice(0, idx), ...timersData.slice(idx + 1)];
    this.setState(
      { timersData: newArray },
    );
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
    const { timersData } = this.state;

    return (
      <div className="App">
        <h1>Timers</h1>
        <Status data={func} />
        <AddTimer addTimer={this.addTimer} />
        <AddTimer how={10} addTimer={this.addTimer} />
        <Timer onDeleted={this.deleteTimer} data={timersData} />
      </div>
    );
  }
}
