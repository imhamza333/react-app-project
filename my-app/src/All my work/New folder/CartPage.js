import React from 'react'
import {MyContext} from "./App"

export default function CartPage() {
    return (
        <div>
            hi from cart
            {/* <MyContext.Consumer>
                {({data, clickHere}) =>( 
                <div>
                    <h3>{data.name}</h3>
                    <h4>{data.roll}</h4>
                    <h5>{data.place}</h5>
                    <button onClick={clickHere}>
                    press this
                    </button>
                </div> 
                )}
            </MyContext.Consumer> */}
        </div>
    )
}
