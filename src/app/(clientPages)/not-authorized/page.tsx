const page = () => {
    return ( 
        <main className="bg-orange flex flex-col items-center justify-center h-screen text-white text-center p-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">Sorry, you were not authorized to view the contents of that page.</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text:2xl mt-2">If you think is a mistake, contact the administration.</p>
        </main>
     );
}
 
export default page;