import React, { useState } from 'react';
import { User as UserIcon } from 'lucide-react';
import ProfileForm from '../components/Profile/ProfileForm';
import ExperienceSection from '../components/Profile/ExperienceSection';
import SkillsSection from '../components/Profile/SkillsSection';
import AccountStatus from '../components/Profile/AccountStatus';
import ProfileCardModal from '../components/Profile/ProfileCardModal';

const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Software developer passionate about creating amazing user experiences.',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  yearsExperience: 5,
  skills: ['Penetration Testing', 'Network Security', 'Cloud Security'],
  certifications: ['CISSP', 'CEH', 'CompTIA Security+'],
  isActive: true
};

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const handleProfileUpdate = (data: Partial<typeof mockUser>) => {
    setUser({ ...user, ...data });
    setIsFormDirty(false);
  };

  const handleExperienceUpdate = (years: number) => {
    setUser({ ...user, yearsExperience: years });
    setIsFormDirty(true);
  };

  const handleSkillsUpdate = (skills: string[]) => {
    setUser({ ...user, skills });
    setIsFormDirty(true);
  };

  const handleCertificationsUpdate = (certifications: string[]) => {
    setUser({ ...user, certifications });
    setIsFormDirty(true);
  };

  const handleStatusToggle = (isActive: boolean) => {
    setUser({ ...user, isActive });
    setIsFormDirty(true);
  };

  const handleSaveChanges = () => {
    handleProfileUpdate(user);
    setShowProfileCard(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-900 shadow-xl rounded-lg border border-gray-800">
        <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
          <AccountStatus isActive={user.isActive} onToggle={handleStatusToggle} />
        </div>
        
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-32 w-32 rounded-full ring-4 ring-gray-800"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors duration-150">
                <UserIcon className="h-4 w-4" />
              </button>
            </div>
            <h3 className="text-xl font-medium text-white">{user.name}</h3>
            <p className="text-gray-400">{user.email}</p>
          </div>

          <div className="space-y-8">
            <ProfileForm user={user} onSubmit={handleProfileUpdate} />
            
            <ExperienceSection
              yearsExperience={user.yearsExperience}
              onUpdate={handleExperienceUpdate}
            />
            
            <SkillsSection
              skills={user.skills}
              certifications={user.certifications}
              onUpdateSkills={handleSkillsUpdate}
              onUpdateCertifications={handleCertificationsUpdate}
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-800">
          <button
            onClick={handleSaveChanges}
            disabled={!isFormDirty}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors duration-150
              ${isFormDirty 
                ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                : 'bg-gray-600 cursor-not-allowed'
              }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <ProfileCardModal
        user={user}
        isOpen={showProfileCard}
        onClose={() => setShowProfileCard(false)}
      />
    </div>
  );
}