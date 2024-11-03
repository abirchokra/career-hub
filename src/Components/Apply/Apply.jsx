import { Link, useLoaderData, useParams } from 'react-router-dom';
import bgImg from '../../assets/bg1.png'
import bgImgTwo from '../../assets/bg2.png'

const Apply = () => {
    const { job_id } = useParams();
    const id = parseInt(job_id);
    const data = useLoaderData();
    const job = data.find(job => job.job_id === id)
    const {job_id : currentJob_id,company_img,salary,job_title,location,company_name,job_type} = job;
 
    
    return (
        <div>
            <div className="bg-gray-100 text-center md:flex items-center justify-between">
                <img src={bgImg} alt="" />
                <h2 className="font-bold text-4xl">Applied Jobs</h2>
                <img src={bgImgTwo} alt="" />
            </div>
            <div className='flex justify-between my-4'>
                <h2></h2>
                <button className="btn btn-active">Filter By</button>
            </div>
            <div className='space-y-3 my-4'>
                <div className='border border-gray-200 p-4 rounded-lg shadow-lg flex justify-around items-center'>
                  <div>
                    <img src={company_img} alt="" />
                  </div>
                  <div className='space-y-1'>
                    <h2 className='font-bold'>{job_title}</h2>
                    <h3>{company_name}</h3>
                    <button className="btn">{job_type}</button>
                    <div className='flex gap-3'>
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                    

                  </div>
                  <div>
                  <Link to={`/jobDetails/${job_id}`}><button  className="btn bg-purple-500">View Details</button></Link>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Apply;