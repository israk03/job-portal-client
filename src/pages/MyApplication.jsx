import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function MyApplication() {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/job_Application?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setJobs(data);
        })
        .catch((error) => console.error("Error fetching applications:", error));
    }
  }, [user?.email]);

  return (
    <div className="overflow-x-auto p-6">
      <h1 className="text-xl font-bold mb-4">
        Your Total Applications: {jobs.length}
      </h1>

      <table className="table w-full bg-white shadow-md rounded-lg">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Job Title</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Salary</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-red-500 py-4">
                No applications found.
              </td>
            </tr>
          ) : (
            jobs.map((job) => (
              <tr key={job._id} className="border-b">
                {/* Company Info */}
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={job.company_logo}
                        alt={job.company}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.company}</div>
                  </div>
                </td>

                {/* Job Title */}
                <td className="px-4 py-3 font-medium">{job.title}</td>

                {/* Location */}
                <td className="px-4 py-3">{job.location}</td>

                {/* Salary */}
                <td className="px-4 py-3 text-blue-600 font-semibold">
                  {job.salaryRange?.min} - {job.salaryRange?.max}{" "}
                  {job.salaryRange?.currency}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
