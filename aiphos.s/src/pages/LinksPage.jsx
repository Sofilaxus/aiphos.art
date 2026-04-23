import ChevronRightIcon    from '@mui/icons-material/ChevronRight';
import { LINKS, C }        from '../constants';
import { PageHeader } from '../components/Shared';

export default function LinksPage() {
  return (
    <div className="page-enter" style={{ padding: '96px 28px 80px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <PageHeader
          title="Find me here"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lcard"
              style={{ background: l.bg, border: `1.5px solid ${l.border}` }}
            >
              {/* logos */}
              <l.Icon
                style={{
                  fontSize: '1.7rem',
                  color: C.text,
                  flexShrink: 0,
                  filter: 'drop-shadow(0 0 4px rgba(255,220,255,.25))',
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 500, fontSize: '.98rem', color: C.text }}>{l.label}</div>
                <div style={{ fontSize: '.83rem', color: C.mid, fontWeight: 300 }}>{l.handle}</div>
              </div>
              <ChevronRightIcon sx={{ color: C.light, fontSize: '1.3rem' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
