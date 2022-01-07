import styled from "styled-components";
import Theme from "./Theme";

const Image = styled.img`
    display: block;
    border-radius: 30px 0px 30px 0px;
    border: 1px solid ${Theme.color.secondary};
    box-shadow: 0px 2px 8px ${Theme.color.secondary}df;
    max-height: 350px;  
    object-fit: contain;
    margin: 0 10px 0 10px;
`;

export default function Imagen({path}) {
    return (
         <Image src={path}/> 
    );
}
