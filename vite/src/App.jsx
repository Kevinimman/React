import { useState } from "react";
import "./App.css";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searched, setSearched] = useState(false);

  const airlines = [
    { name: "IndiGo", price: 4820, change: "+3.2%" },
    { name: "Air India", price: 5140, change: "-1.4%" },
    { name: "Akasa Air", price: 4670, change: "+2.1%" },
    { name: "SpiceJet", price: 4990, change: "+4.7%" },
  ];

  const routes = [
    {
      route: "Bengaluru → Delhi",
      price: "₹5,420",
      change: "+4.8%",
      status: "Above average",
    },
    {
      route: "Mumbai → Delhi",
      price: "₹4,860",
      change: "-1.2%",
      status: "Stable",
    },
    {
      route: "Bengaluru → Mumbai",
      price: "₹3,940",
      change: "+2.4%",
      status: "Moderate",
    },
    {
      route: "Delhi → Kolkata",
      price: "₹4,280",
      change: "+5.1%",
      status: "Rising",
    },
  ];

  const handleSearch = () => {
    if (from && to) {
      setSearched(true);
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">AI</div>

          <div>
            <h2>Airfare Intelligence</h2>
            <span>India Real-Time Airfare Price Index</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#routes">Routes</a>
          <a href="#airlines">Airlines</a>
          <a href="#methodology">Methodology</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-left">

          <div className="status">
            <span className="status-dot"></span>
            LIVE DATA MONITORING
          </div>

          <h1>
            India's
            <br />
            <strong>Airfare Price Index</strong>
          </h1>

          <p>
            A real-time analytical platform for monitoring domestic
            airfare movements across major Indian routes.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("routes")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Data →
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("methodology")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Methodology
            </button>
          </div>

        </div>


        {/* INDEX CARD */}
        <div className="index-card">

          <div className="card-top">
            <span>National Airfare Index</span>
            <span className="live-label">● LIVE</span>
          </div>

          <div className="index-value">
            118.42
          </div>

          <div className="index-change">
            ↑ 2.84% <span>vs previous period</span>
          </div>

          <div className="chart">

            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
            <div className="bar b6"></div>
            <div className="bar b7"></div>
            <div className="bar b8"></div>
            <div className="bar b9"></div>
            <div className="bar b10"></div>
            <div className="bar b11"></div>
            <div className="bar b12"></div>

          </div>

          <div className="chart-labels">
            <span>MON</span>
            <span>WED</span>
            <span>FRI</span>
            <span>SUN</span>
          </div>

        </div>

      </section>


      {/* SEARCH */}
      <section className="search-section">

        <div className="search-heading">
          <span>ROUTE ANALYSIS</span>
          <h2>Compare current airfares</h2>
        </div>

        <div className="search-box">

          <div className="input-group">
            <label>FROM</label>
            <input
              type="text"
              placeholder="Bengaluru"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div className="swap">
            →
          </div>

          <div className="input-group">
            <label>TO</label>
            <input
              type="text"
              placeholder="Delhi"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <button
            className="search-btn"
            onClick={handleSearch}
          >
            Analyse
          </button>

        </div>

        {searched && (
          <div className="search-result">
            Showing current airfare intelligence for{" "}
            <strong>
              {from} → {to}
            </strong>
          </div>
        )}

      </section>


      {/* OVERVIEW */}
      <section className="section" id="overview">

        <div className="section-title">
          <div>
            <span>MARKET OVERVIEW</span>
            <h2>India domestic airfare snapshot</h2>
          </div>

          <p>
            Current observations from monitored domestic routes.
          </p>
        </div>


        <div className="stats-grid">

          <div className="stat-card">
            <span>National Index</span>
            <strong>118.42</strong>
            <small>+2.84% today</small>
          </div>

          <div className="stat-card">
            <span>Routes Monitored</span>
            <strong>126</strong>
            <small>Across major city pairs</small>
          </div>

          <div className="stat-card">
            <span>Airlines Tracked</span>
            <strong>7</strong>
            <small>Domestic carriers</small>
          </div>

          <div className="stat-card">
            <span>Last Updated</span>
            <strong>08:42</strong>
            <small>28 Sep 2026</small>
          </div>

        </div>

      </section>


      {/* ROUTES */}
      <section className="section" id="routes">

        <div className="section-title">
          <div>
            <span>ROUTE INTELLIGENCE</span>
            <h2>Selected high-volume routes</h2>
          </div>

          <button className="text-btn">
            View all routes →
          </button>
        </div>


        <div className="route-table">

          <div className="table-header">
            <span>ROUTE</span>
            <span>AVG. FARE</span>
            <span>CHANGE</span>
            <span>STATUS</span>
          </div>

          {routes.map((route, index) => (

            <div className="table-row" key={index}>

              <strong>{route.route}</strong>

              <span>{route.price}</span>

              <span className="change">
                {route.change}
              </span>

              <span className="route-status">
                {route.status}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* AIRLINES */}
      <section className="section" id="airlines">

        <div className="section-title">
          <div>
            <span>AIRLINE COMPARISON</span>
            <h2>Current fare observations</h2>
          </div>
        </div>


        <div className="airline-grid">

          {airlines.map((airline, index) => (

            <div className="airline-card" key={index}>

              <div className="airline-icon">
                {airline.name.charAt(0)}
              </div>

              <div className="airline-info">

                <h3>{airline.name}</h3>

                <span>Current observed fare</span>

              </div>

              <div className="airline-price">

                <strong>
                  ₹{airline.price.toLocaleString()}
                </strong>

                <small>
                  {airline.change}
                </small>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* METHODOLOGY */}
      <section
        className="methodology"
        id="methodology"
      >

        <div className="method-left">

          <span>METHODOLOGY</span>

          <h2>
            From raw airfare data
            <br />
            to an actionable index.
          </h2>

          <p>
            The platform continuously collects, cleans and
            normalizes airfare observations before aggregating
            them into route-level and national-level indicators.
          </p>

        </div>


        <div className="method-steps">

          <div className="method-step">
            <b>01</b>
            <div>
              <h3>Data Collection</h3>
              <p>
                Automated collection from airlines and online
                travel aggregator portals.
              </p>
            </div>
          </div>

          <div className="method-step">
            <b>02</b>
            <div>
              <h3>Cleaning & Validation</h3>
              <p>
                Duplicate removal, anomaly detection and
                validation of collected observations.
              </p>
            </div>
          </div>

          <div className="method-step">
            <b>03</b>
            <div>
              <h3>Normalization</h3>
              <p>
                Route, class and relevant distance-based
                normalization.
              </p>
            </div>
          </div>

          <div className="method-step">
            <b>04</b>
            <div>
              <h3>Index Generation</h3>
              <p>
                Traffic-weighted aggregation into a national
                airfare indicator.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* DATA SOURCES */}
      <section className="sources">

        <span>DATA ECOSYSTEM</span>

        <h2>Built for evidence-based monitoring</h2>

        <div className="source-list">

          <div>Airline Portals</div>
          <div>Travel Aggregators</div>
          <div>MoSPI</div>
          <div>MoCA</div>
          <div>Aviation Authorities</div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div>
          <strong>Airfare Intelligence India</strong>
          <p>
            Real-time domestic airfare monitoring platform.
          </p>
        </div>

        <div className="footer-right">
          Prototype • SIH26056GREEN
        </div>

      </footer>

    </div>
  );
}

export default App;