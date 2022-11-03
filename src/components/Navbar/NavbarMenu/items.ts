import { nanoid } from "nanoid";

interface Iitems {
    id: string,
    text: string,
    to: string
}

const items: Iitems[] = [
    {
        id: nanoid(),
        text: "Exchange",
        to: "/"
    },
    {
        id: nanoid(),
        text: "Rates",
        to: "/rates"
    }
];

export default items;