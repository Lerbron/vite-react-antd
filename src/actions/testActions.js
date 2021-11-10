import * as actionTypes from '@/actions/actionTypes'
import http from '@/utils/http'
import API from '@/api'

export function testNum() {
  return{
    type: actionTypes.TEST_NUM,
  }
}

const getConferenceList= list => {
  return{
    type: actionTypes.GET_ACTIVITY_LIST,
    payload: list
  }
}

export function fetchConferenceList(params) {
  return dispatch => {
		return new Promise( (resolve, reject) => {
      http.get(API.ACTIVITY_LIST, {params})
        .then(res => {
          if (res.data) {
            dispatch(getConferenceList(res.data.items))
            resolve && resolve(res.data.items)
          } else {
            reject && reject(res.data)
          }
        }, (err) => {
          err = JSON.parse(JSON.stringify(err))
          reject && reject(err)
        })
				.catch(err => {
          console.log(err);
          reject && reject(err)
				})
		})
	}
}