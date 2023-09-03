
function submit(){
    var x = document.getElementById("weight").value;
    var y = document.getElementById("height").value;
    var p = document.getElementById("name").value;
    var q = document.getElementById("age").value;

    var z = Math.floor(x/Math.pow(y,2));

    if(z < 18.5){
        document.getElementById("second").innerHTML= "Hello " + p + " Your B-M-I Is (" + z + ") You Are In The Range Of Under Weight.";              ";
    }
    else if(z >= 18.5 && z < 25){
        document.getElementById("second").innerHTML= "Hello " + p + " Your B-M-I Is (" + z + ") You Are In The Range Of Healthy Weight.";
    }
    else if(z >= 25 && z < 30){
        document.getElementById("second").innerHTML= "Hello " + p + " Your B-M-I Is (" + z + ") You Are In The Range Of Over Weight.";
    }
    else if (z >= 30){
        document.getElementById("second").innerHTML= "Hello " + p + " Your B-M-I Is (" + z + ") You Are In The Range Of Obese Weight.";
    }
    else{
        document.getElementById("second").innerHTML="Please Fill Your Details.";
    }

}
