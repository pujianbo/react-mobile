webpackJsonp([2],{301:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(4),u=l(c),s=n(731),f=n(353),m=l(f),d=n(730),p=l(d),h=n(428),E=l(h),y=n(835),b=l(y),v=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.page=1,n.load=0,n.state={comment:!1},n}return o(t,e),i(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){var t=e.state,n=t.dataLoad,l=t.dataEnd,a=t.dataNull;if(1!=n&&1!=l&&1!=a){var r=0;document.documentElement&&document.documentElement.scrollTop?r=document.documentElement.scrollTop:document.body&&(r=document.body.scrollTop),document.body.clientHeight-window.innerHeight-r<=100&&(e.page++,e.getData())}}}},{key:"getData",value:function(){(0,s.ajax)({url:"/test/",data:{id:23},success:function(e){console.log(e)}})}},{key:"showComment",value:function(e){console.log(e),this.setState({comment:!this.state.comment})}},{key:"nice",value:function(e,t){console.log(t.currentTarget.className),t.currentTarget.className="right niceed"}},{key:"comment",value:function(e){e.preventDefault(),this.setState({comment:!1}),(0,s.Tips)("评论成功")}},{key:"render",value:function(){var e=this.state.comment;return u.default.createElement("div",{className:"selectresult"},u.default.createElement(m.default,null,u.default.createElement("div",{className:"title"},u.default.createElement("img",{src:E.default}),u.default.createElement("h5",null,"中药大全"),u.default.createElement("p",null,"110话题",u.default.createElement("span",null,"437成员")))),u.default.createElement("div",{className:"main"},u.default.createElement("ul",{className:"items"},u.default.createElement("li",null,u.default.createElement("div",{className:"user clearfix"},u.default.createElement("a",{className:"lineblock"},u.default.createElement("img",{src:b.default}),"中医药专家"),u.default.createElement("tag",{className:"right"},"未回复")),u.default.createElement("div",{className:"txt"},"请问贵杂志有没有临床医学专集这一刊？"),u.default.createElement("div",{className:"info"},u.default.createElement("ul",{className:"chat"},u.default.createElement("li",null,u.default.createElement("span",null,"思域："),"好像有哦，我曾经在哪里见过"),u.default.createElement("li",null,u.default.createElement("span",null,"李然"),"回复了",u.default.createElement("span",null,"思域："),"是的，我也曾经看见过，可以去找一找"),u.default.createElement("li",null,u.default.createElement("span",null,"陆战："),"好像有哦，我曾经在哪里见过")),u.default.createElement("div",{className:"clearfix other"},u.default.createElement("time",null,"2017-12-1 11:00"),u.default.createElement("span",{className:"right review",onClick:this.showComment.bind(this,34)},"4545"),u.default.createElement("span",{className:"right",onClick:this.nice.bind(this,2)},"234")))),u.default.createElement("li",null,u.default.createElement("div",{className:"user clearfix"},u.default.createElement("a",{className:"lineblock"},u.default.createElement("img",{src:b.default}),"中医药专家"),u.default.createElement("tag",{className:"right"},"未回复")),u.default.createElement("div",{className:"txt"},"请问贵杂志有没有临床医学专集这一刊？"),u.default.createElement("div",{className:"info"},u.default.createElement("ul",{className:"chat"},u.default.createElement("li",null,u.default.createElement("span",null,"思域："),"好像有哦，我曾经在哪里见过"),u.default.createElement("li",null,u.default.createElement("span",null,"李然"),"回复了",u.default.createElement("span",null,"思域："),"是的，我也曾经看见过，可以去找一找"),u.default.createElement("li",null,u.default.createElement("span",null,"陆战："),"好像有哦，我曾经在哪里见过")),u.default.createElement("div",{className:"clearfix other"},u.default.createElement("time",null,"2017-12-1 11:00"),u.default.createElement("span",{className:"right review",onClick:this.showComment.bind(this,34)},"4545"),u.default.createElement("span",{className:"right",onClick:this.nice.bind(this,2)},"234")))),u.default.createElement("li",null,u.default.createElement("div",{className:"user clearfix"},u.default.createElement("a",{className:"lineblock"},u.default.createElement("img",{src:b.default}),"中医药专家"),u.default.createElement("tag",{className:"right"},"未回复")),u.default.createElement("div",{className:"txt"},"请问贵杂志有没有临床医学专集这一刊？"),u.default.createElement("div",{className:"info"},u.default.createElement("ul",{className:"chat"},u.default.createElement("li",null,u.default.createElement("span",null,"思域："),"好像有哦，我曾经在哪里见过"),u.default.createElement("li",null,u.default.createElement("span",null,"李然"),"回复了",u.default.createElement("span",null,"思域："),"是的，我也曾经看见过，可以去找一找"),u.default.createElement("li",null,u.default.createElement("span",null,"陆战："),"好像有哦，我曾经在哪里见过")),u.default.createElement("div",{className:"clearfix other"},u.default.createElement("time",null,"2017-12-1 11:00"),u.default.createElement("span",{className:"right review",onClick:this.showComment.bind(this,34)},"4545"),u.default.createElement("span",{className:"right",onClick:this.nice.bind(this,2)},"234")))))),e?[u.default.createElement("div",{className:"task",onClick:this.showComment.bind(this,0)}),u.default.createElement(p.default,null,u.default.createElement("form",{className:"sltcomment clearfix",onSubmit:this.comment.bind(this)},u.default.createElement("input",{className:"left",type:"text",placeholder:"评论信息"}),u.default.createElement("input",{className:"right",type:"submit",value:"提交"})))]:null)}}]),t}(c.Component);t.default=v},353:function(e,t,n){"use strict";"user strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(4),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(123);n(355);var u=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,l=e.descri;e.style;return c.default.createElement("header",{className:"header"},t||c.default.createElement("a",{className:"title"},c.default.createElement("h5",null,n||"中药药理与临床"),c.default.createElement("p",null,l||"Pharmacology of Chinese Medicine")))}}]),t}(i.Component);t.default=u},354:function(e,t,n){t=e.exports=n(295)(void 0),t.push([e.i,".text-els{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header{position:fixed;top:0;left:0;right:0;z-index:10;height:5.12rem;background-color:#fff;border-bottom:1px solid #ddd;text-align:center}.header .title{display:inline-block;padding-left:3.64rem;margin-top:.96rem;background:url("+n(356)+") no-repeat 0/3.16rem}.header .title h5{font-size:1.2rem;line-height:1.68rem;margin:.16rem 0;text-align:left;font-weight:400}.header .title p{font-size:.8rem;line-height:1.12rem;text-align:left}.header+div{padding-top:5.12rem;box-sizing:border-box}",""])},355:function(e,t,n){var l=n(354);"string"==typeof l&&(l=[[e.i,l,""]]);n(296)(l,{});l.locals&&(e.exports=l.locals)},356:function(e,t,n){e.exports=n.p+"img/logo975aa.png"},428:function(e,t,n){e.exports=n.p+"img/good94528.png"},730:function(e,t,n){"use strict";"user strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(4),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(830);var u=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("footer",{className:"footer"},this.props.children)}}]),t}(i.Component);t.default=u},731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=t.formatParams=function(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return t.push("time="+(new Date).getTime()),t.join("&")},a=(t.urlKey=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=new RegExp(e+"=([^&]*)(&|$)","i");return(n.test(t)?n.exec(t)[1]:"").replace(/\s/gi,"")},t.ajax=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0==e.async&&(e.async=!0);var t=new XMLHttpRequest,n=e.url.indexOf("?")>-1?"&":"?";l(e.data);t.onreadystatechange=function(){if(4==t.readyState){var n=t.status;200==n?e.success(t.responseText):(e.fail&&e.fail(n),r("连接网络失败"))}},"post"==e.type?(t.open("POST",e.url,e.async),t.send(e.data)):(t.open("GET",e.url+n+l(e.data),e.async),t.send(null))},t.msgTout=null),r=t.Tips=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"未获取到信息",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,l=document.querySelector(".tips"),r=l?l.querySelector("span"):null;void 0==l&&(l=document.createElement("div"),r=document.createElement("span"),l.appendChild(r),l.className="tips",document.body.appendChild(l)),r.innerHTML=e,l.style.bottom="10rem",l.style.display="block",setTimeout(function(){l.style.bottom="11rem",l.style.opacity="1"},10),clearTimeout(a),0!=n&&("关闭"==e&&(l.style.display="none"),t.msgTout=a=setTimeout(function(){l.style.display="none",l.style.bottom="10rem",l.style.opacity="0"},1e3*n))}},780:function(e,t,n){t=e.exports=n(295)(void 0),t.push([e.i,".text-els{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer{position:fixed;bottom:0;left:0;right:0;z-index:10}",""])},830:function(e,t,n){var l=n(780);"string"==typeof l&&(l=[[e.i,l,""]]);n(296)(l,{});l.locals&&(e.exports=l.locals)},835:function(e,t,n){e.exports=n.p+"img/user56406.png"}});