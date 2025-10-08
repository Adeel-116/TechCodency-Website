'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Outfit, Teko } from 'next/font/google';
import GetStartedButton from './GetStartedButton';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const teko = Teko({ subsets: ['latin'], weight: ['400', '500', '700'] });

const footerContent = {
  company: {
    name: 'Pixel Mind',
    tagline: 'Crafting Digital Excellence',
    description:
      'We transform businesses through innovative digital solutions, creative design, and strategic marketing.',
    logoPlaceholder: '/images/Group5.png',
  },
  links: {
    services: [
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Apps', href: '#' },
      { label: 'Digital Marketing', href: '#' },
      { label: 'Brand Strategy', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'SEO Services', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Portfolio', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    resources: [
      { label: 'Case Studies', href: '#' },
      { label: 'Whitepapers', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
  contact: {
    email: 'hello@digitalnexus.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Street, Tech City, TC 12345',
  },
  social: [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ],
  newsletter: {
    title: 'Stay Updated',
    description: 'Subscribe to our newsletter for the latest insights and updates.',
  },
};

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <footer
      style={{
        background: '#F5F5F5',
        color: '#000000',
      }}
      className={outfit.className}
    >
      {/* Newsletter Section */}
      <div
        style={{
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          padding: '3rem 1rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h3
                className={teko.className}
                style={{
                  fontSize: '1.9rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  background: '#001F3F',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {footerContent.newsletter.title}
              </h3>
              <p style={{ color: '#000000', opacity: 0.75 }}>{footerContent.newsletter.description}</p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '0.9rem 1.25rem',
                  borderRadius: '8px',
                  border: '2px solid rgba(0, 0, 0, 0.2)',
                  background: '#ffffff',
                  color: '#000000',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
              <GetStartedButton buttonTitle="GET STARTED" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Image
                src={footerContent.company.logoPlaceholder}
                alt="Company Logo"
                width={120}
                height={40}
                style={{ borderRadius: '6px' }}
              />
              <p style={{ color: '#001F3F', fontSize: '0.9rem', fontWeight: 500 }}>
                {footerContent.company.tagline}
              </p>
            </div>

            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, opacity: 0.85 }}>
              {footerContent.company.description}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {footerContent.social.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background:
                        hovered === idx
                          ? 'linear-gradient(135deg, #001F3F, #003366)'
                          : 'rgba(0,0,0,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon size={18} color={hovered === idx ? '#ffffff' : '#001F3F'} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={teko.className} style={{ color: '#001F3F', fontSize: '1.25rem', fontWeight: 600 }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              {footerContent.links.services.map((link, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#000000',
                      textDecoration: 'none',
                      opacity: 0.8,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#001F3F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={teko.className} style={{ color: '#001F3F', fontSize: '1.25rem', fontWeight: 600 }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              {footerContent.links.company.map((link, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#000000',
                      textDecoration: 'none',
                      opacity: 0.8,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#001F3F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={teko.className} style={{ color: '#001F3F', fontSize: '1.25rem', fontWeight: 600 }}>
              Get in Touch
            </h3>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={20} color="#001F3F" />
                <a href={`mailto:${footerContent.contact.email}`} style={{ color: '#000000', opacity: 0.9 }}>
                  {footerContent.contact.email}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={20} color="#001F3F" />
                <a href={`tel:${footerContent.contact.phone}`} style={{ color: '#000000', opacity: 0.9 }}>
                  {footerContent.contact.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <MapPin size={20} color="#001F3F" />
                <span style={{ opacity: 0.9 }}>{footerContent.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(0,0,0,0.1)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ margin: 0, opacity: 0.7 }}>
            © {new Date().getFullYear()} {footerContent.company.name}. All rights reserved. Design and Developed by Muhammad Adeel
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {footerContent.links.resources.slice(4, 6).map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{ color: '#000000', textDecoration: 'none', opacity: 0.8 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#001F3F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
