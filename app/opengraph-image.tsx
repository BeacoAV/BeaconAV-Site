import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Beacon AV - National Event Production Company';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0a1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#3b82f6',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
              fontSize: '48px',
              fontWeight: 800,
              color: 'white',
            }}
          >
            B
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-1px',
            }}
          >
            Beacon AV
          </span>
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#94a3b8',
            textAlign: 'center',
            lineHeight: 1.4,
            maxWidth: '800px',
          }}
        >
          National Event Production Company
        </div>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['Audio', 'Video', 'Lighting', 'Staging', 'Streaming', 'LED Walls'].map((s) => (
            <div
              key={s}
              style={{
                fontSize: '18px',
                color: '#3b82f6',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '8px 20px',
                borderRadius: '8px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
