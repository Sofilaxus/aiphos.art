import { useEffect }    from 'react';
import { createPortal } from 'react-dom';
import CloseIcon        from '@mui/icons-material/Close';
import ChevronLeftIcon  from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index !== undefined;
  const item   = isOpen ? images[index] : null;
  const hasPrev = isOpen && onPrev && index > 0;
  const hasNext = isOpen && onNext && index < images.length - 1;

  // keyboard: escape close, arrows navigate
  useEffect(() => {
    if (!isOpen) return;
    const onKey = e => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft'  && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, hasPrev, hasNext]);

  // prevent body scrolling while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="lb-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="lb-panel" onClick={e => e.stopPropagation()}>

        {/* close */}
        <button className="lb-btn lb-close" onClick={onClose} aria-label="Close">
          <CloseIcon sx={{ fontSize: '1.4rem' }} />
        </button>

        {/* previous */}
        {hasPrev && (
          <button className="lb-btn lb-prev" onClick={onPrev} aria-label="Previous image">
            <ChevronLeftIcon sx={{ fontSize: '1.8rem' }} />
          </button>
        )}

        {/* artwork that is displayed */}
        {item.src ? (
          <img
            key={item.src}
            src={item.src}
            alt={item.title ?? ''}
            className="lb-img"
          />
        ) : (
          <div className="lb-placeholder">
            <span style={{ fontSize: '3rem', opacity: .35 }}>🖼</span>
            <p style={{ color: '#7a5888', fontSize: '.85rem', marginTop: 12 }}>No image added yet</p>
          </div>
        )}

        {/* next */}
        {hasNext && (
          <button className="lb-btn lb-next" onClick={onNext} aria-label="Next image">
            <ChevronRightIcon sx={{ fontSize: '1.8rem' }} />
          </button>
        )}

        {/* caption */}
        {(item.title || item.tags) && (
          <div className="lb-caption">
            {item.title && <span className="lb-caption__title">{item.title}</span>}
            {item.tags  && <span className="lb-caption__tags">{item.tags.join(' · ')}</span>}
          </div>
        )}

        {/* item count */}
        {images.length > 1 && (
          <div className="lb-counter">{index + 1} / {images.length}</div>
        )}
      </div>
    </div>,
    document.body
  );
}
