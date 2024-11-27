import { useEffect, useState } from "react";
import Categorys from "./Categorys";


const Category = () => {

    const [category, setCategory]=useState([]);

    useEffect(()=>{
        fetch('../../../public/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
         <div className="my-10">
            <h1 className="text-2xl font-bold text-center">Job Category List</h1>
            <p className="text-md font-medium text-center mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <div className="grid grid-cols-4 gap-4 w-[85%] m-auto">
            {
           category.map((category, idx)=> <Categorys key={idx} category={category}></Categorys>)
            }
          </div>
        </div>
    );
};

export default Category;