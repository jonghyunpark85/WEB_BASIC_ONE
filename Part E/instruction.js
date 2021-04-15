window.onload = initfunction;

var helpfulhints = ["Please enter your first name",
    "Please enter your last name",
    "Enter your street address including City",
    "Enter your Postal Code(A0A 1B1)",
    "Select your province",
    "Select your country",
    "Select your contact type",
    "Enter your phone number ex)123-456-7890",
    "Enter your email address ex)example@site.net", ""
];

var displayhints;

function initfunction() {
    var today = new Date();
    var date = today.toLocaleString('en-US');
    document.getElementById("time").innerHTML = date;

    //link displayhints to 'helphints' in html page
    displayhints = document.getElementById("helphints");
    //call create listeners
    createListeners(document.getElementById("firstname"), 0);
    createListeners(document.getElementById("lastname"), 1);
    createListeners(document.getElementById("address"), 2);
    createListeners(document.getElementById("postalcode"), 3);
    createListeners(document.getElementById("province"), 4);
    createListeners(document.getElementById("country"), 5);
    createListeners(document.getElementById("p_b"), 6);
    createListeners(document.getElementById("phone"), 7);
    createListeners(document.getElementById("email"), 8);
}

function createListeners(inputobject, number) {
    inputobject.addEventListener("focus", function () {
        displayhints.innerHTML = helpfulhints[number];
    }, false); //displays hint]
    inputobject.addEventListener("blur", function () {
        displayhints.innerHTML = helpfulhints[9];
    }, false); //clears hint
}

function clientinfo() {
    alert("Select current client or not");
}

function genderinfo() {
    alert("Select your gender");
}

function ageinfo() {
    alert("Select or Enter your age between 18 and 75");
}

function homeinfo() {
    alert("Select your home status");
}

function grossinfo() {
    alert("Select or Enter your income");
}

function followinginfo() {
    alert("Choose if you are interested");
}