import React from 'react';
import YoutubePlayer from './YoutubePlayer';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Resources from './Resources';
import ListsHome from './Lists/ListsHome';
import MoviesList from './Lists/MoviesList';
import About from './About';
import Alternatives from './Alternatives/AlternativesHome';
import ArchivesTvShows from './Alternatives/ArchivesTvShows';
import ArchivesMovies from './Alternatives/ArchivesMovies';
import Notes from './Alternatives/Notes';
import TvShowsList from './Lists/TVSeries';
import HalloweenList from './Lists/HalloweenList';
import ChristmasList from './Lists/ChristmasList';
import { useAuth0 } from '../react-auth0-wrapper';
import PrivateRoute from './PrivateRoute';


export default () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/alternatives" component={Alternatives} />
          <PrivateRoute path="/youtubeplayer" component={YoutubePlayer} />
          <PrivateRoute path="/resources" component={Resources} />
          <PrivateRoute path="/listhome" component={ListsHome} />
          <PrivateRoute path="/movielist/1/:name" component={MoviesList} />
          <PrivateRoute path="/movielist/2/:name" component={ArchivesMovies} />
          <PrivateRoute
            path="/tvshowlist/2/:name"
            component={ArchivesTvShows}
          />
          <PrivateRoute path="/tvshowlist/1/:name" component={TvShowsList} />
          <PrivateRoute path="/tvshowlist/3/:name" component={HalloweenList} />
          <PrivateRoute path="/tvshowlist/4/:name" component={ChristmasList} />
          <PrivateRoute path="/notes" component={Notes} />
        </Switch>
      </Router>
    </div>
  );
};
