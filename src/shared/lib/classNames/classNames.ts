
// type Mods = Record<string, boolean | string>

// export function classNames (cls: string, mods: Mods, additional: string[]): string {
//     return [
//         cls,
//         ...additional,
//         ...Object.entries(mods)
//             .filter(([className, value]) => Boolean(value))
//             .map(([className]) => className)
//     ]
//         .join(' ');
// }


///////////////////////////////////////////////////////////////



type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
