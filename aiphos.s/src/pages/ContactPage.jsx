import { useState }              from 'react';
import FavoriteBorderIcon        from '@mui/icons-material/FavoriteBorder';
import { C }                     from '../constants';
import { PageHeader, DevNote, Label } from '../components/Shared';

const EMAIL = 'aiphos.s.art@gmail.com';

const SUBJECT_LABELS = {
  commission: 'Commission inquiry',
  collab:     'Collaboration / project',
  other:      'Other',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'commission', message: '' });
  const [sent, setSent] = useState(false);

  const update = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    const body    = [`Hi! I'm ${form.name} (${form.email}).`, '', form.message].join('\n');
    const subject = encodeURIComponent(`[${SUBJECT_LABELS[form.subject]}] — from ${form.name}`);
    const bodyEnc = encodeURIComponent(body);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${bodyEnc}`;
    setSent(true);
  };

  return (
    <div className="page-enter" style={{ padding: '96px 28px 80px', position: 'relative', zIndex: 2 }}>
      {/* Nebula glow */}
      <div style={{
        position: 'absolute', top: '-5%', right: '-8%',
        width: 400, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(120,50,180,.14) 0%,transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 620, margin: '0 auto', position: 'relative' }}>
        <PageHeader
          title="Say hi!"
          sub="Have a commission in mind or a question? I'd love to hear from you."
        />

        {sent ? (
          /* after submit */
          <div style={{
            padding: '44px 36px', borderRadius: 20, textAlign: 'center',
            background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(100,180,130,.3)',
          }}>
            <FavoriteBorderIcon sx={{
              fontSize: '3rem', mb: '16px', display: 'block', margin: '0 auto 16px',
              color: C.rose,
              filter: 'drop-shadow(0 0 10px rgba(220,140,180,.5))',
            }} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 300, color: C.text, marginBottom: 8 }}>
              Your mail app should have opened!
            </div>
            <p style={{ color: C.mid, fontWeight: 300, fontSize: '.93rem', lineHeight: 1.65 }}>
              The message was pre-filled with the things you wrote in the form. Just remember to click send!
              I'll get back to you as soon as I can. If the mail app did not open, just send me an email directly: aiphos.s.art@gmail.com
            </p>
            <button
              className="btn btn-outline"
              onClick={() => { setSent(false); setForm({ name: '', email: '', subject: 'commission', message: '' }); }}
              style={{ marginTop: 20 }}
            >
              Send another one!
            </button>
          </div>
        ) : (
          /* form */
          <div className="glass-card" style={{ padding: '36px 32px' }}>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 17 }}>
              <div className="contact-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <Label>Name</Label>
                  <input
                    className="field" name="name" value={form.name}
                    onChange={update} placeholder="Your name" required
                  />
                </div>
                <div>
                  <Label>Your email</Label>
                  <input
                    className="field" type="email" name="email" value={form.email}
                    onChange={update} placeholder="you@email.com" required
                  />
                </div>
              </div>

              <div>
                <Label>Subject</Label>
                <select className="field" name="subject" value={form.subject} onChange={update}>
                  <option value="commission">Commission inquiry</option>
                  <option value="collab">Collaboration / project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label>Message</Label>
                <textarea
                  className="field" name="message" value={form.message}
                  onChange={update} placeholder="Tell me what you have in mind…"
                  rows={6} required
                />
              </div>

              <p style={{ fontSize: '.8rem', color: C.light, lineHeight: 1.6 }}>
                Clicking send will open your email app with this message pre-filled.
                Your email address is needed so I can reply to you!
              </p>

              <button type="submit" className="btn btn-filled" style={{ alignSelf: 'flex-start' }}>
                Open in mail app
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
