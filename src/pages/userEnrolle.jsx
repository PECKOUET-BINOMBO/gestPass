import React from "react";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination/pagination";
import { Link } from "react-router-dom";

function UserEnrolle() {
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div className="flex  mb-10">
            <div>
              <h2 className="mb-2 text-2xl tracking-tight font-bold text-gray-500 dark:text-white">
                enrôlements
              </h2>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div>
                <button
                  type="button"
                  className=" text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Ajouter
                </button>
              </div>
              <div>
                <form className="max-w-sm mx-auto">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled>
                      Filter par
                    </option>
                    <option value="Récupéré">Récupéré</option>
                    <option value="Non récupéré">Non récupéré</option>
                    <option value="Envoyé">Envoyé</option>
                  </select>
                </form>
              </div>
            </div>
            <div>
              <form className="relative" method="GET" action="#">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="table-search-users"
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Rechercher une personne"
                  name="search"
                />
              </form>
            </div>
          </div>

          <div className=" relative overflow-x-auto shadow-md sm:rounded-lg my-5">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date d'ajout
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Noms
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Prénoms
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Téléphones
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Pays
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Par
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Statuts
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">16/08/2024</td>
                    <td className="px-6 py-4">DJOUD</td>
                    <td className="px-6 py-4">Leviss</td>
                    <td className="px-6 py-4">+22172295851</td>
                    <td className="px-6 py-4 flex items-center">
                      {" "}
                      <span className="me-1">Sénégal</span> 
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#fbf064" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#3a8445"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#d1332c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path fill="#3a8445" d="M17.516 16.391L19.969 14.609 16.937 14.609 16 11.725 15.063 14.609 12.031 14.609 14.484 16.391 13.547 19.275 16 17.492 18.453 19.275 17.516 16.391z"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                      </span>
                    </td>
                    <td className="px-6 py-4">Paul Emile</td>
                    <td className="px-6 py-4">Non récupéré</td>
                    <td className="px-6 py-4">
                      <button className="font-medium text-green-600 dark:text-green-500 hover:underline ">
                        Voir
                      </button>
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">
                        Modifier
                      </button>
                      <form className="inline-block" method="POST" action="">
                        <button
                          type="submit"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Supprimer
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">16/08/2024</td>
                    <td className="px-6 py-4">DJOUD</td>
                    <td className="px-6 py-4">Leviss</td>
                    <td className="px-6 py-4">+22172295851</td>
                    <td className="px-6 py-4 flex items-center"> <span className="me-1">Congo</span><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#387ef7"></rect><path fill="#f2d84b" d="M9.295 11.069L11.895 9.181 8.682 9.181 7.689 6.125 6.696 9.181 3.483 9.181 6.082 11.069 5.089 14.125 7.689 12.236 10.288 14.125 9.295 11.069z"></path><path d="M31,8c0-1.64-.989-3.045-2.401-3.663L1,21.816v2.184c0,1.64,.989,3.045,2.401,3.663L31,10.184v-2.184Z" fill="#f2d84b"></path><path d="M29.534,4.929L1,23v1c0,1.242,.578,2.338,1.466,3.071L31,9v-1c0-1.242-.578-2.338-1.466-3.071Z" fill="#be2a28"></path><path d="M1,8V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4Zm1,0c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg></span></td>{" "}
                    {/*TODO ajouter svg drapeau de pays */}
                    <td className="px-6 py-4">Paul</td>
                    <td className="px-6 py-4">Récupéré</td>
                    <td className="px-6 py-4">
                      <button className="font-medium text-green-600 dark:text-green-500 hover:underline ">
                        Voir
                      </button>
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">
                        Modifier
                      </button>
                      <form className="inline-block" method="POST" action="">
                        <button
                          type="submit"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Supprimer
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">16/08/2024</td>
                    <td className="px-6 py-4">DJOUD</td>
                    <td className="px-6 py-4">Leviss</td>
                    <td className="px-6 py-4">+22172295851</td>
                    <td className="px-6 py-4 flex items-center"> <span className="me-1">Côte d'ivoire</span><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#e88732"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#479d66"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg></span></td>
                    <td className="px-6 py-4">Emile</td>
                    <td className="px-6 py-4">Envoyé</td>
                    <td className="px-6 py-4">
                      <button className="font-medium text-green-600 dark:text-green-500 hover:underline ">
                        Voir
                      </button>
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">
                        Modifier
                      </button>
                      <form className="inline-block" method="POST" action="">
                        <button
                          type="submit"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Supprimer
                        </button>
                      </form>
                    </td>
                  </tr>
                  {/* <tr>
                    <td colSpan="5" className="text-center py-4">
                      Aucun utilisateur trouvé
                    </td>
                  </tr> */}
                </tbody>
              </table>
              <div className="w-full">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEnrolle;
