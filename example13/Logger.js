const EventEmitter = require("events");
const PrimaryKey = require("uuid");

class Logger extends EventEmitter {
  constructor() {
    super();
    this.CreateComponent();
  }
  CreateComponent(){
    this.SetConstructor();
    this.Load();
  }
  SetConstructor(){
    this.Key = 0;
  }
  Load(){
    this.LoadingEvents();
  }
  LoadingEvents(){
    this.on("Save", this.Save) 
  }
  Save(callback){
    callback && callback(true, "Save Correct");
  }
  CallEvent(callback){
    this.emit("Save",callback);
  }
};

module.exports = Logger;