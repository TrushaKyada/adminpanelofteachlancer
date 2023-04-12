import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';  
export default function Teacher() {
    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    const [data, setData] = useState([]);
    const [viewOpen, setViewOpen] = useState(false);
    const [viewOpen1,setViewOpen1] = useState(false);
    const [viewOpen2,setViewOpen2] = useState(false);
    const [teacher,setTeacher] = useState("")
    const getData = () => {
      axios.get("http://localhost:8000/salestalent/list",{headers}).then((res)=>{
        console.log("cgzxh",res.data);
        setData(res.data.data)
      }).catch((err)=>{
        console.log(err.response.data.message);
      })
    }
    const deletestaff = async(id,e) => {
      e.preventDefault();
      await axios.delete(`http://localhost:8000/salestalent/delete/${id}`,{headers}).then((res)=>{
        alert(res.data.message);
        getData();
      }).catch((err)=>{
        alert(err.response.data.message)
      })
    }
    const viewById = async(id,e)=>{
      e.preventDefault();
      setViewOpen1(true)
      await axios.get(`http://localhost:8000/salestalent/view/${id}`,{headers}).then((res)=>{
        setTeacher(res.data.data)
      }).catch((err)=>{
        alert(err.response.data.message);
      })
    }
    const viewById1 = async(id) => {
      setViewOpen2(true)
      await axios.get(`http://localhost:8000/salestalent/view/${id}`,{headers}).then((res)=>{
        setTeacher(res.data.data)
      }).catch((err)=>{
        alert(err.response.data.message);
      })
    }
    const handleChange = async(e)=>{
      
    }
    const editHandler = async(id) => {

    }
    useEffect(()=>{ 
      getData();
    },[])
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
          name: "Phone",
          selector: (row) => row.phone,
          sortable: true,
        },
        {
          name: "Age",
          selector: (row) => row.age,
          sortable: true,
        },{
          name: "Course",
          selector: (row) => row.course,
          sortable: true,
        },
        {
          name: "Experience",
          selector: (row) => row.experience,
          sortable: true,
        },
        {
          name: "action",
          cell: (row) => (
            <>
              <EditIcon
                onClick={(e) => viewById(row._id,e)}
                className="mx-lg-2 mx-md-1 text-tomato"
              ></EditIcon>
              <VisibilityIcon
                onClick={() => viewById1(row._id)}
                className="mx-lg-2 mx-md-1 text-tomato"
              ></VisibilityIcon>
              <DeleteIcon
                onClick={(e) => deletestaff(row._id,e)}
                className="mx-lg-2 mx-md-1 text-tomato"
              ></DeleteIcon>
            </>
          ),
        },
      ];
  return (
    <>
    <div className='row pt-5'>
        <div >
        <DataTable
           className='bg-light-tomato'
            title="Sales Talent List"
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
                //   value={search}
                //   onChange={(event) => setSearch(event.target.value)}
                />
                <button
                  className="bg-tomato border-0 text-white py-2 px-3 rounded"
                  onClick={()=>{setViewOpen(true)}}
                >
                  Insert item
                </button>
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
          <Modal.Title id="example-custom-modal-styling-title" className='text-tomato'>
            Add Sales Talent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" name="email" />
            </Form.Group>
            <div className='d-flex justify-content-between  '>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" name='name'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" name="phone" />
            </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image"/>
            </Form.Group>
            <div className='d-flex justify-content-between'>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Education</Form.Label>
              <Form.Control type="text" placeholder="Enter Education" name="education" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter age" name="age"/>
            </Form.Group>
            </div>
         
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" placeholder="Enter Course" name="course"/>
            </Form.Group>
            <div className='d-flex justify-content-between'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" placeholder="Enter Experience" name="experience"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter salary" name="salary" />
            </Form.Group>
            </div>
            <button className='bg-tomato text-white px-5 py-2 rounded border-0'><b>SAVE</b></button>
          </Form>
        </Modal.Body>
    </Modal>
    <Modal
        show={viewOpen1}
        onHide={() => setViewOpen1(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className='text-tomato'>
            Edit Sales Talent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" name="email" onChange={(e)=>handleChange(e)} value={teacher.email}/>
            </Form.Group>
            <div className='d-flex justify-content-between'>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" name='name' onChange={(e)=>handleChange(e)} value={teacher.name}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={(e)=>handleChange(e)} value={teacher.phone}/>
            </Form.Group>
            </div>
            <div className='d-flex justify-content-between'>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control type="text" placeholder="Enter Education" name="education" onChange={(e)=>handleChange(e)} value={teacher.education}/>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter age" name="age" onChange={(e)=>handleChange(e)} value={teacher.age}/>
            </Form.Group>
            </div>
         
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" placeholder="Enter Course" name="course" onChange={(e)=>handleChange(e)} value={teacher.course}/>
            </Form.Group>
            <div className='d-flex justify-content-between'>
            <Form.Group className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" placeholder="Enter Experience" name="experience" onChange={(e)=>handleChange(e)} value={teacher.experience}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter salary" name="salary" onChange={(e)=>handleChange(e)} value={teacher.salary}/>
            </Form.Group>
            </div>
            <button className='bg-tomato text-white px-5 py-2 rounded border-0' onClick={(e)=>editHandler(teacher._id,e)}><b>SAVE</b></button>
          </Form>
        </Modal.Body>
    </Modal>
    <Modal
        show={viewOpen2}
        onHide={() => setViewOpen2(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sales Talent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex justify-content-center'>
            <img src={teacher.image} height="40%" width="40%"></img>
          <div className='d-block'>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{teacher.name}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{teacher.email}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{teacher.course}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{`${teacher.salary}`} $</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{teacher.phone}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>Age : {teacher.age}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>{teacher.education}</p></div>
            <div className='border border-light bg-light my-2 p-2 rounded-pill d-flex' style={{width:"100%"}}><p className='px-2 mb-0'>Experince : {teacher.experience}</p></div>
          
          </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
