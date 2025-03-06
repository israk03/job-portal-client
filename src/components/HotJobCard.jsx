/* eslint-disable react/prop-types */

import { FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    company_logo,
    company,
    location,
    title,
    requirements,
    description,
    salaryRange,
  } = job;

  return (
    <div className="border rounded-lg p-6 shadow-md bg-white w-80">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Company Logo */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg">
            <img src={company_logo} alt="Company Logo" className="w-10" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{company}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <FaMapMarkerAlt className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Energy Icon (Top-right) */}
        <div className="text-green-400 text-lg">⚡</div>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold mt-3">{title}</h2>

      {/* Job Type & Time */}
      <div className="flex items-center text-gray-500 text-sm mt-1 space-x-4">
        <FaBriefcase />
        <span>Fulltime</span>
        <FaClock />
        <span>4 minutes ago</span>
      </div>

      {/* Job Description */}
      <p className="text-gray-600 text-sm mt-3">{description}</p>

      {/* Skills / Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {requirements.map((skill, index) => (
          <p
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
          >
            {skill}
          </p>
        ))}
      </div>

      {/* Footer: Salary & Apply Button */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-blue-600 font-bold text-lg">
          {salaryRange?.max} {salaryRange?.currency}{" "}
          <span className="text-gray-500 text-sm">/Month</span>
        </span>
        <Link to={`/job/${_id}`}>
          <button className=" px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-200 transition">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobCard;
