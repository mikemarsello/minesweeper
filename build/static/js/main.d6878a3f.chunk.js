(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/bomb.07f867ca.svg"},11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(8),r=a.n(c),l=a(1),o=a(2),s=a(3),u=a(6),d=a(4),b=a(5),h=a(9),f=a.n(h),m=a(10),p=a.n(m),k=(a(17),function(e,t,a){var i=[];return e%t!==0&&void 0!==a[e-t-1]&&i.push(e-t-1),void 0!==a[e-t]&&i.push(e-t),(e+1)%t!==0&&void 0!==a[e-t+1]&&i.push(e-t+1),e%t!==0&&void 0!==a[e-1]&&i.push(e-1),(e+1)%t!==0&&void 0!==a[e+1]&&i.push(e+1),e%t!==0&&void 0!==a[e+t-1]&&i.push(e+t-1),void 0!==a[e+t]&&i.push(e+t),(e+1)%t!==0&&void 0!==a[e+t+1]&&i.push(e+t+1),i}),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Minesweeper")),n.a.createElement(E,null))}}]),t}(i.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={board:null,boardClicked:null,boardSize:null,difficulty:null,showSizeDialog:!0,showDiffDialog:!1,message:"Click any square",playAgain:!1},a.clickSize=a.clickSize.bind(Object(l.a)(Object(l.a)(a))),a.clickDifficulty=a.clickDifficulty.bind(Object(l.a)(Object(l.a)(a))),a.clickSquare=a.clickSquare.bind(Object(l.a)(Object(l.a)(a))),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"reset",value:function(){var e=Object.assign({},this.state);e={board:null,boardClicked:null,boardSize:null,difficulty:null,showSizeDialog:!0,showDiffDialog:!1,message:"Click any square",playAgain:!1},this.setState(function(t){return e})}},{key:"clickSize",value:function(e){for(var t=[],a=[],i=0;i<Math.pow(e,2);i++)t.push("nobomb"),a.push(!1);var n=Object.assign({},this.state);n.board=t,n.boardClicked=a,n.boardSize=e,n.showSizeDialog=!1,n.showDiffDialog=!0,this.setState(function(e){return n})}},{key:"clickDifficulty",value:function(e){var t="hard"===e?.4:.25;"easy"===e&&(t=.1);for(var a=Object.assign({},this.state),i=0;i<Math.pow(this.state.boardSize,2)*t;i++)a.board[Math.floor(Math.random()*this.state.board.length)]="bomb";var n=function(e,t){for(var a=0;a<e.length;a++)if("nobomb"===e[a]){var i=0;a%t!==0&&"undefined"!==e[a-t-1]&&"bomb"===e[a-t-1]&&(i+=1),"undefined"!==e[a-t]&&"bomb"===e[a-t]&&(i+=1),(a+1)%t!==0&&"undefined"!==e[a-t+1]&&"bomb"===e[a-t+1]&&(i+=1),a%t!==0&&"undefined"!==e[a-1]&&"bomb"===e[a-1]&&(i+=1),(a+1)%t!==0&&"undefined"!==e[a+1]&&"bomb"===e[a+1]&&(i+=1),a%t!==0&&"undefined"!==e[a+t-1]&&"bomb"===e[a+t-1]&&(i+=1),"undefined"!==e[a+t]&&"bomb"===e[a+t]&&(i+=1),(a+1)%t!==0&&"undefined"!==e[a+t+1]&&"bomb"===e[a+t+1]&&(i+=1),e[a]=i}return e}(a.board,this.state.boardSize);a.board=n,a.showDiffDialog=!1,a.difficulty=e,this.setState(function(e){return a})}},{key:"clickSquare",value:function(e){if(!this.state.playAgain){var t=Object.assign({},this.state),a=function e(t,a,i,n){if("bomb"===a[t])for(var c=0;c<a.length;c++)i[c]=!0;else a[t]>0?i[t]=!0:(i[t]=!0,k(t,n,a).forEach(function(t){!0!==i[t]&&e(t,a,i,n)}));return i}(e,this.state.board,this.state.boardClicked,this.state.boardSize);t.boardClicked=a,a.every(function(e,t,a){return e===a[0]})&&(t.message="BOOM!!!",t.playAgain=!0);var i=[];this.state.board.forEach(function(e,t,a){"bomb"===e&&i.push(t)}),a.filter(function(e){return!1===e}).length===i.length&&(t.message="You won!!!",t.playAgain=!0),this.setState(function(e){return t})}}},{key:"render",value:function(){var e=this;if(!0===this.state.showSizeDialog)return n.a.createElement("div",{className:"dialog-size"},n.a.createElement("h3",null,"Select the size board you would like"),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{onClick:function(){return e.clickSize(6)}},"6x6"),n.a.createElement("button",{onClick:function(){return e.clickSize(8)}},"8x8"),n.a.createElement("button",{onClick:function(){return e.clickSize(10)}},"10x10"),n.a.createElement("button",{onClick:function(){return e.clickSize(12)}},"12x12")));if(!0===this.state.showDiffDialog)return n.a.createElement("div",{className:"dialog-diff"},n.a.createElement("h3",null,"Select difficulty level"),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{onClick:function(){return e.clickDifficulty("easy")}},"Easy"),n.a.createElement("button",{onClick:function(){return e.clickDifficulty("medium")}},"Medium"),n.a.createElement("button",{onClick:function(){return e.clickDifficulty("hard")}},"Hard")));for(var t=[],a=Math.pow(this.state.boardSize,2),i=0;i<a;i++)t.push(n.a.createElement(y,{board:this.state.board,grid:this.state.boardSize,bomb:this.state.board[i],clicked:this.state.boardClicked[i],key:i,id:i,handleClick:this.clickSquare}));var c=this.state.playAgain?n.a.createElement("button",{className:"play-again",onClick:function(){return e.reset()}},"Play again?"):"";return n.a.createElement("div",null,n.a.createElement("div",{id:"message"},n.a.createElement("h3",null,this.state.message),c),n.a.createElement("div",{className:"game-board"},n.a.createElement("div",{className:"game-data"},n.a.createElement("div",null,"Size: ",this.state.boardSize,"x",this.state.boardSize),n.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),n.a.createElement("div",null,"Difficulty:",n.a.createElement("br",null)," ",this.state.difficulty)),n.a.createElement("div",{className:"game-play"},t)))}}]),t}(n.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(l.a)(Object(l.a)(a))),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.handleClick(this.props.id)}},{key:"render",value:function(){var e=this,t=100/this.props.grid,a={flex:"0 0 "+t+"%",height:5*t+"px",backgroundImage:"bomb"===this.props.bomb&&this.props.clicked?"url(".concat(p.a,")"):"none",opacity:this.props.clicked?1:.5},i={display:this.props.clicked?"block":"none"};return n.a.createElement("div",{className:"square",style:a,onClick:function(){return e.handleClick()}},n.a.createElement("p",{style:i},"bomb"!==this.props.bomb?this.props.bomb:""))}}]),t}(n.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,{board:this.props.board}))}}]),t}(n.a.Component),O=v;r.a.render(n.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.fb2d0b51.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.d6878a3f.chunk.js.map