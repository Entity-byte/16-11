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

function ftinsizeswitch(){
    var el = document.getElementById('ftinsize');
    var eltwo = document.getElementById('cmsize');
    var elthree = document.getElementById('editingpanel');
    var elfour = document.getElementById('editingpanelftin');
    el.style.backgroundColor = '#E3DEDB';
    eltwo.style.backgroundColor = 'white';
    elthree.style.display = 'flex';
    elfour.style.display = 'none';
}

function cmsizeswitch(){
    var el = document.getElementById('ftinsize');
    var eltwo = document.getElementById('cmsize');
    var elthree = document.getElementById('editingpanel');
    var elfour = document.getElementById('editingpanelftin');
    el.style.backgroundColor = 'white';
    eltwo.style.backgroundColor = '#E3DEDB';
    elthree.style.display = 'none';
    elfour.style.display = 'flex';
}