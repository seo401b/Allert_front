"use client"
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 70px;
    border-radius: 15px;
    display: flex;
    align-items: flex-start;
    padding: 19px 17px;
    box-sizing: border-box;
    background: ${({ isCheck }) => (isCheck ? "var(--primary-sub)" : "none")};
    transition: background 0.2s;
    margin-bottom: 10px;
`;

const CheckIcon = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 18px;
    cursor: pointer;
    flex-shrink: 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.div`
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const Desc = styled.div`
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 4px;
`;

export default function CheckContainer({ title, desc, isCheck, onCheckClick }) {
    return (
        <Container isCheck={isCheck}>
            <CheckIcon
                src={isCheck ? "/checkbox_active.png" : "/checkbox_inactive.png"}
                alt={isCheck ? "체크됨" : "체크 안 됨"}
                onClick={onCheckClick}
            />
            <Content>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Content>
        </Container>
    );
}
