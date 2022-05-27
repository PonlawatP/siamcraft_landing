
$(document).ready(function(){
    $( ".server_ip" ).hover(function() {
        $("#ip_popup").text("คลิกเพื่อคัดลอก ip")
    });
    $( ".server_ip" ).click(function() {
        navigator.clipboard.writeText("siamcraft.net");

        $("#ip_popup").text("วางในช่องเซิฟเวอร์ได้เลย")
    });
});