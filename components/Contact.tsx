import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white overflow-hidden mt-24 border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] scroll-mt-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-aum-orange rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[150px]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">
        
        {/* Header / CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-16 relative">
          {/* Elegant Gradient Separator */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
              Ready to <span className="text-aum-orange">structure</span> <br /> your vision?
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-lg">
              Partner with AUM Consultants for engineering solutions that stand the test of time. Let's discuss your next project.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
             <a href="mailto:AUMSTRUCTURALDESIGN@GMAIL.COM" className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-aum-orange hover:text-white transition-all duration-300">
               Get a Quote
               <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
               <h3 className="text-4xl font-bold font-heading tracking-tighter">AUM</h3>
               <p className="text-xs font-bold text-aum-orange tracking-[0.4em] uppercase mt-1">Structural Consultants</p>
            </div>
            <p className="text-gray-500 leading-relaxed">
              We define the skyline with safety, sustainability, and innovation. Precision engineering for residential, commercial, and industrial sectors.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-lg font-bold font-heading">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Team'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-aum-orange transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
             <h4 className="text-lg font-bold font-heading">Contact</h4>
             <ul className="space-y-6">
               <li className="flex gap-4">
                 <MapPin className="text-aum-orange shrink-0" size={20} />
                 <span className="text-gray-400 text-sm leading-relaxed">
                   D-418, Ganesh Glory 11,<br/> Jagatpur Rd, Gota,<br/> Ahmedabad, Gujarat 382470
                 </span>
               </li>
               <li className="flex gap-4">
                 <Phone className="text-aum-orange shrink-0" size={20} />
                 <div className="flex flex-col text-gray-400 text-sm">
                   <span>+91 94084 11840</span>
                   <span>+91 84011 63977</span>
                   <span>+91 88662 32536</span>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Mail className="text-aum-orange shrink-0" size={20} />
                 <span className="text-gray-400 text-sm break-all">AUMSTRUCTURALDESIGN@GMAIL.COM</span>
               </li>
             </ul>
          </div>

          {/* Column 4: Map Widget (Span 3) */}
          <div className="lg:col-span-3 h-64 lg:h-auto min-h-[250px] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7640284458!2d72.5367!3d23.1062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f4c4c4c4b%3A0x4c4c4c4c4c4c4c4c!2sGanesh%20Glory%2011!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy"
               title="Office Location"
               className="absolute inset-0"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 relative text-xs text-gray-500 uppercase tracking-wider">
           {/* Elegant Gradient Separator */}
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

           <p>&copy; {new Date().getFullYear()} AUM Structural Consultants. All Rights Reserved.</p>
           <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;