import styled from "styled-components";

const RatingBox = styled.div`
    width:141px;
    height: 25px;
    font-size: 25px;
    padding: 0;
    color: #E8E8E8;
    position: relative;
    font-family: 'Arial'
    `
const Calc = styled.div`
    width: ${({ width }) => (`${width}%`)};
    height: 25px;
    display: flex;
    overflow: hidden;
    font-size: 25px;
    padding: 0;
    color: #FCBF49;
    position: absolute;
    top:0;
    left: 0;

`

RatingBox.Calc = Calc;

export default RatingBox;