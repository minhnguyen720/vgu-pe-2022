import React from "react";
import NumberLabel from "./queue-number";

export interface IInputLabelProps {
  numberQueue?: number | string;
  name?: string;
  note?: string;
  className?: string;
  label?: string;
  queueBackground?: string;
}

const InputLabel: React.FC<IInputLabelProps> = ({
  numberQueue,
  name,
  note,
  className,
  queueBackground,
  label,
}) => {
  return (
    <div className={`${className} mb-3`}>
      <label
        htmlFor={name}
        className="flex items-center text-body-dark font-semibold text-sm leading-none"
      >
        {numberQueue && (
          <NumberLabel
            backgroundColor={queueBackground}
            className="mr-2"
            number={numberQueue}
          />
        )}
        <p className="min-h-5">{label}</p>
      </label>
      {note && <p className="ml-8 text-xs text-gray-400">{note}</p>}
    </div>
  );
};
export default InputLabel;