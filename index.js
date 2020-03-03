/** @format */

const username = document.querySelector("#usernameInput");

username.addEventListener("change", (event) => {
	if (username.value.match(/\d/ && /[!@£#$%"^&*]/)) {
		username.classList.add("valid");
		username.classList.remove("invalid");
		const usernameLable = document.querySelector("#username");
		if (usernameLable.children.length > 1) {
			for (let i = 1; i < usernameLable.children.length; i++) {
				usernameLable.children[i].innerText = "";
			}
		}
	} else {
		username.classList.add("invalid");
		username.classList.remove("valid");

		const invalidMsg = document.createElement("p");

		invalidMsg.innerText =
			"Invalid username, must contain at least 1 special character and 1 number";
		const usernameLable = document.querySelector("#username");
		console.log(usernameLable);
		usernameLable.appendChild(invalidMsg);
	}
});
