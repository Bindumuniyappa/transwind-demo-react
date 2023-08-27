import machine_1 from "../../Components/Machine_images/200AUD.png";
import machine_2 from "../../Components/Machine_images/CTL-250.png"
import machine_3 from "../../Components/Machine_images/TCW-1200.png"
import machine_4 from "../../Components/Machine_images/TSW-800.png"
import machine_5 from "../../Components/Machine_images/TTW-1000-LV.png"

const products=[
    {
id:1,
title:"200AUD",
image:machine_1,
category:"Active"
},
{
    id:2,
    title:"CTL-250",
    image:machine_2,
    category:"Offline" 
},
{
    id:3,
title:"TCW-1200",
image:machine_3,
category:"Active"
},
{
    id:4,
title:"TSW-800",
image:machine_4,
category:"Active"
},
{
    id:5,
title:"TTW-1000-LV",
image:machine_5,
category:"Offline"
}]

export default products;