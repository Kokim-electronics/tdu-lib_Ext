var element = document.querySelectorAll("input[name=userid]");
if (element[0] != undefined) {
    element[0].id = "userid";
    chrome.storage.local.get(
        ['uido_id'],
        function (value_id) {
            var myID = value_id.uido_id;
            document.getElementById("userid").value = myID;
        }
    );
}

element = document.querySelectorAll("input[type=password]");
if (element[0] != undefined) {
    element[0].id = "pass";
    chrome.storage.local.get(
        ['uido_pass'],
        function (value_pass) {
            console.log(value_pass.uido_pass);
            var mypass = value_pass.uido_pass
            document.getElementById("pass").value = String(mypass);
            document.querySelectorAll("input[type=image]")[0].click();
        }
    );
}

element = document.getElementsByClassName("show_center");
console.log(element[0]);
if (element[0] != undefined) {
    element[0].click();
}