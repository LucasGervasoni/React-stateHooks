'use client';
import { useState } from 'react';

export default function PraticaOne() {
  const [mensagem, setMensagem] = useState("Olá Mundo");
  const [atualMensagem, oldMensagem] = useState(false);
  const [btnText, setBtnText] = useState("Clique Aqui");

  function alterarMensagem(){
    if (atualMensagem === true){
      oldMensagem(false);
      setMensagem("Olá Mundo");
      setBtnText("Clique Aqui");
    }else{
      oldMensagem(true);
      setMensagem("Hello World");
      setBtnText("Clique Novamente");
    }
  }

  return(
    <div>
      <p>{mensagem}</p>
      <button onClick={alterarMensagem}>{btnText}</button>
    </div>
  )
}