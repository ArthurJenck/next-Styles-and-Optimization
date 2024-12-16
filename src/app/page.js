import Card from "@/components/Card/Card"
import mountain from "../../public/images/mountain-1080.jpg"
import Image from "next/image"

export default function Home() {
    return (
        <main className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-mono">Styles et Optimisation</h1>
            <p className="font-sans mb-6">Arthur Jenck</p>
            <Card />

            <Image
                src={mountain}
                alt="Montagne au lever du soleil"
                sizes="
                (max-width: 500px) 500px,
                (max-width: 800px) 800px,
                (max-width: 1080px) 1080px,
                1080px
                "
            />
        </main>
    )
}
