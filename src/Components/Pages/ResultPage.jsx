import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ResultPage.css";
import {Link} from "react-router-dom";
import DetailsPage from "./DetailsPage";

const ResultPage=()=>{
    const location = useLocation();
    const { title, image } =location.state;
    console.log(title)
    return(
        <>
        <h1 style={{color:'red', marginLeft:'350px'}}>{title}</h1>
        <div className="detail_card_img">
            <img src={image} alt={title} className="detail_image"/>
        </div>
        <DetailsPage/>
        </>
    )
}

export default ResultPage;