import Post from './Post';
import React from 'react'

function Prontuario(){
    const dados = [
        <Post type={"familiar"} message={"Beto, Zé"}  hasVideo={false} author={"Como gosto de ser chamado?"}/>,
        <Post type={"familiar"} message={"Eu sou pai da Regina e avô da Maria e do Claudinho, os amores da minha vida. Eu tenho 72 anos e meu sonho é ver meus netos se formando."}  hasVideo={false} author={"Quem sou eu?"}/>,
        <Post type={"familiar"} message={"Gosto de uma bossa nova, um samba e sou grande fã do Djavan"}  hasVideo={false} author={"Minhas músicas preferidas"}/>,
        <Post type={"familiar"} message={"Adoro uma feijoada e uma boa cocada"}  hasVideo={false} author={"Gosto de comer:"}/>,
        <Post type={"familiar"} message={"Sobre música, carros antigos, sobre a natureza e o que ela traz de bom pra vida"}  hasVideo={false} author={"Gosto de conversar sobre:"}/>,
        <Post type={"familiar"} message={"Tenho meu fiel companheiro canino Chico"}  hasVideo={false} author={"Animais de estimação:"}/>,
    ]

    return(<React.Fragment>
        <div className="ellipse blue"></div>
        <h1 className="title">PRONTUARIO AFETIVO</h1>
        <div className="feed">
            {dados}
        </div>
        </React.Fragment>
    )

}

export default Prontuario;