import React, { memo, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import PageHoc from '@/Hoc/PageHoc'

import { testNum, fetchConferenceList } from '@/actions/testActions'
import { getQuesList } from '@/api/servers'
import { useOnMount } from "@/hooks";

import { Button, message } from "antd";

import './index.scss'

const Home= memo(props => {
  let { num, testNum, fetchConferenceList, activityList }= props
  const navigate= useNavigate()

  console.log('activityList-->', activityList)

  const goAbout= () => {
    navigate('/about')
  }

  const showMessage= () => {
    message.success('Nice')
  }

  useOnMount(() => {
    getQuesList()
    fetchConferenceList()
  })

  return (
    <>
      <div>Home Page</div>

      <div>{num}</div>
      <Button onClick={testNum}>Add</Button>
      <Button onClick={showMessage}>Show Message</Button>
      <Button onClick={goAbout}>Go About</Button>
      <div className='box'></div>
    </>
  )
})

const mapStateToProps = (state, ownProps) => {
  return {
    num: state.test.num || 0,
    activityList: state.test.activityList || []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    testNum: () => dispatch(testNum()),
    fetchConferenceList: params => dispatch(fetchConferenceList(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHoc(Home))
