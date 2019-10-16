function addtoki(){
    var table = document.getElementById("toki");
    var row = table.insertRow(1);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    var cel4 = row.insertCell(3);
    var cel5 = row.insertCell(4);
    var cel6 = row.insertCell(5);
    var cel7 = row.insertCell(6);
    var cel8 = row.insertCell(7);
    var cel9 = row.insertCell(8);
    var cel10 = row.insertCell(9);
    var cel11 = row.insertCell(10);
    var cel12 = row.insertCell(11);
    var cel13 = row.insertCell(12);
    cel1.innerHTML = '<input class="name" type="name" id="name">';
    cel2.innerHTML = '<input class="weight" type="weight" id="weight">';
    cel3.innerHTML = '<input class="height" type="height" id="height">';
    cel4.innerHTML = '<input class="fire" type="fire" id="fire">';
    cel5.innerHTML = '<input class="water" type="water" id="water">';
    cel6.innerHTML = '<input class="forest" type="forest" id="forest">';
    cel7.innerHTML = '<input class="fly" type="fly" id="fly">';
    cel8.innerHTML = '<input class="fight" type="fight" id="fight">';
    cel9.innerHTML = '<input class="electric" type="electric" id="electric">';
    cel10.innerHTML = '<input class="ice" type="ice" id="ice">';
    cel11.innerHTML = '<input class="speed" type="speed" id="speed">';
    cel12.innerHTML = '<input class="attack" type="attack" id="attack">';
    cel13.innerHTML = '<input class="defense" type="denfense" id="defense">';
}

function deletetoki(){
    document.getElementById("toki").deleteRow(1);
}

function official(){
    window.location.href = "official.ejs";
}