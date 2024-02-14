// // src/App.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Logout from './LogOut';
// import Login from './Login';

// function HomePage() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <div className="bg-gray-200 min-h-screen flex items-center justify-center">
//       <div className="w-96 p-4 bg-white rounded shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Authentication Example</h1>
//         {isAuthenticated ? (
//           <div>
//             <p className="text-center">Welcome, {localStorage.getItem('user')}</p>
//             <div className="mt-4">
//               <Logout  />
//             </div>
//           </div>
//         ) : (
//           <Login />
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;
