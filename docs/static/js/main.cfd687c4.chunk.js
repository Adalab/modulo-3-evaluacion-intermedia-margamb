(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),o=s.n(r),a=s(7),i=s.n(a),c=s(4),p=s(8),u=s(10),l=s(9),m=s(2),h=s.n(m),d=function(e){return Object(n.jsxs)("div",{onClick:function(){e.handleFavorite(e.id)},className:e.isFavorite?"favorite":"",children:[Object(n.jsx)("img",{src:e.url,alt:e.name,title:e.name}),Object(n.jsx)("h3",{className:"namePokemon",children:e.name}),Object(n.jsx)("ul",{className:"pokemonsTypes",children:e.types.map((function(e,t){return Object(n.jsx)("li",{className:"pokemonTypes",children:e},t)}))})]})};d.propsTypes={url:h.a.string,name:h.a.string,types:h.a.arrayOf(h.a.string)};var b=d,j=function(e){var t=Object(r.useState)([]),s=Object(c.a)(t,2),o=s[0],a=s[1],i=function(e){console.log("handleFavorite",e),e=parseInt(e);var t=o.findIndex((function(t){return t===e}));-1===t?o.push(e):o.splice(t,1),a(Object(l.a)(o)),console.log("Favorites set to ",o)};return Object(n.jsx)("ul",{className:"pokemosUl",children:e.pokemons.map((function(e){return Object(n.jsx)("li",{className:"pokemonList",children:Object(n.jsx)(b,Object(u.a)({isFavorite:(t=e.id,console.log("isFavorite",t),o.includes(t)),handleFavorite:i},e))},e.id);var t}))})};j.propsTypes={pokemons:h.a.array};var g=j,v=function(){return Object(n.jsx)("h1",{className:"title",children:"Mi lista de pokemon"})},k=function(e){return Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{children:"Search:"}),Object(n.jsx)("input",{type:"text",id:"name",placeholder:"Search",value:e.search,onChange:function(t){e.handleFiltered(t.target.value)}})]})},f=(s(18),function(e){var t=Object(r.useState)(p),s=Object(c.a)(t,1)[0],o=Object(r.useState)(""),a=Object(c.a)(o,2),i=a[0],u=a[1],l=s.filter((function(e){return e.name.toUpperCase().includes(i)}));return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(v,{}),Object(n.jsx)(k,{handleFiltered:function(e){u(e.toUpperCase())}}),Object(n.jsx)(g,{pokemons:l})]})}),O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),o(e),a(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),O()},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.cfd687c4.chunk.js.map