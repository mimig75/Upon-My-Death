import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [willType, setWillType] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [funeralType, setFuneralType] = useState(null);
  const [letters, setLetters] = useState([{ to: '', message: '', file: null, email: '', phone: '', deliveryDate: '' }]);
  const [legalDocs, setLegalDocs] = useState({});
  const [funeralPlan, setFuneralPlan] = useState({
    type: '',
    location: '',
    music: '',
    readings: '',
    dressCode: '',
    arranger: '',
    parlour: '',
    people: '',
    charities: '',
    cremationBurial: '',
    ashesLocation: '',
    wakeDetails: ''
  });

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
      <div className="flex flex-col items-center mb-8">
        <img src="/upon-my-death-logo.png" alt="Logo" className="w-28 mb-2" />
        <p className="text-lg font-medium">Upon My Death</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        {[
          { title: 'Create My Will', key: 'will' },
          { title: 'Legal & Financial Documents', key: 'legal' },
          { title: 'Digital Legacy', key: 'digital' },
          { title: 'Funeral Wishes', key: 'funeral' },
          { title: 'Letters to Loved Ones', key: 'letter' },
          { title: 'Other Considerations', key: 'other' }
        ].map((opt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedOption(opt.key)}
            className="border border-gray-300 p-4 w-72 bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl font-medium">{opt.title}</h2>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {selectedOption === 'legal' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Legal & Financial Documents</h2>
            <p className="text-sm mb-6">Use either or both options below for each section. You can return and update them anytime.</p>
            <div className="space-y-8">
              {legalSections.map((section, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{section}</h3>
                  <textarea
                    className="input mb-2"
                    rows={3}
                    placeholder="Add notes, access instructions, or login details."
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
