import React from "react";
import styles from "./CardComp.module.css";

const CardComp = (props) => {
    
    const categoryStyles = props.category === "Active" ? styles.activeCategory : styles.offlineCategory;

    return (
        <div className={styles.CardContainer} onClick={props.onClick}>
            <div className={styles.CardImg}>
                <img src={props.image} alt={props.title} className={styles.Image} />
            </div>
            <div className={styles.bigCard}>
                <h5 className={styles.titleTag}>{props.title}</h5>
                <h5 className={`${styles.titleTag} ${categoryStyles}`}>{props.category}</h5>
            </div>
        </div>
    );
};

export default CardComp;
