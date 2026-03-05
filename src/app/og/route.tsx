import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const locale = searchParams.get('locale') || 'en';
    const type = searchParams.get('type') || 'default'; // default, lead-magnet, project

    // Translations with responsive sizing hints
    const translations = {
      en: {
        title: 'Daniil | Technical Partner & Product Builder',
        subtitle: 'For Early-Stage Founders',
        leadMagnetLabel: 'Free Resource',
        leadMagnetTitle: 'Technical Discovery Checklist',
        leadMagnetSubtitle: 'For Early-Stage Founders',
        titleSize: 68,
        subtitleSize: 32,
      },
      ru: {
        title: 'Даниил | Технический партнёр и создатель продуктов',
        subtitle: 'Для основателей на ранней стадии',
        leadMagnetLabel: 'Бесплатный ресурс',
        leadMagnetTitle: 'Технический чек-лист',
        leadMagnetSubtitle: 'Для основателей на ранней стадии',
        titleSize: 58,
        subtitleSize: 30,
      },
      md: {
        title: 'Daniil | Partener tehnic și constructor de produse',
        subtitle: 'Pentru fondatori în fază inițială',
        leadMagnetLabel: 'Resursă gratuită',
        leadMagnetTitle: 'Checklist tehnic de descoperire',
        leadMagnetSubtitle: 'Pentru fondatori în fază inițială',
        titleSize: 54,
        subtitleSize: 28,
      },
    };

    const t = translations[locale as keyof typeof translations] || translations.en;

    // Allow custom override via query params
    const title = searchParams.get('title') || (type === 'lead-magnet' ? t.leadMagnetTitle : t.title);
    const subtitle = searchParams.get('subtitle') || (type === 'lead-magnet' ? t.leadMagnetSubtitle : t.subtitle);
    const label = type === 'lead-magnet' ? t.leadMagnetLabel : '';

    // Responsive font sizes based on locale and type
    const titleFontSize = type === 'lead-magnet' ? Math.max(t.titleSize - 10, 50) : t.titleSize;
    const subtitleFontSize = t.subtitleSize;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #020617 0%, #0a1628 30%, #0f2847 60%, #0a1628 90%, #020617 100%)',
            position: 'relative',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Premium background decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-5%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 60%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-5%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(30, 73, 118, 0.3) 0%, transparent 60%)',
              borderRadius: '50%',
              filter: 'blur(70px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(100px)',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Glass card container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '50px 70px',
              maxWidth: '980px',
              width: '980px',
              textAlign: 'center',
              zIndex: 10,
              background: 'rgba(15, 40, 71, 0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(245, 158, 11, 0.15)',
              borderRadius: '28px',
              boxShadow: '0 0 60px rgba(245, 158, 11, 0.1), 0 0 120px rgba(10, 22, 40, 0.6)',
            }}
          >
            {/* Badge/Label */}
            {label && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 24px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '2px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '50px',
                  marginBottom: '30px',
                  boxShadow: '0 0 25px rgba(245, 158, 11, 0.15)',
                }}
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </span>
              </div>
            )}

            {/* Title with gradient */}
            <h1
              style={{
                fontSize: `${titleFontSize}px`,
                fontWeight: '700',
                background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: '0 0 24px 0',
                lineHeight: '1.2',
                filter: 'drop-shadow(0 0 50px rgba(245, 158, 11, 0.35))',
                letterSpacing: '-0.02em',
                maxWidth: '100%',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: `${subtitleFontSize}px`,
                fontWeight: '500',
                color: '#94a3b8',
                margin: 0,
                lineHeight: '1.4',
                letterSpacing: '-0.01em',
                maxWidth: '100%',
              }}
            >
              {subtitle}
            </p>

            {/* Premium accent lines */}
            <div
              style={{
                display: 'flex',
                marginTop: '40px',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #fcd34d 0%, #f59e0b 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)',
                }}
              />
              <div
                style={{
                  width: '40px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #f59e0b 0%, rgba(245, 158, 11, 0.5) 100%)',
                  borderRadius: '3px',
                }}
              />
              <div
                style={{
                  width: '20px',
                  height: '4px',
                  background: 'rgba(245, 158, 11, 0.3)',
                  borderRadius: '3px',
                }}
              />
            </div>
          </div>

          {/* Footer branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(245, 158, 11, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  color: '#020617',
                  letterSpacing: '-0.03em',
                }}
              >
                D
              </span>
            </div>
            <span
              style={{
                fontSize: '28px',
                fontWeight: '600',
                color: '#f8fafc',
                letterSpacing: '-0.01em',
              }}
            >
              ddinisiuc.com
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('Error generating OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
