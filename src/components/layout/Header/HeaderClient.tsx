'use client'

import { Backdrop } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderTop from "./UI/HeaderTop";
import HeaderTools from "./UI/HeaderTools";
import { useScrollLock } from "@/src/hooks/useScrolLock";

export default function HeaderClient() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    useScrollLock(isMenuOpen);

    return (
        <>
            <Backdrop
                open={isMenuOpen}
                onClick={() => { setMenuOpen(!isMenuOpen) }}
                sx={{
                    zIndex: 9
                }}
            >
            </Backdrop >
            <HeaderTools
                isMenuOpen={isMenuOpen}
                setMenuOpen={setMenuOpen}
            />
        </>
    );
}