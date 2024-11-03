import { useLoaderData, useParams } from "react-router-dom";
import bgImg from '../../assets/bg1.png'
import bgImgTwo from '../../assets/bg2.png'

const JobDetails = () => {
    const { job_id } = useParams();
    const id = parseInt(job_id);
    const data = useLoaderData();
    const job = data.find(job => job.job_id === id)
    const {job_id : currentJob_id,company_img, job_details, job_responsibility,educational_qualifications,experience, salary,job_title,phone,email,location} = job;
    
    return (
        <div>
            <div className="bg-gray-100 text-center md:flex items-center justify-between">
                <img src={bgImg} alt="" />
                <h2 className="font-bold text-4xl">Job Details</h2>
                <img src={bgImgTwo} alt="" />
            </div>
            <div className="md:flex justify-between gap-4 my-6">
                <div className="space-y-4">
                    <div className="md:flex justify-center">
                    <img  src={company_img} alt="" />
                    </div>
                    <p><span className="font-bold">Job Description:</span> {job_details}</p>
                    <p><span className="font-bold">Job Responsibility:</span> {job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span><br />{educational_qualifications}</p>
                    <p><span className="font-bold">Experience:</span><br />{experience}</p>
                </div>
                <div className="bg-[rgb(244,242,255)] space-y-2 p-9 rounded-lg w-[1000px]">
                    <h2 className="text-xl font-bold">Job Details</h2>
                    <div className="divider"></div>
                    <p><span className="font-bold">Salary:</span> {salary}</p>
                    <p><span className="font-bold">Job Title:</span> {job_title}</p>
                    <h2 className="text-xl font-bold">Contact Information</h2>
                    <div className="divider"></div>
                    <p><span className="font-bold">Phone:</span> {phone}</p>
                    <p><span className="font-bold">Email:</span> {email}</p>
                    <p><span className="font-bold">Address:</span> {location}</p>
                    <div>
                    <button className="btn md:w-full font-bold p-2 bg-purple-600 text-white">Apply Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default JobDetails;