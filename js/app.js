function validateform() {
    const name = document.getElementById("name").value;
    const er_name = document.getElementById("error-name");

    const email = document.getElementById("email").value;
    const er_email = document.getElementById("error-email");

    const msg = document.getElementById("msg").value;
    const er_msg = document.getElementById("error-msg");


    if (msg.length < 6) {
        er_msg.innerHTML ='<p>it nhat 6 ki tu </p>';
        return false;
    } else {
        er_msg.innerHTML ='<p></p>';
    };

    if (name.length < 3) {
        er_name.innerHTML ='<p> vui long nhap ten </p>';
        return false;
    } else {
        er_name.innerHTML ='<p></p>';
    };

    if (email.length < 1) {
        er_email.innerHTML ='<p> vui long nhap email </p>';
        return false;
    } else {
        er_email.innerHTML ='<p></p>';
    };

    return true;
}

//scroll top
function scroll_top() {
    window.scrollTo(0,0);
}

/// sau khi cuộn thì button hiện ra
window.onscroll = function(){back_to_top()};
function back_to_top() {
   
    const current_window = document.documentElement.scrollTop;
    const active = document.getElementById("back-to-top");
    
    if (current_window > 540) {

        active.className = "active";
    } else {
        active.className = "";
        
    }

}