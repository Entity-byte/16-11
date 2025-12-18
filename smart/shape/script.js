var sizevalue = 173
function sizeminus(){
    if (sizevalue > 100){
        sizevalue -= 1
        var tranvalue = JSON.stringify(sizevalue) + " cm"
        document.getElementById("main-value").innerText = tranvalue
    }
}

function sizeplus(){
    if (sizevalue < 200){
        sizevalue += 1
        var tranvalue = JSON.stringify(sizevalue) + " cm"
        document.getElementById("main-value").innerText = tranvalue
    }
}

function heightpanelappear(){
    var el = document.getElementById('height-panel');
    el.style.display = 'flex';
    el.style.animationName = 'panel-move';
    el.style.animationFillMode = 'none';
    el.onanimationend = () => {
        el.style.display = 'flex';
    };
}

function heightpaneldisappear(){
    var el = document.getElementById('height-panel');
    el.style.animationName = 'panel-away';
    el.style.animationFillMode = 'forwards';
    sizevalue = 173
    document.getElementById("main-value").innerText = "173 cm"
    el.onanimationend = () => {
        el.style.display = 'none';
    };
}