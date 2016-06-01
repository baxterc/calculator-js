var running = [];
var temp = "";
var total;

$(".row div").on("click", function () {
	var value = $(this).text();
	var readout = $(".readout div");
	var op = $(".readout span");

	if (!isNaN(value) || value === ".") {
		temp += value;
		readout.text(temp);

	} else if (value === "÷") {
		op.text("÷");
		running.push(temp + "/");
		temp = "";

	} else if (value === "x") {
		op.text("x");
		running.push(temp + "*");
		temp = "";

	} else if (value === "–") {
		op.text("–");
		running.push(temp + "-");
		temp = "";

	} else if (value === "+") {
		op.text("+");
		running.push(temp + "+");
		temp = "";

	} else if (value === "ac") {
		op.text("");
		running = [];
		temp = "";
		readout.text(0);

	} else if (value === "c") {
		temp = "";
		readout.text(0);

	} else if (value === "=") {
		op.text("=");
		running.push(temp);
		total = running.join("");
		readout.text(eval(total));
		running = [];
		running.push(eval(total));
		temp = "";

	} else {
		return;
	}

});
