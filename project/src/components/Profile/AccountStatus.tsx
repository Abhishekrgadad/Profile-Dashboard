import React from 'react';

type AccountStatusProps = {
  isActive: boolean;
  onToggle: (status: boolean) => void;
};

export default function AccountStatus({ isActive, onToggle }: AccountStatusProps) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-medium text-white">Account Status</h3>
      <button
        onClick={() => onToggle(!isActive)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isActive ? 'bg-blue-600' : 'bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
            isActive ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}