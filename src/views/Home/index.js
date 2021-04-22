import './styles.scss';
import HomeProfile from './HomeProfile';
import HomeReportsList from './HomeReportsList';

const Home = () => (
  <div>
    <div className="home__hero"></div>
    <div className="container-fluid">
      <div className="row">
        <aside className="col-3 profile">
          <HomeProfile />
        </aside>
        <main className="col-9 p-5 mb-5">
          <HomeReportsList />
        </main>
      </div>
    </div>
  </div>
);

export default Home;
