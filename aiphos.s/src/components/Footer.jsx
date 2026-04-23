import { useNavigate } from 'react-router-dom';
import { NAV, C }      from '../constants';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{
      padding: '32px 28px',
      borderTop: '1px solid rgba(140,90,170,.15)',
      background: 'rgba(16,10,24,.75)',
      backdropFilter: 'blur(10px)',
      textAlign: 'center',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <button
          onClick={() => navigate('/home')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Fraunces', serif", fontSize: '1.1rem',
            fontWeight: 300, color: C.mid, marginBottom: 12,
            fontStyle: 'italic', display: 'block', margin: '0 auto 12px',
          }}
        >
          <span style={{ color: '#d4a0e8', filter: 'drop-shadow(0 0 4px #b070d0)' }}>✦</span>{' '}
          Aiphos.s
        </button>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => navigate(n.path)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: C.light, fontSize: '.83rem',
                fontFamily: "'Outfit', sans-serif", transition: 'color .2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.text)}
              onMouseLeave={e => (e.currentTarget.style.color = C.light)}
            >
              {n.label}
            </button>
          ))}
        </div>

        <div style={{ color: C.light, fontSize: '.78rem', fontWeight: 300 }}>
          © {new Date().getFullYear()} Aiphos.s · All artwork is my own
        </div>
      </div>
    </footer>
  );
}
