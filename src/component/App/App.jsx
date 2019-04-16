import React, { Component } from 'react';

import '../../styles/app.scss';
import Status from '../TimerСontainer/Status';
import AddTimer from '../TimerСontainer/AddTimer';
import Timer from '../TimerСontainer/Timer';

import { functionForArrayMap, filtredDoneArray } from '../helpers/utils';

export default class App extends Component {
  id = 0;

  state = {
    timersData: [],
    finish: null,
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startInterval = () => {
    this.timerId = setInterval(this.tick, 10);
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
        if (!this.timerId) { this.startInterval(); }
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
      clearInterval(this.timerId);
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
    const { timersData, finish } = this.state;

    return (
      <div className="App">
        <h1>Timers</h1>
        <Status data={finish} />
        <AddTimer addTimer={this.addTimer} />
        <AddTimer how={10} addTimer={this.addTimer} />
        <Timer onDeleted={this.deleteTimer} data={timersData} />
      </div>
    );
  }
}
