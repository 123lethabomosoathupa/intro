var item1;
var item2;
var item3;
			
     document.getElementById("changeList").onclick = newList;
			
			function newList(){
			item1=prompt("Enter First Time");
            document.getElementById("o").innerHTML = item1;
			item2=prompt("Enter Second Time");
            document.getElementById("d").innerHTML = item2;
			item3=prompt("Enter Third Time");
            document.getElementById("g").innerHTML = item3;
			updateList();

            }
		function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
}