import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, type, products, orders, revenue) {
  id += 1;
  return { id, name, type, products, orders, revenue };
}

const data = [
  createData('orange', 'BookStore', 125, 24, 9999),
  createData('Lego', 'Sporting Goods', 145, 23, 1000),
  createData('TD Groups', 'Art Supllier', 455, 21, 9890),
  createData('Sony', 'Department store', 37, 11, 4783),
  createData('Lenovo','Harware Store', 160, 49, 34449),
];

interface styleProps  {
	classes: any;
  };
function SimpleTable(props: styleProps) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Stores</TableCell>
            <TableCell >Type</TableCell>
            <TableCell numeric>No. of Products</TableCell>
            <TableCell numeric>Orders</TableCell>
            <TableCell numeric>Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell >{n.type}</TableCell>
                <TableCell numeric>{n.products}</TableCell>
                <TableCell numeric>{n.orders}</TableCell>
                <TableCell numeric>{n.revenue}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default withStyles(styles)(SimpleTable);