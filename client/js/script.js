fetch("../client/vd.json")
  .then(response => response.json())
  .then(data => vd_display(data));

function vd_display(data) {
  /*   console.log(data[1].content1);
  let content1 = document.getElementById("content1");
  for (let index = 0; index < data[1].content1.length; index++) {
    let content1_left_div = document.createElement("div");
    content1_left_div.setAttribute("class", "col-6");
    content1.append(content1_left_div);
    let content1_left_img = document.createElement("img"); */
}
