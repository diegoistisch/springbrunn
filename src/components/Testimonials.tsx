import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20" id="contact">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-white">We let our work speak for itself, but we value client feedback too.</h3>
          <div className="card p-6 mt-6 flex items-start gap-4 text-white">
            <Image
              src="/brand/logo_small.jpg"
              alt="Member"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-white/70">
                “The classes are engaging, the trainers are top-notch, and the energy here is unbeatable. I feel stronger and more confident than ever!”
              </p>
              <p className="mt-3 text-sm font-medium text-white">Jesse Cooper</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="card h-36 grid place-items-center text-white/60">★ ★ ★ ★ ★</div>
          <div className="card h-36 grid place-items-center text-white/60">10k+ members</div>
          <div className="card h-36 grid place-items-center text-white/60">Modern equipment</div>
          <div className="card h-36 grid place-items-center text-white/60">Expert coaches</div>
        </div>
      </div>
    </section>
  );
}
