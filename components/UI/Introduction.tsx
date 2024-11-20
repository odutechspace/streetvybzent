

const Introduction = (props: any) => {
    const fullHeight = props?.isFullHeight ? "lg:h-[100vh]" : "";

    return (
        <section className="w-full bg-black">
            <div className={`xy-pad image_positioning ${fullHeight} relative bg-black/60 z-30`}
                 style={{
                     backgroundImage: `url(${props.imageURL})`,
                 }}
            >
                <div className="flex justify-center items-center h-full">
                    <div className="absolute w-full h-full bg-black/50 z-10"/>
                    <div className="max-width w-full z-20">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;


