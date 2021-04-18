import React from 'react'

// ------ Ways of destructuring ------

// export default function Greet({name, hero}) {
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.k.a {hero}
//             </h1>
//         </div>
//     )
// }

export default function Greet(props) {
    const {name,hero} = props;
    return (
        <div>
            <h1>
                Hello {name} a.k.a {hero}
            </h1>
        </div>
    )
}