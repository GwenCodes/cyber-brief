import logoImage from './img/cb-logo.png?url';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <div style={{ position: 'relative' }}>
        <img
          src={logoImage}
          alt="The Cyber Brief logo"
          style={{ height: '40px', width: 'auto', display: 'block', boxShadow: '0 0 12px rgba(96,165,250,0.28)' }}
        />
      </div>
      <span style={{ color: '#fff', fontWeight: 600, fontSize: '25px', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'Blinker, sans-serif' }}>
        THE CYBER - BRIEF
      </span>
    </div>
  );
};

export default Logo;