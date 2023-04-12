import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Review() {
  const token = localStorage.getItem('token');
  const [data, setData] = useState("");
  const [open,setOpen] = useState("");

  var headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const getData = () => {
    axios.get("http://localhost:8000/review/viewReview", { headers }).then((result) => {
      setData(result.data.data);
    }).catch((err) => {
      console.log(err.response.data);
    });
 
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <section>
        <div class="row text-center d-flex align-items-stretch">
          {data && data.map((val) => {
              return (
                <>
                  <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
                    <div class="card testimonial-card">
                      <div class="card-up" style={{ backgroundColor: "#f8e1df" }}></div>
                      <div class="avatar mx-auto bg-white">
                        <img src={val.profile}
                          class="rounded-circle img-fluid" />
                      </div>
                      <div class="card-body">
                        <h4 class="mb-4">{val.user_name}</h4>
                        <p>{val.course_name}</p>
                        <hr />
                        <p class="dark-grey-text mt-4">
                          <i class="fas fa-quote-left pe-2"></i>{val.review}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
          {/* <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">Lisa Cudrow</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
            repudi mollitia architecto.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch mt-5">
      <div class="card testimonial-card">
        <div class="card-up" style={{backgroundColor:"#f8e1df"}}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
        </div>
      </div>
    </div> */}
        </div>
      </section>

    </>
  )
}
