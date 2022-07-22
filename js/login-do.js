var aaa = document.querySelectorAll("input[name=userid]");
if (aaa[0] != undefined) {
    aaa[0].id = "userid";
    chrome.storage.local.get(
        ['uido_id'],
        function (value_id) {
            var myID = value_id.uido_id;
            document.getElementById("userid").value = myID;
        }
    );
}

aaa = document.querySelectorAll("input[type=password]");
if (aaa[0] != undefined) {
    aaa[0].id = "pass";
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

aaa = document.getElementsByClassName("show_center");
console.log(aaa[0]);
if (aaa[0] != undefined) {
    aaa[0].click();
}