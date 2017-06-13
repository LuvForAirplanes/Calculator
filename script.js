var num = [];
var op = [];
var end = 0;
var accumulator = "";
function write(text) {
    document.getElementById("nums").value += text;
}
function addNum(e) {
    var target = e.target.id;
    write(target);
    accumulator += target;
}
function numeric(e) {
    var target = e.target.id;
    write(" " + target + " ");
    op.push(target);
    num.push(parseInt(accumulator))
    accumulator = "";
}

function eqail(e) {
    num.push(parseInt(accumulator))
    accumulator = "";
    write(" = ");
    end = num[0];
    var loopCounter = 0;
    for (loopCounter = 0; loopCounter < op.length; loopCounter++) {
        switch (op[loopCounter]) {
            case "+":
                end = end + num[loopCounter + 1];
                break;
            case "-":
                end = end - num[loopCounter + 1];
                break;
            case "*":
                end = end * num[loopCounter + 1];
                break;
            case "/":
                end = end / num[loopCounter + 1];
                break;
        }
    }
    write(end + ";\n");
    op = [];
    num = []
    end = 0;
}
function info() {
    alert("Warning: Calc does not solve math equations by Order-of-Operation!!!")
}
