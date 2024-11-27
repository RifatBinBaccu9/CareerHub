import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <Link to={'/'}>Go to home</Link>
        </div>
    );
};

export default Error;