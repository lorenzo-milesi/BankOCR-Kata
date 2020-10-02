import table from "./Data/Numbers";

export default class Reader {

    read(element: string): string {
        return table.indexOf(element).toString();
    }
}