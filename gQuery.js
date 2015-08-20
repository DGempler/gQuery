(function() {


  window.gQuery = gQuery;
  window.$ = window.gQuery;

  function gQuery(param) {

    var output;
    if (typeof param === "string") {
      output = document.querySelectorAll(param);
    }
    if (param instanceof NodeList || param.nodeType === 1) {
      output = param;
      param = "";
    }

    var newObject = new gQueryCtor(param, output);
    return newObject;
  }

  function gQueryCtor(selector, elements) {
    this.selector = selector;
    this.elements = elements;
  }

// $("div").css("background-color", "black");

  gQueryCtor.prototype.css = function(property, value) {
    var x;

    if (this.selector === "") {
      x = this.elements;
    }
    else {
      x = document.querySelectorAll(this.selector);
    }

    if (this.elements.nodeType === 1) {
      if (!value) {
        return x.style[property];
      }
      x.style[property] = value;
    }

    if (!value) {
          return x[0].style[property];
    }
    for (var i = 0; i < x.length; i++ ) {
      x[i].style[property] = value;
    }
    return x;
  };

  gQueryCtor.prototype.html = function(htmlString) {
    var x;

    if (this.selector === "") {
      x = this.elements;
    }
    else {
      x = document.querySelectorAll(this.selector);
    }

    if (this.elements.nodeType === 1) {
      if (!htmlString) {
        return x.innerHTML;
      }
    return x.innerHTML = htmlString;
    }
    if (!htmlString) {
          return x[0].innerHTML;
    }
    for (var i = 0; i < x.length; i++ ) {
      x[i].innerHTML = htmlString;
    }

    return x;
  };

  gQueryCtor.prototype.attr = function(attributeName, value) {
    var x;

    if (this.selector === "") {
      x = this.elements;
    }
    else {
      x = document.querySelectorAll (this.selector);
    }

    if (this.elements.nodeType === 1) {
      if (!value) {
        return x.getAttribute(attributeName);
      }
      x.setAttribute(attributeName, value);
    }

    if (!value) {
          return x[0].getAttribute(attributeName);
    }
    for (var i = 0; i < x.length; i++ ) {
      x[i].setAttribute(attributeName, value);
    }
    return x;
  };

  gQueryCtor.prototype.hide = function() {
    var x;

    if (this.selector === "") {
      x = $(this.elements);
    }
    else {
      x = $(document.querySelectorAll (this.selector));
    }
    x.css("display", "none");
  };

  gQueryCtor.prototype.show = function() {
    var x;
    if (this.selector === "") {
      x = $(this.elements);
    }
    else {
      x = $(document.querySelectorAll (this.selector));
    }
    x.css("display", "block");
  };

})();



    // if ((typeof param === "string") || (param instanceof NodeList) || (param.nodeType === 1)) {
    //   return "You suck";
    // }