import React, { useEffect } from "react";


export default (ComponentFn) => {
  const PageHoc = (props) => {
    useEffect(() => {
      console.log(`mouned====>`)
      // window.scrollTo({
      //   top: 0,
      //   behavior: 'smooth'
      // })
    }, [])

    return <ComponentFn {...props} />
  }

  return PageHoc
}