(function($){ var JST = { templates: {} }; JST.templates.sample = function anonymous($,$item) {
var call,_=[],$data=$item.data;with($data){_.push("<h1>");if(typeof(title)!=="undefined" && (title)!=null){_.push($.encode((typeof(title)==="function"?(title).call($item):(title))));}_.push("</h1>\n<p>This is a sample template</p>\n");if((typeof(foo)!=="undefined" && (foo)!=null) && (typeof(foo)==="function"?(foo).call($item):(foo))){_.push("\n  ");if(typeof(foo)!=="undefined" && (foo)!=null){$.each((typeof(foo)==="function"?(foo).call($item):(foo)),function($index, $value){with(this){_.push("\n    <div>");if(typeof(value)!=="undefined" && (value)!=null){_.push($.encode((typeof(value)==="function"?(value).call($item):(value))));}_.push("</div>\n  ");}});}_.push("\n");}_.push("");}return _.join("");
}; JST.sample = function sample(d){ return $.tmpl( JST.templates.sample, d ); }; window.JST = JST; })(jQuery);