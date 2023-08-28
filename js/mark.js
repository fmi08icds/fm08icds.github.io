function getMark(){
var mat = document.getElementById("mat").value;
console.log("Matricule: ", mat);
//alert('Button Clcked'+mat);
url = "https://github.com/fmi08icds/fmi08icds.github.io/blob/main/js/marks.csv";
url = "https://github.com/Sta663-Sp22/sta663-sp22.github.io/blob/master/slides/data/cereal.csv";
d3.csv(url, function(data) {
    console.log("Loading data....")
    for (var i = 0; i < data.length; i++) {
        //if (data[i].Matrile === number()) {
          console.log(data[i]);
          console.log(data[i]);
      //  }

    }
});
}
