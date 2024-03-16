const $embeds = document.querySelectorAll(".embed");
$embeds.forEach($el => {
	const $button = $el.querySelector("button");
	if ($button) {
		$button.addEventListener("click", () => {
			const $video = $el.querySelector("iframe");
			const src = $video.getAttribute("data-src");
			$video.setAttribute("src", src);
			$video.classList.remove("hidden");
			$button.remove();
		});
	}
});
