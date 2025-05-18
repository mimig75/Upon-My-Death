import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [willType, setWillType] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [funeralType, setFuneralType] = useState(null);
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
  const [letters, setLetters] = useState([{ to: '', message: '', file: null, email: '', phone: '', deliveryDate: '' }]);

  const options = [
    {
      title: 'Create My Will',
      description: 'Answer a few simple questions to generate a legally sound will.',
      action: () => setSelectedOption('will')
    },
    {
      title: 'Legal & Financial Documents',
      description: 'Securely upload or record information about your legal and financial affairs.',
      action: () => setSelectedOption('legal')
    },
    {
      title: 'Digital Legacy',
      description: 'List and manage your digital accounts and online presence.',
      action: () => setSelectedOption('digital')
    },
    {
      title: 'Funeral Wishes',
      description: 'Detail your preferences to help loved ones carry out your final wishes.',
      action: () => setSelectedOption('funeral')
    },
    {
      title: 'Letters to Loved Ones',
      description: 'Write or upload heartfelt letters to be shared after your passing.',
      action: () => setSelectedOption('letter')
    },
    {
      title: 'Other Considerations',
      description: 'Include pet care, guardianship info, and other important instructions.',
      action: () => setSelectedOption('other')
    }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const updateFuneralPlan = (field, value) => {
    setFuneralPlan({ ...funeralPlan, [field]: value });
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
        <img
          src="/upon-my-death-logo.png"
          alt="Upon My Death logo"
          className="w-28 sm:w-36 md:w-44 lg:w-52 mb-2"
        />
        <p className="text-charcoal text-lg font-medium">Upon My Death</p>
      </div>

      <h1 className="text-4xl font-semibold mb-4">Upon My Death</h1>
      <p className="text-lg mb-10">
        The peace of leaving nothing unsaid. A simple, secure way to create your will, document your funeral wishes, and leave lasting messages for those you love.
      </p>

      <div className="flex flex-wrap gap-4">
        {options.map((opt, index) => (
          <div
            key={index}
            onClick={opt.action}
            className="border border-gray-300 p-4 w-72 bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-medium">{opt.title}</h2>
            <p className="text-sm mt-2">{opt.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {selectedOption === 'funeral' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Funeral Wishes</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => setFuneralType('plan')}
                className={`border p-4 rounded-lg w-full sm:w-1/2 text-left ${funeralType === 'plan' ? 'border-teal bg-white shadow-md' : 'border-gray-300 bg-gray-50'}`}
              >
                <h3 className="text-lg font-semibold mb-2">Option A: Create a Funeral Wish Plan</h3>
                <p className="text-sm">Detail your preferences, including type of ceremony, music, people, and more.</p>
              </button>
              <button
                onClick={() => setFuneralType('upload')}
                className={`border p-4 rounded-lg w-full sm:w-1/2 text-left ${funeralType === 'upload' ? 'border-teal bg-white shadow-md' : 'border-gray-300 bg-gray-50'}`}
              >
                <h3 className="text-lg font-semibold mb-2">Option B: Upload Existing Funeral Plan</h3>
                <p className="text-sm">Upload a funeral plan you’ve already created (PDF, Word, image).</p>
              </button>
            </div>

            {funeralType === 'plan' && (
              <div className="space-y-4">
                <input className="input" placeholder="Type of funeral (traditional, celebration of life, etc.)" value={funeralPlan.type} onChange={(e) => updateFuneralPlan('type', e.target.value)} />
                <input className="input" placeholder="Preferred location" value={funeralPlan.location} onChange={(e) => updateFuneralPlan('location', e.target.value)} />
                <input className="input" placeholder="Music requests" value={funeralPlan.music} onChange={(e) => updateFuneralPlan('music', e.target.value)} />
                <input className="input" placeholder="Readings" value={funeralPlan.readings} onChange={(e) => updateFuneralPlan('readings', e.target.value)} />
                <input className="input" placeholder="Dress code" value={funeralPlan.dressCode} onChange={(e) => updateFuneralPlan('dressCode', e.target.value)} />
                <input className="input" placeholder="Who should make the arrangements?" value={funeralPlan.arranger} onChange={(e) => updateFuneralPlan('arranger', e.target.value)} />
                <input className="input" placeholder="Preferred funeral parlour" value={funeralPlan.parlour} onChange={(e) => updateFuneralPlan('parlour', e.target.value)} />
                <input className="input" placeholder="People to be informed or involved" value={funeralPlan.people} onChange={(e) => updateFuneralPlan('people', e.target.value)} />
                <input className="input" placeholder="Preferred charities for donations" value={funeralPlan.charities} onChange={(e) => updateFuneralPlan('charities', e.target.value)} />
                <input className="input" placeholder="Cremation or burial preference" value={funeralPlan.cremationBurial} onChange={(e) => updateFuneralPlan('cremationBurial', e.target.value)} />
                <input className="input" placeholder="Ashes location preference (if cremated)" value={funeralPlan.ashesLocation} onChange={(e) => updateFuneralPlan('ashesLocation', e.target.value)} />
                <input className="input" placeholder="Wake details (venue, food, style, atmosphere)" value={funeralPlan.wakeDetails} onChange={(e) => updateFuneralPlan('wakeDetails', e.target.value)} />
                <p className="text-sm text-gray-600">You can return and update these wishes at any time.</p>
              </div>
            )}

            {funeralType === 'upload' && (
              <div className="mt-4">
                <p className="mb-2">Upload your existing funeral plan (PDF, Word document, or image file):</p>
                <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="input" onChange={handleFileChange} />
                {uploadedFile && <p className="text-sm mt-1 text-green-700">Uploaded: {uploadedFile.name}</p>}
              </div>
            )}
          </div>
        )}

        {selectedOption === 'letter' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Write or Upload Letters to Loved Ones</h2>
            {/* Letter handling UI here */}
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
