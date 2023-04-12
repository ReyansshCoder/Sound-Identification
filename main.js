function Answer(){
 navigator.mediaDevices.getUserMedia({audio:true});
    my_model= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N6rCVitXs/model.json',modelReady)
}

function modelReady(){
my_model.classify(gotResults);
}

function gotResults(error,results){
    if(error){console.log(error);}
    else{
console.log(results);
document.getElementById("sound_ka_naam").innerHTML="I can hear 👂"+results[0].label;
document.getElementById("accuracy").innerHTML="accuracy🎯: "+(results[0].confidence*100).toFixed(2)+" %";
i1=document.getElementById("an1");
i2=document.getElementById("an2");
i3=document.getElementById("an3");
i4=document.getElementById("an4");
if(results[0].label=="Clapping"){
i1.src="aliens-01.gif";
i2.src="aliens-02.png";
i3.src="aliens-03.png";
i4.src="aliens-04.png";
}
else if(results[0].label=="Snapping"){
i1.src="aliens-01.png";
i2.src="aliens-02.gif";
i3.src="aliens-03.png";
i4.src="aliens-04.png";
}
else if(results[0].label=="Tinkle"){
i1.src="aliens-01.png";
i2.src="aliens-02.png";
i3.src="aliens-03.gif";
i4.src="aliens-04.png";
}
else{
i1.src="aliens-01.png";
i2.src="aliens-02.png";
i3.src="aliens-03.png";
i4.src="aliens-04.gif";
}






    }
}