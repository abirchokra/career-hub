import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {job_title,salary,location,job_type, company_name, company_img,job_id} = job;
    return (
        <div className='border border-gray-400 p-4 rounded-lg shadow-lg space-y-2'>
            <img src={company_img} alt="" />
            <h2 className='font-bold text-2xl'>{job_title}</h2>
            <p className='text-gray-600'>{company_name}</p>
            <button className='border border-gray-300 p-2 rounded-xl bg-blue-100 px-3'>{job_type}</button>
            <div className='flex gap-4 items-center'>
            <p><span className='font-bold'>Location:</span>  {location}</p>
            <p><span className='font-bold'>Salary:</span> {salary}</p>
            </div>
           <Link to={`/jobDetails/${job_id}`}> <button className='bg-purple-400 text-white rounded-lg p-2 md:w-[140px] mt-3'>View Details</button></Link>
            
        </div>
    );
};

export default Job;