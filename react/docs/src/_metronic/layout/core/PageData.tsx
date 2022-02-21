/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useContext, useEffect, useState} from 'react'

export interface PageLink {
  title: string
  isSeparator: boolean
}

export interface PageDataContextModel {
  pageTitle?: string
  setPageTitle: (_title: string) => void
  pageBreadcrumbs?: Array<PageLink>
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
})

const PageDataProvider: React.FC = ({children}) => {
  const [pageTitle, setPageTitle] = useState<string>('')
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([])
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    pageBreadcrumbs,
    setPageBreadcrumbs,
  }
  return <PageDataContext.Provider value={value}>{children}</PageDataContext.Provider>
}

function usePageData() {
  return useContext(PageDataContext)
}

type Props = {
  breadcrumbs?: Array<PageLink>
}

const PageTitle: React.FC<Props> = ({breadcrumbs, children}) => {
  const {setPageTitle, setPageBreadcrumbs} = usePageData()
  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs)
    }
    return () => {
      setPageBreadcrumbs([])
    }
  }, [breadcrumbs])

  useEffect(() => {
    if (children) {
      setPageTitle(children.toString())
    }
    return () => {
      setPageTitle('')
    }
  }, [children])
  return <></>
}

export {PageTitle, PageDataProvider, usePageData}
