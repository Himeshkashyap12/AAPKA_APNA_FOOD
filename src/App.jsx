

import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import MenuPage from './pages/MenuPage'
import OrderPage from './pages/OrderPage'
import StorePage from './pages/StorePage'
import AnalyticsPage from './pages/AnalyticsPage'
import QrcodePage from './pages/QrCodePage'
import ReportPage from './pages/ReportPage'
import Accounts from './components/admin/setting/Accounts'
import AdminLogin from './components/admin/auth/AdminLogin'
import AdminHomePage from './pages/AdminHomePage'
import AdminPaymentPage from './pages/AdminPaymentPage'

function App() {
  return (
    <>
     <Routes>
     <Route  path="/login" element={<AdminLogin />} />
      <Route path="/" element={<AdminLayout />} >
      <Route  path="admin/home" element={<AdminHomePage />} />
         <Route  path="admin/menu" element={<MenuPage />} />
         <Route  path="admin/orders" element={<OrderPage />} />
         <Route  path="admin/qrcode" element={<QrcodePage />} />
         <Route  path="admin/reports" element={<ReportPage />} />
         <Route  path="admin/store" element={<StorePage />} />
         <Route  path="admin/analytics" element={<AnalyticsPage />} />
         <Route  path="admin/accounts" element={<Accounts />} />
         <Route  path="admin/payment" element={<AdminPaymentPage />} />
       </Route>
    </Routes>
    </>
  )
}

export default App
