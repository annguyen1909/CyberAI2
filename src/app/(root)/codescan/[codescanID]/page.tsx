import React from 'react'

const CodeScanDetails = ({ params }: { params: { codescanID: string }}) => {
  return (
    <p className='text-white-1'>CodeScanDetails for {params.codescanID}</p>
  )
}

export default CodeScanDetails