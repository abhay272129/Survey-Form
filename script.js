function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || genderCheckboxes.length === 0 || !profession || !email || !mobile) {
        alert('Please fill in all the fields.');
        return;
    }

    let gender = [];
    genderCheckboxes.forEach(checkbox => gender.push(checkbox.value));

    const popupContent = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Country: ${country}</p>
        <p>Gender: ${gender.join(', ')}</p>
        <p>Profession: ${profession}</p>
        <p>Email: ${email}</p>
        <p>Mobile Number: ${mobile}</p>
    `;

    document.getElementById('popup-content').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';

    resetForm();
}

function resetForm() {
    document.getElementById('survey-form').reset();
    document.getElementById('popup').style.display = 'none';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
const form = document.getElementById("surveyForm");
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const gender = Array.from(genderElements)
        .filter(element => element.checked)
        .map(element => element.value)
        .join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDOB").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender;
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    form.reset();
}

function resetForm() {
    form.reset();
}