import { PrivyProvider } from '@privy-io/react-auth';
import { usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';

function App() {
  const { login, logout, authenticated, user } = usePrivy();

  useEffect(() => {
    if (authenticated) {
      console.log("User logged in:", user);
    }
  }, [authenticated, user]);

  return (
    <div className="container">
      <main>
        <div className="content">
          <img className="content__img" src="images/four.png" alt="Card Four" />
          <img className="content__img" src="images/five.png" alt="Card Five" />
          <img className="content__img" src="images/six.png" alt="Card Six" />
          <img className="content__img" src="images/seven.png" alt="Card Seven" />
          <img className="content__img" src="images/eight.png" alt="Card Eight" />
          <img className="content__img" src="images/nine.png" alt="Card Nine" />
          <img className="content__img" src="images/ten.png" alt="Card Ten" />
          <img className="content__img" src="images/eleven.png" alt="Card Eleven" />
          <img className="content__img" src="images/twelve.png" alt="Card Twelve" />
          <img className="content__img" src="images/thirteen.png" alt="Card Thirteen" />
          <img className="content__img" src="images/fourteen.png" alt="Card Fourteen" />
          <img className="content__img" src="images/fifteen.png" alt="Card Fifteen" />
          <img className="content__img" src="images/sixteen.png" alt="Card Sixteen" />
          <img className="content__img" src="images/seventeen.png" alt="Card Seventeen" />
          <img className="content__img" src="images/eighteen.png" alt="Card Eighteen" />
          <img className="content__img" src="images/nineteen.png" alt="Card Nineteen" />
          <img className="content__img" src="images/twenty4.png" alt="Card Twenty Four" />
          <img className="content__img" src="images/twenty5.png" alt="Card Twenty Five" />
        </div>
      </main>

      <nav style={{ backgroundColor: '#000000' }}>
        <div className="nav-logo">
          <div className="nav-link">
            <h1 className="utf-paragraph" style={{ lineHeight: '1.2em', marginTop: 'calc(var(--scale-factor) * -2.2)' }}>🃏</h1>
          </div>
        </div>
        
        <div className="nav-title">Welcome to Crudeworld</div>
        
        <div className="nav-links">
          {authenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
          <div className="nav-link"><a href="https://t.me/+5eB_Knk6sGA2NTEx" target="blank_">Telegram</a></div>
          <div className="nav-link"><a href="https://twitter.com/TheCrudeboysNFT" target="blank_">X</a></div>
        </div>
      </nav>

      <section className="content">
        <div id="homepage">
          <a href="https://doggy.market/nfts/cruno" target="_blank">
            <img className="image" style={{ width: '70vw', maxWidth: '800px' }} src="./images/cardpromo.png" alt="Crudeboys Logo" />
          </a>
        </div>
      </section>

      <section className="content traits" style={{ background: 'linear-gradient(180deg, #5B910A 0%, #1B2B03 100%)' }}>
        <div className="search-container">
          <input type="text" placeholder="View Crudes (1-522)" className="search-input" />
          <div className="search-results">
            <div className="initial-text">View your crudes</div>
          </div>
        </div>
        <div className="cards-grid"></div>
      </section>

      <section className="content traits" style={{ backgroundColor: '#F29B4E', minHeight: '100vh' }}>
        <div>
          <div className="headline" style={{ textAlign: 'center' }}>Crudetraits</div>
          <img className="image_traits" src="./images/raretraits.jpg" alt="Crudeboys Logo" />
        </div>
      </section>

      <section className="content traits" style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: 'black', fontWeight: '400', textAlign: 'center', display: 'flex', flexDirection: 'row', marginBottom: '50px' }} className="headline">
          Crudemarkets
        </div>
        <div className="market-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <a href="https://doggy.market/nfts/crudeboys" target="blank_" className="market-link">
            <img style={{ height: '100px', width: '100px' }} src="images/29bd4140-0dc3-4e5a-95fb-0a75e785d1a4.avif" alt="Doggy Market" />
            <p style={{ color: 'black', textAlign: 'center' }}>Doggy Market</p>
          </a>
          <a href="https://doge.ordinalswallet.com/collection/crudeboys" target="blank_" className="market-link">
            <img style={{ height: '100px', width: '100px' }} src="images/34d8afaf-52ec-48cf-a044-37c0c1cd44a5.avif" alt="Ordinals" />
            <p style={{ color: 'black', textAlign: 'center' }}>Ordinals</p>
          </a>
          <a href="https://doge-labs.com/#/collectible/crudeboys" target="blank_" className="market-link">
            <img style={{ height: '100px', width: '100px' }} src="images/dogelabs.avif" alt="Doge Labs" />
            <p style={{ color: 'black', textAlign: 'center' }}>Doge Labs</p>
          </a>
        </div>
      </section>

      <section className="content traits" style={{ backgroundColor: '#648A2A', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="game-container">
          <h1 className="headline" style={{ textAlign: 'center', color: 'rgb(211, 20, 20)', marginBottom: '40px' }}>CrudeGame</h1>
          <div className="game-board">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="cell" data-index={index}></div>
            ))}
          </div>
          <div className="game-status">Player X's turn</div>
          <button className="restart-button">RestaRT</button>
        </div>
      </section>

      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img className="image" src="images/logo.avif" style={{ width: '100px' }} alt="Crudeboys Logo" />
        <div style={{ color: 'black', fontWeight: '400', textAlign: 'center', marginTop: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: '15px' }} className="">
          This is a <b>&nbsp;Crudewebsite&nbsp;</b> Hosted on &nbsp;
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.75" width="22" height="19" fill="url(#pattern0_241_11106)"/>
          </svg>
          Arweave
        </div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', maxWidth: '400px', textAlign: 'right', fontFamily: "'Schoolbell', cursive", fontSize: '14px', color: '#ffffff' }}>
          Crudeboys is a 522 count card collection on doginals based on the 52 card standard playing card deck. Inscription #s 109748927 - 109768927
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <PrivyProvider
      appId="cm9ja1fsw00mpie0na7ikxm7a"
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          showWalletLoginFirst: false,
        },
      }}
    >
      <App />
    </PrivyProvider>
  );
}

export default AppWrapper; 