import { useEffect, useState } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async() =>{

    setState({
      ...state,
      isLoading:true
    })

    try {
      const res = await fetch(url)
      if (res?.ok){
        const data = await res.json()
        setTimeout(() => {
          setState({
            data,
            isLoading: false,
            hasError:null
          })
        }, 1000);
      }
      else {
        setState({
          ...state,
          hasError: 'Error inesperado'
        })
      }
      
    } catch (error) {
      console.log(error,"catch error")
      setState({
        ...state,
        isLoading:true,
        hasError: error
      })
    }

  }

  useEffect(() => {
    getFetch()
  }, [url])
  
  return {
    ...state,
    state
  }
}
