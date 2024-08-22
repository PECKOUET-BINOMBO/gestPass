import React, { useState } from "react";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination/pagination";
import AddAdminModal from "../components/modals/AddAdminModal";
//import ViewAdminModal from "../components/modals/ViewAdminModal";
import EditAdminModal from "../components/modals/EditAdminModal";
import DeleteConfirmationModal from "../components/modals/DeleteConfirmationModal";

function UserAdmin() {
  //Ajout utilisateurs
  const [admins, setAdmins] = useState([
    {
      id: 1,
      dateAjout: "16/08/2024",
      nom: "DJOUD",
      prenom: "Leviss",
      email: "leviss@gmail.com",
      role: "Super Administrateur"
    }
    // Ajoutez d'autres administrateurs ici
  ]);

  // États pour contrôler l'affichage des modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  //const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  // Fonctions pour ouvrir les modals
  const openAddModal = () => setIsAddModalOpen(true);
  const openViewModal = (admin) => {
    setSelectedAdmin(admin);
    //setIsViewModalOpen(true);
  };
  
  const openEditModal = (admin) => {
    setSelectedAdmin(admin);
    setIsEditModalOpen(true);
  };
  const openDeleteModal = (admin) => {
    setSelectedAdmin(admin);
    setIsDeleteModalOpen(true);
  };

  // Fonctions pour fermer les modals
  const closeAddModal = () => setIsAddModalOpen(false);
  //const closeViewModal = () => setIsViewModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  // Fonction pour gérer la sauvegarde des modifications
  const handleSaveAdmin = (updatedAdmin) => {
    setAdmins(
      admins.map((admin) =>
        admin.id === updatedAdmin.id ? updatedAdmin : admin
      )
    );
    // Ici, vous ajouteriez la logique pour envoyer les modifications au serveur
    console.log("Admin mis à jour:", updatedAdmin);
  };

  // Fonction pour gérer la suppression
  const handleDeleteAdmin = (adminId) => {
    setAdmins(admins.filter((admin) => admin.id !== adminId));
    // Ici, vous ajouteriez la logique pour envoyer la suppression au serveur
    console.log("Admin supprimé:", adminId);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div className="flex  mb-10">
            <div>
              <h2 className="mb-2 text-2xl tracking-tight font-bold text-gray-500 dark:text-white">
                Administrateurs
              </h2>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <div>
                <button
                  type="button"
                  className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
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
                    <option value="Super Administrateur">
                      Super Administrateur
                    </option>
                    <option value="Administrateur">Administrateur</option>
                    <option value="Plus récents">Plus récents</option>
                    <option value="Moins récents">Moins récents</option>
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
                  placeholder="Rechercher un administrateur"
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
                      Emails
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Rôle
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin) => (
                    <tr
                      key={admin.id}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">{admin.dateAjout}</td>
                      <td className="px-6 py-4">{admin.nom}</td>
                      <td className="px-6 py-4">{admin.prenom}</td>
                      <td className="px-6 py-4">{admin.email}</td>
                      <td className="px-6 py-4">{admin.role}</td>
                      <td className="px-6 py-4 flex items-center">
                        {/* <button
                          className="font-medium rounded text-white px-1 bg-green-600 dark:text-green-500 hover:underline"
                          onClick={() => openViewModal(admin)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button> */}
                        <button
                          className="font-medium rounded text-white px-1 bg-blue-600 dark:text-blue-500 hover:underline mx-2"
                          onClick={() => openEditModal(admin)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          className="font-medium rounded text-white px-1 bg-red-600 dark:text-red-500 hover:underline"
                          onClick={() => openDeleteModal(admin)}
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
      <AddAdminModal isOpen={isAddModalOpen} onClose={closeAddModal} />
      {/* <ViewAdminModal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        admin={selectedAdmin}
      /> */}
      <EditAdminModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        admin={selectedAdmin}
        onSave={handleSaveAdmin}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteAdmin}
        admin={selectedAdmin}
      />
    </div>
  );
}

export default UserAdmin;
