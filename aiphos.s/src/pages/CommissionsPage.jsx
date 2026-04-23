import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

import {
  TIERS, TIER_DETAILS, C,
  COMMISSIONS_OPEN, COMMISSION_SCHEDULE,
  COMMISSION_WHAT_YOU_SHOULD_KNOW,
  COMMISSION_COMMERCIAL_TYPES,
  COMMISSION_EXCLUSIVITY,
  COMMISSION_TOS,
} from '../constants';
import Lightbox from '../components/Lightbox';

// mmy little helpers
const fmt = n => `$${Math.round(n)}`;

const COMMERCIAL = [
  { label: 'Personal', sublabel: '× 1.0', mult: 1.0, Icon: PersonOutlinedIcon, accent: C.mid },
  { label: 'Partial Commercial', sublabel: '× 1.6', mult: 1.6, Icon: StorefrontOutlinedIcon, accent: '#e0b890' },
  { label: 'Full Commercial', sublabel: '× 2.5', mult: 2.5, Icon: BusinessOutlinedIcon, accent: '#e0a0c0' },
];

const TIER_ICON_MAP = {
  Visibility: VisibilityOutlinedIcon,
  Edit: EditOutlinedIcon,
  AutoAwesome: AutoAwesomeIcon,
  Palette: PaletteOutlinedIcon,
};

const MONTH_IDX = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

