'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function IPRights() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('mizan-lang') || 'en';
    setLanguage(savedLang);
  }, []);

  return (
    <>
      <Head>
        <title>{language === 'en' ? 'Intellectual Property & Online Rights | Mizan Law Firm' : 'الملكية الفكرية والحقوق الرقمية | شركة ميزان للمحاماة'}</title>
        <meta name="description" content={language === 'en' ? "Copyrights, trademarks, patents, digital content protection, anti-piracy enforcement and IP litigation support." : "حقوق التأليف والعلامات وبراءات الاختراع، مكافحة القرصنة، حماية الأسرار، وإنفاذ الحقوق الرقمية."} />
      </Head>

      <header className="site-header">
        <div className="container navbar">
          <Link href="/" className="brand">
            <img src="/images/mizan-logo.png" alt={language === 'en' ? "Mizan logo" : "شعار ميزان"} className="brand-logo" />
           
          </Link>
          <Link href="/#services" className="btn btn-outline" style={{fontSize: '.85rem'}}>
            {language === 'en' ? '← Back' : 'عودة ←'}
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="service-hero">
          <div className="container service-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">{language === 'en' ? 'Home' : 'الرئيسية'}</Link> · <Link href="/#services">{language === 'en' ? 'Services' : 'الخدمات'}</Link> · {language === 'en' ? 'IP Rights' : 'الملكية الفكرية'}
            </nav>
            <h1>{language === 'en' ? 'Intellectual Property & Online Rights' : 'الملكية الفكرية والحقوق الرقمية'}</h1>
            <ul className="pill-list">
              {language === 'en' ? (
                <>
                  <li>Copyright</li><li>Trademarks</li><li>Patents</li><li>Anti-Piracy</li><li>Licensing</li><li>Enforcement</li>
                </>
              ) : (
                <>
                  <li>حقوق النشر</li><li>علامات</li><li>براءات</li><li>مكافحة القرصنة</li><li>تراخيص</li><li>إنفاذ</li>
                </>
              )}
            </ul>
            <article>
              <p>{language === 'en' 
                ? "We protect intangible assets across creative, technical and commercial domains—aligning registration, monitoring, and enforcement with actionable risk insights."
                : "نحمي الأصول غير المادية الإبداعية والتقنية والتجارية عبر إستراتيجيات التسجيل والمراقبة والإنفاذ القائمة على تحليل المخاطر."}
              </p>
              <p><strong>{language === 'en' ? "Coverage includes:" : "يشمل نطاق العمل:"}</strong><br />
                {language === 'en' 
                  ? " - Copyright, trademark & patent strategy\n - Digital content and DRM monitoring\n - Trade secrets & confidential info safeguarding\n - Anti-piracy takedowns & source tracing\n - Parallel import & unfair competition actions\n - Litigation support & expert submissions"
                  : " - استراتيجية حقوق التأليف والعلامات والبراءات\n - مراقبة المحتوى الرقمي ومنصات الاستضافة\n - حماية الأسرار التجارية والمعلومات الحساسة\n - إجراءات إزالة المحتوى المقرصن وتتبع المصدر\n - مكافحة الواردات الموازية والمنافسة غير العادلة\n - الدعم القضائي وتقارير الخبراء"}
              </p>
              <p>{language === 'en' 
                ? "Our approach integrates legal protection with technical measures and rapid response escalation."
                : "نقدم حلاً متكاملاً يربط الحماية القانونية بالتقنية والرصد والتحرك السريع."}
              </p>
              <p><Link className="btn" href="/#contact">{language === 'en' ? "Request IP Support" : "اطلب حماية فكرية"}</Link></p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="copy" style={{margin: 0}}>© 2025 {language === 'en' ? 'Mizan Law Firm.' : 'شركة ميزان للمحاماة.'}</p>
      </footer>

      <style jsx>{`
        .service-hero {
          padding: 110px 0 60px;
          background: linear-gradient(140deg, #0d141e, #14202c 55%, #05251c);
        }
        .breadcrumbs {
          font-size: .72rem;
          letter-spacing: .5px;
          text-transform: uppercase;
          color: var(--color-text-alt);
          margin-bottom: 24px;
        }
        .breadcrumbs a {
          color: var(--color-accent);
          text-decoration: none;
        }
        .service-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 0 60px;
        }
        .service-content h1 {
          font-size: clamp(2rem, 3.6vw, 3rem);
          background: linear-gradient(95deg, var(--color-text), var(--color-accent));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0 0 26px;
        }
        .pill-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }
        .pill-list li {
          background: var(--color-surface);
          padding: 10px 16px;
          border-radius: 40px;
          font-size: .78rem;
          letter-spacing: .5px;
          font-weight: 600;
          color: var(--color-accent);
          box-shadow: 0 0 0 1px rgba(17,216,144,.25);
        }
        article p {
          font-size: ${language === 'en' ? '1.06rem' : '1.05rem'};
          line-height: ${language === 'en' ? '1.7' : '1.75'};
        }
      `}</style>
    </>
  );
}
