import React from 'react';

type SkillsSectionProps = {
  skills: string[];
  certifications: string[];
  onUpdateSkills: (skills: string[]) => void;
  onUpdateCertifications: (certifications: string[]) => void;
};

export default function SkillsSection({
  skills,
  certifications,
  onUpdateSkills,
  onUpdateCertifications,
}: SkillsSectionProps) {
  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      onUpdateSkills([...skills, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const handleAddCertification = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      onUpdateCertifications([...certifications, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add a skill (press Enter)"
          onKeyDown={handleAddSkill}
          className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {certifications.map((cert, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              {cert}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add a certification (press Enter)"
          onKeyDown={handleAddCertification}
          className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}