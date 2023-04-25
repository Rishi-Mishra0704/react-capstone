import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomeStatementData } from "../redux/IncomeSlice/IncomeSlice";
import { useParams, useNavigate } from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/io";
import classes from "../components/Details.module.css";
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <button onClick={() => goBackHandler()}><IoMdArrowRoundBack/></button>
      {incomeData.map((data) => {
        return (
          <div key={data.id}>
            {data.id.toString() === id.toString() && (
              <div>
                <h1>{data.title}</h1>
                <p>{data.release_date}</p>
                <p>{data.genre}</p>
                <p>{data.developer}</p>
                <p>{data.publisher}</p>
                <p>{data.short_description}</p>
                <img src={data.thumbnail} alt="thumb" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DetailsPage;