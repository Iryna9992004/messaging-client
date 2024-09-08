import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routing from './routes/Routing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { refresh } from './services/auth/authService';

const queryClient = new QueryClient();

function App() {
  useEffect(()=>{
    async function refreshPage(){
      const response = await refresh();
      if(response){
        localStorage.setItem('token', response.data.accessToken);
      }
      else {
        localStorage.removeItem('token')
      }
    }
    refreshPage()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
