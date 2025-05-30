"use client"
import styled from "styled-components";

const AddButtonContainer = styled.div`
    width: 100%;
    height: 55px;
    border-radius: 15px;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 30px;
    border: 1px solid var(--primary-main)
    /* border 없음 */
`;

const AddButtonContainerText = styled.span`
    font-size: 17px;
    font-weight: bold;
    color: var(--primary-main);
`;

export default function AddButton({ onClick }) {
    return (
        <AddButtonContainer onClick={onClick}>
            <AddButtonContainerText>알러지 정보 추가하기</AddButtonContainerText>
        </AddButtonContainer>
    );
}
