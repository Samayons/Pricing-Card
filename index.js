
let confirm = document.getElementById("checked");
let setConfirm = document.getElementsByTagName("h1");

function displayPricing() {
    if (confirm.checked == true) {
        setConfirm[0].innerText = "$199.99";
        setConfirm[1].innerText = "$249.99";
        setConfirm[2].innerText = "$399.99";
    } else {
        setConfirm[0].innerText = "$19.99";
        setConfirm[1].innerText = "$24.99";
        setConfirm[2].innerText = "$39.99";
    }
}