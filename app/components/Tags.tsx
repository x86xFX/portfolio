import type { ReactNode } from 'react';

export const ColorTags = {
    SLATE: 'SLATE',
    GRAY: 'GRAY',
    ZINC: 'ZINC',
    NEUTRAL: 'NEUTRAL',
    STONE: 'STONE',
    RED: 'RED',
    ORANGE: 'ORANGE',
    AMBER: 'AMBER',
    YELLOW: 'YELLOW',
    LIME: 'LIME',
    GREEN: 'GREEN',
    EMERALD: 'EMERALD',
    TEAL: 'TEAL',
    CYAN: 'CYAN',
    SKY: 'SKY',
    BLUE: 'BLUE',
    INDIGO: 'INDIGO',
    VIOLET: 'VIOLET',
    PURPLE: 'PURPLE',
    FUCHSIA: 'FUCHSIA',
    PINK: 'PINK',
    ROSE: 'ROSE',
} as const;

type ITagsProps = {
    color: Values<typeof ColorTags>;
    children: ReactNode;
};

const colorToClassMap = {
    [ColorTags.SLATE]: 'bg-slate-400 text-slate-950',
    [ColorTags.GRAY]: 'bg-gray-400 text-gray-950',
    [ColorTags.ZINC]: 'bg-zinc-400 text-zinc-950',
    [ColorTags.NEUTRAL]: 'bg-neutral-400 text-neutral-950',
    [ColorTags.STONE]: 'bg-stone-400 text-stone-950',
    [ColorTags.RED]: 'bg-red-400 text-red-950',
    [ColorTags.ORANGE]: 'bg-orange-400 text-orange-950',
    [ColorTags.AMBER]: 'bg-amber-400 text-amber-950',
    [ColorTags.YELLOW]: 'bg-yellow-400 text-yellow-950',
    [ColorTags.LIME]: 'bg-lime-400 text-lime-950',
    [ColorTags.GREEN]: 'bg-green-400 text-green-950',
    [ColorTags.EMERALD]: 'bg-emerald-400 text-emerald-950',
    [ColorTags.TEAL]: 'bg-teal-400 text-teal-950',
    [ColorTags.CYAN]: 'bg-cyan-400 text-cyan-950',
    [ColorTags.SKY]: 'bg-sky-400 text-sky-950',
    [ColorTags.BLUE]: 'bg-blue-400 text-blue-950',
    [ColorTags.INDIGO]: 'bg-indigo-400 text-indigo-950',
    [ColorTags.VIOLET]: 'bg-violet-400 text-violet-950',
    [ColorTags.PURPLE]: 'bg-purple-400 text-purple-950',
    [ColorTags.FUCHSIA]: 'bg-fuchsia-400 text-fuchsia-950',
    [ColorTags.PINK]: 'bg-pink-400 text-pink-950',
    [ColorTags.ROSE]: 'bg-rose-400 text-rose-950',
};

const Tags = (props: ITagsProps) => (
    <div
        className={`rounded-md px-2 py-1 text-xs font-semibold ${
            colorToClassMap[props.color]
        }`}
    >
        {props.children}
    </div>
);

export { Tags };

export type Values<T> = T[keyof T];