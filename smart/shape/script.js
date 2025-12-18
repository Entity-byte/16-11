var sizevalue = 173;
var sizevaluesave = 173;
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
    sizevalue = sizevaluesave;
    ftinftva = ftinftvasave;
    ftininva = ftininvasave;
    document.getElementById('ftinft').innerText = JSON.stringify(ftinftva);
    document.getElementById('ftinin').innerText = JSON.stringify(ftininva);
    document.getElementById("main-value").innerText = JSON.stringify(sizevaluesave) + " cm";
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
    sizevalueswitch = 0;
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
    sizevalueswitch = 1;
}

var ftinftva = 5;
var ftininva = 7;
function ftinftminus(){
    if (ftinftva > 1){
        ftinftva --
        document.getElementById('ftinft').innerText = JSON.stringify(ftinftva);
    }
}

function ftinftplus(){
    if (ftinftva < 10){
        ftinftva ++
        document.getElementById('ftinft').innerText = JSON.stringify(ftinftva);
    }
}

function ftininminus(){
    if (ftininva > 0){
        ftininva --
        document.getElementById('ftinin').innerText = JSON.stringify(ftininva);
    }
}

function ftininplus(){
    if (ftininva < 10){
        ftininva ++
        document.getElementById('ftinin').innerText = JSON.stringify(ftininva);
    }
}

var ftinftvasave = 5;
var ftininvasave = 7;
var sizevalueswitch = 0;
function saveheight(){
    var el = document.getElementById('height-panel');
    el.style.animationName = 'panel-away';
    el.style.animationFillMode = 'forwards';
    sizevaluesave = sizevalue;
    ftinftvasave = ftinftva;
    ftininvasave = ftininva;
    document.getElementById('ftinft').innerText = JSON.stringify(ftinftva);
    document.getElementById('ftinin').innerText = JSON.stringify(ftininva);
    document.getElementById("main-value").innerText = JSON.stringify(sizevaluesave) + " cm";
    if (sizevalueswitch === 0){
        document.getElementById('height-saved').innerText = JSON.stringify(sizevaluesave) + " cm";
    }else{
        document.getElementById('height-saved').innerText = JSON.stringify(ftinftvasave) + " ft " + JSON.stringify(ftininvasave) + " in";
    }
    el.onanimationend = () => {
        el.style.display = 'none';
    };

}
