# loon cookie获取
# v0.1.1 2020.9.10

hostname = api.m.jd.com, daojia.jd.com, iface?.iqiyi.com, mobwsa.ximalaya.com, *.bilibili.com

# > 京东商城
# 浏览器登录 https://bean.m.jd.com 点击签到并且出现签到日历
http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# > 京东到家
http-request https:\/\/daojia\.jd\.com\/client\?_jdrandom=\d{13}&functionId=%2Fsignin script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Task/jddj.js

# > 奇艺视频
http-request ^https:\/\/iface\d\.iqiyi\.com\/.+?psp_cki= script-path=https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

# > 哔哩哔哩
# 浏览器访问并登录: https://www.bilibili.com 或 https://live.bilibili.com 系统提示:获取Cookie: 成功
http-request ^https:\/\/(www|live)\.bilibili\.com\/?.? script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js

# > 喜马拉雅
http-request ^https?:\/\/.*\/mobile\-user\/homePage\/.* script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.cookie.js
