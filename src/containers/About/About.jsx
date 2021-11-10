import React, { memo } from "react";
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import PageHoc from '@/Hoc/PageHoc'

import { Button } from "antd";

const About= memo(props => {
  let { num } = props
  const navigate= useNavigate()


  const goAbout= () => {
    navigate(-1)
  }

  return (
    <>
      <div>About Page</div>
      <div>{num}</div>
      <Button onClick={goAbout}>Go Back</Button>
    </>
  )
})

const mapStateToProps = (state, ownProps) => {
  return {
    num: state.test.num || 0
  }
}

export default connect(mapStateToProps, null)(PageHoc(About))