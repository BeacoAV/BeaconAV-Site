'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';

const HUBSPOT_PORTAL_ID = '148200095';
const HUBSPOT_FORM_GUID = '61567685-f427-4ca9-bce7-74ceeb18caee';
const WEB3FORMS_KEY = 'f06802e9-65c4-4f74-a274-7d93207d2ecb';

const eventTypes = [
  'Corporate Event','Conference / Convention','Brand Activation',
  'Gala / Award Ceremony','Product Launch','Trade Show',
  'Concert / Entertainment','Private Event','Multi-City / Roadshow','Other',
];
const guestCounts = ['Under 50','50â100','100â250','250â500','500â1,000','1,000â2,500','2,500+'];
const durations = ['Half day (under 4 hours)','Full day','2 days','3â4 days','5+ days'];
const budgets = ['Under $5,000','$5,000â$15,000','$15,000â$50,000','$50,000â$100,000','$100,000+','Not sure yet'];
const serviceOptions = [
  { id:'audio', label:'Audio Systems', icon:'ðï¸' },
  { id:'video', label:'Video & Projection', icon:'ð¬' },
  { id:'lighting', label:'Lighting', icon:'ð¡' },
  { id:'staging', label:'Staging & Set Design', icon:'ð­' },
  { id:'led', label:'LED Walls / Screens', icon:'ð¥ï¸' },
  { id:'streaming', label:'Live Streaming / Hybrid', icon:'ð¡' },
  { id:'technicians', label:'On-Site Technicians', icon:'ð§' },
  { id:'fullproduction', label:'Full Production Management', icon:'ðª' },
];

const STEPS = ['Event Basics','Scale & Budget','Services','Contact Info'];

type FormData = {
  event_type: string; event_date: string; city: string; venue: string; indoor_outdoor: string;
  guest_count: string; duration: string; budget: string;
  services_needed: string[];
  firstname: string; lastname: string; company: string; email: string; phone: string; message: string;
};

