import Loadable from 'react-loadable'
import React, { Suspense, lazy } from 'react'

const Login = lazy(() => import('./Login'));
import PageLoading from '@/components/Loading/PageLoading'

export default () => <Suspense fallback={<PageLoading />}><Login /></Suspense>
