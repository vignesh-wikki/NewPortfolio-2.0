import { NavLink } from "react-router-dom";
import Popup from "../Utils/Popup";
import { useState } from "react";
import Toggle from "../Utils/Toggle";
import Vimage from "/src/assets/v.png";
import BurgerMenu from "../../assets/burgerMenu.svg";

export default function Navbar() {
  const [showContactPopup, setShowContactPopup] = useState<boolean>(false);
  const [showSidePopup, setShowSidePopup] = useState<boolean>(false);
  const [contactData, setContactData] = useState<{
    name: string;
    email: string;
    message: string;
  }>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleContactSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    if (
      contactData?.name != "" &&
      contactData?.email != "" &&
      contactData?.message != ""
    ) {
      fetch(import.meta.env.VITE_CONTACT_POST_DATA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
        mode: "cors",
      })
        .then(() => {
          setLoading(false);
          alert("Successfully Submitted");
        })
        .catch(() => {
          setLoading(false);
          alert("Something went wrong !!! try again.");
        });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <nav
        className={` bg-amber-200 fixed  flex align-middle justify-start ps-[10rem] z-20 h-[3.7rem] w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20`}
      >
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                <NavLink to="/">
                  <img
                    className=" animate-[spin_3s_linear_infinite] h-7 w-auto"
                    src={Vimage}
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <NavLink to="/projects">Projects</NavLink>
                <button
                  onClick={() => setShowContactPopup(true)}
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  Contact
                </button>
                <div className=" visible">
                  <Toggle />
                </div>

                <a
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  Messaging(comming soon...)
                </a>
              </div>
              <div className="flex items-center justify-end gap-3 md:hidden">
                <img
                  onClick={() => setShowSidePopup(true)}
                  className="h-9"
                  src={BurgerMenu}
                ></img>
              </div>
            </div>
          </div>
        </header>
      </nav>
      <Popup
        show={showContactPopup}
        position={"justify-center"}
        onClose={() => setShowContactPopup(false)}
      >
        {loading ? (
          <>
            <div className="flex items-center justify-center h-screen">
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-3">Contact Me</h2>
            <p className="pb-2">Email: vignesha445@gmail.com</p>
            <p className="pb-2">Phone: +91-7639851567</p>
            <form method="post">
              <label>Your name: </label>
              <input
                required
                type="text"
                onChange={(e) =>
                  setContactData((prev) => ({
                    name: e.target.value,
                    email: prev?.email ?? "",
                    message: prev?.message ?? "",
                  }))
                }
                className="border rounded-lg ms-2 border-gray-400 focus:outline-none"
              />
              <br />
              <br />
              <label>Your email: </label>
              <input
                required
                type="email"
                onChange={(e) =>
                  setContactData((prev) => ({
                    name: prev?.name ?? "",
                    email: e.target.value,
                    message: prev?.message ?? "",
                  }))
                }
                className="border rounded-lg ms-2 border-gray-400 focus:outline-none"
              />
              <br />
              <label>Your message: </label>
              <textarea
                required
                onChange={(e) =>
                  setContactData((prev) => ({
                    name: prev?.name ?? "",
                    message: e.target.value,
                    email: prev?.email ?? "",
                  }))
                }
                className="border mt-2 ms-2 rounded-lg border-gray-400 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                onClick={handleContactSubmit}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </Popup>
      <Popup
        show={showSidePopup}
        position={"justify-end items-start pt-16 pe-5"}
        onClose={() => setShowSidePopup(false)}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-semibold mb-3 hover:underline text-center"
              : ""
          }
        >
          Home
        </NavLink>
        <hr />
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-semibold mb-3 hover:underline text-center"
              : ""
          }
        >
          Projects
        </NavLink>
        <hr />
        <button
          onClick={() => setShowContactPopup(true)}
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
          Contact
        </button>
        <hr />
      </Popup>
    </>
  );
}
