import { useState } from 'react';
import './index.css';

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
  // Will creation state
  const [willType, setWillType] = useState(null);
  const [willStep, setWillStep] = useState(1);
  const [willData, setWillData] = useState({
    // Section 1
    jurisdiction: '', fullName: '', otherNames: '', address: '', dob: '', maritalStatus: '', marriageDate: '', previousMarriage: false, futureMarriage: false,
    // Section 2
    hasPreviousWills: false,
    // Section 3
    primaryExecutors: '', substituteExecutors: '', executorsConfirmed: false, professionalExecutor: '',
    // Section 4
    hasMinorChildren: false, primaryGuardians: '', substituteGuardians: '', guardiansConfirmed: false, letterOfWishes: false,
    // Section 5
    specificGifts: '', pecuniaryGifts: '', charitableGifts: '', residuaryBeneficiaries: '', survivorshipClause: false, minorTrustAge: '',
    // Section 6
    funeralPreferences: '',
    // Section 7
    hasPets: false, petCarer: '', petFunds: '', petAlternative: '', petCharity: false,
    // Section 8
    digitalWishes: '', digitalExecutor: '',
    // Section 9
    propertyOutsideUK: false, businessOwnership: false, complexTrusts: false, vulnerableBeneficiaries: false, complexFamily: false,
    capacityFreeWill: true, capacityUnderstand: true, capacityMedicine: false
  });
  const [uploadedWillFile, setUploadedWillFile] = useState(null);

  const handleWillChange = (field, value) => {
    setWillData({ ...willData, [field]: value });
  };
  const handleNext = () => setWillStep(willStep + 1);
  const handleBack = () => setWillStep(willStep - 1);
  const handleWillFile = e => setUploadedWillFile(e.target.files[0]);

  return (
    <div className="p-8 font-sans bg-offwhite text-charcoal max-w-5xl mx-auto">
      {/* Header and cards omitted for brevity */}
      <div className="mt-10">
        {selectedOption === 'will' && (
          <div>
            {!willType ? (
              <div className="flex gap-4">
                <div onClick={() => setWillType('physical')} className="option-card">Option A: Physical Will</div>
                <div onClick={() => setWillType('digital')} className="option-card">Option B: Future Digital Will</div>
                <div onClick={() => setWillType('upload')} className="option-card">Option C: Upload Existing Will</div>
              </div>
            ) : willType === 'upload' ? (
              <div>
                <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleWillFile} />
                {uploadedWillFile && <p>Uploaded: {uploadedWillFile.name}</p>}
              </div>
            ) : (
              <div className="will-form">
                <h2 className="text-xl font-semibold mb-4">Will Creation - Step {willStep} of 11</h2>
                {/* Section 1 */}
                {willStep === 1 && (
                  <div className="space-y-4">
                    <p>To ensure your will follows the correct law, which UK jurisdiction applies to you?</p>
                    <select value={willData.jurisdiction} onChange={e => handleWillChange('jurisdiction', e.target.value)}>
                      <option value="">Select jurisdiction</option>
                      <option>England and Wales</option>
                      <option>Scotland</option>
                      <option>Northern Ireland</option>
                    </select>
                    <input type="text" placeholder="Full legal name" value={willData.fullName} onChange={e => handleWillChange('fullName', e.target.value)} />
                    <input type="text" placeholder="Other names (maiden, aliases)" value={willData.otherNames} onChange={e => handleWillChange('otherNames', e.target.value)} />
                    <input type="text" placeholder="Current address" value={willData.address} onChange={e => handleWillChange('address', e.target.value)} />
                    <input type="date" placeholder="Date of birth" value={willData.dob} onChange={e => handleWillChange('dob', e.target.value)} />
                    <select value={willData.maritalStatus} onChange={e => handleWillChange('maritalStatus', e.target.value)}>
                      <option value="">Marital/Civil Partnership status</option>
                      <option>Single</option><option>Married</option><option>Civil Partnership</option>
                      <option>Divorced</option><option>Widowed</option><option>Separated</option>
                    </select>
                    {(willData.maritalStatus === 'Married' || willData.maritalStatus === 'Civil Partnership') && (
                      <input type="date" placeholder="Marriage date" value={willData.marriageDate} onChange={e => handleWillChange('marriageDate', e.target.value)} />
                    )}
                    <label><input type="checkbox" checked={willData.previousMarriage} onChange={e => handleWillChange('previousMarriage', e.target.checked)} /> Previously married/partnered?</label>
                    <label><input type="checkbox" checked={willData.futureMarriage} onChange={e => handleWillChange('futureMarriage', e.target.checked)} /> Planning to marry/register?</label>
                  </div>
                )}
                {/* Section 2 */}
                {willStep === 2 && (
                  <div className="space-y-4">
                    <p>Do you have any previous Wills or Codicils? We typically revoke old wills to avoid confusion.</p>
                    <label><input type="checkbox" checked={willData.hasPreviousWills} onChange={e => handleWillChange('hasPreviousWills', e.target.checked)} /> Yes, I have previous wills/codicils</label>
                  </div>
                )}
                {/* Section 3 */}
                {willStep === 3 && (
                  <div className="space-y-4">
                    <p>Executors carry out your wishes. Please provide details:</p>
                    <textarea placeholder="Primary executor name & address" value={willData.primaryExecutors} onChange={e => handleWillChange('primaryExecutors', e.target.value)} />
                    <textarea placeholder="Substitute executor(s)" value={willData.substituteExecutors} onChange={e => handleWillChange('substituteExecutors', e.target.value)} />
                    <label><input type="checkbox" checked={willData.executorsConfirmed} onChange={e => handleWillChange('executorsConfirmed', e.target.checked)} /> I have confirmed they can act</label>
                    <textarea placeholder="Professional executor details (optional)" value={willData.professionalExecutor} onChange={e => handleWillChange('professionalExecutor', e.target.value)} />
                  </div>
                )}
                {/* Section 4 */}
                {willStep === 4 && (
                  <div className="space-y-4">
                    <p>Guardians care for minor children if needed:</p>
                    <label><input type="checkbox" checked={willData.hasMinorChildren} onChange={e => handleWillChange('hasMinorChildren', e.target.checked)} /> I have children under 18</label>
                    {willData.hasMinorChildren && (
                      <>
                        <textarea placeholder="Primary guardian(s)" value={willData.primaryGuardians} onChange={e => handleWillChange('primaryGuardians', e.target.value)} />
                        <textarea placeholder="Substitute guardian(s)" value={willData.substituteGuardians} onChange={e => handleWillChange('substituteGuardians', e.target.value)} />
                        <label><input type="checkbox" checked={willData.guardiansConfirmed} onChange={e => handleWillChange('guardiansConfirmed', e.target.checked)} /> Confirmed with guardians</label>
                        <label><input type="checkbox" checked={willData.letterOfWishes} onChange={e => handleWillChange('letterOfWishes', e.target.checked)} /> Remind me to prepare a Letter of Wishes</label>
                      </>
                    )}
                  </div>
                )}
                {/* Section 5 */}
                {willStep === 5 && (
                  <div className="space-y-4">
                    <p>Beneficiaries: Gifts and residuary estate:</p>
                    <textarea placeholder="Specific gifts (item, beneficiary)" value={willData.specificGifts} onChange={e => handleWillChange('specificGifts', e.target.value)} />
                    <textarea placeholder="Cash gifts (amount, beneficiary)" value={willData.pecuniaryGifts} onChange={e => handleWillChange('pecuniaryGifts', e.target.value)} />
                    <textarea placeholder="Charitable gifts" value={willData.charitableGifts} onChange={e => handleWillChange('charitableGifts', e.target.value)} />
                    <textarea placeholder="Residuary beneficiaries & division" value={willData.residuaryBeneficiaries} onChange={e => handleWillChange('residuaryBeneficiaries', e.target.value)} />
                    <label><input type="checkbox" checked={willData.survivorshipClause} onChange={e => handleWillChange('survivorshipClause', e.target.checked)} /> Include survivorship clause</label>
                    <input type="number" placeholder="Age for minors to inherit" value={willData.minorTrustAge} onChange={e => handleWillChange('minorTrustAge', e.target.value)} />
                  </div>
                )}
                {/* Section 6 */}
                {willStep === 6 && (
                  <div className="space-y-4">
                    <p>Funeral wishes (preferences are not legally binding):</p>
                    <textarea placeholder="Funeral and burial preferences" value={willData.funeralPreferences} onChange={e => handleWillChange('funeralPreferences', e.target.value)} />
                  </div>
                )}
                {/* Section 7 */}
                {willStep === 7 && (
                  <div className="space-y-4">
                    <p>Provision for pets:</p>
                    <label><input type="checkbox" checked={willData.hasPets} onChange={e => handleWillChange('hasPets', e.target.checked)} /> I want to make provisions for pets</label>
                    {willData.hasPets && (
                      <>
                        <input type="text" placeholder="Pet carer details" value={willData.petCarer} onChange={e => handleWillChange('petCarer', e.target.value)} />
                        <input type="text" placeholder="Funds for care" value={willData.petFunds} onChange={e => handleWillChange('petFunds', e.target.value)} />
                        <input type="text" placeholder="Alternative carer" value={willData.petAlternative} onChange={e => handleWillChange('petAlternative', e.target.value)} />
                        <label><input type="checkbox" checked={willData.petCharity} onChange={e => handleWillChange('petCharity', e.target.checked)} /> Consider charity care</label>
                      </>
                    )}
                  </div>
                )}
                {/* Section 8 */}
                {willStep === 8 && (
                  <div className="space-y-4">
                    <p>Digital assets and wishes:</p>
                    <textarea placeholder="General digital wishes" value={willData.digitalWishes} onChange={e => handleWillChange('digitalWishes', e.target.value)} />
                    <input type="text" placeholder="Digital executor details" value={willData.digitalExecutor} onChange={e => handleWillChange('digitalExecutor', e.target.value)} />
                  </div>
                )}
                {/* Section 9 */}
                {willStep === 9 && (
                  <div className="space-y-4">
                    <p>Complexity & IHT indicators:</p>
                    <label><input type="checkbox" checked={willData.propertyOutsideUK} onChange={e => handleWillChange('propertyOutsideUK', e.target.checked)} /> Own property outside UK?</label>
                    <label><input type="checkbox" checked={willData.businessOwnership} onChange={e => handleWillChange('businessOwnership', e.target.checked)} /> Own business interests?</label>
                    <label><input type="checkbox" checked={willData.complexTrusts} onChange={e => handleWillChange('complexTrusts', e.target.checked)} /> Complex trusts needed?</label>
                    <label><input type="checkbox" checked={willData.vulnerableBeneficiaries} onChange={e => handleWillChange('vulnerableBeneficiaries', e.target.checked)} /> Beneficiaries with special needs?</label>
                    <label><input type="checkbox" checked={willData.complexFamily} onChange={e => handleWillChange('complexFamily', e.target.checked)} /> Complex family situation?</label>
                  </div>
                )}
                {/* Section 10 */}
                {willStep === 10 && (
                  <div className="space-y-4">
                    <p>Capacity & undue influence check:</p>
                    <label><input type="checkbox" checked={willData.capacityFreeWill} onChange={e => handleWillChange('capacityFreeWill', e.target.checked)} /> I confirm free will</label>
                    <label><input type="checkbox" checked={willData.capacityUnderstand} onChange={e => handleWillChange('capacityUnderstand', e.target.checked)} /> I understand my assets and wishes</label>
                    <label><input type="checkbox" checked={willData.capacityMedicine} onChange={e => handleWillChange('capacityMedicine', e.target.checked)} /> Medication affecting understanding?</label>
                  </div>
                )}
                {/* Section 11 */}
                {willStep === 11 && (
                  <div className="space-y-4">
                    <p>Review and execution instructions:</p>
                    <p>Please review your entries carefully. Once satisfied, use the button below to generate your will document tailored to UK law. You will then have clear instructions to print/sign or sign online and obtain two witness signatures.</p>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  {willStep > 1 && <button onClick={handleBack}>Back</button>}
                  {willStep < 11 && <button onClick={handleNext}>Next</button>}
                  {willStep === 11 && <button onClick={() => alert('Your will document has been generated!')}>Generate Will</button>}
                </div>
                <p className="mt-2 text-sm text-gray-600">For complex estates or any doubts, please consult a solicitor.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
