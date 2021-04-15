window.onload = initfunction;


/* Current Date */
function initfunction() {
    var today = new Date();
    var date = today.toLocaleString('en-US');
    document.getElementById("time").innerHTML = date;
}

/* List of customer data */
var customerArray = [];
var indexvalue = 0;

function customerlist() {

    var customerobject = {
        firstname,
        lastname,
        address,
        postalcode,
        province,
        country,
        contact,
        phone,
        email,
        clientinfo: [],
        clientassets: []
    };

    customerobject.firstname = document.getElementById("firstname").value;
    customerobject.lastname = document.getElementById("lastname").value;
    customerobject.address = document.getElementById("address").value;
    customerobject.postalcode = document.getElementById("postalcode").value;
    customerobject.province = document.getElementById("province").value;
    customerobject.country = document.getElementById("country").value;
    customerobject.contact = document.getElementById("contact").value;
    customerobject.phone = document.getElementById("phone").value;
    customerobject.email = document.getElementById("email").value;

    var clienttype = document.querySelector("input[name=clienttype]:checked").value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    var age = document.getElementById("age").value;
    var hometype = document.querySelector("input[name=hometype]:checked").value;
    var income = document.getElementById("gross").value;

    customerobject.clientinfo.push(clienttype, gender, age, hometype, income);

    if (document.querySelector("input[name=Vehicle]:checked")) {
        customerobject.clientassets.push("Vehicle");
    }
    if (document.querySelector("input[name=RRSP]:checked")) {
        customerobject.clientassets.push("RRSP");
    }
    if (document.querySelector("input[name=TFSA]:checked")) {
        customerobject.clientassets.push("TFSA");
    }
    if (document.querySelector("input[name=RRIF]:checked")) {
        customerobject.clientassets.push("RRIF");
    }

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
            province,
            country,
            contact,
            phone,
            email,
            clientinfo: [],
            clientassets: []
        };


        customerobject = customerArray[i];
        customerlist = "Name: " + customerobject.firstname + " " +
            customerobject.lastname + "<br>" + "&nbsp Address:  " +
            customerobject.address + ", Postal code: " +
            customerobject.province + ", " +
            customerobject.country + ", " +
            customerobject.postalcode + "<br>" + "&nbsp Phone:  " +
            customerobject.contact + " " +
            customerobject.phone + ",  Email: " +
            customerobject.email + ", Client:  " +
            customerobject.clientinfo[0] + ", Gender:  " +
            customerobject.clientinfo[1] + "<br>" + "&nbsp Age:  " +
            customerobject.clientinfo[2] + ", Home:  " +
            customerobject.clientinfo[3] + ", Income: " +
            customerobject.clientinfo[4] + ", Following: ";

        for (var k = 0; k < customerobject.clientassets.length; k++) {
            customerlist += customerobject.clientassets[k] + "&nbsp  ";
        }


        displayRadiobuttons += "<input type=radio name=listitem ";
        displayRadiobuttons += " value=" + i + " ";
        displayRadiobuttons += " onchange=modifyItem(this.value)>";
        displayRadiobuttons += customerlist + "<br><br>";

    }

    document.getElementById("list").innerHTML = displayRadiobuttons;

}

function modifyItem(i) {
    indexvalue = i; //need this
    var dataitem;
    var customerobject = {
        firstname,
        lastname,
        address,
        postalcode,
        province,
        country,
        contact,
        phone,
        email,
        clientinfo: [],
        clientassets: []
    };
    customerobject = customerArray[i];
    //change buttons
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = false;

    //load data into form
    document.getElementById("firstname").value = customerobject.firstname;
    document.getElementById("lastname").value = customerobject.lastname;
    document.getElementById("address").value = customerobject.address;
    document.getElementById("postalcode").value = customerobject.postalcode;
    document.getElementById("province").value = customerobject.province;
    document.getElementById("country").value = customerobject.country;
    document.getElementById("phone").value = customerobject.phone;
    document.getElementById("email").value = customerobject.email;

    //load data from info and asset
    document.querySelector("input[name=clienttype]:checked").value = customerobject.clientinfo.clienttype;
    document.querySelector("input[name=gender]:checked").value = customerobject.clientinfo.gender;
    document.getElementById("age").value = customerobject.clientinfo.age;
    document.querySelector("input[name=hometype]:checked").value = customerobject.clientinfo.hometype;
    document.getElementById("gross").value = customerobject.clientinfo.income;

    dataitem = customerobject.clientinfo[0];

    if (dataitem == "Yes") {
        document.register.clienttype[0].checked = true;
    } else {
        document.register.clienttype[1].checked = true;
    }

    dataitem = customerobject.clientinfo[1];
    if (dataitem == "Male") {
        document.register.gender[0].checked = true;
    } else {
        document.register.gender[1].checked = true;
    }
   
    dataitem = customerobject.clientinfo[3];
    if (dataitem == "Own") {
        document.register.hometype[0].checked = true;
    } else {
        document.register.hometype[1].checked = true;
    }
   
    //reset the checkboxes to unchecked
    document.register.Vehicle.checked = false;
    document.register.RRSP.checked = false;
    document.register.TFSA.checked = false;
    document.register.RRIF.checked = false;

    //use a for loop to load check boxes

    if (customerobject.clientassets.length > 0) {
        for (var i = 0; i < customerobject.clientassets.length; i++) {
            dataitem = customerobject.clientassets[i];
            if (dataitem == "Vehicle") {
                document.register.Vehicle.checked = true;
            }

            if (dataitem == "RRSP") {
                document.register.RRSP.checked = true;
            }

            if (dataitem == "TFSA") {
                document.register.TFSA.checked = true;
            }
            if (dataitem == "RRIF") {
                document.register.RRIF.checked = true;
            }
        }
    }
}

function setClientObject() {
    var customerobject = {
        firstname,
        lastname,
        address,
        postalcode,
        province,
        country,
        contact,
        phone,
        email,
        clientinfo: [],
        clientassets: []
    };
    //input variables into clientobject
    customerobject.firstname = document.getElementById("firstname").value;
    customerobject.lastname = document.getElementById("lastname").value;
    customerobject.address = document.getElementById("address").value;
    customerobject.postalcode = document.getElementById("postalcode").value;
    customerobject.province = document.getElementById("province").value;
    customerobject.country = document.getElementById("country").value;
    customerobject.contact = document.getElementById("contact").value;
    customerobject.phone = document.getElementById("phone").value;
    customerobject.email = document.getElementById("email").value;

    var clienttype = document.querySelector("input[name=clienttype]:checked").value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    var age = document.getElementById("age").value;
    var hometype = document.querySelector("input[name=hometype]:checked").value;
    var income = document.getElementById("gross").value;

    //push these into the info array inside client object
    customerobject.clientinfo.push(clienttype, gender, age, hometype, income);

    //push asset values

    if (document.querySelector("input[name=Vehicle]:checked")) {
        customerobject.clientassets.push("Vehicle");
    }
    if (document.querySelector("input[name=RRSP]:checked")) {
        customerobject.clientassets.push("RRSP");
    }
    if (document.querySelector("input[name=TFSA]:checked")) {
        customerobject.clientassets.push("TFSA");
    }
    if (document.querySelector("input[name=RRIF]:checked")) {
        customerobject.clientassets.push("RRIF");
    }

    customerArray[indexvalue] = customerobject;
    //reset submit button
    document.getElementById("submit").disabled = false;
    document.getElementById("edit").disabled = true;
    displayList(); //display object array
}