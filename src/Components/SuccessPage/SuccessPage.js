import React,{useState,useEffect} from 'react'
import axios from "../../axios"


export const SuccessPage = () => {

  const [payment, setPayment] = useState("");

  useEffect(() => {
    axios.get("/SuccessServlet").then((res)=> {
      setPayment(res.data.id);
    })
    
  }, []);
 
  
  

    
 

    return (
      <div className="successpage">
        <div className="space"></div>
        <div class="success-checkmark">
          <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
          </div>
        </div>
        <h1>Your purshed is succesful</h1>
        <p>Thank you for shopping with us</p>
        <p> Your order number is {payment}. </p>
      </div>
      
    )
          

}
