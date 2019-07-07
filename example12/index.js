const EventEmitter = require("events");
class MyEmitter extends EventEmitter {
  constructor() {
    super();
    this.CounterEvent = 0;
  }
  CountCallEvent() {
    return(++this.CounterEvent);
  }
  ShowMessageEvent(){
    console.log(`Call Event : ${this.CountCallEvent()}`)
  }
  GenerateEvent(){
    this.on("event", this.ShowMessageEvent) 
  }
  CallEvent(){
    this.emit("event");
  }
};
const myEmitter = new MyEmitter();
myEmitter.GenerateEvent();
myEmitter.CallEvent();
myEmitter.CallEvent();
myEmitter.CallEvent();
myEmitter.CallEvent();



