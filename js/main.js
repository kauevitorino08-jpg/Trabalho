$(function(){
    $("#botao").click(inserirTarefa);
});
$(document).ready(function(){
    $('select').formSelect();
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
var campoObs = $(".campoObs").val();
var campoImportante = $(".campoImportante").val();

if (campoTitulo.trim() === "") {
    alert("Digite o título da tarefa!");
    return;
}
if (campoObs.trim() === "") {
    alert("Digite as observações da tarefa!");
    return;
}

    var linha = funLinha(campoTitulo, campoObs, campoImportante);
    linha.find(".botaoDeletar").click(deletaLinha);
    tabela.append(linha);
}


function funLinha(campoTitulo, campoObs, campoImportante) // função com parâmetro.
{
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
   var colunaImportante = $("<td>").text(campoImportante);
    var colunaDelete = $("<td>");
   
    
    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
    var icone = $("<i>").addClass("material-icons black-text").text("delete");
    bDeletar.append(icone)
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa);
    linha.append(colunaObs);
     linha.append(colunaImportante);
      linha.append(colunaDelete);
    return linha
}

function deletaLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
}