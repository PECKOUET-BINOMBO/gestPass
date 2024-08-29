import React from 'react';

function ViewEnrolModal({ isOpen, onClose, enrol }) {
  if (!isOpen || !enrol) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Détails de l'enrôlé</h2>
        <p>Nom: {enrol.nom}</p>
        <p>Prénom: {enrol.prenom}</p>
        <p>Téléphone: {enrol.tel}</p>
        <p>Pays: {enrol.pays}</p>
        <p>Enrôlé par : {enrol.par}</p>
        <p>Statut : {enrol.statut}</p>
        <br />
        <div>
          <h3 className='font-medium'>Commentaire :</h3>
          <p>{enrol.commentaire}</p>
        </div>
        
        <button onClick={onClose} className="mt-10 bg-green-500 text-white px-4 py-2 rounded">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default ViewEnrolModal;