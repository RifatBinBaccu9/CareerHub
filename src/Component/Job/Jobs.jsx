import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";

const Jobs = ({job}) => {

    const {id,job_title,company_name,logo,job_type,remote_or_onsite,location,salary}=job;

    return (
        <div className='border rounded-md p-10'>
            <img src={logo} alt={company_name} />
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
           <Link to={`/job/${id}`}>
           <button className='btn my-2'>View Details</button>
           </Link>
        </div>
    );
};
Jobs.propTypes={
    job: PropTypes.object
}
export default Jobs;