(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[976],{690:(t,e,r)=>{"use strict";r.d(e,{A:()=>a});r(43);var n=r(446),s=r.n(n),i=r(579);const a=t=>{let{data:e}=t;return(0,i.jsx)("div",{className:"cell-container",children:(0,i.jsxs)("article",{className:"mini-post",children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("h3",{children:(0,i.jsx)("a",{href:e.link,children:e.title})}),!1!==e.isImage&&(0,i.jsx)("time",{className:"published",children:s()(e.date).format("MMMM, YYYY")})]}),!1!==e.isImage&&(0,i.jsx)("a",{href:e.link,className:"image",children:(0,i.jsx)("img",{src:"".concat("/my-portfolio").concat(e.image),alt:e.title})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsx)("p",{children:e.desc})})]})})}},976:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});r(43);var n=r(475),s=r(354),i=r(690);const a=[{title:"Hospital Hub",subtitle:"A peer review and rating system for healthcare services",image:"/images/projects/hospitalhub.png",date:"2021-11-21",link:"https://github.com/akashmishra2811/HospitalHub",desc:"A peer review and rating system for healthcare services. HospitalHub enables individuals to search its database of doctors, hospitals, and other healthcare services. It enables doctors and hospitals to enlist themselves."},{title:"earlyEateries",subtitle:"A platform where you can find old and authentic food",image:"/images/projects/earlyEateries.png",date:"2021-11-21",link:"https://github.com/akashmishra2811/earlyEateries",desc:"A platform where you can find old and authentic food"},{title:"myWordlo",subtitle:"Word guessing game",image:"/images/projects/wordlo.png",date:"2021-11-21",link:"https://github.com/akashmishra2811/Wordlo",desc:"Wordle is a word-guessing game where players have six attempts to guess a hidden five-letter word. The feedback system works as follows:\n\u2705 Green \u2192 Correct letter in the correct position\n\ud83d\udfe8 Yellow \u2192 Correct letter but in the wrong position\n\u2b1c Grey \u2192 Letter is not in the word"}];var u=r(579);const o=()=>(0,u.jsx)(s.A,{title:"Projects",description:"Learn about Akash Mishra projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsx)("div",{className:"title",children:(0,u.jsx)("h2",{children:(0,u.jsx)(n.N_,{to:"/projects",children:"Projects"})})})}),a.map((t=>(0,u.jsx)(i.A,{data:t},t.title)))]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,c),i=r-s<0,a=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:d,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=p;var w="$isDayjsObject",b=function(t){return t instanceof k||!(!t||!t[w])},D=function t(e,r,n){var s;if(!e)return y;if("string"==typeof e){var i=e.toLowerCase();M[i]&&(s=i),r&&(M[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,s=u}return!n&&s&&(y=s),s||!n&&y},S=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new k(r)},j=v;j.l=D,j.i=b,j.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function p(t){this.$L=D(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[w]=!0}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return j},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,r){return j.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!j.u(e)||e,h=j.p(t),f=function(t,e){var s=j.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return j.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return n?f(1,0):f(31,11);case c:return n?f(1,p):f(0,p+1);case o:var y=this.$locale().weekStart||0,M=(m<y?m+7:m)-y;return f(n?g-M:g+(6-M),p);case u:case d:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case s:return $(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,o=j.p(t),h="set"+(this.$u?"UTC":""),f=(r={},r[u]=h+"Date",r[d]=h+"Date",r[c]=h+"Month",r[l]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[j.p(t)]()},g.add=function(n,h){var d,f=this;n=Number(n);var $=j.p(h),m=function(t){var e=S(f);return j.w(e.date(e.date()+Math.round(t*n)),f)};if($===c)return this.set(c,this.$M+n);if($===l)return this.set(l,this.$y+n);if($===u)return m(1);if($===o)return m(7);var p=(d={},d[i]=e,d[a]=r,d[s]=t,d)[$]||1,g=this.$d.getTime()+n*p;return j.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=j.z(this),i=this.$H,a=this.$m,u=this.$M,o=r.weekdays,c=r.months,h=r.meridiem,l=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return j.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return u+1;case"MM":return j.s(u+1,2,"0");case"MMM":return l(r.monthsShort,u,c,3);case"MMMM":return l(c,u);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(r.weekdaysMin,e.$W,o,2);case"ddd":return l(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return j.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,f){var $,m=this,p=j.p(d),g=S(n),v=(g.utcOffset()-this.utcOffset())*e,y=this-g,M=function(){return j.m(m,g)};switch(p){case l:$=M()/12;break;case c:$=M();break;case h:$=M()/3;break;case o:$=(y-v)/6048e5;break;case u:$=(y-v)/864e5;break;case a:$=y/r;break;case i:$=y/e;break;case s:$=y/t;break;default:$=y}return f?$:j.a($)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=D(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return j.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),x=k.prototype;return S.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",l],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,k,S),t.$i=!0),S},S.locale=D,S.isDayjs=b,S.unix=function(t){return S(1e3*t)},S.en=M[y],S.Ls=M,S.p={},S}()}}]);
//# sourceMappingURL=976.ee7794a8.chunk.js.map