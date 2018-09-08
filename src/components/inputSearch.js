import React, { Component } from 'react'
import { Input, Container,Header,Form,Icon } from 'semantic-ui-react';
import { createBrowserHistory } from 'history';

import './inputSearch.css';

class InputSearch extends Component {
    constructor(){
        super();
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        console.log(e.target.searchTerm.value);
        this.props.history.push('/search/'+e.target.searchTerm.value);
    }

    render() {
        return (
            <div>
                <Container style={{ marginTop: '3em',width:"50%" }}>
                <Header as='h1' content='GITSEARCH' className='inputh1' textAlign='center' />
                <Header as='h5' content='Search all git repo.Simply enter keyword such as Google,node' className='inputh2' textAlign='center' />
                <Form onSubmit={this.handleSubmit}>
                    <Input icon={<Icon name='search'/>}
                        fluid
                        name='searchTerm'
                        placeholder='Search here git repository '
                        />
                </Form>
                </Container>
            </div>
        )
    }
}

export default InputSearch;