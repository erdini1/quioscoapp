import Image from "next/image"

const Sidebar = () => {
    return (
        <>
            <Image
                width={300}
                height={100}
                src={"/assets/img/logo.svg"}
                alt="Imagen logo"
            />

            {/* Como getServerSideProps no puede llamarse en los componentes debemos llamar a la API de next, esto tiene que ser con fetch o axios */}
            

        </>
    )
}

export default Sidebar