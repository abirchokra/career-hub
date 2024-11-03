import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const Main = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    return (
        
        <div className="my-4 space-y-4 mt-6">
            <h2 className="font-bold text-5xl text-center">Featured Jobs</h2>
            <p className="text-gray-400 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-6 ">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
            <button class="btn btn-active bg-purple-500 px-8">See All Jobs</button>
            </div>
        </div>
    );
};

export default Main;