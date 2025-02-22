import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-green-500"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-justify sm:mt-24 ">Ofrezco servicios de desarrollo web especializados en la creacion
                            de sitios web y aplicaciones atractivas y funcionales.Utilizando
                            las ultimas tecnologias, como HTML, CSS, Tailwind CSS, JavaScript,
                            React, Java, Spring Boot, php, Angular, diseño interfaces de usuario
                            intuitivas y responsivas que reflejan la identidad de marca de mis clientes
                            mejoran su presencia en linea</p>
                    <button className="px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;