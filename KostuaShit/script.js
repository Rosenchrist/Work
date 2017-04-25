var contents;
var reader = new FileReader();

function testMyShit() {
    document.getElementById("zaloopa").innerHTML = "well shit it worked";
};

function submitShitFile() {
    var shitFile = $('#file-input').get(0).files[0];
    reader.onload = function(e) {
        document.getElementById("file-content").innerHTML = reader.result;
    };
    reader.readAsText(shitFile);
}

$(document).ready(function() {
    console.log("start zaloopa");
});