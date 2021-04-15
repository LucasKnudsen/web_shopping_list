import React from 'react'

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <h1 data-cy="header" >Knudsens Indkøb</h1>
    </div>
  )
}

export default Header

const styles = {
  headerContainer: {
    textAlign: 'center',
    padding: '50px 0',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}
