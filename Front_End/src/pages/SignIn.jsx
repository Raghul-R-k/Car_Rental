// import React, { useState } from 'react';

// const SlidingAuth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   // State for form data
//   const [signUpData, setSignUpData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     address: '',
//     phone: '',
//   });

//   const [signInData, setSignInData] = useState({
//     email: '',
//     password: '',
//   });

//   // State for validation errors
//   const [errors, setErrors] = useState({
//     signUp: {},
//     signIn: {},
//   });

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   // Handle input changes
//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Validate Sign Up Form
//   const validateSignUp = () => {
//     const { name, email, password, address, phone } = signUpData;
//     const newErrors = {};
//     if (!name) newErrors.name = 'Name is required';
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (!address) newErrors.address = 'Address is required';
//     if (!phone || !/^\d+$/.test(phone)) newErrors.phone = 'Valid phone number is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate Sign In Form
//   const validateSignIn = () => {
//     const { email, password } = signInData;
//     const newErrors = {};
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSignUpSubmit = (e) => {
//     e.preventDefault();
//     if (validateSignUp()) {
//       console.log('Sign Up Data:', signUpData);
//     }
//   };

//   const handleSignInSubmit = (e) => {
//     e.preventDefault();
//     if (validateSignIn()) {
//       console.log('Sign In Data:', signInData);
//     }
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'Montserrat', sans-serif",
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: '#f6f5f7',
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: '#fff',
//           borderRadius: '10px',
//           boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
//           position: 'relative',
//           overflow: 'hidden',
//           width: '768px',
//           maxWidth: '100%',
//           minHeight: '480px',
//           transition: 'all 0.6s ease-in-out',
//         }}>
//         {/* Sign Up Form */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             height: '100%',
//             left: 0,
//             width: '50%',
//             zIndex: isSignIn ? 1 : 2,
//             opacity: isSignIn ? 0 : 1,
//             pointerEvents: isSignIn ? 'none' : 'all',
//             transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
//             transition: 'all 0.6s ease-in-out',
//           }}
//         >
//           <form onSubmit={handleSignUpSubmit} style={{ textAlign: 'center' }}>
//             <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
//             <input
//               type="text"
//               name="name"
//               value={signUpData.name}
//               onChange={handleSignUpChange}
//               placeholder="Name"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.name && <p style={{ color: 'red' }}>{errors.signUp.name}</p>}
//             <input
//               type="email"
//               name="email"
//               value={signUpData.email}
//               onChange={handleSignUpChange}
//               placeholder="Email"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}
//             <input
//               type="password"
//               name="password"
//               value={signUpData.password}
//               onChange={handleSignUpChange}
//               placeholder="Password"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}
//             <input
//               type="text"
//               name="address"
//               value={signUpData.address}
//               onChange={handleSignUpChange}
//               placeholder="Address"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.address && <p style={{ color: 'red' }}>{errors.signUp.address}</p>}
//             <input
//               type="tel"
//               name="phone"
//               value={signUpData.phone}
//               onChange={handleSignUpChange}
//               placeholder="Phone Number"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.phone && <p style={{ color: 'red' }}>{errors.signUp.phone}</p>}
//             <button
//               type="submit"
//               style={{
//                 borderRadius: '20px',
//                 border: '1px solid #ff4b2b',
//                 backgroundColor: '#ff4b2b',
//                 color: '#ffffff',
//                 fontSize: '12px',
//                 fontWeight: 'bold',
//                 padding: '12px 45px',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase',
//                 transition: 'transform 80ms ease-in',
//                 marginTop: '20px',
//               }}
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             height: '100%',
//             left: 0,
//             width: '50%',
//             zIndex: 2,
//             opacity: isSignIn ? 1 : 0,
//             transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
//             transition: 'all 0.6s ease-in-out',
//           }}
//         >
//           <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
//             <h1 style={{ fontWeight: 'bold', margin: 0 }}>Sign In</h1>
//             <input
//               type="email"
//               name="email"
//               value={signInData.email}
//               onChange={handleSignInChange}
//               placeholder="Email"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signIn.email && <p style={{ color: 'red' }}>{errors.signIn.email}</p>}
//             <input
//               type="password"
//               name="password"
//               value={signInData.password}
//               onChange={handleSignInChange}
//               placeholder="Password"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
//             <button
//               type="submit"
//               style={{
//                 borderRadius: '20px',
//                 border: '1px solid #ff4b2b',
//                 backgroundColor: '#ff4b2b',
//                 color: '#ffffff',
//                 fontSize: '12px',
//                 fontWeight: 'bold',
//                 padding: '12px 45px',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase',
//                 transition: 'transform 80ms ease-in',
//                 marginTop: '20px',
//               }}
//             >
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Side Panels */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: '50%',
//             width: '50%',
//             height: '100%',
//             overflow: 'hidden',
//             zIndex: 100,
//             transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
//             transition: 'transform 0.6s ease-in-out',
//           }}
//         >
//           <div
//             style={{
//               background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               backgroundPosition: '0 0',
//               color: '#ffffff',
//               position: 'relative',
//               left: '-100%',
//               height: '100%',
//               width: '200%',
//               transform: isSignIn ? 'translateX(0)' : 'translateX(50%)',
//               transition: 'transform 0.6s ease-in-out',
//               display: 'flex',
//               flexDirection: 'row',
//             }}
//           >
//             <div
//               style={{
//                 position: 'absolute',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 flexDirection: 'column',
//                 padding: '0 40px',
//                 textAlign: 'center',
//                 top: 0,
//                 height: '100%',
//                 width: '50%',
//                 transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
//                 transition: 'transform 0.6s ease-in-out',
//               }}
//             >
//               <h1>Welcome Back!</h1>
//               <p>To keep connected with us, please login with your personal info</p>
//               <button
//                 type="button"
//                 onClick={toggleForm}
//                 style={{
//                   borderRadius: '20px',
//                   border: '1px solid #ffffff',
//                   backgroundColor: 'transparent',
//                   color: '#ffffff',
//                   fontSize: '12px',
//                   fontWeight: 'bold',
//                   padding: '12px 45px',
//                   letterSpacing: '1px',
//                   textTransform: 'uppercase',
//                   transition: 'transform 80ms ease-in',
//                 }}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div
//               style={{
//                 position: 'absolute',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 flexDirection: 'column',
//                 padding: '0 40px',
//                 textAlign: 'center',
//                 top: 0,
//                 height: '100%',
//                 width: '50%',
//                 right: 0,
//                 transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
//                 transition: 'transform 0.6s ease-in-out',
//               }}
//             >
//               <h1>Hello, Friend!</h1>
//               <p>Enter your details and start your journey with us</p>
//               <button
//                 type="button"
//                 onClick={toggleForm}
//                 style={{
//                   borderRadius: '20px',
//                   border: '1px solid #ffffff',
//                   backgroundColor: 'transparent',
//                   color: '#ffffff',
//                   fontSize: '12px',
//                   fontWeight: 'bold',
//                   padding: '12px 45px',
//                   letterSpacing: '1px',
//                   textTransform: 'uppercase',
//                   transition: 'transform 80ms ease-in',
//                 }}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlidingAuth;


import React, { useState } from 'react';

const SlidingAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  // State for form data
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    signUp: {},
    signIn: {},
  });

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  // Handle input changes
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate Sign Up Form
  const validateSignUp = () => {
    const { name, email, password, address, phone } = signUpData;
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!address) newErrors.address = 'Address is required';
    if (!phone || !/^\d+$/.test(phone)) newErrors.phone = 'Valid phone number is required';
    setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  // Validate Sign In Form
  const validateSignIn = () => {
    const { email, password } = signInData;
    const newErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (validateSignUp()) {
      console.log('Sign Up Data:', signUpData);
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (validateSignIn()) {
      console.log('Sign In Data:', signInData);
    }
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
          display: 'flex',
        }}
        className={isSignIn ? '' : 'right-panel-active'}
      >
        {/* Sign Up Form */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            zIndex: isSignIn ? 1 : 2,
            opacity: isSignIn ? 0 : 1,
            pointerEvents: isSignIn ? 'none' : 'auto',
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
            background: '#fff',
            padding: '20px',
          }}
        >
          <form onSubmit={handleSignUpSubmit} style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
            <input
              type="text"
              name="name"
              value={signUpData.name}
              onChange={handleSignUpChange}
              placeholder="Name"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.name && <p style={{ color: 'red' }}>{errors.signUp.name}</p>}
            <input
              type="email"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
              placeholder="Email"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}
           
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpChange}
              placeholder="Password"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}
            <input
              type="text"
              name="address"
              value={signUpData.address}
              onChange={handleSignUpChange}
              placeholder="Address"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.address && <p style={{ color: 'red' }}>{errors.signUp.address}</p>}
            <input
              type="tel"
              name="phone"
              value={signUpData.phone}
              onChange={handleSignUpChange}
              placeholder="Phone Number"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.phone && <p style={{ color: 'red' }}>{errors.signUp.phone}</p>}
            <button
              type="submit"
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
                border: 'none', // Remove border to avoid double border effect
              }}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            zIndex: 2,
            opacity: isSignIn ? 1 : 0,
            pointerEvents: isSignIn ? 'auto' : 'none',
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
            background: '#fff',
            padding: '20px',
          }}
        >
          <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', margin: 0 }}>Sign In</h1>
            <input
              type="email"
              name="email"
              value={signInData.email}
              onChange={handleSignInChange}
              placeholder="Email"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signIn.email && <p style={{ color: 'red' }}>{errors.signIn.email}</p>}
            <input
              type="password"
              name="password"
              value={signInData.password}
              onChange={handleSignInChange}
              placeholder="Password"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
            <button
              type="submit"
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
                border: 'none', // Remove border to avoid double border effect
              }}
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Side Panels */}
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
