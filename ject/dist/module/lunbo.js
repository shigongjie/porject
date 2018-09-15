define(function(){
	function lunbo(){	
	}
	lunbo.prototype.init=function(){
		var box=$("#banner"),
		    ul=$("#banner ul"),
		    ali=$("#banner ul li");
		var ol=$("#banner ol");
		    console.log(ali);
		var len=ali.length;
		var index = 0;
		var btnIndex = 0;
		var flag = false;
		var liWidth = ali.eq(0).outerWidth();
		ul.append(ali.eq(0).clone(true)).css("width",(len+1)*liWidth);
		for(var i = 0; i < len; i++){
			$("<li class='"+ (i==0?"ac":"") +"'>"+"</li>").appendTo(ol);
		}
		$("#banner ol li").on("mouseenter",function(){
		if(!flag){
			flag = true;
			$(this).addClass("ac").siblings().removeClass("ac");
			ul.animate({"left":-$(this).index()*liWidth},1000,function(){
				flag = false;
			});
			index = $(this).index();
		}
		})
		var timer = null;
		function auto(){
		timer = setInterval(function(){
			if(!flag){
			flag = true;
			index++;
			if(index >= len){
				$("#banner ol li").eq(0).addClass("ac").siblings().removeClass("ac");
				ul.animate({"left":-len*liWidth},1000,function(){
					ul.css("left",0);
					index = 0;
					flag = false;
				})
			}else{
				$("#banner ol li").eq(index).addClass("ac").siblings().removeClass("ac");
				ul.animate({"left":-index*liWidth},1000,function(){
					flag = false;
				})
			}
		}
		},3000);
		}
		auto();
		$("#banner").hover(function(){
		clearInterval(timer);
		},function(){
		auto()
		});
	}
	return new lunbo();
})