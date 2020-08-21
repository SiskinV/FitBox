import React from "react";


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbarSr from "components/Navbars/IndexNavbarSr.js";
import ProfilePageHeader1Sr from "components/Headers/SRB/ProfilePageHeader1Sr.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";


const columns = [
    { id: 'name', label: 'Ime', minWidth: 170 },
    { id: 'date', label: 'Datum', minWidth: 100 },
    {
        id: 'time',
        label: 'Vreme',
        minWidth: 250,
        align: 'right',
    },
    {
        id: 'done',
        label: 'Odrzan',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(name, date, time, done) {
    //const density = population / size;
    return { name, date, time, done };
}




const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});



function ProfilePage1() {

    //ZA TABELU 

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);



    function r() {

        var user = JSON.parse(localStorage.getItem('ulogovan'));
        var users = JSON.parse(localStorage.getItem('users'));
        var rows1 = [];



        for (var i = 0; i < users.length; i++) {
            if (user.username == users[i].username) {
                //console.log('Nasao');
                user = users[i];
            }
        }

        console.log(user);
        var tr = user.trainings;
        console.log(tr);
        for (var i = 0; i < user.trainings.length; i++) {
            rows1.push(createData(user.trainings[i].name, user.trainings[i].date, user.trainings[i].vreme, 1));
        }
        setRows(rows1);
    }





    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {

        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>

            <IndexNavbarSr />
            <div className="wrapper" onLoad={r}>
                <ProfilePageHeader1Sr />
                <div className="section">
                    <Container>
                        <div className="button-container">
                            <Button className="btn-round" color="info" size="lg">
                                Pratite
              </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip515203352"
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip515203352">
                                Pratite me na Tviteru
              </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip340339231"
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip340339231">
                                Pratite me na Instagramu
              </UncontrolledTooltip>
                        </div>
                        <h3 className="title">O meni</h3>
                        <h5 className="description">
                            Dodaj tekst za korisnika kakav hoces
            </h5>
                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h4 className="title text-center">Moji treninzi</h4>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Paper className={classes.root}>
                                <TableContainer className={classes.container}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </Paper>
                        </Row>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default ProfilePage1;
