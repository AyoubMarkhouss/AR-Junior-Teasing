import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

function App() {
  const useTimer = (delay = 1000) => {
    const [isTimerDone, setIsTimerDone] = useState(false);

    useEffect(() => {
      // Set a timer to change isTimerDone to true after the specified delay
      const timer = setTimeout(() => {
        setIsTimerDone(true);
      }, delay);

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }, [delay]);

    return isTimerDone;
  };
  const Timer = useTimer();
  const notify = () => toast("votre demande à été envoyé avec succès !");
  return (
    <div className="min-h-screen bg-bg py-14">
      <div className="flex justify-center items-center pb-14">
        <img
          src="/AR-LOGO.png"
          width={2000}
          height={2000}
          className="size-36"
          alt="logo"
        />
      </div>
      <div className="text-white flex justify-center items-center pb-16">
        <div className="max-w-2xl px-5 md:px-0 text-justify">
          <h1 className="semi text-center text-3xl">
            NOUVEAU ALFA ROMEO JUNIOR
          </h1>
          <br /> <br />
          <p className="text-lg">
            Découvrez bientôt une nouvelle histoire d'amour avec la route.
            Laissez-vous séduire par un design captivant, une précision
            artisanale, et une expérience de conduite qui réveille la passion.
          </p>
          <br />
          <p className="text-lg">
            Le nouveau Alfa Romeo Junior arrive, prêt à redonner vie aux
            sensations oubliées et à réinventer votre façon de conduire.
          </p>
          <br />
          <p className="text-lg font-bold">"Are you ready to love again?"</p>
          <br />
          <p className="text-lg italic">
            Inscrivez-vous pour être parmi les premiers à découvrir le nouveau
            chapitre d'Alfa Romeo.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8d000009q2y7"
          method="POST"
          className="max-w-2xl w-full px-5 md:px-0"
        >
          <input type="hidden" name="oid" value="00D8d000009q2y7" />
          {/* <input type="hidden" name="debug" value="1" />
          <input
            type="hidden"
            name="debugEmail"
            value="ayoub.markhouss@gmail.com"
          /> */}
          <input
            id="lead_source"
            name="lead_source"
            type="hidden"
            value="event_website"
          />
          <input
            id="00N8d00000UVYP7"
            name="00N8d00000UVYP7"
            type="hidden"
            value="1"
          />
          <input
            type="hidden"
            id="00N8d00000UVYOu"
            name="00N8d00000UVYOu"
            value="83"
            title="Marque d&#39;intérêt"
          />
          <input
            type="hidden"
            name="retURL"
            value="https://www.alfaromeo.co.ma/junior"
          />
          <br />
          <br />
          <div className="flex-col flex md:flex-row gap-10 justify-between pb-12 w-full">
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <input
                id="last_name"
                maxlength="80"
                name="last_name"
                size="20"
                type="text"
                className="peer w-full h-10 px-2 pt-4 pb-2 text-white bg-transparent  focus:border-b-2 border-b-2 border-white focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-white focus:outline-none"
                placeholder=" "
              />
              <label
                className="semi absolute left-2 top-5 text-white text-lg transform -translate-y-9 scale-100 transition-all duration-300 ease-out 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 
               peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-full"
              >
                Nom
              </label>
            </div>
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <input
                id="first_name"
                maxlength="40"
                name="first_name"
                size="20"
                type="text"
                className="peer w-full h-10 px-2 pt-4 pb-2 text-white bg-transparent border-b-2  focus:border-b-2 border-white focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-white focus:outline-none"
                placeholder=" "
              />
              <label
                className="semi absolute left-2 top-5 text-white text-lg transform -translate-y-9 scale-100 transition-all duration-300 ease-out 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 
               peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-full"
              >
                Prénom
              </label>
            </div>
          </div>
          <div className="flex-col flex md:flex-row gap-10 justify-between pb-12 w-full">
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <select
                id="salutation"
                name="salutation"
                className="peer w-full h-10 px-2 pt-2  pb-2 text-white bg-transparent border-b-2 border-white appearance-none focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-b-2 focus:border-white focus:outline-none"
              >
                <option value="" disabled selected hidden></option>
                <option value="Mr." className="semi text-black">
                  M.
                </option>
                <option value="Ms." className="semi text-black">
                  Mme.
                </option>
                <option value="Mrs." className="semi text-black">
                  MLLE.
                </option>
              </select>
              <label
                className="semi  absolute left-2 top-2  text-white text-lg transform -translate-y-6 scale-100 transition-all duration-300 ease-out
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 
               peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-full"
              >
                Civilité
              </label>
            </div>
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <input
                id="city"
                maxlength="40"
                name="city"
                size="20"
                type="text"
                className="peer w-full h-10 px-2 pt-4 pb-2 text-white bg-transparent border-b-2  focus:border-b-2 border-white focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-white focus:outline-none"
                placeholder=" "
              />
              <label
                className="semi absolute left-2 top-5 text-white text-lg transform -translate-y-9 scale-100 transition-all duration-300 ease-out 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 
               peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-full"
              >
                Ville
              </label>
            </div>
          </div>
          <div className="flex-col flex md:flex-row gap-10 justify-between pb-12 w-full">
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <input
                id="email"
                maxlength="80"
                name="email"
                size="20"
                type="email"
                className="peer w-full h-10 px-2 pt-4 pb-2 text-white  focus:border-b-2 bg-transparent border-b-2 border-white focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-white focus:outline-none"
                placeholder=" "
              />
              <label
                className="semi absolute left-2 top-5 text-white text-lg transform -translate-y-9 scale-100 transition-all duration-300 ease-out 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 
               peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-full"
              >
                E-mail
              </label>
            </div>
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <input
                id="mobile"
                maxlength="40"
                name="mobile"
                size="20"
                type="text"
                className="peer w-full h-10 px-2 pt-4 pb-2 text-white  focus:border-b-2 bg-transparent border-b-2 border-white focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-white focus:outline-none"
                placeholder=" "
              />
              <label
                className="semi absolute left-2 top-5 text-white text-lg transform -translate-y-9 scale-100 transition-all duration-300 ease-out 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 
               peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-full"
              >
                Téléphone
              </label>
            </div>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault(); // Prevents the default form submission
              notify(); // Show the toast notification
              e.target.closest("form").submit(); // Submit the form after showing toast
            }}
          >
            <button
              type="submit"
              className="semi bg-white w-full h-12 hover:cursor-pointer hover:bg-slate-200"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
