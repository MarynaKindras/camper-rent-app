import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavLayout from '../layouts/NavLayout';
import { ContainerApp } from './App.module';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <ContainerApp>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </ContainerApp>
  );
};

export default App;
