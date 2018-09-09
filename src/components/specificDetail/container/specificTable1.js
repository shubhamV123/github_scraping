import React from 'react';
import {  Table,  } from 'semantic-ui-react';


function SpecificTableFirst(props) {
    return (
        <React.Fragment>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <b>OWNER</b>
                        </Table.Cell>
                        <Table.Cell>{props.owner}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <b>REPOSITORY</b>
                        </Table.Cell>
                        <Table.Cell>{props.repository}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <b>DESCRIPTION</b>
                        </Table.Cell>
                        <Table.Cell>{props.description}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <b> LAST UPDATED AT</b>
                        </Table.Cell>
                        <Table.Cell>{props.updatedAt}</Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <b> LINK TO REPOSITORY</b>
                        </Table.Cell>
                        <Table.Cell><a href={props.linkToRepo}>CLICK HERE</a></Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'></Table.Cell>
                    </Table.Row>
                    {/* {this.projectTable()} */}
                </Table.Body>

            </Table>
        </React.Fragment>

    )
}
export default SpecificTableFirst;