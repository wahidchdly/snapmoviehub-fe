import classes from "../../assets/css/partials/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={classes["loading-container"]}>
      <div className={classes["loading-spinner"]}></div>
      <p className={classes.loading}>LOADING...</p>
    </div>
  );
}
