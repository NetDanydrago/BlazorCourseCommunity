function NavigateTo(text) {
    var element = document.getElementById(text);
    window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}