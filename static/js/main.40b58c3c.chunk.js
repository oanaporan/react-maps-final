(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e){e.exports=[{name:"JoJo",address:"160 E 64th St, New York, NY 10065, USA",url:"http://www.jojorestaurantnyc.com/",position:{lat:40.7650646,lng:-73.967902317}},{name:"Fig & Olive",address:"808 Lexington Ave, New York, NY 10065, USA",url:"http://www.figandolive.com/",position:{lat:40.7644156,lng:-73.96910717}},{name:"LAVO",address:"39 E 58th St, New York, NY 10022, USA",url:"http://www.lavony.com/",position:{lat:40.7629043,lng:-73.973652417}},{name:"Benihana",address:"47 W 56th St, New York, NY 10019, USA",url:"https://www.benihana.com/locations/newyorkwest-ny-we/",position:{lat:40.7634566,lng:-73.978973117}},{name:"Patsy",address:"236 W 56th St, New York, NY 10019, USA",url:"http://www.patsys.com/",position:{lat:40.7656201,lng:-73.984939117}},{name:"Nougatine at Jean-Georges",address:"1 Central Park West, New York, NY 10023, USA",url:"http://www.jean-georgesrestaurant.com/",position:{lat:40.7690295,lng:-73.983814217}},{name:"Landmarc",address:"10 Columbus Cir #3, New York, NY 10019, USA",url:"http://landmarc-restaurant.com/",position:{lat:40.7685566,lng:-73.985375317}}]},17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),s=(a(22),a(1)),l=a(2),c=a(4),u=a(3),h=a(5),m=a(9),p={Accept:"application/json","user-key":"fb495d4740db3a18f7de8ca9f150933e"},d=function(e,t,a){return fetch("".concat("https://developers.zomato.com/api/v2.1/","search?q=").concat(e,"&count=1&lat=").concat(t,"&lon=").concat(a),{method:"GET",headers:p}).then(function(e){return e.json()}).then(function(e){return e.restaurants})},w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"location-details"},o.a.createElement("h4",null,this.props.locationData.name),o.a.createElement("p",null,"Cuisine: ",this.props.locationData.cuisines),this.props.locationData.average_cost_for_two?o.a.createElement("p",null," Average Cost for two : ",this.props.locationData.average_cost_for_two,this.props.locationData.currency):"",this.props.locationData.menu_url?o.a.createElement("a",{href:this.props.locationData.menu_url}," Checkout the Menu "):"",this.props.locationData.featured_image?o.a.createElement("div",{className:"featured-image"},o.a.createElement("img",{alt:this.props.locationData.name+"food picture",src:this.props.locationData.featured_image,width:"100%",height:"150"}),o.a.createElement("p",{font:"small"}," Image credit: Zomato")):"")}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1,timeout:null},a.showMessage=function(){a.setState({show:!0})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=window.setTimeout(this.showMessage,1e3);this.setState({timeout:e})}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.state.timeout)}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.show?o.a.createElement("div",null,o.a.createElement("h1",null,"Error occured while loading the map"),o.a.createElement("p",null,"Map could not load, please check network connectivity")):o.a.createElement("div",null,"Loading..."))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={map:null,showInfoWindow:!1,activeMarker:{},activeMarkerProps:{},showDetails:!1,selectedLocation:{},locationData:{}},a.mapReady=function(e,t){a.setState({map:t})},a.onClickMarker=function(e,t,n){a.setState({showInfoWindow:!0,activeMarker:t,activeMarkerProps:e})},a.onInfoWindowClose=function(){return a.setState({activeMarker:{},showingInfoWindow:!1,activeMarkerProps:{}})},a.onListItemClick=function(e){a.setState({selectedLocation:e,showDetails:!0});var t=e.name,n=e.position,o=n.lat,i=n.lng;d(t,o,i).then(function(e){return e.error?a.setState({locationData:{error:"Something went wrong fetching the data..."}}):a.setState({locationData:e[0].restaurant})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.markers,a=this.state,n=a.activeMarker,i=a.activeMarkerProps,r=a.selectedLocation;return o.a.createElement("div",null,o.a.createElement("div",{style:{height:"calc(100%-10vmin",width:"100%"}},o.a.createElement(m.Map,{role:"application","aria-label":"map",onReady:this.mapReady,google:this.props.google,zoom:14,initialCenter:{lat:40.7687463,lng:-73.980931315}},t&&t.map(function(t){return o.a.createElement(m.Marker,{role:"application","aria-label":"map",key:t.name,position:t.position,name:t.name,animation:r?t.name===r.name?window.google.maps.Animation.BOUNCE:window.google.maps.Animation.DROP:1,address:t.address,url:t.url,onClick:e.onClickMarker})}),o.a.createElement(m.InfoWindow,{marker:n,visible:this.state.showInfoWindow,onClose:this.state.onInfoWindowClose},o.a.createElement("div",{className:"info-window"},o.a.createElement("h4",null,i.name),o.a.createElement("p",null,i.address))))),this.props.toggleMenu&&o.a.createElement("div",{className:"list-locations"},o.a.createElement("input",{className:"search-locations",type:"text",placeholder:"Filter Locations...",value:this.props.query,onChange:function(t){e.props.onUpdateQuery(t.target.value),e.setState({showDetails:!1})},onClick:this.onNewSearch}),o.a.createElement("div",{className:"location-list container"},o.a.createElement("ol",{className:"location-list"},this.props.locations.map(function(t){return o.a.createElement("button",{key:t.name,className:"location-list-item",location:t,onClick:function(){return e.onListItemClick(t)}},t.name)}))),this.state.showDetails&&o.a.createElement(w,{selectedLocation:this.state.selectedLocation,locationData:this.state.locationData})))}}]),t}(n.Component),v=Object(m.GoogleApiWrapper)({apiKey:"AIzaSyC3ByjZ4k1ujc3LLi1V00_k6QwruFlK9KI",LoadingContainer:f})(g),k=a(13),y=a(16),E=(a(38),a(14)),b=a.n(E),C=a(15),N=a.n(C),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={allLocations:{},query:"",toggleMenu:!1},a.onToggleMenu=function(){a.setState({toggleMenu:!a.state.toggleMenu})},a.updateQuery=function(e){a.setState({query:e.trim()})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({allLocations:k})}},{key:"render",value:function(){var e,t=this.state,a=t.allLocations,n=t.query;if(n){var i=new RegExp(b()(n),"i");e=a.filter(function(e){return i.test(e.name)})}else e=a;return e.sort(N()("name")),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null," Grab a bite near Central Park, NY"),o.a.createElement("button",{className:"toggle-menu",onClick:this.onToggleMenu},o.a.createElement(y.a,null))),o.a.createElement(v,{toggleMenu:this.state.toggleMenu,locations:e,markers:e,query:this.state.query,onUpdateQuery:this.updateQuery,onListItemClick:this.onListItemClick,showDetails:this.state.showDetails,selectedLocation:this.state.selectedLocation,locationData:this.state.locationData}))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-maps-final",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-maps-final","/service-worker.js");S?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):M(t,e)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.40b58c3c.chunk.js.map