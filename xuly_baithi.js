
function limitCheckboxSelection(checkbox) {
    var checkboxes = document.querySelectorAll('.a');
    checkboxes.forEach(function(cb) {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}