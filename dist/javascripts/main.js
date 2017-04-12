'use strict';

$('table').on('click', 'tbody td', function (e) {
    $(this).attr('contenteditable', 'true');
    $(this).focus();
    e.stopPropagation();
});
$(document).on('click', function () {
    $('tbody td').removeAttr('contenteditable');
});
$(document).on('click', 'tbody td', function () {
    $(this).removeAttr('contenteditable');
});
$('#btn').on('click', function () {
    var tr = $('<tr>');
    var str = [];
    $.each($('thead th'), function (k, v) {
        str.push('<td>&nbsp;</td>');
    });
    console.log(str);
    tr.append(str);
    $('tbody').append(tr);
});

for (var t = 0; t < len; t++) {
    tag[t].addEventListener('click', function (event) {
        this.setAttribute('contenteditable', 'true');
        this.focus();
        event.cancelBubble = true;
    });
}
//取消后的


//创建
var btn = document.getElementById('btn');
"use strict";

window.onload = function () {
    var agumon = new Vue({
        el: '.container', //id 在这个盒子里面才能操作下面的东西
        data: { //数据
            myData: [{
                "name": "空空",
                "sex": "boy",
                "age": "13"
            }, {
                "name": "夜夜",
                "sex": "boy",
                "age": "14"
            }],
            styles: { "completed": false },
            username: '',
            sex: '',
            age: '',
            tabindex: -100, //弹窗删除的属性赋值
            message: "输入框",
            checked: false, //多选框
            checkedNames: [], //多选框组
            picked: '', //单选框
            xy: '', //EventXY
            showkeyCode: '', //按键用的
            url: 'https://ps.ssl.qhimg.com/sdmt/144_135_100/t010bf04198ccd48ac0.jpg',
            url2: 'images/bkc.jpg',
            w: '320px',
            title: '我就是标题',
            alt: '描述？',
            green: 'green', //通过这里指向class 双方
            red: 'red',
            latehide: false
        },
        computed: { //页面展示数据直接处理数据放出来 页面用法{{tablesDate}}
            tablesDate: function tablesDate() {
                return this.myData.length;
            }
        },
        methods: { //事件操作
            add: function add() {
                if (this.username === "") {
                    alert('不能为空');
                } else {
                    this.myData.push({
                        name: this.username,
                        age: this.age,
                        sex: this.sex
                    });
                    this.username = '';
                    this.age = '';
                    this.sex = '';
                }
            },
            deleteMsg: function deleteMsg(index) {
                // console.log(this.tabindex)
                this.myData.splice(index, 1);
            },
            tooggleComletion: function tooggleComletion(styles) {
                //改变按钮
                styles.completed = !styles.completed;
            },
            btnEvent: function btnEvent(e) {
                //Event
                this.xy = e.clientX + "-" + e.clientY;
                alert(e.clientX + "-" + e.clientY);
            },
            btn1: function btn1() {
                //冒泡
                alert('我的盒子');
                // e.cancelBubble = true;
            },
            btn2: function btn2() {
                //冒泡
                alert('我是输入框');
            },
            showkey: function showkey(ev) {
                this.showkeyCode = ev.keyCode;
                if (ev.keyCode == 13) {
                    // alert('你回车了')
                }
            },
            showkey2: function showkey2() {
                alert('你回车了');
            },
            transitions: function transitions() {
                this.latehide = true;
            }

        }
    });
};
'use strict';

var sf = {
    config: {
        tbodys: document.getElementsByTagName('tbody')[0],
        tag: document.getElementsByTagName('td'),
        len: document.getElementsByTagName('td').length,
        btn: document.getElementById('btn'),
        thead: document.getElementsByTagName('thead')[0]
    },
    init: function init() {
        document.addEventListener('click', sf.unbodys);
        sf.config.tbodys.addEventListener('click', sf.bodys);
        sf.config.btn.addEventListener('click', sf.addBodys);
    },
    bodys: function bodys(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        console.log(sf.config.tag[0].nodeName);
        if (target.nodeName == sf.config.tag[0].nodeName) {
            target.setAttribute('contenteditable', 'true');
            target.focus();
            event.cancelBubble = true;
        }
    },
    unbodys: function unbodys(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.nodeName == target.nodeName) {
            for (var o = 0, i = sf.config.len; o < i; o++) {
                sf.config.tag[o].removeAttribute('contenteditable');
            }
        }
        //  console.log(!target.id.indexOf('btn')) //！true  正常0  找不到-1
        //存在
        //  if (!target.id.indexOf('btn')) {
        //      alert('此时进行#son元素的事件处理');
        //  }
    },
    addBodys: function addBodys() {
        var thLen = sf.config.thead.getElementsByTagName('th').length;
        // insertRow
        var tbody = document.getElementsByTagName('tbody')[0].insertRow(0);
        tbody.setAttribute('role', 'row');
        for (var r = 0; r < thLen; r++) {
            var y = tbody.insertCell(r);
            y.innerHTML = "&nbsp;";
        }

        // 文档片段优化法
        //  var fragment = document.createDocumentFragment();
    }
};
'use strict';

