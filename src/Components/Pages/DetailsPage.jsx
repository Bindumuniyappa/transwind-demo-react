import React, { useState, useEffect } from "react";
import "../styles/DetailsPage.css";
import ResultCard from "../Comp/ResultCard";
import mqtt from 'mqtt';


const DetailsPage = () => {
    const [deviceData, setDeviceData] = useState(""); // Using state to manage data
    const [activePage, setActivePage] = useState(1);
    const initialConnectionOptions = {
        protocol: 'wss',
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
            const cleanedJsonString = payload.toString().replace(/[\x00-\x1F\x7F]/g, '');
            console.log(cleanedJsonString.toString())
            const parsedPayload = JSON.parse(cleanedJsonString.toString());
            console.log(parsedPayload)
            setDeviceData(parsedPayload);
        },)

        return () => {
        };

    }, [client]);

    const itemsPerPage = 4;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(Object.keys(deviceData).length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="Big_container_page">
                {/* <div className=" container"> */}
                    <div className=" card custom-card ">
                    <div className="card-header bg-dark">
                    <ul className='nav nav-pills nav-justified m-3' id="pills-tab" role="tablist">
                       {Array.from({ length: totalPages }, (_, index) => (
                         <li
                           key={index}
                            onClick={() => {
                            handlePageChange(index + 1);
                             setActivePage(index + 1); 
                             }}
                         className={`nav-item ${activePage === index + 1 ? 'active' : ''}`} // Add 'active' class if the page is active
                       role="presentation"
                        >
                       <a className="nav-link" data-bs-toggle="tab" data-bs-target={`#page${index + 1}`}>
                      Page {index + 1}
                     </a>
                    </li>
                   ))}
                 </ul>
                        {/* <ul className='nav nav-pills nav-justified m-3' id="pills-tab" role="tablist">

                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} onClick={() => handlePageChange(index + 1)} className="nav-item  " role="presentation">
                                    <a className="nav-link active " data-toggle="tab" data-target="#page1">Page{index + 1}</a>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                    <div style={{ display: "flex",flexDirection:"wrap" }} className={Object.entries(deviceData).length === 0 ? "no_data card-body" : ''}>
                        {Object.entries(deviceData).length === 0 ? (
                            <p>No data available</p>
                        ) : (
                            Object.entries(deviceData)
                                .slice(startIndex, endIndex)
                                .map(([key, value]) => (
                                    <ResultCard key={key} field={key} value={value} />
                                ))
                        )}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default DetailsPage;