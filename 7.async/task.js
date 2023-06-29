class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

addClock(time, callback) {
   if (!time || !callback) {
            throw new Error ('Отсутствуют обязательные аргументы');
        } 
   if (this.alarmCollection.find(clock => clock.time === time)) {
            return console.warn('Уже присутствует звонок на это же время');
        }
   return this.alarmCollection.push({callback, time, canCall: () => true});
    }


removeClock(time) {
        const beginLenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
}
  getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5); 
    }

    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.intervalId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }
   stop() {
    clearInterval();
            this.intervalId = null;
        }
    
  resetAllCalls() {
    
  }
  
  clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}