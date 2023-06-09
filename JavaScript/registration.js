(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()

$(document).ready(function() {
  $('#registerModal').modal(
    {backdrop: 'static',
      keyboard: false})

  $('#registerModal').modal('show');
  $(".modal-title").css('text-align', 'center');

    //click and gone for now, next time it will go to the persyaratan page.
  $('#klik-gone').click(function () { $('#registerModal').modal('hide') });
});


$(function()
{
  $('.minat-tg').selectpicker();
})