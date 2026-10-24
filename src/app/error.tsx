"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="loading"><h1>No se pudo cargar esta vista</h1><p>Vuelva a intentarlo. Los registros confirmados se conservan en la base de datos.</p><button onClick={reset}>Reintentar</button></main>;}
