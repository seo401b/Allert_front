"use client"
import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background: transparent;
    box-sizing: border-box;
`;

const BackImage = styled.img`
    height: 16px;
    width: auto;
    cursor: pointer;
`;

export default function Header({ theme }) {
    const handleBack = () => {
        window.history.back();
    };

    const backImageSrc = (theme === "dark") ? "/back.png" : "/back_white.png";
    console.log("현재 이미지 경로:", backImageSrc)

    return (
        <HeaderContainer>
            <BackImage src={backImageSrc} alt="뒤로가기" onClick={handleBack} />
        </HeaderContainer>
    );
}
