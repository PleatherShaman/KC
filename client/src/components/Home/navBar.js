import React ,{useState}from 'react'
import './navBar.css'

function NavBar(){

    const [toggle, setToggle ] = useState(false)
    
    function handleToggle(){
        setToggle(!toggle)
    }
    return(
        <div className="navBar border">
        

            <div className="navBarLogo">
                <span className="navBarLogoText">Kitchen Catalogue</span>
            </div>

            <div className="navBarButton " onClick={handleToggle}>
                
                 <div className="burgerButton"></div>
                 <div className="burgerButton"></div>
                 <div className="burgerButton"></div>
            </div>

            <div className={`navBarContainer `}>
                <ul className={`navBarList ${toggle? 'display': ""}`}>
                    
                    <li className="navBarListItem">Create A Recipe</li>
                    <li className="navBarListItem">My Recipes</li>
                    <li className="navBarListItem">My Cookbooks</li>
                
                    
                </ul>
            </div>
        
        </div>
    )
}

export default NavBar