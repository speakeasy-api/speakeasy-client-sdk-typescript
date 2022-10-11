import "reflect-metadata";

export function Metadata(anns: string) {
    let annsArr = anns.split(",")
    for (var i = 0; i < annsArr.length - 1; i += 2) {
        Reflect.metadata(annsArr[i], annsArr[i+1])
    }
}
