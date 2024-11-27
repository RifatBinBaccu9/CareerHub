import PropTypes from 'prop-types';

const Categorys = ({category}) => {
    const {logo, category_name, availability}=category;
    return (
        <div className='bg-[#F9F8FF] p-7 rounded-md mb-5'>
            <img className='text-xl' src={logo} alt={category_name} />
            <h1 className='text-xl font-bold mt-4 mb-2'>{category_name}</h1>
            <p className='text-md font-medium'>{availability}</p>
        </div>
    );
};
Categorys.propTypes={
    category: PropTypes.object
}
export default Categorys;