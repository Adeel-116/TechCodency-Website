import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

type GetStartedButtonProps = {
  buttonTitle: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ buttonTitle, onClick, disabled }) => (
  <button 
    type="submit"
    onClick={onClick}
    disabled={disabled}
    className="group relative overflow-hidden bg-gradient-to-r from-[#C9F31D] to-[#9FEC1C] text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
  >
    <span>{buttonTitle}</span>
    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
  </button>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail('');
    }, 2000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-[#C9F31D] to-[#9FEC1C] rounded-full flex items-center justify-center mx-auto mb-4">
          <FaEnvelope className="text-xl text-black" />
        </div>
        <h3 className="text-[#C9F31D] font-bold text-lg mb-2">Thank You!</h3>
        <p className="text-white text-sm">You ve successfully subscribed to our newsletter.</p>
        <button 
          onClick={() => setIsSubscribed(false)}
          className="text-[#C9F31D] hover:text-[#9FEC1C] transition-colors duration-300 text-sm mt-3"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-[#C9F31D] font-bold text-xl mb-2">Stay Updated</h3>
        <p className="text-white text-sm">Get the latest insights delivered to your inbox</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className=" text-[#C9F31D] font-semibold mb-2 flex items-center gap-2">
            <FaEnvelope className="text-[#9FEC1C]" />
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 
              transition-all duration-300 focus:outline-none backdrop-blur-sm
              ${email ? 'border-[#C9F31D] shadow-lg shadow-[#C9F31D]/20' : 'border-gray-700/50'}
              ${error ? 'border-red-500' : 'hover:border-[#9FEC1C]/60'}
            `}
          />
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <GetStartedButton 
                buttonTitle={isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"} 
                onClick={() => {}} // No-op, form handles submit
                disabled={isSubmitting}
              />
            </div>
          </div>
        </form>
        </div>

        <p className="text-center text-[#BBBBB9] text-xs">
          No spam. Unsubscribe anytime.
        </p>
      </div>

  );
};

export default NewsletterForm;