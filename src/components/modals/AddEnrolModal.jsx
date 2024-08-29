import React from "react";

function AddAdminModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-4/12 mx-auto">
        <h2 className="text-xl font-bold mb-4">Ajouter un enrôlé</h2>
        {/* Formulaire d'ajout ici */}
        <form className="max-w-sm mx-auto">
         
        <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Noms
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nom"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="prenom"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prénoms
            </label>
            <input
              type="text"
              id="prenom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prénoms"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="N° mobile"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pays"
              className="block text-sm font-medium text-gray-700"
            >
              Pays
            </label>
            <select
              id="pays" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Sélectionner un pays</option>
              <option value="Sénégal">Sénégal</option>
              <option value="Italie">Italie</option>
              <option value="Côte d'ivoire">Côte d'ivoire</option>
              <option value="Gabon">Gabon</option>
              <option value="Japon">Japon</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="par"
              className="block text-sm font-medium text-gray-700"
            >
              Par
            </label>
            <select
              id="par" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Sélectionner un membre</option>
              <option value="Tester 1">Tester 1</option>
              <option value="Tester 2">Tester 2</option>
              <option value="Paul Emile">Paul Emile</option>
              <option value="Tester 3">Tester 3</option>
              <option value="Tester 4">Tester 4</option>
              <option value="Tester 5">Tester 5</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="statut"
              className="block text-sm font-medium text-gray-700"
            >
              Statut
            </label>
            <select
              id="statut" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="Récupéré">Récupéré</option>
              <option value="Non récupéré">Non récupéré</option>
              <option value="Envoyé">Envoyé</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="commentaire"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Commentaire
            </label>
            <textarea
              id="commentaire"
              rows="4"
              className=" p-2.5 text-sm text-gray-900 bg-gray-50 border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
             
            ></textarea>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="mt-4 bg-gray-100 hover:bg-gray-200  text-gray-700 px-4 py-2 rounded font-medium"
            >
              Annuler
            </button>

            <button className="mt-4 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded font-medium">
              Ajouter
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default AddAdminModal;
