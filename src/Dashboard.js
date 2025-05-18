// Code continuation from your current Dashboard
import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [legalDocs, setLegalDocs] = useState({});

  const legalSections = [
    'Power of Attorney (POA) documents',
    'Trusts or estate plans',
    'Pension and life insurance details',
    'Bank accounts, investments, cryptocurrency',
    'Debts and outstanding obligations',
    'Property deeds / mortgage documents',
    'Business succession documents'
  ];

  const handleLegalTextChange = (section, value) => {
    setLegalDocs({
      ...legalDocs,
      [section]: {
        ...(legalDocs[section] || {}),
        notes: value
      }
    });
  };

  const handleLegalFileChange = (section, file) => {
    setLegalDocs({
      ...legalDocs,
      [section]: {
        ...(legalDocs[section] || {}),
        file
      }
    });
  };

  return (
    <div className="min-h-screen p-8 font-sans bg-offwhite text-charcoal max-w-5xl mx-auto">
      {/* ... existing header, logo, and option cards ... */}

      <div className="mt-10">
        {selectedOption === 'legal' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Legal & Financial Documents</h2>
            <p className="text-sm mb-6">You can use either or both options for each section below. Feel free to return and update them any time.</p>
            <div className="space-y-8">
              {legalSections.map((section, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{section}</h3>
                  <textarea
                    className="input mb-2"
                    rows={3}
                    placeholder="Add notes, access instructions, account details, or anything you'd like someone to know."
                    value={legalDocs[section]?.notes || ''}
                    onChange={(e) => handleLegalTextChange(section, e.target.value)}
                  />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="input"
                    onChange={(e) => handleLegalFileChange(section, e.target.files[0])}
                  />
                  {legalDocs[section]?.file && (
                    <p className="text-sm text-green-700 mt-1">Uploaded: {legalDocs[section].file.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-teal">{title}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}