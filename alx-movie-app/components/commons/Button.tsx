import React from 'react';

// Definiamo le props che il nostro pulsante può ricevere
interface ButtonProps {
  title: string;
  action?: () => void; // La modifica è qui: il '?' rende 'action' facoltativa
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-[#E2D609] text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition duration-300"
    >
      {title}
    </button>
  );
};

export default Button;