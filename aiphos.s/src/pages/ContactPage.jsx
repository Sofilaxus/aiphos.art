import { PageHeader } from '../components/Shared';


export default function ContactPage() {
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
          sub="For all inquiries, you can reach me on aiphos.s.art@gmail.com"
        />
      </div>
    </div>
  );
}
