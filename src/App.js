import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";
import { tableData } from "./data";
import CustomTable from "./components/customtable/CustomTable";

function App() {

  const resp = [{ id: 12, category: 'abc 12', name: 'spacename 12', location: 'gurgaon', status: 'active' },
  { id: 13, category: 'abc 13', name: 'spacename 13', location: 'bangalore', status: 'inactive' },
  { id: 13, category: 'abc 13', name: 'spacename 13', location: 'bangalore', status: 'inactive' },
  { id: 13, category: 'abc 13', name: 'spacename 13', location: 'bangalore', status: 'inactive' }
  ]



  const columns = [
    { field: "id", header: "#" },
    { field: "name", header: "Name" },
    { field: "address", header: "Address" },
    { field: "date", header: "Date" },
    { field: "order", header: "Order No" },
  ];

  return (
    <div className="App">
      <h2>React-App</h2>
      <h4>Building a Reusable Table Component</h4>
      {/* <Table data={tableData} columns={columns} hover={true} striped={true} /> */}
      <CustomTable
        headerList={{
          name: { label: 'heading 1'},
          category: { label: 'heading 2' }, status: { label: 'heading 3' }, location: { label: 'heading 4' },
          userActions:{
            label:"actions",
            actions:[
              {
                label:"edit",
                type:'edit',
                onclick:()=>{}
              }
            ]
          }
        }}
        cellMatrix={resp}
      />
    </div>
  );
}

export default App;
