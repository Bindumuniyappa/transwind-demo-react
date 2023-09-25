// ReportTable.js
import React from "react";
import "../styles/ReportTable.css"

const ReportTable = ({ selectedData }) => {
  if (!selectedData || !selectedData.labels || !selectedData.data) {
    return <p>No data available for the selected machine.</p>;
  }

  return (
    <div className="table-container">
      <h2 style={{color:"wheat" ,textAlign:"center"}}>Report Table</h2>
      <table border={2} width={450}>
        <thead>
          <tr>
            <th style={{color:"crimson" ,textAlign:"center"}}>Month</th>
            <th style={{color:"crimson" ,textAlign:"center"}}>{selectedData.label}</th>
            <th style={{color:"crimson",textAlign:"center"}}>Actual Production</th>
          </tr>
        </thead>
        <tbody>
          {selectedData.labels.map((month, index) => (
            <tr key={index}>
              <td style={{color:"wheat",textAlign:"center"}}>{month}</td>
              <td style={{color:"wheat" ,textAlign:"center"}}>{selectedData.data[index]}</td>
              <td style={{color:"wheat" ,textAlign:"center"}}>{selectedData.additional_data[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
