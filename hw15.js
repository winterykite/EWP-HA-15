$("#befehle").DataTable({
	"ajax" : "hw15.json",
	"searching" : false
});

$("#commit").tooltipster({
	content: $("#commit").detach()
});

$("#add").tooltipster({
	content: $("#add").detach()
});

$("#push").tooltipster({
	content: $("#push").detach()
});

$("#pull").tooltipster({
	content: $("#pull").detach()
});

$("#clone").tooltipster({
	content: $("#clone").detach()
});