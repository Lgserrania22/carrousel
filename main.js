var vetor = ["background.jpg", "background2.jpg", "background3.jpg"];
var posicao = 0;

$("#left").click(function(){
	if(posicao == 0){
		posicao = 2;
	}else{
		posicao--;
	}
	trocaFundo();
})

function trocaFundo(){
	$("#container").css("background", "url(" + vetor[posicao] + ")");
	$("#container").css("background-size","cover");
}