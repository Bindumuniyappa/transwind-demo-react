import React from "react";
import * as XLSX from "xlsx";
import "../styles/ReportTable.css";

const ReportTable = ({ selectedData }) => {
  if (!selectedData || !selectedData.labels || !selectedData.data) {
    return <p>No data available for the selected machine.</p>;
  }

  const handleExportExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [[
      "Month",
      selectedData.label,
      "Actual Production"
    ],
    ...selectedData.labels.map((month, index) => [
        month,
        selectedData.data[index],
        selectedData.additional_data[index]
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "ReportData");

    // Create a blob containing the Excel file
    // XLSX.write(wb, { bookType: "xlsx", type: "blob" });

    // Create a link and trigger a click to download the Excel file
    const blob = XLSX.write(wb, { bookType: "xlsx",type:'binary', mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

    const arrayBuffer = new ArrayBuffer(blob.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < blob.length; i++) {
      view[i] = blob.charCodeAt(i) & 0xff;
    }

    // Create a Blob containing the ArrayBuffer
    const dataBlob = new Blob([arrayBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(dataBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report_data.xlsx";
    a.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <div className="table-container">
      <h2 style={{ color: "wheat", textAlign: "center" }}>Report Table</h2>
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
      <button style={{marginLeft:"200px",marginTop:"50px",color:"crimson",borderRadius:"5px"}} onClick={handleExportExcel}>Download</button>
    </div>
  );
};

export default ReportTable;

