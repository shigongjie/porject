define(function(){
	function user(){}
	user.prototype.init=function(){
			var username=$("#username"),passward=$("#passward"),tel=$("#tel");
			var userReg=/^[a-z_][0-9a-z_$]*$/i;
        	var passwadReg=/\S{6,12}/;
        	var telReg=/\d{11}/;
		$("#rejist").on("click",function(){
	        if(!userReg.test($("#username").val())){
	        	alert("用户名不通过");
	        	return;
	        }
	        if(!telReg.test($("#tel").val())){
				alert("请输入正确手机号");
				return;
			}
	        if(!passwadReg.test($("#passward").val())){
	        	alert("请输入正确密码");
	        	return;
	        }
			if($("#passward").val()!==$("#passward2").val()	){
			    alert("两次输入密码必须一致");
			    return;
			}

			$.post("http://localhost/php/newuser.php",
			{"username":username.val(),"passward":passward.val(),"tel":tel.val()},
			function(data){
				console.log(1)
			})

		    window.location.href="/html/login.html";
		})
		var arr1=yzm();
		$("#yanZheng").html(arr1.join(""));
		$("#reuse").on("click",function(){
				arr1=yzm();
			    $("#yanZheng").html(arr1.join(""));
			})
			function randomNum(){
				var num=parseInt(Math.random()*10)+48;
				
				return String.fromCharCode(num);
			}
			
			function randomlow(){
				var num=parseInt(Math.random()*26)+97;
				return String.fromCharCode(num);
			}
			
			function randomup(){
				var num=parseInt(Math.random()*26)+65;
				return String.fromCharCode(num);
			}
			
			function suiji(){
				var num=parseInt(Math.random()*3);
				switch(num){
					case 0:return randomNum();
					case 1:return randomlow();
					case 2:return randomup();
				}
			}
			function yzm(){
				var arr=[];
                for(i=0;i<4;i++){
            	arr.push(suiji());
            }
                return arr;
			}
	}
	return new user();
})