prediction1 = ""
prediction2 = ""

Webcam.set({
    width:350,
    height:300,
    imageFormat: 'png',
    pngQuality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O3LAcaRLL/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function speak(){
  var synth = window.speechSynthesis;
  speakData1 = "A primeira previsão é " + prediction1;
  speakData2 = "E a segunda previsão é " + prediction2;
  var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
  synth.speak(utterThis);
}
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("resultGestoName").innerHTML = results[0].label;
      prediction1 = results[0].label;
      speak();
      // ISADORA
      if(results[0].label == "joia")
      {
          document.getElementById("updateGesto").innerHTML = "&#128077;";
      }
      if(results[0].label == "suave")
      {
          document.getElementById("updateGesto").innerHTML = "&#129305;";
      }
      if(results[0].label == "paz")
      {
          document.getElementById("updateGesto").innerHTML = "&#9994;";
      }
      if(results[1].label == "joia")
      {
          document.getElementById("updateGesto").innerHTML = "&#128077;";
      }
      if(results[1].label == "suave")
      {
          document.getElementById("updateGesto").innerHTML = "&#129305;";
      }
      if(results[1].label == "paz")
      {
          document.getElementById("updateGesto").innerHTML = "&#9994;";
      }
    }
  }