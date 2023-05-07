"use client";

import Select from "react-select";
import { FC } from "react";

import useCountries from "@/app/hooks/useCountries";

export type CounrtrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface ICountrySelectProps {
  value?: CounrtrySelectValue;
  onChange: (value: CounrtrySelectValue) => void;
}

const CountrySelect: FC<ICountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  const FormatOptionLabel = ({ option }: any) => (
    <div className="flex flex-row items-center gap-3">
      <div>{option.flag}</div>
      <div>
        {option.label},
        <span className="text-neutral-500 ml-1">{option.region}</span>
      </div>
    </div>
  );

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CounrtrySelectValue)}
        formatOptionLabel={(option: any) => (
          <FormatOptionLabel option={option} />
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
