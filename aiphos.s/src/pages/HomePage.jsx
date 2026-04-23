import { useState }                  from 'react';
import { useNavigate }               from 'react-router-dom';
import { C }                         from '../constants';
import { AVATAR, HOME_PREVIEWS }     from '../constants';
import Lightbox                      from '../components/Lightbox';

export default function HomePage() {
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <div className="page-enter" style={{ minHeight: '100vh', paddingTop: 80, position: 'relative', zIndex: 2 }}>
      {/* Nebula glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-8%',  width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(140,60,200,.18) 0%,transparent 65%)' }} />
        <div style={{ position: 'absolute', top: '30%',  left: '-8%',  width: 400, height: 350, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,80,140,.12) 0%,transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '5%',right: '20%', width: 350, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(80,120,200,.12) 0%,transparent 65%)' }} />
      </div>

      {/* Hero */}
      <div style={{
        maxWidth: 880, margin: '0 auto', padding: '80px 32px 56px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', position: 'relative',
      }}>
        <div style={{
          width: 128, height: 128, borderRadius: '50%',
          backgroundImage: `url(${AVATAR})`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          marginBottom: 30,
          animation: 'float 6s ease-in-out infinite',
          boxShadow: '0 0 0 3px rgba(180,120,220,.3), 0 0 40px rgba(140,60,200,.4), 0 12px 36px rgba(0,0,0,.4)',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 18,
          padding: '5px 16px', borderRadius: 50,
          background: 'rgba(180,120,220,.12)', border: '1px solid rgba(180,120,220,.3)',
          fontSize: '.8rem', color: C.mid, letterSpacing: '.08em', textTransform: 'uppercase',
          fontFamily: "'Outfit', sans-serif", fontWeight: 500,
        }}>
          <span style={{ color: '#d4a0e8' }}>✦</span> Freelance Digital Artist
        </div>

        <h1 style={{
          fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.6rem,8vw,4.8rem)',
          fontWeight: 300, color: C.text, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: 18,
        }}>
          Welcome to my<br />
          <em style={{ color: C.lavender, fontStyle: 'italic', textShadow: '0 0 30px rgba(180,130,230,.5)' }}>
            little gallery
          </em>
        </h1>

        <p style={{ fontSize: '1.02rem', color: C.mid, maxWidth: 510, lineHeight: 1.72, fontWeight: 300, marginBottom: 34 }}>
          A tiny corner of the internet where you can see some of my illustrations.
          Browse my artwork, commission something special, or just say hi!
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn btn-filled" onClick={() => navigate('/portfolio')}>View Portfolio ✦</button>
          <button className="btn btn-outline" onClick={() => navigate('/commissions')}>Commission Info</button>
        </div>
      </div>

      {/* my best works strip */}
      <div style={{ padding: '0 28px 80px', maxWidth: 960, margin: '0 auto', position: 'relative' }}>
        <div style={{
          textAlign: 'center', marginBottom: 22,
          fontFamily: "'Fraunces', serif", fontSize: '1.35rem',
          fontWeight: 300, color: C.mid, fontStyle: 'italic',
        }}>My best works (according to me)</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: 14 }}>
          {HOME_PREVIEWS.map((item, i) => (
            <div
              key={i}
              className="acard home-preview"
              onClick={() => setLightboxIdx(i)}
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                aspectRatio: '4/5',
                boxShadow: '0 6px 18px rgba(0,0,0,.3)',
                border: '1px solid rgba(140,90,170,.25)',
                cursor: 'zoom-in',
              }}
            />
          ))}
        </div>
      </div>

      <Lightbox
        images={HOME_PREVIEWS}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={() => setLightboxIdx(i => Math.max(0, i - 1))}
        onNext={() => setLightboxIdx(i => Math.min(HOME_PREVIEWS.length - 1, i + 1))}
      />
    </div>
  );
}
