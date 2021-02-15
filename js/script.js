
function enviar(){

    let nome = document.getElementById('nomeid').value;
    let email = document.getElementById('emailid').value;
    let tel = document.getElementById('telid').value;
    let res = document.getElementById('res').value;

    if(document.getElementById("nomeid").value == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
        } if(document.getElementById("emailid").value == ""){
            alert('Por favor, preencha o campo Email');
            document.getElementById("emailid").focus();
            return false
            }  if(document.getElementById("telid").value == ""){
                alert('Por favor, preencha o campo Telefone');
                document.getElementById("telid").focus();
                return false
                }     else {
                    alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
                }     
    
} 

    
