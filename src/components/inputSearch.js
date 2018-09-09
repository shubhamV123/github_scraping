import React, { Component } from 'react'
import { Input, Container,Header,Form,Icon,Message } from 'semantic-ui-react';

import './inputSearch.css';

class InputSearch extends Component {
    constructor(){
        super();
        this.state = {
            error:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        console.log(e.target.searchTerm.value);
        if(e.target.searchTerm.value<=0){
            this.setState({error:true});
        }
        else{
            this.setState({error:false});
            this.props.history.push('/search/'+e.target.searchTerm.value);

        }
    }

    render() {
        return (
            <div>
                <Container style={{ margin: '0',
                paddingTop:'20rem',
                width:"50%" }}>
                <Header as='h1' content='GITSEARCH' className='inputh1' textAlign='center' />
                <Header as='h5' content='Search all git repo.Simply enter keyword such as Google,node' className='inputh2' textAlign='center' />
                <Form onSubmit={this.handleSubmit} error={this.state.error}>
                    <Input icon={<Icon name='search'/>}
                        fluid
                        name='searchTerm'
                        placeholder='Search here git repository '
                        />
                        <Message
                            error
                        header='Input Field Is Empty'
                        content='Please Enter Keyword to search the repository'
                        />
                </Form>
                </Container>
            </div>
        )
    }
}

export default InputSearch;