
import React from 'react'
import { connect } from 'react-redux'
import MenuIcon from 'react-icons/lib/md/menu'
import CloseIcon from 'react-icons/lib/md/close'
import { colors } from '../theme/constants'
import util from '../theme/utility'
import { css } from 'aphrodite'
import { setShowMenu } from '../redux/reducer' 

const enhance = connect(({ showMenu }) => ({ showMenu }), { setShowMenu })

export default enhance(props => {
  const iconProps = {
    color: colors.pink,
    onClick: () => props.setShowMenu(!props.showMenu)
  }
  return (
    <div className={css(util.px1)}>
      <Choose>
        <When condition={!props.showMenu}>
          <MenuIcon {...iconProps} />
        </When>
        <Otherwise>
          <CloseIcon {...iconProps} />
        </Otherwise>
      </Choose>
    </div>
  )
})
