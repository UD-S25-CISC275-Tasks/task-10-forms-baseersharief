import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    let [attempts, setAttempts] = useState<number>(3);
    let [requestAmount, setRequestAmount] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Group>
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAmount}
                    onChange={(e) => setRequestAmount(e.target.value)}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    if (requestAmount !== "") {
                        setAttempts(attempts + parseInt(requestAmount));
                    }
                }}
            >
                Gain
            </Button>
        </div>
    );
}
