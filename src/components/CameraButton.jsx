"use client"
import styled from "styled-components";

const CameraButtonContainer = styled.div`
    width: 100%;
    height: 55px;
    border-radius: 15px;
    background: var(--primary-main);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 10px;
    /* border 없음 */
`;

const CameraText = styled.span`
    font-size: 17px;
    font-weight: bold;
    color: #fff; /* 필요하면 var(--white)로 변경 */
`;

export default function CameraButton({ onClick }) {
    return (
        <CameraButtonContainer onClick={onClick}>
            <CameraText>식품 촬영하기</CameraText>
        </CameraButtonContainer>
    );
}
