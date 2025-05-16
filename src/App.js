// src/App.js

import { useState, useMemo } from 'react';

// --- SVG Icon Components ---
// (These are for the dashboard cards)
const IconWill = ({ className = "w-8 h-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);
const IconDocument = ({ className = "w-8 h-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V9.75M8.25 2.25h2.25M12 2.25h2.25M15 2.25h2.25M15 2.25 M15 5.25v2.25m-5.25-0h4.5m-4.5 2.25h4.5M15 9.75M15 12.75h-4.5m4.5 3h-4.5M15 18.75h-4.5" />
  </svg>
);
const IconDigital = ({ className = "w-8 h-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5h6M9 10.5h6M9 13.5h4.5m1.5 4.5a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v1.5Z" />
  </svg>
);
const IconFuneral = ({ className = "w-8 h-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V21M12 6.042A8.967 8.967 0 0 1 18 3.75m-6 2.292A8.967 8.967 0 0 0 6 3.75m6 17.25v-2.292" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.18 0m0 0a5.998 5.998 0 0 1-5.18 0M10.41 14.37a5.998 5.998 0 0 0 5.18 0" />
  </svg>
);
const IconLetter = ({ className = "w-8 h-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75L4.5 8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.85,10.35 C20.85,10.35 18.35,7.85 16.35,7.85 C14.35,7.85 13.35,9.35 12.35,10.35 C11.35,9.35 10.35,7.85 8.35,7.85 C6.35,7.85 3.85,10.35 3.85,10.35" transform="translate(0, -2)" />
  </svg>
);
const IconOther = ({ className = "w-8 h-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const IconInfo = ({ className = "w-5 h-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);

// --- Main Application Component ---
// It's conventional to name the main app component `App` and export it as default.
export default function App() {
  // State for the main selected dashboard option (e.g., 'will', 'legal')
  const [selectedDashboardOption, setSelectedDashboardOption] = useState(null);
  // State for the chosen will creation process (Option A or Option B)
  const [willProcessOption, setWillProcessOption] = useState(null); // 'optionA' or 'optionB'
  // State for the current step in the multi-step will creation form
  const [currentWillStep, setCurrentWillStep] = useState(0);

  // Define the main dashboard options
  const dashboardOptions = useMemo(() => [
    { id: 'will', title: 'My Will', description: 'Create, manage, and securely store your last will and testament.', icon: <IconWill /> , action: () => { setSelectedDashboardOption('will'); setWillProcessOption(null); setCurrentWillStep(0); } },
    { id: 'legal', title: 'Legal & Financial', description: 'Securely upload or record your legal and financial affairs.', icon: <IconDocument />, action: () => setSelectedDashboardOption('legal') },
    { id: 'digital', title: 'Digital Legacy', description: 'List and manage your digital accounts and online presence.', icon: <IconDigital />, action: () => setSelectedDashboardOption('digital') },
    { id: 'funeral', title: 'Funeral Wishes', description: 'Detail your preferences for your final wishes.', icon: <IconFuneral />, action: () => setSelectedDashboardOption('funeral') },
    { id: 'letter', title: 'Letters to Loved Ones', description: 'Write or upload heartfelt messages for after your passing.', icon: <IconLetter />, action: () => setSelectedDashboardOption('letter') },
    { id: 'other', title: 'Other Considerations', description: 'Pet care, guardianship, and other important instructions.', icon: <IconOther />, action: () => setSelectedDashboardOption('other') }
  ], []);

  // Define the steps for the will creation process
  const willCreationSteps = useMemo(() => [
    { id: 'details', title: 'Your Details' },
    { id: 'executor', title: 'Executor' },
    { id: 'beneficiaries', title: 'Beneficiaries & Assets' },
    { id: 'guardians', title: 'Guardians' },
    { id: 'funeralSummary', title: 'Funeral Summary' },
    { id: 'otherInstructions', title: 'Other Instructions' },
    { id: 'review', title: 'Review & Confirm' } // Conceptual review step
  ], []);

  // Handle form submission for the will
  const handleWillFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // In a real app, you would collect data from each step and compile it
    console.log("Will Data (Current Step):", data);
    console.log("Chosen Will Process:", willProcessOption);

    if (currentWillStep === willCreationSteps.length - 1) { // If it's the review/final step
        if (willProcessOption === 'optionA') {
            // Placeholder: In a real app, trigger PDF generation and provide download.
            alert("Will content prepared for all steps!\n\nNext Steps (IMPORTANT for legal validity in UK):\n1. Download the Will document (PDF generation needed).\n2. Print the document.\n3. Sign it in the presence of two independent adult witnesses.\n4. Both witnesses must also sign in your presence.\n5. Store the original physical document safely.\n\nUpload a scanned copy here for your records.");
        } else if (willProcessOption === 'optionB') {
            // Placeholder: In a real app, save all collected data securely.
            alert("Draft Future Digital Will Saved!\n\nIMPORTANT: This digitally prepared will is NOT YET legally binding in the UK. Current UK law (as of May 15, 2025) requires physical printing, signing, and witnessing.\n\nThis feature allows you to prepare your wishes. We are monitoring UK legislation.");
        }
        // Reset state and navigate back to dashboard after completion
        setSelectedDashboardOption(null);
        setWillProcessOption(null);
        setCurrentWillStep(0);
    } else {
        // Move to the next step
        setCurrentWillStep(prev => prev + 1);
    }
  };

  const handleSaveDraft = () => {
    // Placeholder: In a real app, collect and save data from current and previous steps.
    console.log("Save Draft Clicked. Will Process:", willProcessOption, "Current Step:", currentWillStep);
    alert("Draft Saved! (Functionality to be fully implemented)\nYou can return later to complete your will.");
    setSelectedDashboardOption(null); // Navigate back to dashboard
  }

  return (
    // The `font-sans` class will apply Lato if configured in tailwind.config.js
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      <header className="mb-8 pb-4 text-center flex flex-col items-center">
        {/* Logo Integration */}
        <img
          // Ensure the logo image is in your `public` folder or accessible via this path
          src="/upon-my-death-logo.png"
          alt="Upon My Death Logo"
          // Adjust height as needed. Width will scale automatically.
          // The black background of the provided PNG will be visible.
          // A logo with a transparent background is highly recommended.
          className="h-20 md:h-24 w-auto mb-2"
        />
        <p className="text-lg text-slate-600 mt-1">
          The peace of leaving nothing unsaid.
        </p>
      </header>

      {/* Main Dashboard View */}
      {!selectedDashboardOption && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {dashboardOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={opt.action}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <div className="flex items-center mb-3 text-blue-600"> {/* App theme color (blue) retained */}
                {opt.icon}
                <h2 className="text-xl font-semibold ml-3 text-slate-700">{opt.title}</h2>
              </div>
              <p className="text-slate-600 text-sm">{opt.description}</p>
            </button>
          ))}
        </div>
      )}

      {/* Content Area for Selected Dashboard Option */}
      {/* This div is hidden if no option is selected */}
      <div className={`mt-8 p-4 md:p-8 bg-white rounded-xl shadow-xl max-w-3xl mx-auto ${!selectedDashboardOption ? 'hidden' : ''}`}>
        {/* --- My Will Section --- */}
        {selectedDashboardOption === 'will' && (
          <div>
            {/* Step 1: Choose Will Creation Process (Option A or B) */}
            {!willProcessOption && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3 mb-6">My Will: Choose Your Approach</h2>
                <p className="text-slate-600 mb-6">Please select how you would like to proceed. UK law currently has specific requirements for a will to be legally valid.</p>
                <div className="flex flex-col md:flex-row gap-6">
                  <button
                    onClick={() => setWillProcessOption('optionA')}
                    className="border-2 border-blue-500 p-6 rounded-lg cursor-pointer flex-1 bg-blue-50 hover:bg-blue-100 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Option A: Create Will for Physical Signing</h3>
                    <p className="text-sm text-slate-600 mb-2">Guides you to create your will. You will then need to print, sign, and have it witnessed according to current UK legal requirements.</p>
                    <p className="font-bold text-blue-600 text-sm">Recommended for immediate legal validity.</p>
                  </button>
                  <button
                    onClick={() => setWillProcessOption('optionB')}
                    className="border-2 border-amber-500 p-6 rounded-lg cursor-pointer flex-1 bg-amber-50 hover:bg-amber-100 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <h3 className="text-lg font-semibold text-amber-700 mb-2">Option B: Prepare a Future Digital Will</h3>
                    <p className="text-sm text-slate-600 mb-2">Draft your will digitally. If/when UK law recognizes fully electronic wills, this feature will be updated.</p>
                    <p className="font-bold text-amber-600 text-sm">Note: Not yet legally binding in the UK (as of May 15, 2025).</p>
                  </button>
                </div>
                <button onClick={() => setSelectedDashboardOption(null)} className="mt-8 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                  Back to Dashboard
                </button>
              </div>
            )}

            {/* Step 2: Multi-Step Will Creation Form */}
            {willProcessOption && (
              <div>
                <h2 className="text-2xl font-semibold text-slate-700 mb-2">
                  {willProcessOption === 'optionA' ? 'Create Your Will (for Print & Sign)' : 'Prepare Your Future Digital Will Draft'}
                </h2>

                {/* Stepper UI */}
                <div className="mb-8 overflow-x-auto">
                  <nav aria-label="Progress">
                    <ol role="list" className="flex items-center space-x-1 sm:space-x-2">
                      {willCreationSteps.map((step, stepIdx) => (
                        <li key={step.title} className="flex-1 min-w-[80px]"> {/* min-w for smaller screens */}
                          {stepIdx <= currentWillStep ? (
                            <a href="#" onClick={(e) => { e.preventDefault(); if(stepIdx < currentWillStep) setCurrentWillStep(stepIdx);}} className={`group flex flex-col items-center py-2 border-b-4 ${stepIdx === currentWillStep ? 'border-blue-600' : 'border-blue-400 hover:border-blue-500'}`}>
                              <span className={`text-xs text-center font-semibold ${stepIdx === currentWillStep ? 'text-blue-600' : 'text-blue-500 group-hover:text-blue-600'}`}>{step.title}</span>
                            </a>
                          ) : (
                            <div className="group flex flex-col items-center py-2 border-b-4 border-slate-300">
                              <span className="text-xs text-center font-semibold text-slate-400">{step.title}</span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>


                {/* Disclaimer for Option B */}
                {willProcessOption === 'optionB' && (
                  <div className="my-4 p-4 border-l-4 border-red-500 bg-red-50 text-red-700 rounded-md">
                    <p><strong>Important Notice:</strong> You are preparing a draft for a future digital will. As of May 15, 2025, for this will to be legally binding in the UK, it <strong>must be printed, then signed and witnessed physically</strong> according to the Wills Act 1837. This digital preparation does not currently constitute a legally valid will on its own.</p>
                  </div>
                )}
                {/* Instructions for Option A */}
                {willProcessOption === 'optionA' && currentWillStep === 0 && (
                  <div className="my-4 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-700 rounded-md">
                    <p><strong>Instructions:</strong> Complete each section. After the final step, you will be guided to download and print the document for physical signing and witnessing as required by UK law.</p>
                  </div>
                )}

                <form onSubmit={handleWillFormSubmit} className="space-y-6">
                  {/* Conditionally render form sections based on currentWillStep */}
                  {willCreationSteps[currentWillStep].id === 'details' && (
                    <fieldset className="p-4 border border-slate-300 rounded-lg">
                      <legend className="text-lg font-medium text-slate-700 px-2">1. Your Details</legend>
                      <div className="space-y-4 mt-2">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-slate-600 mb-1">Full Legal Name <button type="button" title="Enter your name exactly as it appears on official documents like your passport or driving licence." onClick={()=>alert('Enter your name exactly as it appears on official documents like your passport or driving licence.')} className="text-blue-500 hover:text-blue-700"><IconInfo className="inline ml-1"/></button></label>
                          <input id="fullName" name="fullName" placeholder="e.g., John Michael Doe" required className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                          <label htmlFor="dob" className="block text-sm font-medium text-slate-600 mb-1">Date of Birth</label>
                          <input id="dob" name="dob" required type="date" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-slate-600 mb-1">Current Address</label>
                          <input id="address" name="address" placeholder="Street, Town, County, Postcode" required className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                      </div>
                    </fieldset>
                  )}

                  {willCreationSteps[currentWillStep].id === 'executor' && (
                    <fieldset className="p-4 border border-slate-300 rounded-lg">
                      <legend className="text-lg font-medium text-slate-700 px-2">2. Executor Details</legend>
                      <p className="text-sm text-slate-500 mb-3">Your Executor carries out the wishes in your will. They should be someone you trust, over 18, and can be a beneficiary.</p>
                      <div>
                        <label htmlFor="executorName" className="block text-sm font-medium text-slate-600 mb-1">Executor's Full Name <button type="button" title="You can appoint one or more executors. If appointing more than one, specify if they should act jointly or if one can act if the other is unable." onClick={()=>alert('You can appoint one or more executors. If appointing more than one, specify if they should act jointly or if one can act if the other is unable.')} className="text-blue-500 hover:text-blue-700"><IconInfo className="inline ml-1"/></button></label>
                        <input id="executorName" name="executorName" placeholder="Name of primary executor" required className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                      {/* TODO: Add more fields for executor's address, and options for multiple/substitute executors */}
                    </fieldset>
                  )}

                  {willCreationSteps[currentWillStep].id === 'beneficiaries' && (
                     <fieldset className="p-4 border border-slate-300 rounded-lg">
                        <legend className="text-lg font-medium text-slate-700 px-2">3. Beneficiaries & Assets</legend>
                        <p className="text-sm text-slate-500 mb-3">List who should inherit your assets (property, money, specific items).</p>
                        <div>
                            <label htmlFor="familyDetails" className="block text-sm font-medium text-slate-600 mb-1">Spouse/Partner/Children (for context)</label>
                            <textarea id="familyDetails" name="familyDetails" placeholder="e.g., Spouse: Jane Doe, Children: John Doe, Alice Doe" rows="2" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="assets" className="block text-sm font-medium text-slate-600 mb-1">Main Assets <button type="button" title="List significant assets like property, bank accounts, investments, valuable personal items." onClick={()=>alert('List significant assets like property, bank accounts, investments, valuable personal items.')} className="text-blue-500 hover:text-blue-700"><IconInfo className="inline ml-1"/></button></label>
                            <textarea id="assets" name="assets" placeholder="e.g., House at [Address], Savings in [Bank], Shares in [Company]" rows="3" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="beneficiariesText" className="block text-sm font-medium text-slate-600 mb-1">Specific Gifts & Residuary Estate <button type="button" title="Specify any particular items or sums of money for individuals or charities. Then state who should receive the remainder (residue) of your estate." onClick={()=>alert('Specify any particular items or sums of money for individuals or charities. Then state who should receive the remainder (residue) of your estate.')} className="text-blue-500 hover:text-blue-700"><IconInfo className="inline ml-1"/></button></label>
                            <textarea id="beneficiariesText" name="beneficiariesText" placeholder="e.g., I give my watch to [Name]. I give £1000 to [Charity]. The rest of my estate I leave to [Name/s]." rows="4" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                    </fieldset>
                  )}

                   {willCreationSteps[currentWillStep].id === 'guardians' && (
                     <fieldset className="p-4 border border-slate-300 rounded-lg">
                        <legend className="text-lg font-medium text-slate-700 px-2">4. Guardians for Minor Children</legend>
                        <p className="text-sm text-slate-500 mb-3">If you have children under 18, you can appoint guardians. This is a very important decision.</p>
                        <div>
                            <label htmlFor="guardiansText" className="block text-sm font-medium text-slate-600 mb-1">Appointed Guardian(s) Name(s) & Address(es) <button type="button" title="Ensure you have discussed this with the person(s) you wish to appoint." onClick={()=>alert('Ensure you have discussed this with the person(s) you wish to appoint.')} className="text-blue-500 hover:text-blue-700"><IconInfo className="inline ml-1"/></button></label>
                            <textarea id="guardiansText" name="guardiansText" placeholder="Full name and address of guardian(s). You can also appoint substitute guardians." rows="3" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                    </fieldset>
                  )}

                  {willCreationSteps[currentWillStep].id === 'funeralSummary' && (
                    <fieldset className="p-4 border border-slate-300 rounded-lg">
                        <legend className="text-lg font-medium text-slate-700 px-2">5. Funeral Wishes (Summary)</legend>
                        <p className="text-sm text-slate-500 mb-3">You can detail full wishes in the 'Funeral Wishes' section of the dashboard. You may include a brief summary in your will if desired.</p>
                        <div>
                            <label htmlFor="funeralSummaryText" className="block text-sm font-medium text-slate-600 mb-1">Brief Funeral Wishes</label>
                            <textarea id="funeralSummaryText" name="funeralSummaryText" placeholder="e.g., I wish to be cremated. I prefer no formal service. See full details in Funeral Wishes section." rows="3" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                    </fieldset>
                  )}

                  {willCreationSteps[currentWillStep].id === 'otherInstructions' && (
                    <fieldset className="p-4 border border-slate-300 rounded-lg">
                        <legend className="text-lg font-medium text-slate-700 px-2">6. Other Instructions for your Will</legend>
                         <p className="text-sm text-slate-500 mb-3">Include any other specific directives for your will, such as care for pets or explanations for certain decisions.</p>
                        <div>
                            <label htmlFor="finalMessages" className="block text-sm font-medium text-slate-600 mb-1">Additional Instructions</label>
                            <textarea id="finalMessages" name="finalMessages" placeholder="e.g., Instructions regarding pets, digital assets not covered elsewhere, or specific messages to be included as part of the will's directives." rows="3" className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                    </fieldset>
                  )}

                  {willCreationSteps[currentWillStep].id === 'review' && (
                    <div className="p-4 border border-slate-300 rounded-lg">
                        <h3 className="text-lg font-medium text-slate-700">7. Review & Confirm Your Will</h3>
                        <p className="text-slate-600 my-4">Please carefully review all the information you have entered. Once you submit, you will be guided on the next steps for making your will legally valid (Option A) or saving your draft (Option B).</p>
                        {/* In a real app, you would display all collected data here from previous steps for final review */}
                        <div className="p-3 bg-slate-100 rounded-md">
                            <p className="font-semibold text-slate-700">Review Summary:</p>
                            <p className="text-sm text-slate-600 mt-2"> (All entered information from previous steps would be displayed here for the user to check before final submission.)</p>
                        </div>
                    </div>
                  )}


                  {/* Navigation Buttons for Stepper */}
                  <div className="mt-8 pt-5 border-t border-slate-200 flex justify-between items-center">
                    <div>
                      {currentWillStep > 0 && (
                        <button type="button" onClick={() => setCurrentWillStep(prev => prev - 1)} className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                          Previous
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="button" onClick={handleSaveDraft} className="text-sm text-blue-600 hover:text-blue-800 font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          Save Draft & Exit
                        </button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          {currentWillStep === willCreationSteps.length - 1 ? (willProcessOption === 'optionA' ? 'Finalise for Printing' : 'Save Digital Draft') : 'Next'}
                        </button>
                    </div>
                  </div>
                </form>
                <button onClick={() => { setWillProcessOption(null); setCurrentWillStep(0);}} className="mt-6 text-sm text-slate-600 hover:text-slate-800">
                    &larr; Back to Will Options
                </button>
              </div>
            )}
          </div>
        )}

        {/* --- Placeholder for other dashboard sections --- */}
        {selectedDashboardOption && selectedDashboardOption !== 'will' && (
          <div>
            <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3 mb-6">
              {dashboardOptions.find(opt => opt.id === selectedDashboardOption)?.title}
            </h2>
            <p className="text-slate-600">Content for the "{dashboardOptions.find(opt => opt.id === selectedDashboardOption)?.title}" section will go here.</p>
            {/* Example content for 'legal' section */}
            {selectedDashboardOption === 'legal' && (
                <ul className="list-disc pl-5 mt-4 space-y-1 text-slate-600">
                    <li>Upload Power of Attorney (POA) documents</li>
                    <li>Record details of Trusts or estate plans</li>
                    <li>Store Pension and life insurance policy information</li>
                     {/* Add more relevant items */}
                </ul>
            )}
            <button onClick={() => setSelectedDashboardOption(null)} className="mt-8 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
              Back to Dashboard
            </button>
          </div>
        )}

        {/* Fallback if a dashboard option is selected but no content is defined (shouldn't happen with current logic) */}
        {selectedDashboardOption && !dashboardOptions.find(opt => opt.id === selectedDashboardOption) && (
             <button onClick={() => setSelectedDashboardOption(null)} className="mt-8 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
              Back to Dashboard
            </button>
        )}
      </div>

      {/* Message if no dashboard option is selected */}
      {!selectedDashboardOption && (
        <p className="text-center text-slate-500 mt-12">Select an option above to get started.</p>
      )}
    </div>
  );
}
