var ippo_url = 'http://comics.bbqlab.net/controllers/';

var ippo = {
	init:function(){
	
	
	}
	
	login:function(){
	
	
	}
	
	signup:function(){
		var email = $("#signup_email").val();
		var password = $("#signup_password").val();
		var data = {"email" : email, "password" : password};
		
		$.post(ippo_url + 'account.php', data, function(response){
			console.log(response);
		});
	}
};