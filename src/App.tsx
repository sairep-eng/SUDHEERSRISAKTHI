import { motion, AnimatePresence } from "motion/react";
import { 
  Home, 
  Briefcase, 
  User, 
  GraduationCap, 
  Car, 
  Building2, 
  CheckCircle2, 
  Plus, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingDown,
  Building,
  Check
} from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/src/lib/utils";

// --- Types ---
interface BlogPost {
  title: string;
  date: string;
  category: string;
  desc: string;
  fullContent: string;
  img: string;
  readTime: string;
}

// --- Icons & UI Components ---

const Logo = () => (
  <a href="#" style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
    <img 
      src="https://i.ibb.co/6J1mkcZv/Sri-sakthi-logo.png" 
      alt="Sri Sakthi Associates Logo"
      style={{height:'70px', width:'auto', objectFit:'contain', display:'block'}}
      referrerPolicy="no-referrer"
    />
  </a>
);

const SectionHeading = ({ badge, title, subtext, centered = true }: { badge?: string, title: string, subtext?: string, centered?: boolean }) => (
  <div className={cn("max-w-3xl mb-16", centered ? "mx-auto text-center" : "text-left")}>
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[11px] font-bold uppercase tracking-widest mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
    {subtext && <p className="text-white/50 text-lg leading-relaxed">{subtext}</p>}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileNav = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const nav = document.getElementById('mobileNav');
      const btn = document.getElementById('hamburgerBtn');
      if (nav && btn && !nav.contains(e.target as Node) && !btn.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      <nav>
        <Logo />
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#whyus">WHY US</a></li>
          <li><a href="#emicalculator">EMI CALCULATOR</a></li>
          <li><a href="#blogs">BLOGS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <button 
            className="hamburger" 
            onClick={toggleMobileNav} 
            id="hamburgerBtn"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <a href="#contact" 
             className="cta-nav"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
             }}>
            APPLY NOW
          </a>
        </div>
      </nav>

      <div id="mobileNav" className={cn(isMenuOpen && "open")}>
        <a href="#home" onClick={closeMobileNav}>HOME</a>
        <a href="#services" onClick={closeMobileNav}>SERVICES</a>
        <a href="#about" onClick={closeMobileNav}>ABOUT</a>
        <a href="#whyus" onClick={closeMobileNav}>WHY US</a>
        <a href="#emicalculator" onClick={closeMobileNav}>EMI CALCULATOR</a>
        <a href="#blogs" onClick={closeMobileNav}>BLOGS</a>
        <a href="#contact" onClick={closeMobileNav}>CONTACT</a>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-inner">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left-col"
          >
            <span className="hero-badge">
              Reliable Financial Consultancy
            </span>
            <h1 className="hero-h">
              We Don't Just<br/>
              <span style={{color:"#F59E0B"}}>Find Loans.</span> We Find the Right One.
            </h1>
            <p className="hero-p">
              Big firms put you on hold. We pick up the phone. Our dedicated team has built real relationships with 40+ banks and NBFCs — so when someone from Andhra Pradesh or Telangana needs funding, we don't just apply — we fight for you.
            </p>
            <div className="hero-btns">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
                }}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] text-center cursor-pointer"
              >
                Apply for Loan Now
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
                }}
                className="border-2 border-gold-500/30 hover:border-gold-500 text-gold-500 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:bg-gold-500/5 text-center cursor-pointer"
              >
                Request a Callback
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-right-col"
          >
            <img 
              src="https://i.ibb.co/8n9b9JkG/loanpng.png" 
              alt="Expert Finance Consultation" 
              className="hero-img-element"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="hero-stats-section">
        <div className="hero-stats">
          {[
            { label: "Years Experience", value: "15+" },
            { label: "Loans Sanctioned", value: "2000+" },
            { label: "Bank & NBFC Partners", value: "40+" },
            { label: "Approval Rate", value: "98%" },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="h-stat"
            >
              <strong>
                {stat.value}
              </strong>
              <span>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { 
      id: 0, 
      label: "Founder Story", 
      content: "Sri Sakthi Associates was founded by Gadde Sudheer Kumar in 2009 with one mission — to make loan approvals simple, transparent and fast for the people of Andhra Pradesh and Telangana. With over 15 years of experience, we have helped 2000+ clients get the funding they need." 
    },
    { 
      id: 1, 
      label: "Our Mission", 
      content: "We reviewed your profile honestly, suggest improvements if needed, and then match you with the right lender — free of charge. We are not a call centre. When you contact us, you speak directly with Sudheer Kumar and his team." 
    },
    { 
      id: 2, 
      label: "Proven Results", 
      content: "We've got loans approved for people banks had already rejected. With direct relationships with 40+ banks and NBFCs, we ensure your application reaches the decision-makers directly." 
    }
  ];

  return (
    <section id="about" className="bg-navy-900/30 about-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start about-wrap">
          <div className="w-full text-col">
             <SectionHeading 
              badge="Our Story"
              title="A Legacy of <span className='text-gold-500'>Financial Trust</span>"
              centered={false}
            />
            
            {/* Tabs */}
            <div className="about-tabs flex border-b border-white/5 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-4 lg:px-6 py-4 text-[11px] lg:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex-shrink-0",
                    activeTab === tab.id ? "text-gold-500" : "text-white/40 hover:text-white"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white/60 text-base lg:text-lg leading-relaxed min-h-[160px] lg:min-h-[140px]"
              >
                {tabs[activeTab].content}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex gap-12">
              <div>
                <h4 className="text-3xl font-display font-bold text-white mb-2">2000+</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-white/5" />
              <div>
                <h4 className="text-3xl font-display font-bold text-white mb-2">98%</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Approval Rate</p>
              </div>
            </div>
          </div>

          <div className="w-full founder-col">
            <div className="glass-card founder-card p-6 rounded-[20px] overflow-hidden group">
              <div className="relative h-[420px] rounded-t-[16px] overflow-hidden mb-8">
                <img src="https://i.ibb.co/G4tys5nC/gaddesudheerjpg.jpg" alt="Gadde Sudheer - Founder & Lead Consultant" style={{width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '16px 16px 0 0', display: 'block'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Gadde Sudheer Kumar</h3>
                  <p className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px]">Founder & Lead Consultant</p>
                </div>
              </div>
              <div className="flex items-center justify-center px-2">
                <a href="https://wa.me/918143181439" target="_blank" rel="noopener noreferrer" style={{color:'#D4A017', letterSpacing:'2px', textTransform:'uppercase', fontSize:'13px', textDecoration:'none'}}>CONTACT GADDE SUDHEER &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "Home Loans", description: "Best rates from 40+ banks for residential & commercial properties with zero hassle.", icon: Home },
    { title: "Business Loans", description: "MSME, working capital, and term loans up to ₹5 Crore with fast processing times.", icon: Briefcase },
    { title: "Personal Loans", description: "Quick approvals for salaried and self-employed professionals with minimal documentation.", icon: User },
    { title: "Education Loans", description: "Collateral-free options for students planning studies in India or top universities abroad.", icon: GraduationCap },
    { title: "Vehicle Loans", description: "Fast processing for 2-wheeler and 4-wheeler loans with competitive interest rates.", icon: Car },
    { title: "Loan Against Property", description: "Unlock up to 75% of your property's value with flexible repayment tenures up to 15 years.", icon: Building2 },
  ];

  return (
    <section id="services" className="services-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading 
          badge="Expert Solutions"
          title="Designed for Your <span className='text-gold-500'>Financial Journey</span>"
          subtext="From personal needs to business expansion, we handle the complexity of banking so you can focus on what matters."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch srv-grid">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-900 shadow-xl p-10 rounded-[20px] group border border-white/5 hover:border-gold-500/30 transition-all duration-500 relative flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-8 transition-transform group-hover:scale-110">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">{service.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-gold-500 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const reasons = [
    { title: "40+ Banking Partners", icon: Building, size: "small" },
    { title: "7-Day Disbursement", icon: Zap, size: "small" },
    { title: "Free CIBIL Check", icon: ShieldCheck, size: "large" },
    { title: "Zero Hidden Charges", icon: TrendingDown, size: "large" },
  ];

  return (
    <section id="whyus" className="bg-navy-950 whyus-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center why-wrap">
          {/* Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-navy-900 border border-white/5 p-8 rounded-[20px] flex flex-col justify-between group hover:border-gold-500/40 transition-all">
                <TrendingDown className="text-gold-500 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-white font-bold text-lg leading-tight">{reasons[0].title}</h4>
              </div>
              <div className="bg-navy-900 border border-white/5 p-8 rounded-[20px] flex flex-col justify-between group hover:border-gold-500/40 transition-all">
                <Building className="text-gold-500 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-white font-bold text-lg leading-tight">{reasons[1].title}</h4>
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="bg-navy-900 border border-white/5 p-8 rounded-[20px] flex flex-col justify-between group hover:border-gold-500/40 transition-all">
                <Zap className="text-gold-500 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-white font-bold text-lg leading-tight">{reasons[2].title}</h4>
              </div>
               <div className="bg-navy-900 border border-white/5 p-8 rounded-[20px] flex flex-col justify-between group hover:border-gold-500/40 transition-all">
                <ShieldCheck className="text-gold-500 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-white font-bold text-lg leading-tight">{reasons[3].title}</h4>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading 
              badge="The Difference"
              title="Why Choose <span className='text-gold-500'>Sakthi Associates</span>"
              centered={false}
            />
            <p className="text-white/50 text-lg mb-10">We handle the bank interactions, documentation, and technicalities while you prepare for your next big growth phase.</p>
            <div className="space-y-6">
              {[
                "40+ Banking & NBFC Partners for the perfect profile match",
                "7-Day Disbursement guarantee with dedicated managers",
                "Free CIBIL Score Check and guidance before applying",
                "Zero Hidden Charges – 100% transparent process always",
                "Recovery assistance for previously rejected loan applications",
                "Personal Response Guarantee within 48 hours"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <Check className="text-gold-500 group-hover:text-navy-950" size={14} />
                  </div>
                  <span className="text-white/70 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EMICalculatorSection = () => {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);

  const emiData = useMemo(() => {
    const P = amount;
    const R = rate / 12 / 100;
    const N = tenure * 12;
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayable = EMI * N;
    const totalInterest = totalPayable - P;
    return {
      monthlyEMI: Math.round(EMI).toLocaleString("en-IN"),
      totalInterest: Math.round(totalInterest).toLocaleString("en-IN"),
      totalPayable: Math.round(totalPayable).toLocaleString("en-IN")
    };
  }, [amount, rate, tenure]);

  return (
    <section id="emicalculator" className="bg-navy-900/10 emicalculator-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center emi-wrap">
          <div className="emi-inputs-col">
            <SectionHeading 
              badge="Smart Planning"
              title="Finance <span className='text-gold-500'>Calculator</span>"
              centered={false}
              subtext="Estimate your monthly commitment and plan your financial future with our precise calculations."
            />
            
            <div className="space-y-10 mt-12 emi-fields">
              {[
                { label: "Loan Amount", value: amount, min: 100000, max: 10000000, setter: setAmount, unit: "₹" },
                { label: "Interest Rate", value: rate, min: 5, max: 20, setter: setRate, unit: "%" },
                { label: "Tenure (Years)", value: tenure, min: 1, max: 30, setter: setTenure, unit: "Y" },
              ].map((field) => (
                <div key={field.label} className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span className="text-white/60">{field.label}</span>
                    <span className="text-gold-500">{field.unit === "₹" ? `₹${field.value.toLocaleString("en-IN")}` : `${field.value}${field.unit}`}</span>
                  </div>
                  <input 
                    type="range" 
                    min={field.min} 
                    max={field.max} 
                    step={field.unit === "%" ? 0.1 : 1}
                    value={field.value}
                    onChange={(e) => field.setter(Number(e.target.value))}
                    className="w-full h-1.5 bg-navy-900 rounded-full appearance-none cursor-pointer accent-gold-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-900 p-10 lg:p-14 rounded-[24px] border border-gold-500/20 shadow-2xl relative overflow-hidden emi-box">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 blur-[100px]" />
            <div className="relative text-center">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Calculated Result</span>
              <div className="text-6xl lg:text-7xl font-display font-bold text-gold-500 mb-2 tracking-tight">₹{emiData.monthlyEMI}</div>
              <p className="text-white/60 text-sm font-medium mb-12">Monthly EMI Amount</p>
              
              <div className="grid grid-cols-2 gap-8 mb-12 text-left bg-white/5 p-8 rounded-2xl emi-result">
                <div className="er-item">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest block mb-1">Total Interest</span>
                  <p className="text-xl font-bold text-white tracking-tight">₹{emiData.totalInterest}</p>
                </div>
                <div className="er-item">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest block mb-1">Total Payable</span>
                  <p className="text-xl font-bold text-white tracking-tight">₹{emiData.totalPayable}</p>
                </div>
              </div>

              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
                }}
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 py-5 rounded-xl font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(212,160,23,0.2)] block text-center cursor-pointer"
              >
                Begin Application Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojrqqgg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        alert('Something went wrong. Please try again or WhatsApp us at +91 81431 81439');
      }
    } catch (error) {
      setStatus("error");
      alert('Connection error. Please WhatsApp us at +91 81431 81439');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start contact-wrap">
          <div className="contact-info-col">
            <SectionHeading 
              badge="Get in Touch"
              title="Start Your <span className='text-gold-500'>Financial Journey</span>"
              centered={false}
              subtext="Connect with our experts today. We provide professional advice and streamlined assistance."
            />
            
            <div className="space-y-10 mt-12">
              {[
                { icon: Phone, label: "Phone & WhatsApp", value: "+91 81431 81439" },
                { icon: Mail, label: "Email Support", value: "sudheerkumar.gadde@gmail.com" },
                { icon: MapPin, label: "Office Location", value: "Guntur, Andhra Pradesh" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 grow-0 shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div className={cn(item.label === "Email Support" ? "contact-info-col" : "", item.label === "Office Location" && "location-content")}>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1">{item.label}</h4>
                    <p className={cn("text-lg font-bold text-white", item.label === "Email Support" && "email-link", item.label === "Office Location" && "location-text")}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-900/50 border border-white/5 p-10 lg:p-14 rounded-[28px] shadow-3xl min-h-[500px] flex flex-col justify-center cform">
            {status !== "success" ? (
              <form 
                id="enquiryForm"
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid sm:grid-cols-2 gap-6 fg-row">
                  <input 
                    type="text" 
                    name="name"
                    className="w-full bg-navy-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-gold-500/50 transition-all text-white placeholder:text-white/20 text-sm" 
                    placeholder="Full Name" 
                    required
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full bg-navy-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-gold-500/50 transition-all text-white placeholder:text-white/20 text-sm" 
                    placeholder="Phone Number" 
                    required
                  />
                </div>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-gold-500/50 transition-all text-white placeholder:text-white/20 text-sm" 
                  placeholder="Email Address" 
                  required
                />
                <div className="grid sm:grid-cols-2 gap-6">
                  <select 
                    name="loan_type"
                    className="w-full bg-navy-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-gold-500/50 transition-all text-white/50 text-sm appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Loan Type</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Education Loan">Education Loan</option>
                    <option value="Vehicle Loan">Vehicle Loan</option>
                    <option value="LAP">Loan Against Property</option>
                  </select>
                  <input 
                    type="number" 
                    name="amount"
                    className="w-full bg-navy-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-gold-500/50 transition-all text-white placeholder:text-white/20 text-sm" 
                    placeholder="Required Amount" 
                    required
                  />
                </div>
                <textarea 
                  rows={4} 
                  name="message"
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-gold-500/50 transition-all text-white placeholder:text-white/20 text-sm" 
                  placeholder="Tell us about your needs..." 
                  required
                />
                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "w-full bg-gold-500 hover:bg-gold-600 text-navy-950 py-5 rounded-xl font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(212,160,23,0.2)] cursor-pointer",
                    status === "submitting" && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {status === "submitting" ? "Sending..." : "Submit Request"}
                </button>
              </form>
            ) : (
              <motion.div 
                id="formSuccess"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05))',
                  border: '1px solid rgba(37,211,102,0.4)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  textAlign: 'center'
                }}
              >
                <div style={{fontSize:'56px', marginBottom:'16px'}}>✅</div>
                <h3 style={{fontFamily:'"Montserrat", sans-serif', fontSize:'22px', fontWeight:800, color:'#fff', marginBottom:'10px'}}>
                  Enquiry Sent Successfully!
                </h3>
                <p style={{color:'#8899b4', fontSize:'14px', lineHeight:1.8, marginBottom:'24px'}}>
                  Thank you! Gadde Sudheer Kumar will personally call you within 48 hours.<br/>
                  For urgent help, WhatsApp us directly.
                </p>
                <a href="https://wa.me/918143181439" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{display:'inline-flex', alignItems:'center', gap:'10px', background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:'50px', fontWeight:700, fontSize:'13px', textDecoration:'none', letterSpacing:'1px'}}>
                  💬 WhatsApp Us Now
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogModal = ({ blog, isOpen, onClose }: { blog: BlogPost | null, isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!blog) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/90 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-navy-900 border border-white/10 rounded-3xl overflow-y-auto shadow-2xl modal-box"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="h-64 lg:h-[400px] w-full relative">
              <img src={blog.img} className="w-full h-full object-cover" alt={blog.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
            </div>

            <div className="p-8 lg:p-12 -mt-20 relative">
              <span className="inline-block px-4 py-1.5 bg-gold-500 text-navy-950 font-bold uppercase tracking-widest text-[10px] rounded-full mb-6">
                {blog.category}
              </span>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h2>
              <div className="flex items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest mb-10 pb-8 border-b border-white/5">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime || "5 min read"}</span>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="text-white/70 text-lg leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
              </div>

              <div className="mt-12 p-8 bg-gold-500/5 border border-gold-500/10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Have questions about this topic?</h4>
                  <p className="text-white/50 text-sm">Consult with Gadde Sudheer over WhatsApp for personalized advice.</p>
                </div>
                <a 
                  href="https://wa.me/918143181439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 shrink-0"
                >
                  <MessageCircle size={18} /> Chat with Expert
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const blogs: BlogPost[] = [
    { 
      title: "Why Loan Applications Get Rejected: A Detailed Guide", 
      date: "Apr 25, 2024", 
      category: "Guide",
      readTime: "6 min read",
      desc: "Discover the most common reasons for loan rejection and how you can fix your application for guaranteed approval.",
      fullContent: `
        <p>Securing a loan in today's competitive market requires more than just a stable income. Banks look at a multitude of factors, often leading to unexpected rejections for even well-earning professionals. Understanding these red flags is the first step toward a successful application.</p>
        <p>The primary reason for rejection is often a poor credit history. Your CIBIL score is the heartbeat of your financial profile; any score below 750 can significantly hurt your chances. Moreover, lenders analyze your debt-to-income ratio. If you're already spending more than 50% of your earnings on existing EMIs, banks might consider you over-leveraged.</p>
        <h3>Crucial Rejection Factors to Monitor:</h3>
        <ul>
          <li><strong>Incorrect Documentation:</strong> Simple errors in your PAN card, Aadhaar, or salary slips can lead to instant rejection.</li>
          <li><strong>Job Stability:</strong> Frequent job changes or gaps in employment signify high risk to traditional lenders.</li>
          <li><strong>Property Location:</strong> If your property is in a blacklisted area or lacks proper legal clearances, your home loan will be rejected regardless of your income.</li>
          <li><strong>Multiple Inquiries:</strong> Applying at several banks simultaneously creates hard inquiries, which lowers your score and suggests desperation.</li>
        </ul>
        <p>Wait times between rejections are critical. Instead of re-applying immediately, analyze the rejection letter, work on your score for 6 months, and then approach a consultant like Sri Sakthi Associates to re-engineer your profile.</p>
      `,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "How to Get the Lowest Interest Rate in 2024", 
      date: "Apr 18, 2024", 
      category: "Market News",
      readTime: "5 min read",
      desc: "Insider secrets to negotiating with banks and securing the best possible rates for your mortgage.",
      fullContent: `
        <p>Interest rates are at a cyclic high, making every basis point crucial for long-term savings. While the Repo Rate is determined by the RBI, the spread offered by banks can vary based on your individual profile. Negotiating effectively can save you lakhs of rupees over the tenure of your loan.</p>
        <p>A high credit score is your biggest bargaining chip. Individuals with scores above 800 often receive 'Elite' pricing, which can be 0.25% to 0.50% lower than standard rates. Additionally, your professional background matters—employees of Fortune 500 companies or Grade-A government institutions are often viewed as low-risk borrowers.</p>
        <h3>Strategies for Rate Negotiation:</h3>
        <ul>
          <li><strong>Switch to LTV Overlap:</strong> Maintaining a lower Loan-to-Value ratio (e.g., funding only 70% instead of 85%) encourages banks to offer better rates.</li>
          <li><strong>Choose Floating over Fixed:</strong> In the current Indian market, floating rates often provide better flexibility for future prepayments.</li>
          <li><strong>Relationship Banking:</strong> Don't ignore the bank where you hold your salary account; they often have pre-approved offers with discounted processing fees.</li>
        </ul>
        <p>Remember, the base rate is just the beginning. At Sri Sakthi Associates, we leverage our institutional relationships to help you navigate the fine print and secure rates that are not available to walk-in customers.</p>
      `,
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Understanding CIBIL Scores: Myths vs Reality", 
      date: "Apr 10, 2024", 
      category: "Tips",
      readTime: "4 min read",
      desc: "Don't let myths hold you back. We break down exactly how your score is calculated properly.",
      fullContent: `
        <p>Your CIBIL score is a 3-digit numeric summary of your credit history. Despite its importance, several misconceptions persist that prevent borrowers from managing their credit health effectively. Let's separate the truth from the noise.</p>
        <p>One common myth is that checking your own score will lower it. This is false. Checking your own report is a 'soft inquiry' and has zero impact on your score. However, when banks check your score for a loan application, it's a 'hard inquiry.' Excessive hard inquiries in a short period will certainly drop your points.</p>
        <h3>CIBIL Truths You Should Know:</h3>
        <ul>
          <li><strong>Closing Old Credit Cards:</strong> Closing an old card can actually lower your score because it reduces your credit age and total credit limit.</li>
          <li><strong>Settlement vs. Closing:</strong> 'Settling' a loan (paying less than the full amount) stays on your record for 7 years as a negative mark. Always aim to 'Close' the loan.</li>
          <li><strong>Mix of Credit:</strong> Having a healthy mix of secured (Home/Car) and unsecured (Personal/Credit Card) loans improves your credibility.</li>
        </ul>
        <p>Regularly monitoring your report—at least once a quarter—allows you to spot errors or identity theft before they block your loan approval. Credit health is a marathon, not a sprint.</p>
      `,
      img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Personal Loan vs Credit Card: Which is Better?", 
      date: "May 02, 2024", 
      category: "Comparison",
      readTime: "5 min read",
      desc: "An in-depth look at when to choose a structured personal loan vs a revolving credit card line.",
      fullContent: `
        <p>When you need immediate funds, you're often faced with two choices: swiping your credit card or applying for a personal loan. While both offer unsecured funding, the financial implications are vastly different. Choosing the wrong one can lead to a debt trap that's hard to escape.</p>
        <p>Credit cards are revolving credit. They are excellent for short-term needs (30–45 days) if you can pay the full amount back. However, if you only pay the minimum due, typical credit card interest rates in India hover around 36% to 48% per annum. Personal loans, conversely, offer a fixed tenure and much lower interest rates (usually 10% to 20%), making them better for large, planned expenses.</p>
        <h3>Comparing Your Options:</h3>
        <ul>
          <li><strong>Processing Speed:</strong> Credit cards provide instant cash (ATM) or swipes, while personal loans may take 24–48 hours for new customers.</li>
          <li><strong>Loan Tenure:</strong> Personal loans allow repayment over 1 to 5 years, whereas credit cards are designed for immediate clearing.</li>
          <li><strong>EMI Facility:</strong> Conversion of credit card debt to EMI often comes with hidden charges; upfront personal loans offer true transparency.</li>
        </ul>
        <p>If your requirement is above ₹2 lakhs and you need more than 6 months to pay it back, a structured personal loan is almost always the more financially sound decision.</p>
      `,
      img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Loan Against Property: Unlock Your Asset's Value", 
      date: "May 08, 2024", 
      category: "Mortgage",
      readTime: "7 min read",
      desc: "Learn how to use your existing residential or commercial property to fund business expansion or personal needs.",
      fullContent: `
        <p>Loan Against Property (LAP) is one of the most underrated financial tools in India. It allows you to unlock the capital tied up in your real estate while you continue to use the property. Whether it's for your child's overseas education or scaling your startup, LAP provides high-value funding at low costs.</p>
        <p>Because the loan is secured against an asset, lenders are willing to offer much lower interest rates compared to personal loans. Tenures can also extend up to 15 years, allowing for very manageable EMIs. Both residential and commercial properties can be used as collateral, provided they have clear legal titles and are self-occupied or rented out.</p>
        <h3>Benefits of LAP:</h3>
        <ul>
          <li><strong>Lower EMI:</strong> Long tenures mean you don't feel the pinch of high monthly outflows.</li>
          <li><strong>Versatile Usage:</strong> Unlike home loans, the funds from LAP can be used for any legitimate purpose, from medical emergencies to inventory purchase.</li>
          <li><strong>End-to-End Ownership:</strong> You retain complete ownership and rights to the property during the loan tenure.</li>
        </ul>
        <p>Wait times for LAP can be longer due to technical and legal valuations of the property. Working with experts ensures that your documentation complies with bank policies from day one.</p>
      `,
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Top Documents Needed for Any Loan in India", 
      date: "May 15, 2024", 
      category: "Guide",
      readTime: "4 min read",
      desc: "Speed up your loan approval by having this master checklist of documents ready beforehand.",
      fullContent: `
        <p>Documentation is the primary bottleneck in the Indian loan market. Banks follow strict KYC and income verification norms. If your paperwork is unorganized, your file will likely sit at the bottom of the credit officer's stack. Being 'Ready-to-Apply' means having a digital and physical folder of your vital records.</p>
        <p>Broadly, documentation is divided into three categories: Identity (KYC), Income, and Asset-related. For salaried individuals, the last three months' salary slips and Form 16 are mandatory. Self-employed applicants need audited financials, ITR for the last three years, and business registration proof like GST certificates.</p>
        <h3>The Master Checklist:</h3>
        <ul>
          <li><strong>KYC Documents:</strong> PAN Card, Aadhaar Card, and Voter ID or Passport for address verification.</li>
          <li><strong>Bank Statements:</strong> Original PDF statements of your primary account for the last 6 to 12 months.</li>
          <li><strong>Photographs:</strong> 2–4 recent passport-size photographs of all applicants and co-applicants.</li>
          <li><strong>Processing Fee Check:</strong> Most banks require an upfront processing fee check or a digital payment confirmation.</li>
        </ul>
        <p>Digitizing your documents and ensuring that your mobile number is linked to your Aadhaar for e-KYC can reduce your processing time by several days.</p>
      `,
      img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "How to Prepay Your Loan and Save Lakhs", 
      date: "May 20, 2024", 
      category: "Savings",
      readTime: "5 min read",
      desc: "Tenure vs EMI: Which prepayment strategy works best to reduce your total interest burden?",
      fullContent: `
        <p>Most borrowers are unaware that their initial EMIs go almost entirely toward interest. By the time you reach the midpoint of your loan tenure, you've already paid the bulk of the interest. Prepayment, especially when done in the first few years, can dramatically change the total cost of your loan.</p>
        <p>If you receive a bonus or a maturity amount, using it to prepay even a small percentage of your principal can shave years off your tenure. Banks usually offer two options when you prepay: reduce the monthly EMI or reduce the remaining tenure. Mathematically, choosing 'Tenure Reduction' saves significantly more interest over time.</p>
        <h3>Smart Prepayment Tips:</h3>
        <ul>
          <li><strong>The 1-Basic Rule:</strong> Try to make one extra EMI payment every year. This can reduce a 20-year loan to roughly 17 years.</li>
          <li><strong>Avoid Prepayment Penalties:</strong> Generally, floating-rate home loans have zero prepayment charges in India—use this to your advantage.</li>
          <li><strong>Start Early:</strong> A ₹1 lakh prepayment in Year 1 is worth much more than the same ₹1 lakh in Year 10.</li>
        </ul>
        <p>Always ensure your bank provides an updated amortization schedule after every prepayment so you can track your progress toward becoming debt-free.</p>
      `,
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80" 
    },
    { 
      title: "Education Loans in India: Complete 2026 Guide", 
      date: "May 28, 2024", 
      category: "Education",
      readTime: "8 min read",
      desc: "Planning studies abroad? Here is everything you need to know about collateral and repayment holidays.",
      fullContent: `
        <p>Pursuing higher education is a significant investment. With tuition fees at international universities rising, education loans have become a necessity for most Indian families. Modern education loans are more than just funding; they offer features like moratorium periods and tax benefits under Section 80E.</p>
        <p>Lenders categorize universities into 'Grade A', 'Grade B', etc. If your college is in a premier list (like IITs or IIMs in India, or Top 100 globally), you might get collateral-free loans up to ₹50 lakhs. For other institutions, you might need to provide residential property or liquid assets as security.</p>
        <h3>Key Pillars of Education Loans:</h3>
        <ul>
          <li><strong>Moratorium Period:</strong> This is a 'holiday' from EMIs during the course tenure plus an additional 6–12 months for job hunting.</li>
          <li><strong>Co-Applicants:</strong> Lenders usually require a parent or spouse as a co-borrower to ensure income stability during the study period.</li>
          <li><strong>Coverage:</strong> Ensure your loan covers not just tuition, but also airfare, living expenses, and laptop costs.</li>
        </ul>
        <p>A well-planned education loan allows students to focus on their results without burdening their families with immediate financial stress.</p>
      `,
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Tax Benefits on Home Loan You Must Claim", 
      date: "Jun 05, 2024", 
      category: "Taxation",
      readTime: "6 min read",
      desc: "Max out your savings this fiscal year by claiming full interest and principal deductions.",
      fullContent: `
        <p>Owning a home is not just a milestone of success; it's one of the best tax-saving tools available under the Indian Income Tax Act. If you're paying a home loan EMI, you could be eligible for substantial tax deductions that effectively reduce your 'real' interest rate.</p>
        <p>Under Section 24(b), you can claim a deduction of up to ₹2 lakhs per annum for the interest paid on a self-occupied property. Furthermore, the principal component of your EMI is eligible for deduction under Section 80C, up to a limit of ₹1.5 lakhs. For first-time homebuyers, additional sections like 80EEA have provided extra benefits in the past.</p>
        <h3>Maximizing Your Tax Claims:</h3>
        <ul>
          <li><strong>Joint Home Loans:</strong> If you and your spouse are co-owners and co-applicants, you can both claim deductions separately, doubling the benefit to ₹4 lakhs for interest and ₹3 lakhs for principal.</li>
          <li><strong>Construction Completion:</strong> Remember that interest deduction under Section 24(b) can only be claimed after the property's construction is complete.</li>
          <li><strong>Pre-EMI Deductions:</strong> Interest paid during the construction phase can be claimed in 5 equal installments after completion.</li>
        </ul>
        <p>Always download your Provisional Interest Certificate from your bank portal every April to provide accurate proofs to your company's HR or your CA.</p>
      `,
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6);

  return (
    <section id="blogs" className="bg-navy-900/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading 
          badge="Latest Insights"
          title="Financial <span className='text-gold-500'>Market Insights</span>"
          subtext="Expert analysis and guides to help you navigate the complex landscape of banking and personal finance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-10 blog-grid">
          <AnimatePresence mode="popLayout">
            {visibleBlogs.map((blog, i) => (
              <motion.div 
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-navy-900 border border-white/5 rounded-[20px] overflow-hidden group hover:border-gold-500/30 transition-all flex flex-col"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500 text-navy-950 font-bold uppercase tracking-widest text-[9px] rounded-full">{blog.category}</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">{blog.date}</span>
                  <h3 className="text-xl font-display font-bold text-white mb-4 leading-tight group-hover:text-gold-500 transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">{blog.desc}</p>
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => setSelectedBlog(blog)}
                      className="flex items-center gap-2 text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-widest transition-all cursor-pointer w-fit"
                    >
                      Read Full Article <ArrowRight size={14} />
                    </button>
                    <a 
                      href="https://wa.me/918143181439"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gold-500 font-bold text-[11px] uppercase tracking-widest group-hover:gap-4 transition-all"
                    >
                      Consult Now <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold text-xs uppercase tracking-widest transition-all hover:border-gold-500/50 cursor-pointer"
            >
              See More Articles
            </button>
          </div>
        )}

        <BlogModal 
          blog={selectedBlog} 
          isOpen={!!selectedBlog} 
          onClose={() => setSelectedBlog(null)} 
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/5 footer-main">
      <div className="max-w-[1200px] mx-auto px-6 footer-inner">
        <div className="foot-grid pb-20 border-b border-white/5 text-left">
          <div className="space-y-8 foot-info-col">
            <Logo />
            <p className="footer-desc-text">
              Sri Sakthi Associates has been making loan approvals simple and transparent across Andhra Pradesh and Telangana since 2009.
            </p>
          </div>

          <div className="foot-links-col">
             <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Quick Links</h4>
             <ul className="space-y-4">
              {["Home", "Services", "About Us", "Calculator", "Blogs", "Contact"].map(link => (
                <li key={link}><a href="#" className="text-white/40 hover:text-gold-500 text-sm transition-colors">{link}</a></li>
              ))}
             </ul>
          </div>

          <div className="foot-services-col">
             <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Our Services</h4>
             <ul className="space-y-4">
              {["Home Loan", "Business Loan", "Personal Loan", "Education Loan", "Car Loan", "Loan Against Property"].map(link => (
                <li key={link}><a href="#" className="text-white/40 hover:text-gold-500 text-sm transition-colors">{link}</a></li>
              ))}
             </ul>
          </div>

          <div className="foot-contact-col">
             <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Contact Info</h4>
             <ul className="space-y-6">
                <li className="f-contact-item">
                 <div className="text-gold-500 shrink-0"><MapPin size={18} /></div>
                 <div className="location-content">
                  <p className="text-white/40 text-sm location-text">Guntur, Andhra Pradesh</p>
                 </div>
               </li>
               <li className="f-contact-item">
                 <div className="text-gold-500 shrink-0"><Phone size={18} /></div>
                 <p className="text-white/40 text-sm">+91 81431 81439</p>
               </li>
               <li className="f-contact-item">
                 <div className="text-gold-500 shrink-0"><Mail size={18} /></div>
                 <p className="text-white/40 text-sm email-link">sudheerkumar.gadde@gmail.com</p>
               </li>
             </ul>
          </div>
        </div>

        <div className="foot-bottom flex flex-col md:flex-row justify-between items-center gap-6 pt-10 text-[11px] font-bold uppercase tracking-widest text-white/20">
           <p>© 2026 Sri Sakthi Associates. All rights reserved.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold-500 transition-colors">Terms of Use</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-navy-950 min-h-screen text-white font-sans selection:bg-gold-500 selection:text-navy-950 scroll-smooth overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <EMICalculatorSection />
      <BlogSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Float Button */}
      <div className="wa-wrapper">
        <div className="wa-tooltip">Chat with us on WhatsApp</div>
        <a href="https://wa.me/918143181439" 
           target="_blank" 
           className="wa-btn" 
           aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" 
               width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867
              -2.03-.967-.273-.099-.471-.148-.67.15
              -.197.297-.767.966-.94 1.164-.173.199
              -.347.223-.644.075-.297-.15-1.255-.463
              -2.39-1.475-.883-.788-1.48-1.761-1.653
              -2.059-.173-.297-.018-.458.13-.606.134
              -.133.298-.347.446-.52.149-.174.198-.298
              .298-.497.099-.198.05-.371-.025-.52
              -.075-.149-.669-1.612-.916-2.207-.242
              -.579-.487-.5-.669-.51-.173-.008-.371
              -.01-.57-.01-.198 0-.52.074-.792.372
              -.272.297-1.04 1.016-1.04 2.479 0 1.462
              1.065 2.875 1.213 3.074.149.198 2.096 
              3.2 5.077 4.487.709.306 1.262.489 1.694
              .625.712.227 1.36.195 1.871.118.571-.085
              1.758-.719 2.006-1.413.248-.694.248-1.289
              .173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123
              .554 4.118 1.528 5.855L.057 23.215c-.094
              .301.202.597.504.504l5.367-1.47A11.955 
              11.955 0 0012 24c6.627 0 12-5.373 12-12
              S18.627 0 12 0zm0 22c-1.891 0-3.666-.523
              -5.18-1.433l-.371-.22-3.835 1.049 1.051
              -3.826-.228-.381A9.956 9.956 0 012 12C2 
              6.477 6.477 2 12 2s10 4.477 10 10-4.477 
              10-10 10z"/>
          </svg>
        </a>
      </div>

      <style>{`
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(6,14,31,0.97);
          backdrop-filter: blur(20px);
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          border-bottom: 1px solid rgba(201,146,10,0.15);
        }
        .nav-links {
          display: flex;
          gap: 24px;
          list-style: none;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: #c8d6e8;
          text-decoration: none;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .nav-links a:hover { color: #e5a90c; }
        .hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 40px; height: 40px;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
        .cta-nav {
          background: #e5a90c;
          color: #060e1f;
          padding: 10px 22px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: 0.3s;
          white-space: nowrap;
        }
        .cta-nav:hover {
          background: #d4a017;
          box-shadow: 0 0 20px rgba(229,169,12,0.3);
        }

        /* FIX 1 — EMAIL CUT OFF FIXES */
        .foot-contact-col, 
        .contact-info-col,
        footer [class*="contact"] {
          min-width: 260px !important;
          overflow: visible !important;
          flex-shrink: 0 !important;
        }

        .email-link {
          display: inline-block !important;
          white-space: nowrap !important;
          font-size: 12.5px !important;
          letter-spacing: 0 !important;
          overflow: visible !important;
          word-break: keep-all !important;
          overflow-wrap: normal !important;
        }

        .f-contact-item p,
        .f-contact-item span,
        .f-contact-item a,
        .contact-info-col p,
        .contact-info-col span,
        footer [class*="contact"] a,
        footer [class*="contact"] p {
          word-break: break-all !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
        }

        /* Hero Section Fixes */
        #home, .hero-section {
          padding-top: 100px !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          overflow: hidden !important;
          background: #060e1f;
          position: relative;
        }
        .hero-inner {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 60px !important;
          align-items: center !important;
          max-width: 1200px !important;
          margin: 0 auto !important;
          width: 100% !important;
        }
        .hero-left-col {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: flex-start !important;
          max-width: 620px !important;
          padding-left: 60px !important;
          padding-right: 40px !important;
        }
        .hero-right-col {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 100% !important;
        }
        .hero-img-element {
          width: 100% !important;
          max-width: 560px !important;
          height: auto !important;
          object-fit: contain !important;
          display: block !important;
          margin: 0 auto !important;
        }
        .hero-badge {
          display: inline-block;
          padding: 5px 15px;
          background: rgba(229,169,12,0.1);
          border: 1px solid rgba(229,169,12,0.2);
          color: #e5a90c;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 50px;
          margin-bottom: 24px;
        }
        .hero-h {
          font-size: clamp(32px, 3.6vw, 62px) !important;
          line-height: 1.15 !important;
          font-weight: 800;
          margin-bottom: 24px !important;
          color: #fff;
          padding-left: 0 !important;
          margin-left: 0 !important;
          max-width: 620px !important;
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }
        .hero-p {
          font-size: 16px !important;
          color: rgba(255,255,255,0.6);
          line-height: 1.8 !important;
          margin-bottom: 32px !important;
          max-width: 520px !important;
          padding-left: 0 !important;
        }
        .hero-btns {
          display: flex !important;
          gap: 16px !important;
          flex-wrap: wrap !important;
        }

        /* FIX 3 — GAP FIXES */
        section {
          padding: 80px 60px !important;
        }

        #home, #services, #about, #whyus, 
        #emicalculator, #blogs, #contact {
          min-height: unset !important;
        }

        .hero-stats-section {
          padding: 24px 60px !important;
          background: #060e1f;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin-top: 0 !important;
        }
        
        .hero-stats {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-stats, [class*="about-stat"] {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        .founder-card {
          margin-bottom: 0 !important;
        }

        .blog-grid {
          margin-bottom: 40px !important;
        }

        .spacer, [class*="spacer"], 
        .gap, [class*="gap-xl"] {
          display: none !important;
        }

        section + section {
          margin-top: 0 !important;
        }

        /* FIX 4 — FOOTER LAYOUT */
        .footer-main {
          padding: 60px 48px 0 48px !important;
          overflow: hidden !important;
          background: #060e1f;
        }

        .foot-grid {
          display: grid !important;
          grid-template-columns: 1.3fr 1fr 1fr 1.6fr !important;
          gap: 40px !important;
          align-items: start !important;
          width: 100% !important;
          max-width: 1200px !important;
          margin: 0 auto !important;
        }

        .foot-info-col, .foot-links-col, .foot-services-col, .foot-contact-col {
          overflow: hidden !important;
          min-width: 0 !important;
        }

        .footer-desc-text {
          font-size: 13px !important;
          line-height: 1.7 !important;
          max-width: 220px !important;
          overflow-wrap: break-word !important;
          color: rgba(255,255,255,0.4);
        }

        .f-contact-item {
          display: flex !important;
          align-items: flex-start !important;
          gap: 10px !important;
          margin-bottom: 14px !important;
          overflow: hidden !important;
        }

        .f-contact-item span,
        .f-contact-item a,
        .f-contact-item p {
          word-break: break-all !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          font-size: 13px !important;
          line-height: 1.5 !important;
          flex: 1 !important;
          min-width: 0 !important;
        }

        .foot-bottom {
          margin-top: 48px !important;
          padding: 20px 0 !important;
          border-top: 1px solid rgba(255,255,255,0.07) !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          flex-wrap: wrap !important;
          gap: 12px !important;
        }

        .h-stat {
          text-align: center !important;
          padding: 20px 24px !important;
          border-right: 1px solid rgba(255,255,255,0.08) !important;
        }
        .h-stat:last-child { border-right: none !important; }
        .h-stat strong {
          display: block;
          font-size: 40px;
          color: #e5a90c;
          margin-bottom: 8px;
        }
        .h-stat span {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }

        /* Mobile menu dropdown */
        #mobileNav {
          display: none;
          position: fixed;
          top: 70px; left: 0; right: 0;
          background: rgba(6,14,31,0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          padding: 12px 0;
          border-bottom: 1px solid rgba(201,146,10,0.2);
        }
        #mobileNav.open { display: block; }
        #mobileNav a {
          display: block;
          padding: 14px 24px;
          color: #c8d6e8;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: 0.2s;
        }
        #mobileNav a:hover {
          color: #e5a90c;
          background: rgba(201,146,10,0.05);
          padding-left: 32px;
        }

        @keyframes waPulse {
          0%   { box-shadow: 0 4px 20px rgba(37,211,102,0.45),
                             0 0 0 0 rgba(37,211,102,0.35); }
          70%  { box-shadow: 0 4px 20px rgba(37,211,102,0.45),
                             0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45),
                             0 0 0 0 rgba(37,211,102,0); }
        }

        .wa-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .wa-btn {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45),
                      0 0 0 0 rgba(37,211,102,0.4);
          animation: waPulse 2.5s infinite;
          transition: transform 0.3s ease, 
                      box-shadow 0.3s ease;
          position: relative;
        }

        .wa-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 6px 28px rgba(37,211,102,0.6),
                      0 0 0 8px rgba(37,211,102,0.1);
        }

        /* Tooltip */
        .wa-tooltip {
          background: #1a1a2e;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 8px 14px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
          border: 1px solid rgba(37,211,102,0.25);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          position: relative;
        }

        /* Tooltip arrow */
        .wa-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: rgba(37,211,102,0.25);
        }

        /* Show tooltip on hover */
        .wa-wrapper:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* ── TABLET (768px – 1024px) ── */
        @media(max-width: 1024px) {
          nav { padding: 0 24px; }
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }

          /* Hero */
          #home, .hero-section {
            padding: 90px 28px 60px !important;
            min-height: auto !important;
          }
          .hero-inner, #home .container, #home > div {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-left-col {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-h {
            font-size: clamp(34px, 5vw, 52px) !important;
            line-height: 1.1 !important;
          }
          .hero-p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-btns {
            justify-content: center !important;
          }
          /* Hide hero image on tablet/mobile */
          .hero-right-col, .hero-image, .hero-img, .hero-visual, #home img:not([alt*="logo"]):not([alt*="Logo"]) {
            display: none !important;
          }
          /* Stats — 2 columns on tablet */
          .hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0 !important;
            padding: 0 !important;
          }
          .h-stat {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
            padding: 16px 20px !important;
          }
          .h-stat:nth-child(odd) {
             border-right: 1px solid rgba(255,255,255,0.07) !important;
          }
          .h-stat:nth-last-child(-n+2) {
             border-bottom: none !important;
          }

          /* About */
          .about-wrap {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .founder-card img {
            height: 380px !important;
          }

          /* Services */
          .srv-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 18px !important;
          }

          /* Why Us */
          .why-wrap {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          /* EMI Calculator */
          .emi-box { padding: 32px 24px !important; }
          .emi-wrap { grid-template-columns: 1fr !important; }
          .emi-fields {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .emi-result {
            grid-template-columns: 1fr 1fr !important;
          }

          /* Blogs */
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }

          /* Contact */
          .contact-wrap {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .fg-row {
            grid-template-columns: 1fr !important;
          }
          .cform { padding: 28px 20px !important; }

          /* Sections padding */
          section,
          #about, #services, #whyus,
          #emicalculator, #blogs, #contact {
            padding: 72px 32px !important;
          }

          .s-title { font-size: 32px !important; }

          /* Modal */
          .modal-box {
            padding: 36px 24px !important;
            max-height: 90vh !important;
          }

          /* Footer Tablet */
           .foot-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }

        @media (max-width: 767px) {
        
          /* ── MAIN SECTION CONTAINER ── */
          #about, 
          section#about {
            width: 100% !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
            padding: 16px !important;
            box-sizing: border-box !important;
          }
        
          /* ── ALL TEXT PARAGRAPHS ── */
          #about p,
          #about [class*="text"],
          #about [class*="content"] p {
            width: 100% !important;
            max-width: 100% !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            font-size: 14px !important;
            line-height: 1.6 !important;
            box-sizing: border-box !important;
            padding: 0 !important;
            margin: 0 0 12px 0 !important;
          }
        
          /* ── TAB BUTTONS ROW ── */
          #about [class*="tab-list"],
          #about ul[role="tablist"],
          #about .about-tabs {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            width: 100% !important;
            overflow: hidden !important;
            border: none !important;
            padding: 0 !important;
          }
        
          #about [class*="tab-item"],
          #about [class*="tab"] button,
          #about [class*="tab"] li {
            flex: none !important;
            font-size: 12px !important;
            padding: 6px 10px !important;
            white-space: nowrap !important;
            width: auto !important;
            margin: 0 !important;
          }
        
          /* ── STATS ROW ── */
          #about [class*="stats"],
          #about [class*="stat-bar"],
          #about .about-stats-row {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            width: 100% !important;
            gap: 0 !important;
            margin-top: 24px !important;
          }
        
          #about [class*="stat-item"],
          #about [class*="stats"] > div {
            width: 50% !important;
            text-align: center !important;
            padding: 12px 8px !important;
            box-sizing: border-box !important;
            flex: none !important;
          }
        
          /* ── FOUNDER PROFILE CARD FIX ── */
          #about .founder-card {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 auto !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
        
          #about .founder-card > div:first-child {
            height: auto !important;
            margin-bottom: 0 !important;
            position: relative !important;
          }
        
          #about .founder-card img {
            width: 100% !important;
            height: 280px !important;
            object-fit: cover !important;
            object-position: top center !important;
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        
          #about .founder-card div[class*="bottom-6"] {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            padding: 16px !important;
            margin: 0 !important;
            text-align: left !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          #about .founder-card h3 {
            margin: 0 0 4px 0 !important;
            text-align: left !important;
          }

          #about .founder-card p {
            margin: 0 !important;
            text-align: left !important;
          }
        
          /* ── ANY INNER CONTAINER ── */
          #about div,
          #about section,
          #about [class*="container"],
          #about [class*="wrapper"] {
            max-width: 100% !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
        
          /* ── OFFICE LOCATION FIX ── */
          .location-text {
            word-break: keep-all !important;
            overflow-wrap: normal !important;
            white-space: normal !important;
            hyphens: none !important;
          }

          .location-content {
            min-width: 0 !important;
            flex: 1 !important;
            word-break: keep-all !important;
            hyphens: none !important;
          }

          /* ── CONTACT MOBILE FIX ── */
          #contact h4 {
            font-size: 11px !important;
            letter-spacing: 0.05em !important;
            display: block !important;
          }

          #contact .flex.gap-6 p.text-lg,
          #contact .email-link,
          #contact .location-text {
            font-size: 16px !important;
            font-weight: 700 !important;
            line-height: 1.4 !important;
            display: block !important;
            color: inherit !important;
          }

          /* Email Specific Mobile Wrap Fix */
          #contact .email-link {
            font-size: 13px !important;
            word-break: break-all !important;
            overflow-wrap: anywhere !important;
            white-space: normal !important;
            max-width: 100% !important;
          }

          #contact .contact-info-col {
            max-width: 100% !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
            flex: 1 !important;
            min-width: 0 !important;
          }
        
        }

        /* ── MOBILE (max 768px) ── */
        @media(max-width: 768px) {

          #home, .hero-section {
            padding: 88px 20px 52px !important;
            text-align: left !important;
          }
          .hero-left-col {
            text-align: left !important;
            align-items: flex-start !important;
          }
          #home h1, .hero-h {
            font-size: clamp(28px, 7vw, 40px) !important;
          }
          .hero-btns {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }
          .hero-btns a,
          .hero-btns button {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .hero-stats {
            grid-template-columns: 1fr 1fr !important;
          }
          .h-stat strong {
            font-size: 26px !important;
          }

          .srv-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          .emi-result {
            grid-template-columns: 1fr !important;
          }
          .er-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(201,146,10,0.15) !important;
          }
          .er-item:last-child {
            border-bottom: none !important;
          }

          section,
          #about, #services, #whyus,
          #emicalculator, #blogs, #contact {
            padding: 60px 20px !important;
          }
          .s-title { font-size: 26px !important; }

          .modal-box {
            padding: 28px 16px !important;
            margin: 8px !important;
            border-radius: 14px !important;
          }
          .modal-box h2 { font-size: 18px !important; }

          /* Footer Mobile */
          .footer-main {
            padding: 44px 20px 0 20px !important;
          }
          .foot-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-desc-text {
            max-width: 100% !important;
          }
          .foot-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }

          .wa-wrapper {
            bottom: 20px;
            right: 18px;
          }
          .wa-btn {
            width: 52px;
            height: 52px;
          }
          .wa-tooltip {
            display: none;
          }
        }

        /* ── SMALL MOBILE (max 480px) ── */
        @media(max-width: 480px) {
          #home h1, .hero-h {
            font-size: 26px !important;
          }
          .hero-badge {
            font-size: 9px !important;
            padding: 5px 12px !important;
          }
          .h-stat strong {
            font-size: 22px !important;
          }
          .h-stat span {
            font-size: 10px !important;
          }
          nav { padding: 0 16px !important; }
          .cta-nav {
            padding: 9px 16px !important;
            font-size: 11px !important;
          }
          .s-title { font-size: 24px !important; }
          .tabs-row .tb {
            font-size: 9px !important;
            padding: 10px 10px !important;
          }
          .big-g { font-size: 54px !important; }
        }

        /* ── DESKTOP (min 1024px) ── */
        @media (min-width: 1024px) {
          /* Problem 1 - Tabs */
          #about .about-tabs {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: 100% !important;
            overflow: visible !important;
            gap: 0 !important;
          }
          
          #about .about-tabs button {
            white-space: nowrap !important;
            overflow: visible !important;
            text-overflow: unset !important;
            min-width: fit-content !important;
            padding: 12px 20px !important;
            flex-shrink: 0 !important;
          }

          /* Problem 2 - Spacing & Gaps */
          #about .about-tabs {
            margin-bottom: 24px !important;
          }

          /* Gap between tab panel content and stats row */
          #about .text-col .mt-12.flex {
            margin-top: 32px !important;
          }

          /* Gap between stats row and founder card */
          #about .about-wrap {
            gap: 32px !important;
          }

          /* Consistent padding */
          #about .founder-card {
            padding: 32px !important;
          }

          /* General block spacing and sizing */
          #about div, 
          #about .text-col,
          #about .founder-col {
            box-sizing: border-box !important;
          }
          
          #about .text-col > *:not(:last-child) {
            margin-bottom: 24px !important;
          }
          
          #about .mt-12.flex {
            margin-bottom: 0 !important; /* Ensure stats row doesn't have extra bottom margin */
          }
        }

        /* ── CONTACT DESKTOP (min 1024px) ── */
        @media (min-width: 1024px) {
          #contact .flex.gap-6 {
            align-items: center !important;
            gap: 16px !important;
          }

          #contact .flex.gap-6 p.text-lg,
          #contact .email-link,
          #contact .location-text {
            font-size: 18px !important;
            font-weight: 700 !important;
            line-height: 1.4 !important;
            white-space: nowrap !important;
            display: block !important;
            color: #ffffff !important;
            letter-spacing: normal !important;
          }

          #contact .flex.gap-6 > div:last-child {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            height: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
