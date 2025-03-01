import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

export default function JobDetails() {
  const job = useLoaderData();

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        {/* Job Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center space-x-4">
            <img
              src={job.company_logo}
              alt={job.company}
              className="w-16 h-16 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
              <p className="text-gray-600 text-sm">{job.company}</p>
            </div>
          </div>
          <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg">
            {job.status}
          </span>
        </div>

        {/* Job Details Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaBriefcase className="mr-2 text-blue-500" />
            <span>
              {job.jobType} - {job.category}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="font-semibold">Application Deadline:</span>
            <span className="ml-2 text-red-500">{job.applicationDeadline}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="font-semibold">Salary:</span>
            <span className="ml-2 text-blue-600 font-bold">
              {job.salaryRange.min} - {job.salaryRange.max}{" "}
              {job.salaryRange.currency.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Job Description
          </h3>
          <p className="text-gray-600 mt-2">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Requirements</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact Info */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            HR Contact
          </h3>
          <div className="flex items-center text-gray-600">
            <FaUserTie className="mr-2 text-blue-500" />
            <span>{job.hr_name}</span>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FaEnvelope className="mr-2 text-blue-500" />
            <span>{job.hr_email}</span>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-6 text-center">
          <Link to={`/applyJob/${job._id}`}>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
