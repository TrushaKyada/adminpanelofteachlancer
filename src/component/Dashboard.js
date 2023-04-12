import React from 'react'
import { Chart } from "react-google-charts";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
export default function Dashboard() {
    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];
    const data1 = [
        ["x", "dogs", "cats"],
        [0, 0, 0],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
        [5, 9, 5],
        [6, 11, 3],
        [7, 27, 19],
    ];
    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
    };
    const options1 = {
        hAxis: {
            title: "Time",
        },
        vAxis: {
            title: "Popularity",
        },
        series: {
            1: { curveType: "function" },
        },
    };
    return (
        <>
            <div className='row justify-content-around'>
                <div className='col-md-4 px-3 my-3'>
                    <div className='px-4 py-5 d-flex justify-content-between border-0 rounded align-items-center box'>
                       <div>
                       <h4>5</h4>
                        <p>Students</p>
                       </div>
                       <GroupAddIcon className='text-tomato fss-1'></GroupAddIcon>
                    </div>
                </div>
                <div className='col-md-4 px-3 my-3'>
                    <div className='px-4 py-5 d-flex justify-content-between border-0 rounded align-items-center box'>
                        <div>
                            <h4>5</h4>
                            <p>Sales Telent</p>
                        </div>
                       <CastForEducationIcon className='text-tomato fss-1'></CastForEducationIcon>
                    </div>
                </div>
                <div className='col-md-4 px-3 my-3'>
                    <div className='px-4 py-5 d-flex justify-content-between border-0 rounded align-items-center box'>
                        <div>

                        <h4>5</h4>
                        <p>Cousers</p>
                        </div>
                        <SchoolIcon className='text-tomato fss-1'></SchoolIcon>
                    </div>
                </div>
            </div>
            <div className='row mt-5 justify-content-between'>
                <div className='col-lg-6 pt-4'>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
                <div className='col-lg-6 pt-4'>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        </>
    )
}
