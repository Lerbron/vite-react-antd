import React, { memo } from "react";
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import PageHoc from '@/Hoc/PageHoc'
import getSearchParams from "@/utils/getSearchParams";

import { Button } from "antd";

const Login= memo(props => {
 
  const navigate= useNavigate()

  const onLogin= () => {
    sessionStorage.setItem('login', 1)

    let { redirect }= getSearchParams()

    if (redirect) {
      redirect= decodeURIComponent(redirect)
      navigate(redirect, {replace: true})
      return null
    }
    
    navigate(-1)
  }

  return (
    <>
      
      <Button onClick={onLogin}>Login</Button>
    </>
  )
})

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

export default connect(mapStateToProps, null)(PageHoc(Login))