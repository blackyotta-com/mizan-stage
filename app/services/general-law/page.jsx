'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GeneralLaw() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('mizan-lang') || 'en';
    setLanguage(savedLang);
  }, []);

  return (
    <>
      <Head>
        <title>{language === 'en' ? 'General Law Cases | Mizan Law Firm' : 'قضايا القانون العام | شركة ميزان للمحاماة'}</title>
        <meta name="description" content={language === 'en' ? "Criminal, family, civil, real estate, employment and personal injury matters with strategic courtroom representation." : "القانون الجنائي، الأسرة، العقارات، الإصابات الشخصية، العمل، والتقاضي المدني بخبرة استراتيجية."} />
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
              <Link href="/">{language === 'en' ? 'Home' : 'الرئيسية'}</Link> · <Link href="/#services">{language === 'en' ? 'Services' : 'الخدمات'}</Link> · {language === 'en' ? 'General Law' : 'القانون العام'}
            </nav>
            <h1>{language === 'en' ? 'General Law Cases' : 'قضايا القانون العام'}</h1>
            <ul className="pill-list">
              {language === 'en' ? (
                <>
                  <li>Criminal</li><li>Family</li><li>Real Estate</li><li>Employment</li><li>Civil</li><li>Injury</li>
                </>
              ) : (
                <>
                  <li>جنائي</li><li>أسرة</li><li>عقارات</li><li>عمل</li><li>مدني</li><li>إصابات</li>
                </>
              )}
            </ul>
            <article>
              <p>{language === 'en' 
                ? "Our general law practice spans criminal defense, family matters, civil litigation, employment disputes, real estate transactions and personal injury claims—delivering strategic representation focused on outcomes."
                : "يغطي قسم القانون العام لدينا الدفاع الجنائي، قضايا الأسرة، التقاضي المدني، منازعات العمل، المعاملات العقارية ودعاوى الإصابات الشخصية—مع تمثيل استراتيجي يركز على النتائج."}
              </p>
              <p><strong>{language === 'en' ? "We cover:" : "نغطي:"}</strong><br />
                {language === 'en' 
                  ? " - Criminal Defense & investigations\n - Family Law (divorce, custody, inheritance)\n - Real Estate contracts & property disputes\n - Personal Injury & negligence claims\n - Employment & labor disputes\n - Civil litigation & dispute resolution"
                  : " - الدفاع الجنائي والتحقيقات\n - قانون الأسرة (الطلاق، الحضانة، الميراث)\n - عقود ومنازعات العقارات\n - إصابات شخصية ودعاوى الإهمال\n - منازعات العمل والعمال\n - التقاضي المدني وحل النزاعات"}
              </p>
              <p>{language === 'en' 
                ? "Each case is handled with evidence-grounded analysis, clear communication and courtroom readiness."
                : "كل ملف يُدار بتحليل قائم على الأدلة وتواصل واضح واستعداد قضائي كامل."}
              </p>
              <p><Link className="btn" href="/#contact">{language === 'en' ? "Request Counsel" : "اطلب استشارة"}</Link></p>
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
