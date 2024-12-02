import estilos from '@/componentes/pratica-4/PraticaQuatro.module.css'

export default function ComponentMenu() {
  return(
    <div className={estilos.menu}>
      <ul>
        <li>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
        <li>Opção 4</li>
        <li>Opção 5</li>
      </ul>
    </div>
  )
}