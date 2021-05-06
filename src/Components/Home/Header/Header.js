import logo from './Logo.png';
import { Nav}  from "./nav/Nav";

export const Header = ({products}) => {
    
    return (
    <div className="header">
    <img src ={logo} alt = "logo" />
    <Nav products = {products}/>
    </div>
    );
};
 
export default Header;