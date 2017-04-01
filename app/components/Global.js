import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';
import Footer from './Footer';


class Global extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    search(){
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'} )
        .then(response => response.json())
        .then(json => {
            let { items } = json;
            this.setState({items})
        });
    }

    render(){
        return(
        <div className="Global">
            <img width="200" className="global-logo" src="http://www.grupoitc.com.br/wp-content/uploads/2014/09/Logo_Grupo_ITC_v3.png" />
            <FormGroup className="FormGroup">
                <InputGroup>
                    <FormControl type="text" placeholder="search for a book" 
                    onChange={event => this.setState({query: event.target.value})}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.search();
                        }
                    }}
                    />
                    <Button className="button" onClick={() => this.search()}>
                        Buscar 
                    </Button>
                </InputGroup>
            </FormGroup>
            <Gallery items={this.state.items}/>
            <Footer />
        </div>
        )
    }
}

export default Global;