function compare (){
  var numberOne= document.getElementById('age').value;
  if(isNaN(numberOne)== false && numberOne != null){
    if(numberOne >= 120){
      alert("Vous êtes mort");
    }else if(numberOne >= 18){
      alert("Vous êtes majeur")
    }else{
      alert("Vous êtes mineur");
    }
  }else{
    alert("Ceci n'est pas un nombre")
  }
}
