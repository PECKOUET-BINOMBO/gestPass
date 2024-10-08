import React from 'react';

function DeleteConfirmationModal({ isOpen, onClose, onConfirm, admin }) {
  // Si le modal n'est pas ouvert ou s'il n'y a pas d'admin sélectionné, ne rien afficher
  if (!isOpen || !admin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 ">
        <h2 className="text-xl font-bold mb-4 text-center">Confirmer la suppression</h2>
        <p className="mb-4">
          Êtes-vous sûr de vouloir supprimer l'administrateur {admin.prenom} {admin.nom} ?
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Cette action est irréversible et supprimera définitivement toutes les données associées à cet administrateur.
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Annuler
          </button>
          <button
            onClick={() => {
              onConfirm(admin.id);
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;