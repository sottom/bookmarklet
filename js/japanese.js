var control_pressed,
	shift_pressed,
	hot_key_a;

document.addEventListener('keydown', function(event){
	if(event.which === 17)
		control_pressed = true;
	if(event.which === 16)
		shift_pressed = true;
	if(event.which === 65)
		hot_key_a = true;

	if(control_pressed && shift_pressed && hot_key_a) {
		var allElements = document.getElementsByTagName("p");
		console.log(allElements.length);
		console.log(allElements);
		for (var i = 0; i < allElements.length; i++) {
			allElements[i].textContent = "Mitchell Rocks!!!";
		}
	}
});

document.addEventListener('keyup', function(event){
	if(event.which === 17)
		control_pressed = false;
	if(event.which === 16)
		shift_pressed = false;
	if(event.which === 65)
		hot_key_a = false;
});