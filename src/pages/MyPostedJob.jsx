import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function MyPostedJob() {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          setJobs(data);
        })
        .catch((error) => console.error("Error fetching jobs:", error));
    }
  }, [user.email]);
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Your Total Job: {jobs.length}</h1>
    </div>
  );
}
