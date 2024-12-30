const heading = React.createElement('h1',{id:'heading'},'Hello World using React')

const parent = React.createElement(
    'div',
    {id:'parent'},
    [
        React.createElement(
            'div',
            {id:'child1'},
            [React.createElement('h1',{},"I'm inside h1 tag"),React.createElement('h2',{},"I'm inside h2 tag")]
        ),
    
    React.createElement(
        'div',
        {id:'child2'},
        [React.createElement('h1',{},"I'm inside h1 tag"),React.createElement('h2',{},"I'm inside h2 tag")]
    )]
)

//need of jsx


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) // 