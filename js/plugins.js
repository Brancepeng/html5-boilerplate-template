// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  //在Node.js环境中，没有浏览器窗口或DOM，因此没有window对象。相反，Node.js使用一个称
  //为“全局对象”的概念来提供类似的功能。全局对象是一个特殊的对象，它可以在任何地方访问，而不
  //必明确地传递它。在Node.js中，全局对象是global对象。
  //因此，当在Node.js环境中使用window对象时，会发生“ReferenceError: window is not defined”错误，因为Node.js无法找到window对象。
  if (typeof window !== 'undefined') {
    // 浏览器环境下的代码
    var console = (window.console = window.console || {});
  } else {
    // Node.js环境下的代码
    var console = (global.console = global.console || {});
  }
  //如果您想在不牺牲代码的可读性和可维护性的情况下进行优化，可以使用ES6的默认参数语法使用const关键字将console变量设置为常量，以确保它不会被重新分配。
  //var console = (window.console = window.console || {});
  //const console = window.console || {};
  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
