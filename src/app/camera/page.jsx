// src/app/camera/page.jsx
"use client";

// CameraTestStep1 (수정)

import { useEffect, useRef } from "react";

export default function CameraTestStep1() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !navigator.mediaDevices ||
            typeof navigator.mediaDevices.getUserMedia !== "function"
        ) {
            console.error("Step1: mediaDevices.getUserMedia를 사용할 수 없습니다.");
            return;
        }

        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                console.log("Step1: getUserMedia OK", stream);
                videoRef.current.srcObject = stream;
            })
            .catch((e) => console.error("Step1: getUserMedia Error:", e));

        return () => {
            videoRef.current?.srcObject
                ?.getTracks()
                .forEach((t) => t.stop());
        };
    }, []);

    return (
        <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        </div>
    );
}
