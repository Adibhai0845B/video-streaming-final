import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://vstream-jylj.onrender.com/api/v1/users/request-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('OTP sent', data);
        setStep(2);
      } else {
        console.error('Failed to send OTP', data);
        setError(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://vstream-jylj.onrender.com/api/v1/users/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('OTP verified and password changed', data);
        navigate('/login'); // Redirect to login page after successful password reset
      } else {
        console.error('Failed to verify OTP or change password', data);
        setError(data.message || 'Failed to verify OTP or change password');
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 transition duration-500 transform bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-white animate-bounce">
          {step === 1 ? 'Forget Password' : 'Verify OTP'}
        </h2>
        <form className="mt-8 space-y-6" onSubmit={step === 1 ? handleRequestOtp : handleVerifyOtp}>
          {step === 1 && (
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-md appearance-none hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          {step === 2 && (
            <>
              <div>
                <label htmlFor="otp" className="sr-only">OTP</label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  autoComplete="one-time-code"
                  required
                  className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-md appearance-none hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="sr-only">New Password</label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-md appearance-none hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </>
          )}
          {error && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-transform duration-500 transform bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-110"
              disabled={loading}
            >
              {loading ? (step === 1 ? 'Requesting OTP...' : 'Verifying OTP...') : (step === 1 ? 'Request OTP' : 'Verify OTP')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
