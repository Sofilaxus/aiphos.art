import { useState }           from 'react';
import PortraitOutlinedIcon   from '@mui/icons-material/PortraitOutlined';
import { ART, C }             from '../constants';
import { PageHeader } from '../components/Shared';
import Lightbox               from '../components/Lightbox';

const ICON_MAP = { Portrait: PortraitOutlinedIcon };

const ALL_TAGS = ['All', ...Array.from(new Set(ART.flatMap(a => a.tags)))];

export default function PortfolioPage() {
  const [active,      setActive]      = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const shown = active === 'All' ? ART : ART.filter(a => a.tags.includes(active));
  const lightboxImages = shown.map(a => ({ src: a.src, title: a.title, tags: a.tags }));

  return (
    <div className="page-enter" style={{ padding: '96px 28px 64px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <PageHeader
          title="Portfolio" symbol="✦"
          sub="A collection of finished works! This includes fanarts, OC pieces and commissions. Note: All images has reduced resolution."
        />

        {/* tags filters */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              className="tag"
              onClick={() => { setActive(tag); setLightboxIdx(null); }}
              style={{
                background: active === tag ? 'linear-gradient(135deg,#9060b0,#7040a0)' : 'rgba(180,140,200,.12)',
                color: active === tag ? '#fff' : C.mid,
              }}
            >{tag}</button>
          ))}
        </div>

        {/* masonry grid to display my artworks */}
        <div style={{ columns: 'auto 210px', gap: 14 }}>
          {shown.map((art, idx) => {
            const Icon    = ICON_MAP[art.icon];
            const hasReal = !!art.src;
            return (
              <div
                key={art.id}
                className="acard"
                onClick={() => setLightboxIdx(idx)}
                style={{
                  marginBottom: 14,
                  breakInside: 'avoid',
                  aspectRatio: art.aspect,
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(140,90,170,.25)',
                  boxShadow: '0 4px 18px rgba(0,0,0,.25)',
                  cursor: 'zoom-in',
                  background: hasReal
                    ? `url(${art.src}) center/cover no-repeat`
                    : `linear-gradient(135deg,${art.col[0]},${art.col[1]})`,
                }}
              >
                {!hasReal && Icon && (
                  <Icon sx={{ fontSize: '3.8rem', color: 'rgba(255,230,255,.5)', filter: 'drop-shadow(0 0 14px rgba(180,140,220,.45))' }} />
                )}
                <div
                  className="art-caption"
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '30px 14px 12px',
                    background: 'linear-gradient(transparent,rgba(10,5,20,.65))',
                    color: 'white',
                    opacity: hasReal ? 0 : 1,
                    transition: 'opacity .25s ease',
                  }}
                >
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: '.93rem' }}>{art.title}</div>
                  <div style={{ fontSize: '.73rem', opacity: .75, fontWeight: 300, marginTop: 2 }}>{art.tags.join(' · ')}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={() => setLightboxIdx(i => Math.max(0, i - 1))}
        onNext={() => setLightboxIdx(i => Math.min(shown.length - 1, i + 1))}
      />
    </div>
  );
}
