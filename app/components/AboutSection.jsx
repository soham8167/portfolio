

"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'

const CertificateViewer = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    
    const certificates = [
        {
            id: 1,
            title: "Web Development - InternsElite",
            imagePath: "images/webDev.jpeg", // Update with your image path
        },
        {
            id: 2,
            title: "Full Stack Development using MERN - Ardent",
            imagePath: "images/ardent.jpg", // Update with your image path
        }
    ];
    
    const openCertificate = (certificate) => {
        setSelectedCertificate(certificate);
    };
    
    const closeCertificate = () => {
        setSelectedCertificate(null);
    };
    
    return (
        <>
            {/* Certificate Cards */}
            {certificates.map((certificate) => (
                <div key={certificate.id} className="p-4 border rounded-lg shadow-md bg-white flex justify-between items-center overflow-hidden">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            {certificate.title}
                        </h3>
                    </div>
                    <button 
                        onClick={() => openCertificate(certificate)}
                        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                    >
                        View Certificate
                    </button>
                </div>
            ))}
            
            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeCertificate}>
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        {/* Close button - Updated with more visible styling */}
                        <button 
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-200 transition-colors"
                            onClick={closeCertificate}
                            aria-label="Close certificate"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Certificate image */}
                        <div className="bg-white p-2 rounded-lg shadow-lg">
                            <img 
                                src={selectedCertificate.imagePath} 
                                alt={`${selectedCertificate.title} Certificate`} 
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const Tab_Data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="p-4 border rounded-lg shadow-md bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
                    <span className="px-3 py-1 bg-red-100 text-blue-500 rounded-md text-sm font-medium">
                        HTML
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-500 rounded-md text-sm font-medium">
                        CSS
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-500 rounded-md text-sm font-medium">
                       Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-500 rounded-md text-sm font-medium">
                        React Js
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm font-medium">
                        Node Js
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md text-sm font-medium">
                        Express Js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-sm font-medium">
                        Next Js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-sm font-medium">
                        JavaScript
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm font-medium">
                        C++
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-md text-sm font-medium">
                        MongoDB
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-teal-700 rounded-md text-sm font-medium">
                        Github
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm font-medium">
                        Docker
                    </span>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className="space-y-4">
                {/* First Education */}
                <div className="p-4 border rounded-lg shadow-md bg-white">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Heritage Institute of Technology, Kolkata
                    </h3>
                    <p className="text-sm text-gray-600">
                        Aug 2022 - Jul 2025
                    </p>
                    <p className="text-gray-700">
                        B.Tech in Electronics & Communication Engineering
                    </p>
                    <p className="text-gray-500 font-medium">CGPA: 7.4</p>
                </div>

                {/* Second Education */}
                <div className="p-4 border rounded-lg shadow-md bg-white">
                    <h3 className="text-lg font-semibold text-gray-800">
                        I.C.V.P, Jhargram
                    </h3>
                    <p className="text-sm text-gray-600">
                        Aug 2019 - Jul 2022
                    </p>
                    <p className="text-gray-700">
                        Diploma in Computer Science & Technology
                    </p>
                    <p className="text-gray-500 font-medium">CGPA: 7.9</p>
                </div>
            </div>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div className="space-y-4">
                <CertificateViewer />
            </div>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/images/aboutMe.jpeg"
                    alt='aboutMe'
                    width={500}
                    height={500}
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am a final-year B.Tech student and a passionate Full stack developer with experience in building scalable web applications. As a fresher, I have developed 8 projects, including minor and major. I am seeking an opportunity to apply my skills and grow professionally.
                    </p>

                    {/* Tabs Section */}
                    <div className='flex flex-row mt-8 relative border-b border-gray-600'>
                        {["skills", "education", "certifications"].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleTabChange(item)}
                                className={`px-6 py-2 text-lg font-medium relative 
                                    ${tab === item ? "text-blue-500" : "text-gray-300"} transition`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                {/* Underline */}
                                {tab === item && (
                                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-500 rounded-md transition-all"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className='mt-8'>{Tab_Data.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;