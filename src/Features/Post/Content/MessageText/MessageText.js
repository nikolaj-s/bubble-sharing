import React from 'react'

export const MessageText = ({text, color, loading, style = {}}) => {

  return (
    <>
    {text?.length > 0 ?
    <p className={loading ? 'message-loading-text' : null} style={{
      color: (style?.color || color),
      fontSize: style?.fontSize,
      textDecoration: style?.textDecoration ? 'underline' : null,
      fontWeight: style?.bold ? '600' : null,
      fontFamily: style?.fontFamily,
      lineHeight: 1.5,
      margin: 0
    }}>{text}</p>
    :null}
    </>
  )
}
