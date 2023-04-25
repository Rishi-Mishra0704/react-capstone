import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomeStatementData } from "../redux/IncomeSlice/IncomeSlice";
import { Link } from "react-router-dom";
import classes from "../components/Homepage.module.css";
import SearchBar from "../components/Search";
import Filter from "../components/FIlter";


const HomePage = () => {
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.incomeStatement.data);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    dispatch(fetchIncomeStatementData());
  }, [dispatch]);

  const filteredData = incomeData.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedGenre === "" || data.genre === selectedGenre)
  );

  const genres = Array.from(new Set(incomeData.map((data) => data.genre)));

  return (
    <div className={classes.container}>
      <div className={classes.header}>
      <SearchBar setSearchQuery={setSearchQuery} />
        <Filter
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
      </div>
      <div className={classes['games-container']}>
        {filteredData.map((data) => {
          return (
            <div className={classes.games} key={data.id}>
              <Link to={`/details/${data.id}`}>
                <p>{data.title}</p>
                <img src={data.thumbnail} alt="thumb" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;