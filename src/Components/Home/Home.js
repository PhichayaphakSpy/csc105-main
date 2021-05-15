import React,{useState,useEffect} from 'react'
import { Input } from './Body/Input/Input'
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header'


export function Home ({onAddHandler,onDelete,products}){
    
    
    
    return (
        <div > 
            <div className="navbarbetheblock"><Header products = {products} onDelete={onDelete}/></div>
            <div className="bg"><br></br><div className="choose"><Input onAdd = {onAddHandler} /></div></div>
            <div className="Footer"><Footer/></div>
        </div>
    )
}
