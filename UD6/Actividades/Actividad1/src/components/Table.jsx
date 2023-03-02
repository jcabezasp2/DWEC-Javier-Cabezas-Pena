import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';

import { useNavigate } from 'react-router-dom';


const columns = [
  { id: 'id',
    label: 'ID',
    minWidth: 170,
    align: 'center', },
  { id: 'avatar',
    label: 'Imagen',
    minWidth: 100,
    align: 'center',
    type: 'image', },
  {
    id: 'fname',
    label: 'Nombre',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'lname',
    label: 'Apellido',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'username',
    label: 'Nombre de usuario',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'actions',
    label: 'Acciones',
    minWidth: 170,
    align: 'center',
    type: 'actions',
  },
];




export default function TableElement(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = props.usersArray;

 const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', margin: 'auto'}}>
      <TableContainer sx={{  }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={5} sx={{color: 'blue'}}>
                USUARIOS
              </TableCell>
              <TableCell align="right" colSpan={1} sx={{color: 'blue'}}>
                    <Button
                        sx={{mt:3, mb:2}}
                        type="button" 
                        variant="contained"
                        color="primary"
                        onClick={()=>{navigate("/create")}}>
                        CREAR
                    </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody key={uuid()}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={uuid()}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.type && column.type === 'image'
                            ? <Avatar alt="avatar" src={value} />
                            : column.type && column.type === 'actions'?
                             <>
                              <Button data-id={row.id} variant="outlined" onClick={(event) => {navigate(`/edit/${event.target.getAttribute('data-id')}`)}}>Editar</Button>
                              <Button data-id={row.id} variant="outlined" onClick={(event) => {props.deleteUser(event.target.getAttribute('data-id'))}}>Borrar</Button>
                            </>
                            :  value}
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
