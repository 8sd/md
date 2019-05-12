function md_parse () {
  var nodeList = document.getElementsByTagName('md');
  for (var i=0; i < nodeList.length; i++) {
    if(nodeList.item(i).attributes["src"] === undefined) {
      nodeList.item(i).innerHTML = marked(nodeList.item(i).firstChild.data);
      nodeList.item(i).style.visibility = 'visible';
    } else {
      (function (node) {
        // load md
        fetch(node.attributes["src"].nodeValue)
        .then(data => {return data.text();})
        //parse response
        .then(response => {
          node.innerHTML = marked(response);
        });
      })(nodeList.item(i));
    }
  }
}

window.onload=md_parse;
