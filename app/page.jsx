import Hero from "../components/Hero/Hero";
import FAQ from "@/components/FAQ/FAQ";

export const metadata = {
  title: "Resetas.lt - IT paslaugos",
  description:
    "Kompiuterių, spausdintuvų remontas, IT paslaugos, programavimas, tinklų administravimas, interneto svetainių kūrimas, įmonių IT aptarnavimas",
};

export default function Page() {
  return (
    <>
      <Hero />
      <FAQ />
    </>
  );
}
