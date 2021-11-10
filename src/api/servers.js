import API from './index'
import http from '@/utils/http'

export const getQuesList = (params={}) => http.get(API.GET_QUESTION_LIST, {params})