function fn(id1, id2) {
    document.addEventListener('click', function (e) {
        if (e.target !== id1) {
            id2.style.display = "none";
        }
    });
    id2.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    id1.addEventListener('click', function (e) {
        var status = id2.style.display;
        if (status === "none") {
            id2.style.display = "block";
        } else {
            id2.style.display = "none";
        }
    });
}
fn(btn, div);
'use strict';

var keyControl = {
    //手机部分显示错误信息的id
    numKey: function numKey(t) {
        t.value = t.value.replace(/[^\d]/g, '');
    },
    //有小数点
    flostKey: function flostKey(t) {
        t.value = t.value.replace(/[^\d\.]/g, '').replace(/^[^\d]/g, '');
    },
    //匹配0开头跟随的数字
    zeroKey: function zeroKey(t) {
        t.value = t.value.replace(/^0(?=[0-9])/, '');
    },
    //只能存在一个.
    dotId: "",
    dotError: '输入正确规则数字...',
    oneKey: function oneKey(t) {
        var one = t.value.search(/[\.]/g),
            two = t.value.lastIndexOf('.');
        if (one != two) id(keyControl.dotId).innerHTML = keyControl.dotError;
    },
    //电话号码
    telId: '',
    telError: '×手机号不正确...',
    telNight: '√手机号正确',
    telKey: function telKey(t) {
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!reg.test(t.value)) {
            console.log('输入正确手机号');
            id(keyControl.telid).innerHTML = keyControl.telError;
            return false;
        } else {
            id(keyControl.telid).innerHTML = keyControl.telNight;
        }
    },
    id: function id(obj) {
        return document.getElementById(obj);
    },
    //长度
    maxLength: 10,
    minLength: 2,
    maxStr: '超过最大限制',
    minStr: '最少输入几位数',
    strId: "",
    strLength: function strLength(t) {
        console.log(keyControl.maxStr);
        if (t.value.length >= keyControl.maxLength) {
            //超过最大限制
            id(keyControl.strId).innerHTML = keyControl.maxStr;
            return false;
        } else if (t.value.length <= keyControl.minLength) {
            //最小限制
            id(keyControl.strId).innerHTML = keyControl.minStr;
            return false;
        } else {
            id(keyControl.strId).innerHTML = '';
        }
    },
    successColor: function successColor() {},
    errorColor: function errorColor() {},
    //倒计时60秒
    setTimeBtn: '',
    setTime: 60,
    timeSix: function timeSix() {
        var timer = setInterval(function () {
            if (keyControl.setTime > 0) {
                id(keyControl.setTimeBtn).setAttribute("disabled", "disabled");
                id(keyControl.setTimeBtn).value = "(" + keyControl.setTime + ")重新获取";
                keyControl.setTime--;
            } else {
                clearInterval(timer);
                id(keyControl.setTimeBtn).removeAttribute("disabled");
                id(keyControl.setTimeBtn).value = "获取验证码";
                keyControl.setTime = 60;
            }
        }, 1000);
    },
    //密码对比
    identicalTwo: '', //第二个密码的ID
    identicalError: '', //显示错误的ID
    identical: function identical(t) {
        if (t.value != id(keyControl.identicalTwo).value) {
            id(keyControl.identicalError).value = "密码不一致";
        } else {
            id(keyControl.identicalError).value = "";
        }
    }
};

