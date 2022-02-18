let defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    alert("Hello!");
  }
  
  defer(1000); // shows "Hello!" after 1 sec