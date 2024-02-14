// import axios from 'axios';

// const API_BASE_URL = 'https://dummyjson.com/docs/auth';

// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export async function login(username, password) {
   const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
   });
  
   if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
   }
  
   const data = await response.json();
   return data;
  }