function Agumon() {
    this.erId = ''; //输出的错误ID
    this.minLength = 2; //最长限制
    this.maxLength = 10; //最少限制
    this.minError = '最少限制是' + this.minLength; //最少限制错误
    this.maxError = '最大限制是' + this.maxLength; //最大限制错误
    this.setTime = 60; // 倒数时间
    this.reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    this.dotError = '输入正确规则数字...';
}
Agumon.prototype = {
    strLength: function strLength(t) {
        //长短限制
        if (t.value.length >= this.maxLength) {
            //超过最大限制
            id(this.erId).innerHTML = this.maxError;
            return false;
        } else if (t.value.length <= this.minLength) {
            //最小限制
            id(this.erId).innerHTML = this.minError;
            return false;
        } else {
            id(this.erId).innerHTML = '';
            return true;
        }
    },
    ploneKey: function ploneKey(t) {
        // 手机号判断
        if (!this.reg.test(t.value)) {
            console.log('输入正确手机号');
            id(this.erId).innerHTML = this.minError; //错
            return false;
        } else {
            id(this.erId).innerHTML = this.maxError; //对
            return true;
        }
    },
    oneKey: function oneKey(t) {
        // 小数点和数字
        var one = t.value.search(/[\.]/g),
            two = t.value.lastIndexOf('.');
        if (one != two) id(this.erId).innerHTML = this.dotError;
    },
    //手机部分显示错误信息的id
    numKey: function numKey(t) {
        t.value = t.value.replace(/[^\d]/g, '');
    },
    flostKey: function flostKey(t) {
        //有小数点
        t.value = t.value.replace(/[^\d\.]/g, '').replace(/^[^\d]/g, '');
    },
    zeroKey: function zeroKey(t) {
        //匹配0开头跟随的数字
        t.value = t.value.replace(/^0(?=[0-9])/, '');
    },
    ltrim: function ltrim(str) {
        return str.replace(/(^\s*)/g, '');
    },
    rtrim: function rtrim(str) {
        return str.replace(/(\s*$)/g, '');
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

};
var agumon = new Agumon();
'use strict';

;
(function ($, window, document, undefined) {
    //定义Beautifier的构造函数
    var Beautifier = function Beautifier(ele, opt) {
        this.$element = ele, this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        }, this.options = $.extend({}, this.defaults, opt); //将一个空对象做为第一个参数 保护好默认参数
    };
    //定义Beautifier的方法
    Beautifier.prototype = {
        beautify: function beautify() {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        }
    };
    //在插件中使用Beautifier对象
    $.fn.myPlugin = function (options) {
        //创建Beautifier的实体
        var beautifier = new Beautifier(this, options);
        //调用其方法
        return beautifier.beautify();
    };
})(jQuery, window, document);
// 同时，将系统变量以参数形式传递到插件内部也是个不错的实践。

// 当我们这样做之后，window等系统变量在插件内部就有了一个局部的引用，可以提高访问速度，会有些许性能的提升

// 最后我们得到一个非常安全结构良好的代码：

// ;(function($,window,document,undefined){
//     //我们的代码。。
//     //blah blah blah...
// })(jQuery,window,document);


// 而至于这个undefined，稍微有意思一点，为了得到没有被修改的undefined，我们并没有传递这个参数，但却在接收时接收了它，因为实际并没有传，所以‘undefined’那个位置接收到的就是真实的'undefined'了。是不是有点hack的味道，值得细细体会的技术，当然不是我发明的，都是从前人的经验中学习。
'use strict';

var filter = {
    /** 将text中的html字符转义， 仅转义  ', ", <, > 四个字符
     * @param  { String } str 需要转义的字符串
     * @returns { String }     转义后的字符串 
     */
    unhtml: function unhtml(str) {
        return str ? str.replace(/[<">']/g, function (a) {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a];
        }) : '';
    },

    /**
     * 匹配电话号码的正则
     * @param {String} tel 传入的电话号码
     * @param {String} reg 正则
     * @returns {bool} true false
     */
    verificationPhone: function verificationPhone(tel, reg) {
        return tel ? reg || /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(tel) : '';
        // console.log(reg.test(tel))
    },

    /**
     * 去除多余空格
     * @param { String } str 需要去空格的字符串 
     */
    unBlank: function unBlank(str) {
        return str ? str.replace(/\s/ig, '') : '';
    }
};
'use strict';

