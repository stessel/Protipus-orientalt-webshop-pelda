//prototipus
function WebshopTermek(megnevezes,gyarto, nettoAr) {
    this.megnevezes = megnevezes;
    this.gyarto = gyarto;
    this.nettoAr = nettoAr;
}

WebshopTermek.prototype.BruttoAr = function() {
    return Math.round(this.nettoAr * 1.27);
}

//felvitel
document.getElementById("felvitel").addEventListener("click", function(){
    var megnevezes = document.getElementById("megnevezes").value;
    var gyarto = document.getElementById("gyarto").value;
    var nettoAr = document.getElementById("nettoAr").value;

    var wt = new WebshopTermek(megnevezes, gyarto, nettoAr);

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    
    td1.appendChild(document.createTextNode(wt.megnevezes));
    td2.appendChild(document.createTextNode(wt.gyarto));
    td3.appendChild(document.createTextNode(wt.nettoAr));
    td4.appendChild(document.createTextNode(wt.BruttoAr()));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("termekek").appendChild(tr);

    
})