import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from './Components/Home/Home';
import {Form} from './Components/Register/Form/Form';
import { SuccessPage } from "./Components/SuccessPage/SuccessPage";
import SummaryOrder from "./Components/SummaryOrder/SummaryOrder";


 function App() {
   return (
    
          <Router>
            <div>
            <Switch>
        <Route exact path="/" > <Home/></Route>
        <Route path="/Register"> <Form/> </Route>
        <Route path="/CheckOut"> <SummaryOrder/></Route>
        <Route path="/Success"><SuccessPage/> </Route>
          </Switch>
          </div>
          </Router>
    )
 }
    

export default App;
