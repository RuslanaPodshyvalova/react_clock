(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),i=a.n(o),r=a(3),l=a(4),s=a(6),m=a(5),u=(a(12),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:"",intervalId:void 0,isClockVisible:!0,clockName:0},e.setRandomName=function(){var t=Math.floor(1e3*Math.random())+1;e.setState({clockName:t})},e.runTimer=function(){var t=setInterval((function(){e.setState({date:(new Date).toLocaleTimeString()})}),1e3);e.setState({intervalId:t})},e.clearTimer=function(){var t=e.state.intervalId;clearInterval(t)},e.showTimer=function(){e.setState({isClockVisible:!0}),e.runTimer()},e.hideTimer=function(){e.setState({isClockVisible:!1}),e.clearTimer()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.runTimer()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.clockName,n=t.clockName;n!==a&&console.log("The Clock was renamed"+" from ".concat(n," to ").concat(a,"."))}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.isClockVisible;return console.log(t?"time is ".concat(t):"timer isn't set up yet"),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"info"},c.a.createElement("h1",{className:"h1"},"React clock"),c.a.createElement("p",{className:a?" time show":"time hide"},"Current time: ".concat(t))),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",onClick:this.showTimer},"Show Clock"),c.a.createElement("button",{type:"button",onClick:this.hideTimer},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:this.setRandomName},"Set random name")))}}]),a}(c.a.Component));i.a.render(c.a.createElement(u,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fb688db9.chunk.js.map