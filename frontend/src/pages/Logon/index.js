import React from 'react';
import {Filogin} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="Logon-container">
            <section className="from">
                 <img src={logoImg} alt="Be The Hero"/>
                    <from>
                        <h1>Faça seu logon</h1>
                        <imput placeholder="sua ID" />
                        <button type="submit" >Entrar </button>

                        <a href="/registre">
                         <Filogin size={16} color="#E02041"/>
                         Não tenho Cadastro
                        </a>

                    </from>   
            </section>

            <img src={heroesImg} alt="Heroes" /> 
        </div>
    );
}