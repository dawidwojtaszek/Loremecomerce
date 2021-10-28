import styled from "styled-components";
import { Box, BoxIcon, BoxInfo, BoxTitle, BoxSubtitle } from './box'

const Benefits = styled.div`
    margin-top: 4rem;
`

Benefits.Container = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`
Benefits.Box = Box;
Benefits.BoxIcon = BoxIcon;
Benefits.BoxInfo = BoxInfo;
Benefits.BoxSubtitle = BoxSubtitle;
Benefits.BoxTitle = BoxTitle;

export default Benefits;