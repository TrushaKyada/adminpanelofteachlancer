import React from 'react'
import { useState } from 'react';
import Course from './Course';
import Dashboard from './Dashboard';
import Review from './Review';
import Student from './Student';
import Teacher from './Teacher';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Nav() {
    const [open, setOpen] = useState(false);
    const [openDashboard, setOpenDashboard] = useState(true);
    const [openStudent, setopenStudent] = useState(false);
    const [openTeacher, setopenTeacher] = useState(false);
    const [openCourse, setopenCourse] = useState(false);
    const [openReview, setopenReview] = useState(false);
    const sidebarHandle = () => {
        if (open == true) {

            setOpen(false);
        }
        else {
            setOpen(true);
        }

    }
    const dashboardHandle = () => {
        setOpenDashboard(true);
        setopenTeacher(false);
        setopenStudent(false);
        setopenCourse(false);
        setopenReview(false);
    }
    const studentHandle = () => {
        setOpenDashboard(false);
        setopenTeacher(false);
        setopenStudent(true);
        setopenCourse(false);
        setopenReview(false);
    }
    const teacherHandle = () => {
        setOpenDashboard(false);
        setopenTeacher(true);
        setopenStudent(false);
        setopenCourse(false);
        setopenReview(false);
    }
    const courseHandle = () => {
        setOpenDashboard(false);
        setopenTeacher(false);
        setopenStudent(false);
        setopenCourse(true);
        setopenReview(false);
    }
    const reviewHandle = () => {
        setopenReview(true);
        setOpenDashboard(false);
        setopenTeacher(false);
        setopenStudent(false);
        setopenCourse(false);
    }
    const logout  = () =>{
        localStorage.removeItem('token');
        window.location = "/";
    }
    return (
        <>
            <div class="d-flex" id="wrapper">
                {/* <!-- Sidebar--> */}
                <div class="border-end bg-light" id="sidebar-wrapper" style={{ display: `${open ? "block" : "none "}` }}>
                    <div class="sidebar-heading border-bottom bg-light py-3 d-flex">
                        {/* <img src="/images/profile.jpg" height="10%" width="2%" className='rounded-circle'></img> */}
                        <AdminPanelSettingsIcon className='text-tomato'></AdminPanelSettingsIcon><h5 className='mb-0 mx-3 text-center'>Admin</h5>
                    </div>
                    <div class="list-group list-group-flush">
                        <a class="list-group-item list-group-item-action text-dark list-group-item-light p-3 d-flex" onClick={dashboardHandle}><DashboardIcon className='text-tomato'></DashboardIcon> <p className='mb-0 mx-3'>Dashboard</p></a>
                        <a class="list-group-item list-group-item-action text-dark list-group-item-light p-3 d-flex" onClick={studentHandle}><GroupAddIcon className='text-tomato'></GroupAddIcon><p className='mb-0 mx-3'>Students</p></a>
                        <a class="list-group-item list-group-item-action text-dark list-group-item-light p-3 d-flex" onClick={teacherHandle}><CastForEducationIcon className='text-tomato'></CastForEducationIcon><p className='mb-0 mx-3'>Sales Talent</p></a>
                        <a class="list-group-item list-group-item-action text-dark list-group-item-light p-3 d-flex" onClick={courseHandle}><SchoolIcon className='text-tomato'></SchoolIcon><p className='mb-0 mx-3'>Courses</p></a>
                        <a class="list-group-item list-group-item-action text-dark list-group-item-light p-3 d-flex" onClick={reviewHandle}><RateReviewIcon className='text-tomato'></RateReviewIcon><p className='mb-0 mx-3'>Review</p></a>

                    </div>
                </div>
                {/* <!-- Page content wrapper--> */}
                <div id="page-content-wrapper">
                    {/* <!-- Top navigation--> */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div class="container-fluid">
                            <button class="btn bg-tomato" onClick={sidebarHandle}><i class="fa-solid fa-list text-tomato"></i></button>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li class="nav-item active"><a class="nav-link p-1" href="#!"><button className='btns rounded text-tomato bg-white px-3 py-1' onClick={logout} style={{border:"2px solid #FF7E70"}}>Log Out <LogoutIcon></LogoutIcon></button></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Page content--> */}
                    <div class="container-fluid h-100">
                        <div style={{ display: `${openDashboard ? "block" : "none "}` }}>
                            <Dashboard></Dashboard>
                        </div>
                        <div style={{ display: `${openStudent ? "block" : "none "}` }}>
                            <Student></Student>
                        </div>
                        <div style={{ display: `${openTeacher ? "block" : "none "}` }} >
                            <Teacher></Teacher>
                        </div>
                        <div style={{ display: `${openCourse ? "block" : "none "}` }} >
                            <Course></Course>
                        </div>
                        <div style={{ display: `${openReview ? "block" : "none "}` }} >
                            <Review></Review>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
