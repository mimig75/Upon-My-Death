import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [willType, setWillType] = useState(null);

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
        {selectedOption === 'will' && (
          <div>
            <h2 className="text-2xl font-semibold text-teal mb-4">Choose Your Will Type</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => setWillType('physical')}
                className={`border p-4 rounded-lg w-full sm:w-1/2 text-left ${willType === 'physical' ? 'border-teal bg-white shadow-md' : 'border-gray-300 bg-gray-50'}`}
              >
                <h3 className="text-lg font-semibold mb-2">Option A: Physical Will</h3>
                <p className="text-sm">Create a will for physical signing. Valid under UK law (as of May 17, 2025).</p>
              </button>
              <button
                onClick={() => setWillType('digital')}
                className={`border p-4 rounded-lg w-full sm:w-1/2 text-left ${willType === 'digital' ? 'border-teal bg-white shadow-md' : 'border-gray-300 bg-gray-50'}`}
              >
                <h3 className="text-lg font-semibold mb-2">Option B: Future Digital Will</h3>
                <p className="text-sm">Draft a digital version. <strong className="text-red-600">Not yet legally recognised in the UK.</strong></p>
              </button>
            </div>

            {willType === 'physical' && (
              <div>
                <p className="text-sm mb-4 text-red-600 font-medium">
                  Important: Only printed and signed wills are legally valid in the UK as of May 17, 2025.
                </p>
                <form className="flex flex-col gap-4 max-w-xl">
                  <input placeholder="Full name" required className="input" />
                  <input placeholder="Date of birth" required type="date" className="input" />
                  <input placeholder="Current address" required className="input" />
                  <input placeholder="Names of spouse/partner/children" className="input" />
                  <input placeholder="Name of executor (person who manages your will)" required className="input" />
                  <textarea placeholder="List of assets (property, accounts, valuables)" rows="4" className="input" />
                  <textarea placeholder="Beneficiaries (who should receive what)" rows="4" className="input" />
                  <textarea placeholder="Funeral and burial wishes" rows="3" className="input" />
                  <textarea placeholder="Any final messages or instructions" rows="3" className="input" />
                  <button type="submit" className="bg-teal text-white py-2 rounded hover:bg-[#359991]">
                    Generate My Will
                  </button>
                </form>
              </div>
            )}

            {willType === 'digital' && (
              <div className="border border-red-400 bg-red-50 text-red-700 p-4 rounded mb-4">
                <p><strong>Important:</strong> Digital wills are <u>not yet legally recognised in the UK</u> (as of May 17, 2025). This feature is offered to help you prepare for future legislation and to store your wishes securely.</p>
              </div>
            )}
          </div>
        )}

        {selectedOption === 'legal' && (
          <Section title="Legal & Financial Documents" items={[
            'Power of Attorney (POA) documents',
            'Trusts or estate plans',
            'Pension and life insurance details',
            'Bank accounts, investments, cryptocurrency',
            'Debts and outstanding obligations',
            'Property deeds / mortgage documents',
            'Business succession documents'
          ]} />
        )}

        {selectedOption === 'digital' && (
          <Section title="Digital Legacy" items={[
            'List online accounts and passwords',
            'Instructions for social media (memorialise/delete)',
            'Where to find cloud-stored files and photos',
            'Websites or domain names you own'
          ]} />
        )}

        {selectedOption === 'funeral' && (
          <Section title="Your Funeral Wishes" items={[
            'Type of funeral (traditional, celebration of life, etc.)',
            'Location, music, readings, dress code',
            'Who should be informed or involved',
            'Obituary template',
            'Preferred charities for donations'
          ]} />
        )}

        {selectedOption === 'letter' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Write a Letter</h2>
            <input placeholder="To (name)" className="input" /><br />
            <textarea placeholder="Your message..." rows="5" className="input" /><br />
            <input type="file" className="input" />
          </div>
        )}

        {selectedOption === 'other' && (
          <Section title="Other Considerations" items={[
            'Pet care instructions',
            'Guardianship info for children',
            'Safe deposit box access',
            'Preferred executor or contact',
            'Medical history for family',
            'Time-release messages',
            'Legacy timeline or scrapbook',
            'Checklist for next of kin',
            'Emergency contact system',
            'Verification system for document release',
            'Encryption and data security notes'
          ]} />
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
