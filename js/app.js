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