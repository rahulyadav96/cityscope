import styled from "styled-components";


 export const Appbar = styled.div`
    background-color:#4caf50;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    box-shadow: 0 8px 6px -6px black;
    position:sticky;
    padding:15px;
    & > .leftAppbar {
        flex:0.5;

    }

    & > .rightAppbar {
        flex:0.5;
        box-sizing:border-box;
        display:flex;
        flex-direction:row-reverse
    }

` 