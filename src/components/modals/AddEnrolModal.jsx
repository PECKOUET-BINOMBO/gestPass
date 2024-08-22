import React from 'react';

function AddAdminModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Ajouter un enrôlé</h2>
        {/* Formulaire d'ajout ici */}
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default AddAdminModal;