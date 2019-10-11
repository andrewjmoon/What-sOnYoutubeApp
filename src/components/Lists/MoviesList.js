import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
//import YoutubePlayer from 'react-youtube-player';
import Pagination from 'react-hooks-paginator';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    color: 'black'
  },
  bullet: {
    margin: '0 2px',
    fontSize: 40,
    transform: 'scale(0.8)',
    minWidth: 100,
    backgroundColor: 'lightblue'
  }
});

function MoviesList() {
  const pageLimit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_TABLETOP,
      callback: function(data, tabletop) {
        console.log(data);
        setItems(data.Movies.elements);
      },
      simpleSheet: false
    });
  }, []);

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  return (
    <div className="App">
      <h2> Movies Available on Youtube: </h2>
      <div>
        {currentItems.map(a => {
          return (
            <div>
              <Card className={classes.bullet} key={a.Id}>
                <p>Movie: {a.Movie}</p>
                <p>Year: {a.Year}</p>
                <p>Noteworthy: {a.Noteworthy}</p>
                <Link
                  className={classes.title}
                  href={a.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Movie Link
                </Link>
              </Card>
            </div>
          );
        })}
        <Pagination
          totalRecords={items.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default MoviesList;
