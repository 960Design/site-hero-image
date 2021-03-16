import React from 'react'

const year = new Date().getFullYear();

export const Copyright = () => {
  return(
      <>
        Copyright &copy; {year} 960Design, Inc.
      </>
    )
}