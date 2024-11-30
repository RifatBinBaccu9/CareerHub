import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSaveJobApllication } from "../../Utiliti/localStor";
import AppliedJob from "./AppliedJob";
import { IoIosArrowDown } from "react-icons/io";


const AppliedJobs = () => {
 const [appliedJob, setAppliedJob]=useState([])
 const [jobDesplay, setJobDesplay]=useState([]);
 
 const jobs=useLoaderData()
 
 const handelJobsFilter= filter =>{
    if (filter === 'all') {
        setJobDesplay(appliedJob);

    }else if(filter === 'remote'){
      const remoteJobs=appliedJob.filter(job => job.remote_or_onsite === 'Remote');
      setJobDesplay(remoteJobs);

    }else if(filter === 'onsite'){
      const onsiteJobs=appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
      setJobDesplay(onsiteJobs);

    }
    }

 useEffect(()=>{
    const stordeJobData=getSaveJobApllication();

    if(jobs.length > 0){
        const jobsApllied=jobs.filter(job => stordeJobData.includes(job.id));

        setAppliedJob(jobsApllied);
        setJobDesplay(jobsApllied);
    }
 },[jobs]);
 
    return (
        <div className="w-[85%] m-auto">
            <h1 className="text-center text-xl font-extrabold my-8">Applied Jobs</h1>
            <div className="flex justify-between">
                <div></div>
                <div className="dropdown">
             <div tabIndex={0} role="button" className="btn m-1">Filter <IoIosArrowDown /></div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
                  <li onClick={()=>handelJobsFilter('all')}><a>All</a></li>
                  <li onClick={()=>handelJobsFilter('remote')}><a>Remote</a></li>
                  <li onClick={()=>handelJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
             </div>
            </div>
          

            <div>
                {
                    jobDesplay.map((job, idx)=> <AppliedJob key={idx} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;