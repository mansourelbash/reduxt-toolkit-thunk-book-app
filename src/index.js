import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './slice/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Items from './components/Items';
import Elders from './components/Elders';
const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="items" element={<Items />} />
      <Route path="elders" element={<Elders />} />


    </Route>
  )
);

ReactDOM.render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>  
    <RouterProvider router={router} />
    <ReactQueryDevtools  initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
