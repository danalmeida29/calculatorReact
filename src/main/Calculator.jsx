import React, {Component} from 'react';
import Button from '../components/Button';
import './Calculator.css';
import Display from '../components/Display';

const initialState ={
    displayValue:'0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {

    state = {...initialState}

    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
              this.clearMemory();
            }
          });
    }

    componentWillUnmount() {
        // Remove o event listener para evitar vazamento de memória
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keydown', this.clearMemory);
    }

    handleKeyDown = event => {
        // Verifica se a tecla pressionada é um número ou um ponto
        if (/^\d|\.$/.test(event.key)) {
            event.preventDefault();
            this.addDigit(event.key);
        }
    };

    clearMemory(){
        this.setState({...initialState})
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        if(n ==='.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue ==='0'
            || this.state.clearDisplay.Display;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, clearDisplay: false})
        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values})
            console.log(values)
        }
    }

    render(){

        return(
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="X" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label='+' click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation/>
            </div>
        );
    }
}