import { useEffect, useState } from "react";
import Jobs from "./Jobs";


const Job = () => {

    const [job, setJob]=useState([]);

    const [dataLength, setDataLangth]=useState(4);

    useEffect(()=>{
        fetch('../../../public/jobs.json')
        .then(res => res.json())
        .then(data => {
            setJob(data)
        })
    },[])
    return (
        <div className="w-[85%] mx-auto my-8">
            <h1 className="text-center text-2xl font-bold my-3">Featured Jobs</h1>
            <p className="text-center text-md font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 mt-10">
                {
            job.slice(0, dataLength).map((job, idx)=> <Jobs key={idx} job={job}></Jobs>)
                }
            </div>
            <div className={"text-center my-8"}>
                <div className={dataLength == job.length && 'hidden'}>
                <button  onClick={()=> setDataLangth(job.length)} className="btn"> Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Job;