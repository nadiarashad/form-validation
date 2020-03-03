/** @format */

const username = document.querySelector("#usernameInput");

console.log(username.value);

username.addEventListener("change", (event) => {
	if (username.match(/\d/ && /[!@£#$%"^&*]/)) {
		username.classList.add("valid");
		username.classList.remove("invalid");
	} else {
		username.classList.add("invalid");
		username.classList.remove("valid");

		// const invalidMsg = 
	}
});