// general information
function InfoSection({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h3 style={{
        fontFamily: "'Fraunces', serif", fontSize: '1.45rem', fontWeight: 300,
        color: C.text, letterSpacing: '-.01em',
        marginBottom: 18, paddingBottom: 10,
        borderBottom: '1px solid rgba(140,90,170,.2)',
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

// scheduele availability view
function CommissionSchedule() {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth();
  const { year, months } = COMMISSION_SCHEDULE;

  return (
    <div style={{
      borderRadius: 18,
      border: '1.5px solid rgba(180,140,220,.2)',
      background: 'rgba(255,255,255,.03)',
      padding: '24px 26px',
      marginBottom: 40,
    }}>
      <div style={{
        fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase',
        color: C.light, fontWeight: 500, marginBottom: 16,
      }}>
        Availability — {year}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(115px, 1fr))',
        gap: 8,
      }}>
        {months.map(s => {
          const mIdx = MONTH_IDX[s.month] ?? 0;
          const isPast = year < thisYear || (year === thisYear && mIdx < thisMonth);
          const isCurrent = year === thisYear && mIdx === thisMonth;
          const closed = s.spots === 0;
          const unknown = s.spots === null;

          return (
            <div key={s.month} style={{
              borderRadius: 12,
              padding: '11px 13px',
              border: `1.5px solid ${isPast ? 'rgba(255,255,255,.06)' :
                isCurrent ? 'rgba(180,140,220,.5)' :
                  closed ? 'rgba(220,100,100,.2)' :
                    unknown ? 'rgba(255,255,255,.08)' :
                      'rgba(100,200,140,.22)'
                }`,
              background: isPast ? 'rgba(255,255,255,.02)' :
                isCurrent ? 'rgba(140,90,200,.12)' :
                  'transparent',
              opacity: isPast ? 0.45 : 1,
              transition: 'opacity .2s ease',
            }}>
              {/* display / highlight the current month becuase nice */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                <span style={{
                  fontSize: '.85rem', fontWeight: 500,
                  color: isPast ? C.light : C.text,
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {s.month}
                </span>
                {isCurrent && (
                  <span style={{
                    fontSize: '.58rem', fontWeight: 600, letterSpacing: '.06em',
                    textTransform: 'uppercase', color: C.lavender,
                    background: 'rgba(180,140,220,.22)', padding: '1px 5px', borderRadius: 50,
                  }}>now</span>
                )}
              </div>

              {/* status */}
              {unknown ? (
                <span style={{ fontSize: '.73rem', color: C.light }}>—</span>
              ) : closed ? (
                <span style={{ fontSize: '.73rem', color: isPast ? C.light : '#e08080' }}>Closed</span>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {Array.from({ length: s.spots }).map((_, i) => (
                      <div key={i} style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: isPast ? C.light : 'rgba(100,200,140,.8)',
                        boxShadow: isPast ? 'none' : '0 0 4px rgba(100,200,140,.5)',
                      }} />
                    ))}
                  </div>
                  <span style={{ fontSize: '.73rem', color: isPast ? C.light : '#80d8a0' }}>
                    {s.spots} spot{s.spots !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// price tiers modal
function TierModal({ tier, onClose, onContact }) {
  const [lbIdx, setLbIdx] = useState(null);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape' && lbIdx === null) onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lbIdx]);

  return createPortal(
    <div className="tm-backdrop" onClick={onClose}>
      <div className="tm-sheet" onClick={e => e.stopPropagation()}>

        <div className="tm-header" style={{ borderBottom: `1px solid ${tier.border}` }}>
          <div>
            <div className="tm-header__eyebrow">Tier {tier.id}</div>
            <h2 className="tm-header__title">{tier.name}</h2>
            <p className="tm-header__desc">{tier.desc}</p>
          </div>
          <button className="tm-close" onClick={onClose} aria-label="Close">
            <CloseIcon sx={{ fontSize: '1.3rem' }} />
          </button>
        </div>

        <div className="tm-body" style={{ paddingTop: '14px' }}>
          <div className="tm-grid">
            <div className="tm-cell tm-cell--head tm-cell--variant" />
            {COMMERCIAL.map(c => (
              <div key={c.label} className="tm-cell tm-cell--head" style={{ color: c.accent }}>
                <c.Icon sx={{ fontSize: '.95rem' }} />
                <span>{c.label}</span>
              </div>
            ))}
            {tier.variants.map((v, vi) => (
              <>
                <div key={`n-${vi}`} className="tm-cell tm-cell--variant">{v.name}</div>
                {COMMERCIAL.map((c, ci) => (
                  <div
                    key={`p-${vi}-${ci}`}
                    className={`tm-cell tm-cell--price${ci === 0 ? ' tm-cell--personal' : ''}`}
                    style={ci === 0 ? { borderColor: tier.border } : {}}
                  >
                    <span className="tm-price">{fmt(v.base * c.mult)}</span>
                    {ci > 0 && <span className="tm-price-base">base {fmt(v.base)}</span>}
                  </div>
                ))}
              </>
            ))}
          </div>

          <div className="tm-examples">
            <div className="tm-examples__label">Examples</div>
            <div className="tm-examples__grid">
              {(tier.examples.length > 0 ? tier.examples : [null, null, null]).map((src, n) => (
                <div
                  key={n}
                  className="tm-example-thumb"
                  onClick={() => src && setLbIdx(n)}
                  style={{
                    background: src ? `url(${src}) center/cover no-repeat` : tier.col,
                    border: `1px solid ${tier.border}`,
                    cursor: src ? 'zoom-in' : 'default',
                  }}
                >
                  {!src && <VisibilityOutlinedIcon sx={{ fontSize: '1.8rem', color: 'rgba(255,230,255,.3)' }} />}
                </div>
              ))}
            </div>
          </div>

          <Lightbox
            images={tier.examples.map(src => ({ src }))}
            index={lbIdx}
            onClose={() => setLbIdx(null)}
            onPrev={() => setLbIdx(i => Math.max(0, i - 1))}
            onNext={() => setLbIdx(i => Math.min(tier.examples.length - 1, i + 1))}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

// pahge setup
export default function CommissionsPage() {
  const navigate = useNavigate();
  const [openTierId, setOpenTierId] = useState(null);
  const activeTier = openTierId ? TIER_DETAILS.find(t => t.id === openTierId) : null;

  return (
    <div className="page-enter" style={{ padding: '96px 28px 80px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>

        {/* page header and status badge */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.8rem', fontWeight: 300, color: C.text, letterSpacing: '-.02em' }}>
              Commissions
            </h2>
            <span style={{
              padding: '5px 14px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600,
              letterSpacing: '.05em', textTransform: 'uppercase',
              background: COMMISSIONS_OPEN ? 'rgba(100,200,140,.15)' : 'rgba(220,100,100,.15)',
              border: `1.5px solid ${COMMISSIONS_OPEN ? 'rgba(100,200,140,.4)' : 'rgba(220,100,100,.4)'}`,
              color: COMMISSIONS_OPEN ? '#80d8a0' : '#e08080',
            }}>
              ● {COMMISSIONS_OPEN ? 'Open' : 'Closed'}
            </span>
          </div>
          <p style={{ color: C.mid, fontWeight: 300, lineHeight: 1.65 }}>
            Please read through this whole page to familiarise yourself with the options, policies, and prices before ordering a commission.
          </p>
        </div>

        {/* availability scheduele */}
        <CommissionSchedule />

        {/* what you should know */}
        <InfoSection title="What you should know">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
            {COMMISSION_WHAT_YOU_SHOULD_KNOW.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: C.lavender, flexShrink: 0, marginTop: 2, fontSize: '.9rem' }}>★</span>
                <span style={{ color: C.mid, fontSize: '.9rem', fontWeight: 300, lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </InfoSection>

        {/* tiers */}
        <InfoSection title="Pricing tiers">
          <p style={{ color: C.mid, fontWeight: 300, fontSize: '.9rem', marginBottom: 18, lineHeight: 1.65 }}>
            Click any tier to see the full pricing breakdown including commercial rates.
          </p>
          <div className="tier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(175px,1fr))', gap: 13 }}>
            {TIERS.map(t => {
              const Icon = TIER_ICON_MAP[t.icon];
              return (
                <div
                  key={t.id}
                  className="acard tier-card"
                  onClick={() => setOpenTierId(t.id)}
                  style={{ padding: '22px 18px', background: t.col, border: `1.5px solid ${t.border}`, cursor: 'pointer' }}
                >
                  {Icon && (
                    <Icon sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px', color: C.lavender, filter: 'drop-shadow(0 0 6px rgba(180,140,220,.4))' }} />
                  )}
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.15rem', fontWeight: 400, color: C.text, marginBottom: 4 }}>{t.type}</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 600, color: C.lavender, marginBottom: 5, fontFamily: "'Outfit'" }}>From {t.from}</div>
                  <div style={{ fontSize: '.83rem', color: C.mid, fontWeight: 300, marginBottom: 14 }}>{t.desc}</div>
                  <div style={{ fontSize: '.72rem', color: C.light, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                    View pricing →
                  </div>
                </div>
              );
            })}
          </div>
        </InfoSection>

        {/* personal vs commercial */}
        <InfoSection title="Personal vs Partial and Full Commercial">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {COMMISSION_COMMERCIAL_TYPES.map(ct => (
              <div key={ct.title} style={{
                borderRadius: 14, padding: '16px 20px',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.07)',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  flexShrink: 0, padding: '4px 10px', borderRadius: 50,
                  background: 'rgba(255,255,255,.06)',
                  fontSize: '.8rem', fontWeight: 600, color: ct.accent,
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {ct.mult}
                </div>
                <div>
                  <div style={{ fontWeight: 500, color: C.text, fontSize: '.93rem', marginBottom: 5 }}>{ct.title}</div>
                  <div style={{ color: C.mid, fontSize: '.87rem', fontWeight: 300, lineHeight: 1.68 }}>{ct.text}</div>
                </div>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* exclusiviyr and copyrights */}
        <InfoSection title="Exclusivity Rights and Copyright">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {COMMISSION_EXCLUSIVITY.map(e => (
              <div key={e.title} className="toc">
                <div style={{ fontWeight: 500, fontSize: '.93rem', color: C.text, marginBottom: 5 }}>✦ {e.title}</div>
                <div style={{ color: C.mid, fontSize: '.88rem', fontWeight: 300, lineHeight: 1.72 }}>{e.text}</div>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* terms of serivce */}
        <div className="glass-card" style={{ padding: '36px 32px', marginBottom: 0 }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.6rem', fontWeight: 300, color: C.text, marginBottom: 28 }}>
            Terms of Service
          </h3>

          {[
            { heading: 'General information', items: COMMISSION_TOS.general },
            { heading: 'Process information', items: COMMISSION_TOS.process },
            { heading: 'Cancellation and refunds', items: COMMISSION_TOS.cancellation },
            { heading: 'Use', items: COMMISSION_TOS.use },
          ].map(section => (
            <div key={section.heading} style={{ marginBottom: 26 }}>
              <div style={{
                fontSize: '.78rem', letterSpacing: '.08em', textTransform: 'uppercase',
                color: C.light, fontWeight: 500, marginBottom: 12,
              }}>
                {section.heading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {section.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: C.lavender, flexShrink: 0, marginTop: 2, fontSize: '.85rem' }}>★</span>
                    <span style={{ color: C.mid, fontSize: '.87rem', fontWeight: 300, lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(140,90,170,.2)' }}>
            <p style={{ color: C.mid, fontSize: '.83rem', fontWeight: 300, lineHeight: 1.7, marginBottom: 20 }}>
              By commissioning me you agree to these terms. Last updated April 2026.
            </p>
            <button className="btn btn-filled" onClick={() => navigate('/contact')}>
              Ready to commission? Let's talk ✦
            </button>
          </div>
        </div>

      </div>

      {activeTier && (
        <TierModal
          tier={activeTier}
          onClose={() => setOpenTierId(null)}
          onContact={() => { setOpenTierId(null); navigate('/contact'); }}
        />
      )}
    </div>
  );
}
