import Loadable from 'react-loadable'
import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('./Home'));
import PageLoading from '@/components/Loading/PageLoading'

export default () => <Suspense fallback={<PageLoading />}><Home /></Suspense>

