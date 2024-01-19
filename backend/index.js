const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const compiler = require("compilex");
const cors = require("cors");

app.use(cors());
compiler.init({ stats: true });

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/compile", (req, res) => {
  var code = req.body.code;
  var input = req.body.input;
  var lang = req.body.lang;

  console.log(code , input , lang);

  if (lang == "Cpp") {
    if (!input) {
      var envData = { OS: "windows", cmd: "g++" }; // (uses g++ command to compile )
      compiler.compileCPP(envData, code, function (data) {
        res.send(data);
        //data.error = error message
        //data.output = output value
      });
    } else {
      var envData = { OS: "windows", cmd: "g++" }; // (uses g++ command to compile )
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    }
  }

  else if (lang == "Java") {
    if (!input) {
      var envData = { OS: "windows" };
      compiler.compileJava(envData, code, function (data) {
        res.send(data);
      });
    } else {
      var envData = { OS: "windows" };
      compiler.compileJavaWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    }
  }

  else if(lang=="Python") {
    if(!input) {
        var envData = { OS : "windows"}; 
        compiler.compilePython( envData , code , function(data){
            res.status(200).json(data);
        });
    }
    else {
      var envData = { OS : "windows"};
      compiler.compilePythonWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    }
  }

});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
