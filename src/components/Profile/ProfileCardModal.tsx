import React from 'react';
import { X } from 'lucide-react';
import { User } from '../../types/user';

type ProfileCardModalProps = {
  user: User;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProfileCardModal({ user, isOpen, onClose }: ProfileCardModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="h-24 w-24 rounded-full ring-4 ring-gray-800 mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
            <span className={`mt-2 px-3 py-1 rounded-full text-sm ${
              user.isActive ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'
            }`}>
              {user.isActive ? 'Active' : 'Offline'}
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Bio</h3>
              <p className="text-gray-300">{user.bio}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">Experience</h3>
              <p className="text-gray-300">{user.yearsExperience} years in Cybersecurity</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {user.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}