import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cart-icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#D79771',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'white',
        borderRadius: '50%',
        padding: '1px 8px',
        postiton: 'absolute',
        right: 0,
        top: -7,
    }
};

export default Navbar;