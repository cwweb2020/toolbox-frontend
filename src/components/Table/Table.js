import React from "react";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import Loading from "../Spinner/Spinner";
import { Button, Container, Form } from "react-bootstrap";
import useFiles from "../../hooks/useFiles";

function TableComponent() {
  
const {loading,files,error, handleChange,handleSearch} =  useFiles()

  return (
    <Container fluid style={{ margin: "1rem auto" }}>
      <Container>
        <Form.Group className="mb-3 d-flex w-50">
          <Form.Control
            onChange={handleChange}
            placeholder="File Name"
          />
          <Button
            onClick={handleSearch}
            variant="danger"
            className="mx-2"
          >
            BUSCAR
          </Button>
        </Form.Group>
        {loading && <Loading />}
        {!loading && files?.length < 1 && <h1>No hay resultado....</h1>}
        {!loading && !files && error && (
          <h1>Hubo un error en carga de los datos...</h1>
        )}
        {!loading && !error && files?.length >= 1 && (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {files.map(({ file, lines }, index) => (
                <React.Fragment key={index}>
                  {lines.map((item) => (
                    <TableItem key={item.text} file={file} {...item} />
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </Container>
  );
}

export default TableComponent;
