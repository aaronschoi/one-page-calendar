type PossibleClass = string | false | null | undefined;

export const getClasses = (...possibleClasses: PossibleClass[]) => possibleClasses.filter(Boolean).join(" ")