import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: `20rem`,
  },
}));

export default function ControlledOpenSelect(props) {
  const type = props.type;
  const classes = useStyles();
  const [template, setTemplate] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setTemplate(event.target.value);
    props.parentCallback(type, event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Choose a template
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={template}
          onChange={handleChange}
        >
          <MenuItem value="bass">Bass</MenuItem>
          <MenuItem value="vocals">Vocals</MenuItem>
          <MenuItem value="piano">Piano</MenuItem>
          <MenuItem value="melody">Melody</MenuItem>
          <MenuItem value="drums">Drums</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
