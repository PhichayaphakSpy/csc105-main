import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Home } from "./Components/Home/Home";
import { Form } from "./Components/Register/Form/Form";
import { SuccessPage } from "./Components/SuccessPage/SuccessPage";
import SummaryOrder from "./Components/SummaryOrder/SummaryOrder";


function App() {
  const [products, setproducts] = useState([]);

  const onAddHandler = (flavor, additional, size) => {
    let sprice = 0;
    if (size == "S") {
      sprice = 80;
    } else if (size == "M") {
      sprice = 150;
    } else {
      sprice = 350;
    }
    setproducts([
      ...products,
      {
        id: Math.random(),
        flavor: flavor,
        additional: additional,
        size: size,
        price: sprice,
      },
    ]);
  };

  const onDelete = (id) => {
    let hardCopy = products.filter((product) => product.id !== id);
    setproducts(hardCopy);
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            
            <Home
              onAddHandler={onAddHandler}
              onDelete={onDelete}
              products={products}
            />
          </Route>
          <Route path="/Register">
            
            <Form />
          </Route>
          <Route path="/CheckOut">
            
            <SummaryOrder products={products} />
          </Route>
          <Route path="/Success">
            <SuccessPage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
