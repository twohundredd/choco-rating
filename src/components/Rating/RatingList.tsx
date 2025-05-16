import React from "react";
import { RatingBlock } from "./RatingBlock";
import { CHOCO_BARS } from "../../constants";

type RatingListProps = {
    answers: Record<string, number | null>;
    onChange: (id: string, value: number | null) => void;
};

export const RatingList: React.FC<RatingListProps> = React.memo(({ answers, onChange }) => {
    return (
        <>
            {CHOCO_BARS.map(bar => (
                <RatingBlock
                    key={bar.id}
                    image={bar.image}
                    label={bar.label}
                    value={answers[bar.id] ?? null}
                    onChange={value => onChange(bar.id, value)}
                />
            ))}
        </>
    );
});