import{_ as l,r as o,o as c,c as d,a as e,b as t,d as s,w as i,e as r}from"./app-3R0byE4U.js";const p="/Xray-docs-next/assets/ch03-img01-putty-download-gVwywNaM.png",u="/Xray-docs-next/assets/ch03-img02-putty-settings-9F25dGfD.png",h="/Xray-docs-next/assets/ch03-img03-putty-keepalive-dggTHgup.png",g="/Xray-docs-next/assets/ch03-img04-ssh-login-8MrxOwy-.png",_="/Xray-docs-next/assets/ch03-img05-ssh-login-success-bpTQqXTk.png",m="/Xray-docs-next/assets/ch03-img06-apt-upgrade-full-PsNwQRq8.gif",x={},P=e("h1",{id:"【第-3-章】远程登录篇",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#【第-3-章】远程登录篇"},[e("span",null,"【第 3 章】远程登录篇")])],-1),S=e("h2",{id:"_3-1-远程登录-vps-putty",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-远程登录-vps-putty"},[e("span",null,"3.1 远程登录 VPS (PuTTY)")])],-1),v=e("p",null,"首先，鉴于零基础人群中 Windows 的用户基数最大，所以本文以 Windows 为例进行展示。",-1),y=e("p",null,"其次，虽然 Windows 10 之后的 PowerShell 和 WSL 也可以达到很好的 SSH 操作体验。但是因为并非所有版本的 Windows 都有最新的组件，故本文还是以老牌的 PuTTY 为例，进行 SSH 远程登录的操作详解。（使用其他工具的话、在 SSH 登陆之后的操作都是一样的）",-1),b=e("p",null,"下面就跟我一步步操作吧。",-1),f={href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,[e("img",{src:p,alt:"下载PuTTY"})],-1),k=e("strong",null,[t("IP 地址(VPS IP)"),e("strong",null,"和"),t("端口(VPS PORT)")],-1),L=e("p",null,[e("img",{src:u,alt:"设置PuTTY"})],-1),w=e("li",null,[e("p",null,[t("我建议将 "),e("code",null,"Connection"),t(" 中的 "),e("code",null,"keepalive"),t(" 设置为 "),e("code",null,"60"),t(" 秒，防止你一段时间没有操作之后 SSH 自动断线。另外务必再次保存设置。")]),e("p",null,[e("img",{src:h,alt:"防止频繁断线"})])],-1),V=r('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>对 PuTTY 的任何设置更新都要再次手动保存 Session，不然关闭后就会丢失</p></div><ol start="4"><li><p>点击 Open 就会进入 SSH 连接窗口，对应下图输入用户名与密码，与你的 VPS 远程主机建立连接。（本文假设默认用户名是 <code>root</code>，另外，在 Linux 系统输入密码的时候，是不会出现 <code>******</code> 这种提示符的，这样可以避免密码长度泄漏，不是你的键盘坏掉了哦！）</p><p><img src="'+g+'" alt="SSH远程登录"></p></li></ol><h2 id="_3-2-成功登录-ssh-初识命令行界面" tabindex="-1"><a class="header-anchor" href="#_3-2-成功登录-ssh-初识命令行界面"><span>3.2 成功登录 SSH！初识命令行界面！</span></a></h2><ol><li><p>如果你的信息都填写正确，你将会看到类似下图的界面，说明已登录成功：</p><p><img src="'+_+`" alt="初次登录VPS"></p><p>这个界面，就等于远程服务器的【桌面】，但它没有你熟悉的图标和鼠标，没有绚丽的色彩，有的只是简单文字，这就是【<strong>命令行界面</strong>】- <code>Command Line Interface</code>，或者缩写为 <code>CLI</code>。</p><p>接下来的所有操作，都需要你像电影里的黑客一样，在这个命令行界面中完成。也许你会觉得陌生，但请相信我，使用命令行既不可怕，也不神秘。说到底，它只不过是把你习惯的鼠标操作变成了文字指令而已，<strong>你说一句，它做一句</strong>。</p></li><li><p>现在，你可以稍微观察并熟悉一下命令行环境，这个界面其实已经告诉了你一些有用的信息了，比如系统内核版本（比如图内是 <code>4.19.37-5</code>）、上次登录时间及 IP 等。当然根据 VPS 的不同，你看到的界面可能会略有不同。</p></li><li><p>请注意命令行最下面一行，闪动的光标左边，有一串字符。图中显示的是<code>root@vps-server:~#</code>，这一串要怎么理解呢？很简单：</p><ul><li>现在的用户是 <code>root</code></li><li><code>root</code> 所在的服务器是 <code>vps-server</code></li><li><code>root</code> 现在所在的文件夹是 <code>~</code></li><li><code>#</code> 之后是你可以输入命令的地方</li></ul><p>前两个很直观，无需多说。第三个是关于 Linux 的文件夹系统，现在也不需要过于深入，你只需要知道，&quot;<code>~</code>&quot;就是【当前用户的大本营】。第四个，提示符<code>#</code>，你也不用管，只需要知道，未来文章中会写一些需要你输入的命令，都会以 &quot;<code>#</code>&quot; 或者 &quot;<code>$</code>&quot; 开头，提示你<strong>后面</strong>是你输入命令的地方。（所以你复制命令的时候，<strong>只需要复制后面的内容</strong>，不要复制提示符）</p></li></ol><h2 id="_3-3-第一次更新-linux-的软件" tabindex="-1"><a class="header-anchor" href="#_3-3-第一次更新-linux-的软件"><span>3.3 第一次更新 Linux 的软件！</span></a></h2><ol><li><p>正如你的手机，无论安卓还是 iPhone，为了 APP 及时更新（获取安全补丁和新功能），都会时不时从应用商店获得更新信息，并且提示你有多少个 APP 可更新。Linux 系统也有逻辑十分类似的更新机制。所以只要你会更新手机 APP，就能学会更新 Linux 软件！</p></li><li><p>Linux 下，每个 APP 都叫做一个“包” （package）。管理 APP 的程序自然就叫做“包管理器”（Package Manager）。你可以通过它安装、更新、卸载各种软件、甚至更新 Linux 系统本身。Linux 下的包管理器非常强大，此处按下不表，现在你只需要知道 Debian 系统的包管理器叫做 <code>apt</code> 即可。接下来，我们就先使用 <code>apt</code> 做一次软件的全面更新，让你熟悉它的基本操作。</p></li><li><p>小小白白 Linux 基础命令：</p><table><thead><tr><th style="text-align:center;">编号</th><th style="text-align:center;">命令名称</th><th style="text-align:center;">命令说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>cmd-01</code></td><td style="text-align:center;"><code>apt update</code></td><td style="text-align:center;">查询软件更新</td></tr><tr><td style="text-align:center;"><code>cmd-02</code></td><td style="text-align:center;"><code>apt upgrade</code></td><td style="text-align:center;">执行软件更新</td></tr></tbody></table></li><li><p>现在请输入第一条命令，获取更新信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>然后请输入第二条命令，并在询问是否继续安装 <code>(Y/n)</code> 时输入 <code>y</code> 并回车确认，开始安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>完整流程演示如下：</p><p><img src="`+m+'" alt="初次软件更新流程演示"></p></li></ol><h2 id="_3-4-你的进度" tabindex="-1"><a class="header-anchor" href="#_3-4-你的进度"><span>3.4 你的进度</span></a></h2><p><strong>恭喜你又迈出了坚实的一步！</strong> 现在，你已经可以通过 SSH 来登录你的远程服务器了！那登录进去之后，除了升级软件之外，应该再做点什么呢？敬请进入下一章一探究竟吧！</p><blockquote><p>⬛⬛⬛⬜⬜⬜⬜⬜ 37.5%</p></blockquote>',9);function q(H,E){const n=o("ExternalLinkIcon"),a=o("RouterLink");return c(),d("div",null,[P,S,v,y,b,e("ol",null,[e("li",null,[e("p",null,[t("进入 PuTTY 的"),e("a",f,[t("官网"),s(n)]),t("，选择适合你操作系统的版本下载。（本文以 64 位版本为例）")]),T]),e("li",null,[e("p",null,[t("安装运行后，将会看到 PuTTY 的主界面。现在请拿出你上一章记东西的"),s(a,{to:"/document/level-0/ch02-preparation.html#21-%E8%8E%B7%E5%8F%96%E4%B8%80%E5%8F%B0vps"},{default:i(()=>[t("小本本")]),_:1}),t("，在下图的对应位置填入你 VPS 的"),k,t("。为了方便以后使用时不用重复输入，我们可以保存会话 (Saved Sessions)，未来使用时只要按 Load 即可一键载入设置。")]),L]),w]),V])}const I=l(x,[["render",q],["__file","ch03-ssh.html.vue"]]);export{I as default};