import Joke from './joke';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Joke />
      {/* <h1>Welcome Home!</h1>
      <button type="button" onClick={Joke}>Get Started</button> */}
    </div>
  );
}

export default Home;
