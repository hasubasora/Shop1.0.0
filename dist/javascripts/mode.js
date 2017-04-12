window.onload = function() {

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
            types: [
                { "title": "主页", "link": "zy" },
                { "title": "日志", "link": "rz" },
                { "title": "相册", "link": "xc" },
                { "title": "留言吧", "link": "lyb" },
                { "title": "说说", "link": "ss" },
                { "title": "个人的", "link": "grd" },
                { "title": "bzd", "link": "bzd" },
            ],
            show: 'rz'
        },
        computed: { //页面展示数据直接处理数据放出来

        },
        methods: { //事件操作

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
        }
        if (map[str]) {
            agumon.show = str
        } else {
            agumon.show = 'zy'
        }
        console.log(str)
    }

    // window.addEventListener('hashChange', callback: EventListener, capture ? : boolean)
    window.addEventListener('hashchange', fouter)


};