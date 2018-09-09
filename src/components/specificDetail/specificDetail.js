import React, { Component } from 'react';
import axios from 'axios';
import {  Table, Container,Header,Segment } from 'semantic-ui-react';
import {url} from '../../utils';


import '../../index.css'

import SpecificTableFirst from './container/specificTable1';
import SpecificTableSecond from './container/specificTable2';


class SpecificDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            description: '',
            repository: '',
            updatedAt: '',
            projects: [],
            loading: false,
            linkToRepo:'',
            text:'Fetching List of repository',
        }
    }
    componentWillMount(props) {
        this.setState({
            loading: true
        });
        let { repoHeading, repoOwner, repoDescription, lastUpdated } = this.props.location.state.data;
        axios
            .get(url+'api/detail' + this.props.location.pathname)
            .then(res => {
                console.log(res.data);
                this.setState({
                    owner: repoOwner,
                    description: repoDescription.length>0?repoDescription:'No description has been found for this repository',
                    updatedAt: lastUpdated,
                    repository: this.props.match.params.term,
                    projects: res.data.length > 0 ? res.data : 0,
                    loading: false,
                    linkToRepo:'https://github.com'+this.props.location.pathname,
                    text: 'DETAILED INFO OF ' + this.props.match.params.term.toUpperCase() + ' REPOSITORY'
                })
            })
    }

    projectTable() {
        return this.state.projects.map(project => {
            let url = 'https://github.com/' + project.projectUrl;
            console.log(project);
            return (
                <Table.Row>
                    <Table.Cell collapsing>
                        <b>{project.projectName}</b>
                    </Table.Cell>
                    <Table.Cell>{project.projectDescription}</Table.Cell>
                    <Table.Cell><a href={url}>CLICK HERE</a></Table.Cell>

                </Table.Row>


            );
        })
    }
    projectTableShell() {
        return (
            <div>
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
                        {this.projectTable()}
                    </Table.Body>
                </Table>
            </div>
        )
    }
    render() {
        return (
            <div>
                <Container className='container'>
                <Header as='h1' content={this.state.text} textAlign='center' />
                    <Segment loading={this.state.loading}>
                        
                    <SpecificTableFirst 
                        owner = {this.state.owner}
                        description = {this.state.description}
                        updatedAt = {this.state.updatedAt}
                        repository = {this.state.repository}
                        linkToRepo = {this.state.linkToRepo}
                        />


                        {this.state.projects.length > 0 ?<SpecificTableSecond projects={this.state.projects}/>:<Segment>
                            <center><h1>NO PROJECT IS ASSOCIATED WITH THIS REPOSITORY</h1></center>
                            </Segment>}

                    </Segment>
                </Container>
            </div>
        )
    }
}

export default SpecificDetails;