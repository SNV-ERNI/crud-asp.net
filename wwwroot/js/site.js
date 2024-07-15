// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).on('click', '.delete-button', function (event) {
    var button = $(this); // Button that triggered the modal
    var id = button.data('id'); // Extract info from data-* attributes
    var modal = $('#deleteModal');
    modal.find('#deleteId').val(id);
    modal.modal('show');
});

$(document).on('click', '.close-button', function (event) {
    var button = $(this); // Button that triggered the modal
    var modal = $('#deleteModal');
    modal.modal('hide');
});
