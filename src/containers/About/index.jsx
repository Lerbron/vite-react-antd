import Loadable from 'react-loadable'
import React, { Suspense, lazy } from 'react'

const About = lazy(() => import('./About'));
import PageLoading from '@/components/Loading/PageLoading'

export default () => <Suspense fallback={<PageLoading />}><About /></Suspense>
