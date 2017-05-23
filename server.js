
	var express = require("express");
	var bodyParser = require("body-parser");
	var exphbs = require("express-handlebars")
	var orm = require("./config/orm.js")
	var methodOverride = require("method-override");
	var PORT = 8080;
	var app = express();
	app.use(express.static(__dirname + "/public"));

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(methodOverride("_method"));
	app.engine("handlebars", exphbs({defaultLayout: "main"}));
	app.set("view engine", "handlebars");

	var routes = require("./controllers/burgers_controller.js");
	app.use("/", routes);
	app.use("/update", routes);
	app.use("/create", routes);

	app.listen(PORT, function(){
		console.log("app is listening on "+ PORT);
	})

