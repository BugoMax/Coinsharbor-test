
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const getRandomNum = () => Math.floor(Math.random() * 1000) + 1;

class TableView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5
        };

        this.sortType = 'increase';
        this.searchingValue = '';

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleGetSortType = this.handleGetSortType.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChangePage(e, page) {
        this.setState({ page });
    }

    handleChangeRowsPerPage(e) {
        this.setState({ rowsPerPage: e.target.value });
    }

    handleGetSortType() {

        const ret = this.sortType;
        this.sortType = this.sortType === 'increase' ? 'decrease' : 'increase';

        return ret;
    }

    handleChange(e) {
        this.searchingValue = e.target.value;
    }

    render() {

        const { rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.displayArr.length - page * rowsPerPage);

        return <div>

            <Typography variant="title" color="inherit" className="flex" align="center">Table</Typography>

            <Button
                variant="outlined"
                color="primary"
                onClick={() => this.props.onSort(this.handleGetSortType())}
                style={{marginLeft: '20px'}}
            >
                Sort
            </Button>
            <TextField
                label="Search"
                placeholder="Type here"
                margin="normal"
                onChange={this.handleChange}
                style={{marginLeft: '20px'}}
            />
            <IconButton onClick={() => this.props.onSearchMonth(this.searchingValue)}>
                <SearchIcon />
            </IconButton>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.props.displayArr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow key={row.date.month + row.amount + getRandomNum()}>
                                    <TableCell component="th" scope="row">{row.date.month} {row.date.day}</TableCell>
                                    <TableCell component="th" scope="row">{row.category}</TableCell>
                                    <TableCell component="th" scope="row">{row.amount} $</TableCell>
                                    <TableCell component="th" scope="row">{row.title}</TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                count={this.props.displayArr.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        </div>;
    }
}

if (process.env !== 'production') {

    TableView.propTypes = {
        food: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        transport: PropTypes.array.isRequired,
        restaurants: PropTypes.array.isRequired,
        displayArr: PropTypes.array.isRequired,
        onSort: PropTypes.func.isRequired,
        onSearchMonth: PropTypes.func.isRequired
    };
}

export default TableView;
