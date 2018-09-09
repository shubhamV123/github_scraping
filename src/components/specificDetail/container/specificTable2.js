import React from 'react';
import { Table, } from 'semantic-ui-react';


function TableRowGenerate(props) {
    return props.projects.map((project,i) => {
        let url = 'https://github.com/' + project.projectUrl;
        return (
            <Table.Row key={i}>
                <Table.Cell collapsing>
                    <b>{project.projectName}</b>
                </Table.Cell>
                <Table.Cell>{project.projectDescription}</Table.Cell>
                <Table.Cell><a href={url}>CLICK HERE</a></Table.Cell>

            </Table.Row>
        );
    })
}

function SpecificTableSecond(props) {
    return (
        <React.Fragment>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'><b>Project Associated With this Repository</b></Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>PROJECT NAME</Table.HeaderCell>
                        <Table.HeaderCell>PROJECT DESCRIPTION</Table.HeaderCell>
                        <Table.HeaderCell>PROJECT URL</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <TableRowGenerate projects={props.projects} />
                </Table.Body>
            </Table>
        </React.Fragment>

    )
}
export default SpecificTableSecond;