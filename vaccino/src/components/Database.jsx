import React, { useEffect } from 'react'
import axios from 'axios'
import DataCard from './DataCard'

const initState = { load: true, data: [], err: false }

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "LOAD": {
      return {
        ...state
      }
    }
    case "DATA": {
      return {
        ...state, load: false, data: payload,
      }
    }
    case "ERR": {
      return {
        ...state, load: false, err: true
      }
    }

    default: {
      throw new Error(`invalid action type`)
    }
  }
}

const Database = () => {

  const [state, dispatch] = React.useReducer(reducer, initState)

  const getData = () => {
    dispatch({ type: "LOAD" })
    axios.get(`https://vaccino.onrender.com/data`)
      .then(res => {
        const apiData = res?.data?.livedoctor;
        console.log(apiData);
        dispatch({ type: "DATA", payload: res?.data })
      }).catch(err => {
        dispatch({ type: "ERR" })
      })
  }

  useEffect(() => { getData() }, [])

  if (state.load) {
    return (
      <>
        <h1>Loading...</h1>
        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />
      </>
    )
  }

  if (state.err) {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        <h1>Something Went Wrong...</h1>
        <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.webp" alt="" />
      </div>
    )
  }

  return (
    <>
      {/* <div>Database</div> */}
      {
        state?.data?.livedoctor?.map((doc) => (
          <DataCard key={doc.id} {...doc}/>
        ))
      }
    </>
  )
}

export default Database
