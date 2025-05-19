import React, { useState } from 'react';

const Dashboard = () => {
  const [willType, setWillType] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div className="dashboard-container">
      {/* Letters to Loved Ones Section */}
      <section className="section">
        <h2 className="section-title">Letters to Loved Ones</h2>
        <p className="section-description">
          Write up to 10 personal letters to your loved ones.
        </p>
        {/* Add your existing code for this section here */}
      </section>

      {/* Legal & Financial Documents Section */}
      <section className="section">
        <h2 className="section-title">Legal & Financial Documents</h2>
        {/* Add your existing code for this section here */}
      </section>

      {/* Create My Will Section */}
      <section className="section">
        <h2 className="section-title">Create My Will</h2>
        <div className="will-options">
          {/* Option A: Physical Will */}
          <div
            onClick={() => setWillType('physical')}
            className={`will-option ${
              willType === 'physical' ? 'selected' : ''
            }`}
          >
            <h3>Option A: Physical Will</h3>
            <p>
              Create a will for physical signing. Valid under UK law (as of May
              17, 2025).
            </p>
          </div>

          {/* Option B: Future Digital Will */}
          <div
            onClick={() => setWillType('digital')}
            className={`will-option ${
              willType === 'digital' ? 'selected' : ''
            }`}
          >
            <h3>Option B: Future Digital Will</h3>
            <p className="warning">
              Draft a digital version. <strong>Not yet legally recognised in the UK.</strong>
            </p>
          </div>

          {/* Option C: Upload Existing Will */}
          <div
            onClick={() => setWillType('upload')}
            className={`will-option ${
              willType === 'upload' ? 'selected' : ''
            }`}
          >
            <h3>Option C: Upload Existing Will</h3>
            <p>
              Upload a scan, photo, or PDF of an existing legally signed will.
            </p>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => setUploadedFile(e.target.files[0])}
            />
            {uploadedFile && (
              <p className="upload-success">
                Uploaded: {uploadedFile.name}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
