'use client';
import { useState } from 'react';
import MenuItem from '@/componentes/Menu'
import estilos from '@/componentes/pratica-4/PraticaQuatro.module.css'
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu(){
    setMenuAberto(!menuAberto);
  }

  return(
    <main className={estilos.container}>
      <header className={estilos.topo}>
        <button className={estilos.botao} onClick={atualizarMenu}>
        {menuAberto ? <CgClose /> : <CiMenuBurger />}
        </button>
      </header>
      {menuAberto && (
        <MenuItem />
      )}
    </main>
  )
}