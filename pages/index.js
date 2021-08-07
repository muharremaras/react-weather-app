import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mt-4">
          <div className="row">
            <h1>Weather Forecast</h1>
          </div>
        </div>
        <div className="container mt-4 bg-light-blue default-border-radius">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-white mt-2">Istanbul</h2>
            </div>
            <div className="col-lg-6">
              <form>
                <div className="my-2">
                  <input type="text" className="form-control" placeholder="Şehir ara" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-3 default-border-radius bg-light-pink text-center">
              <img src="http://openweathermap.org/img/wn/11d@4x.png" alt="" />
            </div>
            <div className="col-lg-9">
              <div className="px-4">
                <h3>Clear</h3>
                <h3 className="mt-3">Clear Sky</h3>
                <h3 className="mt-3">35°</h3>
                <h5 className="mt-3 text-muted">X: 28.2424</h5>
                <h5 className="mt-3 text-muted">Y: 28.2424</h5>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>

      </footer>

      <style jsx>{`
        .bg-light-blue {
          background-color: #8ecae6;
        }

        .bg-light-pink {
          background-color: #fee5e2;
        }

        .default-border-radius {
          border-radius: 0.25em;
        }

        .form-control {
          outline:0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
