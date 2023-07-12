
Webcam.attach(camera);
    Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
       document.getElementById("result").innerHTML = '<img id= "result" src="'+data_uri+'"/> '
    });
}

console.log('ml5version', ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ELMYWT9v8/', model.json)