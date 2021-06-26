
// Membership
function form() {
  document.getElementById("ownStyle").style.display = "block";
  document.getElementById("cardMembers").style.display = "none";
}
// credit card
function onSubmit() {
  let name = document.getElementById("name").value;
 
  let cardNumber = document.getElementById("cardNumber").value;
  let expiration = document.getElementById("exp").value;
  let cvv = document.getElementById("cvv").value;

  console.log(name);
  console.log(cardNumber);
  console.log(expiration);
  console.log(cvv);

  
  if (name == "") {
    alert("Name must be filled out");
     document.getElementById('name').style.backgroundColor='red'
    return false;
  }
  else if (cardNumber == "") {
    alert("Card nummber must be filled out");
    document.getElementById('cardNumber').style.backgroundColor='red'
    return false;
  }
  else if (expiration == "") {
    alert("Expiration nummber must be filled out");
    document.getElementById('exp').style.backgroundColor='red'
    return false;
  }
  else if (cvv == "") {
    alert("Cvv nummber must be filled out");
    document.getElementById('cvv').style.backgroundColor='red'
    return false;
  }

 
     clearForm()

     removeColor()  

}
  

function removeColor(){
  document.getElementById('name').style.backgroundColor='white';
  document.getElementById('cardNumber').style.backgroundColor='white';
  document.getElementById('exp').style.backgroundColor='white';
  document.getElementById('cvv').style.backgroundColor='white';
  alert('thanks! you have the Membership')

}
// clear form

 
function clearForm(){
  document.getElementById('name').value='';
  document.getElementById('cardNumber').value='';
  document.getElementById('exp').value='';
  document.getElementById('cvv').value='';
  
}

