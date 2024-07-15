// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//=======================================
//

// Delete Modal Function
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


// Input Validation for Create Page
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('createCarForm');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Clear previous error messages
        document.getElementById('brandError').style.display = 'none';
        document.getElementById('modelError').style.display = 'none';
        document.getElementById('versionError').style.display = 'none';
        document.getElementById('plateNumError').style.display = 'none';
        document.getElementById('carTypeError').style.display = 'none';

        // Validate Brand
        const brand = form.elements['Brand'].value;
        if (!brand) {
            document.getElementById('brandError').textContent = 'Brand is required.';
            document.getElementById('brandError').style.display = 'block';
            isValid = false;
        }

        // Validate Model
        const model = form.elements['Model'].value;
        if (!model) {
            document.getElementById('modelError').textContent = 'Model is required.';
            document.getElementById('modelError').style.display = 'block';
            isValid = false;
        }

        // Validate Year Version
        const version = form.elements['Version'].value;
        const currentYear = new Date().getFullYear();
        if (!version || !Number.isInteger(Number(version)) || version.length !== 4 || Number(version) < 1900 || Number(version) > currentYear) {
            document.getElementById('versionError').textContent = `Year must be a 4-digit number between 1900 and ${currentYear}.`;
            document.getElementById('versionError').style.display = 'block';
            isValid = false;
        }

        // Validate Plate Number
        const plateNum = form.elements['PlateNum'].value;
        if (!plateNum || plateNum.length > 8) {
            document.getElementById('plateNumError').textContent = 'Plate Number must be up to 8 characters.';
            document.getElementById('plateNumError').style.display = 'block';
            isValid = false;
        }

        // Validate Car Type
        const carType = form.elements['CarType'].value;
        if (!carType) {
            document.getElementById('carTypeError').textContent = 'Car Type is required.';
            document.getElementById('carTypeError').style.display = 'block';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});