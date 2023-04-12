import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export default function Course() {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [viewOpen, setViewOpen] = useState(false);
  const [viewOpen1, setViewOpen1] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState()
  const [image, setImage] = useState()

  function handleChange(event) {
    console.log("sxbnva",event.target.files[0]);
    setImage(event.target.files[0])
  }

  console.log("file", image);
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const getData = () => {
    axios.get("http://localhost:8000/course/viewbypage?limit=5&page=1").then(res => {
      console.log(res.data.data);
      setData(res.data.data);
    }).catch(err => {
      console.log(err.response.data.message);
    })
  }
  const deleteCourse = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/course/delete/${id}`, { headers }).then(res => {
      console.log("bcvhbvj", res.data.data);
      alert(res.data.message)
      getData()
    }).catch(err => {
      console.log(err.response);
      console.log("bchsbc");
    })
  }
  const editCourse = (id, e) => {
    e.preventDefault();

  }
  const formData = new FormData();
  formData.append('image', image);
  formData.append('name', name);
  formData.append('category', category);
  formData.append('price', price);
  formData.append('description', description);


  const insertCourse = (e) => {

    e.preventDefault()
    axios.post("http://localhost:8000/course/insertCourse", formData, { headers }).then((res) => {
      console.log(res.data.data);
      alert(res.data.message);
    }).catch((err) => {
      console.log("err", err);
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>

      <section class="wrapper">
        <button className='btns rounded text-tomato bg-white px-3 py-1 mx-3 my-3' style={{ border: "2px solid #FF7E70" }} onClick={() => { setViewOpen(true) }}>Insert Course</button>
        <div class="container-fluid">
          <div class="row">
            {
              data.map((val) => {
                return (
                  <>
                    <div class="col-md-6 col-lg-4 col-xl-3 mt-3" style={{ height: "60%" }}>
                      <div class="card-sl">
                        <div class="card-image">
                          <img
                            src={val && val.image} height="200px" width="100%" />
                        </div>

                        <p class="card-action"><i class="fa-solid fa-trash-can" onClick={(e) => deleteCourse(val._id, e)}></i></p>
                        <div class="card-heading">
                          {val.name}
                        </div>
                        <div class="card-text">
                          {val.description}
                        </div>
                        <div class="card-text">
                          {val.category}
                        </div>
                        <div class="card-text">
                          ${val.price}
                        </div>
                        <a href="#" class="card-button" onClick={(e) => editCourse(val._id, e)}>Edit</a>
                      </div>
                    </div>

                  </>
                )
              })
            }



          </div>

        </div>
      </section>
      <Modal
        show={viewOpen}
        onHide={() => setViewOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className='text-tomato'>
            Add Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" name='name' onChange={(e) => { setName(e.target.value) }} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Description" name="description" onChange={(e) => { setDescription(e.target.value) }} value={description} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" name="category" onChange={(e) => { setCategory(e.target.value) }} value={category} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" name="price" onChange={(e) => { setPrice(e.target.value) }} value={price} />
            </Form.Group>
            <button className='bg-tomato text-white px-5 py-2 rounded border-0' onClick={insertCourse}><b>SAVE</b></button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <Modal
        show={viewOpen1}
        onHide={() => setViewOpen1(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className='text-tomato'>
            Add Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Description" name="description" onChange={(e)=>{setDescription(e.target.value)}} value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={(e)=>{setFile(e.target.files[0])}} value={file}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" name="price" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            </Form.Group>
            <button className='bg-tomato text-white px-5 py-2 rounded border-0' onClick={insertCourse}><b>SAVE</b></button>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  )
}
