function showLoader() {
    document.getElementById("page-loader").style.display = "flex";
}

// Hide the loader after a delay (adjust as needed)
setTimeout(function() {
    document.getElementById("page-loader").style.display = "none";
}, 3000);