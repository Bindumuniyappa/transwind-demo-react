import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ResultPage.css";
import {Link} from "react-router-dom";
import DetailsPage from "./DetailsPage";
import SideNavbar from "../NavBar/SideNavbar"

const ResultPage=()=>{
    const location = useLocation();
    const { title, image,category } =location.state;
    console.log(title,category);
    return(
        <> 
        <SideNavbar/>
        <Link to="/profile">
            <button className="btn_resultPage">Back</button>
        </Link>
        <h1 style={{color:'red', marginLeft:'750px'}}>{title}</h1>
        <div className="detail_card_img">
            <img src={image} alt={title} className="detail_image"/>
        </div>
        <h2>{category}</h2>
        {/* <h1 className="text-danger" style={{marginLeft:"300px"}}>{title}</h1>
        <div className="detail_card_img">
            <img src={image} alt={title} className="detail_image"/>
        </div> */}
        <DetailsPage/>
        </>
    )
}

export default ResultPage