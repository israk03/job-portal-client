import { Link } from "react-router-dom";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import { motion } from "motion/react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function Banner() {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero min-h-96 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden md:block flex-1 ml-10">
          <motion.img
            src={Team1}
            animate={{ y: [50, 80, 50] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-b-5 border-l-5 border-blue-600 shadow-2xl"
          />
          <motion.img
            src={Team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 13, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-b-5 border-l-5 border-blue-600 shadow-2xl"
          />
        </div>
        <div className="flex-1 flex flex-col items-center ">
          <h1 className="text-5xl font-bold py-8 text-center">
            Grab your job from <br />
            <motion.span
              animate={{ color: "#155DFC" }}
              transition={{ repeat: Infinity }}
            >
              JOB PORTAL
            </motion.span>
            !
          </h1>

          <div>
            {!user && (
              <Link to="/login">
                <button className="btn bg-blue-600 text-white">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
