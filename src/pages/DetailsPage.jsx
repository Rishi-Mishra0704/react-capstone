import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomeStatementData } from "../redux/IncomeSlice/IncomeSlice";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import classes from "../components/styles/Details.module.css";
import { MdKeyboardVoice } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.incomeStatement.data);

  useEffect(() => {
    dispatch(fetchIncomeStatementData(id));
  }, [dispatch, id]);

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <button className={classes.back} onClick={() => goBackHandler()}>
          <IoMdArrowRoundBack />
        </button>
        <div className={classes["header-text"]}>
          {incomeData.map((data) => {
            return (
              <span key={data.id}>
                {data.id.toString() === id.toString() && (
                  data.title
                )}
              </span>
            );
          })}
        </div>
        <div className={classes.icons}>
          <MdKeyboardVoice className={classes.icon} />
          <AiFillSetting className={classes.icon} />
        </div>
      </div>
      {incomeData.map((data) => {
        return (
          <div key={data.id}>
            {data.id.toString() === id.toString() && (
              <div className={classes["details-container"]}>
                <img src={data.thumbnail} alt="thumb" />
                <div className={classes.details}>
                  <p className={classes.release}>
                    Release: {data.release_date}
                  </p>
                  <p className={classes.genre}>Genre: {data.genre}</p>
                  <p className={classes.developer}>
                    Developed By: {data.developer}
                  </p>
                  <p className={classes.publisher}>
                    Published By: {data.publisher}
                  </p>
                  <p className={classes.description}>
                    {data.short_description}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DetailsPage;
