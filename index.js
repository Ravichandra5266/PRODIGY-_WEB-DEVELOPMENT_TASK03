const dispalytextEl = document.getElementById("dispalytext");

function inputValue(value) {
	dispalytextEl.value += value;
}

function displayInputresult() {
	const evelValue = eval(dispalytextEl.value);
	dispalytextEl.value = evelValue;
}

function clearValues() {
	dispalytextEl.value = "";
}

function deleteValue() {
	const deleteValue = dispalytextEl.value.slice(0, -1);
	dispalytextEl.value = deleteValue;
}
