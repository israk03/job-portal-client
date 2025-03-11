import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

export default function HotJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, []);
  return (
    <div className="my-10">
      <div className="text-center my-6">
        <h2 className="text-3xl font-semibold text-blue-600">
          Jobs of the day
        </h2>
        <p className="text-sm text-gray">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
}
