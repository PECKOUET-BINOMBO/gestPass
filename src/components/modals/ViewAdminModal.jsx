import React from 'react';

function ViewAdminModal({ isOpen, onClose, admin }) {
  if (!isOpen || !admin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Détails de l'administrateur</h2>
        <p>Nom: {admin.nom}</p>
        <p>Prénom: {admin.prenom}</p>
        <p>Email: {admin.email}</p>
        <p>Rôle: {admin.role}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default ViewAdminModal;