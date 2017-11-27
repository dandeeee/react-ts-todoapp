import * as React from 'react'

export default class Header extends React.Component {
    render() {
        return <div style={styles.header}>todos</div>
    }
}

// export default () => {
//     return <h1>Header</h1>
// }


const styles = {
    header: {
        color: '#DC0369',
        fontSize: '40px'
    }
}