var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
   
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
    
}




// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["view_plotid"] = document.getElementById("search_input").value;
    // formData["landcategory"] = document.getElementById("landcategory").value;
    // formData["ownername_input"] = document.getElementById("ownername_input").value;
    // formData["aadharno_input"] = document.getElementById("aadharno_input").value;
    // formData["dob_input"] = document.getElementById("dob_input").value;
    // formData["pincode_input"] = document.getElementById("pincode_input").value;
    // formData["registration_input"] = document.getElementById("registration_input").value;
    // formData["purchase_input"] = document.getElementById("purchase_input").value;
    // formData["phoneno_input"] = document.getElementById("phoneno_input").value;
    
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("viewprevious_owners").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.plotid_input;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ownername_input;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.registration_input;
}


