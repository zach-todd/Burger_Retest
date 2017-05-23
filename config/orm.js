	
	var connection = require("./connection.js");

	function printQuestionMarks(num) {
			var arr = [];

			for (var i = 0; i < num; i++) {
			    arr.push("?");
			  }

	  		return arr.toString();
	}
	function objToSql(ob) {
		  var arr = [];

		  for (var key in ob) {
		    arr.push(key + "=" + ob[key]);
		  }

		  return arr.toString();
	}
	var orm = {
		selectAll: function(input, cb ){
			var query = "SELECT * FROM " + input + ";";
			connection.query(query, 
				function(err,result){
					if(err){
						throw err;
					}
					cb(result);
				});

		},
		insertOne: function(table, cols, val, cb){
			var query = "INSERT INTO " + table;

			query += " (";
			query += cols.toString();
			query += ") ";
		    query += "VALUES (";
		    query += printQuestionMarks(val.length);
		    query += ") ";

   			console.log(query);
   			connection.query(query, val, function(err,result){
   				if (err){ 
   					throw err;
   				}
   				cb(result);
   			});
		},
		updateOne: function(table, objColVals, condition, cb) {
	    var query = "UPDATE " + table;

	    query += " SET ";
	    query += objToSql(objColVals);
	    query += " WHERE ";
	    query += condition;

	    console.log(query);
	    connection.query(query, function(err, result) {
	      if (err) {
	        throw err;
	      }
	      cb(result);
    });
  }
};

module.exports = orm;