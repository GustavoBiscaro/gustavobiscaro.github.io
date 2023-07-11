// $(seletor).ação();
$(function() {
    $('#azul').click(function(){
        $('p')
        .css("background-color","blue")
        .fadeOut()
        .delay(1000)
        .fadeIn()
    });
});
$(function() {
    $('#vermelho').click(function(){
        $('p').css("background-color","red");
        $('#mensagem')
        .text("Cor alterada com sucesso")
        .css({color:'white', border:'2px solid #000', padding:'5px',fontSize:'1.5em'})
        .delay(3000)
        .addClass('green')
        
    $('button').removeClass('red')
    });
});
