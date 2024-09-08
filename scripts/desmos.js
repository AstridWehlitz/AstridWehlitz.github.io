

function generateDesmosInjection() {
    var elt = document.getElementById("pastein")
    var text = elt.value

    var inlines = text.split("\n")
    for (i = 0; i < inlines.length; i++) {
        inlines[i] = inlines[i].split("	")
    }

    var xs = []
    var ys = []
    var ls = []

    for (i = 0; i < inlines.length; i++) {
        xs.push(inlines[i][1]);
        ys.push(inlines[i][2]);
        ls.push("'"+inlines[i][3]+" ("+inlines[i][0].slice(0,6)+")'");

    }

    var lines = []

    for (i = 0; i < xs.length; i++) {
        lines.push("["+xs[i].toString()+", " + ys[i].toString()+", " + ls[i].toString()+"],")
    }

    var out = ""
    for (i = 0; i < lines.length; i++) {
        out+=lines[i]+"\n"
    }

    document.getElementById("output").textContent = out
}