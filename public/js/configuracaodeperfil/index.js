function hasToken(){

    const token = localStorage.getItem('id')
    if(token){
      console.log('token')
    }else {
      window.location.replace('/PaginaInicial')
      console.log(' nao token')
    }
  }

  const themeSystem = localStorage.getItem('themeSystem') || 'dark'


  function defineCurrentTheme(theme){
      document.documentElement.setAttribute("data-theme", theme)
  }
  
  defineCurrentTheme(themeSystem)