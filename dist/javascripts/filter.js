;
(function($, window, document, undefined) {
    //定义Beautifier的构造函数
    var Beautifier = function(ele, opt) {
            this.$element = ele,
                this.defaults = {
                    'color': 'red',
                    'fontSize': '12px',
                    'textDecoration': 'none'
                },
                this.options = $.extend({}, this.defaults, opt) //将一个空对象做为第一个参数 保护好默认参数
        }
        //定义Beautifier的方法
    Beautifier.prototype = {
            beautify: function() {
                return this.$element.css({
                    'color': this.options.color,
                    'fontSize': this.options.fontSize,
                    'textDecoration': this.options.textDecoration
                });
            }
        }
        //在插件中使用Beautifier对象
    $.fn.myPlugin = function(options) {
        //创建Beautifier的实体
        var beautifier = new Beautifier(this, options);
        //调用其方法
        return beautifier.beautify();
    }
})(jQuery, window, document);
// 同时，将系统变量以参数形式传递到插件内部也是个不错的实践。

// 当我们这样做之后，window等系统变量在插件内部就有了一个局部的引用，可以提高访问速度，会有些许性能的提升

// 最后我们得到一个非常安全结构良好的代码：

// ;(function($,window,document,undefined){
//     //我们的代码。。
//     //blah blah blah...
// })(jQuery,window,document);


// 而至于这个undefined，稍微有意思一点，为了得到没有被修改的undefined，我们并没有传递这个参数，但却在接收时接收了它，因为实际并没有传，所以‘undefined’那个位置接收到的就是真实的'undefined'了。是不是有点hack的味道，值得细细体会的技术，当然不是我发明的，都是从前人的经验中学习。