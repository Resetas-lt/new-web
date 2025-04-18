import Hero from "../components/Hero/Hero";
import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Contacts from "@/components/Contacts/Contacts";

export const metadata = {
  title:
    "Resetas.lt - Kompiuterių remontas, spausdintuvų remontas, IT paslaugos, programavimas",
  description:
    "Kompiuterių, spausdintuvų remontas, IT paslaugos, programavimas, tinklų administravimas, interneto svetainių kūrimas, įmonių IT aptarnavimas",
};

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <FAQ />
      <Contacts />
    </>
  );
}
