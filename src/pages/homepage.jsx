import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardVoice } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { IoLogoGameControllerB } from 'react-icons/io';
import { fetchIncomeStatementData } from '../redux/IncomeSlice/IncomeSlice';
import classes from '../components/styles/Homepage.module.css';
import SearchBar from '../components/Search';
import Filter from '../components/FIlter';

const HomePage = () => {
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.incomeStatement.data);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    dispatch(fetchIncomeStatementData());
  }, [dispatch]);

  const filteredData = incomeData.filter((data) => data.title.toLowerCase()
    .includes(searchQuery.toLowerCase())
     && (selectedGenre === '' || data.genre === selectedGenre));

  const genres = Array.from(new Set(incomeData.map((data) => data.genre)));

  const hasNoGames = filteredData.length === 0;

  return (
    <div role="main" className={classes.container}>
      <div className={classes.header}>
        <p className={classes['header-text']}>
          GameZone
          <IoLogoGameControllerB className={classes.controller} />
        </p>
        <div className={classes.icons}>
          <MdKeyboardVoice className={classes.icon} />
          <AiFillSetting className={classes.icon} />
        </div>
      </div>
      <div className={classes.filters}>
        <SearchBar role="searchbox" setSearchQuery={setSearchQuery} />
        <Filter
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
      </div>
      <div className={classes['games-container']}>
        {selectedGenre === '' && searchQuery === ''
          ? incomeData.slice(0, 6).map((data) => (
            <div className={classes.games} key={data.id}>
              <Link to={`/details/${data.id}`}>
                <p>{data.title}</p>
              </Link>
            </div>
          ))
          : filteredData.map((data) => (
            <div className={classes.games} key={data.id}>
              <Link to={`/details/${data.id}`}>
                <p>{data.title}</p>
              </Link>
            </div>
          ))}
        {hasNoGames && <p className={classes['no-games']}>No games found</p>}
      </div>
    </div>
  );
};

export default HomePage;
