import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from '/components/top'
import City from '/components/city'
import Status from '/components/status'

export default function Home() {
  // fetch('http://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=22c2052838b535786389a14d7c9d16f5')
  // .then(response => response.json())
  // .then(data => console.log(data));

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top />
        <City />
        <Status />
      </main>

      <footer>
        <div className="mt-4 footer-text">© Weather Forecast 2021</div>
      </footer>

      <style jsx>{`
        .footer-text {
          color: #e6e6e6;
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

        .bg-light-blue {
          background-color: #8ecae6;
        }

        .bg-light-pink {
          background-color: #fee5e2;
        }

        .default-border-radius {
          border-radius: 0.25em;
        }

        .status-item {
          font-size: calc(1.3rem + .6vw);
        }

        .last-searched {
          padding-left: 0;
        }

        .last-searched li {
          list-style: none;
          cursor: pointer;
        }

        .last-searched li:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
