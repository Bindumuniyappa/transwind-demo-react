import Navbar from "../NavBar/Navbar";
// import {Link, NavLink, Navigate} from 'react-router-dom';
import styles from './Profile.module.css';
import CardComp from "../Comp/CardComp";
import products from "../../Components/Assets/Product";
import {useNavigate} from "react-router-dom";
import SideNavbar from "../NavBar/SideNavbar";
import React from "react";
const Dashboard = () => {
    const navigate=useNavigate();

    const handleCardClick = (product) => {
        navigate("/resultpage", { state: { title: product.title, image: product.image ,category:product.category} });
      };

    return (
        <>
            <Navbar />
            <div className={styles.Big_CardsContainer}>
                <div className={styles.CardContainer}>
                  {products.map(product => (
                        <div className={styles.Card} key={product.id}> 
                            <CardComp image={product.image} title={product.title} category={product.category} onClick={()=>handleCardClick(product)}/>
                        </div>
                    ))}
                </div>
            </div>
            <SideNavbar/>
        </>
    );
};

export default Dashboard;


