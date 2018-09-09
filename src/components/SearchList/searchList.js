import React, { Component } from 'react'
import axios from 'axios';
import { Segment,Container,Header } from 'semantic-ui-react';
import SegmentGenerate from './container/segmentGenerate';
class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            text:'Fetching List of repository',
            clickText:false
        }
    }
    componentWillMount() {
        document.addEventListener('contextmenu', event => event.preventDefault());
        this.setState({ loading: true });
        axios
            .get('http://localhost:5000/search/' + this.props.match.params.term)
            .then(res => {
                console.log(res);
                this.setState({
                    loading: false,
                    data: res.data,
                    text:res.data.length>0?'Here is the list of repositories':'No Data Found',
                    clickText:res.data.length>0?true:false
                });
            })
    }
    componentWillUnmount(){
        document.removeEventListener('contextmenu', event => event.preventDefault());
    }

    
    render() {
        return (
            <div>
                <Container style={{marginTop:"4em"}}>
                <Header as='h1' content={this.state.text} textAlign='center' />
                {this.state.clickText?<Header as='h4' content='Click on the repo to know more' textAlign='center' />:null}
                <Segment loading={this.state.loading}>
                    {this.state.data.length>0?this.state.data.map((data,i) => {
                        return <SegmentGenerate key={i} data = {data}/>
                    }):<Segment><center><h1>NO DATA FOUND</h1></center></Segment>}
                </Segment>
                </Container>
                
            </div>
        )
    }
}
export default SearchList;