window.onload = function () {

    // 组件-一定要在vue前面
    Vue.component('zy', {
        template: '<h2>我是首页</h2>' //用什么模板来渲染他
    });

    Vue.component('rz', {
        template: '<h2>我是日志</h2>' //用什么模板来渲染他
    });
    Vue.component('xc', {
        template: '<h2>我是相册</h2>' //用什么模板来渲染他
    });
    Vue.component('lyb', {
        template: '<h2>我是留言吧</h2>' //用什么模板来渲染他
    });
    Vue.component('ss', {
        template: '<h2>我是说说</h2>' //用什么模板来渲染他
    });
    Vue.component('grd', {
        template: '<h2>我是个人的</h2>' //用什么模板来渲染他
    });
    Vue.component('bzd', {
        template: '<h2>bzd</h2>' //用什么模板来渲染他
    });

    var agumon = new Vue({
        el: '.container', //id 在这个盒子里面才能操作下面的东西
        data: { //数据
            types: [{ "title": "主页", "link": "zy" }, { "title": "日志", "link": "rz" }, { "title": "相册", "link": "xc" }, { "title": "留言吧", "link": "lyb" }, { "title": "说说", "link": "ss" }, { "title": "个人的", "link": "grd" }, { "title": "bzd", "link": "bzd" }],
            show: 'rz'
        },
        computed: {//页面展示数据直接处理数据放出来

        },
        methods: {//事件操作

        }
    });

    function fouter() {
        var str = location.hash;
        str = str.slice(1);
        str = str.replace(/^\//, '');
        var map = {
            zy: true,
            rz: true,
            xc: true,
            lyb: true,
            ss: true,
            grd: true,
            bzd: true
        };
        if (map[str]) {
            agumon.show = str;
        } else {
            agumon.show = 'zy';
        }
        console.log(str);
    }

    // window.addEventListener('hashChange', callback: EventListener, capture ? : boolean)
    window.addEventListener('hashchange', fouter);
};
"use strict";

(function () {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    window.onresize = function () {
        //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    };
})();
"use strict";

/**
 * last month chenyongh 2016年12月24日14:31:55
 */
var month = {
    filter: {},
    DataTables: "",
    init: function init() {
        _this = this;
        $(".addAccount").on('click', function () {});
        $("#proSelect").on('change', function () {});
        $('[name=tDnum]').on('blur', function () {});
        $('[name=tDnum]').on('keyup', function () {});
        DataTables = $('#table_id').DataTable({
            "processing": true,
            "serverSide": true, //服务器分页
            "sEmptyTable": true,
            "sLoadingRecords": true,
            "scrollX": false,
            "searching": false,
            "ordering": false,
            "paging": true,
            "bAutoWidth": true, //是否自适应宽度
            "bLengthChange": true, //隐藏下拉
            // data: [
            //         ['1', '2', '3', '4', '5', '6']
            //     ]，
            // info: false, //隐藏 Showing 1 to 2 of 2 entries //有多少页
            // retrieve: true, //检索实例，
            // destroy: true， //销毁当前表格，对象
            // ajax: {
            //     url: "",//替换新链接
            //     dataSrc: function(data) { //dataSrc=success 成功返回数据
            //         return data.data;
            //     }
            // },
            //制定第几列 显示什么属性 columns.data
            //columns.render 渲染函数
            "aaSorting": [[1, "desc"]],
            "aLengthMenu": [[10, 50, 100], [10, 50, 100]],
            // "dom": 'rt<"bottom"iflp<"clear">>',
            "order": [[0, "desc"]],
            "ajax": {
                "url": AccountData,
                "type": 'post',
                "data": function data(d) {
                    //添加额外的参数传给服务器
                    var filter = {};
                    d.filter = _this.filter;
                }
            },
            "dom": '<"row"<"#id.col-xs-6"r><"col-xs-6">>' + "t" + '<"row"<"col-xs-6"i><"col-xs-6"p>>',
            "aoColumns": [
            /**
            * 第1列默认排序
                第2列默认排序
                第3列只升序
                第4列降序排序，其次是升序，然后再升序
                第5列只降序
                第6列默认排序
            */
            null, null, { "orderSequence": ["asc"] }, { "orderSequence": ["desc", "asc", "asc"] }, { "orderSequence": ["desc"] }, null],
            columnDefs: [{
                targets: 0,
                data: "",
                title: "操作",
                render: function render(data, type, row, meta) {
                    //结算单Id
                    if (row[11] == "0") {
                        //待申请结算
                        return '<input type="checkbox"  name="checkBoxes" data-id="' + row[2] + '">';
                    } else {
                        return '<input type="checkbox" disabled name="checkBoxes" data-id="' + row[2] + '">';
                    }
                }
            }, {
                targets: 9,
                "visible": false //隐藏掉那一列
            }, {
                targets: 11, //判断td内容改td中的内容
                render: function render(data, type, row, meta) {
                    if (data == "1") {
                        return "审核中";
                    } else if (data == "0") {
                        return "待申请结算";
                    } else if (data == "2") {
                        return "审核通过";
                    } else if (data == '3') {
                        return "审核不通过";
                    }
                    return data;
                }
            }, {
                targets: 8,
                data: "",
                title: "操作",
                render: function render(data, type, row, meta) {
                    return '<input type="checkbox" name="checkBoxes" data-id="' + row[8] + '">';
                }
            }],
            // 回调函数， 当表格加载完后
            initComplete: function initComplete() {
                $("#id").append("input");
            },
            "createdRow": function createdRow(row, data, index) {
                //改變某航顏色
                if (data[2].replace(/[\$,]/g, '') * 1 > 4000) {
                    $('td', row).eq(2).html('<div style="border:1px solid red;width:300px">' + data[2] + '</div>');
                }
            },
            language: {
                "sProcessing": "拼命加载中...",
                "sLengthMenu": "显示 _MENU_ 项结果",
                "sZeroRecords": "没有匹配结果",
                "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                "sInfoPostFix": "",
                "sSearch": "搜索:",
                "sUrl": "",
                "sEmptyTable": "表中数据为空",
                "sLoadingRecords": "玩命加载中...",
                "sInfoThousands": ",",
                "oPaginate": {
                    "sFirst": "首页",
                    "sPrevious": "上页",
                    "sNext": "下页",
                    "sLast": "末页"
                },
                "oAria": {
                    "sSortAscending": ": 以升序排列此列",
                    "sSortDescending": ": 以降序排列此列"
                }
            }
        });
        $.fn.dataTable.ext.errMode = function (s, h, m) {};
    },
    //搜索功能
    selsect: function selsect() {
        _this.filter = {
            keywords: $('#keywords').val(),
            projectId: $("#projectId").val(),
            checkStatus: $("#searchDataTable").val()
        };
        DataTables.ajax.reload(null, false);
        // DataTables.draw();
    },
    //打开对账选择商品内容
    openContent: function openContent(oid) {
        var url = clearing_url;
        url += '/oid/' + oid; // 需要附带参数 /
        layer.open({
            type: 1, //1 是 HTML 2是frame
            title: '标题',
            shadeClose: true,
            shade: [0.8, '#393D49'],
            scrollbar: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['99%', '99%'], //窗口宽度
            content: ID, // 类型是1的用ID 2的用链接
            success: function success() {//执行弹出层完成时,获取当前层索引},

            },
            end: function end() {
                //关闭后执行父页面的功能
            }
        });
    },
    confirm: function confirm(num) {
        //确认弹出询问信息
        parent.layer.confirm('确定结算？', {
            icon: 3,
            title: '结算确认',
            yes: function yes() {
                $.ajax({
                    url: clearing_url,
                    type: 'post',
                    dataType: 'json',
                    data: { payRecordList: num },
                    success: function success(data) {
                        if (data.status == 1) {
                            parent.layer.msg('结算已发送，耐心等待审核！');
                            DataTables.ajax.reload();
                            setTimeout(parent.layer.closeAll, 1000);
                        }
                        if (data.url == 1000) {
                            parent.layer.alert(data.info, function (index) {
                                //bankCard 要打开的连接
                                parent.openFrame(bankCard, 'left-bankCard'); //跳转框架
                                parent.layer.close(index);
                            });
                        }
                    },
                    error: function error(data) {
                        parent.layer.msg('网站被外星人绑架啦~(≧▽≦)~啦啦啦，请刷新页面！');
                    }
                });
            },
            cancel: function cancel() {
                _this.dataTable.api().ajax.reload();
            }
        });
    },
    each: function each() {
        //数组转换对象
        art = [];
        $.each($("[name=checkBoxes]:checked"), function (i, n) {
            art.push($(n).attr("data-id"));
            //console.log($(n).attr("data-id"));
        });
        var _atr = art.toString(); //转出object
    }

};