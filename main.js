function addItem(){


memo = document.getElementById("newItem");
added =document.getElementById("itemList");

var node = document.createElement("LI");
var textNode = document.createTextNode(memo.value);
node.appendChild(textNode);
added.appendChild(node);

  node.classList.add("notEmpty");
  memo.value="";
}