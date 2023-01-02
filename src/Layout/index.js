import React from "react"

const index = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </>
  )
}

export default index
