function pegar(){
    let texto = document.querySelector('.texto');
        let lista = document.querySelector('.lista');
        lista.innerHTML += texto.value + "<br>";
        texto.value = '';
}
window.addEventListener("keydown", function(adicionar){

        if(adicionar.keyCode =='13'){
        pegar();
    }
})
