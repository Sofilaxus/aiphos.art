import { STARS, SPARKLES, METEORS } from '../constants';

export default function StarField() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0,
      overflow: 'hidden',
    }}>

      {/* tiny twinkle tiwnkle stars, how I wonder what you are */}
      {STARS.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`, top: `${s.y}%`,
            width:  s.r * 2, height: s.r * 2,
            borderRadius: '50%',
            background:  s.col,
            boxShadow:   `0 0 ${s.r * 2}px ${s.col}`,
            animation:   `${s.tw} ${s.dur}s ease-in-out ${s.del}s infinite`,
          }}
        />
      ))}

      {/* stars that look like stars */}
      {SPARKLES.map((sp, i) => (
        <svg
          key={i}
          width={sp.s} height={sp.s}
          viewBox="0 0 24 24"
          fill={sp.c}
          style={{
            position: 'absolute',
            left: `${sp.x}%`, top: `${sp.y}%`,
            transform: 'translate(-50%,-50%)',
            animation: `sparkle ${3.2 + sp.d * 0.4}s ease-in-out ${sp.d}s infinite`,
            filter: `drop-shadow(0 0 4px ${sp.c})`,
          }}
        >
          <path d="M12 1L13.8 9.2L22 12L13.8 14.8L12 23L10.2 14.8L2 12L10.2 9.2Z" />
        </svg>
      ))}

      {/* shooting stars! yey! */}
      {METEORS.map(m => (
        <div
          key={m.id}
          style={{
            position: 'absolute',
            left: `${m.x}%`, top: `${m.y}%`,
            transform: 'rotate(45deg)',
            transformOrigin: 'left center',
          }}
        >
          {/* only translateX animated no rotation in keyframe */}
          <div
            style={{
              width:  m.len,
              height: 2,
              borderRadius: 2,
              /* bright tip on the right which fades to transparent left, like a tail hehe */
              background: 'linear-gradient(90deg, transparent 0%, rgba(240,220,255,.9) 100%)',
              filter: 'drop-shadow(0 0 3px rgba(200,170,255,.75))',
              animation: `shoot ${m.totalDur}s linear ${m.delay}s infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
