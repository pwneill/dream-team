/* eslint-disable quotes */
/* eslint-disable no-undef */

function modalContent(resp) {
	$("#description").html("");
	$("#stats").html("");
	$("#modal-img").attr("src", "");
	$("#food1").html("");
	$("#food2").html("");
	$("#food3").html("");
	$("#food4").html("");

	$("#exampleModal").modal("show");
	$("#header").text("Your match: " + resp.name + " from " + resp.brewery);
	$("#description").append("<b>Type: </b>" + resp.type + "<br>" + "<b>Description: </b>" + resp.desc);
	$("#stats").append("<b>Key stats: </b>" + "<br>" + "<b>Abv: </b>" + resp.abv + " |" + " <b>IBU: </b>" + resp.ibu);
	$("#modal-img").attr("src", resp.label);
	$("#food1").append("<b>" + resp.food1.name + "</b>" + "<br>" + "<b> Serves: </b>" + resp.food1.desc + "<br>" + "<b> Delivers? </b>" + resp.food1.delivers + "<br>" + '<a href="' + resp.food1.url + '">Website </a>');

	if (resp.food2.name != null || resp.food2.name != "null") {
		$("#food2").append("<b>" + resp.food2.name + "</b>" + "<br>" + "<b> Serves: </b>" + resp.food2.desc + "<br>" + "<b> Delivers? </b>" + resp.food2.delivers + "<br>" + '<a href="' + resp.food2.url + '">Website </a>');

		if (resp.food3.name != null || resp.food3.name != "null") {
			$("#food3").append("<b>" + resp.food3.name + "</b>" + "<br>" + "<b> Serves: </b>" + resp.food3.desc + "<br>" + "<b> Delivers? </b>" + resp.food3.delivers + "<br>" + '<a href="' + resp.food3.url + '">Website </a>');
		}
		if (resp.food4.name != null || resp.food4.name != "null") {
			$("#food4").append("<b>" + resp.food4.name + "</b>" + "<br>" + "<b> Serves: </b>" + resp.food4.desc + "<br>" + "<b> Delivers? </b>" + resp.food4.delivers + "<br>" + '<a href="' + resp.food4.url + '">Website </a>');
		}
	}

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: {lat: resp.latitude, lng: resp.longitude},
	});

	new google.maps.Marker({
		position: {lat: resp.latitude, lng: resp.longitude},
		label: resp.brewery,
		map: map
	});

}

$("#submitBtn").on("click", function (event) {
	event.preventDefault();
	
	// set responses to local variables
	var genLoc = parseInt($("#q1").val());
	var beerType = parseInt($("#q2").val());
	var abv = parseInt($("#q3").val());
	var ibu = parseInt($("#q4").val());


	var answer = {
		location: genLoc,
		type: beerType,
		abv: abv,
		ibu: ibu
	};


	$.post("/api/beers", answer, function (resp) {
		modalContent(resp);

	});
});

$("#randomBtn").on("click", function () {

	$.post("/api/beers/random", function (resp) {
		modalContent(resp);
	});
});

$("#searchBtn").on("click", function(event) {
	event.preventDefault();

	var answer = {
		query: $("#query").val()
	};

	$("#query").html("");

	$.post("/api/beers/search", answer, function (resp) {
		modalContent(resp);
	});
});