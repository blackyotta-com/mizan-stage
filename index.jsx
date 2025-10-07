<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Mizan | Legal Services &amp; Cybercrime Defense</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link rel="preload" href="mizan.jpg" as="image" importance="high" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap"
    rel="stylesheet"
  />
  <link
    rel="preload"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    as="style"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    media="print"
    onload="this.media='all'"
  />
  <noscript>
    &lt;link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    /&gt;
  </noscript>
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="icon" type="image/png" sizes="32x32" href="mizan-logo.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="mizan-logo.png" />
  <link rel="apple-touch-icon" href="mizan-logo.png" />
  <meta
    name="description"
    content="Mizan Law Firm – General law & cybercrime defense, digital forensics, IP rights. Bilingual legal expertise protecting your rights online & offline."
  />
  <header className="site-header" role="banner">
    <div className="container navbar">
      <a href="index.html" className="brand" aria-label="Mizan Home">
        <img
          src="mizan-logo.png"
          alt="Mizan Logo"
          className="brand-logo"
          width={150}
          height={150}
          loading="eager"
          fetchpriority="high"
        />
      </a>
      <button
        className="nav-toggle"
        aria-expanded="false"
        aria-controls="primary-nav"
      >
        <i className="fas fa-bars" />
      </button>
      <nav id="primary-nav" aria-label="Primary" className="nav-wrapper">
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#home" data-i18n="nav.home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about" data-i18n="nav.about">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" data-i18n="nav.services">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" data-i18n="nav.testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" data-i18n="nav.contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="lang-switch" role="group" aria-label="Language switcher">
        <button type="button" data-lang="en" className="active">
          EN
        </button>
        <button type="button" data-lang="ar">
          AR
        </button>
      </div>
    </div>
  </header>
  {/* HERO */}
  <section id="home" className="hero" aria-labelledby="hero-heading">
    <div className="container hero-grid">
      <div className="hero-copy lang-en">
        <h1 id="hero-heading">
          Defending Your Rights &amp; Protecting Your Digital World
        </h1>
        <p className="lead">
          General law and advanced cybercrime defense from a bilingual team
          combining courtroom strategy with deep technical forensics.
        </p>
        <div className="badges">
          <span className="badge">Cybercrime Defense</span>
          <span className="badge">Digital Forensics</span>
          <span className="badge">IP &amp; Online Rights</span>
          <span className="badge">Litigation</span>
        </div>
        <div>
          <button className="btn" data-scroll="#contact" id="cta-header-en">
            Get Legal Help Now
          </button>
          <button className="btn btn-outline" data-scroll="#services">
            Explore Services
          </button>
        </div>
      </div>
      <div className="hero-copy lang-ar hidden" dir="rtl">
        <h1>ندافع عن حقوقك ونحمي عالمك الرقمي</h1>
        <p className="lead">
          فريق ثنائي اللغة متخصص في القضايا العامة والدفاع عن الجرائم
          الإلكترونية والتحقيقات الرقمية والملكية الفكرية.
        </p>
        <div className="badges">
          <span className="badge">الدفاع السيبراني</span>
          <span className="badge">الأدلة الرقمية</span>
          <span className="badge">الملكية الفكرية</span>
          <span className="badge">التقاضي</span>
        </div>
        <div>
          <button className="btn" data-scroll="#contact" id="cta-header-ar">
            احصل على استشارة الآن
          </button>
          <button className="btn btn-outline" data-scroll="#services">
            استعرض الخدمات
          </button>
        </div>
      </div>
    </div>
  </section>
  <hr className="divider" />
  {/* ABOUT */}
  <section
    id="about"
    className="section about-enhanced"
    aria-labelledby="about-heading"
  >
    <div className="container">
      <div className="section-header hidden">
        <span className="eyebrow lang-en">Who We Are</span>
        <span className="eyebrow lang-ar hidden" dir="rtl">
          من نحن
        </span>
        <h2 id="about-heading" className="lang-en">
          Expert Legal &amp; Cyber Defense Team
        </h2>
        <h2 className="lang-ar hidden" dir="rtl">
          فريق متخصص في الدفاع القانوني والجرائم الإلكترونية
        </h2>
        <p className="lead lang-en">
          Mizan blends traditional legal advocacy with cutting-edge digital
          investigation—representing individuals, startups, and enterprises in
          complex cross-border matters.
        </p>
        <p className="lead lang-ar hidden" dir="rtl">
          تمزج ميزان بين الخبرة القانونية التقليدية والتحقيقات الرقمية الحديثة
          لخدمة الأفراد والشركات في القضايا المعقدة.
        </p>
      </div>
      <div className="about-grid">
        {/* Who We Are panel */}
        <div className="about-panel panel-who fade-in">
          <h3 className="lang-en" style={{ marginTop: 0 }}>
            Who We Are
          </h3>
          <h3 className="lang-ar hidden" dir="rtl" style={{ marginTop: 0 }}>
            من نحن
          </h3>
          <p
            className="lang-en"
            style={{ fontWeight: 700, margin: ".35em 0 .6em" }}
          >
            Expert Legal &amp; Cyber Defense Team
          </p>
          <p
            className="lang-ar hidden"
            dir="rtl"
            style={{ fontWeight: 700, margin: ".35em 0 .6em" }}
          >
            فريق متخصص في الدفاع القانوني والجرائم الإلكترونية
          </p>
          <p className="lang-en">
            Mizan blends traditional legal advocacy with cutting-edge digital
            investigation—representing individuals, startups, and enterprises in
            complex cross-border matters.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            تمزج ميزان بين الخبرة القانونية التقليدية والتحقيقات الرقمية الحديثة
            لخدمة الأفراد والشركات في القضايا المعقدة.
          </p>
        </div>
        <div className="about-panel panel-mission fade-in">
          <h3 className="lang-en" style={{ marginTop: 0 }}>
            Our Mission
          </h3>
          <h3 className="lang-ar hidden" dir="rtl" style={{ marginTop: 0 }}>
            مهمتنا
          </h3>
          <p className="lang-en">
            Protect rights, neutralize cyber threats, and deliver strategic
            legal clarity. We operate at the intersection of law, technology,
            and human impact.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            حماية الحقوق، مواجهة التهديدات السيبرانية، وتقديم وضوح قانوني
            استراتيجي في تقاطع القانون والتقنية وتأثيرها على الناس.
          </p>
          <div className="feature-cards">
            <div className="feature-card lang-en">
              <i className="fas fa-shield-virus" />
              <span>Rapid incident &amp; breach response</span>
            </div>
            <div className="feature-card lang-en">
              <i className="fas fa-scale-balanced" />
              <span>Litigation strategy rooted in evidence</span>
            </div>
            <div className="feature-card lang-en">
              <i className="fas fa-language" />
              <span>Bilingual advisory &amp; representation</span>
            </div>
            <div className="feature-card lang-en">
              <i className="fas fa-magnifying-glass-chart" />
              <span>Deep forensic correlation &amp; timelines</span>
            </div>
            <div className="feature-card lang-ar hidden" dir="rtl">
              <i className="fas fa-shield-virus" />
              <span>استجابة سريعة للحوادث والاختراقات</span>
            </div>
            <div className="feature-card lang-ar hidden" dir="rtl">
              <i className="fas fa-scale-balanced" />
              <span>استراتيجية تقاضي مبنية على الأدلة</span>
            </div>
            <div className="feature-card lang-ar hidden" dir="rtl">
              <i className="fas fa-language" />
              <span>استشارات وتمثيل ثنائي اللغة</span>
            </div>
            <div className="feature-card lang-ar hidden" dir="rtl">
              <i className="fas fa-magnifying-glass-chart" />
              <span>تحليل جنائي عميق وربط زمني</span>
            </div>
          </div>
          <div className="stats-row">
            <div className="stat-box">
              <h4>250+</h4>
              <p className="lang-en">Resolved Cases</p>
              <p className="lang-ar hidden" dir="rtl">
                قضية محلولة
              </p>
            </div>
            <div className="stat-box">
              <h4>92%</h4>
              <p className="lang-en">Early Dismissals</p>
              <p className="lang-ar hidden" dir="rtl">
                إسقاط مبكر
              </p>
            </div>
            <div className="stat-box">
              <h4>24/7</h4>
              <p className="lang-en">Rapid Response</p>
              <p className="lang-ar hidden" dir="rtl">
                استجابة دائمة
              </p>
            </div>
            <div className="stat-box">
              <h4>15+</h4>
              <p className="lang-en">Forensic Domains</p>
              <p className="lang-ar hidden" dir="rtl">
                مجالات تحليل
              </p>
            </div>
          </div>
        </div>
        <div className="about-panel panel-choose fade-in">
          <h3 className="lang-en">Why Clients Choose Us</h3>
          <h3 className="lang-ar hidden" dir="rtl">
            لماذا يختارنا العملاء
          </h3>
          <p className="lang-en">
            We align legal strategy with verifiable technical evidence, ensuring
            credibility with regulators, opposing counsel and courts.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            نربط الاستراتيجية القانونية بالأدلة التقنية الموثوقة، مما يعزز
            المصداقية أمام الجهات القانونية.
          </p>
          <ul
            className="lang-en"
            style={{ margin: "10px 0 24px 1.1em", lineHeight: "1.6" }}
          >
            <li>Cyber + traditional legal depth</li>
            <li>Coordinated breach containment</li>
            <li>Chain-of-custody integrity</li>
            <li>Discrete &amp; strategic escalation</li>
            <li>Transparent reporting</li>
          </ul>
          <ul
            className="lang-ar hidden"
            dir="rtl"
            style={{ margin: "10px 1.1em 24px 0", lineHeight: "1.6" }}
          >
            <li>دمج الخبرة القانونية والتقنية</li>
            <li>احتواء منسق للحوادث</li>
            <li>سلامة سلسلة الأدلة</li>
            <li>تصعيد استراتيجي بسرية</li>
            <li>تقارير شفافة</li>
          </ul>
          <p className="lang-en" style={{ fontSize: ".9rem", opacity: ".75" }}>
            Our analysts employ memory forensics, log correlation, reverse
            engineering, and OSINT to produce litigation-grade findings.
          </p>
          <p
            className="lang-ar hidden"
            dir="rtl"
            style={{ fontSize: ".9rem", opacity: ".75" }}
          >
            يستخدم محللونا التحليل الجنائي للذاكرة، وترابط السجلات، والهندسة
            العكسية، وOSINT لإنتاج نتائج قابلة للدفاع قضائياً.
          </p>
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 16,
              flexWrap: "wrap"
            }}
          >
            <button className="btn" data-scroll="#services">
              <span className="lang-en">Explore Services</span>
              <span className="lang-ar hidden" dir="rtl">
                استعرض الخدمات
              </span>
            </button>
            <button className="btn btn-outline" data-scroll="#contact">
              <span className="lang-en">Request Consultation</span>
              <span className="lang-ar hidden" dir="rtl">
                اطلب استشارة
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* SERVICES */}
  <section id="services" className="section" aria-labelledby="services-heading">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow lang-en">What We Do</span>
        <span className="eyebrow lang-ar hidden" dir="rtl">
          خدماتنا
        </span>
        <h2 id="services-heading" className="lang-en">
          Strategic Legal &amp; Digital Solutions
        </h2>
        <h2 className="lang-ar hidden" dir="rtl">
          حلول قانونية ورقمية استراتيجية
        </h2>
      </div>
      <div className="services-grid">
        <div className="service-card" data-link="service-general-law.html">
          <div className="service-icon">
            <i className="fas fa-balance-scale" />
          </div>
          <h3 className="lang-en">General Law Cases</h3>
          <h3 className="lang-ar hidden" dir="rtl">
            القانون العام
          </h3>
          <p className="lang-en">
            Criminal, family, civil litigation, employment, real estate &amp;
            more with adaptive courtroom strategy.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            القضايا الجنائية، الأسرة، الدعاوى المدنية، العمل، العقارات والمزيد
            باستراتيجيات دفاع متقدمة.
          </p>
          <i className="fas fa-arrow-right arrow" />
        </div>
        <div
          className="service-card"
          data-link="service-cybercrime-defense.html"
        >
          <div className="service-icon">
            <i className="fas fa-shield-halved" />
          </div>
          <h3 className="lang-en">Cybercrime Defense</h3>
          <h3 className="lang-ar hidden" dir="rtl">
            الدفاع السيبراني
          </h3>
          <p className="lang-en">
            Defense against hacking, fraud, ransomware, data theft &amp; cyber
            extortion.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            الدفاع ضد الاختراق والاحتيال والفدية وسرقة البيانات والابتزاز
            الإلكتروني.
          </p>
          <i className="fas fa-arrow-right arrow" />
        </div>
        <div
          className="service-card"
          data-link="service-digital-forensics.html"
        >
          <div className="service-icon">
            <i className="fas fa-magnifying-glass-chart" />
          </div>
          <h3 className="lang-en">Digital Forensics</h3>
          <h3 className="lang-ar hidden" dir="rtl">
            الأدلة الرقمية
          </h3>
          <p className="lang-en">
            Evidence recovery, chain-of-custody analysis &amp; expert testimony.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            استخراج الأدلة، تتبع المصدر، وشهادات الخبراء.
          </p>
          <i className="fas fa-arrow-right arrow" />
        </div>
        <div className="service-card" data-link="service-ip-rights.html">
          <div className="service-icon">
            <i className="fas fa-copyright" />
          </div>
          <h3 className="lang-en">IP &amp; Online Rights</h3>
          <h3 className="lang-ar hidden" dir="rtl">
            الملكية الفكرية
          </h3>
          <p className="lang-en">
            Copyright, trademarks, digital content protection &amp; anti-piracy
            actions.
          </p>
          <p className="lang-ar hidden" dir="rtl">
            حقوق النشر، العلامات التجارية، حماية المحتوى الرقمي ومكافحة القرصنة.
          </p>
          <i className="fas fa-arrow-right arrow" />
        </div>
      </div>
    </div>
  </section>
  {/* CLIENTS */}
  <section
    id="clients"
    className="section section-tight"
    aria-labelledby="clients-heading"
  >
    <div className="container">
      <div className="section-header" style={{ marginBottom: 36 }}>
        <h2 id="clients-heading" className="lang-en">
          Selected Clients
        </h2>
        <h2 className="lang-ar hidden" dir="rtl">
          عملاء مختارون
        </h2>
      </div>
      <div className="clients-logos">
        <div className="client-logo">
          <img src="alhusun.jpeg" alt="Alhusun" />
        </div>
        <div className="client-logo">
          <img src="getfit.jpeg" alt="GetFit" />
        </div>
        <div className="client-logo">
          <img src="sinjari.jpeg" alt="Sinjari" />
        </div>
        <div className="client-logo" aria-hidden="true">
          <span style={{ color: "#222", fontSize: ".9rem", fontWeight: 600 }}>
            + more
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* CONTACT */}
  <section id="contact" className="section" aria-labelledby="contact-heading">
    <div className="container">
      <div className="section-header">
        <span className="eyebrow lang-en">Get In Touch</span>
        <span className="eyebrow lang-ar hidden" dir="rtl">
          تواصل معنا
        </span>
        <h2 id="contact-heading" className="lang-en">
          Request a Confidential Consultation
        </h2>
        <h2 className="lang-ar hidden" dir="rtl">
          اطلب استشارة سرية
        </h2>
      </div>
      <div className="contact-wrap">
        <form
          id="contact-form"
          className="contact-card"
          action="https://formspree.io/f/xzzjzbbk"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="name" className="lang-en">
              Name
            </label>
            <label htmlFor="name" className="lang-ar hidden" dir="rtl">
              الاسم
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required=""
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="lang-en">
              Email
            </label>
            <label htmlFor="email" className="lang-ar hidden" dir="rtl">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required=""
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="lang-en">
              Your Case / Message
            </label>
            <label htmlFor="message" className="lang-ar hidden" dir="rtl">
              وصف القضية / الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              required=""
              defaultValue={""}
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            defaultValue="New inquiry from Mizan Law website"
          />
          <button className="btn" type="submit" data-i18n="form.submit">
            Send Inquiry
          </button>
          <p className="success-msg lang-en" id="success-msg-en">
            Message sent. We will reply shortly.
          </p>
          <p
            className="success-msg lang-ar hidden"
            id="success-msg-ar"
            dir="rtl"
          >
            تم الإرسال. سنرد قريباً.
          </p>
        </form>
        <div className="contact-card fade-in">
          <h3 className="lang-en">Office &amp; Direct</h3>
          <h3 className="lang-ar hidden" dir="rtl">
            المكتب والتواصل
          </h3>
          <p className="lang-en">
            <i className="fas fa-location-dot" /> Lalav Airport View, Erbil,
            Iraq
            <br />
            <i className="fas fa-phone" /> +964 770 449 0696
            <br />
            <i className="fas fa-envelope" />{" "}
            <a className="contact-email" href="mailto:osamaabwbakr@gmail.com">
              osamaabwbakr@gmail.com
            </a>
          </p>
          <p className="lang-ar hidden" dir="rtl">
            <i className="fas fa-location-dot" /> لالاف أيربورت ڤيو، أربيل
            <br />
            <i className="fas fa-phone" /> ‎+964 770 449 0696‎
            <br />
            <i className="fas fa-envelope" />{" "}
            <a className="contact-email" href="mailto:osamaabwbakr@gmail.com">
              osamaabwbakr@gmail.com
            </a>
          </p>
          <p className="lang-en" style={{ fontSize: ".85rem", opacity: ".7" }}>
            Urgent cyber incident? Mention "PRIORITY" in the message.
          </p>
          <p
            className="lang-ar hidden"
            dir="rtl"
            style={{ fontSize: ".85rem", opacity: ".7" }}
          >
            للحالات العاجلة اذكر كلمة "عاجل" في الرسالة.
          </p>
        </div>
      </div>
    </div>
  </section>
  <footer className="site-footer" role="contentinfo">
    <div className="container footer-grid">
      <div className="footer-col">
        <h4 className="lang-en">Firm</h4>
        <h4 className="lang-ar hidden" dir="rtl">
          الشركة
        </h4>
        <ul className="footer-links lang-en">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="footer-links lang-ar hidden" dir="rtl">
          <li>
            <a href="#about">من نحن</a>
          </li>
          <li>
            <a href="#services">الخدمات</a>
          </li>
          <li>
            <a href="#contact">تواصل</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="lang-en">Focus Areas</h4>
        <h4 className="lang-ar hidden" dir="rtl">
          مجالات التركيز
        </h4>
        <ul className="footer-links lang-en">
          <li>
            <a href="service-cybercrime-defense.html">Cybercrime</a>
          </li>
          <li>
            <a href="service-digital-forensics.html">Forensics</a>
          </li>
          <li>
            <a href="service-ip-rights.html">IP &amp; Rights</a>
          </li>
        </ul>
        <ul className="footer-links lang-ar hidden" dir="rtl">
          <li>
            <a href="service-cybercrime-defense-ar.html">الجرائم الإلكترونية</a>
          </li>
          <li>
            <a href="service-digital-forensics-ar.html">التحقيقات الرقمية</a>
          </li>
          <li>
            <a href="service-ip-rights-ar.html">الملكية الفكرية</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="lang-en">Policies</h4>
        <h4 className="lang-ar hidden" dir="rtl">
          سياسات
        </h4>
        <ul className="footer-links lang-en">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
        </ul>
        <ul className="footer-links lang-ar hidden" dir="rtl">
          <li>
            <a href="#">الخصوصية</a>
          </li>
          <li>
            <a href="#">الشروط</a>
          </li>
        </ul>
      </div>
    </div>
    <p className="copy lang-en">© 2025 Mizan Law Firm. All rights reserved.</p>
    <p className="copy lang-ar hidden" dir="rtl">
      © 2025 شركة ميزان للمحاماة. جميع الحقوق محفوظة.
    </p>
  </footer>
</>
