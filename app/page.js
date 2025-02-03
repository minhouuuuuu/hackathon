import TextClip from "@/components/TextClip";
import TicketSales from "@/components/TicketSales"
import SectionActu from "@/components/SectionActu";

export default function Home() {
  return (
    <main className="">
      <section>
        <TextClip />
      </section>
      <section>
        <TicketSales />
      </section>
      <SectionActu/>
    </main>
  );
}
