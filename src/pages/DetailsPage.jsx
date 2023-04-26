import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomeStatementData } from "../redux/IncomeSlice/IncomeSlice";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import classes from "../components/Details.module.css";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.incomeStatement.data);
  console.log(incomeData);

  useEffect(() => {
    dispatch(fetchIncomeStatementData(id));
  }, [dispatch, id]);

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <button className={classes.back} onClick={() => goBackHandler()}>
        <IoMdArrowRoundBack />
      </button>
      {incomeData.map((data) => {
        return (
          <div key={data.id}>
            {data.id.toString() === id.toString() && (
              <div className={classes.details}>
                <img src={data.thumbnail} alt="thumb" />
                <h1>{data.title}</h1>
                <p className={classes.release}>Release: {data.release_date}</p>
                <p className={classes.genre}>Genre: {data.genre}</p>
                <p className={classes.developer}>Developed By: {data.developer}</p>
                <p className={classes.publisher}>Published By: {data.publisher}</p>
                <p className={classes.description}>{data.short_description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DetailsPage;
