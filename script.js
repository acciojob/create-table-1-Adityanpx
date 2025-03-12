function insert_Row() {
	let table = document.getElementById('sampleTable');

	let newrow = table.insertRow(0);

	let cell1 = newrow.insertCell(0);
	let cell2 = newrow.insertCell(1);

	cell1.innerText = 'New Cell1';
	cell2.innerText = 'New Cell2';
	
	
    //Write your code here
  
  
}
