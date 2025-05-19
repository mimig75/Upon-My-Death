import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  // Will creation state
  const [willType, setWillType] = useState(null);
  const [uploadedWillFile, setUploadedWillFile] = useState(null);
  // Letters state
  const [letters, setLetters] = useState([
    { to: '', message: '', file: null, email: '', phone: '', deliveryDate: '' }
  ]);
  // Legal & Financial state
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
  // Funeral Wishes state
  const [funeralType, setFuneralType] = useState(null);
  const [uploadedFuneralFile, setUploadedFuneralFile] = useState(null);
  const [funeralPlan, setFuneralPlan] = useState({
    type: '', location: '', music: '', readings: '', dressCode: '',
    arranger: '', parlour: '', people: '', charities: '',
    cremationBurial: '', ashesLocation: '', wakeDetails: ''
  });

  // Handlers
  const handleLegalTextChange = (section, value) => {
    setLegalDocs({
      ...legalDocs,
      [section]: { ...(legalDocs[section] || {}), notes: value }
    });
  };
  const handleLegalFileChange = (section, file) => {
    setLegalDocs({
      ...legalDocs,
      [section]: { ...(legalDocs[section] || {}), file }
    });
  };
  const updateLetter = (i, field, value) => {
    const updated = [...letters]; updated[i][field] = value;
    setLetters(updated);
  };
  const addLetter = () => {
    if (letters.length < 10) {
      setLetters([ ...letters, { to:'', message:'', file:null, email:'', phone:'', deliveryDate:'' } ]);
    }
  };
  const updateFuneralPlan = (field, value) => {
    setFuneralPlan({ ...funeralPlan, [field]: value });
  };
  const handleFuneralFile = e => setUploadedFuneralFile(e.target.files[0]);
  const handleWillFile = e => setUploadedWillFile(e.target.files[0]);

  return (
    <div className="min-h-screen p-8 font-sans bg-offwhite text-charcoal max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <img src="/upon-my-death-logo.png" alt="Logo" className="w-36 mb-2" />
        <p className="text-lg font-medium">Upon My Death</p>
        <h1 className="text-3xl font-bold mt-4 mb-2 text-center">The peace of leaving nothing unsaid</h1>
        <p className="text-center text-lg max-w-2xl">
          A simple, secure way to create your will, document your funeral wishes, and leave lasting messages for those you love.
        </p>
      </div>
      {/* Dashboard Cards */}
      <div className="flex flex-wrap gap-6 mb-10 justify-center">
        {[
          { title: 'Create My Will', key: 'will' },
          { title: 'Legal & Financial Documents', key: 'legal' },
          { title: 'Digital Legacy', key: 'digital' },
          { title: 'Funeral Wishes', key: 'funeral' },
          { title: 'Letters to Loved Ones', key: 'letter' },
          { title: 'Other Considerations', key: 'other' }
        ].map((opt, idx) => (
          <div key={idx} onClick={() => setSelectedOption(opt.key)} className="border border-gray-300 p-6 w-80 bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg text-center">
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
      {/* Section Content */}
      <div className="mt-10">
        {/* Create My Will */}
        {selectedOption === 'will' && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal">Choose Your Will Type</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div onClick={() => setWillType('physical')} className={`border p-4 rounded-lg cursor-pointer w-full md:w-1/3 ${willType==='physical'?'border-teal bg-white shadow-md':'bg-gray-100'}`}>
                <h3 className="font-semibold">Option A: Physical Will</h3>
                <p className="text-sm">Create a will for physical signing. Valid under UK law (as of May 17, 2025).</p>
              </div>
              <div onClick={() => setWillType('digital')} className={`border p-4 rounded-lg cursor-pointer w-full md:w-1/3 ${willType==='digital'?'border-teal bg-white shadow-md':'bg-gray-100'}`}>
                <h3 className="font-semibold">Option B: Future Digital Will</h3>
                <p className="text-sm text-red-600">Draft a digital version. <strong>Not yet legally recognised in the UK.</strong></p>
              </div>
              <div onClick={() => setWillType('upload')} className={`border p-4 rounded-lg cursor-pointer w-full md:w-1/3 ${willType==='upload'?'border-teal bg-white shadow-md':'bg-gray-100'}`}>
                <h3 className="font-semibold">Option C: Upload Existing Will</h3>
                <p className="text-sm">Upload a scan, photo, or PDF of an existing legally signed will.</p>
                <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="mt-2 block w-full border border-gray-300 rounded px-3 py-1" onChange={handleWillFile} />
                {uploadedWillFile && <p className="text-sm text-green-700 mt-1">Uploaded: {uploadedWillFile.name}</p>}
              </div>
            </div>
          </div>
        )}
        {/* Letters to Loved Ones */}
        {selectedOption === 'letter' && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal">Letters to Loved Ones</h2>
            <p className="text-sm text-gray-600 mb-2">You can write up to 10 letters to your loved ones.</p>
            {letters.map((letter, i) => (
              <div key={i} className="mb-4 border p-4 rounded bg-white shadow-sm">
                <input className="block w-full border p-2 mb-2 rounded" placeholder="To (name)" value={letter.to} onChange={e => updateLetter(i, 'to', e.target.value)} />
                <textarea className="block w-full border p-2 mb-2 rounded" rows={3} placeholder="Your message..." value={letter.message} onChange={e => updateLetter(i, 'message', e.target.value)} />
                <input className="block w-full border p-2 mb-2 rounded" type="file" onChange={e => updateLetter(i, 'file', e.target.files[0])} />
                <input className="block w-full border p-2 mb-2 rounded" type="email" placeholder="Recipient's Email (optional)" value={letter.email} onChange={e => updateLetter(i, 'email', e.target.value)} />
                <input className="block w-full border p-2 mb-2 rounded" type="tel" placeholder="Phone number (optional)" value={letter.phone} onChange={e => updateLetter(i, 'phone', e.target.value)} />
                <input className="block w-full border p-2 mb-2 rounded" type="date" value={letter.deliveryDate} onChange={e => updateLetter(i, 'deliveryDate', e.target
