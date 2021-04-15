window.onload = initfunction;


/* Current Date */
function initfunction() {
    var toDay = new Date();
    document.getElementById("time").innerHTML = toDay;
}

/* List of customer data */
var customerArray = [];

function customerlist() {

    var customerobject = {
        firstname,
        lastname,
        address,
        postalcode,
        phone,
        email
    };

    customerobject.firstname = document.getElementById("firstname").value;
    customerobject.lastname = document.getElementById("lastname").value;
    customerobject.address = document.getElementById("address").value;
    customerobject.postalcode = document.getElementById("postalcode").value;
    customerobject.phone = document.getElementById("phone").value;
    customerobject.email = document.getElementById("email").value;

    customerArray.push(customerobject);

    displayList();
}

function displayList() {

    var customerlist = "";
    var displayRadiobuttons = "";

    for (var i = 0; i < customerArray.length; i++) {
        var customerobject = {
            firstname,
            lastname,
            address,
            postalcode,
            phone,
            email
        };

        customerobject = customerArray[i];
        customerlist = customerobject.firstname + " " +
            customerobject.lastname + " , " +
            customerobject.address + " , " +
            customerobject.postalcode + " , " +
            customerobject.phone + " , " +
            customerobject.email;

        displayRadiobuttons += "<input type=radio name=listitem ";
        displayRadiobuttons += " value=" + i + " ";
        displayRadiobuttons += " onchange=deleteItem(this.value)>";
        displayRadiobuttons += customerlist + "<br>";

    }

    document.getElementById("list").innerHTML = displayRadiobuttons;
  
}

/* Deleyte Customer data */
function deleteItem(i) {

    customerArray.splice(i, 1);
    displayList();
}