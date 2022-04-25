import{_ as a,r as c,o as p,c as r,a as e,b as s,w as t,F as l,d,e as o}from"./app.9843a57b.js";const u={},i=d(`<h1 id="dokodemo-door" tabindex="-1"><a class="header-anchor" href="#dokodemo-door" aria-hidden="true">#</a> Dokodemo-Door</h1><p>Dokodemo door\uFF08\u4EFB\u610F\u95E8\uFF09\u53EF\u4EE5\u76D1\u542C\u4E00\u4E2A\u672C\u5730\u7AEF\u53E3\uFF0C\u5E76\u628A\u6240\u6709\u8FDB\u5165\u6B64\u7AEF\u53E3\u7684\u6570\u636E\u53D1\u9001\u81F3\u6307\u5B9A\u670D\u52A1\u5668\u7684\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u4ECE\u800C\u8FBE\u5230\u7AEF\u53E3\u6620\u5C04\u7684\u6548\u679C\u3002</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;followRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>\u5C06\u6D41\u91CF\u8F6C\u53D1\u5230\u6B64\u5730\u5740\u3002\u53EF\u4EE5\u662F\u4E00\u4E2A IP \u5730\u5740\uFF0C\u5F62\u5982 <code>&quot;1.2.3.4&quot;</code>\uFF0C\u6216\u8005\u4E00\u4E2A\u57DF\u540D\uFF0C\u5F62\u5982 <code>&quot;xray.com&quot;</code>\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002</p><p>\u5F53 <code>followRedirect</code>\uFF08\u89C1\u4E0B\u6587\uFF09\u4E3A <code>true</code> \u65F6\uFF0C<code>address</code> \u53EF\u4E3A\u7A7A\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>\u5C06\u6D41\u91CF\u8F6C\u53D1\u5230\u76EE\u6807\u5730\u5740\u7684\u6307\u5B9A\u7AEF\u53E3\uFF0C\u8303\u56F4 [1, 65535]\uFF0C\u6570\u503C\u7C7B\u578B\u3002\u5FC5\u586B\u53C2\u6570\u3002</p><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>\u53EF\u63A5\u6536\u7684\u7F51\u7EDC\u534F\u8BAE\u7C7B\u578B\u3002\u6BD4\u5982\u5F53\u6307\u5B9A\u4E3A <code>&quot;tcp&quot;</code> \u65F6\uFF0C\u4EC5\u4F1A\u63A5\u6536 TCP \u6D41\u91CF\u3002\u9ED8\u8BA4\u503C\u4E3A <code>&quot;tcp&quot;</code>\u3002</p><blockquote><p><code>timeout</code>: number</p></blockquote><p>\u8FDE\u63A5\u7A7A\u95F2\u7684\u65F6\u95F4\u9650\u5236\u3002\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A <code>300</code>\u3002\u5904\u7406\u4E00\u4E2A\u8FDE\u63A5\u65F6\uFF0C\u5982\u679C\u5728 <code>timeout</code> \u65F6\u95F4\u5185\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u88AB\u4F20\u8F93\uFF0C\u5219\u4E2D\u65AD\u8BE5\u8FDE\u63A5\u3002</p><blockquote><p><code>followRedirect</code>: true | false</p></blockquote><p>\u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0Cdokodemo-door \u4F1A\u8BC6\u522B\u51FA\u7531 iptables \u8F6C\u53D1\u800C\u6765\u7684\u6570\u636E\uFF0C\u5E76\u8F6C\u53D1\u5230\u76F8\u5E94\u7684\u76EE\u6807\u5730\u5740\u3002</p>`,15),_=o("\u53EF\u53C2\u8003 "),b=o("\u4F20\u8F93\u914D\u7F6E"),k=o(" \u4E2D\u7684 "),h=e("code",null,"tproxy",-1),m=o(" \u8BBE\u7F6E\u3002"),q=e("blockquote",null,[e("p",null,[e("code",null,"userLevel"),o(": number")])],-1),f=o("\u7528\u6237\u7B49\u7EA7\uFF0C\u8FDE\u63A5\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u7528\u6237\u7B49\u7EA7\u5BF9\u5E94\u7684 "),y=o("\u672C\u5730\u7B56\u7565"),g=o("\u3002"),v=o("userLevel \u7684\u503C, \u5BF9\u5E94 "),x=o("policy"),j=o(" \u4E2D "),w=e("code",null,"level",-1),L=o(" \u7684\u503C. \u5982\u4E0D\u6307\u5B9A, \u9ED8\u8BA4\u4E3A 0\u3002"),R=e("h2",{id:"\u900F\u660E\u4EE3\u7406\u914D\u7F6E\u6837\u4F8B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u900F\u660E\u4EE3\u7406\u914D\u7F6E\u6837\u4F8B","aria-hidden":"true"},"#"),o(" \u900F\u660E\u4EE3\u7406\u914D\u7F6E\u6837\u4F8B")],-1),C=e("p",null,[o("\u6B64\u90E8\u5206\u8BF7\u53C2\u8003"),e("a",{href:"../../document/level-2/tproxy"},"\u900F\u660E\u4EE3\u7406\uFF08TProxy\uFF09\u914D\u7F6E\u6559\u7A0B"),o("\u3002")],-1);function N(V,B){const n=c("RouterLink");return p(),r(l,null,[i,e("p",null,[_,s(n,{to:"/en/config/transport.html#sockoptobject"},{default:t(()=>[b]),_:1}),k,h,m]),q,e("p",null,[f,s(n,{to:"/en/config/policy.html#levelpolicyobject"},{default:t(()=>[y]),_:1}),g]),e("p",null,[v,s(n,{to:"/en/config/policy.html#policyobject"},{default:t(()=>[x]),_:1}),j,w,L]),R,C],64)}var P=a(u,[["render",N],["__file","dokodemo.html.vue"]]);export{P as default};