var SpeechR = window.webkitSpeechRecognition;
var reconhecimento = new SpeechR();

function iniciar() {
  document.getElementById("textbox").innerHTML = "";
  reconhecimento.start();
}

reconhecimento.onresult = function (evento) {
  console.log(evento);
  var conteudo = evento.results[0][0].transcript;
  console.log(conteudo);
  document.getElementById("textbox").innerHTML = conteudo;

  if (conteudo == "tire minha selfie") {
    // tirei o espaço que tinha depois da palavra selfie
    console.log("tirando selfie..."); // acrescentei o console.log para teste
    speak();
  }
};

function speak() {
  var api = window.speechSynthesis;
  // comentei a linha debaixo pq estava duplicada
  // Webcam.attach(camera);
  // var texto =document.getElementById('textbox').value
  var texto = "tirando sua selfie";
  var textocon = new SpeechSynthesisUtterance(texto);
  api.speak(textocon);
  Webcam.attach(camera);

  setTimeout(function () {
    //tirei o var da variavel abaixo;
    imgid = "selfie1";
    tirarselfie();
    // textocon = new SpeechSynthesisUtterance(texto);
  }, 3000);

  setTimeout(function () {
    //tirei o var da variavel abaixo;
    imgid = "selfie2";
    tirarselfie();
    // textocon = new SpeechSynthesisUtterance(texto);
  }, 6000);

  setTimeout(function () {
    //tirei o var da variavel abaixo;
    imgid = "selfie3";
    tirarselfie();
  }, 9000);
}

//mudei a posição desse código qeu estava mo final
Webcam.set({
  width: 500,
  height: 400,
  image_format: "jpeg",
  jpeg_quality: 90,
});
var camera = document.getElementById("camera"); //acrescentei o "var"

// reescrevi a função tirar selfie e mudei "snep" para "snap"
function tirarselfie() {
  Webcam.snap(function (data_uri) {
    // document.getElementById("resultado").innerHTML = `<img id="selfieImage" src="${data_uri}" />`;
    if (imgid == "selfie1") {
      document.getElementById("resultado1").innerHTML = `<img id="selfie1" src="${data_uri}" />`;
    }
    if (imgid == "selfie2") {
      document.getElementById("resultado2").innerHTML = `<img id="selfie2" src="${data_uri}" />`;
    }
    if (imgid == "selfie3") {
      document.getElementById("resultado3").innerHTML = `<img id="selfie3" src="${data_uri}" />`;
    }
  });
}