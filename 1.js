var password="Rishi@123";
var lc=/[a-z]/.test(password);
var uc=/[A-Z]/.test(password);
var digit=/[0-9]/.test(password);
var sc=/[\W_]/.test(password);

if(lc && uc && digit && sc && password.length>6)
    console.log("Valid Password");
else
    console.log("Invalid Password");