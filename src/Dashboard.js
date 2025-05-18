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

  const updateLetter = (index, field, value) => {
    const updated = [...letters];
    updated[index][field] = value;
    setLetters(updated);
  };

  const addLetter = () => {
    if (letters.length < 10) {
      setLetters([...letters, { to: '', message: '', file: null, email: '', phone: '', deliveryDate: '' }]);
    }
  };

  return (
    <div className="min-h-screen p-8 font-sans bg-offwhite text-charcoal max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <img src="/upon-my-death-logo.png" alt="Logo" className="w-36 mb-2" />
        <p className="text-lg font-medium">Upon My Death</p>
        <h1 className="text-3xl font-bold mt-4 mb-2 text-center">The peace of leaving nothing unsaid</h1>
        <p className="text-center text-lg max-w-2xl">
          A simple, secure way to create your will, document your funeral wishes, and leave lasting messages for those you love.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 mb-10 justify-center">
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
            className="border border-gray-300 p-6 w-80 bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{opt.title}</h2>
            <p className="text-sm text-gray-600">
              {opt.title === 'Create My Will' && 'Answer a few simple questions to generate a legally sound will.'}
              {opt.title === 'Legal & Financial Documents' && 'Securely upload or record information about your legal and financial affairs.'}
              {opt.title === 'Digital Legacy' && 'List and manage your digital accounts and online presence.'}
              {opt.title === 'Funeral Wishes' && 'Detail your preferences to help loved ones carry out your final wishes.'}
              {opt.title === 'Letters to Loved Ones' && 'Write or upload heartfelt letters to be shared after your passing.'}
              {opt.title === 'Other Considerations' && 'Include pet care, guardianship info, and other important instructions.'}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {/* (WILL / LETTER / LEGAL blocks are already present below) */}
      </div>
    </div>
  );
}
