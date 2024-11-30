const getSaveJobApllication= () =>{
    const storJob=localStorage.getItem('get-item');

    if(storJob){
        return JSON.parse(storJob);
    }
    return [];
}
const SaveJobApllication= id =>{
 const getingSaveJob=getSaveJobApllication();
  const jobApp=getingSaveJob.find(jobId => jobId === id);

  if(!jobApp){
    getingSaveJob.push(id);
    localStorage.setItem('get-item',JSON.stringify(getingSaveJob))
  }
}

export {getSaveJobApllication, SaveJobApllication}