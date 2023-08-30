

var url = "https://fmi08icds.github.io/js/marks.csv";
var mat = document.getElementById("mat").value;
if (!mat) {
  d3.select('#markTable').style("visibility", "hidden");
}

const thisreq = d3.dsv(";", url);

function  getMark(event){
  event.preventDefault();
  d3.selectAll('tbody').remove();
  d3.select('div#markInfo').selectAll('p').remove();
  var mat = document.getElementById("mat").value;
  if (!mat) {
    d3.select('#mat').classed("is-invalid", true);
  } else {
    d3.select('#mat').classed("is-invalid", false);
    thisreq.then(function(data) {
      var studentMark = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].Matrikel === mat){
              var studentMark = Object.values(data[i]);
          }
        }

        if (studentMark.length > 0){

          html = '<tr> <td>' +studentMark[1]+'</td> <td>'+studentMark[2]+'</td>';
          for (var j = 10; j < studentMark.length-1; j++) {
            html += "<td>" +Math.round(Number(studentMark[j]))+ '%</td>';
          }
          html +='<th scope="row">' +Math.round(Number(studentMark[studentMark.length-1]))+ '</th>';
          html +="</tr>"
          d3.select('#markTable').style("visibility", "visible")
          .append("tbody")
            .html(html);

            if (studentMark[studentMark.length-1] === "5") {
              phtml = "<p class='fw-light'> Sorry there are no homeworks for the student <spam>" +mat+ "</spam> on the github repositories.</p>";
              phtml += '<p class="fw-light">Please, make sure you entered the right matriculation number or contact me at <a href="mailto:nonosaha@mis.mpg.de">nonosaha@mis.mpg.de</a> asap.</p>';
              d3.select("div#markInfo").html(phtml);

            } else {
              phtml = "<p class='fw-light'> Congratulation! and thanks for attending my class.</p>";
              phtml += '<p class="fw-light">For any objections about your mark please, contact me at <a href="mailto:nonosaha@mis.mpg.de">nonosaha@mis.mpg.de</a>  asap.</p>';
              d3.select("div#markInfo").html(phtml);

            }

        }else {
          d3.select('#markTable').style("visibility", "hidden");
          phtml = "<p class='fw-light'> Sorry there are no homeworks for the student <spam>" +mat+ "</spam> on the github repositories.</p>";
          phtml += '<p class="fw-light">Please, make sure you entered the right matriculation number or contact me at <a href="mailto:nonosaha@mis.mpg.de">nonosaha@mis.mpg.de</a> asap.</p>';
          d3.select("div#markInfo").html(phtml);
        }
      });
  }


}


function resetForm(event){
    d3.select('#markTable').style("visibility", "hidden");
    d3.select('div#markInfo').selectAll('p').remove();
  }
