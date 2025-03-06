import Lottie from "lottie-react";
import ApplyAnimationData from "../assets/apply.json";
import Swal from "sweetalert2";

const handleAddJob = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const jobData = Object.fromEntries(formData.entries());
  //   console.log(jobData);
  const { max, min, currency, ...newJob } = jobData;
  //   console.log(newJob);
  newJob.salaryRange = { max, min, currency };
  //   console.log(newJob);
  newJob.requirements = newJob.requirements.split("\n");
  newJob.responsibilities = newJob.responsibilities.split("\n");

  fetch("http://localhost:5000/jobs", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newJob),
  })
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Job Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};
export default function AddJob() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 px-4 my-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add A Job
        </h2>

        <form onSubmit={handleAddJob} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="border p-2 rounded"
              required
            />
            <select name="jobType" className="border p-2 rounded" required>
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
            <select name="category" className="border p-2 rounded" required>
              <option value="">Select Category</option>
              <option value="Marketing">Marketing</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Finance">Finance</option>
            </select>
            <input
              type="date"
              name="applicationDeadline"
              className="border p-2 rounded"
              required
            />
            <div className="grid grid-cols-3 gap-2">
              <input
                type="number"
                name="min"
                placeholder="Min Salary"
                className="border p-2 rounded"
                required
              />
              <input
                type="number"
                name="max"
                placeholder="Max Salary"
                className="border p-2 rounded"
                required
              />
              <select name="currency" className="border p-2 rounded" required>
                <option value="">Currency</option>
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
            <textarea
              name="description"
              placeholder="Job Description"
              className="border p-2 rounded"
              required
            ></textarea>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="border p-2 rounded"
              required
            />
            <textarea
              name="requirements"
              placeholder="Requirements (separate line - hit enter)"
              className="border p-2 rounded"
            ></textarea>
            <textarea
              name="responsibilities"
              placeholder="Responsibilities (separate line - hit enter)"
              className="border p-2 rounded"
            ></textarea>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              name="company_logo"
              placeholder="Company Logo URL"
              className="border p-2 rounded"
            />
            <button type="submit" className="btn bg-blue-600 text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:block md:w-[50%] md:ml-4">
        <Lottie animationData={ApplyAnimationData}></Lottie>
      </div>
    </div>
  );
}
