import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../data/authConfig";

const LoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup(loginRequest);
      console.log("Login successful:", loginResponse);

      const accessToken = loginResponse.accessToken;

      // Petición directa al site de SharePoint
      const res = await fetch("https://graph.microsoft.com/v1.0/sites/gplaneta.sharepoint.com:/sites/EQUIPODISEO", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const siteData = await res.json();
      console.log("siteId:", siteData.id);

      const siteId = siteData.id;

      const drivesRes = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/drives`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const drivesData = await drivesRes.json();
      console.log("Drives:", drivesData);

      const driveId = drivesData.value[0].id; 
      const filePath = "/Principal/Learning%20Analytics/REPORTING/FUENTES/PRESENCIAL/M%C3%81STER/2024/Tracking%20Encuestas%20M%C3%A1ster%202024.xlsx";

      const fileRes = await fetch(`https://graph.microsoft.com/v1.0/drives/${driveId}/root:/${filePath}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

    const fileData = await fileRes.json();
    console.log("Excel file info:", fileData);

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <button onClick={handleLogin}>Iniciar sesión y obtener siteId</button>;
};

export default LoginButton;