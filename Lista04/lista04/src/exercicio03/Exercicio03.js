import React, { Component } from 'react';

export default class Exercicio03 extends Component {

    constructor() {
        super();
        this.state = {
            valor01: '', valor02: '', valor03: '', valor04: '',
            valor05: '', valor06: '', valor07: '',
            valor08: '', valor09: '', controle: ''
        }
    }
    marcador01() {

        if (this.state.valor01 !="") return;
        
        debugger
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor01: 'O', controle: 'x' })
        } else {
            this.setState({ valor01: 'X', controle: 'X' })
        }
    }
    marcador02() {
        debugger
        if (this.state.valor02 !="") return;
        
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor02: 'O', controle: 'O' })
        } else {
            this.setState({ valor02: 'X', controle: 'X' })
        }
    }
    marcador03() {
        debugger
        if (this.state.valor03 !="") return;
        
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor03: 'O', controle: 'O' })
        } else {
            this.setState({ valor03: 'X', controle: 'X' })
        }
    }
    marcador04() {
        debugger
        if (this.state.valor04 !="") return;
        
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor04: 'O', controle: 'O' })
        } else {
            this.setState({ valor04: 'X', controle: 'X' })
        }
    }
    marcador05() {
        if (this.state.valor05 !="") return;
        
        debugger
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor05: 'O', controle: 'O' })
        } else {
            this.setState({ valor05: 'X', controle: 'X' })
        }
    }
    marcador06() {
        debugger
        if (this.state.valor06 !="") return;
        
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor06: 'O', controle: 'O' })
        } else {
            this.setState({ valor06: 'X', controle: 'X' })
        }
    }
    marcador07() {
        if (this.state.valor07 !="") return;
        
        debugger
        let currentState = this.state.controle;
        
        if (currentState === '' || currentState === "X") {
            this.setState({ valor07: 'O', controle: 'O' })
        } else {
            this.setState({ valor07: 'X', controle: 'X' })
        }
    }
    marcador08() {
        debugger
        if (this.state.valor08 !="") return;
        
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor08: 'O', controle: 'O' })
        } else {
            this.setState({ valor08: 'X', controle: 'X' })
        }
    }

    marcador09() {
        debugger
        if (this.state.valor09 !="") return;
        
        let currentState = this.state.controle;
        if (currentState === '' || currentState === "X") {
            this.setState({ valor09: 'O', controle: 'O' })
        } else {
            this.setState({ valor09: 'X', controle: 'X' })
        }

    }

    render() {

        return (
            <section>
                <center>
                    <div>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador01()}>{this.state.valor01}</button>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador02()}>{this.state.valor02}</button>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador03()}>{this.state.valor03}</button>
                    </div>
                    <div>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador04()}>{this.state.valor04}</button>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador05()}>{this.state.valor05}</button>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador06()}>{this.state.valor06}</button>
                    </div>

                    <div>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador07()}>{this.state.valor07}</button>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador08()}>{this.state.valor08}</button>
                        <button style={{ width: '60px', height: '60px', borderColor: 'white' }} class="btn btn-success" onClick={() => this.marcador09()}>{this.state.valor09}</button>
                    </div>
                    <br/><br/>
                    <button class="btn btn-danger" onClick={ ()=> this.setState({
                        valor01:'', valor02:'', valor03:'', valor04:'', valor05:'', valor06:'',
                        valor07:'', valor08:'', valor09:'', controle:''
                    })}>Limpar</button>
                </center>
            </section>
        )
    }
}