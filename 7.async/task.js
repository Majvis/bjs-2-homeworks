class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error ('Отсутствуют обязательные аргументы');
    } 
    if (this.alarmCollection.find((clock) => clock === time)) {
      return console.warn('Уже присутствует звонок на это же время');
    } 
    callback = () => {this.alarmCollection.push({callback, time, canCall: callback = true})}
    return callback()
  }
  
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== this.time);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5); 
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(clock => checkClock(clock));
    }, 1000);
    let checkClock = (clock) => {
      let alarm = this.getCurrentFormattedTime();
      if (clock.time === alarm || this.canCall === true) {
        return clock.callback(), this.canCall = false;
      }
    }
    return;
  }

  stop() {
    this.intervalId = null;
  }

  resetAllCalls() {
    this.canCall.forEach(this.canCall = null);
  }
  
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}