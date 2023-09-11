import React, { useState, useEffect } from "react";
import styles from "../Comp/ResultCard.module.css";
import mqtt from 'mqtt';

const ResultCard = ({ field, value }) => {


  return (
    <>
     <div className={styles.params_card}>
      {field === "Timeupdate" ? (
        <div>
          <h3>{new Date(value).toLocaleString()}</h3>
          <h4>Time</h4>
        </div>
      ) : (
        <div>
          <h4>{field}</h4>
          <br/>
          <h2>{value}</h2>
        </div>
      )}
    </div>
    </>
  );
};

export default ResultCard;
