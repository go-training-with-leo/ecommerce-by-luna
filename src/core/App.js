import React, { Suspense } from 'react';
import i18n from 'services/i18n';
import { store } from 'core/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';

// import Home from 'pages/Home';
import Brand from 'pages/Brand';
import Signin from 'pages/SignIn';
import Signup from 'pages/SignUp';
import Account from 'pages/Account';
import Store from 'pages/StoreStock';
import StoreHCM from 'pages/StoreHCM';
import Winter from 'pages/FallWinter';
import Cart from 'pages/Checkout/Cart';
import Detail from 'pages/DetailsItem';
import Info from 'pages/Checkout/Infor';
import Arrivals from 'pages/NewArrivals';
import FAQ from 'pages/CustomerCare/FAQ';
import Size from 'pages/CustomerCare/Size';
import OrderHistory from 'pages/OrderHistory';
import Policy from 'pages/CustomerCare/Policy';
import Shipping from 'pages/CustomerCare/Shipping';
import Term from 'pages/CustomerCare/TermCondition';
import Garment from 'pages/CustomerCare/GarmentCare';

import 'services/i18n';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense>
            <Routes>
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/faq' element={<FAQ />} />
              <Route path='/size' element={<Size />} />
              <Route path='/term' element={<Term />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/info' element={<Info />} />
              <Route path='/brand' element={<Brand />} />
              <Route path='/store' element={<Store />} />
              <Route path='/ship' element={<Shipping />} />
              <Route path='/policy' element={<Policy />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/winter' element={<Winter />} />
              <Route path='/sign-in' element={<Signin />} />
              <Route path='/sign-up' element={<Signup />} />
              <Route path='/garment' element={<Garment />} />
              <Route path='/arrivals' element={<Arrivals />} />
              <Route path='/history' element={<OrderHistory />} />
              <Route path='/store/ho-chi-minh' element={<StoreHCM />} />
              <Route path='/' element={<Account />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
