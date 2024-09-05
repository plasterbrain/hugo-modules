/**
 * @file 				Patreon.js
 * @description Integrates Auth0 SDK to enable Patreon login on certain pages.
 * @version			1.0.0
 * @link				https://auth0.com/docs/quickstart/spa/vanillajs/interactive
 * @author			plasterbrain <pb@🍅.fm>
 * @license			MIT
 */

// Things to show for signed-out users.
const $guestEls = Array.prototype.slice.call(
	document.getElementsByClassName("is-guest-only"), 0);

// Things to show for signed-in users.
const $memberEls = Array.prototype.slice.call(
	document.getElementsByClassName("is-member-only"), 0);

let callbackURL = "CALLBACK_URL"; // To be replaced by Hugo

const hidden = "hidden"; // Hidden item class

let auth0Client = null;
const fetchAuthConfig = () => fetch("/auth_config.json");
const configureClient = async () => {
	const response = await fetchAuthConfig();
	const config = await response.json();
	auth0Client = await auth0.createAuth0Client({
		domain: config.domain,
		clientId: config.clientId,
		authorizationParams: {
			audience: config.audience
		}
	});
};

window.onload = async () => {
	await configureClient();
	updateUI();
	const isAuthenticated = await auth0Client.isAuthenticated();
	if (isAuthenticated) {
		const user = await auth0Client.getUser();
		if (user !== undefined) {
			document.getElementById("patreon--avatar").src = user.picture;
			let memberSectionActive;
			if (user.patreon.status !== undefined) {
				memberSectionActive = user.patreon.status;
			} else {
				memberSectionActive = "undefined_patron";
			}
			let memberSections = ["active_patron, declined_patron, former_patron, undefined_patron"];
			const idPrefix = "patreon-";
			memberSections.forEach(id => {
				let $el = document.getElementById(idPrefix + id);
				if ($el !== null) {
					$el.classList.toggle(hidden, id === memberSectionActive);
				}
			});
			let profile = {
				"patreon--username": user.name,
				"patreon--date-start": new Date(user.patreon.dateStart).toLocaleString(),
				"patreon--date-renew": new Date(user.patreon.dateRenew).toLocaleString(),
			}
			for (const [id, metadata] of Object.entries(profile)) {
				if (metadata !== undefined) {
					let $el = document.getElementById(id);
					if ($el !== null) {
						$el.innerHTML = metadata;
					}
				}
			}
			if (user.patreon.tiers !== undefined && Array.isArray(user.patreon.tiers)) {
				let tier = user.patreon.tiers[0];
				let tierSections = [`${idPrefix}tier-${tier}--title`, `${idPrefix}tier-${tier}`];
				tierSections.forEach(id => {
					let $el = document.getElementById(id);
					if ($el !== null) {
						$el.classList.remove(hidden);
					}
				})
			}
		}
	}

	loadContent();

	// Remove params from the URL
	const query = window.location.search;
	if (query.includes("code=") && query.includes("state=")) {
		await auth0Client.handleRedirectCallback();
		updateUI();
		window.history.replaceState({}, document.title, window.location.pathname);
	}
}
document.addEventListener("turbo:load", () => loadContent(), false );

const loadContent = async () => {
	var post = document.getElementById("content-gated");
	if (post !== undefined && post !== null) {
		try {
			const token = await auth0Client.getTokenSilently();
			const result = await fetch("http://localhost:3000/api/external", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const data = await result.json();
			//console.log(JSON.stringify(data, {}, 2));
			post.innerHTML = data.msg;
			return;
		} catch (e) {
			console.log(e);
		}
	}
}

/**
 * @function 			updateUI()
 * @description		Toggles visibility of elements based on authentication status.
 */
const updateUI = async () => {
	const isAuthenticated = await auth0Client.isAuthenticated();
	if (isAuthenticated) {
		$memberEls.forEach(function ($el) {
			$el.classList.remove(hidden);
		});

		$guestEls.forEach(function ($el) {
			$el.classList.add(hidden);
		});
	} else {
		$memberEls.forEach(function ($el) {
			$el.classList.add(hidden);
		});
		$guestEls.forEach(function ($el) {
			$el.classList.remove(hidden);
		});
	}
	document.getElementById("loader").classList.add(hidden);
};

/**
 * @function 			login()
 * @description		Signs the user in.
 */
const login = async () => {
	await auth0Client.loginWithRedirect({
		authorizationParams: {
			redirect_uri: callbackURL
		}
	});
};

/**
 * @function 			login()
 * @description		Signs the user out.
 */
const logout = () => {
	auth0Client.logout({
		logoutParams: {
			returnTo: callbackURL
		}
	});
};
