(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{473:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"对公司产品的重构想法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对公司产品的重构想法"}},[s._v("#")]),s._v(" 对公司产品的重构想法")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("最近算是完整的参与了人生中的第一个大型项目：一个监控行业的产品，界面上大概有15个大模块。\n\n产品本来就算是一个半重构的项目，以前是c++、python混杂着写的，现在web基本都改成了python\n本来是准备采用flask写，但是当时领导坚持要使用C++调用python的方案，但是C++的web不支持\nWSGI或ASGI协议，最后自己手搓了一个Mxsoftpy框架。\n")])])]),a("h3",{attrs:{id:"项目代码结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目代码结构"}},[s._v("#")]),s._v(" 项目代码结构")]),s._v(" "),a("ul",[a("li",[s._v("现在的代码结构问题\n"),a("br"),s._v("\n之前没有做过这种大型项目，建立项目的时候还是按照以前的想法建的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyweb\n    db\n    model\n    server\n    utils\n    view\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("然后view、server、model、db分别建立了各个模块的文件夹\n如果开发人员少这个目录还可以，互相调用也还算清晰。\n但是开发人员多，而且还出现同一模块换人写，写代码和改bug的人不同的现象。\n然后数据权限也调整了好几次，还需要兼容两个平台的不同权限融合（我们作为一个模块融合到别人公司的平台），\n产品代码已经出现混乱的迹象了。")]),s._v(" "),a("ul",[a("li",[s._v("新的代码结构")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyweb\n    xxx(各模块文件夹)\n        interface      提供给内部的功能接口，入参和出参都严格使用model\n        db             严格限制对每个实体至少拥有一套curd方法，按照实体区分类\n        model\n            entity     实体模型\n            in         请求参数模型\n            out        返回数据模型\n            interface  接口模型（in、out）\n        server         \n        view           注释中添加接口文档\n    utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"权限封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限封装"}},[s._v("#")]),s._v(" 权限封装")]),s._v(" "),a("p",[s._v("现在的权限入口过多，设备、用户两边都提供了很多权限接口，除用户模块外，其他模块应该只需要数据权限")]),s._v(" "),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[s._v("#")]),s._v(" 接口")]),s._v(" "),a("p",[s._v("开发的时候太赶，模块之间的方法复用基本没有，db和model各自写各自的"),a("br"),s._v("\n优化原则：")]),s._v(" "),a("ul",[a("li",[s._v("db层统一复用，各模块实体的增删改方法只写一次")]),s._v(" "),a("li",[s._v("view的接口数据需要数据校验（请求数据严格序列化、响应数据推荐序列化）")]),s._v(" "),a("li",[s._v("需要跨模块调用的逻辑在interface中写一份")]),s._v(" "),a("li",[s._v("禁止一个url写多个逻辑，前端在不同模块调用类似功能的url时，写成多个，不要凑活改")]),s._v(" "),a("li",[s._v("interface层的方法注释写完整（方法使用、参数模型类、返回数据模型类）")])]),s._v(" "),a("h3",{attrs:{id:"数据存储、模块间数据联动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据存储、模块间数据联动"}},[s._v("#")]),s._v(" 数据存储、模块间数据联动")]),s._v(" "),a("ul",[a("li",[s._v("todo 业务数据增删除（特别是实体）会影响到多个模块，详细排查这些隐患")]),s._v(" "),a("li",[s._v("严格的统一数据库字段命名风格，实体统一使用is_del，关系统一直接删除")]),s._v(" "),a("li",[s._v("当前数据库存储结构正常，无需改动")])]),s._v(" "),a("h3",{attrs:{id:"异步支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步支持"}},[s._v("#")]),s._v(" 异步支持")]),s._v(" "),a("p",[s._v("接口已经支持async，重构时可以改为异步")]),s._v(" "),a("h3",{attrs:{id:"日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[s._v("#")]),s._v(" 日志")]),s._v(" "),a("p",[s._v("尽管我已经多次强调日志，仍有info和debug不分，日志信息记录不详细等情况，甚至有些人员调试只依靠Mxsoftpy的全局异常捕获，\n记录时需要认真思考（自己根据此条日志能否排查问题）")])])}),[],!1,null,null,null);a.default=e.exports}}]);