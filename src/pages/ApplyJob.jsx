import Lottie from "lottie-react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyAnimationData from "../assets/apply.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

export default function ApplyJob() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const linkedin = form.linkedin.value;
    const facebook = form.facebook.value;
    const phone = form.phone.value;
    const coverLetter = form.coverLetter.value;
    const resume = form.resume.value;
    const job_id = id;

    const job_Application = {
      job_id,
      email,
      linkedin,
      facebook,
      phone,
      coverLetter,
      resume,
    };
    console.log("Candidate who is applying: ", job_Application);

    fetch("http://localhost:5000/job_Applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job_Application),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your application submitted successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplication");
        }
      });

    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 my-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Apply for Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="name@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* LinkdIn */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              LinkedIn URL:
            </label>
            <input
              type="url"
              name="linkedin"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* FacebookId */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Facebook URL:
            </label>
            <input
              type="url"
              name="facebook"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone No.:
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+123 456 7890"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Cover Letter:
            </label>
            <textarea
              name="coverLetter"
              placeholder="Write a short message..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Resume:
            </label>
            <input
              type="file"
              name="resume"
              className="file-input file-input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn bg-blue-600 text-white w-full">
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:block md:w-[40%] md:ml-4">
        <Lottie animationData={ApplyAnimationData}></Lottie>
      </div>
    </div>
  );
}
