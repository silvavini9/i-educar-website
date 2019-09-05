var cores = [
      {nome:'blue', cor:'#2693ff',tipo:'primary'},
      {nome:'purple',cor:'#8100f7',tipo:'primary'},
      {nome:'clay',cor:'#999999',tipo:'primary'},
      {nome:'green',cor:'#3ee4cf',tipo:'secundary'}
];

cores.forEach(function(cor){

  var button = document.createElement('button');
  var a = document.createElement('a');
  var texto_button = document.createTextNode(cor.cor);


  button.setAttribute('class','circleDiv '+cor.nome+'');
  button.setAttribute('id',''+cor.nome+'');
  button.setAttribute('data-clipboard-text',cor.cor);

  button.onclick  = function(){


    var btn = document.getElementById(''+cor.nome+'');
    var clipboard = new ClipboardJS(btn);

    clipboard.on('success', function(e) {

      document.querySelector("#modal").style.display = "flex";
      document.querySelector('#modal').style.background = cor.cor;
      document.querySelector('#heximadecimal').innerHTML =  cor.cor;
      setInterval(function(){
        document.querySelector("#modal").style.display = "none";
      },3500);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
  }
  a.appendChild(texto_button)
  button.appendChild(a);

  if(cor.tipo == 'primary'){
    document.querySelector('.divColors').appendChild(button);
  }else{
    document.querySelector('#secundary').appendChild(button);
  }
});
