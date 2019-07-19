import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerBox text-center">
        <h2 className="pacifico footerLogo">Kitchen Catalogue</h2>
        <p className="footertext">© 2019 Kitchen Catalogue. </p>
        <p className="footertext">All rights reserved.</p>
      </div>

      {/* <div className="footerBox footerBoxRight ">
                <ul className='footerList'>
                    <li className='bold'>
                        Kitchen Catalogue
                    </li>
                    <li><Link to="/recipe">Home</Link></li>
                    <li><Link to="/recipe/new">Create A New Recipe</Link></li>
                    <li><Link to="/recipe">View All Recipes</Link></li>
                    
                </ul>
            </div> */}
    </footer>
  );
};

export default Footer;
