import './Layout.css';
import { useState } from 'react';
import { Header } from '../Header/Header';
import { PostList } from '../PostList/PostList';
import footerWave from '../../assets/images/footer-wave.png';

export const Layout = () => {
  const [view, setView] = useState('grid');
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <PostList view={view} setView={setView} />
      </main>
      <img src={footerWave} alt="decorative wave" className="footer__wave" />
    </div>
  );
};
