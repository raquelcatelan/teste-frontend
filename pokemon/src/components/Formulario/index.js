import React from 'react'
import Input from './Input'
import Botao from './Botao'
import Seletor from './Seletor'
import List from '../List'
import { getPoke } from '../../service/base'
import Pokeball from '../../assets/pokeball.svg'

import './style.css'

class Formulario extends React.Component {
    constructor(props) {
        super()
        this.state={
            listaPokemon:[],
            valueInicial:'',
            valueFinal:'',            
            error: '',
            quant:'',
            rol:''        
     }
    }
  
    handleChangeInicial = (value) => {
        this.setState({
          valueInicial: value.target.value
        })
        console.log(this.state.valueInicial);
      }

      handleChangeFinal = (value) => {
        this.setState({
          valueFinal: value.target.value
        })
        console.log(this.state.valueFinal);
      }


      mudaQuant = (value) => {
        this.setState({
          quant: value.target.value
        })
        console.log(value.target.value);
      }

      mudaRol = (value) => {
        this.setState({
          rol: value.target.value
        })
        console.log(value.target.value);
      }
         
         

     handleClick=(ev) =>{
          ev.preventDefault()

          let calculaPoke = this.state.valueFinal - this.state.valueInicial
          
          getPoke(this.state.valueInicial, calculaPoke)
          .then(response=>{              
              
              this.setState({                  
                  listaPokemon: response.data.results          
              })
          })          
          
          .catch(error=> {
              console.log('error')        

          })        
      }

    render(){

    return (
        <div>
        <form className='filtro'>

            <div className='container-input'>
            <Input
                label={Pokeball}
                name='inicial'
                type='text'
                placeholder='Número inicial'
                onChange={this.handleChangeInicial}
            />

            <Input
                label={Pokeball}
                name='inicial'
                type='text'
                placeholder='Número inicial'
                onChange={this.handleChangeFinal}
            />

            </div>

            <div className='container-select'>

            <Seletor
                 onChange={this.mudaQuant} 
                 classeSelect='select'
             >
                 <option value='embranco'>Escolha a quantidade</option>
                 <option value='10'>10</option>
                 <option value='20'>20</option>
                 <option value='30'>30</option>
             </Seletor>
             <Seletor
                 onChange={this.mudaRol} 
                 classeSelect='select'
             >
                 <option value='embranco'>Escolha o tipo</option>
                 <option value='paginacao'>Paginação</option>
                 <option value='scroll'>Scroll</option>                 
             </Seletor>

             </div>

             <Botao
             onClick={this.handleClick}            
             classes='botao-filtrar'
             >
                 Buscar
             </Botao>          

        </form>

        <div>
        {this.state.listaPokemon.map(item => {
            
                            return (
                                <div>
                                     <List
                                     texto={item.name}
                                     imagem={item.url }
                                     ></List>                                    
                                                                        
                                </div>
                            )
                        })
                        }
        </div>


        </div>
    )
}
}

export default Formulario