import styled from 'styled-components'


export const Base = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    /* flex-direction:column; */
    padding-top:40vh;
`

export const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 25px;
    margin: 10px;
`

export const Listar = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:10vh;
`
export const Form = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:40vh;
`

// const Container = () => {
//  return (
//     <div>
//         <Base>Base normal</Base>
//         <Button>Normal Button</Button>
//         <Button primary>Primary Button</Button>
//     </div>

//  )

// }
