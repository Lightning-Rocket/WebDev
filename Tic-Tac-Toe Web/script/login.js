function validateForm() {
	var un = document.getElementById("username").value;
	var pw = document.getElementById("password").value;
	var show_invalid = document.getElementById('show_invalid');
	var usernames = ['ajithkumar1192000@gmail.com', 'haru', 'gaya', 'admin'];
	var passwords = ['superman', 'darls', 'panditkp', 'admin'];
	
	
	if (usernames.includes(un)) {
		uid = usernames.indexOf(un);
		var username = usernames[uid]; 
		var password = passwords[uid];
		
		if ((un == username) && (pw == password)) {
			// window.location = "main.html";
			alert("Login success!")
			window.location.href = "game.html?username="+username;
			return true;
		} else {
			if (un!=username && pw!=password)
				show_invalid.innerHTML = "* Login was unsuccessful, please check your username and password";
			else if (un!=username)
				show_invalid.innerHTML = "* invalid Username";
			else if (pw!=password)
				show_invalid.innerHTML = "* invalid Password";
			return false;
		}
	}
	else {
		show_invalid.innerHTML = "* No such user found";
		return false;
	}
}