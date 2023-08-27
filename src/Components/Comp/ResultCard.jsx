import React, { useState, useEffect } from "react";
import styles from "../Comp/ResultCard.module.css";
import mqtt from 'mqtt';

const ResultCard = () => {
  const [deviceData, setDeviceData] = useState(""); // Using state to manage data

  const initialConnectionOptions = {
    protocol: 'ws',
    host: 'broker.emqx.io',
    clientId: 'emqx_react_' + Math.random().toString(16).substring(2, 8),
    port: 8083,
    username: 'emqx_test',
    password: 'emqx_test',
  };
  const url = `${initialConnectionOptions.protocol}://${initialConnectionOptions.host}:${initialConnectionOptions.port}/mqtt`;
  const options = {
    clientId: initialConnectionOptions.clientId,
    username: initialConnectionOptions.username,
    password: initialConnectionOptions.password,
    clean: true,
    reconnectPeriod: 1000, // ms
    connectTimeout: 30 * 1000, // ms
  };
  const client = mqtt.connect(url, options);

  useEffect(() => {
    // Subscribe to the MQTT topic
    client.subscribe('transwind');

    // Handle incoming messages
    client.on('message', (topic, payload) => {
      const parsedPayload = JSON.parse(payload.toString());
      console.log(parsedPayload)
      setDeviceData(parsedPayload); // Update state with new data
    });

    // Clean up on component unmount
    return () => {
    //   client.end(); // Close the MQTT connection
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      <div className={styles.params_card}>
        <h3>24</h3>
        <h4>Current shift number</h4>
        <p>{JSON.stringify(deviceData)}</p>
      </div>
    </>
  );
};

export default ResultCard;
