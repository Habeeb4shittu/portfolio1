type sizeTypes = {
    size: string;
}
export default function Dot({ size = "" }: sizeTypes) {
    return (
        <span className={`circle ${size == "" ? '' : "big"}`}></span>
    );
}