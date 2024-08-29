import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";


function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div className="mb-10">
            <div className="mb-5">
              <div className="flex items-center text-gray-500">
                <h2 className="mb-2 me-1 text-xl tracking-tight font-bold">
                  Rapports
                </h2>                
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 etst dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500">
                  <i className="fa-solid fa-user-plus text-lg"></i> Enrôlé(s)
                </h5>
                <hr />
                <p className="font-medium text-2xl text-gray-500">2</p>
              </Link>

              <Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 etst dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  <i className="fa-solid fa-paper-plane text-lg"></i> Envoyé(s)
                </h5>
                <hr />
                <p className="font-medium text-2xl text-gray-500">2</p>
              </Link>

              <Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  <i className="fa-solid fa-hand-holding text-lg"></i> Récupéré(s)
                </h5>
                <hr />
                <p className="font-medium text-2xl text-gray-500">5</p>
              </Link>
              <Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 etst dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  {" "}
                  <i className="fa-solid fa-ban text-lg"></i> Non récupéré(s){" "}
                </h5>
                <hr />
                <p className="font-medium text-2xl text-gray-500">2</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
