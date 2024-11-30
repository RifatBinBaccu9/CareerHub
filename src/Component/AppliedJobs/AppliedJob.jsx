import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { Link } from 'react-router-dom';

const AppliedJob = ({job}) => {
    const {id,job_title,company_name,logo,job_type,remote_or_onsite,location,salary}=job;
    return (
        <div className='flex gap-5 border p-7 rounded-xl my-5'>
            <div className=' w-[30%]  justify-center items-center text-center rounded-xl pt-16 bg-[#F0F0F0]'>
             <span><img className='w-40 mx-auto' src={logo} alt="" /></span>
            </div>

            <div className='w-[70%] flex justify-between'>
              <div>
               <div>
               <h1 className='font-bold text-xl my-2'>{job_title}</h1>
            <h4 className='font-medium text-lg'>{company_name}</h4>
            <div className='flex gap-6 my-2'>
                <span className='border border-[#4897FE] p-2 rounded-md'>{remote_or_onsite}</span>
                <span className='border border-[#4897FE] p-2 rounded-md'>{job_type}</span>
            </div>
            <div className='flex gap-5'>
                <div className='flex'>
                    <IoLocationOutline className='mt-1'/>
                    <span> {location}</span>
                </div>
                <div className='flex'>
                <FiDollarSign className='mt-1'/>
                    <span> Salary:{salary}</span>
                </div>
            </div>
               </div>
              </div>

              <div className='my-auto'>
                <Link to={`/appliedJob/${id}`}>
                <button className="btn">View Details</button>
                </Link>
              </div>
            </div>
        </div>
    );
};
AppliedJob.propTypes={
    job: PropTypes.object
}
export default AppliedJob;