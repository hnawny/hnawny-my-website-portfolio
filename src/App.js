// App.js or Portfolio.js
import React, { useState } from 'react';
import { Tab, Dialog } from '@headlessui/react';
import { 
  Briefcase, 
  Award, 
  Code, 
  ChevronRight, 
  Github, 
  Instagram,
  LampDesk, 
  Facebook, 
  X, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Phone,
  Goal
} from 'lucide-react';


const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsDialogOpen(true);
  };


  const personalInfo = {
    name: "Teerapat Tawang",
    role: "Dev full stack / Student",
    about: "hello! I have a passion for technology and creating great user experiences. I enjoy developing websites and learning new things all the time. I've been learning and practicing coding for 8 years ~~",
    location: "Chiang Mai, Thailand",
    eFacebook: "teerapat.tt@hnawny.in.th",
    phone: "052-072-602 (09:00 AM - 04:30 PM)",
    birthday: "December 6, 2005",
    hobbies: ["Coding", "Gaming", "Learning new technologies", "Exploring AI and ML trends"],
    goals: [
      "Master advanced backend development.",
      "Contribute to open-source projects.",
      "Build impactful software that solves real-world problems."
    ],
    socialProfiles: {
      github: "https://github.com/hnawny",
      instagram: "https://www.instagram.com/hnawny/",
      facebook: "https://www.facebook.com/Theerapat.me/"
    },
    education: [
      {
        degree: "Primary 1 - 5",
        school: "Keowalinwittaya School",
        year: "2016"
      },
      {
        degree: "Primary 6",
        school: "Banmaetuen School",
        year: "2017"
      },
      {
        degree: "Econdary education",
        school: "MAETUENWITTAYAKOM SCHOOL",
        year: "2019"
      },
      {
        degree: "High school education",
        school: "MAETUENWITTAYAKOM SCHOOL",
        year: "2023"
      },
      {
        degree: "Vocational certificate",
        school: "Lanna Polytechnic ChiangMai ",
        year: "2024 - Current"
      }
    ],
    skills: ["React", "TypeScript", "JavaScript", "Mongodb", "SQL", "PHP", "Python", "Node.js", "Tailwind CSS", "Chakra Ui", "Git", "Next.js", "React.js", "Figma", "Post Man", "Cloudflare"]
  };

  const projects = [
    {
      title: "MTwit Service's (หมดสัญญา)",
      description: "ระบบขออนุญาต ออกนอกโรงเรียนของโรงเรียนแม่ตื่นวิทยาคม",
      tech: ["React", "Node.js", "SQL"],
      link: "#"
    },
    {
      title: "Line Peamsub24hr",
      description: "Line สั่งซื้อสินค้า",
      tech: ["PHP", "SQL", "Firebase"],
      link: "https://peamsub24hr.shop"
    },
    {
      title: "Peamsub24hr (Web Development AND Napasorn Poonsawat)",
      description: "E-commerce platform",
      tech: ["PHP", "SQL", "Jquery"],
      link: "https://peamsub24hr.shop"
    }
  ];

  const certificates = [
    {
      title: "เกียรติบัตรเข้าร่วมกิจกรรม",
      description: "ศิลปหัตถกรรม ระดับชาติ กิจกรรม การแข่งขันสร้าง Web Application ระดับชั้น ม.4 - ม.6 ได้รับรางวัญระดับเหรียญทองแดง",
      issuer: "ระดับชาติ",
      date: "ประจำปีการศึกษา 2565",
      image: "/img/4DD33D1B-0D48-4B7C-9F5F-1CEE8CD000ED_L0_001-26_05_2023, 08_57_34.jpg", // Add image property
      link: "#"
    },
    {
      title: "เกียรติบัตรเข้าร่วมกิจกรรม",
      description: "Samsung Solve for Tomorrow 2023 โครงการประกวดนวัตกรรมและไอเดียธุรกิจเพื่อแก้ปัญหาสังคม ในหัวข้อการประกวดปี 2566 Make Your Impact! “คิดแก้ปัญหา พัฒนานวัตกรรม ลงมือทำให้ยั่งยืน”",
      issuer: "ระดับชาติ",
      date: "10 – 30 กรกฎาคม 2565",
      image: "/img/g3n.png", // Add image property
      link: "#"
    },
    {
      title: "เกียรติบัตรเข้าร่วมกิจกรรม",
      description: "ศิลปหัตถกรรม ระดับเขตพึ้นที่การศึกษา กิจกรรม การแข่งขันสร้าง Web Application ระดับชั้น ม.4 - ม.6 ได้รับรางวัญระดับทอง ชนะเลิศ",
      issuer: "ระดับเขตการศึกษา",
      date: "ประจำปีการศึกษา 2565",
      image: "/img/4E9B01F9-E6DA-4E66-A608-373AC761C266_L0_001-26_05_2023,%2008_57_59.jpg", // Add image property
      link: "#"
    }
  ];


  const experience = [
    {
      role: "CEO, Founder",
      company: "Hnawny Cloud Group",
      duration: "January 28, 2023 - Present",
      description: ""
    },
    {
      role: "Developer",
      company: "Peamsub24hr",
      duration: "April 21, 2024 - Present",
      description: "Developed responsive websites and web applications"
    },
    {
      role: "CEO, Founder",
      company: "Hnawny Entertainment (Hnawny Music)",
      duration: "May 1, 2024 - Present",
      description: "Create work"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with Profile Picture */}
      <header className="bg-purple-900 text-white py-16 relative overflow-hidden">
      <div
          className="absolute inset-0 bg-gradient-to-r from-purple-900 to-gray-900"
          style={{
            background: `
              linear-gradient(to right, rgba(128, 0, 128, 0.8), rgba(169, 169, 169, 0.8)), 
              url('/img/82608c22-c1c9-427c-a364-9616a9283a84.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-300 shadow-lg transform transition-all duration-500 hover:scale-105">
                <img 
                  src="/img/me.JPG" 
                  alt="Profile" 
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-purple-600 animate-pulse" 
                     style={{ display: imageLoaded ? 'none' : 'block' }}></div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">{personalInfo.name}</h1>
              <p className="text-xl text-purple-200 mb-6 animate-slide-up">{personalInfo.role}</p>
              <div className="flex gap-4 justify-center md:justify-start animate-fade-in-up">
                <a href={personalInfo.socialProfiles.github} target="_blank" rel="noreferrer">
                  <Github className="w-6 h-6 cursor-pointer hover:text-purple-300 transform transition-transform hover:scale-110" />
                </a>
                <a href={personalInfo.socialProfiles.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="w-6 h-6 cursor-pointer hover:text-purple-300 transform transition-transform hover:scale-110" />
                </a>
                <a href={personalInfo.socialProfiles.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="w-6 h-6 cursor-pointer hover:text-purple-300 transform transition-transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Personal Info Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Me */}
            <div className="bg-gray-700 rounded-lg p-6 transform transition-all duration-500 hover:scale-102 hover:shadow-xl">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">About Me</h2>
              <p className="text-gray-300">{personalInfo.about}</p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center text-gray-300">
                  <Facebook className="w-5 h-5 text-purple-400 mr-3" />
                  {personalInfo.eFacebook}
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                  {personalInfo.birthday}
                </div>
                <div className="flex flex-col space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <LampDesk className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="font-semibold">Hobbies:</span>
                  </div>
                  <ul className="ml-8 list-disc">
                    {personalInfo.hobbies.map((hobby, index) => (
                      <li key={index} className="text-gray-300">
                        {hobby}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2 text-gray-300 mt-4">
                  <div className="flex items-center">
                    <Goal className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="font-semibold">Goals:</span>
                  </div>
                  <ul className="ml-8 list-disc">
                    {personalInfo.goals.map((goal, index) => (
                      <li key={index} className="text-gray-300">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Skills */}
            <div className="bg-gray-700 rounded-lg p-6 transform transition-all duration-500 hover:scale-102 hover:shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-300 mb-4">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {personalInfo.education.map((edu, index) => (
                    <div key={index} className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                      <div>
                        <h3 className="text-gray-200 font-medium">{edu.degree}</h3>
                        <p className="text-gray-400">{edu.school}</p>
                        <p className="text-gray-500">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <h2 className="text-2xl font-semibold text-purple-300 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tab.Group onChange={setSelectedTab}>
          <Tab.List className="flex space-x-4 border-b border-purple-700 mb-8">
            <Tab className={({ selected }) =>
              `px-4 py-2 text-sm font-medium leading-5 ${
                selected
                  ? 'text-purple-300 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-purple-200'
              }`
            }>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </div>
            </Tab>
            <Tab className={({ selected }) =>
              `px-4 py-2 text-sm font-medium leading-5 ${
                selected
                  ? 'text-purple-300 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-purple-200'
              }`
            }>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Projects
              </div>
            </Tab>
            <Tab className={({ selected }) =>
              `px-4 py-2 text-sm font-medium leading-5 ${
                selected
                  ? 'text-purple-300 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-purple-200'
              }`
            }>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certificates
              </div>
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* Experience Panel */}
            <Tab.Panel>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-500 transform hover:scale-102 hover:shadow-xl"
                    style={{
                      animation: `fadeInUp ${0.3 + index * 0.1}s ease-out forwards`
                    }}
                  >
                    <h3 className="text-xl font-semibold text-purple-300">{item.role}</h3>
                    <p className="text-gray-400 mt-1">{item.company} • {item.duration}</p>
                    <p className="text-gray-300 mt-4">{item.description}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>

            {/* Projects Panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-500 transform hover:scale-102 hover:shadow-xl"
                    style={{
                      animation: `fadeInUp ${0.3 + index * 0.1}s ease-out forwards`
                    }}
                  >
                    <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center text-purple-400 mt-4 hover:text-purple-300">
                      View Project <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </Tab.Panel>

            {/* Certificates Panel */}
            <Tab.Panel>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-500 transform hover:scale-102 hover:shadow-xl"
                    style={{
                      animation: `fadeInUp ${0.3 + index * 0.1}s ease-out forwards`
                    }}
                  >
                    <h3 className="text-xl font-semibold text-purple-300">{cert.title}</h3>
                    <p className="text-gray-400 mt-1">{cert.issuer} • {cert.date}</p>
                    <p className="text-gray-200 mt-1">{cert.description}</p>

                    
                    <button
                    onClick={() => handleViewCertificate(cert)}
                      className="inline-flex items-center text-purple-400 mt-4 hover:text-purple-300 transition-colors"
                    >
                      View Certificate <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>

      {/* Dialog for Certificate */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <Dialog.Panel className="bg-gray-800 rounded-lg max-w-lg p-6 shadow-lg">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedCertificate && (
            <>
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                {selectedCertificate.title}
              </h3>
              <p className="text-gray-400">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
              <div className="mt-4">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  className="w-full rounded-lg"
                />
              </div>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
      

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;