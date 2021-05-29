import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from "../../axios";


const SummaryOrder = ({products}) => {
  
  
  const Totalprice = products.reduce((a, c) => a +  c.price, 0);

  const [shipping, setShipping] = useState(true);

  const [flavor, setFlavor] = useState([]);
  const [additional, setAdditional] = useState([]);
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState([]);


  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

useEffect(() => {
  fetchUser();
}, []);

const fetchUser = async () => {
  const tempUser = await axios.get("/UserServlet");
  setShipping(true);
  setFirstname(tempUser.data.firstname);
  setLastname(tempUser.data.lastname);
  setAddress(tempUser.data.address);
  setTel(tempUser.data.tel);
  setUsername(tempUser.data.username);
  setEmail(tempUser.data.email);
};

const clear =()=>{
  setShipping(false);
  setFirstname("");
  setLastname("");
  setAddress("");
}
const [cardnumber, setCardnumber] = useState("");
const [card_name, setCard_name] = useState("");
const [cvv, setCvv] = useState("");
const [card_exp, setCard_exp] = useState("");

const onAddHandler= (event) => {
  event.preventDefault();
  var showDate = new Date();
  var dt = showDate.getFullYear()+'-'+(showDate.getMonth()+1)+'-'+showDate.getDate()+'-'+showDate.getHours()+'-'+showDate.getMinutes()+'-'+showDate.getMinutes();
  const formData = new FormData();
  console.log(flavor);
  products.map((product)=>{
    flavor.push(product.flavor);
    additional.push(product.additional);
    size.push(product.size);
    price.push(product.price);
  });
      formData.append("cardnumber",cardnumber);
      formData.append("card_name",card_name);
      formData.append("cvv",cvv);
      formData.append("card_exp",card_exp);
      formData.append("address",address); 
      formData.append("firstname",firstname);
      formData.append("lastname",lastname);
      formData.append("dt",dt);

      formData.append("flavor",flavor);
      
      formData.append("additional",additional);
      formData.append("size",size);
      formData.append("price",price);
      
      
      axios.post("/SummaryPageServlet",formData).then((res)=>{window.location.href = "/Success"}).catch((error)=> console.log(error))
};

    return (
        <div className="containing">
  <main>
    <div class="py-5 text-center">
      <h2>Checkout station</h2>
    </div>

    <div class="row g-3 justify-content-center">
    <div class="col-md-7 col-lg-8">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <div class="mb-3">Your cart</div>
          <span class="badge bg-secondary">{products.length}</span>
        </h4>
        
        <ul class="list-group mb-3">
          {
            products.map((el)=>(
              <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{el.flavor} Icecream with {el.additional} size {el.size}</h6>
            </div>
            <span class="text-muted">{el.price}</span>
          </li>
            )) 
          }
          
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (Baht)</span>
            <strong>{Totalprice}</strong>
          </li>
        </ul>

     
       </div> 
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Shipping address</h4>
     

          <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>fetchUser()} checked={shipping}/>
          <label class="form-check-label" for="flexRadioDefault1">
          Use the registered address
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>clear()} checked={!shipping}/>
          <label class="form-check-label" for="flexRadioDefault2">
          Send to other address
          </label>
        </div>

          <hr class="my-4"/>
        <form class="needs-validation" novalidate>
          <div class="row g-3">

          <div class="col-12">
              <span color="lightblue">Username :  @{username}</span>
            </div>
            <div class="col-12">
              <span color="lightblue">Tel : {tel}</span>
            </div>
            <div class="col-12">
              <span color="lightblue">Email : {email}</span>
            </div>

            <div class="col-sm-6">
              <label for="firstName" class="form-label">Firstname</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
              <div class="invalid-feedback">
                Valid firstname is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Lastname</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
              <div class="invalid-feedback">
                Valid lastname is required.
              </div>
            </div>

            

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

          </div>

          <hr class="my-4"/>

          <h4 class="mb-3">Payment</h4>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="Full name as displayed on card" onChange={(e)=>setCard_name(e.target.value)} required/>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" maxlength="16"  onChange={(e)=>setCardnumber(e.target.value)} required/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" maxlength="5" onChange={(e)=>setCvv(e.target.value)} required/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" maxlength="3" onChange={(e)=>setCard_exp(e.target.value)} required/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <Link to="/Success"><button class="w-100 btn btn-primary btn-lg" type="submit" onClick={onAddHandler}>Continue to checkout</button></Link>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2021 Icecream Factory.</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>

    );
};

export default SummaryOrder;