const empty: FormData = {
  event_type:'', event_date:'', city:'', venue:'', indoor_outdoor:'',
  guest_count:'', duration:'', budget:'',
  services_needed:[],
  firstname:'', lastname:'', company:'', email:'', phone:'', message:'',
};

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const topRef = useRef<HTMLDivElement>(null);

  const set = (field: keyof FormData, val: string) =>
    setForm(prev => ({ ...prev, [field]: val }));

  const toggleService = (id: string) =>
    setForm(prev => ({
      ...prev,
      services_needed: prev.services_needed.includes(id)
        ? prev.services_needed.filter(s => s !== id)
        : [...prev.services_needed, id],
    }));

  const next = () => { setStep(s => Math.min(s + 1, 3)); topRef.current?.scrollIntoView({ behavior: 'smooth' }); };
  const back = () => { setStep(s => Math.max(s - 1, 0)); topRef.current?.scrollIntoView({ behavior: 'smooth' }); };

  const canAdvance = () => {
    if (step === 0) return !!(form.event_type && form.city && form.indoor_outdoor);
    if (step === 1) return !!(form.guest_count && form.duration && form.budget);
    if (step === 2) return form.services_needed.length > 0;
    return !!(form.firstname && form.lastname && form.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: form.firstname },
              { name: 'lastname', value: form.lastname },
              { name: 'email', value: form.email },
              { name: 'phone', value: form.phone },
              { name: 'company', value: form.company },
              { name: 'city', value: form.city },
            ],
            context: { pageUri: typeof window !== 'undefined' ? window.location.href : '', pageName: 'Beacon AV Quote Request' },
          }),
        }
      ).catch(() => {});

      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Event Quote â ${form.event_type || 'Event'} â ${form.city} â ${form.guest_count}`,
          name: `${form.firstname} ${form.lastname}`.trim(),
          email: form.email,
          phone: form.phone,
          company: form.company,
          event_type: form.event_type,
          event_date: form.event_date,
          event_city: form.city,
          venue: form.venue,
          indoor_outdoor: form.indoor_outdoor,
          guest_count: form.guest_count,
          duration: form.duration,
          budget: form.budget,
          services_needed: form.services_needed.join(', '),
          message: form.message,
        }),
      });
      const w3Data = await w3Res.json();
      if (!w3Data.success) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us at hello@beaconav.co');
    }
  };

  const inputCls = 'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent';
  const selectCls = inputCls + ' bg-white';

  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Get a Quote</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Request a Production Quote</h1>
          <p className="text-gray-300 max-w-2xl">
            Tell us about your event and we&apos;ll send a full, itemized production quote â typically within 48 hours. No obligation.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2" ref={topRef}>
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">â</div>
                <h2 className="text-2xl font-bold text-navy mb-3">Quote Request Received</h2>
                <p className="text-gray-600 mb-2">We&apos;ve received your event details and will follow up with a full production quote within 48 hours.</p>
                <p className="text-gray-500 text-sm">Check {form.email} for a confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    {STEPS.map((label, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          i < step ? 'bg-green-500 text-white' :
                          i === step ? 'bg-accent text-white' :
                          'bg-gray-200 text-gray-500'
                        }`}>
                          {i < step ? 'â' : i + 1}
                        </div>
                        <span className={`text-xs font-medium hidden sm:inline ${i === step ? 'text-accent' : 'text-gray-400'}`}>{label}</span>
                        {i < STEPS.length - 1 && <div className={`hidden sm:block h-0.5 w-8 mx-1 ${i < step ? 'bg-green-400' : 'bg-gray-200'}`} />}
                      </div>
                    ))}
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                    <div className="bg-accent h-1.5 rounded-full transition-all" style={{ width: `${((step) / (STEPS.length - 1)) * 100}%` }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Step {step + 1} of {STEPS.length} â {STEPS[step]}</p>
                </div>

                {/* Step 0: Event Basics */}
                {step === 0 && (
                  <div className="space-y-5">
                    <h3 className="font-bold text-navy text-base pb-2 border-b border-gray-100">Event Basics</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                      <select required value={form.event_type} onChange={e => set('event_type', e.target.value)} className={selectCls}>
                        <option value="">Select event type...</option>
                        {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                        <input type="date" value={form.event_date} onChange={e => set('event_date', e.target.value)} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event City *</label>
                        <input required placeholder="e.g. Austin, TX" value={form.city} onChange={e => set('city', e.target.value)} className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Venue (if known)</label>
                      <input placeholder="e.g. Hyatt Regency, TBD" value={form.venue} onChange={e => set('venue', e.target.value)} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Indoor / Outdoor *</label>
                      <div className="flex gap-4">
                        {['Indoor','Outdoor','Both'].map(opt => (
                          <label key={opt} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm cursor-pointer transition-colors ${
                            form.indoor_outdoor === opt ? 'border-accent bg-blue-50 text-accent font-semibold' : 'border-gray-200 text-gray-600 hover:border-gray-400'
                          }`}>
                            <input type="radio" name="indoor_outdoor" value={opt} checked={form.indoor_outdoor === opt} onChange={e => set('indoor_outdoor', e.target.value)} className="sr-only" />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 1: Scale & Budget */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="font-bold text-navy text-base pb-2 border-b border-gray-100">Event Scale & Budget</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Guest Count *</label>
                      <select required value={form.guest_count} onChange={e => set('guest_count', e.target.value)} className={selectCls}>
                        <option value="">Select headcount range...</option>
                        {guestCounts.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Duration *</label>
                      <select required value={form.duration} onChange={e => set('duration', e.target.value)} className={selectCls}>
                        <option value="">Select duration...</option>
                        {durations.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget *</label>
                      <select required value={form.budget} onChange={e => set('budget', e.target.value)} className={selectCls}>
                        <option value="">Select budget range...</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Services */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="font-bold text-navy text-base pb-2 border-b border-gray-100">Services Needed <span className="text-gray-400 font-normal text-sm">(select all that apply)</span></h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map(s => (
                        <label key={s.id} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm cursor-pointer transition-colors ${
                          form.services_needed.includes(s.id) ? 'border-accent bg-blue-50 text-accent font-semibold' : 'border-gray-200 text-gray-600 hover:border-gray-400'
                        }`}>
                          <input type="checkbox" className="sr-only" checked={form.services_needed.includes(s.id)} onChange={() => toggleService(s.id)} />
                          <span className="text-xl">{s.icon}</span>
                          <span>{s.label}</span>
                        </label>
                      ))}
                    </div>
                    {form.services_needed.length === 0 && (
                      <p className="text-amber-600 text-sm">Please select at least one service.</p>
                    )}
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-5">
                    <h3 className="font-bold text-navy text-base pb-2 border-b border-gray-100">Your Contact Info</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input required value={form.firstname} onChange={e => set('firstname', e.target.value)} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input required value={form.lastname} onChange={e => set('lastname', e.target.value)} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} className={inputCls} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
                        <input value={form.company} onChange={e => set('company', e.target.value)} className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                      <textarea rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                        placeholder="Run of show, special requirements, technical rider, or anything that helps us build an accurate quote."
                        className={inputCls + ' resize-none'} />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-8 flex gap-3">
                  {step > 0 && (
                    <button type="button" onClick={back} className="px-6 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      â Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" onClick={next} disabled={!canAdvance()}
                      className="flex-1 py-3 rounded-xl bg-accent text-white font-semibold text-base transition-colors hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed">
                      Continue â
                    </button>
                  ) : (
                    <button type="submit" disabled={status === 'submitting' || !canAdvance()}
                      className="flex-1 btn-primary py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === 'submitting' ? 'Sending...' : 'Request My Production Quote'}
                    </button>
                  )}
                </div>

                {status === 'error' && <p className="text-red-600 text-sm mt-4">{errorMsg}</p>}
                <p className="text-gray-400 text-xs text-center mt-4">No obligation Â· Quotes within 48 hours Â· No spam</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card">
              <h3 className="font-bold text-navy mb-3">What Happens Next</h3>
              <ol className="space-y-3">
                {['We review your event details','Our team builds a full production scope','You receive a written, itemized quote','We confirm and begin coordination'].map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-accent text-white font-bold flex-shrink-0 flex items-center justify-center text-xs">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">Most quote requests receive a <strong>preliminary range within 24 hours</strong>. Full itemized quotes typically within 48 hours.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2">Industries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {['Corporate','Tech','Finance','Healthcare','Nonprofit','Entertainment','Government','Education'].map(ind => (
                  <span key={ind} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{ind}</span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2">Talk to Our Team</h3>
              <p className="text-sm text-gray-600 mb-3">Prefer to talk through your event first?</p>
              <p className="text-sm font-medium text-navy">Mon â Fri, 8am â 6pm CT</p>
              <a href="mailto:hello@beaconav.co" className="text-accent text-sm font-medium hover:underline">hello@beaconav.co</a>
            </div>
            <div className="bg-navy rounded-xl p-5">
              <p className="text-white font-bold mb-1">AV Partner?</p>
              <p className="text-gray-300 text-sm mb-3">Looking to join our production network?</p>
              <Link href="/partners" className="text-accent text-sm font-semibold hover:underline">Learn about the partner program â</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
