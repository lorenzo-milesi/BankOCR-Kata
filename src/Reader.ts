import table from "./Data/Numbers";

export default class Reader {

    read(element: string) {
        return table.indexOf(element);
    }
}