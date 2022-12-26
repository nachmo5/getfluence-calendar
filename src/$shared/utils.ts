import { addDays, format } from "date-fns"
import { enUS } from 'date-fns/locale';

export const arrayFrom = (n: number) => [...Array(n).keys()]


export const getMonthDays = (year: number, month: number): number[] => {
    const nbOfDays = new Date(year, month, 0).getDate()
    return arrayFrom(nbOfDays).map(d => d + 1)
}

export const classNames = (...names: (string | [string, boolean])[]): string => names.map(name => {
    if (Array.isArray(name)) {
        if (name[1]) return name[0];
        else return null
    }
    return name;
}).filter(n => !!n).join(" ")


export const getMonthName = (month: number) => format(new Date(2000, month - 1, 1), 'LLLL', { locale: enUS })

export const formatTime = (hour: number) => new Date(2000, 1, 1, hour).toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })

