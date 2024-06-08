(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{3249:function(e,s,t){Promise.resolve().then(t.bind(t,6180))},1119:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var i=t(7437),r=t(2265),a=t(9878);function l(e){let{itemId:s,isFavo:t}=e,l=a.RB,[c,d]=(0,r.useState)();(0,r.useEffect)(()=>{d(l.find(e=>e.id==s)),t&&o("-fill")},[l,s]);let[n,o]=(0,r.useState)("");async function m(){if(c.id){var e;c.isFavorite?(e=!1,o("")):(e=!0,o("-fill")),await fetch("http://localhost:5000/products/".concat(c.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({...c,isFavorite:e})})}}return(0,i.jsx)("i",{className:"bi-heart".concat(n," text-pink-600 absolute top-4 right-4 cursor-pointer"),onClick:m})}},6180:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}});var i=t(7437);t(2969);var r=t(703),a=t(8792),l=t(9878),c=t(2265),d=t(1119);function n(){let e=l.RB,[s,t]=(0,c.useState)([]);return(0,c.useEffect)(()=>{t(e.filter(e=>e.isFavorite))},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("header",{className:"w-full h-16 bg-transparent flex justify-between relative px-5 mb-10",children:[(0,i.jsx)("div",{className:"flex gap-x-8",children:(0,i.jsxs)("div",{className:"items-center gap-x-3 hidden md:flex",children:[(0,i.jsx)(a.default,{href:"/suits",className:"text-sm text-gray-300 hover:text-pink-500 cursor-pointer genderActive",children:"Men"}),(0,i.jsx)(a.default,{href:"/dress",className:"text-sm text-gray-300 hover:text-pink-500 cursor-pointer",children:"Woman"}),(0,i.jsx)(a.default,{href:"/kids",className:"text-sm text-gray-300 hover:text-pink-500 cursor-pointer",children:"Kids"})]})}),(0,i.jsx)("div",{className:"w-full h-full px-5 bg-[#242424] absolute left-0 z-[-1] flex justify-start items-center md:justify-center",children:(0,i.jsx)("h1",{className:"text-2xl text-white font-bold",children:"F A S H I O N"})}),(0,i.jsxs)("div",{className:"flex items-center gap-x-2 py-2",children:[(0,i.jsx)("p",{className:"text-white text-xs",children:"UserNumber"}),(0,i.jsx)(r.default,{src:"/human1.jpg",alt:"human1",width:100,height:100,className:"w-8 h-8 rounded-full"}),(0,i.jsx)("i",{className:"bi-chevron-down text-sm text-gray-300 cursor-pointer"})]})]}),(0,i.jsxs)("main",{className:"w-full px-12 box-border lg:px-40 xl:px-20",children:[(0,i.jsxs)("div",{className:"w-full flex justify-between items-center mb-1",children:[(0,i.jsx)("h1",{className:"text-gray-900 text-xl sm:text-2xl",children:"Your Favorite Items"}),(0,i.jsxs)("p",{className:"text-gray-500",children:[s.length,"+ items"]})]}),(0,i.jsx)("section",{className:"w-full flex flex-wrap justify-around md:justify-between mb-10",children:s.map(e=>(0,i.jsxs)("div",{className:"w-80 bg-white shadow-lg rounded-lg overflow-hidden my-10 relative",children:[(0,i.jsx)(d.Z,{itemId:e.id,isFavo:e.isFavorite}),(0,i.jsxs)("div",{className:"px-4 py-2",children:[(0,i.jsx)("h1",{className:"h-16 text-gray-900 font-bold text-2xl sm:text-3xl uppercase overflow-hidden mb-4",children:e.alt_description}),(0,i.jsx)("p",{className:"h-24 text-gray-600 text-sm mt-1 overflow-hidden",children:e.description})]}),(0,i.jsx)(a.default,{href:"/products/".concat(e.id),className:"min-w-full",children:(0,i.jsx)("img",{className:"h-56 min-w-full object-cover mt-2",src:e.urls.regular,alt:e.alt_description})}),(0,i.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-pink-500",children:[(0,i.jsxs)("h1",{className:"text-gray-200 font-bold text-xl",children:["$",Math.floor(100*Math.random())+1]}),(0,i.jsx)("button",{className:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded",children:"Add to card"})]})]},e.description+e.id))})]}),(0,i.jsx)("footer",{className:"bg-[#242424]",children:(0,i.jsxs)("div",{className:"max-w-2xl mx-auto text-white py-10",children:[(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h3",{className:"text-3xl mb-3",children:" Enjoy our great collection "}),(0,i.jsx)("p",{children:" Stay handsome. All day, every day. "}),(0,i.jsxs)("div",{className:"flex justify-center my-10",children:[(0,i.jsxs)("div",{className:"flex items-center border rounded-lg px-4 py-2 w-52 mx-2",children:[(0,i.jsx)("img",{src:"/instagram.png",className:"w-7 md:w-8"}),(0,i.jsxs)("div",{className:"text-left ml-3",children:[(0,i.jsx)("p",{className:"text-xs text-gray-200",children:"follow on "}),(0,i.jsx)("p",{className:"text-sm md:text-base",children:" instagram "})]})]}),(0,i.jsxs)("div",{className:"flex items-center border rounded-lg px-4 py-2 w-44 mx-2",children:[(0,i.jsx)("img",{src:"/telegram.png",className:"w-7 md:w-8"}),(0,i.jsxs)("div",{className:"text-left ml-3",children:[(0,i.jsx)("p",{className:"text-xs text-gray-200",children:"follow on "}),(0,i.jsx)("p",{className:"text-sm md:text-base",children:" telegram "})]})]})]})]}),(0,i.jsxs)("div",{className:"mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400",children:[(0,i.jsxs)("p",{className:"order-2 md:order-1 mt-8 md:mt-0",children:[" ","\xa9 Beautiful Footer, 2021."," "]}),(0,i.jsxs)("div",{className:"order-1 md:order-2",children:[(0,i.jsx)("span",{className:"px-2",children:"About us"}),(0,i.jsx)("span",{className:"px-2 border-l",children:"Contact us"}),(0,i.jsx)("span",{className:"px-2 border-l",children:"Privacy Policy"})]})]})]})})]})}},2969:function(){},9878:function(e){"use strict";e.exports=JSON.parse('{"RB":[{"id":"0","alt_description":"skin oil","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae commodi facilis ducimus provident repellat alias tempore reiciendis quibusdam sit.","urls":{"regular":"/item1.png"},"isFavorite":true},{"id":"1","alt_description":"mens shirt","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae commodi facilis ducimus provident repellat alias tempore reiciendis quibusdam sit.","urls":{"regular":"/item2.png"},"isFavorite":true},{"id":"2","alt_description":"cloths","description":"soft and high quality","urls":{"regular":"/item3.png"},"isFavorite":true},{"id":"3","alt_description":"skin care","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae commodi facilis ducimus provident repellat alias tempore reiciendis quibusdam sit.","urls":{"regular":"/item4.png"},"isFavorite":true},{"id":"4","alt_description":"woman sheo","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae commodi facilis ducimus provident repellat alias tempore reiciendis quibusdam sit.","urls":{"regular":"/item5.png"},"isFavorite":true},{"id":"5","alt_description":"shirt","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae commodi facilis ducimus provident repellat alias tempore reiciendis quibusdam sit.","urls":{"regular":"/item6.png"},"isFavorite":true}]}')}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=3249)}),_N_E=e.O()}]);