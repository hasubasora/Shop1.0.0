window.onload = function() {
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
            tablesDate: function() {
                return this.myData.length;
            }
        },
        methods: { //事件操作
            add: function() {
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
            deleteMsg: function(index) {
                // console.log(this.tabindex)
                this.myData.splice(index, 1);
            },
            tooggleComletion: function(styles) { //改变按钮
                styles.completed = !styles.completed;

            },
            btnEvent: function(e) { //Event
                this.xy = e.clientX + "-" + e.clientY;
                alert(e.clientX + "-" + e.clientY)
            },
            btn1: function() { //冒泡
                alert('我的盒子')
                    // e.cancelBubble = true;
            },
            btn2: function() { //冒泡
                alert('我是输入框')

            },
            showkey: function(ev) {
                this.showkeyCode = ev.keyCode;
                if (ev.keyCode == 13) {
                    // alert('你回车了')
                }
            },
            showkey2: function() {
                alert('你回车了')
            },
            transitions: function() {
                this.latehide = true;
            }

        }
    });

};