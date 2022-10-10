import React from 'react'

type Props = {
  contentFooterProps : string 
}

function Footer(props: Props) {
  return (
    <div>{props.contentFooterProps}</div>
  )
}

export default Footer