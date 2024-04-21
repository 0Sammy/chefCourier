interface Props {
    heading: string;
    coloredPart: string;
    route: string;
}
const SecondHeader = ({heading, route, coloredPart}: Props) => {
    return ( 
        <main className="relative bg-[url('../../public/images/bg.jpeg')] pt-[8rem] pb-[12rem] bg-cover object-center bg-center text-white selection:bg-orange selection:text-white">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[620]">{heading} {coloredPart}</h1>
                <p className="text-orange1 text-sm md:text-base my-4 font-semibold">Home /<span className="text-white"> {route}</span></p>
            </div>
        </main>
     );
}
 
export default SecondHeader;