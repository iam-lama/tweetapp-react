(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(4),i=n.n(r),o=(n(16),n.p+"static/media/logo.6ce24c58.svg");n(17);function l(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(s.response,s.status)},s.onerror=function(e){n({message:"The request was an error"},400)},s.send(a)}function u(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),l("GET",n,e)}function j(e,t,n){var c="/tweets/";e&&(c="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),l("GET",c,t)}function d(e){var t=e.tweet,n=e.action,a=e.didPerformAction,s=t.likes?t.likes:0,r=e.className?e.className:"btn btn-primary btn-sm",i=n.display?n.display:"Action",o=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)},u="like"===n.type?"".concat(s," ").concat(i):i;return Object(c.jsx)("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,n){l("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,o)},children:u})}function b(e){var t=s.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return Object(c.jsx)("div",{className:e.className,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;l("POST","/tweets/create/",a,{content:n}),t.current.value=""},children:[Object(c.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})})}var f=n(8),O=n(3),m=n(2),h=n(10);function w(e){var t=e.username;return Object(c.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)},children:e.children})}function p(e){var t=e.user,n=e.includeFullName,a=e.hideLink,r=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(c.jsxs)(s.a.Fragment,{children:[r,!0===a?"@".concat(t.username):Object(c.jsxs)(w,{username:t.username,children:[" @",t.username]})]})}function x(e){var t=e.user,n=e.hideLink,a=Object(c.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return!0===n?a:Object(c.jsx)(w,{username:t.username,children:a})}var v=n(9),g=n.n(v);function N(e){return Object(c.jsx)("span",{className:e.className,children:g()(e.children).format("0a")})}function y(e){var t=e.user,n=e.didFollowToggle,a=e.profileLoading,s=t&&t.is_following?"Unfollow":"Follow";s=a?"Loading...":s;return t?Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{user:t,hideLink:!0}),Object(c.jsx)("p",{children:Object(c.jsx)(p,{user:t,includeFullName:!0,hideLink:!0})}),Object(c.jsxs)("p",{children:[Object(c.jsx)(N,{children:t.follower_count})," ",1===t.follower_count?"follower":"followers"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)(N,{children:t.following_count})," following "]}),Object(c.jsx)("p",{children:t.location}),Object(c.jsx)("p",{children:t.bio}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!a&&n(s)},children:s})]}):null}function k(e){var t=e.username,n=Object(a.useState)(!1),s=Object(m.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(null),u=Object(m.a)(o,2),j=u[0],d=u[1],b=Object(a.useState)(!1),f=Object(m.a)(b,2),O=f[0],h=f[1],w=function(e,t){200===t&&d(e)};Object(a.useEffect)((function(){!1===r&&(!function(e,t){l("GET","/profiles/".concat(e,"/"),t)}(t,w),i(!0))}),[t,r,i]);return!1===r?"Loading...":j?Object(c.jsx)(y,{user:j,didFollowToggle:function(e){!function(e,t,n){var c={action:"".concat(t&&t).toLowerCase()};l("POST","/profiles/".concat(e,"/follow"),n,c)}(t,e,(function(e,t){200===t&&d(e),h(!1)})),h(!0)},profileLoading:O}):null}function T(e){var t=e.tweet;return t.parent?Object(c.jsx)(S,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function S(e){var t=e.tweet,n=e.didRetweet,r=e.hideActions,i=e.isRetweet,o=e.retweeter,l=Object(a.useState)(e.tweet?e.tweet:null),u=Object(m.a)(l,2),j=u[0],b=u[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===i?"".concat(f," p-2 border rounded"):f;var O=window.location.pathname.match(Object(h.a)(/([0-9]+)/,{tweetid:1})),w=O?O.groups.tweetid:-1,v="".concat(t.id)==="".concat(w),g=function(e,t){200===t?b(e):201===t&&n&&n(e)};return Object(c.jsxs)("div",{className:f,children:[!0===i&&Object(c.jsx)("div",{className:"mb-2",children:Object(c.jsxs)("span",{className:"small text-muted",children:["Retweet via ",Object(c.jsx)(p,{user:o})]})}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)(x,{user:t.user})}),Object(c.jsxs)("div",{className:"col-11",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:Object(c.jsx)(p,{incluseFullName:!0,user:t.user})}),Object(c.jsx)("p",{children:t.content}),Object(c.jsx)(T,{tweet:t,retweeter:t.user})]}),Object(c.jsxs)("div",{className:"btn btn-group px-0",children:[j&&!0!==r&&Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(d,{tweet:j,didPerformAction:g,action:{type:"like",display:"Likes"}}),Object(c.jsx)(d,{tweet:j,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),Object(c.jsx)(d,{tweet:j,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})]}),!0===v?null:Object(c.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})]})}function L(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)([]),l=Object(m.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)(null),f=Object(m.a)(b,2),h=f[0],w=f[1],p=Object(a.useState)(!1),x=Object(m.a)(p,2),v=x[0],g=x[1];Object(a.useEffect)((function(){var t=Object(O.a)(e.newTweets).concat(r);t.length!==j.length&&d(t)}),[e.newTweets,j,r]),Object(a.useEffect)((function(){if(!1===v){u((function(e,t){200===t&&(w(e.next),i(e.results),g(!0))}))}}),[r,v,g,e.username]);var N=function(e){var t=Object(O.a)(r);t.unshift(e),i(t);var n=Object(O.a)(j);n.unshift(j),d(n)};return Object(c.jsxs)(s.a.Fragment,{children:[j.map((function(e,t){return Object(c.jsx)(S,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==h&&Object(c.jsx)("button",{onClick:function(e){if(e.preventDefault(),null!==h){u((function(e,t){if(200===t){w(e.next);var n=Object(O.a)(j).concat(e.results);i(n),d(n)}}),h)}},className:"btn btn-outline-primary",children:"Load Next"})]})}function R(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)([]),l=Object(m.a)(o,2),u=l[0],d=l[1],b=Object(a.useState)(null),f=Object(m.a)(b,2),h=f[0],w=f[1],p=Object(a.useState)(!1),x=Object(m.a)(p,2),v=x[0],g=x[1];Object(a.useEffect)((function(){var t=Object(O.a)(e.newTweets).concat(r);t.length!==u.length&&d(t)}),[e.newTweets,u,r]),Object(a.useEffect)((function(){if(!1===v){j(e.username,(function(e,t){200===t?(w(e.next),i(e.results),g(!0)):alert("There was an error")}))}}),[r,v,g,e.username]);var N=function(e){var t=Object(O.a)(r);t.unshift(e),i(t);var n=Object(O.a)(u);n.unshift(u),d(n)};return Object(c.jsxs)(s.a.Fragment,{children:[u.map((function(e,t){return Object(c.jsx)(S,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==h&&Object(c.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==h){j(e.username,(function(e,t){if(200===t){w(e.next);var n=Object(O.a)(u).concat(e.results);i(n),d(n)}else alert("There was an error")}),h)}},className:"btn btn-outline-primary",children:"Load Next"})]})}function E(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),s=n[0],r=n[1],i="false"!==e.canTweet;return Object(c.jsxs)("div",{className:e.className,children:[!0===i&&Object(c.jsx)(b,{didTweet:function(e){var t=Object(O.a)(s);t.unshift(e),r(t)},className:"col-12 mb-3"}),Object(c.jsx)(R,Object(f.a)({newTweets:s},e))]})}function A(e){var t=e.tweetId,n=Object(a.useState)(!1),s=Object(m.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(null),u=Object(m.a)(o,2),j=u[0],d=u[1],b=function(e,t){200===t?d(e):alert("There was an error finding your tweet")};return Object(a.useEffect)((function(){!1===r&&(!function(e,t){l("GET","/tweets/".concat(e),t)}(t,b),i(!0))}),[t,r,i]),null===j?null:Object(c.jsx)(S,{tweet:j,className:e.className})}var F=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:Object(c.jsx)(E,{})})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},q=document.getElementById("root");q&&i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(F,{})}),q);var P=s.a.createElement,D=document.getElementById("tweetme-2");D&&i.a.render(P(E,D.dataset),D);var _=document.getElementById("tweetme-2-feed");_&&i.a.render(P((function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),s=n[0],r=n[1],i="false"!==e.canTweet;return Object(c.jsxs)("div",{className:e.className,children:[!0===i&&Object(c.jsx)(b,{didTweet:function(e){var t=Object(O.a)(s);t.unshift(e),r(t)},className:"col-12 mb-3"}),Object(c.jsx)(L,Object(f.a)({newTweets:s},e))]})}),_.dataset),_),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){i.a.render(P(A,e.dataset),e)})),document.querySelectorAll(".tweetme-2-profile-badge").forEach((function(e){i.a.render(P(k,e.dataset),e)})),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.a8421db8.chunk.js.map