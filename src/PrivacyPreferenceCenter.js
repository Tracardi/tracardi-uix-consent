import CookieInfo from "./CookieInfo";
import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function PrivacyPreferenceCenter() {

    const [displayInfo, setDisplayInfo] = useState(false);

    const Info =() => {
        return <Dialog onClose={() => setDisplayInfo(false)} open={displayInfo}>
            <DialogTitle>Privacy Preference Center</DialogTitle>
            <CookieInfo />
            <Button onClick={() => setDisplayInfo(false)}>Close</Button>
        </Dialog>
    }

    return <div style={{display: "flex"}}>
        <div style={{cursor: "pointer", width: 35}}>
            <div onClick={() => setDisplayInfo(true)} style={{width: 20, height: 20, borderRadius: "50%", border: "solid 3px black", display: "flex",
                alignItems: "center", justifyContent: "center"}}><b>i</b></div>
        </div>
        <Info/>
    </div>
}