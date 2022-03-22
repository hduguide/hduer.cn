/**
 *  自定义网站配置 
 */
const config = {
  title: "HDU导航",                  //write your website title
  subtitle: "杭电导航 | HDUER.CN",   //write your website subtitle
  logo_icon: "houzz",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                   //use hitokoto or not
  search: false,                    //enable search function
  search_engine: [                  //choose search engine which you use
    {
      name: "百 度",
      template: "https://www.baidu.com/s?wd=$s"
    },
    {
      name: "必 应",
      template: "https://www.bing.com/search?q=$s"
    },
    {
      name: "搜 狗",
      template: "https://www.sogou.com/web?query=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info: {
    domain: "example.com",
    price: 500,                        //domain price
    mon_unit: "yen sign",              //monetary unit 
    contact: [                         //how to contact you
      {
        type: "envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content: "info@example.com"
      }
    ]
  },
  lists: [                            //Url list
    {
      name: "新生指南",
      icon: "at",
      list: [
        {
          url: "https://yuque.com/hduer",
          name: "杭电指北",
          desc: "杭电指北知识库，做不一样的指南，欢迎加入~"
        }
      ]
    },
    {
      name: "智慧杭电",
      icon: "book",
      list: [
        {
          url: "https://i.hdu.edu.cn/",
          name: "智慧杭电",
          desc: "i.hdu.edu.cn"
        },
        {
          url: "http://xgxt.hdu.edu.cn",
          name: "学生系统",
          desc: "xgxt.hdu.edu.cn"
        },
        {
          url: "http://jwc.hdu.edu.cn/",
          name: "教务处",
          desc: "jwc.hdu.edu.cn"
        },
        {
          url: "http://hdu.fanya.chaoxing.com/",
          name: "泛雅网络教学平台",
          desc: "hdu.fanya.chaoxing.com"
        },
        {
          url: "http://www.lib.hdu.edu.cn",
          name: "图书馆",
          desc: "lib.hdu.edu.cn"
        },
        {
          url: "http://210.32.33.91:8080",
          name: "图书馆书目检索",
          desc: "210.32.33.91:8080"
        },
        {
          url: "https://mail.hdu.edu.cn/",
          name: "杭电邮箱",
          desc: "mail.hdu.edu.cn"
        },
        {
          url: "http://pwd.hdu.edu.cn/vpn.aspx",
          name: "杭电VPN",
          desc: "pwd.hdu.edu.cn"
        },
        {
          url: "http://newjw.hdu.edu.cn/sso/driot4login",
          name: "选课系统(新)",
          desc: "newjw.hdu.edu.cn"
        },
        {
          url: "http://jxgl.hdu.edu.cn/",
          name: "选课系统(旧)",
          desc: "jxgl.hdu.edu.cn"
        },
        {
          url: "http://jxgl.hdu.edu.cn/jxrwcx.aspx",
          name: "教学管理信息系统",
          desc: "jxgl.hdu.edu.cn/jxrwcx.aspx"
        },
        {
          url: "http://192.168.101.210/aexp/",
          name: "创新学分申报认定",
          desc: "(需校园网/杭电VPN)"
        },
        {
          url: "http://hdu.co.cnki.net",
          name: "毕业论文管理系统",
          desc: "hdu.co.cnki.net"
        },
        {
          url: "http://hyb.hdu.edu.cn",
          name: "回音壁",
          desc: "需校园网/VPN"
        }
      ]
    },
    {
      name: "学校部门",
      icon: "building",
      list: [
        {
          url: "http://www.hdu.edu.cn",
          name: "杭电官网",
          desc: "www.hdu.edu.cn"
        },
        {
          url: "http://jwc.hdu.edu.cn/",
          name: "教务处",
          desc: "jwc.hdu.edu.cn"
        },
        {
          url: "http://www.lib.hdu.edu.cn",
          name: "图书馆",
          desc: "lib.hdu.edu.cn"
        },
        {
          url: "http://grs.hdu.edu.cn",
          name: "研究生院",
          desc: "grs.hdu.edu.cn"
        },
        {
          url: "http://zhaosheng.hdu.edu.cn",
          name: "招生处",
          desc: "zhaosheng.hdu.edu.cn"
        },
        {
          url: "http://cwc.hdu.edu.cn",
          name: "计划财务处",
          desc: "cwc.hdu.edu.cn"
        },
        {
          url: "http://foreign.hdu.edu.cn",
          name: "国际处",
          desc: "foreign.hdu.edu.cn"
        },
        {
          url: "http://xyy.hdu.edu.cn",
          name: "校医院",
          desc: "xyy.hdu.edu.cn"
        },
        {
          url: "http://career.hdu.edu.cn",
          name: "就业指导中心",
          desc: "career.hdu.edu.cn"
        },
        {
          url: "http://ceee.hdu.edu.cn",
          name: "实验教学示范中心",
          desc: "ceee.hdu.edu.cn"
        },
      ]
    },
    {
      name: "其他平台",
      icon: "stripe s",
      list: [
        {
          url: "http://acm.hdu.edu.cn",
          name: "杭电OJ",
          desc: "acm.hdu.edu.cn"
        },
        {
          url: "http://hdu.fanya.chaoxing.com/",
          name: "泛雅网络教学平台",
          desc: "hdu.fanya.chaoxing.com"
        },
        {
          url: "http://cet-bm.neea.edu.cn",
          name: "四六级报名网",
          desc: "cet-bm.neea.edu.cn"
        },
        {
          url: "http://www.walkclass.com",
          name: "学呗课堂",
          desc: "www.walkclass.com"
        },
        {
          url: "https://www.zhihuishu.com",
          name: "智慧树",
          desc: "www.zhihuishu.com"
        },
        {
          url: "https://pintia.cn/",
          name: "PTA平台",
          desc: "pintia.cn"
        },
        {
          url: "http://www.zjooc.cn",
          name: "浙江在线开放课程平台",
          desc: "www.zjooc.cn"
        },
        {
          url: "http://phy.hdu.edu.cn/",
          name: "物理实验中心",
          desc: "(需校园网/杭电VPN)"
        },
        {
          url: "https://app.hduhelp.com",
          name: "杭电助手",
          desc: "app.hduhelp.com"
        },
        {
          url: "https://hdu.help/",
          name: "杭电导航",
          desc: "hdu.help"
        },
        {
          url: "http://dl.hduhelp.com/#",
          name: "助手期末福利",
          desc: "dl.hduhelp.com"
        },
      ]
    },
    {
      name: "学术研究",
      icon: "graduation cap",
      list: [
        {
          url: "http://hdu.co.cnki.net",
          name: "毕业论文管理系统",
          desc: "hdu.co.cnki.net"
        },
        {
          url: "http://xueshu.baidu.com/",
          name: "百度学术",
          desc: "xueshu.baidu.com"
        },
        {
          url: "https://pubvpn.hdu.edu.cn/",
          name: "WebVPN图书资源",
          desc: "pubvpn.hdu.edu.cn"
        },
        {
          url: "http://182.61.52.44/",
          name: "ZADL文献传递",
          desc: "182.61.52.44"
        },
        {
          url: "http://www.cnki.net/",
          name: "中国知网CNKI",
          desc: "www.cnki.net"
        },
        {
          url: "http://www.wanfangdata.com.cn/index.html",
          name: "万方数据",
          desc: "www.wanfangdata.com.cn"
        },
        {
          url: "http://www.cqvip.com/",
          name: "维普网",
          desc: "www.cqvip.com"
        },
        {
          url: "https://ssvideo.superlib.com/",
          name: "超星尔雅学术视频",
          desc: "ssvideo.superlib.com"
        },
      ]
    },
    // {
    //   name: "境外学术",
    //   icon: "graduation cap",
    //   list: [
    //     {
    //       url: "https://scholar.google.cn",
    //       name: "Google Scholar",
    //       desc: "scholar.google.cn"
    //     },
    //     {
    //       url: "http://chongbuluo.99lb.net",
    //       name: "谷粉学术 镜像1",
    //       desc: "chongbuluo.99lb.net"
    //     },
    //     {
    //       url: "https://scholar.123admin.com",
    //       name: "Glgoo学术 镜像2",
    //       desc: "scholar.123admin.com"
    //     },
    //     {
    //       url: "https://xueshu.soogle.top",
    //       name: "Soogle学术 镜像3",
    //       desc: "xueshu.soogle.top"
    //     },
    //     {
    //       url: "https://sci-hub.se",
    //       name: "Sci-Hub",
    //       desc: "sci-hub.se"
    //     },
    //     {
    //       url: "http://www.webofknowledge.com/",
    //       name: "Web of Science",
    //       desc: "www.webofknowledge.com"
    //     },
    //     {
    //       url: "https://link.springer.com/",
    //       name: "SpringerLink",
    //       desc: "link.springer.com"
    //     },
    //     {
    //       url: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    //       name: "IEEE Xplore",
    //       desc: "ieeexplore.ieee.org"
    //     },
    //     {
    //       url: "https://www.engineeringvillage.com/",
    //       name: "Engineering Village",
    //       desc: "engineeringvillage"
    //     },
    //     {
    //       url: "https://dl.acm.org/",
    //       name: "ACM Digital Library",
    //       desc: "dl.acm.org"
    //     },
    //     {
    //       url: "https://www.sciencedirect.com",
    //       name: "ScienceDirect",
    //       desc: "www.sciencedirect.com"
    //     },
    //     {
    //       url: "https://onlinelibrary.wiley.com",
    //       name: "Wiley Online Library",
    //       desc: "onlinelibrary.wiley.com"
    //     },
    //     {
    //       url: "https://www.tandfonline.com",
    //       name: "Taylor & Francis Online",
    //       desc: "www.tandfonline.com"
    //     },
    //     {
    //       url: "https://journals.sagepub.com",
    //       name: "SAGE Journals",
    //       desc: "journals.sagepub.com"
    //     },
    //     {
    //       url: "https://www.ncbi.nlm.nih.gov",
    //       name: "NCBI",
    //       desc: "www.ncbi.nlm.nih.gov"
    //     },
    //   ]
    // }
  ]
}

const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(), config.selling_ads ? renderSeller() : null), init);
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url) {
  if (url.match(/https{0,1}:\/\//)) {
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  } else {
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  }
}

/** Render Functions
 *  渲染模块函数
 */
function renderIndex() {
  const footer = el('footer', [], el('div', ['class="footer"'], + el('a', ['class="ui label"', 'href="https://beian.miit.gov.cn/"', 'target="_blank"'],"") + '浙ICP备2021038365号-1'));
  return renderHeader() + renderMain() + footer;
}

function renderHeader() {
  const item = (template, name) => el('a', ['class="item"', `data-url="${template}"`], name);

  var nav = el('div', ['class="ui large secondary inverted menu"'], el('div', ['class="item"'], el('p', ['id="hitokoto"'], '条条大路通罗马')))
  var title = el('h1', ['class="ui inverted header"'], el('i', [`class="${config.logo_icon} icon"`], "") + el('div', ['class="content"'], config.title + el('div', ['class="sub header"'], config.subtitle)));
  var menu = el('div', ['id="sengine"', 'class="ui bottom attached tabular inverted secondary menu"'], el('div', ['class="header item"'], '&nbsp;') + config.search_engine.map((link, key) => {
    if (key == 0) {
      return el('a', ['class="active item"', `data-url="${link.template}"`], link.name);
    } else {
      return item(link.template, link.name);
    }
  }).join(""))
  var input = el('div', ['class="ui left corner labeled right icon fluid large input"'], el('div', ['class="ui left corner label"'], el('img', ['id="search-fav"', 'class="left floated avatar ui image"', 'src="https://www.baidu.com/favicon.ico"'], "")) + el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索你想要知道的……"', 'autocomplete="off"'], "") + el('i', ['class="inverted circular search link icon"'], ""));
  return el('header', [], el('div', ['id="head"', 'class="ui inverted vertical masthead center aligned segment"'], (config.hitokoto ? el('div', ['id="nav"', 'class="ui container"'], nav) : "") + el('div', ['id="title"', 'class="ui text container"'], title + (config.search ? input + menu : "") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url, name, desc) => el('a', ['class="card"', `href=${url}`, 'target="_blank"'], el('div', ['class="content"'], el('img', ['class="left floated avatar ui image"', `src=${getFavicon(url)}`], "") + el('div', ['class="header"'], name) + el('div', ['class="meta"'], desc)));
    const divider = el('h4', ['class="ui horizontal divider header"'], el('i', [`class="${item.icon} icon"`], "") + item.name);

    var content = el('div', ['class="ui four stackable cards"'], item.list.map((link) => {
      return card(link.url, link.name, link.desc);
    }).join(""));

    return el('div', ['class="ui basic segment"'], divider + content);
  }).join("");

  return el('main', [], el('div', ['class="ui container"'], main));
}

function renderSeller() {
  const item = (type, content) => el('div', ['class="item"'], el('i', [`class="${type} icon"`], "") + el('div', ['class="content"'], content));
  var title = el('h1', ['class="ui yellow dividing header"'], el('i', ['class="gem outline icon"'], "") + el('div', ['class="content"'], config.sell_info.domain + ' 正在出售'));
  var action = el('div', ['class="actions"'], el('div', ['class="ui basic cancel inverted button"'], el('i', ['class="reply icon"'], "") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type, list.content);
  }).join("");
  var column = el('div', ['class="column"'], el('h3', ['class="ui center aligned icon inverted header"'], el('i', ['class="circular envelope open outline grey inverted icon"'], "") + '联系我') + el('div', ['class="ui relaxed celled large list"'], contact));
  var price = el('div', ['class="column"'], el('div', ['class="ui large yellow statistic"'], el('div', ['class="value"'], el('i', [`class="${config.sell_info.mon_unit} icon"`], "") + config.sell_info.price)));
  var content = el('div', ['class="content"'], el('div', ['class="ui basic segment"'], el('div', ['class="ui two column stackable center aligned grid"'], el('div', ['class="ui inverted vertical divider"'], '感兴趣？') + el('div', ['class="middle aligned row"'], price + column))));

  return el('div', ['id="seller"', 'class="ui basic modal"'], title + content + action);
}

function renderHTML(index, seller) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${config.title} - ${config.subtitle}</title>
        <link href="https://cfworkers-1252054182.file.myqcloud.com/semantic.min.css" rel="stylesheet">
        <link href="https://cfworkers-1252054182.file.myqcloud.com/style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
    </head>
    <body>
      ${index}
      ${config.selling_ads ? seller : ''}
      <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
      <script>
        $('#sengine a').on('click', function (e) {
          $('#sengine a.active').toggleClass('active');
          $(e.target).toggleClass('active');
          $('#search-fav').attr('src',$(e.target).data('url').match(`+ /https{0,1}:\/\/\S+\// + `)[0] + '/favicon.ico') ;
        });
        $('.search').on('click', function (e) {
            var url = $('#sengine a.active').data('url');
            url = url.replace(`+ /\$s/ + `,$('#searchinput').val());
            window.open(url);
        });
        /* 鼠标聚焦时，回车事件 */
        $("#searchinput").bind("keypress", function(){
            if (event.keyCode == 13){
            // 触发需要调用的方法
            $(".search").click();
            }
        });
        $('#menubtn').on('click', function (e) {
            $('#seller').modal('show');
        });
      </script>
    </body>
    </html>`
}
