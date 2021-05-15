import React,{useState} from 'react'
import axios from "../../../axios"
import FormData from "form-data"

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const [province, setProvince] = useState("");
  const [country, setcountry] = useState("");
  const [zip, setZip] = useState("");
  const [add, setadd] = useState("");

  
  
 
  const submitRegist = (event) => {
    event.preventDefault();
   
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
       );
      if( tel.length != 10|| password.length<6 || !validEmail.test(email) )
      { return alert("invalid format of password, telephone number or email"); }

      
    const address = `${add} ${province} ${country} ${zip}` ;
    const formData = new FormData(); 
    formData.append("username",username);
    formData.append("password",password);
    formData.append("firstname",firstname);
    formData.append("lastname",lastname);
    formData.append("tel",tel);
    formData.append("address",address);
    formData.append("email",email); 

    axios.post("/SignUp", formData).then((res)=>{
      axios.post("/SignIn", formData)
        .then((res)=>{
      window.location.href = "/";
    }).catch((error)=>alert(error.response.data.message));
    }).catch((error)=>alert(error.response.data.message));
  };

    return (
      <div className="signinpage">
            <div className="container">
        <div class="py-5 text-center">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p></div>
            <label for="username"><b>Username</b></label>
            <input type="text" name="username" placeholder="" onChange={(e) => setUsername(e.target.value)} required />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Password must be at least 6 characters" name="psw" onChange={(e) => setPassword(e.target.value)} required></input> 
            <div class="row">
              <div class="col-6">
            <label for="firstname"><b>Firstname</b></label>
            <input type="text" name="firstname" placeholder="" onChange={(e) => setFirstname(e.target.value)} required /></div>
            <div class="col-6">
            <label for="lastname"><b>Lastname</b></label>
            <input type="text" placeholder="" name="lastname" onChange={(e) => setLastname(e.target.value)} required></input></div> 
            </div>
            
            <label for="psw"><b>Email</b></label>
            <input type="text" placeholder="example@icecreamshop.com" name="email"  onChange={(e) => setEmail(e.target.value)} required></input> 
            
            
            <label for="phone"><b>Phone Number</b></label>
           <input type="phone" name="phone" maxlength="10" onChange={(e) => setTel(e.target.value)} placeholder="Phone number must be 10 digit." required></input>
           

           <div class="row g-3">
           <div class="col-12">
              <label for="address"><b>Address</b></label>
              <input type="text" id="address" placeholder="" onChange={(e) => setadd(e.target.value)} required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

          <div class="col-md-4">
                        <label for="state"><b>Province</b></label>
                        <input type="text"  id="state" onChange={(e) => setProvince(e.target.value)} required></input>
                        <div class="invalid-feedback">
                        Please enter your state.
                        </div>
                      </div>

            <div class="col-md-5">
              <label for="country"><b>Country</b></label>
              <input type="text"  id="country" onChange={(e) => setcountry(e.target.value)} required></input>
              <div class="invalid-feedback">
              Please enter your country.
              </div>
            </div>

            

            <div class="col-md-3">
              <label for="zip"><b>Zip</b></label>
              <input type="text"  id="zip" placeholder="" maxlength="5" pattern="\d{5}" onChange={(e) => setZip(e.target.value)} required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            </div>
           <br/>
           <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
           <div className="clearfix">
            <button type="submit" className="btn" onClick={submitRegist} >Sign Up</button>
            </div>
        </div>
    </div>    
  
    )
    }
