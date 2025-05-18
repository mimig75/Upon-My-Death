import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [willType, setWillType] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [letters, setLetters] = useState([{ to: '', message: '', file: null }]);

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

  const updateLetter = (index, field, value) => {
    const updated = [...letters];
    updated[index][field] = value;
    setLetters(updated);
  };

  const addLetter = () => {
    if (letters.length < 10) {
      setLetters([...letters, { to: '', message: '', file: null }]);
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
        {selectedOption === 'letter' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Write or Upload Letters to Loved Ones</h2>
            {letters.map((letter, index) => (
              <div key={index} className="mb-6 p-4 border rounded shadow bg-white">
                <h3 className="text-lg font-semibold mb-2">Letter {index + 1}</h3>
                <input
                  placeholder="To (name)"
                  className="input mb-2"
                  value={letter.to}
                  onChange={(e) => updateLetter(index, 'to', e.target.value)}
                />
                <textarea
                  placeholder="Your message..."
                  rows="4"
                  className="input mb-2"
                  value={letter.message}
                  onChange={(e) => updateLetter(index, 'message', e.target.value)}
                />
                <input
                  type="file"
                  accept=".doc,.docx,.pdf,.png,.jpg,.jpeg"
                  className="input"
                  onChange={(e) => updateLetter(index, 'file', e.target.files[0])}
                />
                {letter.file && <p className="text-sm mt-1 text-green-700">Uploaded: {letter.file.name}</p>}
              </div>
            ))}
            {letters.length < 10 && (
              <button
                className="bg-teal text-white px-4 py-2 rounded hover:bg-[#359991]"
                onClick={addLetter}
              >
                Add Another Letter
              </button>
            )}
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
