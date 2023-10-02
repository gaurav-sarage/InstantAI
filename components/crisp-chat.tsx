"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("29eec8e6-2fd6-40ee-8d1e-985eab4de194")
    }, []);

    return null;
}