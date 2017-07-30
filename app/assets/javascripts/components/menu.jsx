$(window.document).on('turbolinks:load', function() {

	// DOM elements
	let $dropdown = $("#dropdown");
	let $menu = $dropdown.find("#menu");
	let $button = $menu.find("#menubtn");

	// logic
	let toggle = false;

	function toggleMenu() {
		toggle = !toggle;
		toggleClass(toggle);
	}

	function toggleClass(tog) {
		$dropdown.removeClass().addClass((tog) ? 'dropdown showMenu2' : ' dropdown hideMenu2');
	}

	$button.on('click', toggleMenu);
});


