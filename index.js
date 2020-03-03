/** @format */

const username = document.querySelector("#usernameInput");

username.addEventListener("change", (event) => {
	if (username.value.match(/\d/ && /[!@£#$%"^&*]/)) {
		username.classList.add("valid");
		username.classList.remove("invalid");
		const usernameLable = document.querySelector("#username");
		if (usernameLable.children.length > 1) { //use the if statement for firstname instead
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

		usernameLable.appendChild(invalidMsg);
	}
});

const firstName = document.querySelector("#firstNameInput")
const invalidMsg = document.createElement("p")

firstName.addEventListener("keyup", (event) => {
	if (firstName.value.match(/^[A-Za-z\s'-]+$/g)) {
		firstName.classList.add("valid");
		firstName.classList.remove("invalid");

		if (invalidMsg.hidden === false) { //found with console.dir(invalidMsg)
			invalidMsg.hidden = true
		}

	} else {
		firstName.classList.add("invalid");
		firstName.classList.remove("valid");

		invalidMsg.innerText =
			"Invalid firstname can only contain letters, spaces, hyphens and apostrophes";

		const firstnameLabel = document.querySelector("#firstname");

		if (firstnameLabel.children.length === 1) {
			firstnameLabel.appendChild(invalidMsg);
		}

		if (invalidMsg.hidden === true) {
			invalidMsg.hidden = false
		}
	}
})


const surname = document.querySelector("#surnameInput")

console.log(surname)
const invalidMsg2 = document.createElement("p")


surname.addEventListener("keyup", (event) => {
	if (surname.value.match(/^[A-Za-z\s'-]+$/g)) {
		surname.classList.add("valid");
		surname.classList.remove("invalid");

		if (invalidMsg2.hidden === false) { //found with console.dir(invalidMsg)
			invalidMsg2.hidden = true
		}

	} else {
		surname.classList.add("invalid");
		surname.classList.remove("valid");

		invalidMsg2.innerText =
			"Invalid surname can only contain letters, spaces, hyphens and apostrophes";

		const surnameLabel = document.querySelector("#surname");

		if (surnameLabel.children.length === 1) {
			surnameLabel.appendChild(invalidMsg2);
		}

		if (invalidMsg2.hidden === true) {
			invalidMsg2.hidden = false
		}
	}
})

