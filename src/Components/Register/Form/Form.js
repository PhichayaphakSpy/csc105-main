import React from 'react'

export const Form = () => {
    return (
      <div className="signinpage">
            <div className="container">
        <div class="py-5 text-center">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p></div>
            <label for="username"><b>Username</b></label>
            <input type="text" name="username" placeholder="Enter Username" required />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input> 
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>
            
            <label for="phone"><b>Phone Number</b></label>
           <input type="phone" name="phone" placeholder="00000000" required></input>
           
           <div class="row g-3">
           <div class="col-12">
              <label for="address"><b>Address</b></label>
              <input type="text" id="address" placeholder="1234 Main St" required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-12">
              <label for="address2" ><b>Address 2</b><span class="text-muted">(Optional)</span></label>
              <input type="text" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div class="col-md-5">
              <label for="country"><b>Country</b></label>
              <input type="text"  id="country" required></input>
              <div class="invalid-feedback">
              Please enter your country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state"><b>Province</b></label>
              <input type="text"  id="state" required></input>
              <div class="invalid-feedback">
              Please enter your state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip"><b>Zip</b></label>
              <input type="text"  id="zip" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            </div>
           <br/>
           <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
           <div className="clearfix">
            <button type="submit" className="btn">Sign Up</button>
            </div>
        </div>
    </div>    
  
    )
}
