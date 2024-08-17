import './Navbar.css'
import { useRef } from "react";

export default function Navbar(){
    const ref = useRef();
    const removenavbar = () => {
        ref.current.style.display = "none";
    };
    const putnavbar = () => {
        ref.current.style.display = "flex";
    };
    return(
        <>
        <div className='navbarContainer'>
            <img src="https://i.ibb.co/R351Tcf/logo.png" alt="" srcset="" />
            <div className='navoptions'>
                <div className="dropdownselect">
                        <div className='products'>Products</div>
                        <div className="options">
                            <div className="optionname">Beard</div>
                            <div className="optionname">Combo</div>
                            <div className="optionname">All Product</div>
                            <div className="optionname">Fragrance</div>
                            <div className="optionname">Face</div>
                            <div className="optionname">Body</div>
                            <div className="optionname">Hair</div>
                        </div>
                </div>
                <div className="byob">BYOB@999<i class="fa-solid fa-box"></i></div>
                <div className="byob">For Her</div>
                <div className="byob">Best Seller</div>
                <div className="byob">New Launch</div>
            </div>
            <div className="searchCart">
                <button className='search'><i class="fa-solid fa-magnifying-glass"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='cart'><a href="https://beardo-login.vercel.app/" className='disableanchor'><i class="fa-solid fa-cart-shopping"></i></a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='byob'><a href="https://beardo-login.vercel.app/" className='disableanchor'>My Account</a></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="mobilenavbar">
                    <button onClick={putnavbar}><i class="fa-solid fa-bars"></i></button>
                    <div className='mobilenavContainer' ref={ref}>
                        <div className="close"><button onClick={removenavbar} className="close"><i class="fa-solid fa-xmark"></i>CLOSE</button></div><br></br>
                        <div className="mobilenavfirstrow">
                            <div className="cards"><a href="https://beardo-login.vercel.app/" className='disableanchor'>My Account<br></br>Login/SignUp</a></div>
                            <div className="cards">Track Order</div>
                        </div>
                        <div className="mobilenavsecondrow">
                            <div className="secondrowoptions hoverdiv">Products</div>
                            <div className="secondrowoptions hoverdiv">BYOB@999<i class="fa-solid fa-box"></i></div>
                            <div className="secondrowoptions hoverdiv">For Her</div>
                            <div className="secondrowoptions hoverdiv">Best Selle</div>
                            <div className="secondrowoptions hoverdiv">New Launch</div>
                        </div>
                        <div className="mobilenavthirdrow">
                            <div className="thirdrowoptions hoverdivicon"><i class="fa-brands fa-twitter"></i></div>
                            <div className="thirdrowoptions hoverdivicon"><i class="fa-brands fa-facebook"></i></div>
                            <div className="thirdrowoptions hoverdivicon"><i class="fa-brands fa-instagram"></i></div>
                            <div className="thirdrowoptions hoverdivicon"><i class="fa-brands fa-youtube"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}