import { useEffect, useState } from "react"
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import jobData from "./JobDummyData"
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config"
import Login from "./components/Login";

function App() {
   const [jobs, setJobs] = useState([]);
   const [customSearch, setCustomSearch] = useState(false);

   //authentication h 
   const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);

const handleLogout = () => {
  setIsLoggedIn(false);
};

   const fetchJobs = async () => {
      setCustomSearch(false)
      const tempJobs = [];
      const jobsRef = query(collection(db, "jobs"));
      const q = query(jobsRef, orderBy("postedOn", "desc"));
      const req = await getDocs(q);
      req.forEach((job) => {
         // console.log(doc.id, " => ", doc.data());
         tempJobs.push({
            ...job.data(),
            id: job.id,
            postedOn: job.data().postedOn.toDate()
         })
      });
      setJobs(tempJobs);
   }

   const fetchJobsCustom = async (jobCriteria) => {
      setCustomSearch(true)
      const tempJobs = [];
      const jobsRef = query(collection(db, "jobs"));
      const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"));
      const req = await getDocs(q);
      req.forEach((job) => {
         // console.log(doc.id, " => ", doc.data());
         tempJobs.push({
            ...job.data(),
            id: job.id,
            postedOn: job.data().postedOn.toDate()
         })
      });
      setJobs(tempJobs);
   }


   useEffect(() => {
      fetchJobs()
   }, [])

   return (
  <div>
    {!isLoggedIn ? (
      <Login onLogin={() => setIsLoggedIn(true)} />
    ) : (
      <>
        <Navbar onLogout={handleLogout} />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom} />

        {customSearch && (
          <div className="flex justify-end px-4 sm:px-6 md:px-10 mb-4">
            <button
              onClick={fetchJobs}
              className="bg-blue-500 hover:bg-blue-600 
              px-6 sm:px-8 py-2 
              rounded-md text-white 
              font-semibold transition"
            >
              Clear Filter
            </button>
          </div>
        )}

        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </>
    )}
  </div>
);
}

export default App
