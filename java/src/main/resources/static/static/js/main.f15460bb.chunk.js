(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(16),n(1)),l=n(2),i=n(4),s=n(3),m=n(5),d=(n(17),n(18),n(21)),h=function(t){function e(){return Object(u.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(d.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0424\u0418\u041e"),r.a.createElement("th",null,"\u041f\u0440\u0418\u0421"),r.a.createElement("th",null,"\u0421\u0418\u0418"))),r.a.createElement("tbody",null,this.props.students.map(function(t,e){return r.a.createElement("tr",null,r.a.createElement("td",null,e+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.markPrIS),r.a.createElement("td",null,t.markSII))})))}}]),e}(a.Component),p={getStudents:function(){return fetch("/getStudents").then(function(t){return t.json})}},f=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(i.a)(this,Object(s.a)(e).call(this))).state={activeGroup:0,students:null},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;p.getStudents().then(function(e){t.setState({students:e})})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},this.state.students?r.a.createElement(h,{students:this.state.students[this.state.activeGroup]}):null,r.a.createElement("button",{onClick:function(){t.setState({activeGroup:0})}},"\u0413\u0440\u0443\u043f\u043f\u0430 1"),r.a.createElement("button",{onClick:function(){t.setState({activeGroup:1})}},"\u0413\u0440\u0443\u043f\u043f\u0430 2"),r.a.createElement("button",{onClick:function(){t.setState({activeGroup:2})}},"\u0413\u0440\u0443\u043f\u043f\u0430 3"))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.f15460bb.chunk.js.map