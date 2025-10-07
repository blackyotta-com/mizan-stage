'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DigitalForensics() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('mizan-lang') || 'en';
    setLanguage(savedLang);
  }, []);

  return (
    <>
      <Head>
        <title>{language === 'en' ? 'Digital Forensics & Investigation | Mizan Law Firm' : 'التحقيقات الجنائية الرقمية | شركة ميزان للمحاماة'}</title>
        <meta name="description" content={language === 'en' ? "Computer & mobile forensics, incident response, evidence preservation, breach investigation & expert reporting." : "تحليل الأجهزة، حفظ الأدلة، الاستجابة للحوادث، وتتبع الاختراق وتقارير خبراء معتمدة."} />
      </Head>

      <header className="site-header">
        <div className="container navbar">
          <Link href="/" className="brand">
            <img src="/images/mizan-logo.png" alt={language === 'en' ? "Mizan Logo" : "شعار ميزان"} className="brand-logo" />
            
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
              <Link href="/">{language === 'en' ? 'Home' : 'الرئيسية'}</Link> · <Link href="/#services">{language === 'en' ? 'Services' : 'الخدمات'}</Link> · {language === 'en' ? 'Digital Forensics' : 'الأدلة الرقمية'}
            </nav>
            <h1>{language === 'en' ? 'Digital Forensics & Investigation' : 'التحقيقات الجنائية الرقمية'}</h1>
            <ul className="pill-list">
              {language === 'en' ? (
                <>
                  <li>Devices</li><li>Evidence</li><li>Incident Response</li><li>Chain Integrity</li><li>Breach Analysis</li><li>Expert Reports</li>
                </>
              ) : (
                <>
                  <li>أجهزة</li><li>أدلة</li><li>حوادث</li><li>سلسلة الأدلة</li><li>اختراق</li><li>تقارير خبراء</li>
                </>
              )}
            </ul>
            <article>
              <p>{language === 'en' 
                ? "We perform structured forensic acquisition and analysis of computers, mobile devices and cloud artifacts—preserving integrity while extracting timelines, correlations and actionable intelligence."
                : "نجري الاستحواذ والتحليل الجنائي المُهيكل للأجهزة والحواسيب والهواتف والبيانات السحابية، مع الحفاظ على سلامة الأدلة واستخراج الجداول الزمنية والارتباطات والمعلومات القابلة للتنفيذ."}
              </p>
              <p><strong>{language === 'en' ? "Capabilities:" : "القدرات:"}</strong><br />
                {language === 'en' 
                  ? " - Device & disk imaging\n - Memory & log analysis\n - Malware & payload review\n - Chain-of-custody documentation\n - Breach investigation & scoping\n - Court-ready expert reporting"
                  : " - تصوير الأقراص والأجهزة\n - تحليل الذاكرة والسجلات\n - مراجعة البرمجيات الخبيثة والحزم\n - توثيق سلسلة الحيازة\n - تحقيق الاختراق وتحديد النطاق\n - تقارير خبراء جاهزة للمحكمة"}
              </p>
              <p>{language === 'en' 
                ? "Technical findings are translated into clear legal arguments and defensible evidence."
                : "يتم تحويل النتائج التقنية إلى حجج قانونية واضحة وأدلة قابلة للدفاع."}
              </p>
              <p><Link className="btn" href="/#contact">{language === 'en' ? "Request Forensic Support" : "اطلب دعماً رقمياً"}</Link></p>
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
          font-size: .75rem;
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
          font-size: 1.02rem;
        }
      `}</style>
    </>
  );
}
