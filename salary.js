$(document).ready(readyNow)

function readyNow(){
$('#submitEmployee').on('click', addClickHandler)
}

function addClickHandler () {
console.log('working?')
// $('#studentList').append(` <li> ${name}</li>`);

 let firstInput = $("#firstNameInput").val();
let lastInput = $("#lastNameInput").val();
let idInput = $("#idInput").val();
let titleInput = $("#titleInput").val();
let annualInput = $("#annualInput").val();


$('#tableBody').append(`<tr>
<td> ${firstInput}</td>
<td>${lastInput} </td>
<td> ${idInput}</td>
<td> ${titleInput}</td>
<td> ${annualInput}</td>
</tr>`);



}




