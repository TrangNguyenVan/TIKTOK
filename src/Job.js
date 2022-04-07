import { useState,useEffect } from "react";

function Jobs() {
    // const [job,setJob] = useState(''); 
    // const [jobs, setJobs] = useState(()=> {
    //   const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    //   return storageJobs || [];
    // });
   
    // const handleAdd = () => {
    //   setJobs(prev=>{
    //     const newjobs = [...prev, job]; 
    //     //Save jobs to localStorage
    //     const jsonjobs = JSON.stringify(newjobs);
    //     localStorage.setItem('Jobs: ',jsonjobs);
    //     return newjobs;
    //   });
    //   setJob('')
    // }; 
    // // console.log(job);
    // return(
    //   <div className="App" style={{padding:20}}>
    //     <input
    //       value={job}
    //       onChange={e=>setJob(e.target.value)}
    //     />
    //     <button onClick={handleAdd}>Add</button>
    //     <ul>
    //       {jobs.map((job,index)=>(
    //         <li key={index}>{job}</li>
    //       ))
    //       }
    //     </ul>
    //   </div>
    // )   

    // count
  // const storedValueAsNumber = Number(localStorage.getItem('count'));
  // const [count, setCount] = useState(
  //   Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  // );

  // useEffect(() => {
  //   localStorage.setItem('count', String(count));
  // }, [count]);

  // return (
  //   <div>
  //     <div>{count}</div>
  //     <button onClick={() => setCount((c) => c + 1)}>+</button>
  //     <button onClick={() => setCount((c) => c - 1)}>-</button>
  //   </div>
  // );

  //new
  const options = [
    "Monty Python and the Holy Grail",
    "Monty Python's Life of Brian",
    "Monty Python's The Meaning of Life"
  ];
  const filmsByTati = [
    {
      id: 1,
      title: "Jour de fête",
      releasedYear: 1949
    },
    {
      id: 2,
      title: "Play time",
      releasedYear: 1967
    },
    {
      id: 3,
      releasedYear: 1958,
      title: "Mon Oncle"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedTatiFilm, setSelectedTatiFilm] = useState(filmsByTati[0]);
  return (
    <div className="App">
      <h1>Select Example</h1>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>Selected option: {selectedOption}</span>

      <select
        value={selectedTatiFilm}
        onChange={(e) =>
          setSelectedTatiFilm(
            filmsByTati.find(film => (film.id === e.target.value))
          )
        }
      >
        {filmsByTati.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      <span>Selected option: {selectedTatiFilm.title}</span>
    </div>
  );
}
export default Jobs;