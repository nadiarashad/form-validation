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


const dob = document.querySelector("#dobInput")
console.log(dob)

const invalidMsg3 = document.createElement("p")

dob.addEventListener("change", (event) => {

	console.log(dob.value)
	const year = Number(dob.value.split("-")[0])
	const d = new Date()
	const n = d.getFullYear()
	console.log(year)
	if ((n - year) >= 18) {
		dob.classList.add("valid");
		dob.classList.remove("invalid");

		if (invalidMsg3.hidden === false) { //found with console.dir(invalidMsg)
			invalidMsg3.hidden = true
		}

	} else {
		dob.classList.add("invalid");
		dob.classList.remove("valid");

		invalidMsg3.innerText =
			"You must be 18 years or older to proceed";


		const dobLabel = document.querySelector("#dob");

		if (dobLabel.children.length === 1) {
			dobLabel.appendChild(invalidMsg3);
		}

		if (invalidMsg3.hidden === true) {
			invalidMsg3.hidden = false
		}
	}
})


const submitbutton = document.querySelector("#button")


submitbutton.addEventListener('submit', (event) => {

	if (firstName.classList !== "valid" || username.classList !== "valid" || surname.classList !== "valid" || dob.classList !== "valid") {


		event.preventDefault()


	}


})