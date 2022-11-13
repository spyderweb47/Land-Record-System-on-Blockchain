






<script type="text/javascript">
    
function addcordinates() {
  var geo1 = document.getElementById("geodata_1_input").value;
  var geo2 = document.getElementById("geodata_2_input").value;
  var geo3 = document.getElementById("geodata_3_input").value;
  var geo4 = document.getElementById("geodata_4_input").value;
  var total = geo1.concat(":", geo2, ":", geo3, ":", geo4);
  console.log(total);
  var base64 = btoa(total);

  // console.log("Successfuly generated");

  console.log(base64);
  return base64;
}
async function getCurrentAccount() {
  const accounts = await window.web3.eth.getAccounts();
  return accounts[0]; r
}



async function checkPlotid() {
  var getKyclandids = await window.contract.methods.getKyclandids(document.getElementById("plotid_input").value).call();
  const kycid = document.getElementById('view_landid');
  console.log("lnsddcvgv");
  console.log(getKyclandids);

  Splitlandids(getKyclandids);


  function Splitlandids(getKyclandids) {
    console.log(getKyclandids);

    var landids = getKyclandids.split(',');
    console.log(landids);
    // console.log(landids[0]);


    landid = landids.slice(1);
    console.log(landid);

  }

  // landid.includes("plotid_input");
  console.log(landid);

  if(getKyclandids.includes(document.getElementById("plotid_input").value)){
    alert("Record lredy exists!");
    console.log(landid);
  }
  else{
    AddLandData();
  }

}

function redirect()
{
window.location.href="/index.html";
}




async function AddLandData() {
  var x = document.getElementById("frm1");
  var landid = x.elements[0].value;
  
  var ownername = x.elements[1].value;
  var landtype = x.elements[2].value;
  var geo = addcordinates();
  var amount = x.elements[7].value;
  var regdate = x.elements[8].value;
  var pincode = x.elements[9].value;
  var kycid = x.elements[10].value;
  var contact = x.elements[11].value;
  var surveyno = x.elements[12].value;
  // var dob = x.elements[12].value;
  console.log(geo);
  updateStatus(`Updating Land ID with ${landid}\nUpdating Owner Name with ${ownername}`);

  //Load metamask if no record exists
  const account = await getCurrentAccount();

  const addLand = await window.contract.methods.addLand(landid, ownername, landtype, geo, amount, regdate, pincode, kycid, contact, surveyno).send({ from: account });
  updateStatus('Updated.');
  redirect();
}



async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

async function load() {
  await loadWeb3();
  window.contract = await loadContract();
  updateStatus('Ready!');
}


function updateStatus(status) {
  // const statusEl = document.getElementById('status');
  console.log(status);
}

load();

</script>
