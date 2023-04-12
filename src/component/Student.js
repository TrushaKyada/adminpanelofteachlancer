import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
export default function Student() {
    // const data = [,{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"},{"Name":"Trusha Kyada","Price":"100","Description":"abcd"}]
    const [data,setData] = useState([]);
    const [viewOpen,setViewOpen] = useState(false)
    const [profile,setProfile] = useState("");
    // const [search,setSearch] = useState[""];
    const token = localStorage.getItem("token");
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    const getData = () =>{
      axios.get("http://localhost:8000/auth/students",{headers}).then(response =>{
        console.log(response);
        setData(response.data.data)
      }).catch(error =>{
        console.log("error: " + error);
      })
    }
    const viewById1 = (id) => {
      axios.get(`http://localhost:8000/auth/student/${id}`,{headers}).then(response =>{
        setViewOpen(true);
        setProfile(response.data.info)
      }).catch(error =>{
          alert(error.response.data.message);
      })
    }
    const deletestud = (id) => {
      axios.delete(`http://localhost:8000/auth/delete/${id}`,{headers}).then(response => {
        alert(response.data.message);
        getData();
      }).catch(error => {
        alert(error.response.data.message);
      })
    }
    useEffect(() => {

      getData();

  }, [])

    const columns = [
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
        },
        {
          name:"Course",
          selector: (row) => row.course,
          sortable:true,
        },
        {
          name:"Fees",
          selector: (row) => row.fees
        },
        {
          name: "Action",
          cell: (row) => (
            <>
              <VisibilityIcon
                onClick={() => viewById1(row._id)}
                className="mx-lg-2 mx-md-3 text-tomato"
              ></VisibilityIcon>
              <DeleteIcon
                onClick={() => deletestud(row._id)}
                className="mx-lg-2 mx-md-3 text-tomato"
              ></DeleteIcon>
            </>
          ),
        },
      ];
  return (
    <>
    <div className='row p-5'>
        <div className='px-5'>
        <DataTable
           className='bg-light-tomato'
            title="Student List"
            columns={columns}
            data={data}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="650px"
            highlightOnHover
            subHeader
            subHeaderComponent={
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="search"
                  className="w-50 form-control"
                  // value={search}
                  // onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            }
          />
        </div>
    </div>
    <Modal
        show={viewOpen}
        onHide={() => setViewOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Student Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex justify-content-center'>
            <img src={profile.image} height="40%" width="40%"></img>
          <div className='d-block'>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{profile.name}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{profile.email}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{profile.course}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{`${profile.fees}`}$</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{profile.gender}</p></div>
          </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
