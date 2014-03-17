
function once(fn) {
  if (!this.hasBeenCalled) {
    console.log('here')
    return fn.apply(arguments);
    
  }
  this.hasBeenCalled = true;
  return undefined;
}


logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
