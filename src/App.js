import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";
import { tableData } from "./data";
import CustomTable from "./components/customtable/CustomTable";
import { useState } from "react";
import EditModel from "./components/EditModel/EditModel";

function App() {

  const resp = [{ id: 12, category: 'AFC', name: 'Space1', location: 'Gurgaon', status: 'Active' },
  { id: 13, category: 'ABC', name: 'Sapce2', location: 'Bangalore', status: 'inActive' },
  { id: 14, category: 'BBC', name: 'Space3', location: 'Bangalore', status: 'inActive' },
  { id: 15, category: 'DAB', name: 'Space4', location: 'Hyderabad', status: 'Active' }
  ]


  const columns = [
    { field: "id", header: "#" },
    { field: "name", header: "Name" },
    { field: "address", header: "Address" },
    { field: "date", header: "Date" },
    { field: "order", header: "Order No" },
  ];

  const [open,setOpen]=useState(false);
  const[openNodeAction,setOpenNodeAction]=useState(null);
  const[editData,setEditData]=useState(false);

  return (
    <div className="App">
      <h2>React-App</h2>
      <h4>Building a Reusable Table Component</h4>
      {/* <Table data={tableData} columns={columns} hover={true} striped={true} /> */}
      <EditModel setOpen={setOpen} onClose={()=>setOpenNodeAction(null)} openNodeAction={openNodeAction} editData={editData}/>
      <CustomTable
        headerList={{
          name: { label: 'name'},
          category: { label: 'serialNumber' }, status: { label: 'status' }, location: { label: 'State' },
          userActions:{
            label:"actions",
            actions:[
              {
                label:"edit",
                type:'edit',
                onClick:(event,data)=>{
                  console.log("hai iam in edit Page")
                  setOpen(true);
                  setOpenNodeAction(event.currentTarget);
                  setEditData(data);
                }
              }]
          }
        }}
        cellMatrix={resp}
      />
    </div>
  );
}

export default App;
