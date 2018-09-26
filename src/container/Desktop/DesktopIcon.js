import React from 'react';

const desktopIcon = (props) => {
    const { item, highlighted } = props

    return (

        <div
            className='App-Icon'
            onClick={props.Click}
            onDoubleClick={props.DoubleClick}
            item={item}
            style={{
                width: '100px',
                height: '100px',
                position: 'absolute',
                zIndex: '400',
                left: item.left,
                top: item.top,
                padding: '5px',
                paddingTop: '10px',
                backgroundColor: highlighted === item.id ? 'rgba(16, 51, 80, 0.28)' : 'transparent',
                border: highlighted === item.id ? '1px dotted rgba(16, 51, 80, 0.28)' : 'none',
            }}
        >
            <div
                className='App-Icon__SVG'
                style={{
                    width: '70px',
                    height: '70px',
                    backgroundImage: `url(${item.SVG})`,
                    backgroundRepeat: 'no-repeat',
                }}
            >

            </div>
            <div
                style={{
                    backgroundColor: highlighted === item.id ? '#0004FF' : 'transparent',
                    color: highlighted === item.id ? '#F2F2FF' : 'black',
                    margin: '5px',
                    marginTop: '8px',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                }}>
                {item.name}
            </div>
        </div >


    )

}

export default desktopIcon;