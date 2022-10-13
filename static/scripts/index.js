function changeColor() {
    var el = document.getElementById('urmom')
    console.log(el.style.color)
    if (el.style.color == 'red') {
        el.style.color = 'green'
    } else {
        el.style.color = 'red'
    }
}