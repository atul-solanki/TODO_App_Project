// this in responsible for making  making cross line when the idem is  checked for deleting
function checkedOrNot(id) {
    let cb= document.querySelector(`input[uid="${id}"]`); // The checkbox that is clicked is selected.
    let cbNextSibling = cb.nextElementSibling;      // The next sibling of the checkbox is selected.
    let taskDesc=cbNextSibling.firstElementChild;  // (Task desc)The first element child of the next sibling of the checkbox is selected.
    let date= taskDesc.nextElementSibling.lastElementChild; //selected task date.
    taskDesc.classList.toggle('lt');
    date.classList.toggle('lt');
}


// this addEventListener  come into action when we clicked on delete button after we checked which list of items need to be deleted
document.getElementById('deleteButton').addEventListener('click', function () {
    let checedvaluew = document.querySelectorAll('.checkedOrNot:checked') // getting only checked vale
    let arrcheck = []  // creating the lsit of checked array
    for (let i of checedvaluew) {
        let gg = ''
        gg = i.getAttribute('uid')    // getting uniue id from and pushing into array
        console.log(gg)
        arrcheck.push(gg);
    }
    if (arrcheck.length === 0) { // checking if array is null the 
        console.log('no item is checked')
        alert("No item is checked!! please select item to remove!", "error"); // using show alert to show if there is no items in the array
        return;
    }
    //here we are making delete request with the help of Ajax request 
    $.ajax({
        type: 'post',
        url: '/delete_task/?id=' + arrcheck,
        success: function () { // on ajax sunnces i.e when data is delete

            console.log("success")
            location.reload()

        },
        error: function (err) {
            console.log(err);
        }

    });
})
