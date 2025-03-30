"use client";

import Image from "next/image";
import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdPersonPin, MdFileDownload } from "react-icons/md";


export default function Home() {
  const [activeSection, setActiveSection] = useState<"experience" | "education">("experience");
  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);
  // Mevcut veri dizileri (jobExperiences, educationData, certifications)
  const jobExperiences = [
    {
      position: "Elektrik Şefi",
      company: "Vadi İstanbul Park Ofis Blokları Toplu Yapı Yönetimi",
      location: "İstanbul",
      startDate: "Ekim 2024",
      endDate: "Günümüz",
      duration: "Devam Ediyor",
      responsibilities: [
        "Site içerisindeki elektrik sistemlerinin düzenli bakım ve kontrolünü sağlamak",
        "Elektrik arızalarının giderilmesi ve önleyici bakım faaliyetlerinin yürütülmesi",
        "Enerji verimliliği projelerinin geliştirilmesi ve uygulanması",
        "Teknik personelin yönetimi ve iş süreçlerinin koordinasyonu"
      ]
    },
    {
      position: "Elektrik Bakım Teknikeri",
      company: "Ayasofya Hürrem Sultan Hamamı ve Restaurantı",
      location: "İstanbul",
      startDate: "Ekim 2023",
      endDate: "Ekim 2024",
      duration: "1 yıl",
      responsibilities: [
        "Hamam ve restoran içerisindeki elektrik tesisatlarının bakımı ve onarımı",
        "Aydınlatma ve ısıtma sistemlerinin düzenli kontrollerinin sağlanması",
        "Elektrik kesintilerine karşı jeneratör ve güç sistemlerinin işletilmesi",
        "Arızaların giderilmesi ve acil müdahalelerin yapılması"
      ]
    },
    {
      position: "Teknik Servis Şefi",
      company: "Milten Holding ve İştirak Şirketleri",
      location: "İstanbul",
      startDate: "Mayıs 2015",
      endDate: "Eylül 2023",
      duration: "8 yıl 5 ay",
      responsibilities: [
        "Milport Hotel Levent’in teknik servis yönetimi",
        "Elektrik ve mekanik sistemlerin taşeron firmalardan teslim alınması",
        "Teknik ekibin kurulması ve test/devreye alma işlemlerinin yürütülmesi",
        "Elektrik, elektromekanik ve otomasyon sistemleri için bakım planlarının hazırlanması",
        "Elektrik sistemlerinde periyodik bakım ve kontrollerin yapılması",
        "Otel içerisindeki tüm teknik sistemlerin (jeneratör, asansör, klima vb.) düzenli kontrolü",
        "Enerji tasarrufu sağlamak için analizler yaparak iyileştirme önerileri sunma",
        "Elektrik, su, doğalgaz ve akaryakıt tüketimlerinin raporlanması"
      ]
    },
    {
      position: "Teknik Servis Şefi",
      company: "Milten Holding ve İştirak Şirketleri",
      location: "İstanbul",
      startDate: "Ekim 2010",
      endDate: "Mayıs 2015",
      duration: "4 yıl 8 ay",
      responsibilities: [
        "Bina bakım ve garaj operasyonlarının yönetimi",
        "Elektrik, telefon, data hatları, yangın algılama ve güvenlik sistemlerinin sürekliliğini sağlamak",
        "Hidrofor, jeneratör, kalorifer, asansör ve soğutma sistemlerinin bakım süreçlerini yönetmek",
        "Şirket araçlarının periyodik bakım ve muayenelerinin takibini yapmak",
        "Şirket şubelerinin açılış ve kapanış işlemlerinin yürütülmesi (elektrik, su, doğalgaz, internet vb.)",
        "İdari işlerde yönetime destek sağlamak"
      ]
    },
    {
      position: "Firma Sahibi",
      company: "Öztürk Teknik Elektrik",
      location: "İstanbul",
      startDate: "Nisan 2008",
      endDate: "Mayıs 2010",
      duration: "2 yıl 2 ay",
      responsibilities: [
        "Ev ve inşaat elektriği tesisat projelerinin yönetilmesi",
        "Elektrik panolarının montajı ve devreye alınması",
        "Dekoratif aydınlatma projelerinin uygulanması",
        "Elektrik taahhüt projelerinin planlanması ve tamamlanması"
      ]
    },
    {
      position: "Elektrik Elektronik Operatörü",
      company: "Beko Elektronik A.Ş.",
      location: "İstanbul",
      startDate: "Mart 2002",
      endDate: "Mart 2008",
      duration: "6 yıl 1 ay",
      responsibilities: [
        "Üretim hattındaki televizyonların hata tespit ve onarım işlemlerinin gerçekleştirilmesi",
        "Arıza kayıtlarının SAP sistemine işlenmesi",
        "Üretim hattındaki kalite kontrol süreçlerinin yürütülmesi",
        "Hata ve arıza oranlarının azaltılması için kaizen çalışmalarının yapılması"
      ]
    },
    {
      position: "Teknik Eleman (Stajyer)",
      company: "Topkapı Şişe Cam Ambalaj San.",
      location: "İstanbul",
      startDate: "Haziran 1997",
      endDate: "Eylül 1997",
      duration: "4 ay",
      responsibilities: [
        "Ölçü kontrol aletleri şefliğinde teknik destek sağlamak",
        "Üretim sürecinde kalite kontrollerinin yapılması",
        "Fabrika elektrik sistemlerinin teknik bakım ve destek süreçlerine yardımcı olmak"
      ]
    },
    {
      position: "Elektrik Teknisyeni (Stajyer)",
      company: "İÇDAŞ (İstanbul Çelik ve Demir İzabe San. A.Ş.)",
      location: "İstanbul",
      startDate: "Haziran 1992",
      endDate: "Eylül 1994",
      duration: "2 yıl 4 ay",
      responsibilities: [
        "Elektrik bakım şefliği bünyesinde sanayi elektrik sistemlerinin incelenmesi",
        "Fabrika içindeki elektrik bakım-onarım süreçlerine destek sağlamak",
        "Endüstriyel otomasyon sistemleri hakkında temel deneyim kazanmak"
      ]
    }
  ];

  const educationData = [
    {
      type: "education",
      institution: "Anadolu Üniversitesi",
      degree: "İşletme, Lisans",
      startDate: "2011",
      endDate: "2013",
      location: "Türkiye"
    },
    {
      type: "education",
      institution: "Anadolu Üniversitesi",
      degree: "İnsan Kaynakları Yönetimi, Ön Lisans",
      startDate: "2019",
      endDate: "2021",
      location: "Türkiye"
    },
    {
      type: "education",
      institution: "Ankara Üniversitesi",
      degree: "Endüstriyel Otomasyon (Kontrol Sistemleri Teknolojisi), Ön Lisans",
      startDate: "1995",
      endDate: "1997",
      location: "Türkiye"
    },
    {
      type: "education",
      institution: "Bağcılar Endüstri Meslek Lisesi",
      degree: "Elektrik Bölümü, Lise",
      startDate: "1990",
      endDate: "1994",
      location: "Türkiye"
    }
  ];

  const certifications = [
    {
      name: "İlk Yardım Eğitim Sertifikası",
      year: "2024",
      issuer: "Sağlık Bakanlığı Kurtaran İlkyardım E.M."
    },
    {
      name: "Personel Özlük İşleri, Bordrolama ve SGK Uygulamaları Sertifikası",
      year: "2014",
      issuer: "İstanbul Institute"
    },
    {
      name: "SRC4 Taşımacılık Belgesi",
      year: "2011",
      issuer: "Ulaştırma Bakanlığı"
    },
    {
      name: "Psikoteknik Belgesi",
      year: "2011",
      issuer: "Global Psikoteknik"
    },
    {
      name: "Elektrik Tesisatçılığı ve Pano Montörlüğü Ustalık Belgesi",
      year: "2010",
      issuer: "Güngören Mesleki Eğitim Merkezi"
    }
  ];
  

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };
  

  // Bölüm değiştirme fonksiyonu
  const toggleSection = (section: "experience" | "education") => {
    setActiveSection(section);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-white font-[family-name:var(--font-geist-sans)]">
      {/* Arka plan gradyanı */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_25%,_rgba(30,64,94,0.5)_0%,_rgba(0,0,0,0)_50%)]" style={{animation: "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite"}}></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_80%,_rgba(23,49,77,0.6)_0%,_rgba(0,0,0,0)_50%)]" style={{animation: "pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite"}}></div>
      </div>

      <header className="fixed w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 md:block hidden">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-6">
          <h1 className="text-xl font-bold">Kamil Öztürk</h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition-colors">Hakkımda</button>
            <button onClick={() => scrollToSection('experience-education')} className="hover:text-blue-300 transition-colors">Deneyim & Eğitim</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-300 transition-colors">İletişim</button>
          </div>
        </nav>
      </header>

      {/* Mobil Alt Bar - Sadece mobil ekranlarda gösterilir */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-t border-white/10 md:hidden block">
        <nav className="flex justify-around items-center py-3">
          <button 
            onClick={() => scrollToSection('about')} 
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Hakkımda</span>
          </button>
          <button 
            onClick={() => scrollToSection('experience-education')} 
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Deneyim</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">İletişim</span>
          </button>
        </nav>
      </div>

      {/* Mobil görünümde alt navigasyon barı için padding ekleme */}
      <div className="md:hidden h-16"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-10 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          {/* Dekoratif ikon yerine profil fotoğrafı */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-36 h-36 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm rounded-full animate-pulse -z-10"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <Image 
                  src="/pp.png" 
                  alt="Kamil Öztürk" 
                  width={300} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">Kamil Öztürk</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-3 md:mb-4">Elektrik Şefi</h2>
          
          {/* Kısa açıklama - Tüm ekranlarda görünür */}
          <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            15+ yıllık endüstriyel elektrik sistemleri deneyimiyle, enerji verimliliği ve teknik yönetim konularında uzmanlık
          </p>
          
          {/* Yatay beceri çubukları - Daha kompakt hale getirildi */}
          <div className="mb-6 md:mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs md:text-sm">Elektrik Sistemleri</span>
                </div>
              </div>
              
              {/* Diğer beceri kutucukları için aynı değişiklikleri uygulayın */}
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-xs md:text-sm">Proje Yönetimi</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-xs md:text-sm">Enerji Verimliliği</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs md:text-sm">Ekip Yönetimi</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kayan badge göstergesi - Boyutu küçültüldü */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="bg-blue-500/30 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-400/30 animate-pulse inline-flex items-center">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs md:text-sm font-medium">8+ yıl yöneticilik deneyimi</span>
            </div>
          </div>
          
          {/* İletişim butonu - Boyutu küçültüldü */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-medium hover:bg-white/30 transition-colors border border-white/20 shadow-lg text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Benimle İletişime Geç
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Hakkımda</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl">
            <p className="text-gray-200 mb-4">
              1977 Karabük doğumluyum. Elektrik ve Endüstriyel Otomasyon eğitimi aldım, ardından İşletme ve İnsan Kaynakları Yönetimi lisans programlarını tamamladım.
            </p>
            <p className="text-gray-200 mb-4">
              Uzun yıllar endüstriyel tesislerin bakım departmanlarında çalıştım. İşime olan bağlılığım sayesinde farklı departmanlarda da görev aldım.
            </p>
            <p className="text-gray-200">
              Kendimi geliştirmeyi ve yeni şeyler öğrenmeyi her zaman ön planda tutarım. Evliyim ve iki çocuk babasıyım.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Education Section - Accordion */}
      <section id="experience-education" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Deneyim & Eğitim</h2>
          
          {/* Toggle Buttons - Cam tasarım */}
          <div className="flex justify-center mb-10">
            <button 
              className={`py-2 px-6 rounded-l-lg transition-colors ${activeSection === "experience" ? "bg-white/80 text-black" : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10"}`}
              onClick={() => toggleSection("experience")}
            >
              İş Deneyimi
            </button>
            <button 
              className={`py-2 px-6 rounded-r-lg transition-colors ${activeSection === "education" ? "bg-white/80 text-black" : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10"}`}
              onClick={() => toggleSection("education")}
            >
              Eğitim
            </button>
          </div>
          
          {/* Experience Section - Conditional Rendering */}
          <div className={`transition-all duration-500 ${activeSection === "experience" ? "opacity-100 max-h-[5000px]" : "opacity-0 max-h-0 overflow-hidden"}`}>
            <div className="space-y-8">
              {jobExperiences.map((job, index) => (
                <div 
                  key={index} 
                  onClick={() => toggleJob(index)}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg cursor-pointer hover:bg-white/15 transition-colors"
                >
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row justify-between">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <div className="text-gray-300">
                        <span>{job.startDate} - {job.endDate}</span>
                        <span className="hidden md:inline mx-2">•</span>
                        <span className="block md:inline">{job.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-1">{job.company}, {job.location}</p>
                  </div>
                  
                  {/* Detay göster/gizle butonu */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-blue-300 text-sm flex items-center">
                      {expandedJobs.includes(index) ? "Detayları gizle" : "Detayları göster"}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${expandedJobs.includes(index) ? "rotate-180" : ""}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <span className="text-gray-400 text-sm">{job.responsibilities.length} görev</span>
                  </div>
                  
                  {/* Sorumluluklar - koşullu render */}
                  <div className={`overflow-hidden transition-all duration-500 ${expandedJobs.includes(index) ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section - Conditional Rendering */}
          <div className={`transition-all duration-500 ${activeSection === "education" ? "opacity-100 max-h-[3000px]" : "opacity-0 max-h-0 overflow-hidden"}`}>
            <div className="space-y-8">
              {/* Eğitim bölümü */}
              {educationData.map((edu, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <span className="text-gray-300">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-gray-400 text-sm mt-1">{edu.location}</p>
                </div>
              ))}
              
              {/* Sertifikalar bölümü */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Sertifikalar</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      {cert.name} ({cert.year})
                      <span className="text-gray-400 text-sm ml-2">
                        {cert.issuer && `• ${cert.issuer}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">İletişim</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl">
            <p className="text-center text-gray-200 mb-8">
              İş fırsatları veya profesyonel danışmanlık için benimle iletişime geçebilirsiniz.
            </p>
            
            {/* Direkt İletişim */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <MdPersonPin className="w-5 h-5 mr-2 text-blue-400" />
                Direkt İletişim
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="mailto:kamilozturk78@gmail.com" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                  <MdEmail className="w-5 h-5 mr-3 text-blue-400" />
                  <span className=" overflow-hidden">kamilozturk78@gmail.com</span>
                </a>
                
                <a href="tel:+905553971906" className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                  <MdPhone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+90 555 397 19 06</span>
                </a>
                
                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <MdLocationOn className="w-5 h-5 mr-3 text-blue-400" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>
            
            {/* Sosyal Medya İkonları */}
            {/* <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-center">Sosyal Medya</h3>
              <div className="flex flex-wrap justify-center gap-6">
                
                <a href="#" className="group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-all border border-white/20 shadow-md group-hover:scale-110 duration-200">
                    <FaTwitter className="w-6 h-6 text-blue-300 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="block text-center text-xs mt-2 text-gray-300">Twitter</span>
                </a>
                
                <a href="#" className="group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-800/20 transition-all border border-white/20 shadow-md group-hover:scale-110 duration-200">
                    <FaLinkedinIn className="w-6 h-6 text-blue-300 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="block text-center text-xs mt-2 text-gray-300">LinkedIn</span>
                </a>
                
               
                <a href="#" className="group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-600/20 transition-all border border-white/20 shadow-md group-hover:scale-110 duration-200">
                    <FaInstagram className="w-6 h-6 text-pink-300 group-hover:text-pink-400 transition-colors" />
                  </div>
                  <span className="block text-center text-xs mt-2 text-gray-300">Instagram</span>
                </a>
                
                
                <a href="#" className="group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-600/20 transition-all border border-white/20 shadow-md group-hover:scale-110 duration-200">
                    <FaWhatsapp className="w-6 h-6 text-green-300 group-hover:text-green-400 transition-colors" />
                  </div>
                  <span className="block text-center text-xs mt-2 text-gray-300">WhatsApp</span>
                </a>
                
               
                <a href="#" className="group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600/20 transition-all border border-white/20 shadow-md group-hover:scale-110 duration-200">
                    <FaYoutube className="w-6 h-6 text-red-300 group-hover:text-red-400 transition-colors" />
                  </div>
                  <span className="block text-center text-xs mt-2 text-gray-300">YouTube</span>
                </a>
              </div>
            </div> */}
            
            {/* CV İndirme ve Rehbere Ekleme */}
            <div className="mt-12 text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-gray-300">
                Özgeçmişimi incelemek için:
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a 
                  href="/cv-kamil-ozturk.pdf" 
                  download 
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/20 shadow-lg text-sm"
                >
                  <MdFileDownload className="w-4 h-4 mr-2" />
                  CV İndir
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-white/5 backdrop-blur-sm text-center text-gray-500 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Kamil Öztürk. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}