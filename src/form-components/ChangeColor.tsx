import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "brown",
    ];

    let [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    id={`color-${color}`}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={updateColor}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "120px",
                    height: "30px",
                    border: "1px solid black",
                    textAlign: "center",
                    marginTop: "10px",
                    color: "white",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
