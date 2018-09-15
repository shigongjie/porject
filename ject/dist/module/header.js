define(function(){
	function header(){}
	header.prototype.init = function(){
		$("#header").load("/html/header.html");
        $("#footer").load("/html/footer.html");
	
		$.post("http://localhost/php/getcart.php",function(data){
			
			var obj=JSON.parse(data);
			var num=0;
			$.each(obj,function(index,val){
				num+=Number(val.count);
			})
			if(data==0){
				$("#count").css({"display":"none"});
			}else{
				$("#count").css({"display":"block"}).html(num);
			}
		})
		
        
	}

	return new header();
})