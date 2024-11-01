import logo from "./logo.svg";
import "./App.css";

function App() {
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
        <form className="max-w-2xl w-full px-5 md:px-0">
          <div className="flex-col flex md:flex-row gap-10 justify-between pb-12 w-full">
            <div className="relative lg:w-72 mb-5 md:mb-0">
              <input
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
              <select className="peer w-full h-10 px-2 pt-2  pb-2 text-white bg-transparent border-b-2 border-white appearance-none focus:border focus:border-t-2 focus:border-l-2 focus:border-r-2 focus:border-b-2 focus:border-white focus:outline-none">
                <option value="" disabled selected hidden></option>
                <option value="M." className="semi text-black">
                  M.
                </option>
                <option value="Mme." className="semi text-black">
                  Mme.
                </option>
                <option value="MLLE." className="semi text-black">
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
          <button
            type="submit"
            className="semi bg-white w-full h-12 hover:cursor-pointer hover:bg-slate-200"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
