function registrationForm(){
  let Name = document.getElementById('name').value
  let  Contact= document.getElementById('contact').value
  let Email = document.getElementById('email').value
  let Password = document.getElementById('password').value
  let Confirm_Password = document.getElementById('conf_pass').value
  
  if(Name==""||Contact==""||Email==""|| Password==""||Confirm_Password==""){
      alert("All Field are Mandatory to fill")
      return false;
  }
  else if(Contact.length>10 || contact.length)
      return true;
  }











