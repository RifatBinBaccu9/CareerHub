import { useLoaderData, useParams } from "react-router-dom";
import { FiDollarSign } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

const AppliedJobDetails = () => {
    const appliedDetail=useLoaderData();
    const {id}=useParams();
    const idxInt=parseInt(id);

    const appliedJobDet=appliedDetail.find(applied => applied.id == idxInt);
    
    const {job_title,job_description,job_responsibility,
        educational_requirements,experiences,salary,contact_information}=appliedJobDet;
        const {email,phone,address}=contact_information;
    
    return (
        <div>
           <div className="flex gap-10 w-[85%] m-auto my-16">
            <div className="w-[60%] ">
             <p className="pb-3"><span className="text-lg font-medium ">Job Description:</span>{job_description}</p>
             <p><span className="text-lg font-medium py-3">Job Responsibility:</span>{job_responsibility}</p>
             <p className="py-3">
             <span className="text-lg font-medium">Educational Requirements:</span>
             <span>{educational_requirements}</span>
             </p>
             <p className="py-3">
                <span className="text-lg font-medium ">Experiences:</span>
                <span>{experiences}</span>
             </p>
            </div>
            <div className="w-[40%] ">
            <div className="bg-[#F4F2FF] p-6 rounded-lg">
            <h1 className="text-xl font-bold">Job Details</h1>
            <hr />
            <p className="flex gap-2 my-2"><FiDollarSign className='mt-1'/><span>Salary : {salary} (Per Month)</span></p>
            <p className="flex gap-2 my-2"><MdDateRange className='mt-1'/> <span>Job Title :{job_title}</span></p>
            
            <p className="text-xl font-bold">Contact Information</p>
            <hr />
            <p className="flex gap-2 my-2"><FaPhone className='mt-1'/><span>Phone :{phone}</span> </p>
            <p className="flex gap-2 my-2"><IoMailOutline className='mt-1'/><span>Email :{email}</span> </p>
            <p className="flex gap-2 my-2"><MdLocationPin className='mt-1'/><span>Address :{address}</span> </p>

            </div>
            </div>
        </div>
        </div> 
    );
};

export default AppliedJobDetails;