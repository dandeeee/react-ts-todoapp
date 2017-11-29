import * as React from 'react'

export default class TodosPane extends React.Component {
    render() {
        return <div style={styles.pane}>{this.props.children}</div>
    }
}

const styles = {
    pane: {
        position: 'relative' as 'relative',
        width: '300px',
        margin: '0 auto',
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)'
    }
}