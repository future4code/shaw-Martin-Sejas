import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../services/Routes/coordinator';

function ErrorPage() {
  const navigate = useNavigate(); 

  useEffect( ()=>{ goToHomePage(navigate)},[])


  return (
    <div>Erro: Pagina não encontrada</div>
  )
}

export default ErrorPage