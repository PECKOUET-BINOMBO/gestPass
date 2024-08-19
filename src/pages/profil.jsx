import React from "react";
import Navbar from "../components/navbar";

function Profil() {
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div className="mb-5">
            <div>
              <h2 className="mb-10 text-2xl tracking-tight font-bold text-gray-500 dark:text-white">
                Mes informations
              </h2>
            </div>
            <div className="flex items-strech">
              <div className="px-4 pt-10 md:px-4 text-sm text-gray-500 font-normal shadow rounded w-3/12 me-3">
                <div className="mb-3">
                  <h3>Noms : DJOUD</h3>
                </div>
                <div className="mb-3">
                  <h3>Prénoms : Léviss</h3>
                </div>
                <div className="mb-3">
                  <h3>E-mail : levis@gmail.com</h3>
                </div>
                
                <div className="mb-3">
                  <h3>Rôle : Super Administrateur</h3>
                </div>
                <div className="mb-3">
                  <h3>Dernier enrollement : 16/08/2024</h3>
                </div>
                <div className="mb-3">
                  <h3>Nombre total d'enrollement effectué : 5</h3>
                </div>
              </div>
              <div className="p-10 md:p-10 shadow rounded w-8/12 ms-3">
                <form className="space-y-4" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Votre nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="DJOUD"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Votre prénom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Léviss"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Votre email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="leviss@gmail.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rôles
                    </label>
                    <select
                      id="role"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="role" defaultValue="Administrateur"
                    >
                      <option value="user">Administrateur</option>
                      <option value="admin">Super administrateur</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Votre mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-5 w-50 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Mettre à jour
                  </button>
                </form>
                <hr className="my-5 border-gray-300 dark:border-gray-600" />
                <form action="#" method="POST">
                  <button
                    type="submit"
                    className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Supprimer mon compte
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
