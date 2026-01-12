import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  Globe, 
  Award, 
  BarChart, 
  Wifi, 
  Calendar, 
  CreditCard, 
  QrCode,
  ArrowRight,
  Factory,
  ShoppingCart,
  Building,
  Utensils,
  ChevronDown
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { mockData } from '../utils/mockData';

const Home = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleVerification = (e) => {
    e.preventDefault();
    // Mock verification
    const result = mockData.certificates.find(cert => cert.id === certificateId);
    setVerificationResult(result || { valid: false });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Tech Vimal</h1>
                <p className="text-xs text-slate-600">International Certification</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">About</a>
              <a href="#services" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Services</a>
              <a href="#industries" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Industries</a>
              <a href="#verification" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Verify Certificate</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 border-0">
                India's Most Trusted Certification Body
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Business Beyond Certification.
                <span className="block text-blue-900 mt-2">Into Compliance Excellence</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Technology-enabled inspection, audit, and certification services for MSMEs, exporters, and manufacturers across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-6">
                  Request Certification
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
                  View Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1748255882537-cbe88b145305" 
                alt="Quality Inspection"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Tech Vimal?</h2>
            <p className="text-xl text-slate-300">Our unique value propositions that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mockData.usps.map((usp, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    {usp.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{usp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{usp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-900 mb-4">About Us</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Building India's Most Trusted Inspection & Certification Ecosystem
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Tech Vimal International Inspection & Certification Pvt. Ltd. is a technology-enabled, compliance-focused entity dedicated to serving MSMEs, startups, exporters, and manufacturers across India.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine trust, integrity, and innovation to deliver certification services that create measurable business impact. Our mission is to transform compliance from a checkbox exercise into a strategic advantage.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Certified Clients</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Industries Served</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900 mb-1">99.8%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/8201183/pexels-photo-8201183.jpeg" 
                  alt="Inspection"
                  className="rounded-2xl shadow-xl object-cover h-64"
                />
                <img 
                  src="https://images.pexels.com/photos/5778658/pexels-photo-5778658.jpeg" 
                  alt="Audit"
                  className="rounded-2xl shadow-xl object-cover h-64 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Compliance Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From inspection to certification, we provide end-to-end compliance services tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <div className="overflow-hidden rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-800 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="text-blue-900 p-0 group-hover:gap-2 transition-all">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Industries We Serve</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tailored Solutions for Every Sector</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-slate-200 hover:border-blue-900">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section id="verification" className="py-20 px-6 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl mb-6">
            <QrCode className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Verify Certificate Authenticity</h2>
          <p className="text-xl text-slate-300 mb-12">
            Enter certificate ID or scan QR code to verify authenticity. Zero fake certificates guaranteed.
          </p>
          <form onSubmit={handleVerification} className="max-w-xl mx-auto">
            <div className="flex gap-4">
              <Input 
                type="text"
                placeholder="Enter Certificate ID (e.g., CERT-2024-001)"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                className="flex-1 h-14 text-lg bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-slate-400"
              />
              <Button type="submit" size="lg" className="bg-white text-blue-900 hover:bg-slate-100 px-8">
                Verify
              </Button>
            </div>
          </form>
          {verificationResult && (
            <Card className="mt-8 bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="pt-6">
                {verificationResult.valid !== false ? (
                  <div className="text-left space-y-3">
                    <div className="flex items-center gap-2 text-green-400 text-lg font-semibold">
                      <CheckCircle className="w-6 h-6" />
                      Valid Certificate
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-white">
                      <div>
                        <div className="text-slate-400 text-sm">Company</div>
                        <div className="font-medium">{verificationResult.company}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Standard</div>
                        <div className="font-medium">{verificationResult.standard}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Issue Date</div>
                        <div className="font-medium">{verificationResult.issueDate}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">Valid Until</div>
                        <div className="font-medium">{verificationResult.expiryDate}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-red-400">
                    <p className="text-lg font-semibold">Certificate not found or invalid</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border-2 border-slate-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-blue-100 text-blue-900 mb-4">Contact Us</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Ready to ensure compliance excellence? Our team is here to help you navigate the certification process.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">info@techvimal.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">+91 1234 567 890</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Address</div>
                    <div className="text-slate-600">Mumbai, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Company Name"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 h-12 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Tech Vimal</h3>
                  <p className="text-xs text-slate-400">International Certification</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Building India's most trusted inspection & certification ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Inspection</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Audit</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Certification</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Hygiene Rating</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#verification" className="hover:text-white transition-colors">Verify Certificate</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accreditations</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Tech Vimal International Inspection & Certification Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
