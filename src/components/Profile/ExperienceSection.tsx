import React from 'react';

type ExperienceSectionProps = {
  yearsExperience: number;
  onUpdate: (years: number) => void;
};

export default function ExperienceSection({ yearsExperience, onUpdate }: ExperienceSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Cybersecurity Experience</h3>
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-300">
          Years of Experience
        </label>
        <input
          type="number"
          id="experience"
          min="0"
          max="50"
          value={yearsExperience}
          onChange={(e) => onUpdate(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}