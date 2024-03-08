import{_ as r,r as a,o as c,c as l,d as n,b as o,a as e,e as i}from"./app-Y0A88DIy.js";const d={},h=e("h1",{id:"browser-dialer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#browser-dialer"},[e("span",null,"Browser Dialer")])],-1),u=e("h2",{id:"background",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#background"},[e("span",null,"Background")])],-1),_={href:"https://github.com/v2ray/discussion/issues/754#issuecomment-647934994",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"WSS Browser Dialer",-1),b=e("code",null,"JS",-1),p=e("code",null,"WSS",-1),m=e("code",null,"ALPN",-1),w=e("code",null,"HTTP/2",-1),y=e("code",null,"QUIC",-1),g=i('<h2 id="xray-js" tabindex="-1"><a class="header-anchor" href="#xray-js"><span>Xray &amp; JS</span></a></h2><p>A very simple and clever communication mechanism has been created：</p><ul><li>Xray listens on address port <code>A</code> as an <code>HTTP</code> service, and the browser accesses <code>A</code> to load the <code>JS</code> in the webpage.</li><li>The <code>JS</code> actively establishes a WebSocket connection to <code>A</code>. After a successful connection, Xray sends the connection to the channel.</li><li>When a connection needs to be established, Xray receives an available connection from the channel and sends the target URL and optional early data.</li><li>Once the <code>JS</code> successfully connects to the target, it informs Xray and continues to use this conn to bi-directionally forward data. Connection closing behavior is synchronized.</li><li>After the connection is used, it will be closed, but the JS ensures that there is always a new idle connection available.&quot;</li></ul><h2 id="early-data" tabindex="-1"><a class="header-anchor" href="#early-data"><span>Early data</span></a></h2><p>According to the browser&#39;s needs, the early data mechanism has been adjusted as follows:</p>',5),S=e("li",null,[o("The server response header will contain the requested "),e("code",null,"Sec-WebSocket-Protocol"),o(", which also initially obfuscates the length characteristic of the WSS handshake response.")],-1),v=e("li",null,[o("The encoding used for early data for browsers is "),e("code",null,"base64.RawURLEncoding"),o(" instead of "),e("code",null,"StdEncoding"),o(", and the server has made it compatible.")],-1),x={href:"https://github.com/XTLS/Xray-core/pull/375",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"?ed=2048",-1),T=e("code",null,"MaxHeaderBytes",-1),A=e("s",null,"(Although it seems like it would work without modification.)",-1),B={id:"configuration",tabindex:"-1"},X={class:"header-anchor",href:"#configuration"},E=i("<p>This is an exploratory process, and the configuration method used when both sides are Xray-core v1.4.1 is as follows:</p><ul><li>Prepare a usable WSS configuration, making sure to fill in the domain name for the address. If you need to specify an IP address, configure DNS or system hosts.</li><li>If browser traffic will also pass through Xray-core, be sure to set this domain name as a direct connection, otherwise it will cause traffic looping.</li><li>Set the environment variable to specify the address port to listen on, such as <code>XRAY_BROWSER_DIALER = 127.0.0.1:8080</code>.</li><li>First run Xray-core, then use any browser to access the specified address port, and you can also check <code>Console</code> and Network with <code>F12</code>.</li><li>The browser will limit the number of WebSocket connections, so it is recommended to enable <code>Mux.Cool</code>.</li></ul>",2);function W(I,L){const t=a("Badge"),s=a("ExternalLinkIcon");return c(),l("div",null,[h,n(t,{text:"BETA",type:"warning"}),o(),n(t,{text:"v1.4.1+",type:"warning"}),u,e("p",null,[o("Based on "),e("a",_,[o("an idea from 2020"),n(s)]),o(", a concise "),f,o(" has been implemented using native "),b,o(", achieving true browser TLS fingerprints and behavioral characteristics. However, "),p,o(" still has significant issues with "),m,o(", so the next step is to forward "),w,o(" and "),y,o(' through the browser."')]),g,e("ul",null,[S,v,e("li",null,[o("In addition, due to "),e("a",x,[o("Xray-core#375"),n(s)]),o(" recommendations for "),k,o(", this PR also increased server "),T,o(" by 4096. "),A])]),e("h2",B,[e("a",X,[e("span",null,[o("Configuration "),n(t,{text:"v1.4.1",type:"warning"})])])]),E])}const N=r(d,[["render",W],["__file","browser_dialer.html.vue"]]);export{N as default};