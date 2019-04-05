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
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("ra").style.fontSize= listValue;
}
function myfunction2(selectTag) {
    var listValuee = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("ra").style.fontFamily= listValuee;
}
