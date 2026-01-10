一，购买域名
https://www.spaceship.com/domain-search/
二，绑定域名
https://dash.cloudflare.com/
在 claudeflare 的 account home 点击+onboard,输入新域名，点击 quick scan for DNS records ,选择 free 套餐，continue--》ns 解析、A 类型、都删掉，continue to activation--》，拿到 nameserver,去 spaceship 更换 custom nameserver，检查 spaceship 的 DNS 记录为 0 即可--》
去 Claudeflare 点击 continue 等待同步，10 分钟左右好

三，GA 代码
https://analytics.google.com/analytics/web/provision/#/provision/create
直接进入新增域名界面，填入域名，1-10 人规模，行业就选第一个 Arts 那个，Qther 那个，选择 web,域名都填进去，选择 create&continue,看到 GA 代码了，留着备用

四，生成项目文件
让 chatGPT 生成需求文档，cc 执行，同时告诉 cc 我的 GA 代码，让放进去，等执行完告诉 cc 我的仓库地址，让自动初始化并推送仓库
，这时候点一下右上角的 test installation，然后是绿色的, 说 Your Google tag was Correctly detected to your website 就行了。

1.same.new 复刻模板，解压到 D 盘 web 里，用 vscode 打开，给 cc/codex 提示词：

我的游戏词是 Code Violet，域名是 code-violet.org,请你按照 SEO 的要求，根据·········这些关键词，帮我查询当前互联网上已有的最新数据和资料，并结合现在项目的首页样式，写个项目重构的文档。

我的游戏词是 Code Violet，域名是 code-violet.org,根据这些关键词，你帮我查询最新的数据和资料内容，以 json 形式给我，回头我要添加在我的首页内容里。

我的 GA 代码是···
请将该代码复制并粘贴到您网站上每个网页的代码中，紧跟在 <head> 元素之后。每个网页只能添加一个 Google 代码。

https://github.com/new 新建仓库，然后给大模型提示词：我的仓库地址是https://github.com/claire20020128-hash/Code-Violet，帮我推送
执行

五，
vercel 部署上线
在 vercel overview/vercel dashboard 找到 add new,选择 project，选择我们刚刚推到 git 上的项目，点击 import 进口，然后
不用更改任何信息，直接点击部署，等待几分钟，就能直接部署成功。

六，DNS 记录
在 Cloudflare 里面，点击 Domains,点击此次域名，点击 DNS，点击 Records,添加 A 记录，1）Type：A
2）Name：@ 3）Value：填 Vercel 给的 IP 4）DNS only（灰云）

七，检测
去 vercel 上看 Domains 是否正常

八，数据分析

https://scys.com/course/detail/87?chapterId=3563
生财教程以上 👆
https://search.google.com/search-console/about

GSC,start now,Domains （new）填入域名，点击左上角的域名列表，点击添加资源，填入域名，start verification，authorize,点击前往资源页面进入 GSC 后台，数据还没有出现，所以我们现在搜索框搜索域名，然后在界面点击 test live url ，测试成功时，url 和 page 两项都是绿的，再点击 url 底下的 Request Indexing，请求成功之后就会显示绿色的 indexing requested.
https://analytics.google.com/analytics/web/#/a379587147p518711022/reports/intelligenthome
GA4 直接看用户数据的

九，添加广告
Adsterra 全流程 （初版就加）
AdSense 全流程（有流量再加）

检查完善 1.给 chatGPT:我的站是···，我的站上没有 sitemap.xml 这个路由，我准备让 Claudecode 部署（用多语言：1. 默认语言：英文 2. 支持的语言列表：English、Spanish、Portuguese(Brazil) 3.网站正式域名 ：··），给我提示词
