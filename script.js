var boxId = 1;

function start() {
    for (var i = 0; i < 10; i++) {

        var box1 = document.createElement("div");
        box1.className = "box";
        box1.id = "b" + boxId;
        boxId = boxId + 1;
        document.body.appendChild(box1);

        var x1 = Math.random();
        var x2 = x1 * 1000;
        var x3 = Math.floor(x2);


        var y1 = Math.random();
        var y2 = y1 * 1000;
        var y3 = Math.floor(y2);

        box1.style.marginTop = y3 + "px";
        box1.style.marginLeft = x3 + "px";
    }
}

function move() {
    setInterval(create, 200);
}

function create() {

    alert("Dan Sapada ? ")
    for (var x = 1; x < boxId; x++) {

        var p1 = Math.random();
        var p2 = p1 * 10;
        var p3 = Math.floor(p2);

        var box = document.getElementById("b" + x);
        var ml = box.style.marginLeft;
        var mli = parseInt(ml);
        var mll = mli - p3;
        box.style.marginLeft = mll + "px";
    }
}