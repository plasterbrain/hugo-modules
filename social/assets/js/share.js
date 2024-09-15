document.addEventListener('DOMContentLoaded', function () {
	const $buttons = Array.prototype.slice.call(
		document.querySelectorAll("button[data-kind='share']"), 0);

	if (navigator.canShare(data)) {
		$buttons.forEach(function ($button) {
			$button.classList.remove("hidden");
		});
	};
});
