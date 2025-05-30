"use client"

import styled from "styled-components"
import {useState} from "react";
import Header from "../../components/Header"
import AddButton from "@/components/AddButton";
import CheckContainer from "@/components/CheckContainer";
import checkItems from "../checkItems";
import CameraButton from "@/components/CameraButton";
import { useRouter } from "next/navigation";

const TitleParent = styled.div`
    display: flex;
    height: 86px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 73px;
`

const TitleBar = styled.div`
    font-weight: 600;
    font-size: 28px;
`

const BackImage = styled.img`
    height: 48px;      /* 이미지 세로 크기 조정 */
    width: auto;       /* 가로 비율 자동 */
    cursor: pointer;   /* 마우스 오버 시 손모양 */
    margin-left: 10px;
    margin-top: 2px;
`;

const Txt= styled.div`
    font-size: 15px;
`;

export default function MyPage() {
    const userInfo = '이하람'
    const [isCheck, setIsCheck] = useState(Array(checkItems.length).fill(true));
    const router = useRouter();

    const handleMove = (userInfo) => {

    }

    const handleCamera = () => {
        router.push("/camera");
    };

    const handleCheck = (idx) => {
        setIsCheck((prev) =>
            prev.map((checked, i) => (i === idx ? !checked : checked))
        );
    };

    return (
        <div style={{ padding: 21 }}>
            <Header theme="dark" />
            <TitleParent>
                <TitleBar>{userInfo}님의 Allert</TitleBar>
                <BackImage src="/dataFind.png" alt="이동" onClick={handleMove} />
            </TitleParent>
            <CameraButton onClick={handleCamera} />
            <AddButton />
            {checkItems.map((item, idx) => (
                <CheckContainer
                    key={item.title}
                    title={item.title}
                    desc={item.desc}
                    $isCheck={isCheck[idx]}
                    onCheckClick={() => handleCheck(idx)}
                />
            ))}
        </div>
    );
}