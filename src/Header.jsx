import Logo from './logo';

const Header = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '64px', padding: '0 60px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#070707', zIndex: 1000 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <Logo />
      </div>

      <button style={{ color: '#f59e0b', fontSize: '14px', fontFamily: 'Blinker, sans-serif', background: 'transparent', border: 'none', cursor: 'pointer', marginRight: 0 }}>
        Subscribe
      </button>
    </nav>
  );
};

export default Header;
