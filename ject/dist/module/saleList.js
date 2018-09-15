define(function(){
	function saleList(){}
	saleList.prototype.init=function(){
			$.get("http://localhost/php/list.php",function(data){
					var str="";
			        $.each(data.data,function(index,val){
			        	
			        	str+=`<dl class="Production" data-index=${val.id}>
			        			<a href="/html/detail.html?id=${val.id}"><dt><img src="${val.pictrue}"/></dt>
			        			<dd>${val.sale}</dd></a>
			        			<p>${val.price}</p><span>加入购物车</span>
			        			
			        		  </dl>`;
			        	       
			        })
			        $("#production").append(str);
				    //点击
					$(".Production").on("click","span",function(){
//						$("#count").css({"display":"block"});
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
			        
			},"json");
			

		}
	return new saleList();
})