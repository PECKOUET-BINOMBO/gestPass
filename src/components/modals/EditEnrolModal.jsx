import React, { useState, useEffect } from "react";

function EditEnrolModal({ isOpen, onClose, enrol, onSave }) {
  // États pour stocker les valeurs du formulaire
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [pays, setPays] = useState("");
  const [par, setPar] = useState("");
  const [statut, setStatut] = useState("");
  const [commentaire, setCommentaire] = useState("");

  // Effet pour mettre à jour les états quand l'admin sélectionné change
  useEffect(() => {
    if (enrol) {
      setNom(enrol.nom || "");
      setPrenom(enrol.prenom || "");
      setTel(enrol.tel || "");
      setPays(enrol.pays || "");
      setPar(enrol.par || "");
      setStatut(enrol.statut || "");
      setCommentaire(enrol.comentaire || "");
    }
  }, [enrol]);

  // Si le modal n'est pas ouvert ou s'il n'y a pas d'admin sélectionné, ne rien afficher
  if (!isOpen || !enrol) return null;

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...enrol, nom, prenom, tel, pays, par, statut, commentaire });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Modifier l'enrôlé</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tel"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="tel"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              id="pays"
              value={pays}
              onChange={(e) => setPays(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              id="par"
              value={par}
              onChange={(e) => setPar(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              id="statut"
              value={statut}
              onChange={(e) => setStatut(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEnrolModal;
