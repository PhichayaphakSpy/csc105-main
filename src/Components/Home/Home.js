import React,{useState} from 'react'
import { Input } from './Body/Input/Input'
import { Header } from './Header/Header'


export function Home (){
    
    const [products, setproducts] = useState([]);

    const onAddHandler = (flavor,additional,size) =>  {
        let sprice = 0;
        if (size == "S"){
            sprice = 80 ;
        }
        else if (size =="M") {
            sprice = 150 ;
        } else {
            sprice = 350 ;
        }
        setproducts([...products,{flavor:flavor,additional:additional,size:size,price:sprice}])
    };


    return (
        <div> 
            <div className="navbarbetheblock"><Header products = {products}/></div>
            <div className="bg"><br></br><div className="choose"><Input onAdd = {onAddHandler}/></div></div>
        </div>
    )
}
