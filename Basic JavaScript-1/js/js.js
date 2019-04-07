function bold() {
    document.getElementById("ra").style.fontWeight = "bold";
}
function italic() {
    document.getElementById("ra").style.fontStyle = "italic"
}
function underlined() {
    document.getElementById("ra").style.textDecoration = "underline"
}
function myfunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].value;
    document.getElementById("ra").style.fontSize= listValue;
}
function myfunction2(e) {

    document.getElementById("ra").style.fontFamily= e.value;
}
