import React, { useState, useMemo } from "react";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination/pagination";
import AddEnrolModal from "../components/modals/AddEnrolModal";
import ViewEnrolModal from "../components/modals/ViewEnrolModal";
import EditEnrolModal from "../components/modals/EditEnrolModal";
import DeleteConfirmationEnrolModal from "../components/modals/DeleteConfirmationEnrolModal";

function UserEnrolle() {
  const [enrols, setEnrols] = useState([
    {
      id: 1,
      dateAjout: "16/08/2024",
      nom: "DJOUD",
      prenom: "Leviss",
      tel: "+221772995851",
      pays: "Sénégal",
      par: "Tester 1",
      statut: "Non récupéré",
      commentaire: "Aucun commentaire"
    },
    {
      id: 2,
      dateAjout: "17/08/2024",
      nom: "NKONDO",
      prenom: "Gloria",
      tel: "+221772995851",
      pays: "Côte d'ivoire",
      par: "Paul Emile",
      statut: "Non récupéré",
      commentaire: "Aucun commentaire"
    },
    {
      id: 3,
      dateAjout: "18/08/2024",
      nom: "NGOUANGA",
      prenom: "Lorna",
      tel: "+221772995851",
      pays: "Italie",
      par: "Tester 2",
      statut: "Envoyé",
      commentaire: "Aucun commentaire"
    },
    {
      id: 4,
      dateAjout: "18/08/2024",
      nom: "AKENDEGUE",
      prenom: "Iness",
      tel: "+221772995851",
      pays: "Sénégal",
      par: "Tester 3",
      statut: "Récupéré",
      commentaire: "Commentaire 2"
    },
    {
      id: 5,
      dateAjout: "19/08/2024",
      nom: "PECKOUET",
      prenom: "Paul",
      tel: "+221762995851",
      pays: "Gabon",
      par: "Tester 4",
      statut: "Non récupéré",
      commentaire: "Aucun commentaire"
    },
    {
      id: 6,
      dateAjout: "20/08/2024",
      nom: "BINOMBO",
      prenom: "Emile",
      tel: "+221772995851",
      pays: "Japon",
      par: "Tester 5",
      statut: "Envoyé",
      commentaire: "Commentaire 1"
    }
    // ... other initial enrols
  ]);

  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredEnrols = useMemo(() => {
    return enrols.filter((enrol) => {
      const matchesFilter =
        filter === "" || filter === "Tous" || enrol.statut === filter;
      const matchesSearch =
        enrol.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrol.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrol.tel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrol.pays.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrol.par.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [enrols, filter, searchTerm]);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredEnrols.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredEnrols, currentPage]);

  const [modalStates, setModalStates] = useState({
    add: false,
    view: false,
    edit: false,
    delete: false
  });
  const [selectedEnrol, setSelectedEnrol] = useState(null);

  const toggleModal = (modalType, enrol = null) => {
    setModalStates((prevState) => ({
      ...prevState,
      [modalType]: !prevState[modalType]
    }));
    setSelectedEnrol(enrol);
  };

  const handleSaveEnrol = (updatedEnrol) => {
    setEnrols((prevEnrols) =>
      prevEnrols.map((enrol) =>
        enrol.id === updatedEnrol.id ? updatedEnrol : enrol
      )
    );
    console.log("Enrôlé mis à jour:", updatedEnrol);
  };

  const handleDeleteEnrol = (enrolId) => {
    setEnrols((prevEnrols) =>
      prevEnrols.filter((enrol) => enrol.id !== enrolId)
    );
    console.log("Enrôlé supprimé:", enrolId);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <h2 className="mb-10 text-2xl tracking-tight font-bold text-gray-500 dark:text-white">
            Enrôlements
          </h2>

          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={() => toggleModal("add")}
              >
                Ajouter
              </button>
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="Tous">Tous</option>
                <option value="Récupéré">Récupéré</option>
                <option value="Non récupéré">Non récupéré</option>
                <option value="Envoyé">Envoyé</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="nom, prénom, téléphone, pays ou par"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                {currentItems.map((enrol) => (
                  <tr
                    key={enrol.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{enrol.dateAjout}</td>
                    <td className="px-6 py-4">{enrol.nom}</td>
                    <td className="px-6 py-4">{enrol.prenom}</td>
                    <td className="px-6 py-4">{enrol.tel}</td>
                    <td className="px-6 py-4 flex items-center">
                      <span className="mr-1">{enrol.pays}</span>
                      {/* SVG flag icon */}
                    </td>
                    <td className="px-6 py-4">{enrol.par}</td>
                    <td className="px-6 py-4">{enrol.statut}</td>
                    <td className="px-6 py-4 flex items-center space-x-2">
                      <span
                        className="font-medium px-2 py-1 text-green-600"
                        onClick={() => toggleModal("view", enrol)}
                      >
                        Voir
                      </span>
                      <span
                        className="font-medium px-2 py-1 text-blue-600 "
                        onClick={() => toggleModal("edit", enrol)}
                      >
                        Modifier
                      </span>
                      <span
                        className="font-medium px-2 py-1 text-red-600 "
                        onClick={() => toggleModal("delete", enrol)}
                      >
                        Supprimer
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredEnrols.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>

      <AddEnrolModal
        isOpen={modalStates.add}
        onClose={() => toggleModal("add")}
      />
      <ViewEnrolModal
        isOpen={modalStates.view}
        onClose={() => toggleModal("view")}
        enrol={selectedEnrol}
      />
      <EditEnrolModal
        isOpen={modalStates.edit}
        onClose={() => toggleModal("edit")}
        enrol={selectedEnrol}
        onSave={handleSaveEnrol}
      />
      <DeleteConfirmationEnrolModal
        isOpen={modalStates.delete}
        onClose={() => toggleModal("delete")}
        onConfirm={handleDeleteEnrol}
        enrol={selectedEnrol}
      />
    </div>
  );
}

export default UserEnrolle;
