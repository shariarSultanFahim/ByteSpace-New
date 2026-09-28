import Image from "next/image";

import { PARTNERS_DATA } from "@/data";

export function LogoPartners() {
  return (
    <section className="w-full bg-[#f5f5f6] py-12 lg:py-16" data-node-id="1:1794">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:justify-between lg:gap-[72px]">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.id}
              className="flex h-[42px] items-center justify-center opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={170}
                height={42}
                className="h-[36px] w-auto sm:h-[41px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
