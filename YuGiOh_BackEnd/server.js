const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
	// origin: "http://localhost:8081",
	origin: function (origin, callback) {
    callback(null, true);
  },
  methods: "GET, HEAD, PUT, DELETE, POST",
  preflightContinue: false,
  credentials: true,
  optionSuccessStatus: 200,
  exposedHeaders: ["Content-Disposition"]
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
	extended: true
}));

const db = require("./app/models");

db.sequelize.sync();

// Simple route
app.get("/", (req, res) => {
	res.json({
		message: "Welcome to YuGiOh_NodeJS_Angular"
	});
});

require("./app/routes/card.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});