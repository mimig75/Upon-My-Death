import { useState } from 'react';

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { title: 'Upload My Will', description: 'Upload your will or other legal documents securely.', key: 'will' },
    { title: 'My Funeral Wishes', description: 'Specify your funeral preferences and arrangements.', key: 'funeral' },
    { title: 'Write a Letter', description: 'Write or upload letters to your loved ones.', key: 'letter' }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Upon My Death</h1>
      <p>The peace of leaving nothing unsaid.</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {options.map((opt) => (
          <div
            key={opt.key}
            onClick={() => setSelectedOption(opt.key)}
            style={{ border: '1px solid #ccc', padding: '1rem', cursor: 'pointer' }}
          >
            <h2>{opt.title}</h2>
            <p>{opt.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem' }}>
        {selectedOption === 'will' && (
          <>
            <h2>Upload Your Will</h2>
            <input type="file" />
          </>
        )}
        {selectedOption === 'funeral' && (
          <>
            <h2>Your Funeral Wishes</h2>
            <textarea placeholder="Describe your preferences" rows="4" cols="50" />
          </>
        )}
        {selectedOption === 'letter' && (
          <>
            <h2>Write a Letter</h2>
            <input placeholder="To (name)" /><br /><br />
            <textarea placeholder="Your message..." rows="4" cols="50" /><br /><br />
            <input type="file" />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;