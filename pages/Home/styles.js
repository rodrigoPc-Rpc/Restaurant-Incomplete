import styled  from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Container = styled.aside`
   background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    padding: 16px;

    background-color: #ffffffff;

`;

 export const Logo = styled.img`
    margin-bottom: 15px;
`;  

 export const Map = styled.div`
    background-color:red;
    width: 500px;
 `;

 export const CarouselTitle = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    color: #000000B3;
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
 `;