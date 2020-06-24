import React from "react";
import './footer.styles.scss';


const Footer = () => (
   <div>
       <div className="container">
           <div className="copyright">
           <p>&copy; {year} Bardas Andrei</p>
           </div>

           <div className="proiect-licenta">
               <p>Proiect de licenta - Universitatea "Dunarea de Jos"</p>
           </div>

           <div className="contact">
           <a href="#"><p>Contact</p></a>
           </div>
       </div>
   </div>
);

const date = new Date();
const year = date.getFullYear();


export default Footer;
