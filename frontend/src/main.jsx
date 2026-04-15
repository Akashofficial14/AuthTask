import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Router/AppRouter.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { ToastContainer, toast } from 'react-toastify';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <AppRouter />
    <ToastContainer/>
    </QueryClientProvider>

)
