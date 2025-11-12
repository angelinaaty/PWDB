function validateMandiriForm(ev){
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var emailRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/i;
    var sMsg = "";
    
    if(name === "") sMsg += "\n* Anda belum mengisikan nama";
    if(email === "") sMsg += "\n* Anda belum mengisikan email";
    else if (!emailRegex.test(email))
        sMsg += "\n* Format email tidak valid (contoh: user@example.com)"; 
    if(message === "") sMsg += "\n* Anda belum mengisikan pesan";
    
    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        ev.preventDefault();
        return false;
    }else{
        alert("Form valid dan siap dikirim (simulasi).");
        ev.preventDefault();
        return true;
    }
}

window.onload = function(){
    var form = document.getElementById("contactFormMandiri");
    form.addEventListener("submit", validateMandiriForm);
};