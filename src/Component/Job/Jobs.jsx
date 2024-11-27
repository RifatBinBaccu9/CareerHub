import PropTypes from 'prop-types';

const Jobs = ({job}) => {

    const {job_title,company_name,logo,job_type,remote_or_onsite,location,salary}=job;

    return (
        <div className='border rounded-md p-6'>
            <img src={logo} alt={company_name} />
            <h1>{job_title}</h1>
            <h4>{company_name}</h4>
            <div className='flex gap-6'>
                <span className='border border-[#4897FE] p-2 rounded-md'>{remote_or_onsite}</span>
                <span className='border border-[#4897FE] p-2 rounded-md'>{job_type}</span>
            </div>
            <div className='flex gap-5'>
                <div>
                    <span> {location}</span>
                </div>
                <div>
                    <span> Salary:{salary}</span>
                </div>
            </div>
            <button className='btn'>View Details</button>
        </div>
    );
};
Jobs.propTypes={
    job: PropTypes.object
}
export default Jobs;