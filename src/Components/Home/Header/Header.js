import logo from './Logo.png';
import {Nav} from './nav/Nav';

export const Header = ({products,onDelete}) => {
    
    return (
    <div className="header">
    <img src ={logo} alt = "logo" />
    <Nav products = {products} onDelete={onDelete} />
    </div>
    );
};
 
export default Header;