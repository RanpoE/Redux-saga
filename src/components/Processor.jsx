import React, { useState } from 'react'

const Processor = () => {
    const [progress, setProgress] = useState(0);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState("Not started");

    const startJob = () => {
        const socket = new WebSocket("ws://localhost:8000/ws/start");

        socket.onopen = () => {
            const items = Array.from({ length: 10 }, (_, i) => ({
                name: `Item ${i + 1}`,
                value: `Value ${i + 1}`
            }));
            socket.send(JSON.stringify({ items }));
            setStatus("Processing...");
        };

        socket.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            if (msg.status === "complete") {
                setStatus("Job complete!");
                setProgress(total);
            } else {
                setProgress(msg.processed);
                setTotal(msg.total);
            }
        };

        socket.onerror = () => {
            setStatus("WebSocket error.");
        };

        socket.onclose = () => {
            console.log("WebSocket closed.");
        };
    };

    const percent = total > 0 ? (progress / total) * 100 : 0;
    return (
        <div style={{ padding: 40 }}>
            <h1>FastAPI Job Tracker</h1>
            <button onClick={startJob}>Start Job</button>
            <p>Status: {status}</p>
            <div style={{
                background: "#ccc", height: 30, width: "100%", marginTop: 20, borderRadius: 5
            }}>
                <div style={{
                    background: "green", height: "100%", width: `${percent}%`, transition: "width 0.3s", borderRadius: 5
                }} />
            </div>
            <p>{progress} / {total}</p>
        </div>
    )
}

export default Processor
