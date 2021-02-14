function enviar(){
    let nome = document.getElementById('nomeid')
    let email = document.getElementById('emailid')
    let tel = document.getElementById('telid')
    if (nome || email || tel == null){
        alert('Preenche os campos Vazio')
    }
    else (nome.value != "") 

        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    
