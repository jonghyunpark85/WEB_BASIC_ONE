var listArray = [];

function addURLlist() {

    var urlobject = {
        url
    };
    urlobject.url = document.getElementById("url").value;
    listArray.push(urlobject);
    displayList();

}

function displayList() {
    var urllist = "";
    var anchor = "";

    for (var i = 0; i < listArray.length; i++) {
        var urlobject = {
            url
        };
        urlobject = listArray[i];
        urllist = urlobject.url;

        anchor += "<a href='https://" + urllist + "' target='_blank' >";
        anchor += urllist + "</a>" + "<br>";

    }

    document.getElementById("list").innerHTML = anchor;
}