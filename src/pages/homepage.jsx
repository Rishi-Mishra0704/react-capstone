import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomeStatementData } from "../redux/IncomeSlice/IncomeSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.incomeStatement.data);
  useEffect(() => {
    dispatch(fetchIncomeStatementData());
  }, [dispatch]);

  return (
    <div>
      {incomeData.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/details/${data.id}`}>
              <p>{data.title}</p>
              <img src={data.thumbnail} alt="thumb" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
