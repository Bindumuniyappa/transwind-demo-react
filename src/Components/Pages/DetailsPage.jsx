import React from "react";
import "../styles/DetailsPage.css";
import ResultCard from "../Comp/ResultCard";


const DetailsPage=()=>{
  
    return (
        <>
        <div className="Big_container_page">
        <div className="Big_container">
            <ul className="Details_navbar">
                <li>specifications</li>
                <li>page2</li>
                <li>page3</li>
            </ul>
        </div>
        <ResultCard />
        </div>
        </>
    )
}
export default DetailsPage;