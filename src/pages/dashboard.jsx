import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import sourceData from "../data/sourceData.json";
import revenueData from "../data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "gray";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div className="mb-10">
            <div className="mb-5">
              <div className="flex items-center text-gray-500">
                <h2 className="mb-2 me-1 text-xl tracking-tight font-bold  dark:text-white">
                  Rapports
                </h2>

                {/* <div>
                  <i
                    id="dropdownDelayButton"
                    data-dropdown-toggle="dropdownDelay"
                    data-dropdown-delay="500"
                    data-dropdown-trigger="hover"
                    className="fa-solid fa-filter"
                  ></i>{" "} */}
                  {/* Dropdown menu */}
                  {/* <div
                    id="dropdownDelay"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDelayButton"
                    >
                      <li>
                        <Link
                          to="#"
                          className="font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jour
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Hebdomadaire
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mensuel
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Trimestriel
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Annuel
                        </Link>
                      </li>
                    </ul>
                  </div> 
                </div>*/}
              </div>
              <hr />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 etst dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  <i class="fa-solid fa-pen-to-square"></i> Enrôlé(s)
                </h5>
                <hr />
                <p className="font-bold text-2xl">2</p>
              </Link>

              <Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 etst dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  <i class="fa-solid fa-paper-plane"></i> Envoyé(s)
                </h5>
                <hr />
                <p className="font-bold text-2xl">2</p>
              </Link>

              <Link
                Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  <i class="fa-solid fa-hand-holding"></i> Récupéré(s)
                </h5>
                <hr />
                <p className="font-bold text-2xl">5</p>
              </Link>
              <Link
                Link
                to="#"
                className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 etst dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 dark:text-white">
                  {" "}
                  <i class="fa-solid fa-ban"></i> Non récupéré(s){" "}
                </h5>
                <hr />
                <p className="font-bold text-2xl">2</p>
              </Link>
            </div>
          </div>

          <div className="mb-10">
            <div className="mb-5">
              <div className="flex items-center text-gray-500">
                <h2 className="mb-2 me-1 text-xl tracking-tight font-bold  dark:text-white">
                  Rapports 2
                </h2>
              </div>
              <hr />
            </div>

            <div className="flex flex-wrap items-center justify-between w-full">
              <div className="m-1 w-full rounded-lg border-2 border-gray-200 border-solid p-2">
                <Bar
                  data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: sourceData.map((data) => data.value),
                        backgroundColor: [
                          "rgba(43, 63, 229, 0.8)",
                          "rgba(0, 0, 0, 0.1)",
                          "rgba(253, 135, 135, 0.8)"
                        ],
                        borderRadius: 3
                      }
                    ]
                  }}
                  options={{
                    plugins: {
                      title: {
                        text: "revenue sources"
                      }
                    }
                  }}
                />
              </div>

              <div className="m-1 w-6/12 rounded-lg border-2 border-gray-200 border-solid p-2">
                <Doughnut
                  data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: sourceData.map((data) => data.value),
                        backgroundColor: [
                          "rgba(43, 63, 229, 0.8)",
                          "rgba(0, 0, 0, 0.1)",
                          "rgba(253, 135, 135, 0.8)"
                        ],
                        borderColor: [
                          "rgba(43, 63, 229, 0.8)",
                          "rgba(0, 0, 0, 0.1)",
                          "rgba(253, 135, 135, 0.8)"
                        ]
                      }
                    ]
                  }}
                  options={{
                    plugins: {
                      title: {
                        text: "Pays enrôlés"
                      }
                    }
                  }}
                />
              </div>

              <div className="m-1 w-6/12 rounded-lg border-2 border-gray-200 border-solid p-2">
                <Line
                  data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Revenue",
                        data: revenueData.map((data) => data.revenue),
                        backgroundColor: "#064FF0",
                        borderColor: "#064FF0"
                      },

                      // {
                      //   label: "Cost",
                      //   data: revenueData.map((data) => data.cost),
                      //   backgroundColor: "#FF3030",
                      //   borderColor: "#FF3030"
                      // }
                    ]
                  }}
                  options={{
                    plugins: {
                      title: {
                        text: "revenue sources"
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
