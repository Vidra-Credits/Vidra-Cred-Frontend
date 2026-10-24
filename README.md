# VidraCred · Frontend

Interfaz de VidraCred, aplicación de cuenta corriente para Vidra Plastic. Next.js y TypeScript.

La API vive en el repositorio **Vidra-Cred-Backend**. Este frontend reenvía `/api/*` a esa API, así que el backend debe estar en ejecución.

## Ejecutar

1. Inicie el backend (`docker compose up -d --build` en Vidra-Cred-Backend). Queda en `http://127.0.0.1:3000`.
2. En este repositorio:

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

3. Abra `http://localhost:3001`.

`BACKEND_URL` indica dónde está la API. Se lee al compilar, así que después de cambiarla ejecute `npm run build` otra vez.

## Estructura

- `src/app/`: página principal, diseño y errores.
- `src/components/workspace.tsx`: pantallas de la aplicación.
- `src/lib/finance.ts`, `src/lib/legal.ts`: cálculos y referencias mostrados en la interfaz.
- `next.config.ts`: reenvío de `/api` y cabeceras de seguridad.
