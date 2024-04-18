

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
        xs.push(inlines[i][0]);
        ys.push(inlines[i][1]);
        ls.push("'"+inlines[i][2]+"'");
    }

    var lines = []
    lines.push("state = Calc.getState();")
    lines.push("pointsx = [" + xs.toString()+"];")
    lines.push("pointsy = [" + ys.toString()+"];")
    lines.push("labels = [" + ls.toString()+"];")
    lines.push("for (i = 0; i < pointsx.length; i++) {")
    lines.push("state.expressions.list.push({type:'expression',latex:'('+pointsx[i]+','+pointsy[i]+')',label:labels[i],showLabel:true});}")
    lines.push("Calc.setState(state);")

    var out = ""
    for (i = 0; i < lines.length; i++) {
        out+=lines[i]+"\n"
    }

    document.getElementById("output").textContent = out
}