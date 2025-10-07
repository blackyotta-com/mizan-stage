'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CybercrimeDefense() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('mizan-lang') || 'en';
    setLanguage(savedLang);
  }, []);

  return (
    <>
      <Head>
        <title>{language === 'en' ? 'Cybercrime Defense | Mizan Law Firm' : 'الدفاع عن الجرائم الإلكترونية | شركة ميزان للمحاماة'}</title>
        <meta name="description" content={language === 'en' ? "Defense against cyber fraud, hacking, ransomware, identity theft and digital extortion. Expert legal + forensic team." : "الدفاع عن قضايا الاختراق، الاحتيال الإلكتروني، الفدية، الابتزاز، التشهير والتهديدات الرقمية المعقدة."} />
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
              <Link href="/">{language === 'en' ? 'Home' : 'الرئيسية'}</Link> · <Link href="/#services">{language === 'en' ? 'Services' : 'الخدمات'}</Link> · {language === 'en' ? 'Cybercrime Defense' : 'الجرائم الإلكترونية'}
            </nav>
            <h1>{language === 'en' ? 'Cybercrime Defense' : 'الدفاع عن الجرائم الإلكترونية'}</h1>
            <ul className="pill-list">
              {language === 'en' ? (
                <>
                  <li>Hacking</li><li>Fraud</li><li>Ransomware</li><li>Data Breach</li><li>Identity Theft</li><li>Forensics</li>
                </>
              ) : (
                <>
                  <li>اختراق</li><li>احتيال</li><li>فدية</li><li>ابتزاز</li><li>تشهير</li><li>أدلة</li>
                </>
              )}
            </ul>
            <article>
              <p>{language === 'en' 
                ? "Our cybercrime defense practice combines legal strategy with technical depth. We rapidly contain and investigate incidents while constructing a defense rooted in validated digital evidence."
                : "نوفر دفاعاً متخصصاً وسريع الحركة ضد الاتهامات والنزاعات المرتبطة بالاختراق، إساءة استخدام الأنظمة، إسقاط البيانات، الاحتيال الإلكتروني، الابتزاز الرقمي والاستغلال غير المشروع للمنصات."}
              </p>
              <p><strong>{language === 'en' ? "We handle:" : "نتعامل مع:"}</strong><br />
                {language === 'en' 
                  ? " - Unauthorized access & network intrusion\n - Digital fraud, phishing & financial cybercrime\n - Ransomware & extortion scenarios\n - Data exfiltration & insider threats\n - Cryptocurrency tracing & asset recovery\n - Online harassment, defamation & impersonation"
                  : " - الوصول غير المصرح به واختراق الشبكات\n - الاحتيال والتصيد وتحويل الأموال\n - هجمات الفدية وتسريب البيانات\n - سرقة الهوية والحسابات\n - التشهير والتحرش والابتزاز عبر المنصات\n - الجرائم المالية الرقمية والعملات المشفرة"}
              </p>
              <p>{language === 'en' 
                ? "We collaborate with certified forensic analysts to preserve, authenticate and present technical artifacts that withstand courtroom scrutiny."
                : "ننسق بين التحليل الجنائي، إدارة المخاطر، والاستراتيجية القانونية لتفكيك عناصر الاتهام وتعزيز الحجج الدفاعية."}
              </p>
              <p><Link className="btn" href="/#contact">{language === 'en' ? "Request Counsel" : "اطلب مساعدة عاجلة"}</Link></p>
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
