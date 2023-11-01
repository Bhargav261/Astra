export const findBreakPoint = ({windowWidth, breakpoints}) => {
    for (const bp in breakpoints) {
        if (windowWidth >= breakpoints[bp]) {
            return  bp;
        }
    }
}