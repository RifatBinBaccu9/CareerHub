import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const job=useLoaderData();
    const {id}=useParams();
    const jobs=job.find(job => job.id == id);
    const {job_title}=jobs;
    
    return (
        <div>
            <h1>Job Details of:{id}</h1>
            <p>{job_title}</p>
        </div>
    );
};

export default JobDetails;