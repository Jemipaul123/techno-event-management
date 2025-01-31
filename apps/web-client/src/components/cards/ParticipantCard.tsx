import React from 'react';

interface ParticipantCardProps {
  name: string;
  email: string;
  isCheckedIn: boolean;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, email, isCheckedIn }) => {
  const cardBgColor = isCheckedIn ? 'bg-green-200' : 'bg-red-200';

  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${cardBgColor}`}>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          View Profile
        </button>
      </div>
    </div>
  );
};

ParticipantCard.defaultProps = {
  name: 'John Doe',
  email: 'johndoe@email.com',
  isCheckedIn: false,
};

export default ParticipantCard;
