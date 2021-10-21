import React from 'react'
import { ButtonIcon, IconMenu } from '@1hive/1hive-ui'

export default props => (
  <ButtonIcon
    {...props}
    css={`
      width: auto;
      height: 100%;
      padding: 0 10px 0 20px;
      margin-right: 8px;
    `}
    label="Open menu"
  >
    <IconMenu />
  </ButtonIcon>
)
