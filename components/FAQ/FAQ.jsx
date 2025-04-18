import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div
      className="flex flex-col w-full md:scroll-m-10 scroll-m-12"
      id="dazniausiai-uzduodami-klausimai"
    >
      <div className="bg-linear-to-br from-gray-200 to-red-50 dark:from-slate-900 dark:to-red-900 2xl:rounded-bl-full 2xl:rounded-tr-full p-10">
        <div className="md:w-2/3 mx-auto">
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-sans">D.U.K.</span>
            <span className="text-xs text-gray-500 font-sans font-semibold">
              Dažniausiai užduodami klausimai
            </span>
          </div>
        </div>

        <div className="flex mx-auto 2xl:w-2/5 lg:w-1/2 shadow-lg rounded-lg mt-2 bg-gray-500/5 backdrop-filter backdrop-blur-xs">
          <Accordion type="single" collapsible className="w-full p-4 md:ml-6">
            <AccordionItem value="1">
              <AccordionTrigger>
                Ar remontuojate atvykdami pas klientą?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Taip.</span> Stengiamės, kad
                kiekvienam klientui būtų patogu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2">
              <AccordionTrigger>
                Ar turite veikiančią el. parduotuvę?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Kol kas ne.</span> Visus užsakymus
                priimame telefonu ar el. paštu. Netolimoje ateityje planuojame
                atsidaryti el. parduotuvę.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3">
              <AccordionTrigger>
                Ar pas jus galima įsigyti naują įrenginį?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Taip.</span> Mes prekiaujame ne tik
                kompiuteriais ar spausdintuvais. Galime Jums pasiūlyti įvairių
                prekių. <br /> Taip pat ir naujų/naudotų kompiuterių,
                spausdintuvų, monitorių ir t.t.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="4">
              <AccordionTrigger>
                Ar galite prijungti naują spausdintuvą?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Taip.</span> Mes galime pasirūpinti
                viskuom, nuo spausdintuvo pardavimo iki prijungimo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="5">
              <AccordionTrigger>
                Ar prekiaujate spausdintuvų kasetėmis?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Taip.</span> Viena iš mūsų įmonės
                veiklų yra prekyba spausdintuvų kasetėmis, spausdinimo
                popieriumi bei kitomis spausdinimo eksploatacinėmis medžiagomis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="6">
              <AccordionTrigger>
                Ar remontuojate mobiliuosius įrenginius?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Ne.</span> Kol kas telefonų,
                planšečių ir kitų mobiliųjų įrenginių neremontuojame.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="7">
              <AccordionTrigger>
                Ar teikiate paslaugas ne darbo dienomis/laiku?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Taip.</span> Klientai turintys IT
                aptarnavimo sutartį yra aptarnaujami ir ne darbo dienomis/laiku.
                <br /> Klientai be sutarties atskiru susitarimu taip pat gali
                kreiptis dėl paslaugos suteikimo ne darbo dienomis/laiku.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="8">
              <AccordionTrigger>
                Ar galima su jumis pasikonsultuoti dėl naujo įrenginio
                įsigijimo?
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold">Taip.</span> Galime Jums padėti
                išsirinkti geriausią variantą pagal Jūsų poreikius.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
