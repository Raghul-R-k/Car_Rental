import React, { useState } from 'react';

const SlidingAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f6f5f7',
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
          position: 'relative',
          overflow: 'hidden',
          width: '768px',
          maxWidth: '100%',
          minHeight: '480px',
          transition: 'all 0.6s ease-in-out',
        }}
        className={isSignIn ? '' : 'right-panel-active'}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            height: '100%',
            left: 0,
            width: '50%',
            zIndex: 1,
            opacity: isSignIn ? 0 : 1,
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
          }}
        >
          <form style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <input
              type="text"
              placeholder="Address"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <button
              type="button"
              style={{
                borderRadius: '20px',
                border: '1px solid #ff4b2b',
                backgroundColor: '#ff4b2b',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: '12px 45px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'transform 80ms ease-in',
                marginTop: '20px',
              }}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            height: '100%',
            left: 0,
            width: '50%',
            zIndex: 2,
            opacity: isSignIn ? 1 : 0,
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
          }}
        >
          <form style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', margin: 0 }}>Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <button
              type="button"
              style={{
                borderRadius: '20px',
                border: '1px solid #ff4b2b',
                backgroundColor: '#ff4b2b',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: '12px 45px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'transform 80ms ease-in',
                marginTop: '20px',
              }}
            >
              Sign In
            </button>
          </form>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 100,
            transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.6s ease-in-out',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: '0 0',
              color: '#ffffff',
              position: 'relative',
              left: '-100%',
              height: '100%',
              width: '200%',
              transform: isSignIn ? 'translateX(0)' : 'translateX(50%)',
              transition: 'transform 0.6s ease-in-out',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0 40px',
                textAlign: 'center',
                top: 0,
                height: '100%',
                width: '50%',
                transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
                transition: 'transform 0.6s ease-in-out',
              }}
            >
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button
                type="button"
                onClick={toggleForm}
                style={{
                  borderRadius: '20px',
                  border: '1px solid #ffffff',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '12px 45px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'transform 80ms ease-in',
                }}
              >
                Sign In
              </button>
            </div>
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0 40px',
                textAlign: 'center',
                top: 0,
                height: '100%',
                width: '50%',
                right: 0,
                transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
                transition: 'transform 0.6s ease-in-out',
              }}
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button
                type="button"
                onClick={toggleForm}
                style={{
                  borderRadius: '20px',
                  border: '1px solid #ffffff',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '12px 45px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'transform 80ms ease-in',
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingAuth;
