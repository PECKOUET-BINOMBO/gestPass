import React, { useState } from "react";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination/pagination";
import AddEnrolModal from "../components/modals/AddEnrolModal";
import ViewEnrolModal from "../components/modals/ViewEnrolModal";
import EditEnrolModal from "../components/modals/EditEnrolModal";
import DeleteConfirmationEnrolModal from "../components/modals/DeleteConfirmationEnrolModal";

function UserEnrolle() {
  //Ajout utilisateurs
  const [enrol, setEnrols] = useState([
    {
      id: 1,
      dateAjout: "16/08/2024",
      nom: "DJOUD",
      prenom: "Leviss",
      tel: "+221772995851",
      pays: "Sénégal",
      par: "Paul Emile",
      statut: "Non récupéré",
      commentaire: "Aucun commentaire"
    },

    {
      id: 2,
      dateAjout: "16/08/2024",
      nom: "AXEL",
      prenom: "Paul",
      tel: "+221772995851",
      pays: "Congo",
      par: "Paul",
      statut: "Récupéré",
      commentaire: "Aucun commentaire"
    },

    {
      id: 3,
      dateAjout: "16/08/2024",
      nom: "DJOUD",
      prenom: "Leviss",
      tel: "+221772995851",
      pays: "Côte d'ivoire",
      par: "Emile",
      statut: "Envoyé",
      commentaire: "Aucun commentaire"
    }
    // Ajoutez d'autres enrôlé ici
  ]);

  // États pour contrôler l'affichage des modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEnrol, setSelectedEnrol] = useState(null);

  // Fonctions pour ouvrir les modals
  const openAddModal = () => setIsAddModalOpen(true);
  const openViewModal = (enrol) => {
    setSelectedEnrol(enrol);
    setIsViewModalOpen(true);
  };

  const openEditModal = (enrol) => {
    setSelectedEnrol(enrol);
    setIsEditModalOpen(true);
  };
  const openDeleteModal = (enrol) => {
    setSelectedEnrol(enrol);
    setIsDeleteModalOpen(true);
  };

  // Fonctions pour fermer les modals
  const closeAddModal = () => setIsAddModalOpen(false);
  const closeViewModal = () => setIsViewModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  // Fonction pour gérer la sauvegarde des modifications
  const handleSaveEnrol = (updatedEnrol) => {
    setEnrols(
      enrol.map((enrol) =>
        enrol.id === updatedEnrol.id ? updatedEnrol : enrol
      )
    );
    // Ici, vous ajouteriez la logique pour envoyer les modifications au serveur
    console.log("Enrôlé mis à jour:", updatedEnrol);
  };

  // Fonction pour gérer la suppression
  const handleDeleteEnrol = (enrolId) => {
    setEnrols(enrol.filter((enrol) => enrol.id !== enrolId));
    // Ici, vous ajouteriez la logique pour envoyer la suppression au serveur
    console.log("Enrôlé supprimé:", enrolId);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div className="flex  mb-10">
            <div>
              <h2 className="mb-2 text-2xl tracking-tight font-bold text-gray-500 dark:text-white">
                Enrôlements
              </h2>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div>
                <button
                  type="button"
                  className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                  onClick={openAddModal}
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
                    <option value="Par">Par</option>
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
                  {enrol.map((enrol) => (
                    <tr
                      key={enrol.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{enrol.dateAjout}</td>
                      <td className="px-6 py-4">{enrol.nom}</td>
                      <td className="px-6 py-4">{enrol.prenom}</td>
                      <td className="px-6 py-4">+{enrol.tel}</td>
                      <td className="px-6 py-4 flex items-center">
                        {" "}
                        <span className="me-1">{enrol.pays}</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                          >
                            <path fill="#fbf064" d="M10 4H22V28H10z"></path>
                            <path
                              d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                              fill="#3a8445"
                            ></path>
                            <path
                              d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                              transform="rotate(180 26 16)"
                              fill="#d1332c"
                            ></path>
                            <path
                              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                              opacity=".15"
                            ></path>
                            <path
                              fill="#3a8445"
                              d="M17.516 16.391L19.969 14.609 16.937 14.609 16 11.725 15.063 14.609 12.031 14.609 14.484 16.391 13.547 19.275 16 17.492 18.453 19.275 17.516 16.391z"
                            ></path>
                            <path
                              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                              fill="#fff"
                              opacity=".2"
                            ></path>
                          </svg>
                        </span>
                      </td>
                      <td className="px-1 py-4">{enrol.par}</td>
                      <td className="px-1 py-4">{enrol.statut}</td>
                      <td className="px-6 py-4 flex items-center">
                        <button
                          className="font-medium rounded text-white px-1 bg-green-600 dark:text-green-500 hover:underline"
                          onClick={() => openViewModal(enrol)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button
                          className="font-medium rounded text-white px-1  bg-blue-600 dark:text-blue-500 hover:underline mx-2"
                          onClick={() => openEditModal(enrol)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>

                        <button
                          onClick={() => openDeleteModal(enrol)}
                          type="submit"
                          className="font-medium rounded text-white px-1  bg-red-600 dark:text-red-500 hover:underline"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-full">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inclusion des modals */}
      <AddEnrolModal isOpen={isAddModalOpen} onClose={closeAddModal} />
      <ViewEnrolModal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        enrol={selectedEnrol}
      />
      <EditEnrolModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        enrol={selectedEnrol}
        onSave={handleSaveEnrol}
      />
      <DeleteConfirmationEnrolModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteEnrol}
        enrol={selectedEnrol}
      />
    </div>
  );
}

export default UserEnrolle;
