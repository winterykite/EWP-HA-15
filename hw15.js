$("#befehle").DataTable({
	"ajax" : "hw15.json",
	"searching" : false
});

$("#commit").tooltipster({
	content: $("#commitcontent").detach()
});

$("#add").tooltipster({
	content: $("#addcontent").detach()
});

$("#push").tooltipster({
	content: $("#pushcontent").detach()
});

$("#pull").tooltipster({
	content: $("#pullcontent").detach()
});

$("#clone").tooltipster({
	content: $("#clonecontent").detach()
});