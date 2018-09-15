define(function(){
	function detail(){}
	detail.prototype.init=function(){
		var id=window.location.search.split("=")[1];
		$.get("http://localhost/php/detail.php",{id:id},function(data){
			
			$.each(data.data,function(index,val){
				var str="",btr="",ctr="",dtr="",etr="",ftr="";
				console.log(val.picOne)
				str+=`<dl id="detailImg">
						<dt><img src="${val.detailImg}"/></dt>
			        	<dd>${val.sale}</dd>
			           </dl>`;
				btr+=`<p>${val.price}</p><span></span>`;
				ctr+=`<p>${val.discrib}</p>`;
				dtr+=`<img src="${val.picOne}"/>`;
				etr+=`<img src="${val.picTwo}"/>`;
				ftr+=`<img src="${val.picThree}"/>`;
				$("#pic").append(str);
				$("#price").append(btr);
				$("#crib").append(ctr);
				$("#allPic").append(dtr);
				$("#allPic").append(etr);
				$("#allPic").append(ftr);
			})
		},"json")
	}
	return new detail();
})