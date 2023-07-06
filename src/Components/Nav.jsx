import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Nav() {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  return (
   

<div className="navbar bg-base-100 bg-emerald-600 justify-between grid md:grid-cols-1/2  grid lg:grid-cols-3 justify-items-end">
      <div className=" ">
        <a className="btn btn-ghost normal-case text-xl mx-2">
          BLACK CUMIN BANGLADESH
        </a>
      </div>
      <div className="flex-none gap-5 font-bold  ">
        <button
          onClick={() => setActive("home")}
          className={`text-white ${active == "home" && "border-b-2"}`}
        >
          {" "}
          <Link to={"/"}>Home</Link>
        </button>
        <button
          onClick={() => setActive("blog")}
          className={`text-white ${active == "blog" && "border-b-2"}`}
        >
          {" "}
          <Link to={"/blog"}>Blogs</Link>
        </button>

        {user?.email && (
          <div
            className=" tooltip tooltip-left"
            data-tip={user?.displayName ? user?.displayName : user?.email}
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                <img src="https://i.ibb.co/tKyYD4x/Whats-App-Image-2023-02-14-at-10-01-18-AM.jpg" />
              </div>
            </label>
          </div>
        )}
        {user?.email ? (
          <button onClick={logOut} className="btn btn-primary ">
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary"
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
}
