(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),s=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||s(e)||i(e)||a()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var s=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=s},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(s.default.useContext(i.AmpStateContext))};var r,s=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||s&&a}},2775:function(e,t,n){"use strict";var r=n(9713);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=u,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=r?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(n,s,i):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n(7294)),l=(i=n(3244))&&i.__esModule?i:{default:i},o=n(3398),c=n(1165),d=n(6393);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var i=!0,a=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){a=!0;var l=s.key.slice(s.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var o=0,c=f.length;o<c;o++){var d=f[o];if(s.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var h=s.props[d],u=r[d]||new Set;"name"===d&&a||!u.has(h)?(u.add(h),r[d]=u):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,a.default.cloneElement(e,l)}return a.default.cloneElement(e,{key:i})}))}var x=function(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=x},3244:function(e,t,n){"use strict";var r=n(319),s=n(4575),i=n(3913),a=(n(1506),n(2205)),l=n(8585),o=n(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),h=function(e){a(n,e);var t=c(n);function n(e){var i;return s(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=h},9183:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),s=n(9008);function i(e){var t=e.children;return(0,r.jsxs)("div",{className:"w-full lg:w-4/5 mx-auto flex flex-col mt-12 relative mb-8",children:[(0,r.jsx)("span",{class:"absolute inset-y-0 left-1/3 ml-10 w-0.5 bg-hunterGreen-dark hidden md:block"}),t]})}function a(e){return(0,r.jsxs)("div",{class:"flex flex-col md:flex-row text-center md:text-left mt-8 mb-8 lg:mb-2",children:[(0,r.jsx)("div",{class:"md:w-1/3",children:(0,r.jsxs)("div",{class:"flex justify-center md:justify-start",children:[(0,r.jsx)("span",{class:"flex-shrink-0",children:(0,r.jsx)("img",{src:e.img,class:"w-32 h-auto",alt:e.company})}),(0,r.jsx)("div",{class:"relative w-full ml-3 hidden md:block",children:(0,r.jsx)("span",{class:"h-0.5 bg-hunterGreen-light absolute inset-x-0 top-1/2 transform -translate-y-1/2"})})]})}),(0,r.jsx)("div",{class:"md:w-2/3",children:(0,r.jsxs)("div",{class:"flex md:pl-18 relative",children:[(0,r.jsx)("span",{class:"border-2 border-hunterGreen-dark rounded-full w-4 h-4 absolute left-8 top-1 bg-white hidden md:block"}),(0,r.jsxs)("div",{class:"mt-1 flex",children:[(0,r.jsx)("i",{class:"bx bxs-right-arrow text-primary hidden md:block"}),(0,r.jsxs)("div",{class:"md:pl-14 md:-mt-1",children:[(0,r.jsx)("span",{class:"font-body font-bold text-hunterGreen-dark block",children:e.date}),(0,r.jsx)("span",{class:"font-header font-bold text-xl text-primary uppercase block pt-2",children:e.title}),(0,r.jsx)("div",{class:"pt-2",children:(0,r.jsx)("span",{class:"font-body text-black block",children:e.children})})]})]})]})})]})}function l(e){var t=e.className,n=e.title,s=(e.subtitle,e.children),i="py-14 px-8 ".concat(t);return(0,r.jsx)("section",{className:i,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"text-4xl tracking-widest text-hunterGreen font-bold uppercase mb-8",children:n}),s]})})}var o=n(9680),c=n.n(o);function d(e){var t,n=e.href,s=e.img,i=e.title,a=e.children;return t=n?(0,r.jsx)("a",{rel:"noopener noreferrer nofollow",target:"_blank",href:n||"#",children:n||i}):(0,r.jsx)("span",{children:i}),(0,r.jsxs)("div",{className:c().project,children:[(0,r.jsx)("a",{href:"#0",className:c().project__hover,"aria-labelledby":i}),(0,r.jsxs)("div",{className:c().project__title,children:[(0,r.jsx)("div",{class:"rounded-full h-4 w-4 bg-red-400 flex mr-3"}),(0,r.jsx)("div",{class:"rounded-full h-4 w-4 bg-yellow-400 flex mr-3"}),(0,r.jsx)("div",{class:"rounded-full h-4 w-4 bg-green-400 flex mr-3"}),(0,r.jsx)("div",{class:"flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs",children:t})]}),(0,r.jsx)("img",{src:s,alt:""}),(0,r.jsxs)("div",{className:c().project__overlay,children:[(0,r.jsx)("h3",{id:i,"aria-hidden":"true",children:i}),(0,r.jsx)("div",{className:c().project__body,children:(0,r.jsx)("p",{children:a})})]})]})}function h(){return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen ",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Fabio Kuhn - Software and Project Development"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("header",{className:"py-12 flex flex-col lg:flex-row justify-center items-center w-full bg-hunterGreen-dark text-white",children:[(0,r.jsx)("div",{className:"w-48 h-48 rounded-full border-8 shadow-xl relative border-hunterGreen-light",children:(0,r.jsx)("img",{src:"/images/fabiokuhn.jpg",alt:"Fabio Kuhn",objectFit:"cover",layout:"fill",className:"rounded-full"})}),(0,r.jsxs)("div",{className:"text-center md:text-left lg:ml-8 ",children:[(0,r.jsx)("h1",{className:"text-6xl font-bold tracking-widest",children:(0,r.jsx)("div",{className:"",children:"Fabio Kuhn"})}),(0,r.jsx)("p",{className:"mt-3 text-2xl",children:(0,r.jsx)("code",{className:"block md:inline p-3 font-mono text-lg bg-hunterGreen-light md:rounded-md text-black",children:"Software and Project Development"})})]})]}),(0,r.jsxs)("main",{className:"flex flex-col items-center justify-center w-full flex-1 text-center",children:[(0,r.jsx)(l,{title:"About me",className:"bg-grey-light w-full",children:(0,r.jsxs)("p",{className:"text-lg",children:["Hi, I'm Fabio, a passionate full stack software developer with a wide range of professional experiences and skills.",(0,r.jsx)("br",{}),"I've been working in the Software and digital Product development since over 15 years."]})}),(0,r.jsx)(l,{title:"My skillset",children:(0,r.jsxs)("div",{className:"text-left lg:w-1/2 mx-auto",children:[(0,r.jsx)("p",{className:"text-lg pb-8",children:"It's hard to list all the skills and things I do or did over the years. I selected some of the more important and interesting skills that I have real professional experiance with."}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Back-end development:"})," Ruby on Rails, NodeJS, Java, Redis, Postgresql, MySQL"]}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Front-end development:"})," HTML (Slim, Haml), CSS (SCSS, Bootstrap, TailwindCSS), JavaScript (StimulusJS), Git, SEO, accessibility"]}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Web hosting:"})," Heroku, AWS (S3, Cloudfront, etc), CI process setup, Monitoring, Sendgrid, etc"]}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Libraries, Frameworks and Tools:"})," Core Ruby on Rails, Rspec, Cucumber, Git, Sidekiq, and many more"]}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Methodologies:"})," ShapeUp, Scrum, Kanban, Scrumban, TDD, BDD, Post-Mortems, Retrospetives"]}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Project development:"})," ODI and Jobs to be done, Prototyping, User stories, Lean and MVP, Design Sprints"]}),(0,r.jsxs)("p",{className:"p-2",children:[(0,r.jsx)("span",{class:"font-bold",children:"Team lead:"})," Coaching, Hiring, 1on1s, Performance reviews"]})]})}),(0,r.jsx)(l,{title:"Some of the projects I worked on",className:"bg-grey-light w-full",children:(0,r.jsxs)("div",{className:"w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12",children:[(0,r.jsx)(d,{title:"Giving Multiplier",img:"/images/giving_multiplier.png",href:"https://givingmultiplier.org",children:" Want to give more effectively but don't want to give up your favorite charity? Evidence based research suggests: do both! Divide your donation between your favorite charity and a highly effective charity recommended by experts."}),(0,r.jsx)(d,{title:"Algrano",img:"/images/algrano.png",href:"https://www.algrano.com/en",children:"Algrano is a Swiss tech startup that changes the global trade of coffee. Using technology, Algrano has set an ambitious goal to revolutionise the centuries old coffee trade industry and make it more transparent. Through the Algrano online platform, coffee growers promote and sell their coffees straight to roasters in Europe"}),(0,r.jsx)(d,{title:"local.ch",img:"/images/local_ch.png",href:"https://www.local.ch",children:"local.ch is the swiss phone directory. Recently they switched their entire front-end to Ruby. It is one of the most visited websites in Switzerland."}),(0,r.jsx)(d,{title:"Brotseiten",img:"/images/brotseiten.jpg",children:"Brotseiten is a iOS App developed by Simplificator AG for the Swiss startup Brotseiten. The App lets readers subscribe to a weekly published edition of short stories by famous Swiss and German authors."})]})}),(0,r.jsx)(l,{title:"My work experience",children:(0,r.jsxs)(i,{className:"w-full",children:[(0,r.jsxs)(a,{company:"Algrano",title:"Principal & Lead Engineer",date:"2014 - now",img:"images/algrano.jpg",children:["algrano is the first online community of coffee growers and roasters.",(0,r.jsxs)("p",{className:"pt-8 text-left",children:[(0,r.jsx)("span",{className:"font-bold",children:"My Role"}),(0,r.jsxs)("ul",{className:"ml-4 list-disc",children:[(0,r.jsx)("li",{children:"Full-stack development with Ruby on Rails, JavaScript"}),(0,r.jsx)("li",{children:"Participate in the product development planning "}),(0,r.jsx)("li",{children:"Evaluation and maintenance of technologies"}),(0,r.jsx)("li",{children:"Software engineers and teachnical team leader"}),(0,r.jsx)("li",{children:"Support the product team in reaching the objectives"})]})]})]}),(0,r.jsxs)(a,{company:"Simplificator",title:"Software Engineer",date:"2010 - 2013",img:"images/simplificator.jpg",children:["Simplificator AG is a Swiss software agency and consultancy located in Z\xfcrich.",(0,r.jsx)("br",{}),"Although it was one of the first full Ruby on Rails company in Switzerland it uses now different technologies to solve client needs in the most optimal way.",(0,r.jsxs)("p",{className:"pt-8 text-left",children:[(0,r.jsx)("span",{className:"font-bold",children:"My Role"}),(0,r.jsxs)("ul",{className:"ml-4 list-disc",children:[(0,r.jsx)("li",{children:"Software Engineering - mainly with Ruby on Rails, RubyMotion, iOS and JavaScript"}),(0,r.jsx)("li",{children:"Specification and analysis of projects"}),(0,r.jsx)("li",{children:"Evaluation of technologies"}),(0,r.jsx)("li",{children:"Technical consultancy with clients"}),(0,r.jsx)("li",{children:"Testing and quality control"})]})]})]}),(0,r.jsxs)(a,{company:"WhinyByte",title:"CEO and Software Engineer",date:"2009 - 2014",img:"images/whinybyte.jpg",children:["whinybyte was a small startup located in Basel. We built small customized websites for clients, consulted and worked on Ruby on Rails projects in need and developed our own projects like fahrschule.ch.",(0,r.jsxs)("p",{className:"pt-8 text-left",children:[(0,r.jsx)("span",{className:"font-bold",children:"My Role"}),(0,r.jsxs)("ul",{className:"ml-4 list-disc",children:[(0,r.jsx)("li",{children:"Software Engineering - mainly with Ruby on Rails and JavaScript"}),(0,r.jsx)("li",{children:"Specification and analysis of projects"}),(0,r.jsx)("li",{children:"Web design, SEO and front-end development"}),(0,r.jsx)("li",{children:"Sales and marketing"}),(0,r.jsx)("li",{children:"Server Management"})]})]})]}),(0,r.jsxs)(a,{company:"Coop",title:"Software Developer",date:"2004 - 2009",img:"images/coop.jpg",children:["Coop is the second biggest retailer in Switzerland. I started my appreniceship there at age 17 and worked in different fields. First in first level IT support where I learned communication skills, then from building websites with Java up to low-level programming for internal transaction processing with ABAP.",(0,r.jsxs)("p",{className:"pt-8 text-left",children:[(0,r.jsx)("span",{className:"font-bold",children:"My Role"}),(0,r.jsxs)("ul",{className:"ml-4 list-disc",children:[(0,r.jsx)("li",{children:"Internal first-level IT-Support"}),(0,r.jsx)("li",{children:"Java web evelopment"}),(0,r.jsx)("li",{children:"Web design for promotional pages"}),(0,r.jsx)("li",{children:"ABAP/SAP development"}),(0,r.jsx)("li",{children:"API and general interface design"})]})]})]})]})}),(0,r.jsx)(l,{title:"Contact",className:"bg-grey-light w-full",children:(0,r.jsxs)("p",{className:"pb-3",children:[(0,r.jsxs)("span",{className:"p-4 block",children:["Interested in having a conversation?",(0,r.jsx)("br",{}),"Send me an email to"]}),(0,r.jsx)("code",{className:"p-3 font-mono text-lg bg-hunterGreen-light rounded-md text-black",children:"fabio@kuhn.dev"})]})})]}),(0,r.jsx)("footer",{className:"flex items-center justify-center w-full h-24 border-t px-8",children:(0,r.jsx)("a",{className:"flex items-center justify-center",href:"/",children:"Fabio Kuhn - Software and Project Development"})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9183)}])},9680:function(e){e.exports={project:"Project_project__12YAN",project__hover:"Project_project__hover__31pLJ",project__overlay:"Project_project__overlay__32bqc",project__title:"Project_project__title__16v_s",project__body:"Project_project__body__2vOQA"}},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);