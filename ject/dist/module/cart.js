define(function(){
	function cart(){}
	cart.prototype.init=function(){
		$.get("http://localhost/php/cartdetail.php",function(data){
			var str="";
			var btr="";
			var allcount=0,moneys=0;
			$.each(data.data, function(index,val) {
				
				
				val.price=val.price.split("￥")[1];
				allcount+=val.count;
				moneys+=val.price*val.count;
				var allmoney=val.price*val.count;
				str+=`<div class="thing">
			 			<div class="thingImg">${val.pic}</div>
			 			<p>${val.name}</p>
			 			<span>￥${val.price}</span>
			 			<span class="counts">${val.count}</span>
			 			<span class="allmoney">￥${allmoney}</span>
		 			  </div>`;
				btr=`<span>￥${moneys}</span>`;
			})
			$("#carts").append(str);
			$("#paymoney").append(btr);
			$("#heji").append(btr);
			
		},"json")
		$("#buy").on("click",function(){
			var saleIndex=$(this).parent().attr("data-index");
						var name=this.parentNode.children[0].children[1].innerHTML;
						var price=this.parentNode.children[1].innerHTML;
						var pic=this.parentNode.children[0].children[0].innerHTML;
						$.post("http://localhost/php/cart.php",{"name":name,"price":price,"saleIndex":saleIndex,"pic":pic},function(data){
							
						})
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
		})
	}
	return new cart();
})