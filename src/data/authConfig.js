export const msalConfig = {
  auth: {
    clientId: "cfc20425-339f-48cc-817a-d2c2805bc7ff",
    authority: "https://login.microsoftonline.com/d70c4195-cdf2-4797-b26c-e913e91c68c6",
    redirectUri: "http://localhost:3000"
  }
};

export const loginRequest = {
  scopes: ["User.Read", "Files.Read", "Sites.Read.All"]
};
