function insertValue(){
    var name = document.getElementById
    ("name").value;

    var userName = document.getElementById
    ("userName").value;

    var email = document.getElementById
    ("email").value;

    var phone = document.getElementById
    ("phone").value;

    var password = document.getElementById
    ("password").value;

    var confirmPassword = document.getElementById
    ("confirmPassword").value;


    alert( "Your Full Name = " +  name  + " \nYour User Name = " + userName+ " \nYour Email = " + email +  " \nYour Moblie Number = "+ phone+  "\nYour New Password = " + password+ "\nYour Confirm Password = " + confirmPassword );

    // document.write("Your Name = " + name+ "<br>");
    // document.write("Your UserName = " + userName+ "<br>");
    // document.write("Your Email = " + email+ "<br>");
    // document.write("Your Moblie Number = "+ phone+ "<br>");
    // document.write("Your New Password = " + password+ "<br>");
    // document.write("Your Confirm Password " + confirmPassword+ "<br>");
}