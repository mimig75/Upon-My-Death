import { useState } from 'react';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);

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
    <div style={{ padding: '2rem', fontFamily: 'Georgia, serif', backgroundColor: '#f4f4f0', color: '#2e2e2e' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#4a4a4a' }}>Upon My Death</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        The peace of leaving nothing unsaid. A simple, secure way to create your will, document your funeral wishes, and leave lasting messages for those you love.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {options.map((opt, index) => (
          <div
            key={index}
            onClick={opt.action}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              width: '300px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
          >
            <h2 style={{ color: '#2e2e2e' }}>{opt.title}</h2>
            <p>{opt.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        {selectedOption === 'will' && (
          <div>
            <h2>Create Your Will</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
              <input placeholder="Full name" required />
              <input placeholder="Date of birth" required type="date" />
              <input placeholder="Current address" required />
              <input placeholder="Names of spouse/partner/children" />
              <input placeholder="Name of executor (person who manages your will)" required />
              <textarea placeholder="List of assets (property, accounts, valuables)" rows="4" />
              <textarea placeholder="Beneficiaries (who should receive what)" rows="4" />
              <textarea placeholder="Funeral and burial wishes" rows="3" />
              <textarea placeholder="Any final messages or instructions" rows="3" />
              <button type="submit">Generate My Will</button>
            </form>
          </div>
        )}

        {selectedOption === 'legal' && (
          <div>
            <h2>Legal & Financial Documents</h2>
            <ul>
              <li>Power of Attorney (POA) documents</li>
              <li>Trusts or estate plans</li>
              <li>Pension and life insurance details</li>
              <li>Bank accounts, investments, cryptocurrency</li>
              <li>Debts and outstanding obligations</li>
              <li>Property deeds / mortgage documents</li>
              <li>Business succession documents</li>
            </ul>
          </div>
        )}

        {selectedOption === 'digital' && (
          <div>
            <h2>Digital Legacy</h2>
            <ul>
              <li>List online accounts and passwords</li>
              <li>Instructions for social media (memorialise/delete)</li>
              <li>Where to
