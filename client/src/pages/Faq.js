import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const styles = {

  expandIcon: {
  }
};

export default withStyles(styles)(({ items, classes }) => {
  const getInitialState = () =>
    items.reduce((obj, item, index) => {
      obj[index] = false;
      return obj;
    }, {});

  const [selectedItems, setSelectedItems] = useState(getInitialState);

  console.log({ selectedItems });

  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item, index) => (
        <ExpansionPanel
            style={{
            backgroundColor: "#F4FBF4",
            borderradius: "25px",
            boxshadow: "1px 5px 15px #D1DFBB",
            borderwidth: "1px",
            bordercolor: "#B4DC70",
            borderstyle: "solid",
            border: "1px solid transparent",
            boxShadow: "0 3px 8px 0 rgba(0,0,0,.3)",
            borderRadius: "4px",
            color: "#688F23",
            fontFamily: 'Acme',
            margin: "2rem",
          }}
          expanded={selectedItems[index]}
          onChange={() =>
            setSelectedItems({
              ...selectedItems,
              [index]: !selectedItems[index]
            })
          }
          component="li"
        >
          <ExpansionPanelSummary
            expandIcon={
              selectedItems[index] ? (
                <RemoveIcon style={{ fill: "#688F23" }} />
              ) : (
                <AddIcon style={{ fill: "#688F23" }} />
              )
            }
          >
            {item.title}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ fontSize: ".8rem" }}>
            {item.body}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </ul>
  );
});
