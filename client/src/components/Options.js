import {} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Options = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <p>Options</p>
      {children}
    </div>
  );
};

export default Options;
