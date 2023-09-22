import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import SideNavbar from "../NavBar/SideNavbar";
import { Line } from "react-chartjs-2";
import "../styles/Reportpage.css";
import { Chart, registerables} from 'chart.js';
import { LineController } from 'chart.js';

Chart.register(LineController, ...registerables);

  const Report = () => {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [showInputContainer, setShowInputContainer] = useState(false);

  const handleChange = (event) => {
    setSelectedMachine(event.target.value);
    setShowInputContainer(true);
  };

  const machineData = {
    machine_1: {
      label: "Monthly Production",
      data: [10, 20, 15, 25, 30, 20, 25, 30],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      yAxisID: "y-axis-1",
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    },
    machine_1_Additional_axis:{
      label:"Additional Data",
      data:[20, 10, 15, 20, 25, 30, 35, 20],
      borderColor:"rgba(10,192,192,0.8)",
      borderWidth:2,
      yAxisID:"y-axis-2",
    },
    machine_2: {
      label: "Monthly Production",
      data: [15, 25, 20, 25, 35, 25, 30, 35],
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      // yAxisID: "y-axis-1",
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    },
    machine_3: {
      label: "Monthly Production",
      data: [0, 30, 25, 15, 30, 20, 35, 25],
      borderColor: "rgba(0, 0, 255, 1)",
      borderWidth: 2,
      // yAxisID: "y-axis-1",
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    },
    machine_4: {
      label: "Monthly Production",
      data: [25, 35, 20, 35, 35, 30, 35, 30],
      borderColor: "rgba(75, 0, 255, 1)",
      borderWidth: 2,
      // yAxisID: "y-axis-1",
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    },
    machine_5: {
      label: "Monthly Production",
      data: [10, 25, 20, 15, 20, 15, 25, 30],
      borderColor: "rgba(255, 0, 255, 1)",
      borderWidth: 2,
      // yAxisID: "y-axis-1",
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    },
  };

  const options = {
    scales: {
      yAxes:[ {
        id:"y-axis-1",
        type:"linear",
        position:"left",
        beginAtZero: true,
        responsive: true,
      },
      {
        id:"y-axis-2",
        type:"linear",
        position:"right",
        beginAtZero:true,
        responsive:true,
      }
    ],
    },
  };

  const selectedData = machineData[selectedMachine];

  return (
    <div>
      <Navbar />
      <div className="Dropdown_div">
        <select value={selectedMachine} onChange={handleChange}>
          <option >select</option>
          <option value="machine_1">200AUD</option>
          <option value="machine_2">CTL-250</option>
          <option value="machine_3">TCW-1200</option>
          <option value="machine_4">TSW-800</option>
          <option value="machine_5">TTW-1000-LV</option>
        </select>
      </div>
      {showInputContainer && (
        <div className="input_container">
          <input type="date" placeholder="Start" />
          <input type="date" placeholder="End" />
        </div>
      )}
      <div className="graph_container">
        {selectedData && selectedData.labels && selectedData.data ? (
          <Line
            data={{
              labels: selectedData.labels,
              datasets: [
                {
                  label: selectedData.label,
                  data: selectedData.data,
                  borderColor: selectedData.borderColor,
                  borderWidth: selectedData.borderWidth,
                  yAxisID:"y-axis-1",
                },{
                  label:"Additional Data",
                  data:selectedData.additional_data,
                  borderColor:selectedData.additional_axis_color,
                  borderWidth:2,
                  yAxisID:"y-axis-2",
                },
              ],
            }}
            options={options}
          />
        ) : (
          <p style={{ color: "white" }}>
            No data available for the selected machine.
          </p>
        )}
      </div>
      <SideNavbar />
    </div>
  );
};

export default Report;
