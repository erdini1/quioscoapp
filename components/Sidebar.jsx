import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

const Sidebar = () => {

    const { categorias } = useQuiosco()

    return (
        <div className="mt-5">
            <Image
                width={300}
                height={100}
                src={"/assets/img/logo.svg"}
                alt="Imagen logo"
            />

            {/* Como getServerSideProps no puede llamarse en los componentes debemos llamar a la API de next, esto tiene que ser con fetch o axios */}
            <nav className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>

        </div>
    )
}

export default Sidebar